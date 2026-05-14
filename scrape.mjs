import * as cheerio from "cheerio";
import fs from "fs";
import https from "https";

const urlOrFile = process.argv[2] || "https://www.trackcouriers.io/fedex-tracking";
const outFile = process.argv[3] || "/tmp/fedex-data.json";

function parseHTML(html) {
    const $ = cheerio.load(html);

    const data = {
        about: "",
        services: [],
        trackingStatusList: {
            description: "",
            table: [],
        },
        faq: [],
    };

    $("h2").each((i, el) => {
        const text = $(el).text().trim().toLowerCase();
        
        let targetContainer = $(el).closest('.row');
        if (!targetContainer.length) targetContainer = $(el);

        let nextHeaderContainer = targetContainer.nextAll().filter(function() {
            return $(this).is('h2') || $(this).find('h2').length > 0;
        }).first();

        let contentNodes = nextHeaderContainer.length ? targetContainer.nextUntil(nextHeaderContainer) : targetContainer.nextAll();

        if (text.includes("about") || text.includes("overview") || text.includes("history") || text.includes("traking information") || text.includes("tracking information")) {
            let pNodes = contentNodes.find("p").addBack("p");
            let listNodes = contentNodes.find("li").addBack("li");
            let aboutText = pNodes.map((i, p) => $(p).text().trim()).get().join("\n\n");
            let listText = listNodes.map((i, li) => "- " + $(li).text().trim()).get().join("\n");
            
            let combined = [aboutText, listText].filter(t => t).join("\n\n");
            if (data.about) {
                data.about += "\n\n" + combined.trim();
            } else {
                data.about = combined.trim();
            }
        }

        if (text.includes("tracking service") || text.includes("fedex service") || text.includes("tracking in india") || text.includes("service:") || text.includes("post services")) {
            let pNodes = contentNodes.find("p").addBack("p");
            if (pNodes.length) {
                pNodes.each((i, p) => {
                    const htmlContent = $(p).html();
                    const lines = htmlContent.split(/<br\s*\/?>/i);
                    lines.forEach(line => {
                        const cleanLine = cheerio.load(line).text().trim();
                        if (cleanLine.includes(':')) {
                            const parts = cleanLine.split(':');
                            data.services.push({ name: parts[0].trim(), description: parts.slice(1).join(':').trim() });
                        }
                    });
                });
                
                if (data.services.length === 0) {
                    data.services.push({ name: "Service Details", description: pNodes.first().text().trim() });
                }
            }
            
            let listItems = contentNodes.find("li").addBack("li");
            if (listItems.length) {
                listItems.each((j, li) => {
                    const liText = $(li).text().trim().replace(/\s+/g, " ");
                    if (liText.includes(':')) {
                        const parts = liText.split(':');
                        const alreadyExists = data.services.some(s => s.name === parts[0].trim());
                        if (!alreadyExists) {
                            data.services.push({ name: parts[0].trim(), description: parts.slice(1).join(':').trim() });
                        }
                    } else {
                        const alreadyExists = data.services.some(s => s.name === liText);
                        if (!alreadyExists && !data.services.some(s => s.description.includes(liText))) {
                            data.services.push({ name: liText, description: "" });
                        }
                    }
                });
            }
        }

        if (text.includes("tracking status list") || text.includes("tracking statuses") || text.includes("tracking status")) {
            let pNodes = contentNodes.find("p").addBack("p");
            data.trackingStatusList.description = pNodes.map((i, p) => $(p).text().trim()).get().join("\n\n").trim();

            const table = contentNodes.find("table").addBack("table").first();
            table.find("tbody tr").each((j, tr) => {
                const tds = $(tr).find("td");
                if (tds.length >= 2) {
                    data.trackingStatusList.table.push({
                        status: $(tds[0]).text().trim(),
                        description: $(tds[1]).text().trim(),
                    });
                }
            });
        }
    });

    $("button[aria-expanded]").each((i, el) => {
        const q = $(el).text().trim();
        const aText = $(el).parent().next(".accordion-content").text().trim();
        let a = $(el).parent().next("div").text().trim() || $(el).closest(".accordion-item").find(".collapse").text().trim() || aText;

        if (q && a) {
            data.faq.push({ q, a });
        }
    });

    const scriptTags = $('script[type="application/ld+json"]');
    scriptTags.each((i, el) => {
        try {
            const json = JSON.parse($(el).html());
            if (json["@type"] === "FAQPage" && json.mainEntity) {
                json.mainEntity.forEach((item) => {
                    if (!data.faq.find(f => f.q === item.name)) {
                        data.faq.push({
                            q: item.name,
                            a: item.acceptedAnswer.text.replace(/<[^>]*>?/gm, ""),
                        });
                    }
                });
            }
        } catch (e) {}
    });

    fs.writeFileSync(outFile, JSON.stringify(data, null, 2));
    console.log(`Data extracted to ${outFile}`);
}

if (urlOrFile.startsWith('http')) {
    https.get(urlOrFile, (res) => {
        let html = '';
        res.on('data', chunk => html += chunk);
        res.on('end', () => parseHTML(html));
    }).on('error', e => console.error(e));
} else {
    parseHTML(fs.readFileSync(urlOrFile, 'utf-8'));
}
