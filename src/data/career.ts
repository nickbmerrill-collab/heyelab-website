export interface CareerDetail {
  slug: string;
  org: string;
  title: string;
  year: string;
  period: string;
  accentColor: string;
  overview: string;
  achievements: { title: string; description: string }[];
  challenges: { challenge: string; solution: string }[];
  processes: { title: string; description: string }[];
  lessons: string[];
  gallery: { src: string; caption: string }[];
  tags: string[];
}

export const careerEntries: CareerDetail[] = [
  {
    slug: "riverside-engineering",
    org: "Riverside Engineering",
    title: "Controls & Automation Engineer",
    year: "Early Career",
    period: "Early Career",
    accentColor: "cyan",
    overview:
      "This is where it all started. Riverside Engineering, headquartered in San Antonio, TX, is a leader in the metal recycling industry — built on 40+ years of experience designing and manufacturing Megashredders\u00AE, downstream separation systems, and advanced automation platforms. As a member of a 4-person team, I co-invented the first truly non-derivative cruise control system for car shredders and their entire downstream processes. We took throughput from 80 tons/hour to over 200 — fully automated and self-learning. I was recognized as an expert in my field by both the Canadian and US governments, and co-authored two industry papers.",
    achievements: [
      {
        title: "Invented Non-Derivative Cruise Control System",
        description:
          "Member of a 4-person team that invented and commissioned the first truly non-derivative cruise control system for car shredders and their downstreams — including ferrous/non-ferrous separation, color and size sorting, content analysis, and throughput optimization. Fully automated and self-learning.",
      },
      {
        title: "80 → 200+ Tons/Hour",
        description:
          "The cruise control system multiplied throughput from 80 tons/hour to over 200 tons/hour — a transformational leap in productivity. Integrated thousands of input/output signals and controlled hundreds of motors across the entire yard.",
      },
      {
        title: "Recognized Government Expert",
        description:
          "Recognized as an expert in the field by both the Canadian and US governments. Co-authored two industry papers on shredder automation and controls systems.",
      },
      {
        title: "Legacy Software Conversion",
        description:
          "Devised a method to convert old software tags into modern ones, cutting conversion time from weeks down to hours — enabling rapid modernization of legacy shredder control systems.",
      },
      {
        title: "3D Yard Visualization",
        description:
          "Learned 3D design to build accurate digital models of actual yard equipment in their correct physical layout. This enabled remote troubleshooting and gave employees an intuitive navigation system for understanding complex recycling yards.",
      },
      {
        title: "Megashredder\u00AE Controls Systems",
        description:
          "Designed complete controls architectures for Riverside's M-Series Megashredders (M-69, M-88, M-106, M-122) — from I/O layouts and panel designs to full PLC programs controlling shredders, conveyors, separators, and downstream sorting equipment.",
      },
      {
        title: "PLC Programming (RSLogix 5000)",
        description:
          "Wrote and debugged ladder logic, structured text, and function blocks for Allen-Bradley ControlLogix and CompactLogix platforms. Integrated thousands of I/O signals controlling hundreds of motors, safety interlocks, production data logging, and yard automation.",
      },
    ],
    challenges: [
      {
        challenge: "Metal recycling is brutal on equipment",
        solution:
          "Designed controls with robust fault handling, redundant sensors, and degraded-mode operation. When a shredder jams at 3 AM, the system needs to protect itself and give the operator a clear path to recovery.",
      },
      {
        challenge: "Legacy systems and integration",
        solution:
          "Often worked with existing equipment that had outdated controls. Developed approaches to integrate modern PLCs with legacy motor starters, relay logic, and mechanical interlocks without tearing everything out.",
      },
      {
        challenge: "Commissioning under pressure",
        solution:
          "Plant downtime costs thousands per hour. Learned to prepare meticulously, test systematically, and stay calm when things don't work the first time — because they rarely do.",
      },
    ],
    processes: [
      {
        title: "Systematic Commissioning",
        description:
          "Developed a methodical approach to startup: verify I/O point-by-point, test each device individually, run subsystems in isolation, then integrate step by step. This approach catches problems early when they're cheap to fix.",
      },
      {
        title: "Controls Documentation",
        description:
          "Created comprehensive documentation packages — wiring diagrams, I/O lists, PLC program descriptions, and operator manuals. Good documentation is what separates a professional installation from a hack job.",
      },
      {
        title: "Alarm Management",
        description:
          "Designed alarm systems that prioritize critical faults, suppress nuisance alarms, and give operators actionable information instead of a wall of red lights.",
      },
      {
        title: "Yard Automation",
        description:
          "Developed automation systems to electronically monitor and maximize recycling yard capabilities — integrating shredder controls with downstream separation equipment, material handling, and production tracking for full-yard visibility.",
      },
    ],
    lessons: [
      "I was fortunate to have incredible mentors at Riverside — people who shaped not just my engineering skills, but my character. Those mentoring relationships continue to this day.",
      "Leave things better than you found them. Every panel, every program, every system — if you touched it, it should be better when you walk away.",
      "Take pride in your work, especially when nobody is looking. Because someone eventually will take notice. Quality speaks for itself, and people remember who built it right.",
      "Follow through with your commitments. In controls engineering, a half-finished program is worse than no program at all. The same is true in business and in life.",
      "First-principles problem solving and fast-thinking troubleshooting are the most transferable skills I've ever developed. They apply to everything — engineering, sales, business building.",
      "Riverside eventually recognized that I had sales skills, which gave me the confidence to start 2M Electrical Representatives. Sometimes it takes someone else seeing your potential before you see it yourself.",
      "Understanding the politics of business and what it actually takes to be successful — not just technically, but organizationally — was just as valuable as any engineering skill I learned.",
      "When your shredder uses 1,000-pound hammers and processes 200+ tons per hour, there is zero tolerance for controls failures. This environment teaches you to build systems that survive the worst day, not just the average day.",
    ],
    gallery: [
      { src: "/images/career/riverside-controls-panel.jpg", caption: "Controls panel designed and built for a recycling facility" },
      { src: "/images/career/riverside-factory-floor.jpg", caption: "Metal recycling facility — factory floor" },
      { src: "/images/career/riverside-plc-rack.jpg", caption: "Allen-Bradley ControlLogix PLC rack" },
      { src: "/images/career/riverside-hmi-screen.jpg", caption: "HMI operator interface" },
      { src: "/images/career/riverside-commissioning.jpg", caption: "On-site commissioning and startup" },
    ],
    tags: ["PLC Programming", "HMI Design", "RSLogix 5000", "Controls", "Metal Recycling", "Megashredders", "Cruise Control Inventor", "3D Visualization", "Government Expert", "Self-Learning Systems"],
  },
  {
    slug: "2m-electrical-reps",
    org: "2M Electrical Reps",
    title: "Founder & President",
    year: "2012",
    period: "2012 – Present",
    accentColor: "blue",
    overview:
      "In 2012, Legrand approached me to rep their Austin territory. I wasn't keen on working inside a large corporation, so the solution was to set up an extension of an existing agency with a buyout clause tied to sales targets — a 7-year goal I achieved in 2. The mandate was clear: be a typical salesman — donut runs, product demos, structured distribution. But in my free time I started going directly to the engineers. I'd assist them in their designs, and in turn they'd specify my products. That approach proved to be an immense success. We've grown from $2M to over $50M in annual sales — nearly 30x — while margins have actually increased. We've achieved over 90% relative market share across our product lines and extended this into a nationwide network of electrical distribution. We're now the national leaders in data center deployment, actively working on 40%+ of all US data center projects. Three-time Circle of Excellence winners, multiple Marketeer of the Year recipients, trusted by Microsoft, Amazon, Tesla, SpaceX, Apple, Meta, CyrusOne, Vantage, EdgeConneX, UT Austin, Texas A&M, and the San Antonio Spurs.",
    achievements: [
      {
        title: "7-Year Buyout in 2 Years",
        description:
          "Legrand's deal gave me a 7-year buyout target. I hit it in 2 and never looked back. That early velocity set the tone for everything that followed.",
      },
      {
        title: "~30x Revenue Growth, Margins Up",
        description:
          "Grew annual sales from $2M to over $50M — nearly 30x — while margins actually increased. Proof that selling on value and technical expertise is more profitable than competing on price.",
      },
      {
        title: "90%+ Relative Market Share",
        description:
          "Achieved over 90% relative market share across our product lines by going directly to the engineers. Assisting them in their designs meant they specified our products — a flywheel that competitors couldn't replicate.",
      },
      {
        title: "40%+ of US Data Center Deployments",
        description:
          "2M is the national leader in data center deployment, actively working on over 40% of all US data center projects. Extended our regional success into a nationwide network of electrical distribution.",
      },
      {
        title: "3x Circle of Excellence, Multiple Marketeer of the Year",
        description:
          "Three-time Circle of Excellence recipients and multiple Marketeer of the Year winners — the highest recognition for performance and impact in our industry.",
      },
      {
        title: "$25M+ with Elon's Companies",
        description:
          "What started as an $870K+ Tesla Gigafactory win — the largest documented Connectrac/Legrand collaboration at the time — has grown to over $25M combined revenue with Elon's companies between 2M and Heye Power, with expectations to double within a year.",
      },
      {
        title: "The One Number to Call",
        description:
          "Built a team of engineers, master electricians, computer scientists, and psychology majors — not just salespeople. Whether it's an installation question, pricing info, specification help, or any other knowledge, there's now only one phone number to call.",
      },
    ],
    challenges: [
      {
        challenge: "Breaking the mold of a typical rep",
        solution:
          "The mandate was donut runs and product demos. Instead, I went directly to the engineers — assisting in their designs so they'd specify our products. This engineer-first approach drove 90%+ market share and proved that technical value creation beats traditional sales tactics.",
      },
      {
        challenge: "Competing against established reps with decades of history",
        solution:
          "Couldn't compete on tenure, so built a team of engineers, master electricians, computer scientists, and psychology majors. When customers had a problem — installation, specification, pricing, anything — there was only one number to call. That's a moat no competitor has matched.",
      },
      {
        challenge: "Scaling from regional to national",
        solution:
          "Extended our regional dominance into a nationwide network of electrical distribution. The same engineer-first approach that captured 90%+ share locally proved just as effective at national scale, especially in data centers.",
      },
    ],
    processes: [
      {
        title: "Technical-First Customer Engagement",
        description:
          "Every engagement starts with understanding the technical problem before discussing products or pricing. This approach builds trust and positions 2M as a partner, not a vendor.",
      },
      {
        title: "Full-Service Offering",
        description:
          "From lighting solutions and electrical products to project management and built-to-spec commercial design — 2M offers quality consulting and service across the full spectrum of electrical needs, not just product fulfillment.",
      },
      {
        title: "Manufacturer Alignment",
        description:
          "Regular deep-dives with Legrand and other manufacturer engineering teams to stay current on product capabilities, upcoming innovations, and competitive positioning.",
      },
    ],
    lessons: [
      "When Legrand gave me a 7-year buyout target and I hit it in 2, it proved that the engineer-first approach wasn't just different — it was better. Go where the value is created, not where the donuts go.",
      "90%+ market share doesn't come from being the loudest. It comes from being the most useful. Help engineers design better systems and they'll specify your products every time.",
      "Build a team of experts, not just salespeople. Engineers, master electricians, computer scientists, psychology majors — when your team can actually solve problems, you become the only phone number anyone needs.",
      "The network effect is the most powerful force in business. Every strong relationship you build opens doors you didn't even know existed.",
      "Margins go up when you sell on value. We grew nearly 30x while margins increased — because customers pay more when you make their jobs easier and their designs better.",
      "Landing a client like SpaceX or Tesla doesn't happen because of a cold call. It happens because someone in your network trusts you enough to make the introduction.",
    ],
    gallery: [
      { src: "/images/tesla-870k-win.png", caption: "Legrand internal recognition of the $870K+ Tesla Gigafactory win — Nick Merrill & Jason Barrett with 2M called out by name" },
      { src: "/images/elon-tesla-suppliers-tweet.jpg", caption: "Elon Musk thanking Tesla suppliers — April 2021" },
      { src: "/images/career/2m-team.jpg", caption: "The 2M Electrical Reps team" },
      { src: "/images/career/2m-tradeshow.jpg", caption: "Industry trade show presence" },
    ],
    tags: ["Electrical Sales", "Manufacturer Rep", "Legrand", "Business Development", "South Texas"],
  },
  {
    slug: "power-busway",
    org: "Power Busway",
    title: "Partner",
    year: "2018",
    period: "2018 – Present",
    accentColor: "violet",
    overview:
      "In 2018, I joined Power Bus Way as a partner. Founded in 2006 and headquartered in Toronto with a 71,000 sq. ft. manufacturing facility, the company was doing about $5M in annual sales. Over the next several years, I drove that past $200M — ultimately leading to Legrand's acquisition of the company in December 2024. Power Bus Way manufactures fully custom cable bus systems, electrical enclosures, and cable tray systems for data centers, industrial facilities, and large-scale commercial applications, with over 4,000 installations across the US and Canada.",
    achievements: [
      {
        title: "Revenue: $5M → $200M+ → 9-Figure Acquisition",
        description:
          "Led the company through 40x growth, personally driving the majority of all sales revenue. In 2023, I initiated negotiations between Power Busway and a global manufacturer, successfully closing a 9-figure acquisition in late 2024 — while maintaining my exclusive distribution rights and territories.",
      },
      {
        title: "4,000+ Installations",
        description:
          "Helped grow the installation base to over 4,000 completed projects across the United States and Canada — cable bus systems, custom enclosures, tap boxes, splitter boxes, and quick connect panels rated up to 5,000A.",
      },
      {
        title: "American Market Transformation",
        description:
          "Drove UL 857 certification, CSA/ANSI C22.2 No. 273:19 compliance, and NEC Article 370 alignment. Adapted international manufacturing processes to meet American installation practices and customer expectations.",
      },
      {
        title: "Data Center Dominance",
        description:
          "Captured approximately 70% of revenue from the data center market — delivering cable bus systems for IT infrastructure, standby generator connections, transfer switch feeds, and switchgear interconnects. Systems rated up to 5,000A copper and 4,000A aluminum.",
      },
      {
        title: "Product & Technology Innovation",
        description:
          "Drove adoption of 3D laser scanning and BIM integration for site measurement, along with engineering innovations in quick connect panels (5,000A — largest ever produced), custom enclosures for medium voltage (up to 38kV), and field-ready pre-cut systems.",
      },
    ],
    challenges: [
      {
        challenge: "Insatiable South Texas demand outpacing capacity",
        solution:
          "The South Texas data center boom created relentless demand. Reworked material sourcing, negotiated supplier deals on terms, and built a supply chain that could scale from $5M to $200M+ without breaking.",
      },
      {
        challenge: "Scaling from small manufacturer to global leader",
        solution:
          "Drove manufacturing efficiencies, developed alternate routing and fabrication methods, optimized production pipelines. Grew the operation to 120+ people in a 71,000 sq. ft. ISO 9001:2015 certified facility with UL 857, CSA/ANSI, and CWB 47.1 certifications.",
      },
      {
        challenge: "Every jobsite is different",
        solution:
          "Data centers and industrial sites each have unique access constraints, rigging needs, and sequencing requirements. Developed custom delivery and packaging methods for every installation — because getting a 5,000A cable bus through the door and into position is half the battle.",
      },
      {
        challenge: "International product, American expectations",
        solution:
          "Led UL 857 certification, CSA/ANSI compliance, NEC alignment, and built training programs and installation documentation that American electricians could follow and trust.",
      },
    ],
    processes: [
      {
        title: "Consultative Technical Sales",
        description:
          "A sales methodology centered on understanding the customer's power distribution challenge first, then designing a fully custom solution. Systems rated from 600V to 38kV, up to 5,000A — every project is unique.",
      },
      {
        title: "End-to-End Custom Engineering",
        description:
          "From 3D laser scanning and point cloud measurement through CAD modeling, BIM integration, in-house fabrication, and field-ready pre-cut delivery. Customers receive a complete engineered package, not just components.",
      },
      {
        title: "Market Localization",
        description:
          "A repeatable process for adapting products to American standards: UL certification, NFPA compliance, NEC alignment, and installation documentation that domestic electricians can follow.",
      },
      {
        title: "Rapid Quoting & Engineering Support",
        description:
          "Built systems for turning customer inquiries into engineered solutions within days, not weeks. Application engineering support from initial inquiry through post-installation service.",
      },
    ],
    lessons: [
      "40x growth requires reinventing the company at each stage. What works at $5M breaks at $50M, and what works at $50M breaks at $200M.",
      "The American market rewards companies that take quality and service seriously. Cut corners on either and you'll pay for it in reputation.",
      "Technical sales is about education, not persuasion. When the customer understands why your solution is right, the sale closes itself.",
      "Partnership means being willing to do whatever the business needs, even when it's not in your job description. I've done everything from sales calls to warehouse work to product engineering.",
      "Building a company to the point of acquisition by a global leader like Legrand validates the strategy: custom engineering, technical sales, and relentless quality.",
    ],
    gallery: [
      { src: "/images/career/busway-growth-chart.jpg", caption: "Power Busway growth trajectory" },
      { src: "/images/career/busway-install-site.jpg", caption: "Major installation project" },
      { src: "/images/career/busway-product-innovation.jpg", caption: "Product design innovation session" },
    ],
    tags: ["Power Distribution", "Sales Growth", "Product Innovation", "Market Strategy"],
  },
  {
    slug: "heye-power-consultants",
    org: "Heye Power Consultants",
    title: "Founder",
    year: "2023",
    period: "2023 – Present",
    accentColor: "amber",
    overview:
      "Heye Power Consultants was born on the Tesla Gigafactory. While working on the project through 2M, we were doing extensive design-assist work on high-current power distribution — and someone asked a simple question: could we invoice for this consulting work? The answer was a profitable yes. So we spun it off as its own entity in 2023. What started as an observation on a factory floor became a dedicated consulting practice bringing first-principles engineering and hands-on field experience to the most demanding power challenges in manufacturing and data centers.",
    achievements: [
      {
        title: "Tesla Gigafactory Origin",
        description:
          "Born directly from design-assist work on the Tesla Gigafactory — through a pandemic and the devastating 2021 Texas freeze. We kept delivering critical parts when others couldn't, earning recognition from the top. That resilience and the consulting work it required proved our expertise was independently valuable enough to spin off from 2M.",
      },
      {
        title: "$25M+ with Elon's Companies",
        description:
          "Between 2M and Heye Power, we've done over $25M combined with Elon's companies — and expect to double that within a year. What started as an $870K win on the Gigafactory has become one of our largest ongoing relationships.",
      },
      {
        title: "High-Current Specialization",
        description:
          "Established a consulting practice focused specifically on high-current and ampacity systems — a niche that demands rare depth of expertise.",
      },
      {
        title: "Data Center & Manufacturing Focus",
        description:
          "Serving the biggest names in data centers and manufacturing — Microsoft, Amazon, Apple, Meta, CyrusOne, Vantage, EdgeConneX, and more. These are the markets where power distribution errors are most costly: data centers (downtime measured in millions per hour) and heavy manufacturing like gigafactories.",
      },
    ],
    challenges: [
      {
        challenge: "Consulting credibility requires proof",
        solution:
          "My track record at Power Busway and background in controls engineering provides the proof points that clients need. I'm not theorizing about these systems — I've built, sold, and installed them.",
      },
      {
        challenge: "Exponentially growing power demands",
        solution:
          "AI and cloud computing are driving data center power requirements to unprecedented levels. Staying ahead of this curve through continuous education and hands-on project work.",
      },
    ],
    processes: [
      {
        title: "First-Principles Assessment",
        description:
          "Every engagement starts from the physics of the problem — conductor sizing, thermal analysis, fault current calculations, and code compliance reviewed from scratch rather than relying on rules of thumb.",
      },
      {
        title: "Field-Validated Recommendations",
        description:
          "Recommendations are grounded in what actually works in the field, not just what looks good on paper. Installation feasibility, maintenance access, and real-world operating conditions are always considered.",
      },
    ],
    lessons: [
      "The gap between theoretical engineering and field reality is where the most value lives. Bridge it and you become indispensable.",
      "In high-current systems, thermal management is everything. Undersizing a conductor by one gauge can mean the difference between a reliable system and a fire.",
      "The best consulting relationship is one where the client's team is smarter after every engagement. Teach, don't just report.",
    ],
    gallery: [
      { src: "/images/elon-tesla-suppliers-tweet.jpg", caption: "Elon Musk publicly thanking Tesla suppliers — April 2021, prompted by a text after delivering through the pandemic and Texas freeze" },
      { src: "/images/career/heye-power-assessment.jpg", caption: "On-site power system assessment" },
      { src: "/images/career/heye-power-analysis.jpg", caption: "Ampacity analysis and thermal modeling" },
    ],
    tags: ["High Current", "Ampacity", "Data Centers", "Manufacturing", "Consulting"],
  },
  {
    slug: "heyelab",
    org: "Heyelab",
    title: "Founder",
    year: "2025",
    period: "2025 – Present",
    accentColor: "emerald",
    overview:
      "Heyelab is the culmination of everything I've learned building businesses over the past 14+ years. It's an incubator with 6+ active projects spanning distributed AI infrastructure, energy, consumer apps, and full-stack industry software. The portfolio includes offsite distributed AI clustering, crypto mining with flare gas sequestering, ClickCart (mobile golf cart rentals), a small-town delivery app, and EMMA — a comprehensive electrical industry platform for plan takeoffs, project management, and CRM.",
    achievements: [
      {
        title: "Distributed AI, Compute Sharing & Crypto Mining",
        description:
          "Building offsite distributed AI compute clusters and crypto mining operations that capture flare gas — turning wasted energy into productive compute. Also contributing compute to external research, notably peptide research where our infrastructure accelerates molecular modeling.",
      },
      {
        title: "EMMA — Industry Software",
        description:
          "Developing a full-stack electrical industry application covering plan takeoffs, project management, CRM, and workflow automation — born from 14+ years of knowing exactly what the industry needs and doesn't have.",
      },
      {
        title: "ClickCart & Small Town Delivery",
        description:
          "Two consumer apps: ClickCart for mobile golf cart rentals and tracking, and a delivery platform for communities underserved by Uber Eats and major delivery services.",
      },
      {
        title: "3D Modeling & Printing",
        description:
          "In-house 3D design and printing capability running Klipper firmware — from custom enclosures for ClickCart hardware to rapid prototyping for any project that needs a physical part fast.",
      },
      {
        title: "Cross-Disciplinary Portfolio",
        description:
          "Each project leverages different expertise — power systems knowledge drives AI clustering and mining, industry experience drives EMMA, 3D printing enables rapid hardware iteration, and business-building skills fuel consumer apps.",
      },
    ],
    challenges: [
      {
        challenge: "Managing 6+ active projects across diverse domains",
        solution:
          "Each project taps a different part of my experience. Distributed AI and crypto mining leverage power systems expertise, EMMA draws on 14+ years in electrical, consumer apps apply business-building fundamentals. The diversity is the strategy.",
      },
      {
        challenge: "Building software products from a hardware background",
        solution:
          "Applied first-principles engineering thinking to software: understand the problem deeply, build the simplest working version, test with real users, iterate fast.",
      },
    ],
    processes: [
      {
        title: "Venture Evaluation Framework",
        description:
          "A structured process for assessing potential projects: market opportunity, technical feasibility, founder-market fit, and whether Heyelab's specific capabilities create a meaningful advantage.",
      },
      {
        title: "Build-Measure-Learn Cycles",
        description:
          "Rapid iteration on every project. Get to a working prototype fast, test with real users, learn from the results, and iterate or kill accordingly.",
      },
      {
        title: "Cross-Pollination",
        description:
          "Insights flow between projects. Power expertise informs AI infrastructure. Industry knowledge shapes EMMA. Consumer app lessons improve everything. Every project makes the others smarter.",
      },
    ],
    lessons: [
      "The best incubator is one run by people who've actually built and scaled businesses, not just invested in them.",
      "Every venture you build teaches you patterns that make the next one faster and more likely to succeed.",
      "The most valuable thing you can give another founder isn't money — it's pattern recognition from years in the trenches.",
      "Some of the best business ideas come from solving problems you personally experience — EMMA exists because I spent 14 years wishing the electrical industry had better tools.",
    ],
    gallery: [
      { src: "/images/career/heyelab-workspace.jpg", caption: "Heyelab workspace and lab" },
      { src: "/images/career/heyelab-ai-cluster.jpg", caption: "Distributed AI clustering infrastructure" },
      { src: "/images/career/heyelab-2mos.jpg", caption: "EMMA electrical industry platform" },
    ],
    tags: ["Incubator", "Distributed AI", "Crypto Mining", "SaaS", "Consumer Apps", "Flare Gas"],
  },
];

export function getCareerBySlug(slug: string): CareerDetail | undefined {
  return careerEntries.find((c) => c.slug === slug);
}

export function getAllCareerSlugs(): string[] {
  return careerEntries.map((c) => c.slug);
}
