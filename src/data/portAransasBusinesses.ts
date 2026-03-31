export interface PortABusiness {
  name: string;
  slug: string;
  category: string;
  subcategory?: string;
  tagline: string;
  description: string;
  address?: string;
  phone?: string;
  website?: string;
  tags: string[];
  featured?: boolean;
}

export const portAransasCategories = [
  { id: "restaurants-bars", label: "Restaurants & Bars", icon: "utensils" },
  { id: "golf-cart-rentals", label: "Golf Cart Rentals", icon: "car" },
  { id: "vacation-rentals", label: "Vacation Rentals", icon: "home" },
  { id: "hotels-resorts", label: "Hotels & Resorts", icon: "building" },
  { id: "fishing-charters", label: "Fishing Charters", icon: "fish" },
  { id: "water-sports", label: "Water Sports & Activities", icon: "waves" },
  { id: "boat-tours", label: "Boat Tours", icon: "ship" },
  { id: "shops-retail", label: "Shops & Retail", icon: "shopping-bag" },
  { id: "local-services", label: "Local Services", icon: "wrench" },
  { id: "events-entertainment", label: "Events & Entertainment", icon: "music" },
  { id: "real-estate", label: "Real Estate", icon: "map-pin" },
  { id: "beach-services", label: "Beach Services", icon: "umbrella" },
] as const;

