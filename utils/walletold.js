// import tokenshop from "../tokenshop.config"

// function initWeb3(requiredNetwork) {
//   console.info("WEB3INIT", requiredNetwork)
//   if (window && window.web3Read) {
//     // console.log('web3read: ', window.web3Read)
//     console.info("web3read exists. Version: ", window.web3Read.version)
//     return
//   }

//   // const infuraUrl =
//   //   requiredNetwork === 'rinkeby'
//   //     ? 'https://rinkeby.infura.io/v3/760ff7b32ef04620b65bc7e6c416190b'
//   //     : 'https://mainnet.infura.io/v3/760ff7b32ef04620b65bc7e6c416190b'
//   const infuraUrl =
//     requiredNetwork === "rinkeby"
//       ? tokenshop.keys.infura.rinkeby
//       : tokenshop.keys.infura.main
//   console.log("window.Web3", window.Web3)
//   if (!window.Web3) {
//     console.info("cannot init Web3 yet - not in window")
//     return
//   }

//   const Web3 = window.Web3
//   const web3Implementation = new Web3(
//     new Web3.providers.HttpProvider(infuraUrl)
//   )
//   // console.log('web3Implementation', web3Implementation)
//   // console.log('web3Implementation version', web3Implementation.version)

//   // check if wallet exists:
//   if (typeof web3 !== "undefined") {
//     console.log("Web3 Detected! " + web3.currentProvider.constructor.name) // eslint-disable-line
//   } else {
//     console.log("No Web3 Detected... using HTTP Provider")
//     // this would apply an infuara webt, but instead we're gonna set it globally,
//     // in order to use modern web3 functions instead of the web3 shipped with metamask
//     // window.web3Read = new Web3(
//     //   new Web3.providers.HttpProvider(
//     //     'https://rinkeby.infura.io/v3/760ff7b32ef04620b65bc7e6c416190b'
//     //   )
//     // )
//   }
//   window.web3Read = web3Implementation
// }

// /**
//  * Get Connected Network
//  */

// const getConnectedNetwork = (net) => {
//   const connectedNetwork = Number(net)
//   switch (connectedNetwork) {
//     case 1:
//       // setNetworkClass('main-network')
//       return "main"
//     case 4:
//       return "rinkeby"
//     default:
//       return "private"
//   }
// }

// /** GET PROVIDER TYPE
//  * gets string name of wallet
//  */
// const getProviderType = (provider) => {
//   if (!provider) {
//     return null
//   }
//   let providerType
//   if (provider.isFortmatic) {
//     providerType = "fortmatic"
//   }
//   if (provider.isDapper) {
//     providerType = "dapper"
//   }
//   if (provider.isMetaMask) {
//     providerType = "metamask"
//   }
//   if (provider.is3idProvider) {
//     providerType = "3id"
//   }
//   return providerType
// }

// const promisify = (inner) =>
//   new Promise((resolve, reject) =>
//     inner((err, res) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(res)
//       }
//     })
//   )

// export { getConnectedNetwork, getProviderType, promisify, initWeb3 }
