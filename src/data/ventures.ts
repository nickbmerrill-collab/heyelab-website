export interface VentureDetail {
  slug: string;
  name: string;
  role: string;
  period: string;
  metric: string;
  metricLabel: string;
  overview: string;
  pressLinks?: { label: string; url: string }[];
  achievements: { title: string; description: string }[];
  challenges: { challenge: string; solution: string }[];
  processes: { title: string; description: string }[];
  lessons: string[];
  gallery: { src: string; caption: string }[];
}

export const ventures: VentureDetail[] = [
  {
    slug: "power-busway",
    name: "Power Busway",
    role: "Partner",
    period: "2018 – Present",
    metric: "$200M+",
    metricLabel: "Annual Sales",
    pressLinks: [
      { label: "Legrand Acquires Power Bus Way — PR Newswire", url: "https://www.prnewswire.com/news-releases/legrand-acquires-power-bus-way-a-leading-provider-of-fully-customized-power-feeder-systems-for-data-center-industrial-and-large-scale-commercial-applications-302321141.html" },
      { label: "Legrand Acquisition Announcement — Legrand US", url: "https://www.legrand.us/about-us/newsroom/press/legrand-acquires-power-bus-way" },
    ],
    overview:
      "When I joined Power Bus Way as a partner in 2018, it was a $5M-a-year operation with a 71,000 sq. ft. manufacturing facility in Toronto. Within a few years, we scaled past $200M in annual sales and over 4,000 installations across the US and Canada — culminating in Legrand's acquisition of the company in December 2024. Power Bus Way manufactures fully custom cable bus systems, electrical enclosures (up to 5,000A), and cable tray systems. Approximately 70% of our business is data centers, with the rest in industrial and large-scale commercial applications.",
    achievements: [
      {
        title: "40x Growth → 9-Figure Acquisition",
        description:
          "Drove the company from $5M to over $200M in annual sales. In 2023, I initiated and led negotiations with a global manufacturer, successfully closing a 9-figure acquisition in late 2024 — while maintaining my exclusive distribution rights and territories. Built it, scaled it, sold it, and kept selling.",
      },
      {
        title: "4,000+ Installations",
        description:
          "Built the installation base to over 4,000 completed projects — cable bus systems rated up to 5,000A copper / 4,000A aluminum, custom enclosures, tap boxes, splitter boxes, and quick connect panels for low and medium voltage applications (up to 38kV).",
      },
      {
        title: "Data Center Market Leader",
        description:
          "Captured ~70% of revenue from data centers. Delivered mission-critical power distribution for IT infrastructure, standby generators, transfer switches, and switchgear — where uptime requirements are absolute.",
      },
      {
        title: "Technology & Product Innovation",
        description:
          "Drove adoption of 3D laser scanning, point cloud technology, and BIM integration. Led development of the largest quick connect panels ever produced (5,000A). Held patents in Canada and USA for proprietary technology.",
      },
    ],
    challenges: [
      {
        challenge: "Insatiable demand from South Texas data center boom",
        solution:
          "South Texas drove relentless demand for cable bus that outpaced our manufacturing capacity. Responded by reworking material sourcing, negotiating supplier deals on terms, and building a supply chain that could keep up with exponential growth.",
      },
      {
        challenge: "Scaling from small manufacturer to global leader",
        solution:
          "Drove manufacturing efficiencies, developed alternate routing and fabrication methods to save time and costs, and optimized the entire production pipeline. What started as a small Toronto operation became an ISO 9001:2015 certified facility with 120+ people.",
      },
      {
        challenge: "Unique jobsite requirements at every installation",
        solution:
          "Every data center and industrial site has different access constraints, rigging requirements, and sequencing needs. Developed custom delivery and packaging methods tailored to each jobsite — because a 5,000A cable bus run is worthless if you can't get it through the door and into position.",
      },
      {
        challenge: "Adapting an international product for American standards",
        solution:
          "Led UL 857 certification, CSA/ANSI compliance, and NEC alignment. Built installation documentation and training that American electricians could follow. Bridged the gap between international manufacturing and domestic expectations.",
      },
    ],
    processes: [
      {
        title: "Technical Sales Framework",
        description:
          "Developed a consultative sales process where every engagement begins with a deep technical assessment of the customer's power distribution needs. This approach consistently wins against competitors who lead with price.",
      },
      {
        title: "American Market Adaptation",
        description:
          "Created a systematic process for adapting international busway products to American standards — from UL certification pathways to installation guide translations to training programs for domestic electricians.",
      },
      {
        title: "Customer Success Pipeline",
        description:
          "Built end-to-end customer management from initial inquiry through installation support, ensuring every project is delivered on spec and on time.",
      },
    ],
    lessons: [
      "Technical credibility is the ultimate sales tool — when you can solve problems others can't even diagnose, price becomes secondary.",
      "Scaling from $5M to $200M is not about doing more of the same. Every order of magnitude requires rethinking processes, team structure, and how you spend your time.",
      "The American market rewards reliability and relationships above all else. Build both and growth becomes a flywheel.",
      "Product innovation should be driven by field experience, not just engineering theory. The best improvements come from seeing how products actually perform in real installations.",
    ],
    gallery: [
      { src: "/images/work/busway-installation-datacenter.jpg", caption: "Power busway installation in a data center facility" },
      { src: "/images/work/busway-product-lineup.jpg", caption: "Power Busway product line" },
      { src: "/images/work/busway-manufacturing.jpg", caption: "Manufacturing floor — quality control process" },
    ],
  },
  {
    slug: "2m-electrical-reps",
    name: "2M Electrical Reps",
    role: "Founder & President",
    period: "2012 – Present",
    metric: "$50M+",
    metricLabel: "Annual Sales",
    overview:
      "In 2012, Legrand approached me to rep their Austin territory. I set up an agency extension with a 7-year buyout target — hit it in 2 and never looked back. The mandate was to be a typical salesman, but I went directly to the engineers instead, assisting in their designs so they'd specify our products. That approach drove us from $2M to over $50M in annual sales (~30x) while margins increased. We've achieved 90%+ relative market share, national leadership in data center deployment (40%+ of all US projects), and built a team of engineers, master electricians, computer scientists, and psychology majors. Three-time Circle of Excellence winners serving Microsoft, Amazon, Tesla, SpaceX, Apple, Meta, CyrusOne, Vantage, EdgeConneX, and more.",
    achievements: [
      {
        title: "25x Revenue Growth ($2M → $50M+)",
        description:
          "Grew annual sales from $2M to over $50M through technical credibility, deep relationships, and strategic positioning in high-growth markets like data centers.",
      },
      {
        title: "40%+ of US Data Center Deployments",
        description:
          "2M is the national leader in data center deployment, actively working on over 40% of all US data center projects — a staggering market share in the fastest-growing sector in electrical.",
      },
      {
        title: "3x Circle of Excellence",
        description:
          "Three-time Circle of Excellence award winners, along with multiple Marketeer of the Year awards — the highest recognition for performance and impact in our industry.",
      },
      {
        title: "Premier Client Portfolio",
        description:
          "Trusted by SpaceX, Tesla Motors, Amazon, Microsoft, Indeed, Baylor Scott & White, UT Austin, Texas A&M, UTSA, and the San Antonio Spurs — proof that technical credibility opens doors at any scale.",
      },
      {
        title: "Legrand Full Portfolio",
        description:
          "Primary representative for Legrand's complete lineup — Adorne, Cablofil, ConnecTrac, Pass & Seymour, Wiremold, Wattstopper, and OnQ — covering lighting, electrical, cable management, and building technology.",
      },
    ],
    challenges: [
      {
        challenge: "Standing out in a crowded rep market",
        solution:
          "Differentiated on technical depth. While most reps focus on logistics and pricing, I lead with engineering expertise — helping customers solve problems, not just buy products.",
      },
      {
        challenge: "Scaling to cover 40%+ of national data center deployments",
        solution:
          "Built a team with dedicated territory coverage and spec sales reps. Invested in deep data center expertise that most reps can't match — understanding power distribution, cable management, and infrastructure at a level that earns trust on the most demanding projects.",
      },
      {
        challenge: "Balancing multiple ventures",
        solution:
          "Built systems and a leadership team (VP Tanner Merrill and dedicated territory managers) that allow 2M to execute at a high level even as I pursued Power Busway, Heye Power, and Heyelab.",
      },
    ],
    processes: [
      {
        title: "Relationship-First Sales",
        description:
          "Every customer interaction starts with understanding their business, their challenges, and their goals — before any product discussion. This builds the trust that turns one-time sales into lifetime partnerships.",
      },
      {
        title: "Full-Service Project Support",
        description:
          "From specification and design consultation through project management, logistics coordination, and timely delivery. 2M offers lighting solutions, electrical products, residential/multifamily specs, and commercial built-to-spec design — not just product fulfillment.",
      },
      {
        title: "Technical Matchmaking",
        description:
          "A rigorous process for matching manufacturer capabilities with customer needs. Not every product fits every application, and being honest about that builds more credibility than any sales pitch.",
      },
    ],
    lessons: [
      "The best business development is solving someone's problem before they ask you to.",
      "A rep firm is ultimately a relationship business — your network is your most valuable asset, and it compounds over time.",
      "Technical credibility earns you a seat at the table. Integrity keeps you there.",
      "Starting a business at a young age teaches you that the hardest part isn't the product or the market — it's the discipline to keep showing up every day.",
    ],
    gallery: [
      { src: "/images/tesla-870k-win.png", caption: "Legrand recognition of the $870K+ Tesla Gigafactory win — Nick Merrill & Jason Barrett with 2M" },
      { src: "/images/elon-tesla-suppliers-tweet.jpg", caption: "Elon Musk thanking Tesla suppliers — April 2021" },
      { src: "/images/work/2m-team.jpg", caption: "2M Electrical Reps team" },
      { src: "/images/work/2m-tradeshow.jpg", caption: "Industry trade show presence" },
    ],
  },
  {
    slug: "heye-power-consultants",
    name: "Heye Power Consultants",
    role: "Founder",
    period: "2023 – Present",
    metric: "MW+",
    metricLabel: "Scale Systems",
    overview:
      "Heye Power Consultants was born on the Tesla Gigafactory. While doing design-assist work on high-current power distribution through 2M Electrical Reps, someone asked a simple question: could we invoice for this consulting? The answer was a profitable yes — and a new business was born. Spun off from 2M in 2023, Heye Power brings first-principles engineering and hands-on field experience to the most demanding power challenges. The most complex systems — high-current, ampacity calculations, megawatt-scale loads — need someone who has designed, sold, installed, and troubleshot them firsthand.",
    achievements: [
      {
        title: "Tesla Gigafactory Origin",
        description:
          "Born from hands-on design-assist work on the Tesla Gigafactory — delivering critical parts through a pandemic and the 2021 Texas freeze when others couldn't. Elon Musk publicly thanked Tesla suppliers in April 2021, a direct reflection of the work we were doing on the ground. That resilience proved our consulting expertise was independently valuable enough to spin off from 2M.",
      },
      {
        title: "$25M+ with Elon's Companies",
        description:
          "Between 2M and Heye Power, we've done over $25M combined with Elon's companies — and expect to double within a year. What started as an $870K Gigafactory win has become one of our largest ongoing relationships.",
      },
      {
        title: "Data Center Expertise",
        description:
          "Providing specialized consulting for data center power distribution for Microsoft, Amazon, Apple, Meta, CyrusOne, Vantage, EdgeConneX, and more — where uptime requirements are absolute and ampacity calculations must be perfect.",
      },
      {
        title: "Manufacturing Plant Design",
        description:
          "Consulting on high-current power systems for heavy manufacturing — from gigafactories to traditional plants — where the loads are massive and the consequences of getting it wrong are measured in millions of dollars of downtime.",
      },
      {
        title: "First-Principles Approach",
        description:
          "Every engagement starts from the physics — not from a template. This catches errors and finds optimizations that template-based consulting misses.",
      },
    ],
    challenges: [
      {
        challenge: "Bridging the gap between theory and field reality",
        solution:
          "My background in controls engineering and hands-on installation work means I don't just calculate — I understand what actually happens when these systems get built and energized. This practical grounding is rare in consulting.",
      },
      {
        challenge: "Keeping up with data center power demands",
        solution:
          "Data center power requirements are growing exponentially with AI and cloud computing. Staying ahead means continuously deepening expertise in high-density power distribution and thermal management.",
      },
    ],
    processes: [
      {
        title: "Site Assessment Protocol",
        description:
          "A thorough first-principles assessment of existing power infrastructure, load requirements, growth projections, and code compliance — before any recommendations are made.",
      },
      {
        title: "Ampacity Analysis",
        description:
          "Detailed thermal and ampacity modeling for high-current systems, accounting for real-world conditions like ambient temperature, conductor proximity, and duty cycles.",
      },
    ],
    lessons: [
      "In high-current systems, the margin for error is zero. A miscalculation doesn't just cause a failure — it causes a fire.",
      "The best consulting engagements are the ones where you teach the client's team, not just hand them a report.",
      "Data centers are the new factories — and they need the same level of power engineering rigor that heavy industry has demanded for decades.",
    ],
    gallery: [
      { src: "/images/elon-tesla-suppliers-tweet.jpg", caption: "Elon Musk publicly thanking Tesla suppliers — April 2021, prompted by a text after delivering through the pandemic and Texas freeze" },
      { src: "/images/tesla-870k-win.png", caption: "Legrand internal recognition of the $870K+ Tesla Gigafactory win — Nick Merrill & Jason Barrett with 2M" },
      { src: "/images/work/heye-power-datacenter.jpg", caption: "Data center power distribution consulting" },
      { src: "/images/work/heye-power-ampacity.jpg", caption: "High-current ampacity system design" },
    ],
  },
  {
    slug: "heyelab",
    name: "Heyelab",
    role: "Founder",
    period: "2025 – Present",
    metric: "6+",
    metricLabel: "Active Projects",
    overview:
      "Heyelab is the natural evolution of everything I've built. It's an incubator — part personal lab, part launchpad for ventures that need hands-on, cross-disciplinary help. The portfolio spans from distributed AI infrastructure and energy to consumer apps and full-stack industry software. Whether it's electro-mechanical systems, go-to-market strategy, or the operational grit to get from idea to reality, Heyelab is where it happens.",
    achievements: [
      {
        title: "Distributed AI Clustering & Compute Sharing",
        description:
          "Building offsite distributed AI compute infrastructure — decentralized clustering that brings processing power closer to where it's needed. Heyelab also contributes compute to external research projects, notably assisting in peptide research where our distributed infrastructure accelerates molecular modeling and analysis.",
      },
      {
        title: "Crypto Mining & Flare Gas Sequestering",
        description:
          "Combining crypto mining operations with flare gas capture — turning wasted energy from oil and gas operations into productive compute, reducing emissions while generating revenue.",
      },
      {
        title: "2MOS — Electrical Industry Platform",
        description:
          "Developing a comprehensive application for the electrical industry: plan takeoffs, project management, CRM, and workflow automation. Built from 14+ years of firsthand experience knowing exactly what the industry needs.",
      },
      {
        title: "ClickCart — Mobile Golf Cart Rentals",
        description:
          "A consumer app for mobile golf cart rentals and tracking — on-demand transportation for resort communities, campuses, and event venues.",
      },
      {
        title: "Small Town Delivery App",
        description:
          "A delivery platform designed for communities not served by Uber Eats and major delivery services — bringing on-demand food and goods delivery to underserved small towns.",
      },
      {
        title: "3D Modeling & Printing",
        description:
          "In-house 3D design and printing capability supporting all Heyelab projects — from custom enclosures for ClickCart hardware to rapid prototyping for new product concepts. Running Klipper firmware for precision and speed.",
      },
      {
        title: "Project Gemini",
        description:
          "A large-scale venture currently under wraps. Details to follow.",
      },
      {
        title: "Project LLaMa",
        description:
          "A large-scale venture currently under wraps. Details to follow.",
      },
    ],
    challenges: [
      {
        challenge: "Balancing breadth across diverse projects",
        solution:
          "Each project leverages a different part of my experience — distributed AI and crypto mining tap into power systems expertise, 2MOS draws on 14+ years in the electrical industry, and the consumer apps bring business-building skills to new markets.",
      },
      {
        challenge: "Building software products from an engineering background",
        solution:
          "Applied the same first-principles approach that works in electrical engineering to software: understand the problem deeply, build the simplest thing that works, test it with real users, iterate fast.",
      },
      {
        challenge: "Building in public",
        solution:
          "This website is part of the answer. Sharing the journey, the lessons, and the work openly — because the network effect works best when people can see what you're building.",
      },
    ],
    processes: [
      {
        title: "Venture Evaluation",
        description:
          "A structured framework for evaluating whether a project is a good fit for Heyelab: Does it leverage core expertise? Is the market real? Can we add value that others can't get elsewhere?",
      },
      {
        title: "Rapid Prototyping",
        description:
          "A bias toward building and testing quickly rather than planning endlessly. Ship something, learn from it, iterate. This applies equally to hardware infrastructure and software apps.",
      },
      {
        title: "Cross-Pollination",
        description:
          "Insights from one project feed into others. Power systems expertise informs AI clustering and crypto mining. Industry knowledge drives 2MOS design. Every project makes the others smarter.",
      },
    ],
    lessons: [
      "The best time to start an incubator is after you've built and scaled real businesses — you can't teach what you haven't done.",
      "Every venture you've built teaches you something that makes the next one better. The compounding effect is real.",
      "The most valuable thing you can offer another founder isn't capital — it's pattern recognition from having been in the trenches.",
      "Some of the best business ideas come from solving problems you personally experience — 2MOS exists because I spent 14 years wishing the electrical industry had better tools.",
    ],
    gallery: [
      { src: "/images/work/heyelab-lab.jpg", caption: "Heyelab workspace" },
      { src: "/images/work/heyelab-ai-cluster.jpg", caption: "Distributed AI clustering infrastructure" },
      { src: "/images/work/heyelab-2mos.jpg", caption: "2MOS electrical industry platform" },
    ],
  },
];

export function getVentureBySlug(slug: string): VentureDetail | undefined {
  return ventures.find((v) => v.slug === slug);
}

export function getAllVentureSlugs(): string[] {
  return ventures.map((v) => v.slug);
}
