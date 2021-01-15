/*
 ** TOKEN SHOP TEMPLATE CONFIG
 */
export default {
  keys: {
    infura: {
      main: "https://mainnet.infura.io/v3/760ff7b32ef04620b65bc7e6c416190b",
      rinkeby: "https://rinkeby.infura.io/v3/760ff7b32ef04620b65bc7e6c416190b"
    }
  },
  contracts: {
    main: "0x0574c34385b039c2bb8db898f61b7767024a9449",
    rinkeby: "0x365f47fa59ffe4b2400186ac17a98d219a79fafc"
  },
  site: {
    brandName: "JOYWORLD",
    title: "JOYWORLD",
    description:
      "GET new JOYtoys directly or find them on OpenSea when they're GONE!",
    logoUrl:
      "https://assets.website-files.com/5c73606d331282a7a53d3df3/5dcdfa66993302af1cbe093e_JOY_new-p-500.png",
    hasNavigation: false,
    products: {
      main: [1, 2, 3, 4],
      mainDisplay: [1, 300, 378, 744],
      rinkeby: [1, 1],
      rinkebyDisplay: [12, 31]
    },
    social: {
      twitter: "https://twitter.com/johnorionyoung",
      instagram: "https://instagram.com/johnorionyoung",
      youtube:
        "https://www.youtube.com/channel/UChDK82CmqpsrhdCDJEi-9bQ/featured?",
      discord: "https://discord.gg/hBv9BDD"
    }
  },
  ui: {
    purchaseButtonText: "Yes, Gimme!",
    cancelButtonText: "No, Cancel that.",
    round: "2px"
  },
  colors: {
    textColor: "#111",
    backgroundColor: "#ffe70d",
    uiColor: "#111",
    brandColor: "#0060e1",
    secondaryColor: "#ff0004"
  }
}