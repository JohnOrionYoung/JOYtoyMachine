/*
 ** TOKEN SHOP TEMPLATE CONFIG
 */
export default {
  keys: {
    infura: {
      main: "https://mainnet.infura.io/v3/056ad12dceac40558c4b9afb10d52391",
      rinkeby: "https://rinkeby.infura.io/v3/056ad12dceac40558c4b9afb10d52391"
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
      "GET new JOYtoys from the JOYtoy Machine or find them on OpenSea when they’re GONE!",
    logoUrl:
      "https://assets.website-files.com/5c73606d331282a7a53d3df3/5ffb98b2f2faea1a53240c1f_IMG_5303-p-1080.png",
    hasNavigation: true,
    products: {
      main: [1, 2, 3, 4, 5, 6, 7],
      mainDisplay: [1, 200, 305, 500, 900, 981, 1022],
      rinkeby: [1, 2],
      rinkebyDisplay: [1, 2]
    },
    social: {
      twitter: "https://twitter.com/johnorionyoung",
      instagram: "https://instagram.com/johnorionyoung",
      youtube:
        "https://www.youtube.com/channel/UChDK82CmqpsrhdCDJEi-9bQ/featured?",
      discord: "https://discord.gg/hBv9BDD"
    }
  },
  colors: {
    textColor: "#000",
    backgroundColor: "#ffe70d",
    uiColor: "#000",
    brandColor: "#0060e1",
    secondaryColor: "#ff0004"
  }
}
