// ============================================================
// COUNTRY SUBNATIONAL GEOGRAPHY — v0.8.1
// ============================================================
//
// Real subnational geography for the 7 playable real-world countries.
// Each country points to a public, jsdelivr-hosted TopoJSON or GeoJSON file
// and supplies the property key + name mapping the loader needs.
//
// HOW IT WORKS
// CountryMap reads the active country's `geoConfig` (defined here, attached
// in countries.js), fetches the URL via react-simple-maps, then for each
// admin division it renders the geometry colored according to which of our
// internal economic regions that division belongs to. Hover and selection
// states are driven by region id, not admin division id, so multiple
// admin shapes (e.g., 12 US states making up the Northeast) hover together.
//
// ON FAILURE
// If the fetch fails, the caller falls back to the original hand-drawn paths
// stored on each region. The game stays playable in every situation.
//
// ON UK GRANULARITY
// Per the v0.8.1 brief, the United Kingdom uses 12 NUTS-1 regions at full
// granularity. The other six countries keep their existing 6–8 economic
// region structure for now, with admin divisions grouped underneath. A
// future pass can expand each one to its native admin level.

export const COUNTRY_GEO = {

  // ==================================================
  // UNITED STATES — 50 states grouped into 8 economic regions
  // Source: us-atlas, Natural Earth–derived states at 10m
  // ==================================================
  usa2026: {
    url: "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json",
    topoObject: "states",
    propertyKey: "name",
    projection: "geoAlbersUsa",
    projectionConfig: { scale: 900 },
    // Each US state name maps to one of our internal region ids.
    adminToRegion: {
      "Washington": "pnw", "Oregon": "pnw", "Alaska": "pnw",
      "California": "cali", "Hawaii": "cali",
      "Idaho": "mountain", "Montana": "mountain", "Wyoming": "mountain",
      "Nevada": "mountain", "Utah": "mountain", "Colorado": "mountain",
      "Arizona": "mountain", "New Mexico": "mountain",
      "North Dakota": "plains", "South Dakota": "plains",
      "Nebraska": "plains", "Kansas": "plains",
      "Minnesota": "midwest", "Iowa": "midwest", "Missouri": "midwest",
      "Wisconsin": "midwest", "Illinois": "midwest", "Indiana": "midwest",
      "Michigan": "midwest", "Ohio": "midwest",
      "Texas": "gulf", "Oklahoma": "gulf", "Arkansas": "gulf",
      "Louisiana": "gulf", "Mississippi": "gulf", "Alabama": "gulf",
      "Tennessee": "gulf", "Kentucky": "gulf",
      "Florida": "south", "Georgia": "south", "South Carolina": "south",
      "North Carolina": "south", "Virginia": "south", "West Virginia": "south",
      "Maine": "northeast", "New Hampshire": "northeast", "Vermont": "northeast",
      "Massachusetts": "northeast", "Rhode Island": "northeast",
      "Connecticut": "northeast", "New York": "northeast",
      "New Jersey": "northeast", "Pennsylvania": "northeast",
      "Maryland": "northeast", "Delaware": "northeast",
      "District of Columbia": "northeast",
      "Puerto Rico": "south",
    },
  },

  // ==================================================
  // UNITED KINGDOM — 12 NUTS-1 regions, full granularity per v0.8.1 brief
  // Source: martinjc/UK-GeoJSON, NUTS-1 boundaries
  // ==================================================
  uk2026: {
    url: "https://cdn.jsdelivr.net/gh/martinjc/UK-GeoJSON@master/json/eurostat/topo_nuts1.json",
    topoObject: "eer",
    propertyKey: "EER13NM",
    projection: "geoMercator",
    projectionConfig: { scale: 2200, center: [-3.5, 54.5] },
    // The UK NUTS-1 names in this dataset use the eurostat EER nomenclature.
    // Each NUTS-1 region IS its own internal region in v0.8.1.
    adminToRegion: {
      "London": "uk_london",
      "South East": "uk_southeast",
      "South West": "uk_southwest",
      "East of England": "uk_east",
      "East Midlands": "uk_eastmids",
      "West Midlands": "uk_westmids",
      "Yorkshire and The Humber": "uk_yorkshire",
      "North West": "uk_northwest",
      "North East": "uk_northeast",
      "Scotland": "uk_scotland",
      "Wales": "uk_wales",
      "Northern Ireland": "uk_ni",
    },
  },

  // ==================================================
  // GERMANY — 16 Bundesländer, grouped into 6 economic regions
  // Source: isellsoap/deutschlandGeoJSON, mid-resolution Bundesländer
  // ==================================================
  germany2026: {
    url: "https://cdn.jsdelivr.net/gh/isellsoap/deutschlandGeoJSON@main/2_bundeslaender/3_mittel.geo.json",
    propertyKey: "name",
    projection: "geoMercator",
    projectionConfig: { scale: 2400, center: [10.5, 51.2] },
    adminToRegion: {
      "Bayern": "south", "Baden-Württemberg": "south",
      "Hessen": "hessen",
      "Berlin": "berlin",
      "Hamburg": "hamburg", "Bremen": "hamburg",
      "Niedersachsen": "hamburg", "Schleswig-Holstein": "hamburg",
      "Nordrhein-Westfalen": "nrw",
      "Rheinland-Pfalz": "south", "Saarland": "south",
      "Sachsen": "east", "Sachsen-Anhalt": "east",
      "Thüringen": "east", "Brandenburg": "east",
      "Mecklenburg-Vorpommern": "east",
    },
  },

  // ==================================================
  // FRANCE — 13 régions, grouped into 6 economic regions
  // Source: gregoiredavid/france-geojson
  // ==================================================
  france2026: {
    url: "https://cdn.jsdelivr.net/gh/gregoiredavid/france-geojson@master/regions.geojson",
    propertyKey: "nom",
    projection: "geoMercator",
    projectionConfig: { scale: 2200, center: [2.5, 46.7] },
    adminToRegion: {
      "Île-de-France": "iledefrance",
      "Provence-Alpes-Côte d'Azur": "med",
      "Occitanie": "med",
      "Corse": "med",
      "Auvergne-Rhône-Alpes": "rhonealpes",
      "Hauts-de-France": "north",
      "Normandie": "north",
      "Grand Est": "east",
      "Bourgogne-Franche-Comté": "east",
      "Pays de la Loire": "atlantique",
      "Bretagne": "atlantique",
      "Nouvelle-Aquitaine": "atlantique",
      "Centre-Val de Loire": "atlantique",
    },
  },

  // ==================================================
  // ITALY — 20 regioni, grouped into 6 economic regions
  // Source: openpolis/geojson-italy
  // ==================================================
  italy2026: {
    url: "https://cdn.jsdelivr.net/gh/openpolis/geojson-italy@master/topojson/limits_IT_regions.topo.json",
    topoObject: "regions",
    propertyKey: "reg_name",
    projection: "geoMercator",
    projectionConfig: { scale: 2400, center: [12.5, 42.5] },
    adminToRegion: {
      "Lombardia": "lombardia",
      "Piemonte": "northwest", "Valle d'Aosta": "northwest", "Liguria": "northwest",
      "Veneto": "northeast", "Trentino-Alto Adige": "northeast",
      "Friuli-Venezia Giulia": "northeast", "Emilia-Romagna": "northeast",
      "Toscana": "center", "Umbria": "center", "Marche": "center", "Lazio": "center",
      "Abruzzo": "south", "Molise": "south", "Campania": "south",
      "Puglia": "south", "Basilicata": "south", "Calabria": "south",
      "Sicilia": "islands", "Sardegna": "islands",
    },
  },

  // ==================================================
  // JAPAN — 47 prefectures grouped into 8 traditional regions,
  // mapped to our 6 economic regions
  // Source: dataofjapan/land
  // ==================================================
  japan2026: {
    url: "https://cdn.jsdelivr.net/gh/dataofjapan/land@master/japan.topojson",
    topoObject: "japan",
    propertyKey: "nam",
    projection: "geoMercator",
    projectionConfig: { scale: 1100, center: [137.5, 38] },
    adminToRegion: {
      // Hokkaido (1)
      "Hokkaido": "hokkaido",
      // Tohoku (6)
      "Aomori": "tohoku", "Iwate": "tohoku", "Miyagi": "tohoku",
      "Akita": "tohoku", "Yamagata": "tohoku", "Fukushima": "tohoku",
      // Kanto + Tokyo (7)
      "Ibaraki": "kanto", "Tochigi": "kanto", "Gunma": "kanto",
      "Saitama": "kanto", "Chiba": "kanto", "Tokyo": "kanto", "Kanagawa": "kanto",
      // Chubu (9)
      "Niigata": "chubu", "Toyama": "chubu", "Ishikawa": "chubu",
      "Fukui": "chubu", "Yamanashi": "chubu", "Nagano": "chubu",
      "Gifu": "chubu", "Shizuoka": "chubu", "Aichi": "chubu",
      // Kansai (7)
      "Mie": "kansai", "Shiga": "kansai", "Kyoto": "kansai",
      "Osaka": "kansai", "Hyogo": "kansai", "Nara": "kansai", "Wakayama": "kansai",
      // Chugoku + Shikoku + Kyushu + Okinawa (17)
      "Tottori": "kyushu", "Shimane": "kyushu", "Okayama": "kyushu",
      "Hiroshima": "kyushu", "Yamaguchi": "kyushu",
      "Tokushima": "kyushu", "Kagawa": "kyushu", "Ehime": "kyushu", "Kochi": "kyushu",
      "Fukuoka": "kyushu", "Saga": "kyushu", "Nagasaki": "kyushu",
      "Kumamoto": "kyushu", "Oita": "kyushu", "Miyazaki": "kyushu",
      "Kagoshima": "kyushu", "Okinawa": "kyushu",
    },
  },

  // ==================================================
  // CANADA — 13 provinces and territories, grouped into 6 economic regions
  // Source: codeforgermany/click_that_hood
  // ==================================================
  canada2026: {
    url: "https://cdn.jsdelivr.net/gh/codeforgermany/click_that_hood@main/public/data/canada.geo.json",
    propertyKey: "name",
    projection: "geoMercator",
    projectionConfig: { scale: 380, center: [-95, 62] },
    adminToRegion: {
      "Ontario": "ontario",
      "Quebec": "quebec",
      "British Columbia": "bc",
      "Alberta": "prairies",
      "Saskatchewan": "prairies", "Manitoba": "prairies",
      "Nova Scotia": "atlantic", "New Brunswick": "atlantic",
      "Newfoundland and Labrador": "atlantic", "Prince Edward Island": "atlantic",
      "Yukon": "north", "Northwest Territories": "north", "Nunavut": "north",
    },
  },
};