export const portAransasBusinesses: PortABusiness[] = [
  // ─────────────────────────────────────────────
  // RESTAURANTS & BARS
  // ─────────────────────────────────────────────
  {
    name: "Fins Grill & Icehouse",
    slug: "fins-grill-icehouse",
    category: "restaurants-bars",
    subcategory: "Seafood",
    tagline: "Waterfront seafood and grill at Deep Sea Headquarters Marina",
    description:
      "Located next to the Deep Sea Headquarters Fishing Marina, Fins serves fresh-caught seafood in a laid-back waterfront setting. They will even cook your own catch for you.",
    address: "440 W Cotter Ave, Port Aransas, TX 78373",
    phone: "(361) 749-8646",
    website: "https://www.finsgrillandicehouse.com",
    tags: ["seafood", "waterfront", "casual-dining", "marina", "family-friendly"],
    featured: true,
  },
  {
    name: "Tortuga's Saltwater Grill",
    slug: "tortugas-saltwater-grill",
    category: "restaurants-bars",
    subcategory: "Seafood",
    tagline: "Upscale coastal dining with Gulf views",
    description:
      "One of Port Aransas' top-rated restaurants offering elevated seafood dishes, steaks, and craft cocktails in a refined waterfront atmosphere.",
    address: "429 N Alister St, Port Aransas, TX 78373",
    phone: "(361) 749-2739",
    website: "https://www.tortugassaltwatergrill.com",
    tags: ["seafood", "fine-dining", "waterfront", "steaks", "cocktails"],
    featured: true,
  },
  {
    name: "The Crazy Cajun",
    slug: "crazy-cajun",
    category: "restaurants-bars",
    subcategory: "Seafood",
    tagline: "Boiled crawfish, crab legs, and Cajun-style seafood",
    description:
      "A Port Aransas institution serving Cajun-style boiled seafood. Famous for their crawfish, crab legs, and shrimp, all dumped on butcher-paper-covered tables for a hands-on dining experience.",
    address: "303 Beach Ave, Port Aransas, TX 78373",
    phone: "(361) 749-5069",
    website: "https://crazycajun.top",
    tags: ["cajun", "seafood", "casual-dining", "crawfish", "family-friendly"],
  },
  {
    name: "Grumbles Seafood Co.",
    slug: "grumbles-seafood",
    category: "restaurants-bars",
    subcategory: "Seafood",
    tagline: "Fresh Gulf seafood with a local following",
    description:
      "A testament to Port Aransas' deep-rooted love for Gulf seafood. Grumbles serves classic dishes in a comfortable, welcoming atmosphere that keeps locals and visitors coming back.",
    address: "850 Tarpon St, Port Aransas, TX 78373",
    phone: "(361) 749-1990",
    tags: ["seafood", "casual-dining", "local-favorite", "gulf-coast"],
  },
  {
    name: "Trout Street Bar & Grill",
    slug: "trout-street-bar-grill",
    category: "restaurants-bars",
    subcategory: "Seafood",
    tagline: "Waterfront bar and grill on the harbor",
    description:
      "A popular waterfront spot on the Port Aransas harbor serving fresh seafood, burgers, and cold drinks with views of the boats coming and going.",
    address: "104 W Cotter Ave, Port Aransas, TX 78373",
    phone: "(361) 749-7800",
    tags: ["seafood", "bar", "waterfront", "casual-dining", "harbor-view"],
  },
  {
    name: "Virginia's On The Bay",
    slug: "virginias-on-the-bay",
    category: "restaurants-bars",
    subcategory: "Seafood",
    tagline: "Bay-view dining with fresh seafood and steaks",
    description:
      "Enjoy panoramic bay views alongside a menu featuring fresh Gulf seafood and hand-cut steaks. A Port Aransas staple for special occasions and sunset dinners.",
    address: "815 Trout St, Port Aransas, TX 78373",
    phone: "(361) 749-4088",
    tags: ["seafood", "steaks", "bay-view", "fine-dining", "sunset"],
  },
  {
    name: "Lisabella's Bistro & Bar",
    slug: "lisabellas-bistro",
    category: "restaurants-bars",
    subcategory: "Fine Dining",
    tagline: "Upscale bistro dining at Cinnamon Shore",
    description:
      "An elegant bistro and bar located in the Cinnamon Shore development, offering refined coastal cuisine, craft cocktails, and a sophisticated atmosphere.",
    address: "165 Social Circle, Cinnamon Shore, Port Aransas, TX 78373",
    phone: "(361) 749-4222",
    tags: ["fine-dining", "bistro", "cocktails", "cinnamon-shore", "upscale"],
  },
  {
    name: "Shell's Pasta & Seafood",
    slug: "shells-pasta-seafood",
    category: "restaurants-bars",
    subcategory: "Italian / Seafood",
    tagline: "Italian-inspired seafood and pasta dishes",
    description:
      "A local favorite serving Italian-inspired pasta dishes alongside fresh Gulf seafood in a cozy, welcoming setting.",
    address: "522 E Ave G, Port Aransas, TX 78373",
    phone: "(361) 749-7621",
    tags: ["italian", "pasta", "seafood", "casual-dining", "local-favorite"],
  },
  {
    name: "Castaway's Seafood & Grill",
    slug: "castaways-seafood-grill",
    category: "restaurants-bars",
    subcategory: "Seafood",
    tagline: "Fresh seafood and grilled favorites on Alister",
    description:
      "A go-to spot for fresh-catch seafood and grilled dishes right in the heart of downtown Port Aransas.",
    address: "337 N Alister St, Port Aransas, TX 78373",
    phone: "(361) 749-5394",
    website: "https://castawaysporta.com",
    tags: ["seafood", "grill", "casual-dining", "downtown", "family-friendly"],
  },
  {
    name: "Moby Dick's",
    slug: "moby-dicks",
    category: "restaurants-bars",
    subcategory: "Seafood",
    tagline: "Great food, full bar, and a gift shop all in one",
    description:
      "A Port Aransas landmark combining a full-service restaurant, bar, and souvenir shop. Known for generous portions and a fun, casual island atmosphere.",
    address: "517 S Alister St, Port Aransas, TX 78373",
    phone: "(361) 749-9447",
    website: "https://www.mobysportaransas.com",
    tags: ["seafood", "bar", "gift-shop", "casual-dining", "landmark"],
  },
  {
    name: "Kody's",
    slug: "kodys",
    category: "restaurants-bars",
    subcategory: "Tacos",
    tagline: "Island tacos and Tex-Mex favorites",
    description:
      "A popular taco joint on Highway 361 known for fresh, flavorful tacos and Tex-Mex dishes that keep the locals coming back.",
    address: "2034 State Hwy 361, Port Aransas, TX 78373",
    phone: "(361) 749-8226",
    tags: ["tacos", "tex-mex", "casual", "quick-bite", "local-favorite"],
  },
  {
    name: "La Playa Mexican Grille",
    slug: "la-playa-mexican-grille",
    category: "restaurants-bars",
    subcategory: "Mexican",
    tagline: "Authentic Mexican fare on Beach Street",
    description:
      "Serving authentic Mexican cuisine in the heart of Port Aransas with fresh ingredients, bold flavors, and a lively atmosphere.",
    address: "222 Beach St #5312, Port Aransas, TX 78373",
    tags: ["mexican", "tacos", "margaritas", "casual-dining", "downtown"],
  },
  {
    name: "Port A Beach Lodge",
    slug: "port-a-beach-lodge",
    category: "restaurants-bars",
    subcategory: "Bar & Grill",
    tagline: "Beachfront restaurant and bar right on the sand",
    description:
      "Located directly on the beach at Marker 9, the Beach Lodge offers food, drinks, and live music with your toes in the sand.",
    address: "2016 On the Beach Dr, Port Aransas, TX 78373",
    phone: "(361) 749-5714",
    tags: ["beachfront", "bar", "live-music", "casual-dining", "beach-bar"],
  },
  {
    name: "Lelo's Island Bar",
    slug: "lelos-island-bar",
    category: "restaurants-bars",
    subcategory: "Bar & Grill",
    tagline: "Signature tiki drinks and specialty burgers",
    description:
      "A neighborhood staple for locals and visitors alike, serving signature tiki cocktails and specialty burgers in a casual, laid-back island setting.",
    address: "212 Beach St, Port Aransas, TX 78373",
    phone: "(361) 416-1792",
    website: "https://www.lelosbar.com",
    tags: ["bar", "burgers", "tiki-drinks", "casual", "local-favorite"],
  },
  {
    name: "Shorty's Place",
    slug: "shortys-place",
    category: "restaurants-bars",
    subcategory: "Bar",
    tagline: "Port Aransas' oldest and friendliest bar",
    description:
      "A Port Aransas institution and the oldest bar on the island. Known for cold drinks, live music, and a welcoming atmosphere that keeps people coming back for decades.",
    address: "Corner of Alister and Beach St, Port Aransas, TX 78373",
    phone: "(361) 749-8224",
    website: "https://shortysportaransas.com",
    tags: ["bar", "live-music", "historic", "local-favorite", "nightlife"],
  },
  {
    name: "Coffee Waves",
    slug: "coffee-waves",
    category: "restaurants-bars",
    subcategory: "Coffee Shop",
    tagline: "The best artisan coffee in Port Aransas",
    description:
      "Known as the go-to spot for the best coffee in Port Aransas, Coffee Waves brews artisan coffee and serves breakfast items in an adorable, relaxed setting.",
    address: "1007 State Hwy 361, Port Aransas, TX 78373",
    phone: "(361) 749-0825",
    website: "https://www.coffeewaves.com",
    tags: ["coffee", "breakfast", "bakery", "artisan", "morning-spot"],
    featured: true,
  },
  {
    name: "Barefoot Beans",
    slug: "barefoot-beans",
    category: "restaurants-bars",
    subcategory: "Coffee Shop",
    tagline: "Coffee enthusiasts craving something new",
    description:
      "A cozy coffee shop offering specialty brews and creative drinks for coffee lovers looking for something beyond the ordinary.",
    address: "345 N Alister St, Suite E1, Port Aransas, TX 78373",
    phone: "(361) 816-6051",
    tags: ["coffee", "specialty-drinks", "downtown", "morning-spot", "cozy"],
  },
  {
    name: "Irie's Island Food",
    slug: "iries-island-food",
    category: "restaurants-bars",
    subcategory: "Bakery / Cafe",
    tagline: "Baked goods, soups, salads, and the famous Cruffin",
    description:
      "Crafts delicious baked goods and quick meal options like soups, salads, and sandwiches. Famous for their Cruffin -- a unique twist on a croissant and muffin.",
    address: "200 W Ave G, Port Aransas, TX 78373",
    phone: "(361) 749-2310",
    tags: ["bakery", "cafe", "breakfast", "pastries", "cruffin"],
  },

  // ─────────────────────────────────────────────
  // GOLF CART RENTALS
  // ─────────────────────────────────────────────
  {
    name: "Port A Beach Buggies",
    slug: "port-a-beach-buggies",
    category: "golf-cart-rentals",
    tagline: "Custom beach buggy golf cart rentals",
    description:
      "Offering custom Port A beach buggies for cruising around the island in style. Multiple cart sizes available for families and groups.",
    website: "https://portabeachbuggies.com",
    tags: ["golf-cart", "rental", "beach-buggy", "island-transport"],
  },
  {
    name: "Jackfish Cart Rentals",
    slug: "jackfish-cart-rentals",
    category: "golf-cart-rentals",
    tagline: "Top-of-the-line Club Carts with all the extras",
    description:
      "Specialize in premium Club Carts with lifted frames, off-road tires, Bluetooth speakers, built-in coolers, custom seats, and LED lighting. Also rents beach gear.",
    website: "https://portaransasgolfcarts.com",
    tags: ["golf-cart", "rental", "premium", "beach-gear", "bluetooth"],
    featured: true,
  },
  {
    name: "Coastal Ed's Coastal Carts",
    slug: "coastal-eds",
    category: "golf-cart-rentals",
    tagline: "The oldest and most trusted golf cart rentals in Port A",
    description:
      "The original golf cart rental company in Port Aransas, known for reliability and great customer service. A trusted name on the island for years.",
    website: "https://coastaleds.com",
    tags: ["golf-cart", "rental", "established", "trusted", "island-transport"],
  },
  {
    name: "Gulf Carts",
    slug: "gulf-carts",
    category: "golf-cart-rentals",
    tagline: "Premier golf cart rental company in Port Aransas",
    description:
      "Port Aransas' premier golf cart rental company offering a range of street-legal carts perfect for exploring the island.",
    website: "https://thegulfcarts.com",
    tags: ["golf-cart", "rental", "premier", "street-legal", "island-transport"],
  },
  {
    name: "Island Outfitters",
    slug: "island-outfitters",
    category: "golf-cart-rentals",
    tagline: "Golf cart rentals and beach gear provider",
    description:
      "Port Aransas' premier golf cart rental and beach gear provider. Offering a variety of cart sizes plus beach equipment to outfit your entire island vacation.",
    address: "525 Cut Off Rd, Port Aransas, TX 78373",
    phone: "(361) 336-3866",
    website: "https://www.islandoutfitterstx.com",
    tags: ["golf-cart", "rental", "beach-gear", "family-friendly", "island-transport"],
  },
  {
    name: "Kacie's Beach Carts",
    slug: "kacies-beach-carts",
    category: "golf-cart-rentals",
    tagline: "Luxury 4, 6, and 8-seater golf cart rentals",
    description:
      "Premium street-legal golf cart rentals available in 4, 6, and 8-seater models with daily, weekly, or monthly rates.",
    website: "https://kaciesbeachcarts.com",
    tags: ["golf-cart", "rental", "luxury", "large-groups", "street-legal"],
  },
  {
    name: "Texas Red Golf Carts",
    slug: "texas-red-golf-carts",
    category: "golf-cart-rentals",
    tagline: "Late model lifted EZ-GO carts with free delivery",
    description:
      "Offers late model lifted EZ-GO carts for rent with complimentary delivery to your accommodations included at no additional charge.",
    website: "https://www.texasredgolfcarts.com",
    tags: ["golf-cart", "rental", "free-delivery", "lifted", "ez-go"],
  },
  {
    name: "Salty Island Waves",
    slug: "salty-island-waves",
    category: "golf-cart-rentals",
    tagline: "Top-quality golf carts for cruising Port A",
    description:
      "Rent top-quality golf carts for cruising around Port Aransas. Street-legal carts perfect for beach trips, dining out, and island exploration.",
    website: "https://www.saltyislandwaves.com",
    tags: ["golf-cart", "rental", "street-legal", "island-transport"],
  },
  {
    name: "Island Carts",
    slug: "island-carts",
    category: "golf-cart-rentals",
    tagline: "Full-service golf cart rental company",
    description:
      "A full-service golf cart rental company providing a cost-effective mode of transportation around Port Aransas.",
    website: "https://www.theislandcarts.com",
    tags: ["golf-cart", "rental", "affordable", "full-service", "island-transport"],
  },
  {
    name: "Port A Carts",
    slug: "port-a-carts",
    category: "golf-cart-rentals",
    tagline: "Street-legal carts designed for island travel",
    description:
      "Specializing in street-legal golf cart rentals designed specifically for Port Aransas island travel. Easy booking and reliable service.",
    website: "https://www.portacartsfun.com",
    tags: ["golf-cart", "rental", "street-legal", "island-transport", "easy-booking"],
  },
  {
    name: "Bron's Beach Carts",
    slug: "brons-beach-carts",
    category: "golf-cart-rentals",
    tagline: "Beach carts and gear with 3 island locations",
    description:
      "With 3 locations along Port Aransas beaches, Bron's offers golf cart rentals plus umbrellas, tents, and resort-style chairs.",
    address: "314 E Ave G, Port Aransas, TX 78373",
    phone: "(361) 290-7143",
    tags: ["golf-cart", "rental", "beach-gear", "multiple-locations", "umbrella-rental"],
  },

  // ─────────────────────────────────────────────
  // VACATION RENTALS / PROPERTY MANAGEMENT
  // ─────────────────────────────────────────────
  {
    name: "Port A Escapes",
    slug: "port-a-escapes",
    category: "vacation-rentals",
    tagline: "Professionally managed vacation rentals on the island",
    description:
      "A large selection of high-quality, professionally managed vacation rentals on Mustang Island. From beachfront condos to family homes.",
    website: "https://www.portaescapes.com",
    tags: ["vacation-rental", "property-management", "beachfront", "condos", "family"],
    featured: true,
  },
  {
    name: "On Island Time Properties",
    slug: "on-island-time-properties",
    category: "vacation-rentals",
    tagline: "Affordable vacation rental management since 2011",
    description:
      "An affordable vacation rental property management company serving Port Aransas since 2011 with full-service management for owners and great stays for guests.",
    website: "https://www.onislandtimeproperties.com",
    tags: ["vacation-rental", "property-management", "affordable", "full-service"],
  },
  {
    name: "Sand Key Vacation Rentals",
    slug: "sand-key-vacation-rentals",
    category: "vacation-rentals",
    tagline: "No extra booking fees and 24/7 local support",
    description:
      "Offers vacation rentals and property sales in the Port Aransas and Coastal Bend area. No extra booking fees, 24/7 local support, and advanced revenue management.",
    website: "https://www.sandkeyvacationrentals.com",
    tags: ["vacation-rental", "property-management", "no-booking-fees", "24-7-support"],
  },
  {
    name: "Port A Beach House Company",
    slug: "port-a-beach-house-co",
    category: "vacation-rentals",
    tagline: "Quality over quantity since 2005",
    description:
      "Family-owned vacation rental management company operating since 2005. Prioritizes quality over quantity with premium rentals to maximize returns for property owners.",
    address: "1726 TX-361 Ste D, Port Aransas, TX 78373",
    phone: "(361) 749-0027",
    website: "https://www.visitporta.com",
    tags: ["vacation-rental", "property-management", "family-owned", "premium", "established"],
  },
  {
    name: "Silver Sands Vacation Rentals",
    slug: "silver-sands-vacation-rentals",
    category: "vacation-rentals",
    tagline: "Full-service vacation property management",
    description:
      "Offering full-service vacation property management on Mustang Island with a focus on owner returns and guest satisfaction.",
    website: "https://silversandsvacationrentals.com",
    tags: ["vacation-rental", "property-management", "full-service", "mustang-island"],
  },
  {
    name: "Grand Welcome Port Aransas",
    slug: "grand-welcome",
    category: "vacation-rentals",
    tagline: "Full-service Airbnb and VRBO management",
    description:
      "Locally owned and operated full-service vacation rental property management. Handles listings on Airbnb, VRBO, and major booking platforms plus housekeeping, maintenance, and guest services.",
    website: "https://www.portaransashost.com",
    tags: ["vacation-rental", "property-management", "airbnb", "vrbo", "full-service"],
  },
  {
    name: "Vacasa Port Aransas",
    slug: "vacasa-port-aransas",
    category: "vacation-rentals",
    tagline: "24/7 guest service and professional management",
    description:
      "National vacation rental management company with a strong Port Aransas presence. Offers 24/7 guest service and on-site help for both owners and guests.",
    website: "https://www.vacasa.com/property-management/tx/port-aransas",
    tags: ["vacation-rental", "property-management", "national-brand", "24-7-support"],
  },
  {
    name: "Cinnamon Shore",
    slug: "cinnamon-shore",
    category: "vacation-rentals",
    tagline: "Premier beachfront resort community and rentals",
    description:
      "A premier master-planned beachfront community on Mustang Island offering luxury vacation rentals, dining, shopping, and resort-style amenities.",
    phone: "(361) 749-0422",
    website: "https://www.cinnamonshore.com",
    tags: ["vacation-rental", "resort-community", "luxury", "beachfront", "amenities"],
    featured: true,
  },

  // ─────────────────────────────────────────────
  // HOTELS & RESORTS
  // ─────────────────────────────────────────────
  {
    name: "Port Royal Ocean Resort & Conference Center",
    slug: "port-royal-ocean-resort",
    category: "hotels-resorts",
    subcategory: "Resort",
    tagline: "Beachfront condos and conference center on the Gulf",
    description:
      "A full-service beachfront resort featuring condos, multiple pools, a conference center, and direct beach access on the Gulf of Mexico.",
    address: "6317 State Hwy 361, Port Aransas, TX 78373",
    phone: "(361) 749-5011",
    website: "https://port-royal.com",
    tags: ["resort", "beachfront", "condos", "conference-center", "pools"],
    featured: true,
  },
  {
    name: "Hampton Inn & Suites Port Aransas",
    slug: "hampton-inn-port-aransas",
    category: "hotels-resorts",
    subcategory: "Hotel",
    tagline: "Reliable comfort on Highway 361",
    description:
      "A well-known hotel brand offering comfortable rooms, complimentary breakfast, and a pool, conveniently located on the main highway into Port Aransas.",
    address: "2208 Hwy 361, Port Aransas, TX 78373",
    phone: "(361) 749-8888",
    website: "https://www.hilton.com/en/hotels/crppahx-hampton-suites-port-aransas/",
    tags: ["hotel", "chain", "pool", "breakfast-included", "highway-361"],
  },
  {
    name: "Seaside Boutique Hotel",
    slug: "seaside-boutique-hotel",
    category: "hotels-resorts",
    subcategory: "Boutique Hotel",
    tagline: "Oceanfront boutique hotel experience",
    description:
      "A charming oceanfront boutique hotel offering a more intimate, personalized stay with beach views and upscale amenities.",
    address: "841 Sandcastle Dr, Port Aransas, TX 78373",
    phone: "(361) 339-9999",
    website: "https://www.seasideporta.com",
    tags: ["boutique-hotel", "oceanfront", "upscale", "intimate", "beach-view"],
  },
  {
    name: "Beachgate CondoSuites & Hotel",
    slug: "beachgate-condosuites",
    category: "hotels-resorts",
    subcategory: "Hotel / Condos",
    tagline: "Beachfront condos and hotel suites",
    description:
      "Offering a mix of hotel rooms and condo suites right on the beach, perfect for families and groups looking for a home-away-from-home feel with hotel amenities.",
    website: "https://beachgate.com",
    tags: ["hotel", "condos", "beachfront", "family-friendly", "suites"],
  },
  {
    name: "Palmilla Beach Resort & Golf Club",
    slug: "palmilla-beach-resort",
    category: "hotels-resorts",
    subcategory: "Resort",
    tagline: "Luxury resort with championship golf on the island",
    description:
      "A high-end resort community on Mustang Island featuring a championship golf course, luxury accommodations, and resort-style living.",
    tags: ["resort", "golf", "luxury", "mustang-island", "championship-course"],
  },
  {
    name: "Gulf Waters Beach Front RV Resort",
    slug: "gulf-waters-rv-resort",
    category: "hotels-resorts",
    subcategory: "RV Park",
    tagline: "Beachfront RV resort with 600+ feet of sandy beach",
    description:
      "A premier beachfront RV resort featuring over 600 feet of beautiful sandy beach with warm Gulf waters. Full hookups and resort-style amenities.",
    address: "5601 State Hwy 361, Port Aransas, TX 78373",
    phone: "(361) 749-4978",
    website: "https://gulfwaters.com",
    tags: ["rv-park", "beachfront", "resort", "full-hookups", "gulf-views"],
  },
  {
    name: "On The Beach RV Park",
    slug: "on-the-beach-rv-park",
    category: "hotels-resorts",
    subcategory: "RV Park",
    tagline: "You can not get closer to the shore than this",
    description:
      "All sites feature full hookups with high-speed wireless internet. Known for friendly staff, convenient amenities, and an unbeatable beachfront location.",
    website: "https://onthebeachrvpark.com",
    tags: ["rv-park", "beachfront", "full-hookups", "wifi", "friendly-staff"],
  },
  {
    name: "Pioneer Beach RV Resort",
    slug: "pioneer-beach-rv-resort",
    category: "hotels-resorts",
    subcategory: "RV Park",
    tagline: "Premium RV sites and cabins near the Gulf",
    description:
      "Premium RV sites with full hookups and cabins located within walking distance of the Gulf. Adjacent to Palmilla Beach Golf Club.",
    address: "120 Gulfwind Dr, Port Aransas, TX 78373",
    phone: "1-888-480-3246",
    website: "https://www.pioneerrvresorts.com",
    tags: ["rv-park", "cabins", "full-hookups", "near-golf", "family-friendly"],
  },
  {
    name: "LaFitte's Hideout RV Resort",
    slug: "lafittes-hideout-rv-resort",
    category: "hotels-resorts",
    subcategory: "RV Park",
    tagline: "Secluded seven-acre RV resort on the island",
    description:
      "Situated on a secluded seven acres deep in the heart of Mustang Island. Considered by many as the best RV resort on the island.",
    website: "https://lafittesporta.com",
    tags: ["rv-park", "secluded", "mustang-island", "peaceful", "resort"],
  },

  // ─────────────────────────────────────────────
  // FISHING CHARTERS
  // ─────────────────────────────────────────────
  {
    name: "Deep Sea Headquarters",
    slug: "deep-sea-headquarters",
    category: "fishing-charters",
    subcategory: "Deep Sea / Offshore",
    tagline: "Voted the top fishing guide and charter in the Coastal Bend",
    description:
      "Voted the top fishing guide and charter in the Coastal Bend. Offering deep sea and offshore fishing trips from 4 to 12+ hours aboard well-equipped vessels.",
    address: "440 W Cotter Ave, Port Aransas, TX 78373",
    phone: "(361) 749-5597",
    website: "https://deepseaheadquarters.com",
    tags: ["deep-sea", "offshore", "fishing-charter", "top-rated", "full-day"],
    featured: true,
  },
  {
    name: "Fisherman's Wharf",
    slug: "fishermans-wharf",
    category: "fishing-charters",
    subcategory: "Deep Sea / Bay",
    tagline: "Premier chartered fishing tours from 4 to 56 hours",
    description:
      "A premier charter fishing operator offering deep sea, offshore, and bay fishing trips ranging from 4 to 56 hours. Their overnight trips target Yellowfin Tuna, Dorado, and Blue Marlin.",
    address: "900 Tarpon St, Port Aransas, TX 78373",
    phone: "(361) 749-5448",
    website: "https://www.fishermanswharfporta.com",
    tags: ["deep-sea", "bay-fishing", "offshore", "overnight-trips", "charter"],
    featured: true,
  },
  {
    name: "Dolphin Dock Charters",
    slug: "dolphin-dock-charters",
    category: "fishing-charters",
    subcategory: "Deep Sea / Bay",
    tagline: "Fishing trips from 4 to 30 hours for all skill levels",
    description:
      "Offering fishing charter trips ranging from 4 to 30 hours with shared and private options. Ideal for beginners and experts alike.",
    address: "300 W Cotter Ave, Port Aransas, TX 78373",
    phone: "(361) 749-4188",
    website: "https://dolphindocks.com",
    tags: ["deep-sea", "bay-fishing", "shared-charter", "private-charter", "beginner-friendly"],
  },
  {
    name: "CAT Sport Fishing",
    slug: "cat-sport-fishing",
    category: "fishing-charters",
    subcategory: "Offshore / Bay",
    tagline: "The #1 fishing charter in Port Aransas",
    description:
      "The #1 rated fishing charter based in Port Aransas with boats that get you to blue water quickly. Private offshore and bay fishing charters plus guided duck hunts.",
    phone: "(361) 416-1067",
    website: "https://catsportfishing.com",
    tags: ["offshore", "bay-fishing", "private-charter", "top-rated", "blue-water"],
  },
  {
    name: "Coastal Charters TX",
    slug: "coastal-charters-tx",
    category: "fishing-charters",
    subcategory: "Deep Sea / Offshore",
    tagline: "Four boats from 31 to 61 feet for every trip",
    description:
      "Offering four boats ranging from 31 to 61 feet, each fully equipped for a great day on the water. Deep sea and offshore fishing adventures for all group sizes.",
    website: "https://www.coastalcharterstx.com",
    tags: ["deep-sea", "offshore", "multi-boat", "charter", "large-groups"],
  },
  {
    name: "Red Tag Guide Service",
    slug: "red-tag-guide-service",
    category: "fishing-charters",
    subcategory: "Bay / Inshore",
    tagline: "Expert bay and inshore fishing guides",
    description:
      "Specializing in bay and inshore fishing for redfish, speckled trout, flounder, and black drum in the waters surrounding Port Aransas and Mustang Island.",
    address: "245 Pleasant Valley, Port Aransas, TX 78373",
    phone: "(361) 230-2065",
    website: "https://www.redtagguide.com",
    tags: ["bay-fishing", "inshore", "redfish", "trout", "guide-service"],
  },
  {
    name: "Island Boy Charters",
    slug: "island-boy-charters",
    category: "fishing-charters",
    subcategory: "Bay / Inshore",
    tagline: "Bay fishing, birding tours, and eco trips with Capt. Pete",
    description:
      "Captain Pete Arzola offers year-round bay fishing trips targeting redfish, speckled trout, flounder, and black drum. Also offers birding, dolphin tours, nature photography trips, and sunset cruises.",
    website: "https://islandboycharters.com",
    tags: ["bay-fishing", "birding", "eco-tour", "photography", "sunset-cruise"],
  },

  // ─────────────────────────────────────────────
  // WATER SPORTS & ACTIVITIES
  // ─────────────────────────────────────────────
  {
    name: "Chute 'Em Up Parasailing",
    slug: "chute-em-up-parasailing",
    category: "water-sports",
    subcategory: "Parasailing",
    tagline: "Soar up to 500 feet over Port Aransas",
    description:
      "Over two decades of parasailing experience with USCG-certified captains. Soar up to 500 feet and enjoy jaw-dropping views of Port Aransas from above.",
    address: "136 W Cotter Ave, Port Aransas, TX 78373",
    website: "https://www.portaransas.org/listing/chute-em-up-parasailing/",
    tags: ["parasailing", "adventure", "family-activity", "ocean-views", "uscg-certified"],
    featured: true,
  },
  {
    name: "Gettin' Salty Watersports",
    slug: "gettin-salty-watersports",
    category: "water-sports",
    subcategory: "Multi-Sport",
    tagline: "Jet ski, kayak, and paddleboard rentals at the marina",
    description:
      "Offering high-quality jet ski rentals (up to 50 mph), single and double kayaks, kid-size kayaks, and stand-up paddleboards. Self-guided and guided tours available.",
    address: "301 JC Barr Blvd, Port Aransas, TX 78373",
    website: "https://saltywatersports.com",
    tags: ["jet-ski", "kayak", "paddleboard", "rentals", "guided-tours"],
    featured: true,
  },
  {
    name: "Port A H2O",
    slug: "port-a-h2o",
    category: "water-sports",
    subcategory: "Multi-Sport",
    tagline: "SUP lessons, kitesurfing, surfing, and kayak rentals",
    description:
      "Specializing in stand-up paddleboard lessons and rentals, kitesurfing lessons, surfing lessons, boat charters, and half or full-day kayak rentals.",
    website: "https://portaransaswatertime.com",
    tags: ["paddleboard", "kitesurfing", "surfing", "kayak", "lessons"],
  },
  {
    name: "Coastal Bend Kayaking",
    slug: "coastal-bend-kayaking",
    category: "water-sports",
    subcategory: "Kayaking",
    tagline: "Kayak tours and rentals on the Texas coast",
    description:
      "Half-day and full-day kayak rentals plus guided tours exploring the waterways around Port Aransas. Fishing rods available to rent with kayaks for fishing trips.",
    address: "219 N Alister St, Port Aransas, TX 78373",
    website: "https://www.coastalbendkayaking.com",
    tags: ["kayak", "tours", "rentals", "fishing-kayak", "eco-tours"],
  },

  // ─────────────────────────────────────────────
  // BOAT TOURS
  // ─────────────────────────────────────────────
  {
    name: "The Scarlet Lady Dolphin Cruises",
    slug: "scarlet-lady-dolphin-cruises",
    category: "boat-tours",
    subcategory: "Dolphin Watch",
    tagline: "Dolphin watching adventures along Lydia Ann Channel",
    description:
      "One of the most exciting dolphin watching tours in Port Aransas. 1.5-hour cruises along the Lydia Ann Channel with full narration about Port Aransas history. Monthly wine and cheese sunset cruises.",
    website: "https://scarletladydolphincruise.com",
    tags: ["dolphin-watch", "sunset-cruise", "wine-cruise", "nature", "narrated"],
    featured: true,
  },
  {
    name: "Neptune's Charters",
    slug: "neptunes-charters",
    category: "boat-tours",
    subcategory: "Multi-Tour",
    tagline: "Dolphin watching, sunset cruises, and shrimp trawls since 1985",
    description:
      "Operating since 1985, Neptune's offers dolphin-watching tours, sunset cruises, and unique shrimp trawls where guests observe marine creatures in a built-in touch tank.",
    website: "https://neptunescharters.com",
    tags: ["dolphin-watch", "sunset-cruise", "shrimp-trawl", "touch-tank", "family-friendly"],
    featured: true,
  },
  {
    name: "Tiki Tours Port Aransas",
    slug: "tiki-tours",
    category: "boat-tours",
    subcategory: "Private Tours",
    tagline: "Private tours for up to 6 on the Bamboozled",
    description:
      "Private boat tours for up to six passengers aboard the Bamboozled, a stylish boat with a large Palapa roof. Dolphin watching, sunset cruises, beachcombing, and party cruises.",
    address: "3500 Island Moorings Pkwy, Port Aransas, TX 78373",
    phone: "(361) 205-7707",
    website: "https://tikitourstx.com",
    tags: ["private-tour", "dolphin-watch", "sunset-cruise", "party-cruise", "beachcombing"],
  },
  {
    name: "Dolphin Docks",
    slug: "dolphin-docks",
    category: "boat-tours",
    subcategory: "Multi-Tour",
    tagline: "Dolphin watches, eco tours, fishing, and sunset cruises",
    description:
      "Offering dolphin watch cruises, bay fishing, marine ecology tours, scenic sunset cruises, fireworks cruises, and private charters from downtown Port Aransas.",
    address: "300 W Cotter Ave, Port Aransas, TX 78373",
    phone: "(361) 749-4188",
    website: "https://www.dolphinwatching.info",
    tags: ["dolphin-watch", "eco-tour", "sunset-cruise", "fishing", "fireworks-cruise"],
  },

  // ─────────────────────────────────────────────
  // SHOPS & RETAIL
  // ─────────────────────────────────────────────
  {
    name: "The BoardHouse Surf & Skate",
    slug: "boardhouse-surf-skate",
    category: "shops-retail",
    subcategory: "Surf Shop",
    tagline: "Texas surf and skate shop in downtown Port A",
    description:
      "A Texas surf and skate shop located in downtown Port Aransas offering boards, apparel, accessories, and everything you need to hit the waves.",
    address: "509 N Alister St, Port Aransas, TX 78373",
    website: "https://www.boardhousesurfshop.com",
    tags: ["surf-shop", "skate", "apparel", "boards", "downtown"],
    featured: true,
  },
  {
    name: "Bojon's Surf and Gifts",
    slug: "bojons-surf-gifts",
    category: "shops-retail",
    subcategory: "Surf / Souvenir Shop",
    tagline: "Surf gear, t-shirts, and island gifts",
    description:
      "A long-standing Port Aransas surf and gift shop offering surf apparel, t-shirts, souvenirs, and beach essentials.",
    address: "204 E Ave G, Port Aransas, TX 78373",
    phone: "(361) 749-3133",
    tags: ["surf-shop", "souvenirs", "gifts", "apparel", "beach-essentials"],
  },
  {
    name: "Port A Outfitters",
    slug: "port-a-outfitters",
    category: "shops-retail",
    subcategory: "Bait & Tackle",
    tagline: "Fishing tackle, live bait, and gear in the heart of Port A",
    description:
      "Conveniently located in the heart of Port Aransas, offering fishing tackle, live bait, shrimp, fresh dead bait, frozen baits, and essential fishing gear.",
    address: "126 W Cotter Ave, Port Aransas, TX 78373",
    phone: "(361) 749-3474",
    website: "https://portaoutfitters.com",
    tags: ["bait-tackle", "fishing-gear", "live-bait", "downtown", "outfitter"],
  },
  {
    name: "Island Tackle of Port Aransas",
    slug: "island-tackle",
    category: "shops-retail",
    subcategory: "Bait & Tackle",
    tagline: "Full-service bait and tackle shop",
    description:
      "A full-service tackle shop offering live bait, tackle, rods, reels, and expert local fishing advice to anglers of all levels.",
    address: "207 W Ave G, Port Aransas, TX 78373",
    phone: "(361) 749-1744",
    tags: ["bait-tackle", "fishing-gear", "live-bait", "local-advice"],
  },
  {
    name: "Moby Dick's Gift Shop",
    slug: "moby-dicks-gift-shop",
    category: "shops-retail",
    subcategory: "Souvenir Shop",
    tagline: "Souvenirs and gifts at the Moby Dick's complex",
    description:
      "Part of the Moby Dick's restaurant complex, this gift shop offers a wide selection of Port Aransas souvenirs, t-shirts, beach items, and coastal decor.",
    address: "517 S Alister St, Port Aransas, TX 78373",
    phone: "(361) 749-9447",
    tags: ["souvenirs", "gifts", "t-shirts", "beach-items", "coastal-decor"],
  },

  // ─────────────────────────────────────────────
  // LOCAL SERVICES
  // ─────────────────────────────────────────────
  {
    name: "Port Aransas Air Conditioning & Heating",
    slug: "port-aransas-ac-heating",
    category: "local-services",
    subcategory: "HVAC",
    tagline: "Same price nights, holidays, and weekends",
    description:
      "Local HVAC company offering air conditioning and heating repair, maintenance, and installation with no upcharge for nights, holidays, or weekends.",
    phone: "(361) 749-2665",
    website: "https://portaransasair.com",
    tags: ["hvac", "ac-repair", "heating", "no-upcharge", "local"],
  },
  {
    name: "Highland AC Sales & Service",
    slug: "highland-ac",
    category: "local-services",
    subcategory: "HVAC",
    tagline: "HVAC solutions since 1976",
    description:
      "Established in 1976, offering new installations, repairs, and maintenance for heating, ventilation, and air conditioning systems in Port Aransas.",
    phone: "(361) 766-2665",
    website: "https://highlandac.com",
    tags: ["hvac", "ac-repair", "installation", "established", "maintenance"],
  },
  {
    name: "Keep It Cool Air Conditioning & Heating",
    slug: "keep-it-cool-ac",
    category: "local-services",
    subcategory: "HVAC",
    tagline: "AC installation, repair, and maintenance",
    description:
      "Full-service HVAC company providing air conditioning installation, repair, maintenance, and heating solutions for Port Aransas homes and businesses.",
    phone: "(361) 850-7845",
    website: "https://keepitcooltx.com",
    tags: ["hvac", "ac-repair", "installation", "heating", "residential"],
  },
  {
    name: "Mathews CCAC",
    slug: "mathews-ccac",
    category: "local-services",
    subcategory: "HVAC / Plumbing / Electrical",
    tagline: "HVAC, plumbing, and electrical since 1979",
    description:
      "Delivering dependable HVAC, plumbing, and electrical services in Port Aransas since 1979. A one-stop shop for home maintenance needs.",
    phone: "(361) 235-3905",
    website: "https://www.ccacac.com",
    tags: ["hvac", "plumbing", "electrical", "full-service", "established"],
  },
  {
    name: "Port Plumbing Co., Inc.",
    slug: "port-plumbing",
    category: "local-services",
    subcategory: "Plumbing",
    tagline: "70+ years of plumbing experience",
    description:
      "Over 70 years of experience in plumbing repairs, new construction, remodels, and both residential and commercial work.",
    website: "https://portplumbing.net",
    tags: ["plumbing", "repairs", "new-construction", "remodels", "established"],
  },
  {
    name: "Coastal Scapes",
    slug: "coastal-scapes",
    category: "local-services",
    subcategory: "Lawn Care / Landscaping",
    tagline: "Residential and commercial lawn care on the island",
    description:
      "Full-service lawn care and landscaping for residential and commercial properties in Port Aransas. Services include lawn maintenance, palm tree trimming, mulching, flower beds, and shrub trimming.",
    phone: "(361) 416-0564",
    website: "https://coastalscapespatx.com",
    tags: ["lawn-care", "landscaping", "palm-trees", "property-maintenance", "commercial"],
  },
  {
    name: "Sandy Shores Property Management",
    slug: "sandy-shores-property-mgmt",
    category: "local-services",
    subcategory: "Property Maintenance / Cleaning",
    tagline: "Vacation home cleaning and lawn care",
    description:
      "Specializing in detailed cleaning of vacation homes and complete lawn care services for Port Aransas property owners.",
    tags: ["cleaning", "lawn-care", "property-maintenance", "vacation-homes", "turnover-cleaning"],
  },

  // ─────────────────────────────────────────────
  // EVENTS & ENTERTAINMENT
  // ─────────────────────────────────────────────
  {
    name: "Sip Yard Port A",
    slug: "sip-yard-port-a",
    category: "events-entertainment",
    subcategory: "Venue / Bar",
    tagline: "One-of-a-kind outdoor venue with live music and events",
    description:
      "A unique outdoor venue in Port Aransas hosting weekly Friday night concert series, craft beverages, and community events in a vibrant atmosphere.",
    address: "123 W Cotter Ave, Port Aransas, TX 78373",
    phone: "(361) 267-4917",
    website: "https://www.sipyardporta.com",
    tags: ["live-music", "venue", "outdoor", "concerts", "craft-beverages"],
    featured: true,
  },
  {
    name: "The Palm Social Club",
    slug: "palm-social-club",
    category: "events-entertainment",
    subcategory: "Bar / Venue",
    tagline: "Vibrant tropical bar and social venue",
    description:
      "A vibrant tropical bar and social venue on Tarpon Street offering craft cocktails, live entertainment, and a lively atmosphere for nights out in Port Aransas.",
    address: "801 Tarpon St, Port Aransas, TX 78373",
    phone: "(361) 332-7233",
    website: "https://thepalmsocialclub.com",
    tags: ["bar", "nightlife", "live-entertainment", "cocktails", "social"],
  },
  {
    name: "Shorty's Place",
    slug: "shortys-place-venue",
    category: "events-entertainment",
    subcategory: "Live Music Bar",
    tagline: "Live music at Port A's oldest bar",
    description:
      "Port Aransas' oldest and friendliest bar, hosting regular live music acts, open mic nights, and community gatherings at the corner of Alister and Beach.",
    address: "Corner of Alister and Beach St, Port Aransas, TX 78373",
    phone: "(361) 749-8224",
    website: "https://shortysportaransas.com",
    tags: ["live-music", "bar", "historic", "open-mic", "nightlife"],
  },
  {
    name: "Port A Beach Lodge",
    slug: "beach-lodge-venue",
    category: "events-entertainment",
    subcategory: "Beachfront Venue",
    tagline: "Live music and events on the beach",
    description:
      "A beachfront restaurant and bar at Marker 9 hosting live music acts, beach parties, and events with your toes in the sand.",
    address: "2016 On the Beach Dr, Port Aransas, TX 78373",
    phone: "(361) 749-5714",
    tags: ["live-music", "beachfront", "events", "beach-bar", "venue"],
  },
  {
    name: "Texas SandFest",
    slug: "texas-sandfest",
    category: "events-entertainment",
    subcategory: "Annual Festival",
    tagline: "Largest master sand sculpting competition in the US",
    description:
      "The largest master sand sculpting competition in the United States, held annually in Port Aransas. Features world-class sand sculptors, live music, food vendors, and family activities.",
    website: "https://www.texassandfest.org",
    tags: ["festival", "sand-sculpting", "annual-event", "family-friendly", "art"],
  },

  // ─────────────────────────────────────────────
  // REAL ESTATE
  // ─────────────────────────────────────────────
  {
    name: "Port Aransas Realty",
    slug: "port-aransas-realty",
    category: "real-estate",
    tagline: "Island real estate experts since 1986",
    description:
      "Over 30 years of combined experience selling properties on Mustang Island. In business since 1986 with deep local knowledge of the Port Aransas market.",
    address: "104 Mustang Blvd, Port Aransas, TX 78373",
    phone: "(361) 749-7500",
    website: "https://www.portaransasrealty.com",
    tags: ["real-estate", "residential", "commercial", "mustang-island", "established"],
    featured: true,
  },
  {
    name: "Mustang Island Realty",
    slug: "mustang-island-realty",
    category: "real-estate",
    tagline: "Real estate broker on Port Aransas and Padre Island",
    description:
      "A real estate brokerage with offices in Port Aransas and on Padre Island, serving buyers and sellers across the Texas barrier islands.",
    website: "https://www.mustangislandrealty.com",
    tags: ["real-estate", "broker", "mustang-island", "padre-island", "residential"],
  },
  {
    name: "Kuper Sotheby's International Realty",
    slug: "kuper-sothebys",
    category: "real-estate",
    tagline: "Luxury real estate on the Texas coast",
    description:
      "A leading Central and South Texas luxury real estate firm with a Port Aransas office. Agent Keith McMullin specializes in island properties.",
    website: "https://www.texasislandproperties.com",
    tags: ["real-estate", "luxury", "sothebys", "island-properties", "high-end"],
  },
  {
    name: "Shoreline Realty Co.",
    slug: "shoreline-realty",
    category: "real-estate",
    tagline: "Local realtor focused on the Port Aransas market",
    description:
      "A local real estate company focused exclusively on the Port Aransas market, helping buyers find their dream island property.",
    website: "https://shorelinerealtyco.com",
    tags: ["real-estate", "local", "residential", "island-properties", "buyer-agent"],
  },
  {
    name: "Sand Key Realty",
    slug: "sand-key-realty",
    category: "real-estate",
    tagline: "Real estate sales and vacation rentals combined",
    description:
      "Offering both property sales and vacation rental management in the Port Aransas and Coastal Bend area, giving owners a complete real estate solution.",
    website: "https://www.sandkeyvacationrentals.com",
    tags: ["real-estate", "vacation-rentals", "dual-service", "coastal-bend", "property-sales"],
  },
  {
    name: "Coldwell Banker Island Realtors",
    slug: "coldwell-banker-island",
    category: "real-estate",
    tagline: "National brand with local island expertise",
    description:
      "Coldwell Banker's Port Aransas office combining the power of a national brand with deep local market knowledge for island property transactions.",
    website: "http://homesportaransas.com",
    tags: ["real-estate", "national-brand", "residential", "island-properties", "coldwell-banker"],
  },

  // ─────────────────────────────────────────────
  // BEACH SERVICES
  // ─────────────────────────────────────────────
  {
    name: "Port Aransas Local Co.",
    slug: "port-aransas-local-co",
    category: "beach-services",
    tagline: "Official beach vendor for Port Aransas",
    description:
      "The official beach vendor for Port Aransas. They deliver and set up rental chairs and umbrella packages right on the sand so you can arrive and relax.",
    phone: "(361) 444-3631",
    website: "https://portaransaslocalco.com",
    tags: ["beach-setup", "umbrella-rental", "chair-rental", "delivery", "official-vendor"],
    featured: true,
  },
  {
    name: "361 Blue Beach Concierge",
    slug: "361-blue",
    category: "beach-services",
    tagline: "Reserve online and arrive to a groomed beach setup",
    description:
      "Reserve beach chairs and umbrellas online and arrive to a beautifully groomed beach where your setup is waiting. Full concierge-style beach service.",
    phone: "(361) 416-0425",
    website: "https://361blue.com",
    tags: ["beach-concierge", "umbrella-rental", "chair-rental", "online-booking", "setup-service"],
  },
  {
    name: "MEblue Beach Rentals",
    slug: "meblue",
    category: "beach-services",
    tagline: "10x10 canopies with SPF 100 protection delivered to you",
    description:
      "Delivers, sets up, and retrieves canopies and resort-quality lounge chairs. Canopies are 10x10 feet with SPF 100 protection. Phone lines open daily 8am-5pm.",
    phone: "(361) 243-0080",
    tags: ["beach-rental", "canopy", "lounge-chairs", "delivery", "spf-protection"],
  },
  {
    name: "Bron's Beach Rentals",
    slug: "brons-beach-rentals",
    category: "beach-services",
    tagline: "3 beach locations for umbrellas, tents, and resort chairs",
    description:
      "With 3 locations along Port Aransas beaches, Bron's provides umbrellas, tents, and resort-style chairs to make your beach day complete.",
    address: "314 E Ave G, Port Aransas, TX 78373",
    phone: "(361) 290-7143",
    tags: ["beach-rental", "umbrellas", "tents", "resort-chairs", "multiple-locations"],
  },
];
