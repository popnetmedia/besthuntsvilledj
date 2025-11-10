// Cities within 50-mile radius of Huntsville, AL (North Alabama + TN Valley)
// Organized by state and approximate population for prioritization

export const cities = [
  // Alabama - Major Cities (10,000+)
  {
    name: "Huntsville",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "huntsville-al",
    county: "Madison County",
    population: "215,000",
    distance: "0 miles",
    priority: 1,
    mainAttractions: ["Space & Rocket Center", "Big Spring Park", "Von Braun Center", "Monte Sano State Park"]
  },
  {
    name: "Madison",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "madison-al",
    county: "Madison County",
    population: "56,000",
    distance: "8 miles from Huntsville",
    priority: 1,
    mainAttractions: ["Dublin Park", "Madison City Schools", "County Line Orchard"]
  },
  {
    name: "Decatur",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "decatur-al",
    county: "Morgan County",
    population: "57,000",
    distance: "25 miles from Huntsville",
    priority: 1,
    mainAttractions: ["Point Mallard Park", "Wheeler National Wildlife Refuge", "Historic Old State Bank"]
  },
  {
    name: "Athens",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "athens-al",
    county: "Limestone County",
    population: "25,000",
    distance: "22 miles from Huntsville",
    priority: 1,
    mainAttractions: ["Athens State University", "Big Spring Memorial Park", "Tennessee Valley Old Time Fiddlers Convention"]
  },
  {
    name: "Hartselle",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "hartselle-al",
    county: "Morgan County",
    population: "15,000",
    distance: "30 miles from Huntsville",
    priority: 2,
    mainAttractions: ["Hartselle Aquatic Center", "Historic Downtown Hartselle", "Depot Park"]
  },

  // Alabama - Mid-Size Cities (5,000-10,000)
  {
    name: "Harvest",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "harvest-al",
    county: "Madison County",
    population: "5,800",
    distance: "12 miles from Huntsville",
    priority: 2,
    mainAttractions: ["Monrovia Park", "Local farms and markets"]
  },
  {
    name: "Meridianville",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "meridianville-al",
    county: "Madison County",
    population: "7,400",
    distance: "10 miles from Huntsville",
    priority: 2,
    mainAttractions: ["Community parks", "Local shopping"]
  },
  {
    name: "Owens Cross Roads",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "owens-cross-roads-al",
    county: "Madison County",
    population: "1,600",
    distance: "15 miles from Huntsville",
    priority: 2,
    mainAttractions: ["Monte Sano State Park nearby", "Hampton Cove Golf Course"]
  },

  // Alabama - Smaller Towns (Under 5,000)
  {
    name: "New Market",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "new-market-al",
    county: "Madison County",
    population: "1,800",
    distance: "15 miles from Huntsville",
    priority: 3,
    mainAttractions: ["Rural community", "Local farms"]
  },
  {
    name: "Hazel Green",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "hazel-green-al",
    county: "Madison County",
    population: "3,600",
    distance: "18 miles from Huntsville",
    priority: 3,
    mainAttractions: ["Green Mountain Nature Trail", "Local parks"]
  },
  {
    name: "Gurley",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "gurley-al",
    county: "Madison County",
    population: "850",
    distance: "20 miles from Huntsville",
    priority: 3,
    mainAttractions: ["Paint Rock River", "Rural community"]
  },
  {
    name: "New Hope",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "new-hope-al",
    county: "Madison County",
    population: "2,900",
    distance: "28 miles from Huntsville",
    priority: 3,
    mainAttractions: ["Tennessee River access", "Local parks"]
  },
  {
    name: "Mooresville",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "mooresville-al",
    county: "Limestone County",
    population: "60",
    distance: "18 miles from Huntsville",
    priority: 3,
    mainAttractions: ["Historic town", "Stagecoach Inn & Tavern", "Oldest incorporated town in Alabama"]
  },
  {
    name: "Triana",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "triana-al",
    county: "Madison County",
    population: "470",
    distance: "20 miles from Huntsville",
    priority: 3,
    mainAttractions: ["Wheeler National Wildlife Refuge", "Tennessee River"]
  },
  {
    name: "Tanner",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "tanner-al",
    county: "Limestone County",
    population: "1,500",
    distance: "30 miles from Huntsville",
    priority: 3,
    mainAttractions: ["Rural community", "Wheeler Lake access"]
  },
  {
    name: "Belle Mina",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "belle-mina-al",
    county: "Limestone County",
    population: "800",
    distance: "28 miles from Huntsville",
    priority: 3,
    mainAttractions: ["Historic plantations", "Rural countryside"]
  },
  {
    name: "Brownsboro",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "brownsboro-al",
    county: "Madison County",
    population: "2,200",
    distance: "14 miles from Huntsville",
    priority: 3,
    mainAttractions: ["Local community", "Near Huntsville"]
  },
  {
    name: "Laceys Spring",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "laceys-spring-al",
    county: "Morgan County",
    population: "1,000",
    distance: "32 miles from Huntsville",
    priority: 3,
    mainAttractions: ["Rural community", "Local farms"]
  },
  {
    name: "Valhermoso Springs",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "valhermoso-springs-al",
    county: "Morgan County",
    population: "700",
    distance: "38 miles from Huntsville",
    priority: 3,
    mainAttractions: ["Natural springs", "Rural area"]
  },
  {
    name: "Somerville",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "somerville-al",
    county: "Morgan County",
    population: "750",
    distance: "42 miles from Huntsville",
    priority: 3,
    mainAttractions: ["County seat", "Historic courthouse"]
  },
  {
    name: "Falkville",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "falkville-al",
    county: "Morgan County",
    population: "1,300",
    distance: "40 miles from Huntsville",
    priority: 3,
    mainAttractions: ["Rural community", "Local events"]
  },
  {
    name: "Elkmont",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "elkmont-al",
    county: "Limestone County",
    population: "500",
    distance: "35 miles from Huntsville",
    priority: 3,
    mainAttractions: ["Rural town", "Wheeler Lake nearby"]
  },

  // Tennessee - Major Cities (within 50 miles)
  {
    name: "Fayetteville",
    state: "Tennessee",
    stateAbbr: "TN",
    slug: "fayetteville-tn",
    county: "Lincoln County",
    population: "7,500",
    distance: "48 miles from Huntsville",
    priority: 2,
    mainAttractions: ["Lincoln County Courthouse", "Fayetteville Square", "Elk River"]
  },
  {
    name: "Ardmore",
    state: "Tennessee",
    stateAbbr: "TN",
    slug: "ardmore-tn",
    county: "Limestone County",
    population: "1,300",
    distance: "25 miles from Huntsville",
    priority: 2,
    mainAttractions: ["Tennessee-Alabama border town", "Wheeler Wildlife Refuge nearby"]
  }
];

// Helper functions
export function getCitiesByPriority(priority) {
  return cities.filter(city => city.priority === priority);
}

export function getCitiesByState(stateAbbr) {
  return cities.filter(city => city.stateAbbr === stateAbbr);
}

export function getCityBySlug(slug) {
  return cities.find(city => city.slug === slug);
}

export function getAllCitySlugs() {
  return cities.map(city => city.slug);
}
