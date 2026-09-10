export const assetCategories = {
  booth: {
    name: "Booth Exhibition",
    folder: "Booth Exhibition",
    type: "portfolio",
  },

  rakDisplay: {
    name: "Rak Display",
    folders: [
      "Portofolio Rak Display",
      "Rak Display bioxine",
      "Rak Display Chistotel",
      "Rak Display PVC",
      "Mockup Rak Display",
    ],
    type: "portfolio",
  },

  brandingStore: {
    name: "Branding Store",
    folder: "Branding Store",
    type: "portfolio",
  },

  signage: {
    name: "Signage & Neon Box",
    folders: [
      "Neon Box",
      "Standing Banner",
      "Backwall and backdrop",
    ],
    type: "portfolio",
  },

  display: {
    name: "Display & POSM",
    folders: [
      "Display Akrilik Custom",
      "POSM Hanasui",
    ],
    type: "portfolio",
  },

  event: {
    name: "Event & Activation",
    folders: [
      "Tenda Event",
      "Proses produksi rak display dan exhibiton booth event",
    ],
    type: "portfolio",
  },

  merchandise: {
    name: "Merchandise",
    folder: "merchandise",
    type: "portfolio",
  },

  video: {
    name: "Video Produksi",
    folder: "Video Produksi",
    type: "video",
  },
};

export const assetUsage = {
  hero: [
    "booth",
    "rakDisplay",
    "brandingStore",
  ],

  portfolio: [
    "booth",
    "rakDisplay",
    "brandingStore",
    "signage",
    "display",
    "event",
  ],

  process: [
    "event",
  ],

  services: [
    "booth",
    "rakDisplay",
    "brandingStore",
    "signage",
    "display",
    "event",
    "merchandise",
  ],

  videos: [
    "video",
  ],
};
