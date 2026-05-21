// Content data for individual courier tracking pages
// Each courier gets its own about section, tracking services, and FAQ

const courierContent = {
	"fedex-tracking": {
		title: "FedEx Courier Tracking",
		about: "FedEx Corporation, originally known as Federal Express, was founded in 1971 by Frederick W. Smith. It started as an overnight delivery service, revolutionizing the industry with its innovative approach to logistics and express shipping..",
		services: [
			{
				name: "Express Shipping",
				description: "Overnight and international express delivery services.",
			},
			{
				name: "Ground Shipping",
				description: "Economical ground delivery options for less time-sensitive shipments.",
			},
			{
				name: "Freight Services",
				description: "Freight forwarding and transportation solutions for larger and heavier shipments.",
			},
			{
				name: "Customs Brokerage",
				description: "Assistance with customs clearance and international shipping documentation.",
			},
			{
				name: "Supply Chain Services",
				description: "Warehousing, inventory management, and fulfillment services.",
			},
		],
		trackingStatusListDescription:
			"During the entire shipment process, FedEx helps you track every move of your parcel. These shipment alerts are displayed to you in the form of tracking status, through which you can easily detect real-time progress. These statuses offer information, including transit points, current routes, expected delivery date, and any important event that might hinder the delivery.\n\nBelow are descriptions of some of these prominent statuses.",
		trackingStatusList: [
			{
				status: "Picked up",
				description: "FedEx has picked up the package from the sender.",
			},
			{
				status: "In Transit",
				description: "The package is on its way to the destination via FedEx network.",
			},
			{
				status: "At FedEx Facility",
				description: "The package has arrived at a FedEx sorting facility.",
			},
			{
				status: "Out for Delivery",
				description: "The package is on the delivery vehicle and will be delivered today.",
			},
			{
				status: "Delivered",
				description: "The package has been successfully delivered to the recipient.",
			},
			{
				status: "Delivery Exception",
				description: "An unexpected event is preventing delivery. This could be due to weather, incorrect address, or the recipient not being available.",
			},
			{
				status: "Clearance in Progress",
				description: "The shipment is being processed for customs clearance (international shipments).",
			},
			{
				status: "Shipment Exception",
				description: "An issue has occurred with the shipment that may delay delivery.",
			},
		],
		faq: [
			{
				q: "How can I track my FedEx package?",
				a: "You can track your FedEx package by entering the tracking number on the FedEx tracking page, using the FedEx mobile app, or by calling FedEx customer service.",
			},
			{
				q: "Where can I find my FedEx tracking number?",
				a: "Your FedEx tracking number is included in the shipping confirmation email you received from the sender. It can also be found on the shipping label or receipt.",
			},
			{
				q: "Why hasn't my FedEx tracking information updated?",
				a: "There could be several reasons why tracking information hasn't updated:\n- The package hasn't been scanned yet.\n- There may be a delay in system updates.\n- The package is in transit between locations.",
			},
			{
				q: "What should I do if my FedEx package is marked as delivered but I haven't received it?",
				a: "If your package is marked as delivered but you haven't received it:\n- Check around your property for the package.\n- Ask your neighbors if they received it on your behalf.\n- Contact FedEx customer service or the sender for further assistance.",
			},
			{
				q: "Can I sign for a FedEx package online?",
				a: "FedEx offers the option to sign for a package online through the FedEx Delivery Manager tool before delivery.",
			},
		],
	},
	"bluedart-tracking": {
		title: "Blue Dart Courier Tracking",
		about: "Blue Dart Express Limited is one of India's leading logistics companies, offering comprehensive supply chain solutions. Founded in 1983, Blue Dart has grown to become the country's most reliable courier and express package delivery service. As a subsidiary of DHL Express, Blue Dart combines its extensive domestic network with DHL's global reach to provide seamless delivery services across India and beyond.\n\nBlue Dart operates a fleet of aircraft (Boeing 757s) for time-definite deliveries, making it one of the few Indian logistics companies with its own aviation network. The company serves over 35,000 locations in India and connects to more than 220 countries and territories worldwide through DHL.",
		services: [
			{
				name: "Domestic Priority",
				description: "Time-definite delivery of shipments to over 35,000 locations across India, with door-to-door pickup and delivery.",
			},
			{
				name: "Dart Apex",
				description: "Air express service for heavyweight shipments, providing reliable next-day delivery across major metros and cities.",
			},
			{
				name: "Dart Surfaceline",
				description: "Ground express service for heavyweight shipments at economical rates with reliable delivery timelines.",
			},
			{
				name: "Smart Box",
				description: "Pre-paid, flat-rate packaging solution for sending items across India in tamper-proof packaging.",
			},
			{
				name: "E-commerce Solutions",
				description: "Comprehensive e-commerce logistics including cash-on-delivery, prepaid, and return shipment services.",
			},
		],
		trackingStatusListDescription:
			"During the entire shipment process, Blue Dart helps you track every move of your parcel. These shipment alerts are displayed to you in the form of tracking status, through which you can easily detect real-time progress. These statuses offer information, including transit points, current routes, expected delivery date, and any important event that might hinder the delivery.\n\nBelow are descriptions of some of these prominent statuses.",
		trackingStatusList: [
			{
				status: "Online shipment booked",
				description: "The sender has requested Blue Dart to collect the package.",
			},
			{
				status: "Shipment picked up",
				description: "Blue Dart personnel have picked up your package from the sender.",
			},
			{
				status: "Shipment arrived",
				description: "Your package has reached the local facility or warehouse nearest the destination.",
			},
			{
				status: "Shipment arrived at the hub",
				description: "Your package has been collected by the Blue Dart distribution center near the destination.",
			},
			{
				status: "Shipment further connected",
				description: "Your package is on the way to its destination.",
			},
			{
				status: "Shipment out for delivery",
				description: "Your package has reached the receiver's area and is all set to be loaded in the logistics truck.",
			},
			{
				status: "Shipment delivered",
				description: "The package has reached the receiver's location.",
			},
			{
				status: "Undelivered shipment held at the location",
				description:
					"Your package wasn't delivered to your location because of a specific reason, particularly customs, and is currently on hold at the mentioned location until the issue is resolved.",
			},
			{
				status: "Network delay",
				description:
					"It is a delay on the transportation side and will impact the delivery due to traffic, events, weather, etc.",
			},
		],
		faq: [
			{
				q: "How can I track my Blue Dart package?",
				a: "You can track your Blue Dart package by entering the waybill number on the Blue Dart tracking page, using the Blue Dart mobile app, or by calling Blue Dart customer service.",
			},
			{
				q: "Where can I find my Blue Dart tracking number?",
				a: "Your Blue Dart tracking number (also called a waybill number) is included in the shipping confirmation email or SMS you received from the sender. It can also be found on the shipping receipt.",
			},
			{
				q: "What should I do if my Blue Dart package is delayed?",
				a: "If your package is delayed:\n- Check the tracking status for any updates or exceptions.\n- Contact Blue Dart customer service at 1860-233-1234.\n- Reach out to the sender for further assistance.",
			},
			{
				q: "Does Blue Dart deliver on Sundays?",
				a: "Blue Dart generally does not deliver on Sundays and public holidays. However, Sunday and holiday delivery may be available in select locations for premium services.",
			},
			{
				q: "What is Blue Dart's coverage area?",
				a: "Blue Dart serves over 35,000 locations across India and connects to more than 220 countries and territories worldwide through its parent company DHL Express.",
			},
		],
	},
	"ekart-tracking": {
		title: "Ekart Courier Tracking",
		about: "Ekart logistics or Ekart courier is an Indian courier delivery services company, headquartered in Bangalore, Karnataka. A subsidiary of electronic commerce company Flipkart Pvt. Ltd., it is run by Instakart services Pvt. Ltd. Ekart delivers around 10 million shipments a month\n\nEkart is India’s largest supply chain company, established in 2009 to meet the diverse supply chain needs of customers across the country. Today, Ekart is the preferred partner for numerous businesses, thanks to its consistent excellence in consumer experience, reliable delivery services, and capability to manage large-scale operations efficiently. The company is dedicated to empowering every Indian's dreams by delivering value through innovation in technology and commerce.",
		services: [
			{
				name: "Service Details",
				description:
					"Ekart Logistics provides efficient tracking services for shipments within India. Customers can conveniently track their parcels in real-time using Ekart's online tracking system. By entering the unique tracking number on the Ekart website or mobile app, customers can stay updated on the current status and location of their shipments throughout the delivery process. This tracking capability ensures transparency and reliability, enhancing customer satisfaction by providing accurate delivery information.",
			},
		],
		trackingStatusListDescription:
			"During the entire shipment process, Ekart Logistics helps you track every move of your parcel. These shipment alerts are displayed to you in the form of tracking status, through which you can easily detect real-time progress. These statuses offer information, including transit points, current routes, expected delivery date, and any important event that might hinder the delivery.\n\nBelow are descriptions of some of these prominent statuses.",
		trackingStatusList: [
			{
				status: "Softdata Upload",
				description: "The customer's package has been registered and is currently awaiting confirmation.",
			},
			{
				status: "Pickup Awaited",
				description: "A shipping label has been created and the package is being processed for delivery.",
			},
			{
				status: "Booked At Facility",
				description:
					"DTDC has received the package as requested by the customer and is currently processing the shipment.",
			},
			{
				status: "Processed & Forwarded To Facility",
				description: "The package has been processed and forwarded to the facility for the next step of processing.",
			},
			{
				status: "Processed & Forwarded from the Facility",
				description: "The package has been processed and is now being forwarded to the next transit point.",
			},
			{
				status: "Received At Hub",
				description: "The package has reached the hub.",
			},
			{
				status: "Processed & Forwarded to the Hub",
				description: "The package has been processed by the facility and is being forwarded to the hub.",
			},
			{
				status: "Processed & Forwarded From Hub",
				description: "The package has been processed and is now being forwarded from the hub to the facility.",
			},
			{
				status: "Received At Facility",
				description: "The package is back at the facility and being prepared for delivery.",
			},
			{
				status: "Out For Delivery",
				description: "DTDC has fully processed the package, and it is now being delivered to the recipient's doorstep.",
			},
			{
				status: "Not Delivered (RECEIVER NOT AVAILABLE-(CIR)",
				description:
					"The recipient was not available to receive the package and requested that it not be left if they were unavailable. As a result, the package has been returned to DTDC.",
			},
			{
				status: "Successfully Delivered",
				description: "The recipient has received the package and the delivery has successfully been completed.",
			},
		],
		faq: [
			{
				q: "How can I track my Ekart package?",
				a: "You can track your Ekart package by entering the tracking number provided to you on the Ekart tracking page or through the mobile app.",
			},
			{
				q: "What should I do if my Ekart package is marked as delivered but I haven't received it?",
				a: "If your package is marked as delivered but you haven't received it:\n- Check around your property for the package.\n- Ask your neighbors if they received it on your behalf.\n- Contact Ekart customer service or the seller for further assistance.",
			},
			{
				q: "Why is my Ekart package delayed?",
				a: "Common reasons for delays include:\n- Adverse weather conditions\n- High volume of shipments\n- Customs processing (for international packages)\n- Incorrect address information\n\nCheck your tracking details or contact customer service for specific information.",
			},
			{
				q: "How do I contact Ekart customer service for tracking issues?",
				a: "You can contact Ekart customer service via the contact form on their website, through the mobile app, or by calling their customer support hotline. Have your tracking number and order information ready.",
			},
			{
				q: "Can I schedule a specific delivery time with Ekart?",
				a: "Currently, Ekart does not offer the option to schedule specific delivery times. Deliveries are made during standard business hours.",
			},
		],
	},
	"4px-tracking": {
		title: "4PX Courier Tracking",
		about: "4PX Express (\"4PX\") was established in 2004 and is China's leading cross-border e-commerce solutions provider. 4PX offers a range of services, including logistics, software, and consulting. Over 20,000 merchants depend on 4PX to thrive in the e-commerce industry.\n\nCurrently, 4PX is the market leader in China, excelling in revenue generation, order processing volume, and operational scale.\n\nPost-link, an innovative service from 4PX, utilizes 4PX's international resources to facilitate efficient shipping. This service ships cargo from China directly to the destination country through direct flights and completes the last-mile delivery with local postal and courier services. Presently, Post-link provides three service options: Registered Mail, Ordinary Mail, and Air Mail Parcel.",
		services: [
			{
				name: "Express Delivery",
				description: "Fast and reliable delivery within China, ensuring parcels reach customers promptly.",
			},
			{
				name: "Warehousing and Fulfillment",
				description:
					"Strategic warehouse locations throughout China provide storage, inventory management, and order fulfillment services.",
			},
			{
				name: "Same-Day Delivery",
				description: "For urgent deliveries, 4PX offers same-day shipping within major cities.",
			},
			{
				name: "Post-link",
				description:
					"Leverages 4PX's global resources to ship cargo from China directly to destination countries via direct flights, completing the final delivery with local postal and courier services. It offers Registered Mail, Ordinary Mail, and Air Mail Parcel options.",
			},
			{
				name: "International Express",
				description:
					"Fast and reliable international shipping services to over 200 countries, with a focus on timely and secure delivery.",
			},
			{
				name: "Customs Clearance",
				description: "Expert handling of customs procedures to ensure smooth and compliant cross-border shipping.",
			},
			{
				name: "Fulfillment Centers Abroad",
				description:
					"Warehousing and fulfillment services in key international markets to streamline logistics and reduce delivery times for global customers.",
			},
		],
		trackingStatusListDescription: "Below are descriptions of some of these prominent statuses.",
		trackingStatusList: [
			{
				status: "Order Received",
				description: "4PX has received the order from the sender.",
			},
			{
				status: "Processing",
				description: "The package is being processed at one of 4PX's facilities.",
			},
			{
				status: "In Transit",
				description: "The package is on its way to the destination",
			},
			{
				status: "Out for Delivery",
				description: "The package is with the local courier for final delivery.",
			},
			{
				status: "Delivered",
				description: "The package has been successfully delivered to the recipient..",
			},
			{
				status: "Attempted Delivery",
				description: "There was an attempt to deliver the package, but it was unsuccessful.",
			},
			{
				status: "Failed Delivery",
				description: "Delivery was unsuccessful, and the package is being held or will be reattempted.",
			},
		],
		faq: [
			{
				q: "What is 4PX Tracking?",
				a: "4PX Tracking allows customers to monitor the status and location of their packages throughout the delivery process.",
			},
			{
				q: "How often is tracking information updated?",
				a: "Tracking information is typically updated regularly as the package moves through different stages of the delivery process. Updates can vary based on the carrier and location.",
			},
			{
				q: "What should I do if my package is delayed or lost?",
				a: "If your package is delayed or lost, contact 4PX customer support with your tracking number for assistance.",
			},
			{
				q: "Can I change the delivery address after shipping?",
				a: "Depending on the stage of delivery, it may be possible to request a change in the delivery address. Contact 4PX customer support for assistance.",
			},
		],
	},
	"canada-post-tracking": {
		title: "Canada Post Courier Tracking",
		about: `Canada Post Corporation, commonly known as Canada Post, is the primary postal operator in Canada. It is a crown corporation (government-owned) responsible for providing postal services to all Canadians. Canada Post offers a wide range of services beyond traditional mail delivery, including parcel delivery, express post, logistics solutions, and more.
			
Canada Post operates an extensive network of postal outlets and delivery routes across Canada, ensuring comprehensive coverage from urban centers to remote communities. It also partners with international postal operators for global delivery services.

- Visit the Canada Post Tracking Page: Go to the official Canada Post tracking page using your web browser. You can access it directly through this link: Canada Post Tracking Page.
- Enter Your Tracking Number: Locate your tracking number. This is typically provided by the sender or can be found on your shipping confirmation email or receipt. Enter the tracking number into the input field on the Canada Post tracking page.
- Click on 'Track': After entering your tracking number, click on the 'Track' button next to the input field. This will initiate the tracking process.
- View Tracking Status: The tracking system will display the current status and location of your shipment. It will provide details such as whether the package is in transit, out for delivery, delivered, or if there are any exceptions or issues with the delivery.`,
		services: [
			{
				name: "Mail Services",
				description: "Provides reliable mail delivery services across Canada, including letter mail and small packets.",
			},
			{
				name: "Parcel Services",
				description:
					"Offers various parcel delivery options, including Expedited Parcel, Xpresspost, Priority, and more, for both domestic and international shipments.",
			},
			{
				name: "Courier Services",
				description:
					"Provides courier services through its subsidiary, Purolator Inc., offering express and freight forwarding solutions.",
			},
			{
				name: "E-commerce Solutions",
				description:
					"Supports businesses with integrated shipping solutions, returns management, and fulfillment services to facilitate e-commerce growth.",
			},
			{
				name: "Innovative Solutions",
				description:
					"Constantly evolves with technological advancements to enhance customer experience, including digital mail services, online tracking, and mobile apps.",
			},
		],
		trackingStatusListDescription: "Below are descriptions of some of these prominent statuses.",
		trackingStatusList: [
			{
				status: "In Transit",
				description: "The package is on its way to the delivery address.",
			},
			{
				status: "Out for Delivery",
				description: "The package is with the delivery agent and will be delivered soon.",
			},
			{
				status: "Delivered",
				description: "The package has been delivered to the recipient.",
			},
			{
				status: "Exception",
				description: "There is an issue with the delivery, such as an incorrect address or recipient unavailable.",
			},
			{
				status: "Return to Sender",
				description: "The package is being returned to the sender due to delivery failure.",
			},
		],
		faq: [
			{
				q: "What is Canada Post known for?",
				a: 'Canadian postal administrations have been providing parcel services since 1859, unaddressed advertising and printed matter distribution services since 1903, expedited delivery of documents since 1914, "hybrid" hard-copy electronic services since 1972 and courier services since 1979.',
			},
			{
				q: "What is the fastest option for Canada Post?",
				a: "Priority: Our fastest shipping within Canada\nWe guarantee next-business-day delivery between major urban centres. Signature collection and online tracking are available at no extra charge 1.",
			},
			{
				q: "Is Canada Post International?",
				a: "Big or small, by air or by surface, Canada Post delivers to the U.S. and more than 190 countries worldwide.",
			},
			{
				q: "What is Canada Post Mission?",
				a: "Canada Post has a mandate to provide a standard of service that meets the needs of the people of Canada. The Corporation is to provide quality postal services to all Canadians, rural and urban, residents and businesses, in a secure and financially self-sustaining manner",
			},
			{
				q: "Does Canada Post use airplanes?",
				a: "Trucks, airplanes and trains are used to move parcels across Canada and around the world. These modes of transport use fossil fuels like gas, oil and diesel that emit greenhouse gas emissions. We calculate emissions associated with each parcel based on the distance it travels, its weight and the mode of transportation.",
			},
		],
	},
	"indian-post-tracking": {
		title: "Indian Post Courier Tracking",
		about: 'To provide comprehensive tracking information for India Post shipments, here\'s a detailed guide on how to track your consignment and understand various status updates:\n\n- Obtain Your Tracking Number: When you send a parcel or letter via India Post, you receive a receipt with a unique consignment or tracking number. This number is essential for tracking your shipment.\n- Visit the India Post Tracking Page: Open your web browser and go to the India Post Tracking Page.\n- Enter Your Tracking Number: On the tracking page, locate the search box labeled "Consignment Number." Enter your tracking number in the provided field.\n- Submit Your Tracking Request: Click the "Track Now" button or press "Enter" on your keyboard. The system will process your request and display the current status of your shipment.\n\nPostal services date back to ancient times with runners carrying messages. During the Mughal era, a rudimentary postal system known as "Dak Chowki" was established.\n\nEarly Beginnings\nPostal services date back to ancient times with runners carrying messages. During the Mughal era, a rudimentary postal system known as "Dak Chowki" was established.\n\nBritish Era\n1837: East India Company started postal services with Bombay and Calcutta as main centers.\n1854: Indian Post Office Act established the Department of Posts and Telegraphs.\n1861: First postage stamp of India, the "Scinde Dawk," was issued in Sindh.\n\nPost-Independence\n1950s-60s: Introduction of airmail and parcel services to meet growing demands.\n1969: Launch of Postal Life Insurance (PLI) to provide insurance cover.\n\nModern Developments\n1990s-Present: Embraced modernization with Electronic Money Order (eMO) and core banking solutions.\n2018: Launch of India Post Payments Bank (IPPB) to provide banking services.\nIntegration with e-commerce logistics to support online retail deliveries.\n\nCurrent Status\nOperates one of the largest postal networks globally, with over 150,000 post offices.\nDiverse services include mail, financial services, and retail services.\nFocus on enhancing customer experience through improved tracking systems and digital services.',
		services: [
			{
				name: "Mail Services",
				description: "Handling letters, postcards, and printed matter.",
			},
			{
				name: "Parcel Services",
				description: "Transporting parcels and packages domestically and internationally.",
			},
			{
				name: "Speed Post",
				description: "Express delivery service for time-sensitive documents and parcels.",
			},
			{
				name: "Savings Schemes",
				description: "Includes savings accounts, recurring deposits, fixed deposits, and various small savings schemes.",
			},
			{
				name: "Money Transfer",
				description:
					"Domestic money transfer services like India Post Payments Bank (IPPB) and International Money Transfer Services (IMTS).",
			},
			{
				name: "Philately",
				description:
					"India Post promotes philately (stamp collecting) and issues commemorative and definitive stamps on various themes.",
			},
			{
				name: "E-commerce Services",
				description:
					"India Post plays a crucial role in supporting e-commerce by providing logistics and delivery services for online retailers and customers.",
			},
			{
				name: "Tracking Services",
				description:
					"India Post offers online tracking facilities where customers can track their parcels and consignments. You can track your India Post shipment by visiting their official tracking page and entering your consignment number.",
			},
		],
		trackingStatusListDescription:
			"During the entire shipment process, India Post helps you track every move of your parcel. These shipment alerts are displayed to you in the form of tracking status, through which you can easily detect real-time progress. These statuses offer information, including transit points, current routes, expected delivery date, and any important event that might hinder the delivery.\n\nBelow are descriptions of some of these prominent statuses.",
		trackingStatusList: [
			{
				status: "Item Booked",
				description: "Your shipment has been registered and booked at the origin post office.",
			},
			{
				status: "Item Dispatched",
				description:
					"Your shipment has been dispatched from the origin post office and is on its way to the next sorting facility or destination.",
			},
			{
				status: "In Transit",
				description: "Your shipment is currently in transit between post offices or sorting facilities.",
			},
			{
				status: "Item Received at Sorting Facility",
				description: "Your shipment has arrived at a sorting facility for further processing.",
			},
			{
				status: "Item Bagged",
				description: "Your shipment has been packed in a mailbag for dispatch to the next location.",
			},
			{
				status: "Out for Delivery",
				description: "Your shipment has reached the destination post office and is out for delivery to the recipient.",
			},
			{
				status: "Item Delivered",
				description: "Your shipment has been successfully delivered to the recipient.",
			},
			{
				status: "Delivery Attempted",
				description:
					"Delivery was attempted but was not successful. This could be due to the recipient not being available or other reasons. A re-attempt may be made.",
			},
			{
				status: "Item Returned to Sender",
				description:
					"If the shipment could not be delivered for some reason (e.g., incorrect address), it might be returned to the sender.",
			},
		],
		faq: [
			{
				q: "What is India Post?",
				a: "India Post, also known as the Department of Posts (DoP), is the government-operated postal system in India. It provides mail, parcel, financial, and retail services across the country.",
			},
			{
				q: "How many post offices does India Post have?",
				a: "India Post operates one of the largest postal networks in the world, with over 150,000 post offices spread across urban and rural areas of India.",
			},
			{
				q: "What are the main services offered by India Post?",
				a: "India Post offers a wide range of services including mail services (letters, postcards), parcel services (domestic and international), financial services (savings schemes, money transfer), and retail services (stamp sales, postal stationery).",
			},
			{
				q: "What are some popular savings schemes offered by India Post?",
				a: "Popular savings schemes include Post Office Savings Account, Recurring Deposit (RD), Fixed Deposit (FD), Public Provident Fund (PPF), Senior Citizen Savings Scheme (SCSS), and Sukanya Samriddhi Yojana (SSY) for girl child.",
			},
			{
				q: "What is India Post Payments Bank (IPPB)?",
				a: "IPPB is a subsidiary of India Post that offers full-fledged banking services including savings accounts, current accounts, money transfer, and digital payments. It aims to provide banking services to the unbanked population.",
			},
			{
				q: "How can I send money through India Post?",
				a: "Money can be sent domestically using services like Electronic Money Order (eMO) or Instant Money Order (iMO). For international transfers, India Post offers International Money Transfer Services (IMTS).",
			},
			{
				q: "Does India Post offer insurance services?",
				a: "Yes, India Post provides life insurance through Postal Life Insurance (PLI) and Rural Postal Life Insurance (RPLI) schemes, which offer life cover with savings options and benefits.",
			},
		],
	},
	"dhl-tracking": {
		title: "DHL Courier Tracking",
		about: "DHL (Deutsche Post DHL Group) is a leading global logistics company that offers a variety of services, including international express deliveries, global freight forwarding by air, sea, road, and rail, and contract logistics. One of the key services offered by DHL is the ability to track shipments. DHL provides several tracking options, catering to different types of shipments and customer needs.",
		services: [
			{
				name: "DHL Express Tracking",
				description:
					"For tracking express shipments. Enter the tracking number on the DHL Express tracking page. Usually consists of 10 digits (e.g., 1234567890).",
			},
			{
				name: "DHL Parcel Tracking",
				description:
					"For tracking domestic and international parcels. Enter the tracking number on the DHL Parcel tracking page. Generally 10 to 39 characters.",
			},
			{
				name: "DHL eCommerce Tracking",
				description:
					'For tracking shipments through DHL eCommerce services. Enter the tracking number on the DHL eCommerce tracking page. Typically starts with "GM", "LX", or up to five digits.',
			},
			{
				name: "DHL Global Forwarding Tracking",
				description:
					"For tracking air and ocean freight shipments. Enter the tracking number on the DHL Global Forwarding tracking page. Depends on the type of shipment.",
			},
			{
				name: "DHL Freight Tracking",
				description:
					"For tracking road and rail freight shipments. Enter the tracking number on the DHL Freight tracking page. Varies based on the shipment.",
			},
		],
		trackingStatusListDescription: "Below are descriptions of some prominent DHL tracking statuses.",
		trackingStatusList: [
			{
				status: "Softdata Upload",
				description: "The customer's package has been registered and is currently awaiting confirmation.",
			},
			{
				status: "Pickup Awaited",
				description: "A shipping label has been created and the package is being processed for delivery.",
			},
			{
				status: "Booked At Facility",
				description:
					"DHL has received the package as requested by the customer and is currently processing the shipment.",
			},
			{
				status: "Processed & Forwarded To Facility",
				description: "The package has been processed and forwarded to the facility for the next step of processing.",
			},
			{
				status: "Processed & Forwarded from the Facility",
				description: "The package has been processed and is now being forwarded to the next transit point.",
			},
			{
				status: "Received At Hub",
				description: "The package has reached the hub.",
			},
			{
				status: "Processed & Forwarded to the Hub",
				description: "The package has been processed by the facility and is being forwarded to the hub.",
			},
			{
				status: "Processed & Forwarded From Hub",
				description: "The package has been processed and is now being forwarded from the hub to the facility.",
			},
			{
				status: "Received At Facility",
				description: "The package is back at the facility and being prepared for delivery.",
			},
			{
				status: "Out For Delivery",
				description: "DHL has fully processed the package, and it is now being delivered to the recipient's doorstep.",
			},
			{
				status: "Not Delivered (RECEIVER NOT AVAILABLE-(CIR)",
				description:
					"The recipient was not available to receive the package and requested that it not be left if they were unavailable. As a result, the package has been returned to DHL.",
			},
			{
				status: "Successfully Delivered",
				description: "The recipient has received the package and the delivery has successfully been completed.",
			},
		],
		faq: [
			{
				q: "How can I track my DHL package?",
				a: "You can track your DHL package by entering the tracking number on the DHL tracking page, using the DHL mobile app, or contacting DHL customer service.",
			},
			{
				q: "Where can I find my DHL tracking number?",
				a: "Your DHL tracking number is included in the shipping confirmation email you received from the sender. It can also be found on the shipping label or receipt provided by the sender.",
			},
			{
				q: "What should I do if my DHL package is marked as delivered but I haven’t received it?",
				a: "If your package is marked as delivered but you haven’t received it:\n- Check around your property for the package.\n- Ask your neighbors if they received it on your behalf.\n- Contact DHL customer service or the sender for further assistance.",
			},
			{
				q: "Why is my DHL package delayed?",
				a: "Common reasons for delays include:\n- Adverse weather conditions\n- High volume of shipments\n- Customs processing (for international packages)\n- Incorrect address information\n\nCheck your tracking details or contact customer service for specific information.",
			},
			{
				q: "Can I sign for a DHL package online?",
				a: "DHL offers the option to sign for a package online through the DHL On-Demand Delivery service before delivery.",
			},
		],
	},
	"ups-tracking": {
		title: "UPS Courier Tracking",
		about: "United Parcel Service (UPS) is an American multinational company involved in shipping, receiving, and managing supply chains. Established in 1907 as the American Messenger Company, initially focusing on telegraphs, UPS has expanded significantly. It is now a Fortune 500 corporation and one of the largest shipping companies globally. UPS is renowned for its ground shipping services and operates the UPS Store, a retail chain that aids UPS shipments and provides resources for small businesses. Additionally, UPS offers air shipping for overnight or 2-day deliveries and serves PO Boxes through UPS SurePost. This service hands over packages to the United States Postal Service for final delivery.\n\nTrack courier offers an automated online tracking service for monitoring UPS shipments. You can check the current status of your package without needing to go to the courier's office or contacting their customer service.",
		services: [
			{
				name: "Track by Reference Number",
				description:
					"Most tracking information will be obscured, with only a basic reference number provided. Senders who have stored the shipment's account number as a payment option in their profile or company profile will have access to the complete tracking information.",
			},
			{
				name: "Import Tracking Numbers",
				description:
					"your tracking numbers are stored in a CSV (Comma-Separated Values) file, each tracking number should typically be in its own row or column. Make sure there are no headers or unnecessary formatting that could interfere with the import process.",
			},
			{
				name: "Other Tracking Services",
				description:
					"Quantum View: Quantum View provides comprehensive insight into your small parcel shipments, along with additional features. Enjoy customizable dashboards, ensure everyone stays updated on shipping adjustments, and proactively address issues before they escalate.\nFlex Global View: Managing a complex worldwide supply chain with large volumes is quite challenging. UPS Flex Global View provides a unified interface to oversee and control your shipments via ground, air, and ocean freight all in one place.",
			},
		],
		trackingStatusListDescription:
			"UPS Tracking across Europe, including Germany, Italy, Spain, and the United Kingdom, allows you to monitor your parcel's whereabouts. Simply input your UPS tracking number to follow your package's progress. UPS streamlines the tracking process, ensuring you receive precise updates through our Tracking Portal. This portal consolidates tracking information from various carriers and sources for comprehensive monitoring. Whether you're expecting a single package or managing a larger shipment, UPS Tracking offers detailed insights into your delivery's status throughout its entire transit.",
		trackingStatusList: [
			{
				status: "Arrival Scan",
				description:
					"This electronic scan shows that the package has arrived at a UPS facility. The package will continue its journey, possibly passing through multiple UPS facilities. It is actively moving, though there may be intervals between scans, especially if it's traveling long distances or crossing international borders.",
			},
			{
				status: "At Local Post Office",
				description:
					"The parcel bearing a UPS Returns Flexible Access label has been received by the United States Postal Service. Subsequently, it will be transferred to UPS for return to the initial sender. UPS Returns Flexible Access represents an agreed-upon returns service.",
			},
			{
				status: "Clearance Completed",
				description: "This scan is an electronic record indicating the shipment has cleared customs.",
			},
			{
				status: "Clearance in Progress",
				description:
					"This electronic scan denotes that the shipment is currently undergoing processing for customs clearance.",
			},
			{
				status: "Order Processed: In Transit to UPS",
				description:
					"The sender has completed processing the shipment. Once the shipment enters the UPS system, we will provide an estimated delivery date.",
			},
			{
				status: "Order Processed: Ready for UPS",
				description:
					"UPS has received the electronic submission of the shipment details and billing information from the sender. As the shipment progresses through the UPS network, the tracking status will be refreshed accordingly.",
			},
			{
				status: "Departure Scan",
				description:
					"The package has left a UPS facility and is en route to the next UPS facility. The package is in transit, though there could be several days between updates if it's traveling long distances or between countries.",
			},
			{
				status: "Origin Scan",
				description: "This scan is the initial electronic record indicating UPS has possession of the shipment.",
			},
			{
				status: "In Transit",
				description:
					"Your package is currently in transit within the UPS system and is expected to reach you on the agreed-upon delivery date. It may stay in this phase until it reaches its destination. Except for air deliveries with specified times, packages are typically delivered between 9:00 a.m. and 7:00 p.m. (and occasionally later) for residential addresses, and by the end of the business day for commercial locations. UPS cannot guarantee a precise delivery time within that timeframe. There will be up to three delivery attempts made, excluding weekends and holidays.",
			},
			{
				status: "Export Scan",
				description:
					"This scan is an electronic record indicating the shipment has cleared export procedures in the origin country.",
			},
			{
				status: "Import Scan",
				description:
					"This scan denotes an electronic document confirming that the shipment has passed through customs in the destination country.",
			},
			{
				status: "Dropped off at a UPS Access Point Location",
				description:
					"This electronic scan confirms that the package is now at a UPS Access Point. Once the package is in transit within our system, we will notify you of the expected delivery date.",
			},
			{
				status: "Dropped off at The UPS Store",
				description:
					"This electronic scan signifies that the parcel is currently held by The UPS Store. Upon commencement of movement within our system, we will furnish a projected delivery date.",
			},
			{
				status: "Delivered",
				description:
					"The package has arrived at its destination, and the delivery date and time have been noted. In the United States and Canada, packages intended for residential addresses that do not need a signature may be placed in a secure location, shielded from view and protected from weather conditions. Examples of such locations include the front porch, side door, back porch, or garage. If you have requested the delivery driver to leave the package with a neighbor or at a leasing office, they will leave a UPS InfoNotice® at the delivery address.",
			},
			{
				status: "On Vehicle for Delivery/Out for Delivery",
				description:
					"The package has arrived at the nearby UPS center for distribution and has been sent out to a UPS driver. With the exception of guaranteed air deliveries, packages are typically delivered at any time from 9:00 a.m. to 7:00 p.m. (and occasionally later) for residential addresses, and by the end of the business day for commercial addresses. UPS is unable to arrange for a precise delivery time within this timeframe. They will make up to three delivery attempts, excluding weekends and holidays.",
			},
			{
				status: "Package transferred to post office",
				description: "Departure",
			},
			{
				status: "Exception: Action Required",
				description:
					"The shipment is currently within the UPS network; however, more information regarding the delivery address is needed. The sender must provide the correct shipping address information to UPS",
			},
			{
				status: "Exception",
				description:
					"Your shipment is currently within the UPS network; however, an unforeseen event has occurred which could result in a change to the scheduled delivery date. If a change in delivery date occurs, the tracking status will be updated to reflect the new delivery date.",
			},
			{
				status: "Destination Scan",
				description: "The shipment has arrived at the local UPS facility responsible for final delivery.",
			},
			{
				status: "Returned to Sender",
				description: "The shipment was returned, and UPS has delivered it back to the original sender.",
			},
			{
				status: "Returning to Sender",
				description:
					"UPS is sending back this package to the sender. This could be due to: \n1) Either the sender or the receiver asked for the return. \n2) The package has a Return Service sticker. \n3) The destination address is a P.O. Box. \n4) The address provided is incorrect.",
			},
			{
				status: "Returning to Sender: On Vehicle for Delivery",
				description: "The shipment is being returned and is scheduled for delivery back to the original sender.",
			},
			{
				status: "Shipment Information Voided",
				description:
					"The sender canceled the UPS tracking number, and the package was not handed over to UPS. For more details, please reach out to the sender.",
			},
			{
				status: "Transferred to Local Post Office for Delivery",
				description:
					"Per the sender's instructions, this package has been forwarded to the nearby post office for transportation to its ultimate destination. Please expect an extra one to two days for delivery.",
			},
		],
		faq: [
			{
				q: "Where do I find the latest information on the location of my parcel?",
				a: "Monitoring your package on UPS.com will provide you with the latest information regarding the whereabouts of your shipment. Remember to revisit the site regularly for updates on the progress of your delivery.",
			},
			{
				q: "How late will UPS deliver?",
				a: "UPS Ground packages are typically delivered on weekdays from 9 a.m. to 7 p.m., and occasionally later, to homes, and to business locations during their regular operating hours.",
			},
			{
				q: "My shipment says 'Out for Delivery'. What time will I get my parcel?",
				a: "Generally, our drivers can deliver as late as 7 p.m. During the festive season, our drivers may deliver even later.\nIf we are unable to deliver a parcel that shows a status of 'out for delivery', we'll try another delivery on the next business day.",
			},
			{
				q: "My shipment says it's been delivered, but I can't find it. Where is it?",
				a: "Your delivery person will attempt to conceal your package to keep it safe. Please inspect outside doors or other locations where your package might have been placed, such as the front porch, rear patio, or garage. Additionally, inquire with anyone who might have received your package, such as a nearby resident.",
			},
		],
	},
	"Xpressbees-tracking": {
		title: "Xpressbees Courier Tracking",
		about: "Xpressbees is a leading logistics and supply chain solutions provider in India. Established in 2015, the company has rapidly grown to become one of the prominent players in the Indian e-commerce logistics sector. Xpressbees offers a comprehensive range of services including last-mile delivery, reverse logistics, cross-border logistics, and fulfillment services.\n\nXpressbees boasts an extensive delivery network, covering over 3,000 cities and towns across India. This widespread reach ensures that customers in both urban and rural areas can receive timely deliveries.",
		services: [
			{
				name: "Network and Reach",
				description: "Xpressbees has an extensive delivery network that covers over 3,000 cities and towns in India. This wide reach helps in providing timely and reliable delivery services across the country.",
			},
			{
				name: "Technology Integration",
				description: "The company heavily invests in technology to streamline operations and improve efficiency. This includes advanced tracking systems, automated warehouses, and real-time data analytics to enhance the overall customer experience.",
			},
			{
				name: "Clientele",
				description: "Xpressbees serves a diverse range of clients including major e-commerce platforms, retail chains, and SMEs. Some of their notable clients include Flipkart, Snapdeal, and Tata Cliq.",
			},
			{
				name: "Funding and Growth",
				description: "Xpressbees has attracted significant investment over the years, helping it to scale operations and enhance its service offerings. The company has raised funding from prominent investors such as Alibaba Group, Paytm, and SAIF Partners.",
			},
		],
		trackingStatusListDescription: "",
		trackingStatusList: [
			{
				status: "In Transit",
				description: "The package is on its way to the delivery address.",
			},
			{
				status: "Out for Delivery",
				description: "The package is with the delivery agent and will be delivered soon.",
			},
			{
				status: "Delivered",
				description: "The package has been delivered to the recipient.",
			},
			{
				status: "Exception",
				description: "There is an issue with the delivery, such as an incorrect address or recipient unavailable.",
			},
			{
				status: "Return to Sender",
				description: "The package is being returned to the sender due to delivery failure.",
			},
		],
		faq: [
			{
				q: "What is Xpressbees?",
				a: "Xpressbees is a leading logistics and supply chain solutions provider in India, offering services such as last-mile delivery, reverse logistics, cross-border logistics, and fulfillment services.",
			},
			{
				q: "How can I track my shipment with Xpressbees?",
				a: "You can track your shipment by visiting the Xpressbees tracking page and entering your tracking number in the provided field. You will receive real-time updates on the status and location of your package.",
			},
			{
				q: "What should I do if I do not have a tracking number?",
				a: "If you do not have a tracking number, contact the sender or the e-commerce platform from which you made the purchase. They should provide you with the necessary tracking information.",
			},
			{
				q: "What happens if I miss my delivery?",
				a: "If you miss a delivery, Xpressbees usually attempts delivery again. You can also contact customer support to reschedule the delivery or arrange for pickup from a nearby location.",
			},
			{
				q: "Does Xpressbees offer international shipping?",
				a: "Yes, Xpressbees provides cross-border logistics services, facilitating international shipping for clients.",
			},
		],
	},
	"aramex-tracking": {
		title: "Aramex Courier Tracking",
		about: "Aramex is a global logistics and transportation company headquartered in Dubai, United Arab Emirates. Founded in 1982 by Fadi Ghandour and Bill Kingson, Aramex has grown to become one of the largest and most reputable logistics companies in the world, providing comprehensive logistics, courier, and parcel delivery services.",
		services: [
			{
				name: "Express Shipping and Courier Services",
				description:
					"Domestic Express: Fast and reliable door-to-door delivery services within the same country. International Express: Expedited shipping services to international destinations. Import Express: Solutions for businesses to import goods from international suppliers with customs clearance and door-to-door delivery.",
			},
			{
				name: "Freight Services",
				description:
					"Air Freight: Efficient air freight solutions for urgent shipments with standard and charter flight options. Sea Freight: Cost-effective sea freight for bulk shipments including FCL and LCL options. Land Freight: Overland freight services across continents.",
			},
			{
				name: "Logistics and Supply Chain Management",
				description:
					"Warehousing: Advanced warehousing solutions including storage, inventory management, and distribution services. Distribution: Tailored distribution solutions designed to optimize supply chains. E-commerce Solutions: Comprehensive fulfillment and delivery services for online businesses.",
			},
			{
				name: "Customs Clearance",
				description:
					"Customs Brokerage: Expertise in customs regulations and procedures to ensure smooth and efficient clearance of goods, minimizing delays and compliance issues.",
			},
			{
				name: "Value-Added Services",
				description:
					"Packaging: Customized packaging solutions. Shipment Insurance: Insurance options to cover the value of shipments against potential loss or damage. Reverse Logistics: Solutions for managing returns, including pickup, inspection, and restocking.",
			},
			{
				name: "Technology and Digital Solutions",
				description:
					"Tracking and Visibility: Advanced tracking systems for real-time visibility of shipments. APIs and Integrations: APIs to integrate Aramex's shipping and tracking services into business systems. Mobile Apps: User-friendly mobile applications for managing shipments.",
			},
			{
				name: "Specialized Services",
				description:
					"Healthcare and Pharmaceuticals: Tailored logistics solutions for the healthcare industry. Retail and Fashion: Customized logistics services for the retail and fashion sectors. Automotive: Logistics solutions for the automotive industry.",
			},
			{
				name: "Global Presence",
				description:
					"Operating in over 100 countries, Aramex has a robust global network of offices and hubs that support efficient international logistics operations.",
			},
		],
		trackingStatusListDescription: "Below are descriptions of some prominent Aramex tracking statuses.",
		trackingStatusList: [
			{
				status: "Softdata Upload",
				description: "The customer's package has been registered and is currently awaiting confirmation.",
			},
			{
				status: "Pickup Awaited",
				description: "A shipping label has been created and the package is being processed for delivery.",
			},
			{
				status: "Booked At Facility",
				description: "Aramex has received the package as requested by the customer and is currently processing the shipment.",
			},
			{
				status: "Processed & Forwarded To Facility",
				description: "The package has been processed and forwarded to the facility for the next step of processing.",
			},
			{
				status: "Processed & Forwarded from the Facility",
				description: "The package has been processed and is now being forwarded to the next transit point.",
			},
			{
				status: "Received At Hub",
				description: "The package has reached the hub.",
			},
			{
				status: "Processed & Forwarded to the Hub",
				description: "The package has been processed by the facility and is being forwarded to the hub.",
			},
			{
				status: "Processed & Forwarded From Hub",
				description: "The package has been processed and is now being forwarded from the hub to the facility.",
			},
			{
				status: "Received At Facility",
				description: "The package is back at the facility and being prepared for delivery.",
			},
			{
				status: "Out For Delivery",
				description: "Aramex has fully processed the package, and it is now being delivered to the recipient's doorstep.",
			},
			{
				status: "Not Delivered (RECEIVER NOT AVAILABLE-(CIR)",
				description:
					"The recipient was not available to receive the package and requested that it not be left if they were unavailable. As a result, the package has been returned to Aramex.",
			},
			{
				status: "Successfully Delivered",
				description: "The recipient has received the package and the delivery has successfully been completed.",
			},
		],
		faq: [
			{
				q: "How can I track my Aramex package?",
				a: "You can track your Aramex package by entering the tracking number on the Aramex tracking page, using the Aramex mobile app, or contacting Aramex customer service.",
			},
			{
				q: "What should I do if my Aramex tracking number isn't working?",
				a: "If your tracking number isn't working, ensure you've entered it correctly. If the issue persists, contact Aramex customer service for assistance.",
			},
			{
				q: "What should I do if my Aramex package is marked as delivered but I haven't received it?",
				a: "If your package is marked as delivered but you haven't received it:\n- Check around your property for the package.\n- Ask your neighbors if they received it on your behalf.\n- Contact Aramex customer service or the sender for further assistance.",
			},
			{
				q: "What should I do if my Aramex package is damaged?",
				a: "If your package arrives damaged:\n- Take photos of the damage.\n- Contact Aramex customer service and the sender immediately to report the issue and start a claim process.",
			},
			{
				q: "Can I change the delivery address for my Aramex package after it has shipped?",
				a: "Changing the delivery address after shipping may be possible through the Aramex website or by contacting Aramex customer service.",
			},
		],
	},
	"dtdc-tracking": {
		title: "DTDC Courier Tracking",
		about: "This is online tracking tool that provides real-time updates on shipments. Each registered package is assigned a unique tracking number. This number is used to monitor the package's journey, with details on its location, time, and date being automatically updated at each transit point.\nCustomers can track their packages by entering the tracking number on the DTDC website. Alternatively, they can get updates by contacting customer service via phone or email, or by using third-party platforms like TrackingMore.\n\nDTDC, short for Desk to Desk Courier & Cargo, is a multinational logistics company. Founded in 1990 as a small courier service, it has grown into a major courier and delivery service provider, serving over 220 locations worldwide.\nSince 2013, DTDC has partnered with GeoPost, the express logistics arm of Le Group La Poste. This partnership has made DTDC one of the largest parcel delivery networks in India, as it collaborates with DPD, which is owned by GeoPost.\nDTDC has evolved from a local courier service to a globally recognized express logistics brand. It now operates 580 facilities, uses over 1,500 vehicles, and has more than 14,000 channel partners. Serving approximately 96% of the Indian population, DTDC handles over 12 million deliveries each month.",
		services: [
			{
				name: "Service Details",
				description:
					"DTDC offers a range of shipping services to accommodate all types of shipments, whether small, medium, or large, time-sensitive, or cost-effective, both within India and internationally. With DTDC's shipment tracking features, customers can easily access the latest status of their packages at any time.",
			},
		],
		trackingStatusListDescription:
			"During the entire shipment process, DTDC helps you track every move of your parcel. These shipment alerts are displayed to you in the form of tracking status, through which you can easily detect real-time progress. These statuses offer information, including transit points, current routes, expected delivery date, and any important event that might hinder the delivery.\n\nBelow are descriptions of some of these prominent statuses.",
		trackingStatusList: [
			{
				status: "Softdata Upload",
				description: "The customer's package has been registered and is currently awaiting confirmation.",
			},
			{
				status: "Pickup Awaited",
				description: "A shipping label has been created and the package is being processed for delivery.",
			},
			{
				status: "Booked At Facility",
				description: "DTDC has received the package as requested by the customer and is currently processing the shipment.",
			},
			{
				status: "Processed & Forwarded To Facility",
				description: "The package has been processed and forwarded to the facility for the next step of processing.",
			},
			{
				status: "Processed & Forwarded from the Facility",
				description: "The package has been processed and is now being forwarded to the next transit point.",
			},
			{
				status: "Received At Hub",
				description: "The package has reached the hub.",
			},
			{
				status: "Processed & Forwarded to the Hub",
				description: "The package has been processed by the facility and is being forwarded to the hub.",
			},
			{
				status: "Processed & Forwarded From Hub",
				description: "The package has been processed and is now being forwarded from the hub to the facility.",
			},
			{
				status: "Received At Facility",
				description: "The package is back at the facility and being prepared for delivery.",
			},
			{
				status: "Out For Delivery",
				description: "DTDC has fully processed the package, and it is now being delivered to the recipient's doorstep.",
			},
			{
				status: "Not Delivered (RECEIVER NOT AVAILABLE-(CIR)",
				description:
					"The recipient was not available to receive the package and requested that it not be left if they were unavailable. As a result, the package has been returned to DTDC.",
			},
			{
				status: "Successfully Delivered",
				description: "The recipient has received the package and the delivery has successfully been completed.",
			},
		],
		faq: [
			{
				q: "How can I track my DTDC courier shipment?",
				a: 'To find out where your DTDC courier package is, simply enter the tracking number on the DTDC website or mobile app in the designated "Track Your Shipment" area.',
			},
			{
				q: "How to track DTDC parcel?",
				a: 'To monitor the status of a DTDC parcel, input the tracking number into the designated area on the DTDC website or mobile app under the "Track Your Shipment" option.',
			},
			{
				q: "How can I track my DTDC courier without tracking number?",
				a: "To locate your DTDC parcel without a tracking number, get in touch with DTDC's customer service and provide them with details such as the sender's and recipient's information or any reference number given during booking.",
			},
			{
				q: "How to track DTDC courier with mobile number?",
				a: "Tracking a DTDC courier using a mobile number directly is usually not possible. Nonetheless, you can reach out to DTDC customer service, and they may be able to help you by using the mobile number and other shipment information.",
			},
		],
	},
	"delhivery-tracking": {
		title: "Delhivery Courier Tracking",
		about: "Delhivery is a leading logistics and supply chain services company based in India. Established in 2011, Delhivery has grown rapidly to become one of the largest and most trusted logistics providers in the country. The company offers a comprehensive range of services including express parcel transportation, freight forwarding, warehousing, and fulfillment services.\n\nDelhivery operates a robust network that spans across more than 17,500 pin codes in India, covering both urban and rural areas. With over 3,500 delivery centers and a fleet of vehicles, Delhivery ensures efficient and reliable delivery of shipments nationwide.\nThe company leverages advanced technology and analytics to optimize operations and provide superior customer service. Delhivery's tracking system allows customers to track their shipments in real-time, providing visibility and transparency throughout the delivery process.\nDelhivery is committed to innovation and continuous improvement, aiming to redefine logistics and supply chain solutions in India through technology-driven initiatives and strategic partnerships.",
		services: [
			{
				name: "Service Details",
				description:
					"Delhivery provides robust tracking services for shipments within India. Customers can easily track their parcels using Delhivery's online tracking system. By entering the unique tracking number provided at the time of booking on the Delhivery website or mobile app, customers can monitor their shipment's real-time status, including its current location and expected delivery time. This tracking capability ensures transparency and reliability throughout the delivery process, enhancing customer satisfaction by providing accurate and timely information.",
			},
		],
		trackingStatusListDescription:
			"During the entire shipment process, Delhivery helps you track every move of your parcel. These shipment alerts are displayed to you in the form of tracking status, through which you can easily detect real-time progress. These statuses offer information, including transit points, current routes, expected delivery date, and any important event that might hinder the delivery.\n\nBelow are descriptions of some of these prominent statuses.",
		trackingStatusList: [
			{
				status: "Shipment Created",
				description: "The shipment information has been entered into the system.",
			},
			{
				status: "In Transit",
				description: "The package is on its way to the destination.",
			},
			{
				status: "Out for Delivery",
				description: "The package is on its final leg of delivery to the recipient.",
			},
			{
				status: "Shipment delivered",
				description: "The package has been successfully delivered to the recipient.",
			},
		],
		faq: [
			{
				q: "How can I track my package?",
				a: "You can track your package by entering the tracking number provided to you in the tracking section of our website or mobile app.",
			},
			{
				q: "What should I do if my package is marked as delivered but I haven't received it?",
				a: "If your package is marked as delivered but you haven't received it:\n- Check around your property for the package.\n- Ask neighbors if they received it on your behalf.\n- Contact the courier or the sender for further assistance.",
			},
			{
				q: "Can I change the delivery address after my package has shipped?",
				a: "Changing the delivery address after shipping is not always possible. Contact the courier or the sender as soon as possible to inquire about making changes.",
			},
			{
				q: "What happens if I'm not home to receive my package?",
				a: "If you're not home to receive your package, the courier may:\n- Leave the package in a secure location.\n- Leave a notice with instructions for rescheduling delivery or picking up the package.\n- Attempt to deliver again on the next business day.",
			},
			{
				q: "What should I do if my package is damaged?",
				a: "If your package arrives damaged:\n- Document the damage with photos.\n- Contact the courier and the sender immediately to report the issue and initiate a claim.",
			},
		],
	},
	"shree-tirupati-courier-tracking": {
		title: "Shree Tirupati Courier Tracking",
		about: "Shree Tirupati Courier Services Pvt. Ltd. is a well-established Indian courier company, founded in 2003 and headquartered in Rajkot, Gujarat. The company offers a range of services including domestic and international courier services, same-day express, overnight express, air freight, and retail chain store distribution. With an extensive network of over 650 branches and 725 satellite points, Shree Tirupati Courier covers a significant portion of India.",
		services: [
			{
				name: "Same Day Express",
				description: "Urgent same-day delivery service for time-critical shipments within serviceable areas.",
			},
			{
				name: "Overnight Express",
				description: "Next-day delivery service ensuring packages reach their destination by the following business day.",
			},
			{
				name: "Air Freight",
				description: "Expedited air freight service for faster delivery of parcels and cargo across long distances.",
			},
			{
				name: "Document Courier",
				description: "Specialized courier service for safe and reliable delivery of important documents.",
			},
			{
				name: "Small Parcel Express",
				description: "Express delivery service tailored for small parcels with quick turnaround times.",
			},
			{
				name: "Retail Chain Store Distribution",
				description: "Distribution solutions for retail chains, ensuring timely delivery of goods to multiple store locations.",
			},
		],
		trackingStatusListDescription:
			"During the entire shipment process, Shree Tirupati Courier helps you track every move of your parcel. These shipment alerts are displayed to you in the form of tracking status, through which you can easily detect real-time progress. These statuses offer information, including transit points, current routes, expected delivery date, and any important event that might hinder the delivery.\n\nBelow are descriptions of some of these prominent statuses.",
		trackingStatusList: [
			{
				status: "In Transit",
				description: "The package is on its way to the destination.",
			},
			{
				status: "Out for Delivery",
				description: "The package is out for delivery and will arrive soon.",
			},
			{
				status: "Delivered",
				description: "The package has been delivered to the recipient.",
			},
			{
				status: "Returned to Sender",
				description: "The package could not be delivered and is being sent back to the sender.",
			},
			{
				status: "Attempted Delivery",
				description: "Delivery was attempted, but it was unsuccessful. This might occur if no one was available to receive the package.",
			},
			{
				status: "Arrived at Hub",
				description: "The package has arrived at a central hub and is being processed for the next stage of delivery.",
			},
			{
				status: "Pending",
				description: "The shipment is pending and hasn't been dispatched yet.",
			},
		],
		faq: [
			{
				q: "How can I track my Tirupati package?",
				a: "You can track your Tirupati package by entering the tracking number on the Tirupati tracking page, using the Tirupati mobile app, or contacting Tirupati customer service.",
			},
			{
				q: "What is a delivery exception with Tirupati?",
				a: "A delivery exception occurs when there is an unexpected event that causes a delay in your shipment's delivery. Common exceptions include incorrect address information, severe weather, or the recipient being unavailable.",
			},
			{
				q: "Why is my Tirupati package delayed?",
				a: "Common reasons for delays include:\n- Adverse weather conditions\n- High volume of shipments\n- Customs processing (for international packages)\n- Incorrect address information\nCheck your tracking details or contact customer service for specific information.",
			},
			{
				q: "What happens if I'm not home to receive my Tirupati package?",
				a: "If you're not home, the courier may:\n- Leave the package in a secure location.\n- Leave a notice with instructions for rescheduling delivery or picking up the package from a nearby Tirupati location.\n- Attempt delivery again on the next business day.",
			},
			{
				q: "How do I track an international shipment with Tirupati?",
				a: "Tracking an international shipment works the same way as domestic tracking. Enter the tracking number on the Tirupati tracking page. Note that international shipments may take longer due to customs processing.",
			},
		],
	},
	"dpd-tracking": {
		title: "DPD Courier Tracking",
		about: "DPD (Dynamic Parcel Distribution) is a leading European parcel delivery service founded in 1977 in Aschaffenburg, Germany, under the name \"Deutscher Paketdienst\" (German Parcel Service). Throughout the 1980s, DPD expanded its network across Germany, and in the 1990s began international expansion by forming partnerships and acquiring parcel delivery companies across Europe.\n\nIn 2001, DPD was acquired by La Poste Group, the French postal service, further strengthening its position in the European parcel delivery market. DPD has been at the forefront of integrating technology into its operations, including advanced parcel tracking systems, delivery prediction tools, and customer notification services. The company has also placed a strong emphasis on sustainability, implementing initiatives to reduce carbon emissions and promote eco-friendly delivery practices, including using electric vehicles and optimizing delivery routes.\n\nToday, DPD is recognized as one of the leading parcel delivery providers in Europe, known for its reliability, efficiency, and commitment to customer satisfaction.",
		services: [
			{
				name: "Comprehensive Service Network",
				description: "DPD operates a vast network covering many European countries and international destinations for domestic and international parcel delivery.",
			},
			{
				name: "Customer-Centric Approach",
				description: "DPD focuses on providing a seamless customer experience through advanced tracking, flexible delivery options, and proactive communication.",
			},
			{
				name: "Innovative Solutions",
				description: "Embracing digitalization and technological advancements to streamline operations and improve service quality, including real-time tracking and delivery prediction tools.",
			},
			{
				name: "Environmental Commitment",
				description: "Implementing sustainable practices and initiatives to minimize the environmental impact of parcel delivery operations, including electric vehicles and optimized routes.",
			},
		],
		trackingStatusListDescription:
			"During the entire shipment process, DPD helps you track every move of your parcel. These shipment alerts are displayed to you in the form of tracking status, through which you can easily detect real-time progress. These statuses offer information, including transit points, current routes, expected delivery date, and any important event that might hinder the delivery.\n\nBelow are descriptions of some of these prominent statuses.",
		trackingStatusList: [
			{
				status: "Order Information Received",
				description: "DPD has received the shipment details from the sender but the parcel has not yet been picked up.",
			},
			{
				status: "Parcel Picked Up",
				description: "The parcel has been collected from the sender and is in the DPD network.",
			},
			{
				status: "In Transit",
				description: "The parcel is on its way to the delivery depot or the next transit point. You may see updates as the parcel moves through different sorting facilities.",
			},
			{
				status: "Out for Delivery",
				description: "The parcel is on the delivery vehicle and will be delivered soon. You will typically receive a one-hour delivery window notification.",
			},
			{
				status: "Delivered",
				description: "The parcel has been successfully delivered to the recipient. Proof of delivery (such as a signature or photo) is usually available.",
			},
			{
				status: "Delivery Attempted",
				description: "A delivery attempt was made but was unsuccessful. The parcel may be taken back to the depot, and a notification will be left for the recipient.",
			},
			{
				status: "Awaiting Collection",
				description: "The parcel is waiting to be collected from a specified location (e.g., a DPD Pickup Shop).",
			},
			{
				status: "Held at Depot",
				description: "The parcel is being held at the delivery depot, possibly due to an issue such as an incorrect address or a request from the sender.",
			},
			{
				status: "Customs Clearance",
				description: "For international shipments, the parcel is undergoing customs clearance.",
			},
			{
				status: "Returned to Sender",
				description: "The parcel is being returned to the sender, often due to issues such as incorrect address, refusal by the recipient, or inability to deliver after multiple attempts.",
			},
		],
		faq: [
			{
				q: "How do I track my DPD package?",
				a: "You can check on the shipping status of your parcel by simply entering the parcel label number or reference number. Track your parcel live and see when we'll be ringing your doorbell. Right down to the last 30 minutes! In addition, myDPD or our app enable you to redirect parcels and register your delivery preferences.",
			},
			{
				q: "How do I track my delivery status?",
				a: 'Most carriers have a designated tracking page where you can enter your tracking number. Enter the tracking number: Input your tracking number into the appropriate field and click the "Track" button or a similar prompt. This should display the current status and location of your package.',
			},
			{
				q: "How accurate is DPD tracking?",
				a: "Whether it's within the UK or heading across international borders, our tracking tool is free to use on all parcel services and provides accurate updates on your parcel's journey. With DPD, you can trust that your tracking information is always up-to-date and reliable.",
			},
			{
				q: "Can you track live with DPD?",
				a: "The Live-Tracking function is only available to you once your parcel is in the delivery vehicle. As soon as this is the case we inform you with our Predict service by email and/or SMS about the delivery and the activation of the Live-Tracking function.",
			},
		],
	},
	"ebay-tracking": {
		title: "eBay Courier Tracking",
		about: "AuctionWeb, which later became eBay, was established in California on September 3, 1995 by Pierre Omidyar, a French Iranian-American programmer. Initially part of a broader personal site, AuctionWeb's first notable sale was a defective laser pointer auctioned for $14.83. Omidyar, surprised by this sale, contacted the buyer to confirm their understanding of the item's condition. The buyer responded, stating they collected broken laser pointers.\n\nIn September 1997, the company officially rebranded from AuctionWeb to eBay. Originally, the website was under Echo Bay Technology Group, a firm founded by Omidyar. Attempting to register echobay.com, Omidyar found it taken by Echo Bay Mines, a gold mining company. Consequently, he chose eBay.com as the next best domain name option.",
		services: [
			{
				name: "Fully Tracked Service",
				description: "Customers benefit from full transparency on their shipments. eBay fulfillment by Orange Connex provides end-to-end tracking, helping sellers gain customer trust and improve seller ratings.",
			},
			{
				name: "Next Day Delivery",
				description: "Same day dispatch with late cut-off times, offering an option of next day or standard delivery to customers for faster order fulfillment.",
			},
			{
				name: "Multi Channel Capability",
				description: "You can retail products on eBay, your e-store, or any other sales platforms, with storage, packaging, and shipping managed by eBay's fulfillment service through Orange Connex.",
			},
		],
		trackingStatusListDescription:
			"eBay relies on external shipping services for delivering goods purchased on their platform. The primary couriers used vary by country. Below is an overview of shipping carriers available through eBay by region.",
		trackingStatusList: [
			{
				status: "USA",
				description: "USPS, UPS, Pitney Bowes, wnDirect, FedEx, DHL",
			},
			{
				status: "UK",
				description: "Royal Mail, UK Mail (DHL Parcel UK), 13ten, CollectPlus, DPD, FedEx, Hermes, Parcelforce Worldwide, wnDirect, Yodel, Bpost",
			},
			{
				status: "Canada",
				description: "Canada Post, Canpar, wnDirect, DHL",
			},
			{
				status: "Australia",
				description: "Australia Post, Fastway Couriers, wnDirect, DHL, FedEx",
			},
			{
				status: "China",
				description: "China Post, ePacket, SpeedPAK, WINIT, 4PX, FedEx, DHL, UPS, Hong Kong Post, Pos Malaysia, Singapore Post",
			},
		],
		faq: [
			{
				q: "What's an eBay Store?",
				a: "eBay is a global marketplace. You can create your own storefront on this ecommerce platform and reach out to millions of buyers around the world. eBay also offers full support to sellers on its platform.",
			},
			{
				q: "How does eBay shipment tracking work?",
				a: 'Sign in to your eBay account and place your cursor over "My eBay" in the upper right-hand corner of the homepage. Next, select "Purchase History" from the dropdown menu. Find the item you wish to track, and the shipment status will appear next to the item\'s image. For additional details, click on the provided tracking number or select "View Order Details."',
			},
			{
				q: "How much do eBay shipping labels cost?",
				a: "You don't pay for the shipping label itself. Instead, you cover the cost of shipping the item, which is calculated based on the weight and dimensions of the package.",
			},
			{
				q: "Is it cheaper to use eBay shipping?",
				a: "Link your eBay account to our pre-arranged discounted rates and enjoy savings of up to 91% on shipping costs, particularly with international shippers.",
			},
			{
				q: "Does eBay Do Free Delivery?",
				a: "Yes, some sellers on eBay offer free shipping.",
			},
			{
				q: "Can You Overcharge Shipping on eBay?",
				a: "Sellers have the freedom to set their prices for both the item and its shipping. Although various reasons might contribute to high shipping fees, the buyer ultimately decides whether to proceed with the purchase.",
			},
		],
	},
	"tnt-express-tracking": {
		title: "TNT Express Courier Tracking",
		about: "TNT Express is a prominent international courier delivery services company, which was originally founded in Australia and later became part of the Dutch postal company TNT N.V. (now PostNL). TNT Express is known for providing comprehensive express delivery services worldwide, catering to businesses and individual customers alike. The company operates a vast global network, covering over 200 countries, with major air and road hubs in key regions enabling efficient international and domestic deliveries.\n\nTNT Express was acquired by FedEx in 2016, further expanding its global logistics capabilities. The company continues to provide a range of logistics solutions including express delivery, freight services, economy express, and special services.",
		services: [
			{
				name: "Express Delivery",
				description: "Time-critical deliveries with a range of express services, including same-day, next-day, and scheduled delivery options.",
			},
			{
				name: "Freight Services",
				description: "Transportation of heavy or bulky goods through air, road, and sea freight solutions.",
			},
			{
				name: "Economy Express",
				description: "Cost-effective delivery options for less urgent shipments.",
			},
			{
				name: "Special Services",
				description: "Tailored logistics solutions for unique requirements, including temperature-controlled transport and secure shipments.",
			},
			{
				name: "eCommerce Solutions",
				description: "Specialized services to support eCommerce businesses, including integrated shipping solutions and returns management.",
			},
		],
		trackingStatusListDescription:
			"During the entire shipment process, TNT Express helps you track every move of your parcel. These shipment alerts are displayed to you in the form of tracking status, through which you can easily detect real-time progress.\n\nBelow are descriptions of some of these prominent statuses.",
		trackingStatusList: [
			{
				status: "In Transit",
				description: "The package is on its way to the delivery address.",
			},
			{
				status: "Out for Delivery",
				description: "The package is with the delivery agent and will be delivered soon.",
			},
			{
				status: "Delivered",
				description: "The package has been delivered to the recipient.",
			},
			{
				status: "Exception",
				description: "There is an issue with the delivery, such as an incorrect address or recipient unavailable.",
			},
			{
				status: "Return to Sender",
				description: "The package is being returned to the sender due to delivery failure.",
			},
		],
		faq: [
			{
				q: "What is TNT Express?",
				a: "TNT Express is a global courier delivery services company providing a range of logistics solutions including express delivery, freight services, economy express, and special services. It operates in over 200 countries and was acquired by FedEx in 2016.",
			},
			{
				q: "How can I track my TNT Express shipment?",
				a: "You can track your shipment by visiting the TNT Tracking Page and entering your tracking number. This will provide you with real-time updates on the status and location of your package.",
			},
			{
				q: "What should I do if I miss my delivery?",
				a: "If you miss a delivery, TNT Express typically attempts delivery again. You can also contact customer support to reschedule the delivery or arrange for pickup from a nearby location.",
			},
			{
				q: "Does TNT Express offer international shipping?",
				a: "Yes, TNT Express provides cross-border logistics and international shipping services, handling customs and other regulatory requirements.",
			},
		],
	},
	"aliexpress-tracking": {
		title: "AliExpress Courier Tracking",
		about: "AliExpress, an online retail platform under the Alibaba Group headquartered in China, specializes in providing goods at wholesale rates to both businesses and individual customers. Established in 2010, it comprises a network of small enterprises primarily based in China but also in locations like Singapore, catering to global consumers through digital means. Renowned as the leading e-commerce platform in Russia and holding a position among the top ten in Brazil, AliExpress facilitates the international reach of Chinese small-scale enterprises.\n\nOriginally conceived as a hub for business-to-business transactions, AliExpress has since evolved to encompass transactions between businesses and consumers as well as peer-to-peer exchanges. Presently, the platform supports multiple languages, including Arabic, English, Spanish, French, German, Italian, Dutch, Portuguese, Russian, Turkish, Japanese, Korean, and many more.",
		services: [
			{
				name: "Global Retail Platform",
				description: "AliExpress provides an extensive online marketplace connecting international buyers with sellers primarily based in China. The platform offers products at wholesale rates with worldwide shipping to over 200 countries.",
			},
		],
		trackingStatusListDescription:
			"When you make a purchase online, your order progresses through several phases before it arrives at your doorstep. Each phase has a distinct status, which allows you to monitor the journey of your order. Knowing these statuses can provide you with a better understanding of your order's location in the delivery process. Here is an explanation of typical order tracking statuses and what they signify:",
		trackingStatusList: [
			{
				status: "Order Received",
				description: "The seller has confirmed the order and will soon contact the buyer with the shipping and tracking information.",
			},
			{
				status: "Awaiting Clarification",
				description: "The purchaser must supply further information such as the product link, quantity, and particular characteristics (color, size) for the order to move forward.",
			},
			{
				status: "Order Unfulfillable",
				description: "The product cannot be shipped internationally.",
			},
			{
				status: "Order Amount",
				description: "The buyer has been informed of the full amount, which includes the cost of the product and the shipping charges.",
			},
			{
				status: "Order in Progress",
				description: "The buyer is in the process of finalizing the purchase.",
			},
			{
				status: "Purchased",
				description: "The product has been purchased and is pending shipment from the warehouse.",
			},
			{
				status: "Order Packed",
				description: "The product is prepared and ready for shipping.",
			},
			{
				status: "Order Consolidated",
				description: "The product has been packaged into a single parcel.",
			},
			{
				status: "Order Invoice",
				description: "The invoice for the order has been generated.",
			},
			{
				status: "Shipped",
				description: "The order has been shipped and is in transit.",
			},
			{
				status: "Order Arrived",
				description: "The order has reached its planned destination.",
			},
			{
				status: "Order Cancelled",
				description: "The customer has made the decision to rescind the order.",
			},
			{
				status: "Order Refunded",
				description: "The seller has begun the process of issuing a refund for the order.",
			},
			{
				status: "Order Abandoned",
				description: "There is no information currently accessible regarding the order, usually because there has been no response or action taken.",
			},
		],
		faq: [
			{
				q: "Are AliExpress tracking numbers unique to each shipment?",
				a: "Yes, each tracking number from AliExpress is specific to an individual shipment. It allows you to keep track of your package's status and provides important information on where it is and when it is expected to be delivered.",
			},
			{
				q: "Do all AliExpress shipments come with tracking information?",
				a: "The majority of AliExpress shipments are accompanied by tracking information, though certain inexpensive shipping methods may lack tracking details. If tracking is crucial for your order, ensure to opt for a shipping method on AliExpress that guarantees tracking.",
			},
			{
				q: "How can I track my AliExpress return shipment?",
				a: "To monitor your AliExpress return package, utilize the return tracking number supplied by either the seller or AliExpress and input it into our shipment tracking portal.",
			},
			{
				q: 'What does "Packed for picking-up" mean?',
				a: '"Ready for pickup" does not signify a shipping status in the typical sense. It means the seller is preparing to dispatch or hand over the package to the carrier soon.',
			},
			{
				q: "Am I able to trace the delivery of an AliExpress package if it's being transported by a local shipping service in my area?",
				a: "It is possible to trace your AliExpress package even when it is passed on to a local delivery service in your area. The initial tracking code should continue to be valid, or alternatively, you may be provided with a new tracking code by the local courier to monitor its progress within your country.",
			},
		],
	},
	"gati-tracking": {
		title: "Gati Courier Tracking",
		about: "Gati was founded in 1989 by Mahendra Agarwal and Harish Chandra Agarwal in Hyderabad, India. It started as a local courier company with a vision to provide efficient logistics solutions across the country. Throughout the 1990s and early 2000s, Gati expanded its network and service offerings significantly, establishing itself as a reliable player in the Indian logistics industry, focusing on express distribution and supply chain management.\n\nGati was one of the early adopters of technology in the logistics sector in India, implementing advanced tracking systems and integrated technology-driven solutions. In 1995, Gati went public and got listed on the Bombay Stock Exchange (BSE) and the National Stock Exchange (NSE). Over the years, Gati formed strategic partnerships with global logistics players and diversified its services to include warehousing, cold chain logistics, e-commerce logistics, and freight forwarding. Today, Gati continues to be a key player in the Indian logistics industry, focusing on innovation and customer-centric solutions.",
		services: [
			{
				name: "Express Delivery",
				description: "Fast and reliable express delivery services for shipments within India, including time-sensitive deliveries where parcels are transported swiftly to their destinations.",
			},
			{
				name: "Standard Delivery",
				description: "Cost-effective delivery options for less urgent shipments, ensuring reasonable delivery times while maintaining affordability.",
			},
			{
				name: "Surface Transport",
				description: "Surface transport services for bulk shipments or deliveries that do not require immediate delivery. Economical for transporting goods over longer distances within India.",
			},
			{
				name: "Door-to-Door Pickup and Delivery",
				description: "Customers can schedule pickups from their location, with door-to-door delivery services across India for individuals and businesses alike.",
			},
			{
				name: "International Express",
				description: "Expedited international courier services for shipments to various countries, ensuring fast delivery times for urgent or time-sensitive shipments.",
			},
			{
				name: "International Standard",
				description: "Cost-effective options for international shipments that do not require immediate delivery, balancing cost-efficiency with reasonable transit times.",
			},
			{
				name: "Customs Clearance",
				description: "Handling customs clearance procedures for international shipments, ensuring smooth processing and compliance with international regulations.",
			},
			{
				name: "Cold Chain Logistics",
				description: "Temperature-controlled logistics solutions for sensitive goods, ensuring proper handling and storage throughout the supply chain.",
			},
		],
		trackingStatusListDescription:
			"During the entire shipment process, Gati helps you track every move of your parcel. These shipment alerts are displayed in the form of tracking status, through which you can easily detect real-time progress.\n\nBelow are descriptions of some of these prominent statuses.",
		trackingStatusList: [
			{
				status: "Order Received",
				description: "Gati has received the shipping information from the sender.",
			},
			{
				status: "In Transit",
				description: "Your shipment is on its way to the destination.",
			},
			{
				status: "Out for Delivery",
				description: "The shipment is currently out for delivery to the recipient.",
			},
			{
				status: "Delivered",
				description: "The shipment has been successfully delivered to the recipient.",
			},
			{
				status: "Hold at Location",
				description: "The shipment is being held at a Gati facility or another location for some reason (e.g., recipient not available).",
			},
			{
				status: "Exception",
				description: "There may be an issue with the shipment (e.g., address issue, customs delay) that requires attention.",
			},
			{
				status: "Undelivered",
				description: "Delivery was attempted but unsuccessful. Reasons could include an incorrect address or recipient unavailable.",
			},
		],
		faq: [
			{
				q: "What services does Gati offer?",
				a: "Gati provides a range of logistics services including express distribution, freight forwarding, supply chain solutions, cold chain logistics, e-commerce logistics, and warehousing services.",
			},
			{
				q: "How can I track my shipment with Gati?",
				a: "You can track your shipment by visiting the Gati website (www.gati.com) and entering your tracking number in the tracking section. Alternatively, you can use their mobile app for tracking purposes.",
			},
			{
				q: "What are Gati's customer service contact details?",
				a: "You can reach Gati's customer service through their website or by calling their customer care number, which is typically available on their website and shipping documents.",
			},
			{
				q: "Does Gati offer international shipping services?",
				a: "Yes, Gati provides international shipping and freight forwarding services to various destinations worldwide. They have partnerships and alliances with global logistics networks to facilitate this.",
			},
		],
	},
	"shree-maruti-courier-tracking": {
		title: "Shree Maruti Courier Tracking",
		about: "Shree Maruti Integrated Logistics Limited, formerly known as Shree Maruti Courier Services Pvt. Ltd., is a prominent logistics and courier service provider in India. Established in 1985, the company has grown significantly over the decades. It operates an extensive domestic network covering over 2600 locations and 4200 pin codes, with services extending to more than 200 global locations.\n\nThe company prides itself on its commitment to reliable and timely delivery. This has been a cornerstone of its business philosophy, as emphasized by the founder and continued by the current management. Shree Maruti has achieved several milestones, including ISO 9001 certification and numerous service contracts with major financial institutions.\n\nShree Maruti Courier has also focused on sustainable growth, balancing expansion with operational depth and reliability. This strategy has allowed it to remain profitable and debt-free, distinguishing itself from many other startups in the logistics sector.",
		services: [
			{
				name: "Hyperlocal Delivery",
				description: "Ultra-fast delivery services to minimize waiting times and ensure prompt delivery, including doorstep delivery for enhanced customer satisfaction.",
			},
			{
				name: "E-commerce Delivery",
				description: "Comprehensive logistic solutions covering inventory management, product shipping, API integration, TAT, RTO management, and real-time tracking for both sellers and customers.",
			},
			{
				name: "Domestic Delivery (Standard Surface)",
				description: "Expanded to 15,000 locations with door-to-door delivery. Cost-effective with competitive rates and real-time tracking for shipments under 50 KG.",
			},
			{
				name: "Domestic Delivery (Standard Air)",
				description: "Uses direct flight connections between major airports for urgent deliveries, providing fast and reliable air courier service with real-time tracking.",
			},
			{
				name: "International Delivery",
				description: "Dependable international parcel and document shipping to over 220 countries, supporting both inbound and outbound shipping with an online tracking feature.",
			},
			{
				name: "Travel-Free Service",
				description: "Doorstep luggage and baggage delivery service allowing customers to travel without worry. Shree Maruti manages and delivers belongings safely with online tracking.",
			},
		],
		trackingStatusListDescription:
			"If you are using Shree Maruti's tracking service for the first time, its tracking status information might seem somewhat unknown to you. When you check your courier status through their website, you will see the booking information in the first section.\n\nBelow are descriptions of the common tracking statuses.",
		trackingStatusList: [
			{
				status: "In Transit",
				description: "The package is on its way to the destination.",
			},
			{
				status: "Out for Delivery",
				description: "The package is out for delivery and will arrive soon.",
			},
			{
				status: "Delivered",
				description: "The package has been delivered to the recipient.",
			},
			{
				status: "Returned to Sender",
				description: "The package could not be delivered and is being sent back to the sender.",
			},
			{
				status: "Attempted Delivery",
				description: "Delivery was attempted, but it was unsuccessful. This might occur if no one was available to receive the package.",
			},
			{
				status: "Arrived at Hub",
				description: "The package has arrived at a central hub and is being processed for the next stage of delivery.",
			},
			{
				status: "Pending",
				description: "The shipment is pending and hasn't been dispatched yet.",
			},
		],
		faq: [],
	},
	"flipkart-tracking": {
		title: "Flipkart Courier Tracking",
		about: "Flipkart, established in 2007, is a prominent Indian eCommerce platform that has transformed the way India shops. Operating as a vast marketplace, it connects millions of sellers with customers across the country, offering everything from electronics and appliances to fashion and home essentials. With a robust logistics network, including its in-house arm Ekart, Flipkart ensures reliable delivery even to the remotest parts of India.",
		services: [
			{
				name: "Flipkart Courier Tracking Service",
				description: "Flipkart offers a reliable courier tracking service to ensure customers can monitor the delivery progress of their orders seamlessly. By entering the Flipkart tracking ID or tracking number, you can easily track up to 10 Flipkart orders simultaneously, providing transparency throughout the shipping process from dispatch to delivery.",
			},
		],
		trackingStatusListDescription:
			"During the entire shipment process, Flipkart helps you track every move of your parcel. These shipment alerts are displayed in the form of tracking status, through which you can easily detect real-time progress.\n\nBelow are descriptions of the common tracking statuses.",
		trackingStatusList: [
			{
				status: "In Transit",
				description: "The package is on its way to the destination.",
			},
			{
				status: "Out for Delivery",
				description: "The package is out for delivery and will arrive soon.",
			},
			{
				status: "Delivered",
				description: "The package has been delivered to the recipient.",
			},
			{
				status: "Returned to Sender",
				description: "The package could not be delivered and is being sent back to the sender.",
			},
			{
				status: "Attempted Delivery",
				description: "Delivery was attempted, but it was unsuccessful. This might occur if no one was available to receive the package.",
			},
			{
				status: "Arrived at Hub",
				description: "The package has arrived at a central hub and is being processed for the next stage of delivery.",
			},
			{
				status: "Pending",
				description: "The shipment is pending and hasn't been dispatched yet.",
			},
		],
		faq: [
			{
				q: "How can I track my Flipkart order?",
				a: "You can track your Flipkart order using the tracking ID or tracking number provided at the time of purchase. Enter it on the Flipkart website or use services like Ship24 for updates.",
			},
			{
				q: "What products does Flipkart sell?",
				a: "Flipkart offers a wide range of products including electronic accessories, home appliances, clothing, gym equipment, and more.",
			},
			{
				q: "How do I contact Flipkart customer support?",
				a: "For customer support, visit the Flipkart website or app and navigate to the Help Center section for assistance with orders, returns, and other inquiries.",
			},
			{
				q: "Does Flipkart ship internationally?",
				a: "Yes, Flipkart provides international shipping for select products. Check product listings or contact customer support for specific international shipping details.",
			},
		],
	},
	"amazon-tracking": {
		title: "Amazon Courier Tracking",
		about: "Amazon has revolutionized online shopping, offering an extensive range of products, competitive prices, and fast shipping options worldwide. As one of the world's most customer-centric retailers, Amazon provides a robust logistics network, including Amazon Prime's expedited shipping. Whether you're an occasional shopper or a Prime member, understanding how to track your packages is crucial for staying updated on your order status and ensuring a seamless delivery experience.",
		services: [
			{
				name: "Amazon Prime Shipping",
				description: "Expedited delivery service offering fast and reliable shipping for members.",
			},
			{
				name: "Amazon Global Shipping",
				description: "Reliable international delivery service for products shipped across borders.",
			},
		],
		trackingStatusListDescription:
			"When you check your Amazon tracking status, you may encounter different phrases depending on the current stage of your order. Below are explanations of the standard Amazon Tracking Statuses and their meanings.",
		trackingStatusList: [
			{
				status: "Order Confirmation",
				description: "Following a customer's purchase on Amazon, they receive an email confirmation indicating the successful placement of their order.",
			},
			{
				status: "Preparation Stage",
				description: "Once confirmed, the seller, whether Amazon or a third-party, begins preparing the item for shipment by packaging and labeling it accordingly.",
			},
			{
				status: "Shipping Process",
				description: "The seller dispatches the package through a chosen carrier, updating the system to reflect the item's transit status. A tracking number is often provided.",
			},
			{
				status: "Transit Journey",
				description: "During this phase, the package undergoes various steps as it travels to its destination. This may involve sorting facilities and loading onto delivery vehicles.",
			},
			{
				status: "On the Way",
				description: "The package is loaded onto a local delivery vehicle for the final leg of its journey. The tracking status updates to reflect that it's now out for delivery.",
			},
			{
				status: "Delivery Completed",
				description: "The package is successfully delivered to the specified address, and the order tracking status is updated to indicate delivery completion.",
			},
			{
				status: "Delivery Attempt",
				description: "In the event of a failed delivery, the tracking status may display 'attempted delivery' or 'delivery failed.' The package may be held or a re-delivery attempt may be made.",
			},
		],
		faq: [
			{
				q: "How can I track my Amazon order?",
				a: "You can track your Amazon order by navigating to 'Your Orders' in your Amazon account or by using the tracking link provided in your order confirmation email.",
			},
			{
				q: "Why hasn't my Amazon tracking information updated?",
				a: "There could be several reasons why tracking information hasn't updated: The package hasn’t been scanned by the courier yet, there may be delays in the courier's system, or the package is in transit between facilities.",
			},
			{
				q: "What should I do if my Amazon package is delayed?",
				a: "If your Amazon package is delayed, monitor the tracking information for updates. In some cases, delays may occur due to weather, high package volumes, or other unforeseen circumstances beyond Amazon's control.",
			},
			{
				q: "How do I request proof of delivery for my Amazon package?",
				a: "You can request proof of delivery from Amazon customer service, who can provide you with the delivery confirmation details for your order.",
			},
			{
				q: "Can I track my Amazon package without a tracking number?",
				a: "No, you need a tracking number to track your Amazon package. If you haven't received a tracking number, contact Amazon customer service for assistance.",
			},
		],
	},
	"shopee-tracking": {
		title: "Shopee Courier Tracking",
		about: "Shopee partners with various courier services to ensure efficient delivery of products purchased on their platform. The logistics system is designed to accommodate different types of deliveries based on speed, cost, and customer preference. By integrating both in-house logistics like Shopee Express (SPX) and reputable third-party partners such as J&T Express, Ninja Van, and DHL, Shopee provides a comprehensive shipping ecosystem that supports real-time tracking, Cash on Delivery (COD), and insurance for shipments.",
		services: [
			{
				name: "Shopee Express (SPX)",
				description: "Shopee's in-house logistics service providing streamlined and faster delivery options within specific regions, fully integrated with the Shopee app for real-time tracking.",
			},
			{
				name: "Standard Delivery",
				description: "The default shipping option managed by Shopee Express or partner couriers, offering a balanced approach between delivery speed and shipping cost.",
			},
			{
				name: "Economy Delivery",
				description: "A more affordable shipping method suitable for non-urgent shipments, typically featuring longer delivery times compared to standard services.",
			},
			{
				name: "Same-day/Next-day Delivery",
				description: "Premium delivery services available in select areas for urgent orders, typically managed by Shopee Express or specialized premium courier partners.",
			},
		],
		trackingStatusListDescription:
			"Shopee provides detailed tracking updates to keep both buyers and sellers informed about the package's journey. Below are descriptions of the common tracking statuses you will see in the Shopee app.",
		trackingStatusList: [
			{
				status: "Order Received",
				description: "The order has been successfully placed and received by the seller.",
			},
			{
				status: "Order Processed",
				description: "The seller is currently preparing the order for shipment.",
			},
			{
				status: "Shipped",
				description: "The order has been handed over to the courier service and is departing from the seller's location.",
			},
			{
				status: "In Transit",
				description: "The package is on its way to the delivery address, passing through sorting centers or hubs.",
			},
			{
				status: "Out for Delivery",
				description: "The courier is currently delivering the package to the specified recipient address.",
			},
			{
				status: "Delivered",
				description: "The package has been successfully delivered to the specified address.",
			},
			{
				status: "Failed Delivery Attempt",
				description: "The courier attempted to deliver but was unsuccessful. A re-delivery attempt will typically be scheduled.",
			},
		],
		faq: [
			{
				q: "What is Shopee?",
				a: "Shopee is a leading e-commerce platform that allows users to buy and sell a wide variety of products online across Southeast Asia and Taiwan.",
			},
			{
				q: "Where is Shopee available?",
				a: "Shopee operates in several countries including Singapore, Malaysia, Thailand, Indonesia, Vietnam, the Philippines, and Taiwan.",
			},
			{
				q: "What are the available shipping options?",
				a: "Shopee offers various shipping options including Standard Delivery, Economy Delivery, and Same-day/Next-day Delivery, depending on the location and specific courier.",
			},
			{
				q: "How are shipping fees calculated?",
				a: "Shipping fees are calculated based on the weight and dimensions of the package, the chosen shipping method, and the destination address.",
			},
			{
				q: "Can I change my shipping address after placing an order?",
				a: "In most cases, you cannot change the address after placing an order. You should contact the seller immediately or cancel and re-order if the option is available.",
			},
		],
	},
	"bluecare-express-tracking": {
		title: "Bluecare Express Tracking",
		about: "Bluecare Express is a global courier service that specializes in providing efficient and reliable shipping solutions to numerous countries worldwide. The company is widely known for its integration with major e-commerce platforms and its partnership with leading logistics networks. Bluecare Express offers a robust tracking system that allows both senders and recipients to monitor the status and movement of their packages in real-time using a unique tracking number.",
		services: [
			{
				name: "Global Shipping Services",
				description: "Comprehensive international shipping solutions covering numerous countries worldwide, designed for both small parcels and larger shipments with end-to-end visibility.",
			},
			{
				name: "Amazon Partner Delivery",
				description: "Bluecare Express shipments are frequently handled by Amazon's delivery network, ensuring high-speed local fulfillment and professional handling for e-commerce orders.",
			},
		],
		trackingStatusListDescription:
			"Bluecare Express provides a series of detailed status updates as your package moves through their network. Understanding these statuses helps you stay informed about the expected delivery time.",
		trackingStatusList: [
			{
				status: "Order Information Received",
				description: "The shipment details have been electronically received from the sender, but the parcel has not yet been physically collected by Bluecare.",
			},
			{
				status: "Parcel Picked Up",
				description: "The parcel has been successfully collected from the sender and is now being processed within the Bluecare network.",
			},
			{
				status: "In Transit",
				description: "Your package is currently moving between sorting facilities or hubs on its way to the final delivery depot.",
			},
			{
				status: "Out for Delivery",
				description: "The parcel is currently with the delivery driver and is expected to arrive at your address within the business day.",
			},
			{
				status: "Delivered",
				description: "The shipment has been successfully delivered. Proof of delivery, such as a signature or delivery photo, is typically recorded.",
			},
			{
				status: "Delivery Attempted",
				description: "A delivery effort was made but could not be completed. A notification is usually left with instructions for re-delivery or collection.",
			},
			{
				status: "Awaiting Collection",
				description: "The parcel is being held at a designated pickup point or local depot waiting for the recipient to collect it.",
			},
			{
				status: "Held at Depot",
				description: "The parcel is temporarily stored at a local depot, often due to address issues, customs delays, or specific delivery instructions.",
			},
			{
				status: "Customs Clearance",
				description: "For international orders, this status indicates the package is currently being processed by customs authorities.",
			},
			{
				status: "Returned to Sender",
				description: "The parcel is being sent back to the original sender after unsuccessful delivery attempts or refusal by the recipient.",
			},
		],
		faq: [
			{
				q: "Who delivers Bluecare Express packages?",
				a: "Bluecare Express packages are often delivered through a partnership with Amazon's logistics network, which ensures professional and timely delivery services.",
			},
			{
				q: "How can I track my Bluecare Express package?",
				a: "You can track your package by entering the unique waybill or tracking number provided by the sender on the Bluecare Express tracking portal.",
			},
			{
				q: "What is a Bluecare waybill number?",
				a: "A waybill number is the unique identification number assigned to your shipment at the time of booking, used to monitor its real-time location and status.",
			},
		],
	},
	"trackon-tracking": {
		title: "Trackon Courier Tracking",
		about: "Trackon Courier is a well-established logistics and courier service provider in India, offering reliable shipping solutions across various regions. Since its inception in 2002, Trackon has grown from two offices in Delhi and Mumbai to a nationwide network managing over 200,000 shipments daily. With a dedicated team of 10,000 employees and a vast franchisee network, Trackon is recognized for its commitment to quality, innovative technology, and professional handling of diverse logistics needs.",
		services: [
			{
				name: "Prime Track",
				description: "Premium service for the swift and reliable delivery of valuable and urgent consignments, guaranteed with prompt handling.",
			},
			{
				name: "Express & Standard Delivery",
				description: "Flexible delivery options tailored to different timelines, ensuring reliable door-to-door transit for various parcel types.",
			},
			{
				name: "Special Handling",
				description: "Expert logistics solutions for fragile or sensitive items, ensuring they are protected and delivered carefully.",
			},
			{
				name: "Customized Logistics",
				description: "Bespoke shipping solutions for business partners and large-scale distribution requirements across India.",
			},
		],
		trackingStatusListDescription:
			"During the entire shipment process, Trackon helps you track every move of your parcel. These shipment alerts are displayed in the form of tracking status, through which you can easily detect real-time progress.",
		trackingStatusList: [
			{
				status: "Order Information Received",
				description: "Trackon has received the shipment details from the sender, but the parcel has not yet been physically collected.",
			},
			{
				status: "Parcel Picked Up",
				description: "The parcel has been successfully collected from the sender and is now within the Trackon logistics network.",
			},
			{
				status: "In Transit",
				description: "The parcel is moving between sorting facilities or hubs on its way to the final delivery destination.",
			},
			{
				status: "Out for Delivery",
				description: "Your package is currently with the delivery vehicle and will be reaching your address soon.",
			},
			{
				status: "Delivered",
				description: "The parcel has been successfully delivered to the recipient. Proof of delivery is typically recorded.",
			},
			{
				status: "Delivery Attempted",
				description: "A delivery attempt was made but was unsuccessful. The package may be held or a re-delivery attempt will be scheduled.",
			},
			{
				status: "Awaiting Collection",
				description: "The parcel is waiting to be collected from a specified Trackon pickup point or local office.",
			},
			{
				status: "Held at Depot",
				description: "The parcel is being held at the delivery depot, possibly due to an address issue or recipient request.",
			},
			{
				status: "Customs Clearance",
				description: "For international shipments, the parcel is currently undergoing processing by customs authorities.",
			},
			{
				status: "Returned to Sender",
				description: "The parcel is being returned to the sender due to delivery failures or other specific issues.",
			},
		],
		faq: [
			{
				q: "How can I check my Trackon courier status?",
				a: "You can visit the Trackon Couriers website and use the 'Track your shipment' tab by entering your waybill number for real-time updates.",
			},
			{
				q: "How do I track a courier package?",
				a: "To track your parcel, you'll need the waybill or tracking number provided at the time of booking. It allows you to monitor the live location of your shipment.",
			},
			{
				q: "What are your delivery timings?",
				a: "Standard delivery timings for Trackon Courier are typically from 10:00 AM to 7:00 PM.",
			},
			{
				q: "How can I change my delivery address?",
				a: "To change the delivery address on a consignment, your booking branch must file a formal request on your behalf. Please contact them directly.",
			},
		],
	},
	"rl-carriers-tracking": {
		title: "RL Carriers Courier Tracking",
		about: `Status Meaning Table:
• In-Transit means your shipment is moving between hubs.
• Out for Delivery means your package is expected to arrive today.

PRO Number Format:
• R+L Carriers PRO numbers are usually 9 digits.

Enjoy B2B tools that provide direct access to your shipment booking and tracking. Connect with us today to simplify your freight shipping process.`,
		services: [
	{
		name: "Express & Standard Delivery",
		description:
			"Enjoy peace of mind by tracking your shipment’s journey from pickup to final delivery.",
	},
	{
		name: "Express & Standard Delivery",
		description:
			"Schedule shipment pickups and choose convenient drop-off locations with ease.",
	},
	{
		name: "Express & Standard Delivery",
		description:
			"Calculate your freight shipping transit time and estimated delivery rates quickly.",
	},
],
		trackingStatusListDescription:
"Track the progress of your RL Carriers shipment from booking and transit to delivery confirmation. Each update keeps you informed about package movement and delivery timing.",
		trackingStatusList: [
			{
				status: "Pro Number:",
				description: "The unique 9-digit identifier for your specific LTL shipment.",
			},
			{
				status: "Current Status",
				description: "Real-time updates such as 'In Transit,' 'Arrived at Terminal,' or 'Out for Delivery'.",
			},
			{
				status: "Origin & Destination",
				description: "service centers where your freight started and where it is headed.",
			},
			{
				status: "Pickup Date",
				description: "official date R+L Carriers took possession of your goods",
			},
			{
				status: "Estimated Delivery Date (EDD)",
				description: "projected date your shipment will arrive at the consignee’s location.",
			},
			{
				status: "Weight & Piece Count",
				description: "Crucial logistics data to verify your full order is accounted for.",
			},
			{
				status: "Billing Party",
				description: "Information regarding who is responsible for the freight charges",
			},
		],
		faq: [
			{
				q: "How can I track my R+L Carriers shipment?",
				a: "Track your freight, enter your 9-digit Pro Number in a tracking tool. R+L Carrier allows you to track multiple shipments at once by entering one Pro Number per line. You can also track using a Pickup and Drop Request ID.",
			},
			{
				q: "What does 'In Transit' mean for R+L Carriers?",
				a: "'In Transit' indicates that your shipment is currently moving between service centers within the R L location. It does not necessarily mean it is on the final delivery truck yet, but it is moving toward the destination location.",
			},
			{
				q: "How do I find my estimated delivery date?",
				a: " Once the shipment is picked up and scanned into the system, an Estimated Delivery Date (EDD) will appear in the tracking results."
			},
		],
	},
};

// Generate default content for couriers without specific data
export function getCourierContent(slug) {
	if (courierContent[slug]) {
		return courierContent[slug];
	}

	// Generate generic content from slug
	const name = slug
		.replace("-tracking", "")
		.replace(/-/g, " ")
		.replace(/\b\w/g, (c) => c.toUpperCase());

	return {
		title: `${name} Courier Tracking`,
		about: `${name} is a trusted courier and logistics service provider. Track your ${name} shipments easily by entering your tracking number above. Our tracking system provides real-time updates on the status of your package.`,
		services: [
			{
				name: `${name} Standard`,
				purpose: "For regular package deliveries.",
				format: "Enter tracking number provided by the sender.",
			},
			{
				name: `${name} Express`,
				purpose: "For faster delivery options.",
				format: "Enter tracking number from your shipping confirmation.",
			},
		],
		faq: [
			{
				q: `How can I track my ${name} package?`,
				a: `You can track your ${name} package by entering the tracking number on this page. The tracking number is provided in your shipping confirmation email.`,
			},
			{
				q: `How long does ${name} delivery take?`,
				a: `Delivery times vary based on the service type and destination. Please check with ${name} directly for estimated delivery times.`,
			},
		],
	};
}



