export const getSupportContent = (slug, defaultName) => {
	const defaultContent = {
		title: `${defaultName} Customer Care`,
		about: `${defaultName} is a leading logistics and supply chain services company providing a wide range of services including express parcel delivery, freight, and supply chain solutions. For any assistance or inquiries, you can reach out to ${defaultName}'s customer care through the following channels:`,
		contacts: [
			{ title: "📞 Customer Support (General)", value: "+91-124-671-9500", type: "text" },
			{ title: "📞 Sales Enquiries", value: "+91-11-3315-5000", type: "text" },
			{ title: "✉️ Customer Support Email", value: `support@${defaultName.toLowerCase().replace(/\s+/g, "")}.com`, type: "email" },
			{ title: "✉️ Sales Email", value: `sales@${defaultName.toLowerCase().replace(/\s+/g, "")}.com`, type: "email" },
		],
	};

	const supportData = {
		"amazon-customer-support": {
			title: "Amazon Customer Care",
			about: `Amazon is a global e-commerce and technology company renowned for its vast online marketplace, diverse product selection, and technological innovations. Founded by Jeff Bezos in 1994, Amazon started as an online bookstore and has since expanded into various product categories, including electronics, apparel, groceries, and digital streaming services. The company revolutionized online shopping with its customer-centric approach, fast delivery options like Amazon Prime, and robust logistics network. Beyond e-commerce, Amazon has ventured into cloud computing (Amazon Web Services), artificial intelligence (Alexa), and entertainment (Amazon Prime Video), solidifying its position as one of the world's largest and most influential technology companies.

For assistance with tracking, shipping, or any other inquiries, you can reach out to Amazon customer support through their phone numbers or website. They provide comprehensive help and support to ensure smooth and reliable service.`,
			contacts: [
				{ title: "📞 India Toll-Free Number", value: "1800-3000-9009", type: "text" },
				{ title: "🌐 Contact Website", value: "https://www.amazon.in/contact-us", type: "link" }
			],
			locations: [
				{ city: "Delhi", phone: "1800-3000-9009", address: "2nd Floor, Tower-A, Advant Navis Business Park, Plot No-7, Sector-142, Noida, Uttar Pradesh, India - 201305" },
				{ city: "Mumbai", phone: "1800-3000-9009", address: "10th Floor, Pinnacle Business Park, Corporate Road, Near Akruti SMC, Prahladnagar, Maharashtra, India - 380015" },
				{ city: "Bangalore", phone: "1800-3000-9009", address: "2nd Floor, Safina Towers, Opposite to J.P. Techno Park, No.3, Ali Asker Road, Bangalore India - 560052" },
				{ city: "Chennai", phone: "1800-3000-9009", address: "5th Floor, Mfar Manyata Tech Park, Nagavara, Bengaluru, Karnataka, India - 560045" },
				{ city: "Hyderabad", phone: "1800-3000-9009", address: "2nd Floor, Block-A & Block-B, Survey Number-109,110,111/2, Nanakramguda Village, Serlingamplayy Mandal, Hyderabad India - 500032" }
			]
		},
		"fedex-customer-support": {
			title: "FedEx Customer Support Details",
			about: `FedEx Express Ltd. is a global leader in courier delivery services, founded in 1971 by Frederick W. Smith. Offering express, ground, international shipping, and logistics solutions, FedEx operates in over 220 countries and territories. With a focus on innovation, reliability, and customer satisfaction, FedEx continues to redefine the logistics industry.

FedEx is a renowned global courier delivery services company. Here are the customer care details for FedEx:`,
			contacts: [
				{ title: "📞 Customer Support (General)", value: "1800 419 4343 (Toll-Free)", type: "text" },
				{ title: "📞 International Customer Support", value: "+91 22 25714444", type: "text" },
				{ title: "✉️ Customer Support Email", value: "indiaservices@fedex.com", type: "email" }
			],
			locations: [
				{ city: "New Delhi", phone: "1800 419 4343", address: "2nd Floor, West Wing, Worldmark 1, Aerocity, IGI Airport, New Delhi, Delhi, India - 110037" },
				{ city: "Bangalore", phone: "1800 419 4343", address: "#24, Unit No. 101, 1st Floor, Brigade South Parade, M.G. Road, Bangalore, Karnataka, India - 560001" },
				{ city: "Kolkata", phone: "1800 419 4343", address: "South City Pinnacle, 4th Floor, Block EP & GP, Plot IIF/II G, New Town, Rajarhat, Kolkata, West Bengal, India - 700156" },
				{ city: "Chennai", phone: "1800 419 4343", address: "#11, GST Road, St Thomas Mount, Chennai, Tamil Nadu, India - 600016" },
				{ city: "Hyderabad", phone: "1800 419 4343", address: "H. No. 1-8-384/385/386, 2nd Floor, Gowra Grand, S.P. Road, Begumpet, Hyderabad, Andhra Pradesh, India - 500003" },
				{ city: "Pune", phone: "1800 419 4343", address: "401 & 402, 4th Floor, Fortuna Building, Lane No. 6, Koregaon Park, Pune, Maharashtra, India - 411001" },
				{ city: "Mumbai", phone: "1800 419 4343", address: "Unit No 20, 1st Floor, A To Z Industrial Estate, Ganpatrao Kadam Marg, Lower Parel (West), Mumbai, Maharashtra, India - 400013" },
				{ city: "Ahmedabad", phone: "1800 419 4343", address: "Parshwanath Business Park, Sarkhej - Gandhinagar Highway, Near KFC, Prahlad Nagar, Ahmedabad, Gujarat, India - 380015" }
			]
		},
		"dhl-customer-support": {
			title: "DHL Customer Support Details",
			about: `DHL is a division of the German logistics company Deutsche Post DHL Group, providing international courier, parcel, and express mail services. Founded in 1969 to deliver documents between San Francisco and Honolulu, the company expanded its service throughout the world by the late 1970s. DHL is now a global leader in the logistics industry, offering a wide range of services including express parcel and freight shipping, supply chain management, and e-commerce solutions.

For assistance with tracking, shipping, or any other inquiries, you can reach out to DHL customer support through their phone numbers or website. They provide comprehensive help and support to ensure smooth and reliable service.`,
			contacts: [
				{ title: "📞 Customer Support (United States)", value: "1-800-225-5345 (1-800-CALL-DHL)", type: "text" },
				{ title: "✉️ DHL Express (United States)", value: "DHLExpressCustomerService@dhl.com", type: "email" },
				{ title: "✉️ DHL Global Forwarding", value: "customerservice@dhl.com", type: "email" },
				{ title: "✉️ DHL eCommerce Solutions", value: "customerservice@dhl.com", type: "email" }
			],
			locations: [
				{ city: "Germany", phone: "+49-228-182-0", address: "Corporate Office:\nCharles-de-Gaulle-Str. 20 Bonn, Germany - 53113" },
				{ city: "New York", phone: "+1-800-225-5345", address: "570 Washington Blvd, Jersey City, NJ, United States - 07310" },
				{ city: "California", phone: "+1-800-225-5345", address: "1910 S. Del Mar Avenue, San Gabriel, CA, United States - 91776" },
				{ city: "Chicago", phone: "+1-800-225-5345", address: "1200 S. Wolf Rd, Des Plaines, IL, United States - 60018" }
			]
		},
		"ups-customer-support": {
			title: "UPS Customer Support Details",
			about: `UPS (United Parcel Service) is a global leader in logistics, offering a wide range of solutions including the transportation of packages and freight, the facilitation of international trade, and the deployment of advanced technology to more efficiently manage the world of business. Founded in 1907, UPS is headquartered in Atlanta, Georgia, and serves more than 220 countries and territories worldwide.

For assistance with tracking, shipping, or any other inquiries, you can reach out to UPS customer support through their phone numbers or website. They provide comprehensive help and support to ensure smooth and reliable service.`,
			contacts: [
				{ title: "📞 Customer Support (United States)", value: "1-800-742-5877 (1-800-PICK-UPS)", type: "text" },
				{ title: "✉️ General Customer Service", value: "customer.service@ups.com", type: "email" },
				{ title: "✉️ UPS Supply Chain Solutions", value: "supplychainsolutions@ups.com", type: "email" }
			],
			locations: [
				{ city: "United States", phone: "+1-404-828-6000", address: "Corporate Office:\n55 Glenlake Parkway, NE, Atlanta, GA, United States - 30328" },
				{ city: "New York", phone: "+1-718-965-5800", address: "88 43rd Street, Brooklyn, NY ,United States - 11232" },
				{ city: "California", phone: "+1-310-615-1100", address: "1975 E Grand Ave, El Segundo, CA, United States - 90245" },
				{ city: "Chicago", phone: "+91-8376-888-888", address: "1500 S Jefferson St, Chicago, IL, United States - 60607" }
			]
		},
		"ekart-customer-support": {
			title: "Ekart Customer Care",
			about: `Ekart Express Ltd. is a delivery company in India, based in Bangalore. It's owned by Flipkart and handles around 10 million shipments every month. Started in 2009, it's now the biggest supply chain company in India. Ekart is trusted by lots of businesses because it's really good at delivering things on time and managing big operations well. They focus on using new technology and business ideas to help everyone in India succeed.

Ekart is a prominent logistics and supply chain company in India, providing efficient delivery services across the country. As the in-house logistics arm of Flipkart, Ekart handles a significant volume of shipments, ensuring timely and reliable delivery to customers. For any assistance or inquiries, you can contact Ekart's customer care through the following channels:`,
			contacts: [
				{ title: "📞 Customer Support (General)", value: "1800-420-1111", type: "text" },
				{ title: "✉️ Customer Support Email", value: "support@ekartlogistics.com", type: "email" }
			],
			locations: [
				{ city: "Bangalore", phone: "+91-1800-420-1111 (Toll-Free)", address: "Corporate Office:\nEmbassy Tech Village, Devarabeesanahalli Village, Outer Ring Road, Bengaluru, Karnataka, India - 560103" },
				{ city: "Kolkata", phone: "+91-8067-279-279", address: "Martin Burn Business Park, BP Block, Sector V, Bidhannagar, Kolkata, West Bengal, India - 700091" },
				{ city: "Chennai", phone: "+91-8067-279-279", address: "No. 84/2, A Block, 2nd Avenue, Anna Nagar West, Chennai, Tamil Nadu, India - 600040" },
				{ city: "Delhi", phone: "+91-8067-279-279", address: "C-1/9, Block C, Janakpuri, New Delhi, Delhi, India - 110058" },
				{ city: "Hyderabad", phone: "+91-8067-279-279", address: "Plot No. 17 & 18, 3rd Floor, Gachibowli, Hyderabad, Andhra Pradesh, India - 500032" },
				{ city: "Mumbai", phone: "+91-8067-279-279", address: "Times Square Building, Andheri-Kurla Road, Andheri East, Mumbai, Maharashtra, India - 400059" }
			]
		},
		"4px-customer-support": {
			title: "4PX Customer Support Details",
			about: `4PX Express founded in 2004, is China's top provider of cross-border e-commerce solutions. Specializing in logistics, software, and consulting services, 4PX serves more than 20,000 e-commerce merchants. It has grown to become a leader in China's market, offering comprehensive support to businesses involved in international online trade.

For assistance with orders, account inquiries, or general questions, you can reach out to 4px Express customer support team through their website. They are dedicated to providing helpful and timely assistance to buyers and sellers alike.`,
			contacts: [
				{ title: "🌐 Contact Website", value: "https://en.4px.com/", type: "link" }
			],
			locations: [
				{ city: "Shenzhen City", phone: "86-755-23508000", address: "201-221, Domestic Air Cargo Terminal, Airport Fourth Road, Bao'an District, Shenzhen City, Guangdong Province, China" },
				{ city: "Preston", phone: "+61 3 9416 8777", address: "84-88 Chifley Drive, Preston, Victoria, Australia" },
				{ city: "Regents Park", phone: "+61 (02) 9644 1851 / +61 (02) 9743 7098", address: "G2/391 Park Rd, Regents Park, NSW, Australia" }
			]
		},
		"indian-post-customer-support": {
			title: "India Post Customer Care",
			about: `Indian Post also known as the Department of Posts (DoP), is the government-operated postal system in India. Established in 1854 under the British Raj, it has since evolved into a vast network providing postal, parcel, financial, and retail services across the country. India Post is one of the largest postal networks in the world, with over 150,000 post offices, including rural and urban locations.

For assistance with shipment tracking, or general questions, you can reach out to Indian Post's customer support team through their Emails or Phone.`,
			contacts: [],
			locations: [
				{ city: "Delhi", phone: "1800 119888", email: "spc.delhi@indiapost.gov.in" },
				{ city: "Mumbai", phone: "022 2615 6125", email: "spc.mumbai@indiapost.gov.in" },
				{ city: "Chennai", phone: "044-22313282, 22313200, 22313201", email: "nsh.chennai@indiapost.gov.in" },
				{ city: "Kolkata", phone: "033 2212 0476", email: "spc.kolkata@indiapost.gov.in" },
				{ city: "Bangalore", phone: "080 2286 7302", email: "spc.bangalore@indiapost.gov.in" },
				{ city: "Hyderabad", phone: "040 2346 3925", email: "spc.hyderabad@indiapost.gov.in" },
				{ city: "Ahmedabad", phone: "1800 233 7999", email: "nsh.ahmedabad@indiapost.gov.in" },
				{ city: "Pune", phone: "020 2612 1570", email: "spc.pune@indiapost.gov.in" },
				{ city: "Kochi", phone: "0484 235 3486", email: "spckochi@gmail.com" }
			]
		},
		"canada-post-customer-support": {
			title: "Canada Post Customer Support",
			about: "Canada Post Corporation, also known as Postes Canada, is the primary postal operator in Canada. It is a Crown corporation that operates at arm's length from the federal government.\n\nFor assistance with tracking, or any other inquiries, you can reach out to CanadaPost customer support through their phone numbers or website. They provide comprehensive help and support to ensure smooth and reliable service.",
			contacts: [
				{ title: "📞 General Inquiries", value: "1-866-607-6301", type: "text" },
				{ title: "📞 Tracking", value: "1-866-607-6301", type: "text" },
				{ title: "📞 Technical Support", value: "1-877-376-1212", type: "text" },
				{ title: "📞 Outside Canada", value: "+1-416-979-3033", type: "text" }
			],
			locations: [
				{ city: "Canada", phone: "1-866-607-6301", address: "Canada Post Corporation\n2701 Riverside Drive, Ottawa, ON K1A 0B1, Canada" }
			]
		},
		"xpressbees-customer-support": {
			title: "XpressBees Customer Support",
			about: "XpressBees is a prominent logistics and supply chain solutions provider in India, specializing in e-commerce logistics. Established in 2015 and headquartered in Pune, Maharashtra, XpressBees offers comprehensive services including express delivery, reverse logistics, warehousing solutions, and cross-border logistics. With a widespread network covering over 3,000 cities and advanced technology-driven operations, XpressBees supports businesses with efficient and reliable logistics services tailored for the dynamic needs of the e-commerce sector.\n\nFor assistance with tracking, or any other inquiries, you can reach out to XpressBees customer support through their phone numbers or website. They provide comprehensive help and support to ensure smooth and reliable service.",
			contacts: [
				{ title: "📞 Toll-Free Number", value: "020-4911-6100", type: "text" },
				{ title: "✉️ Customer Support", value: "support@xpressbees.com", type: "email" }
			],
			locations: [
				{ city: "Mumbai", phone: "022-26841172", address: "Plot No. 92, Dr. Baba Saheb Ambedkar Road, Dadar (E), Mumbai, Maharashtra India- 400014" },
				{ city: "Bangalore", phone: "080-41154707", address: "22, Infantry Road, Zam Zam Center, Bangalore India- 560001" },
				{ city: "Chennai", phone: "044-43439000", address: "Old No. 189, New No. 268, Thambu Chetty Street, Chennai India- 600001" },
				{ city: "Kolkata", phone: "033-40088445", address: "P-16, Taratala Road, Near BSNL Office, Kolkata India- 700088" },
				{ city: "Ghaziabad", phone: "0120-4948782", address: "1st Floor, C-17, Rajendra Nagar Industrial Area, Mohan Nagar, Ghaziabad India- 201007" },
				{ city: "Jaipur", phone: "0141-3000550", address: "G-1, Ganpati Enclave, Muktanand Nagar, Gopalpura Bypass, Jaipur India- 302018" },
				{ city: "Ludhiana", phone: "0161-5032900", address: "Ground Floor, Plot No. 27, Transport Nagar, Ludhiana India- 141003" },
				{ city: "Thiruvananthapuram", phone: "0471-4063484", address: "3rd Floor, Reema Plaza, Vellayambalam, Thiruvananthapuram India- 695010" }
			]
		},
		"bluedart-customer-support": {
			title: "Blue Dart Customer Support",
			about: "Blue Dart Express Ltd. is a top courier and transportation company in South Asia, known for its safe and reliable delivery services to over 55,400 locations in India. As part of the DHL Group's eCommerce division, it benefits from a vast global network that spans over 220 countries. Blue Dart offers a wide range of services, including express delivery, freight forwarding, supply chain solutions, and customs clearance. The company focuses on customer satisfaction and aims to strengthen its partnerships.\n\nHere are the city-specific helpline numbers for Blue Dart Courier, along with phone numbers, email addresses, and office addresses. If you find any mistakes in the information, please let us know, and we will update it within a day.",
			contacts: [
				{ title: "✉️ Customer Service", value: "customerservice@bluedart.com", type: "email" }
			],
			locations: [
				{ city: "Ahmedabad", phone: "Fax: +91 79 6586195", address: "Shalimar Co-Op Hsg Soc, Near Embassy Market, Off Ashram Road, Ahmedabad, Gujarat, India - 380008" },
				{ city: "Bangalore", phone: "Fax: +91 80 25229856", address: "Ground Floor, Connection Point, Airport Exit Road, Bangalore, Maharashtra, India - 569999" },
				{ city: "Kolkata", phone: "(033) 22881919, Fax: +91 33 22881894", address: "Kanak Building, 3rd Floor, Jawaharlal Nehru Road, (Old Chowringhee Road), Kolkata, West Bengal, India - 700071" },
				{ city: "Chennai", phone: "Fax: +91 44 28252280", address: "11(Old No.38), State of Quo Building, Sterling Road, Nungambakkam, Chennai, Tamil Nadu, India - 600034" },
				{ city: "Coimbatore", phone: "+91 422 2243383, +91 422 2248071, Fax: +91 422 2246832, +91 422 2243647", address: "Paga Towers, 8/128 TO 132, Kattoor Street, P.N.Palayam, Coimbatore, Tamil Nadu, India - 641037" },
				{ city: "New Delhi", phone: "(011) 25699951/52/53/54, Fax: +91 11 40575281", address: "Plot 8, 4th Floor, Elegance Tower, Non-Hierarchical Commercial Centre, Jasola District Centre, New Delhi, Delhi, India - 110076" },
				{ city: "Hyderabad", phone: "(040) 23311919/2110/2060, Fax: +91 40 66323030", address: "H.NO.1-8-450/1/a/159 and 160, 1st Floor, Victoria Castle, Prakash Nagar, Begumpet, Hyderabad, Andhra Pradesh, India - 500016" },
				{ city: "Mumbai", phone: "(022) 26184202/3286, Fax: +91 22 28244098, +91 22 28244131", address: "Blue Dart Centre, Sahar Airport Road, Andheri East, Mumbai, Maharashtra, India - 400099" }
			]
		},
		"aramex-customer-support": {
			title: "Aramex Customer Support",
			about: "Aramex is a leading global provider of comprehensive logistics and transportation solutions. Established in 1982, Aramex has rapidly grown into a global brand recognized for its customized services and innovative multi-product offering. The company operates in more than 60 countries and provides services that include express courier delivery, freight forwarding, logistics, supply chain management, e-commerce, and record management services.\n\nFor assistance with tracking, shipping, or any other inquiries, you can reach out to Aramex customer support through their phone numbers or email addresses. They provide comprehensive help and support to ensure smooth and reliable service.",
			contacts: [
				{ title: "📞 Customer Support (US)", value: "+1-718-553-8740", type: "text" },
				{ title: "📞 Customer Support (UAE)", value: "+971-600-544000", type: "text" },
				{ title: "✉️ General Customer Service", value: "info@aramex.com", type: "email" },
				{ title: "✉️ India Customer Service", value: "indiacustomerservice@aramex.com", type: "email" }
			],
			locations: [
				{ city: "Dubai", phone: "+971-600-544000", address: "Corporate Office:\nAramex House, Dubai Logistics City, Dubai, United Arab Emirates" },
				{ city: "United States", phone: "+1-718-553-8740", address: "147-29 182nd St, Jamaica, NY ,United States - 11413\nEmail: nycops@aramex.com" },
				{ city: "United Kingdom", phone: "+44-20-8759-8990", address: "Building 1072, Western Perimeter Road, Heathrow Airport, Hounslow, London, TW6 2SU, United Kingdom\nEmail: london@aramex.com" },
				{ city: "India", phone: "+91-22-33003300", address: "Pinnacle Business Park, Building No. 1, Ground Floor, Mahakali Caves Road, Shanti Nagar, Andheri East, Mumbai India - 400093\nEmail: indiacustomerservice@aramex.com" }
			]
		},
		"dtdc-customer-support": {
			title: "DTDC Customer Support",
			about: "DTDC Express Ltd. is one of India's leading express parcel service providers. Established in 1990, DTDC has expanded its services globally and operates through a network of more than 10,000 franchisees and service centers across India. DTDC offers domestic and international courier services, freight forwarding, supply chain solutions, and e-commerce logistics.\n\nFor assistance with tracking, shipping, or any other inquiries, you can reach out to DTDC customer support through their phone numbers or email addresses. They provide comprehensive help and support to ensure smooth and reliable service.",
			contacts: [
				{ title: "📞 India Customer Care", value: "1800-419-4343 (Toll-Free)", type: "text" },
				{ title: "📞 International Customer Care", value: "+91-80-2536-5032", type: "text" },
				{ title: "✉️ General Customer Service", value: "customersupport@dtdc.com", type: "email" },
				{ title: "✉️ Complaints & Feedback", value: "css.co@dtdc.com", type: "email" }
			],
			locations: [
				{ city: "New Delhi", phone: "+91-11-44900000, +91-11-44900001", address: "B-101, Phase 1, Industrial Area, Naraina, New Delhi, Delhi, India - 110028" },
				{ city: "Bangalore", phone: "+91-80-2536-5032, +91-80-2536-5021, Fax: +91-80-25514461", address: "No. 3, Victoria Road, Bangalore, Karnataka, India - 560047" },
				{ city: "Kolkata", phone: "+91-33-33004444, +91-33-40329819", address: "404/405, Kaji Nazrul Islam Sarani VIP Road, Raghunathpur, Baguiati, Kolkata, West Bengal, India - 700059" },
				{ city: "Jaipur", phone: "+91-141-4020806", address: "D-327, Lower Ground Floor, Gautam Marg Nirman Nagar, Jaipur, Rajasthan, India - 302019" },
				{ city: "Chennai", phone: "+91-44-28143886, +91-44-28143889", address: "No. 136, Old Mahabalipuram Road Kandhanchavadi, Chennai, Tamil Nadu, India - 600096" },
				{ city: "Hyderabad", phone: "+91-40-33004444", address: "Plot No. 9 & 10, Survey No. 12, Kothaguda Kondapur, Opp. Harsha Toyota Showroom, Hyderabad, Telangana, India - 500084" },
				{ city: "Pune", phone: "+91-20-67113700", address: "Survey No. 79/80, New Airport Road Vishrantwadi, Yerwada, Pune, Maharashtra, India - 411006" },
				{ city: "Mumbai", phone: "+91-22-45137999, +91-22-45137900", address: "Plot No. 14, Vijay Nagar, Western Express Highway Near Virvani Estate, Goregaon (E), Mumbai, Maharashtra, India - 400063" },
				{ city: "Ahmedabad", phone: "+91-79-30610701", address: "No. 10, Mill Officers Colony, Opp. Times of India, Near Old RBI, Ashram Road, Ahmedabad, Gujarat, India - 380009" }
			]
		},
		"delhivery-customer-support": {
			title: "Delhivery Customer Support",
			about: "Delhivery Express Ltd. is a top logistics and supply chain company in India, founded in 2011. It has quickly become one of the largest and most trusted logistics providers in the country. Delhivery offers a variety of services including express parcel delivery, freight forwarding, warehousing, and order fulfillment. The company has a strong network covering over 17,500 pin codes across India, reaching both cities and rural areas. With more than 3,500 delivery centers and a fleet of vehicles, Delhivery ensures fast and reliable shipment deliveries nationwide. They use advanced technology and data analysis to improve their operations and offer excellent customer service. Delhivery's tracking system lets customers track their packages in real-time, ensuring transparency and visibility throughout the delivery process. The company is dedicated to innovation and ongoing improvement, aiming to transform logistics and supply chain solutions in India through technology and strategic partnerships.\n\nDelhivery is a leading logistics and supply chain services company in India, providing a wide range of services including express parcel delivery, freight, and supply chain solutions. For any assistance or inquiries, you can reach out to Delhivery's customer care through the following channels:",
			contacts: [
				{ title: "📞 Customer Support (General)", value: "+91-124-671-9500", type: "text" },
				{ title: "📞 Sales Enquiries", value: "+91-11-3315-5000", type: "text" },
				{ title: "✉️ Customer Support", value: "customer.support@delhivery.com", type: "email" },
				{ title: "✉️ Sales Enquiries", value: "sales@delhivery.com", type: "email" }
			],
			locations: [
				{ city: "Haryana", phone: "N/A", address: "Corporate Office:\nPlot 5, Sector 44, Gurugram, Haryana, India - 122003" },
				{ city: "Bangalore", phone: "N/A", address: "No. 23, Old Airport Road, Konena Agrahara, HAL Post, Bangalore, Maharashtra, India - 560017" },
				{ city: "Chennai", phone: "+91 44 28252280", address: "Door No. 93, Guindy Industrial Estate, Ekkattuthangal, Guindy, Chennai, Tamil Nadu, India - 600032" },
				{ city: "Goa", phone: "+91 44 28252280", address: "Plot No.59A-1 and 59A-2, Pilerne Industrial Estate, Pilerne, Bardez, Goa, Maharashtra, India - 403521" },
				{ city: "Mumbai", phone: "(022) 26184202/3286", address: "Unit No. 4, Ground Floor, Empire Industrial Estate, 1st Floor, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra, India - 400013" }
			]
		},
		"shree-tirupati-courier-customer-support": {
			title: "Shree Tirupati Customer Support",
			about: "Shree Tirupati Courier Services Pvt. Ltd. has rapidly emerged as a leading courier service provider in India. With a robust network of branches across the country, they offer reliable domestic and international courier services, ensuring timely and secure delivery of parcels and documents.",
			contacts: [
				{ title: "🌐 Official Website", value: "http://www.shreetirupaticourier.net/network.aspx", type: "link" }
			],
			locations: [
				{ city: "Ahmedabad", phone: "+91 9879204561", address: "8/B, Bharat Society, Parsi Agiyari, Ved Mandir Road, Ahmedabad, Gujarat, India" },
				{ city: "Baroda", phone: "+91 9879204563", address: "8/9, Welcome Flat 2, Urmi Dinesh Mills Road, Near Verai Mata Temple, Akota, Baroda, Gujarat, India" },
				{ city: "Surat", phone: "+91 9879204564", address: "L/12, Swati Chamber, Galemandi Road, Near Delhi Gate Char Rasta, Surat, Gujarat, India" },
				{ city: "Chennai", phone: "+91 9962589978", address: "No-14, 40 Feet Scheme Road, Kamdar Nagar, Opposite Ayyappan Aarch, Mahalingapuram, Chennai, Tamil Nadu, India\nEmail: stcsmaaro@gmail.com" },
				{ city: "Hyderabad", phone: "+91 9640572572", address: "B-12, Ground Floor, Indian Airlines Colony, Begumpet, Hyderabad, Telangana, India - 500016\nEmail: stcshydro500003@gmail.com" },
				{ city: "Indore", phone: "+91 9300525460", address: "UB-29, Silver Mall, Rabindra Nath Tagore Marg, Opposite Old University, Indore, Madhya Pradesh, India" },
				{ city: "Jaipur", phone: "+91 8529570339", address: "B-5, Arco Palace, Opposite Sindhi Camp, Behind Metro Station, Jaipur, Rajasthan, India" },
				{ city: "Mehsana", phone: "+91 9879204568", address: "G/7, Krishna Complex, Radhanpur Char Rasta, Mehsana, Gujarat, India" },
				{ city: "Mumbai", phone: "+91 9833075096", address: "31, Ghaswala House ange Naigaon, Dadar(E), Mumbai, Maharashtra, India - 400014\nEmail: stcsmumbairo@gmail.com" },
				{ city: "New Delhi", phone: "+91 11 23637132", address: "882, Basement, East Park Road, Near Ajmal Khan Park, Karol Bagh, New Delhi, Delhi, India\nEmail: bhaveshjoshi21188@gmail.com" },
				{ city: "Pune", phone: "+91 9850553867", address: "205 G/F, Satav Wada, Narayan Peth, Opposite Z Bridge, Near Manse Karyalaya, Pune, Maharashtra, India" }
			]
		},
		"dpd-customer-support": {
			title: "DPD Customer Support",
			about: "DPD (Dynamic Parcel Distribution) is a leading international parcel delivery service known for its reliable and efficient logistics solutions. They operate extensively across Europe and other regions, providing a wide range of services including express parcel delivery, international shipping, and logistics management.\n\nFor assistance with orders, account inquiries, or general questions, you can reach out to DPD's customer support team through their website.",
			contacts: [
				{ title: "📞 General Customer Service (International)", value: "+44 121 275 0500", type: "text" },
				{ title: "📞 UK Customer Service", value: "0121 275 0500", type: "text" },
				{ title: "📞 Germany Customer Service", value: "+49 6021 8430", type: "text" },
				{ title: "📞 France Customer Service", value: "+33 825 825 424", type: "text" },
				{ title: "✉️ Customer Support (UK)", value: "cs@dpd.co.uk", type: "email" },
				{ title: "✉️ Customer Support (Germany)", value: "kundenservice@dpd.de", type: "email" },
				{ title: "✉️ Customer Support (France)", value: "service.client@dpd.fr", type: "email" }
			],
			locations: [
				{ city: "London", phone: "0121 275 0500", address: "DPD UK, Roebuck Lane, Smethwick, West Midlands, B66 1BY, United Kingdom" },
				{ city: "Manchester", phone: "0161 707 2600", address: "DPD UK, Unit 1A, Europa Trading Estate, Stoneclough Road, Radcliffe, Manchester, M26 1GG, United Kingdom" },
				{ city: "Frankfurt", phone: "+49 6021 8430", address: "DPD Deutschland GmbH, Wailandtstraße 1, 63741 Aschaffenburg, Germany" },
				{ city: "Berlin", phone: "+49 30 7554 7554", address: "DPD Deutschland GmbH, Gradestraße 84, 12347 Berlin,, Germany" },
				{ city: "Paris", phone: "+33 825 825 424", address: "DPD France, 9 rue Maurice Mallet, 92130 Issy-les-Moulineaux, France" },
				{ city: "Lyon", phone: "+33 825 825 424", address: "DPD France, ZAC des Chesnes, 38290 Saint-Quentin-Fallavier, India" }
			]
		},
		"ebay-customer-support": {
			title: "eBay Customer Support",
			about: "Ebay is an American multinational e-commerce company based in San Jose, California, that brokers customer to customer and retail sales through online marketplaces in 190 markets worldwide.\n\nFor assistance with orders, or general questions, you can reach out to Ebay's customer support team through their website. They are dedicated to providing helpful and timely assistance to buyers and sellers alike.",
			contacts: [
				{ title: "📞 Phone (USA)", value: "+1-866-540-3229", type: "text" },
				{ title: "📞 Phone (International)", value: "+1 408-376-7400", type: "text" }
			],
			locations: [
				{ city: "USA", phone: "+1 408-376-7400", address: "eBay Inc. Headquarters. 2025 Hamilton Avenue, San Jose, California, , USA - 95125" }
			]
		},
		"tnt-express-customer-support": {
			title: "TNT Express Customer Support",
			about: "TNT Express is a global courier and international deliveries company, now a subsidiary of FedEx. They provide a wide range of express delivery services, ensuring parcels and freight are delivered safely and on time around the world.\n\nFor tracking, shipping inquiries, and customer service, please visit TNT's official website or the FedEx tracking portals.",
			contacts: [
				{ title: "🌐 Contact Website", value: "https://www.tnt.com", type: "link" }
			],
			locations: [
				{ city: "Hyderabad", phone: "+91 40 2776 1096", address: "1-10-2/2, 1st Floor, Unit No. 2, Prashant Tower, Begumpet, Hyderabad,India - 500016" },
				{ city: "Bangalore", phone: "+91 80 3058 4400", address: "No. 16/1, Ground Floor, Phoenix Towers, Museum Road, Bangalore,,India - 560001" },
				{ city: "Chennai", phone: "+91 44 2827 9833", address: "No. 25/4, Ground Floor, Yasho Kanch, Khader Nawaz Khan Road, Nungambakkam, Chennai, India - 600006" },
				{ city: "Mumbai", phone: "+91 22 2447 7766", address: "501-505, 5th Floor, Plaza Asiad, B. M. Road, Near Bus Depot, Mahim West, Mumbai, India - 400016" },
				{ city: "Ahmedabad", phone: "+91 79 2656 9513", address: "201, Megha House, Mithakhali Under Bridge, Navrangpura, Ahmedabad, India - 380009" },
				{ city: "New Delhi", phone: "+91 124 671 5500", address: "DLF City Court, 10th Floor, Sikanderpur, Gurgaon, Haryana,India - 122002" },
				{ city: "Kolkata", phone: "+91 33 2248 7400", address: "Martin Burn Building, Room No. 40/1, 3rd Floor, 1 R. N. Mukherjee Road, Kolkata,,India - 700001" }
			]
		},
		"aliexpress-customer-support": {
			title: "AliExpress Customer Support",
			about: "AliExpress, operated by Alibaba Group, is a global online retail platform that connects buyers and sellers from around the world.\n\nAliExpress primarily handles customer support and inquiries through their online platforms rather than providing direct phone numbers or email addresses.",
			contacts: [
				{ title: "📞 Customer Support (USA)", value: "(408) 785-5580", type: "text" },
				{ title: "📞 Customer Support (India)", value: "+91 224 233 5233", type: "text" },
				{ title: "📞 Customer Support (Hong Kong)", value: "+8 522 215 5100", type: "text" },
				{ title: "✉️ Customer Support Email", value: "dataprotection.ae@aliexpress.com", type: "email" }
			],
			locations: [
				{ city: "China", phone: "N/A", address: "969 West Wen Yi Road,Yu Hang District, Hangzhou,Zhejiang , China" }
			]
		},
		"gati-customer-support": {
			title: "Gati Customer Support",
			about: "Gati Courier is a prominent logistics and express distribution company in India, specializing in parcel and freight delivery services. Established with a focus on efficient and reliable transportation solutions, Gati Courier caters to both domestic and international markets. The company offers a comprehensive range of logistics services including door-to-door delivery, express services, supply chain solutions, and warehousing. Known for its extensive network and technological innovations, Gati Courier aims to provide seamless delivery experiences and robust logistics support to businesses and individuals across India.\n\nFor assistance with tracking, shipping, or any other inquiries, you can reach out to Gati customer support through their phone numbers or website. They provide comprehensive help and support to ensure smooth and reliable service.",
			contacts: [
				{ title: "📞 Toll-Free Number", value: "1860-123-4284", type: "text" },
				{ title: "📞 Alternate Number", value: "+91-40-71204284", type: "text" },
				{ title: "✉️ Customer Support Emails", value: "customerservice@gati.com", type: "email" }
			],
			locations: [
				{ city: "Hyderabad", phone: "040-71204284", address: "Plot No. 20, Survey No. 12, Kothaguda, Kondapur, Hyderabad,Andhra Pradesh, India - 500084" },
				{ city: "Secunderabad", phone: "040-71204284", address: "Survey No. 9, Opp. Bus Depot, Bowenpally, Secunderabad,Telangana, India - 500011" },
				{ city: "Bangalore", phone: "080-49034284", address: "Survey No. 99/100, 3rd Phase, Industrial Area, Peenya, Bangalore,Karnataka, India - 560058" },
				{ city: "Chennai", phone: "044-49034284", address: "Plot No. 200, Velachery Main Road, Pallikaranai, Chennai,Tamil Nadu, India - 600100" },
				{ city: "Mumbai", phone: "022-49034284", address: "Plot No. 5, Midc Andheri East, Mumbai, Maharashtra, India - 400093" },
				{ city: "Ahmedabad", phone: "079-49034284", address: "No. 10, Ground Floor, Sahajanand Trade Centre, Near Kothawala Flats, Pritamnagar, Ellisbridge, Ahmedabad, Gujarat,India - 380006" },
				{ city: "New Delhi", phone: "011-49034284", address: "2nd Floor, Khasra No. 355, Sultanpur, MG Road, New Delhi ,India - 110030" }
			]
		},
		"shree-maruti-courier-customer-support": {
			title: "Shree Maruti Customer Support",
			about: "Shree Maruti Courier Services Pvt. Ltd. is one of India's leading courier companies, offering reliable and efficient courier services. Established in 1985, the company has a wide network across India, providing services to more than 2,600 locations. Shree Maruti Courier is known for its prompt delivery, customer-centric approach, and innovative solutions in the courier industry.\n\nFor assistance with tracking, shipping, or any other inquiries, you can reach out to Shree Maruti Courier customer support through their phone numbers or email addresses. They provide comprehensive help and support to ensure smooth and reliable service.",
			contacts: [
				{ title: "📞 Customer Support", value: "+91 9712 666 666", type: "text" },
				{ title: "✉️ Customer Service", value: "info@shreemaruti.com", type: "email" }
			],
			locations: [
				{ city: "New Delhi", phone: "+91 7042500863, +91 9315073109", address: "9/6142 G.F. Shivaji Gali Gandhinagar, New Delhi, Delhi, India - 100031\nEmail: info@shreemaruti.com" },
				{ city: "Kolkata", phone: "+91-33-2212-6760, +91-33-2212-6761", address: "P-14, 1st Floor, New CIT Road , Kolkata , West Bengal , India - 700073\nEmail: info@shreemaruti.com" },
				{ city: "Chennai", phone: "+91-44-2481-0910, +91-44-2481-0911", address: "No. 61, 1st Floor Parvathi Nagar, Kodambakkam , Chennai , Tamil Nadu , India - 600024\nEmail: info@shreemaruti.com" },
				{ city: "Mumbai", phone: "+91 9712 666 666", address: "B/1101, Kanakia Wall Street, Chakala, Andheri-Kurla Road, Andheri (East), Mumbai, Maharashtra, India - 400093\nEmail: info@shreemaruti.com" },
				{ city: "Ahmedabad", phone: "+91-79-4900-7777, +91-79-2754-8331", address: "Maruti House, Opp. Sales India, Income Tax Circle, Ashram Road, Ahmedabad, Gujarat , India - 380009\nEmail: info@shreemaruti.com" }
			]
		},
		"flipkart-customer-support": {
			title: "Flipkart Customer Support",
			about: "Flipkart is one of India's leading e-commerce platforms, offering a wide range of products across categories such as electronics, fashion, home essentials, groceries, and more. Founded in 2007 by Sachin Bansal and Binny Bansal, Flipkart began as an online bookstore and quickly evolved into a comprehensive online shopping destination. The company is known for its customer-centric approach, competitive pricing, and innovations in logistics and delivery services.\n\nFor assistance with tracking, shipping, or any other inquiries, you can reach out to Flipkart customer support through their phone numbers or website. They provide comprehensive help and support to ensure smooth and reliable service.",
			contacts: [
				{ title: "📞 Toll-Free Number", value: "1800-208-9898", type: "text" },
				{ title: "✉️ Customer Support", value: "cs@flipkart.com", type: "email" }
			],
			locations: [
				{ city: "Chennai", phone: "1800-208-9898", address: "Svahgraha Construction and Holdings, Survey 6/2C, Vepampattu road, Koduvalli, Thiruvallur Taluk, Thiruvallur District, Chennai, India - 60055" },
				{ city: "Pune", phone: "1800-208-9898", address: "Survey No. 747,748,755, Village Induri, Taluka Maval, Pune, Maharashtra, , India - 410507" },
				{ city: "Hyderabad", phone: "1800-208-9898", address: "SY NO 696, Gundlapochampally village, Medchal mandal, Ranga Reddy, Hyderabad, India - 501401" },
				{ city: "Lucknow", phone: "1800-208-9898", address: "Khasra No.122,123 and 1132 Village Mati, Pargana Bijnaur, Tehsil & District-Lucknow Uttar Pradesh, India - 226002" },
				{ city: "Calcutta", phone: "1800-208-9898", address: "Bagnan ,NH-6, Kolkata West Bengal, India - 711303" },
				{ city: "Gurgaon", phone: "1800-208-9898", address: "WH 6 & 7, Khasra No. 18,19,22,23, 20/1 (part), 20/2 (Part), & 21 (Part), Village Pathreri, Dist.Gurgaon, Haryana, India - 122413" },
				{ city: "Ahmedabad", phone: "1800-208-9898", address: "Land beariPlatina Logistic Park, Opposite Honest Restaurant, Ahmedabad – Rajkot National Highway 8, Bavla, Ahmedabad, Gujarat, , India - 382220" },
				{ city: "Ludhiana", phone: "1800-208-9898", address: "Nahar Industrial Enterprises , Focal Point, Plot No , B-3, B-8 & A-4, Ludhiana , Punjab, India - 141010" },
				{ city: "Bengaluru", phone: "1800-208-9898", address: "Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bangalore, Karnataka, India - 560103" },
				{ city: "Jaipur", phone: "1800-208-9898", address: "Plot No.DTA (Phase 2)-016,17 and 20 , 21 ,Mahindra World City Village - Newta, Tehshil-Sanganer,Off Jaipur Ajmer Road, NH-08,Jaipur, Rajasthan, India - 302027" }
			]
		},
		"amazon-customer-support": {
			title: "Amazon Customer Support",
			about: "Amazon is a global e-commerce and technology company renowned for its vast online marketplace, diverse product selection, and technological innovations. Founded by Jeff Bezos in 1994, Amazon started as an online bookstore and has since expanded into various product categories, including electronics, apparel, groceries, and digital streaming services. The company revolutionized online shopping with its customer-centric approach, fast delivery options like Amazon Prime, and robust logistics network. Beyond e-commerce, Amazon has ventured into cloud computing (Amazon Web Services), artificial intelligence (Alexa), and entertainment (Amazon Prime Video), solidifying its position as one of the world's largest and most influential technology companies.\n\nFor assistance with tracking, shipping, or any other inquiries, you can reach out to Amazon customer support through their phone numbers or website. They provide comprehensive help and support to ensure smooth and reliable service.",
			contacts: [
				{ title: "📞 India Toll-Free Number", value: "1800-3000-9009", type: "text" }
			],
			locations: [
				{ city: "Delhi", phone: "1800-3000-9009", address: "2nd Floor, Tower-A, Advant Navis Business Park, Plot No-7, Sector-142, Noida,Uttar Pradesh, India - 201305" },
				{ city: "Mumbai", phone: "1800-3000-9009", address: "10th Floor, Pinnacle Business Park, Corporate Road, Near Akruti SMC, Prahladnagar, Maharashtra, , India - 380015" },
				{ city: "Bangalore", phone: "1800-3000-9009", address: "2nd Floor, Safina Towers, Opposite to J.P. Techno Park, No.3, Ali Asker Road, Bangalore India - 560052" },
				{ city: "Chennai", phone: "1800-3000-9009", address: "5th Floor, Mfar Manyata Tech Park, Nagavara, Bengaluru, Karnataka, India - 560045" },
				{ city: "Hyderabad", phone: "1800-3000-9009", address: "2nd Floor, Block-A & Block-B, Survey Number-109,110,111/2, Nanakramguda Village, Serlingamplayy Mandal, Hyderabad India - 500032" }
			]
		},
		"shopee-customer-support": {
			title: "Shopee Customer Support",
			about: "Shopee is a leading e-commerce platform in Southeast Asia and Taiwan, offering a wide range of products including electronics, fashion, beauty, and home essentials. Launched in 2015, Shopee provides a user-friendly mobile app and website for both buyers and sellers, facilitating convenient shopping experiences and seamless transactions. Known for its promotional campaigns, secure payment options, and extensive logistics network, Shopee has become a preferred online marketplace for millions of users across the region, fostering a dynamic and competitive online shopping environment.\n\nFor assistance with orders, account inquiries, or general questions, you can reach out to Shopee customer support team through their website. They are dedicated to providing helpful and timely assistance to buyers and sellers alike.",
			contacts: [
				{ title: "📞 Customer Service 1", value: "+6 032 298 9222", type: "text" },
				{ title: "📞 Customer Service 2", value: "+6 032 777 9222", type: "text" },
				{ title: "✉️ Customer Support 1", value: "support@shopee.com.my", type: "email" },
				{ title: "✉️ Customer Support 2", value: "help@support.shopee.com.my", type: "email" }
			],
			locations: []
		},
		"bluecare-express-customer-support": {
			title: "BlueCare Customer Support",
			about: "Bluecare Express is an Express Logistics company that offers its services solely to the e-commerce industries in China and the USA. The enterprise is known for its Speed, Reliability, and Security. It provides a variety of supply chain solutions for e-commerce enterprises in China such as Alibaba and eBay. They handle the logistics services via flight and ship from China to the USA after which point, the rest of the delivery is handed over to other local express distribution firms.\n\nFor assistance with orders, account inquiries, or general questions, you can reach out to Bluecare Express customer support team through their website. They are dedicated to providing helpful and timely assistance to buyers and sellers alike.",
			contacts: [
				{ title: "📞 Customer Service", value: "+1 917 200 9215", type: "text" },
				{ title: "✉️ Customer Support", value: "support@bluecare.express", type: "email" }
			],
			locations: []
		},
		"trackon-customer-support": {
			title: "Trackon Customer Support",
			about: "Trackon Courier is a prominent logistics and courier service provider in India, known for its extensive network and efficient delivery solutions. Established to cater primarily to the e-commerce sector, Trackon Courier offers a wide range of services including domestic and international parcel delivery, express delivery options, reverse logistics, warehousing solutions, and more. With a strong presence across various states in India, Trackon Courier emphasizes reliability, speed, and customer satisfaction, making it a preferred choice for businesses and individuals seeking dependable logistics support.\n\nFor assistance with tracking, or any other inquiries, you can reach out to Trackon Courier customer support through their phone numbers or website. They provide comprehensive help and support to ensure smooth and reliable service.",
			contacts: [
				{ title: "📞 Customer Care", value: "011-45593500, 011-45593501", type: "text" },
				{ title: "📞 Toll-Free Number", value: "1800-103-3200", type: "text" },
				{ title: "✉️ Customer Support", value: "customercare@trackon.in", type: "email" }
			],
			locations: [
				{ city: "Delhi", phone: "011-45593500", address: "A,-64, Naraina Industrial Area, Phase-I, New Delhi, India - 110028" },
				{ city: "Maharashtra", phone: "022-26841172", address: "Plot No. 92, Dr. Baba Saheb Ambedkar Road, Dadar (E), Mumbai, Maharashtra, India - 400014" },
				{ city: "Karnataka", phone: "080-41154707", address: "22, Infantry Road, Zam Zam Center, Bangalore, India - 560001" },
				{ city: "Tamil Nadu", phone: "044-43439000", address: "Old No. 189, New No. 268, Thambu Chetty Street, Chennai, India - 600001" },
				{ city: "Gujarat", phone: "079-40604600", address: "4th Floor, Shree Rang Palace, Opp. HDFC Bank, Near Vijay Cross Road, Navrangpura, Ahmedabad, Gujarat, India - 380009" },
				{ city: "West Bengal", phone: "033-40088445", address: "P-16, Taratala Road, Near BSNL Office, Kolkata, India - 700088" },
				{ city: "Uttar Pradesh", phone: "0120-4948782", address: "1st Floor, C-17, Rajendra Nagar Industrial Area, Mohan Nagar, Ghaziabad, India - 201007" },
				{ city: "Rajasthan", phone: "0141-3000550", address: "G-1, Ganpati Enclave, Muktanand Nagar, Gopalpura Bypass, Jaipur, India - 302018" },
				{ city: "Punjab", phone: "0161-5032900", address: "Ground Floor, Plot No. 27, Transport Nagar, Ludhiana, India - 141003" },
				{ city: "Kerala", phone: "0471-4063484", address: "3rd Floor, Reema Plaza, Vellayambalam, Thiruvananthapuram, India - 695010" }
			]
		}
	};

	return supportData[slug?.toLowerCase()] || defaultContent;
};
