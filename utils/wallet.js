// import tokenshop from "../tokenshop.config"

/**
 * INIT web3.
 */

function initWeb3(infuraId) {
  if (window && window.web3Read) {
    // console.info("web3read exists. Version: ", window.web3Read.version)
    return
  }
  console.info("WEB3INIT", infuraId)

  const infuraUrl =
    "https://mainnet.infura.io/v3/056ad12dceac40558c4b9afb10d52391"

  if (!window.Web3) {
    console.info("cannot init Web3 yet - not in window")
    return
  }
  // load from script
  const Web3 = window.Web3
  const web3Implementation = new Web3(
    new Web3.providers.HttpProvider(infuraUrl)
  )
  window.web3Read = web3Implementation

  // DEPRECATED: check if user has web3 wallet
  // if (typeof web3 !== "undefined") {
  //   console.log("Web3 Detected! ", web3) // eslint-disable-line
  //   // console.log("Web3 Detected! " + web3.currentProvider.constructor.name) // eslint-disable-line
  // } else {
  //   console.log("No Web3 Detected... using HTTP Provider")
  // }
}

/**
 * Get Connected Network
 */

const getConnectedNetwork = (net) => {
  const connectedNetwork = Number(net)
  switch (connectedNetwork) {
    case 1:
      // setNetworkClass('main-network')
      return "main"
    default:
      return "private"
  }
}

/** GET PROVIDER TYPE
 * gets string name of wallet
 */
const getProviderType = (provider) => {
  if (!provider) {
    return null
  }
  let providerType
  if (provider.isWalletConnect) {
    providerType = "walletconnect"
  }
  if (provider.isMetaMask) {
    providerType = "metamask"
  }
  return providerType
}

export { getConnectedNetwork, getProviderType, initWeb3 }
