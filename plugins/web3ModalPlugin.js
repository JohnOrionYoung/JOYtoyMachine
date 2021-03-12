import Web3Modal from "web3modal"
// import Portis from '@portis/web3'
import WalletConnectProvider from "@walletconnect/web3-provider"
// import tokenshop from "./../tokenshop.config"

let web3Modal
const requiredNetwork =
  process.env.PROD_NETWORK ||
  process.env.STAGING_NETWORK ||
  process.env.DEV_NETWORK

function init() {
  let web3ModalNetwork = "mainnet"
  if (requiredNetwork !== "main") {
    web3ModalNetwork = "rinkeby"
  }

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "056ad12dceac40558c4b9afb10d52391"
      }
    }
  }

  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    network: web3ModalNetwork,
    providerOptions, // required
    disableInjectedProvider: false // optional. For MetaMask / Brave / Opera.
  })
}

export default async ({ app, store, $axios, isHMR }, inject) => {
  if (process.client) {
    await init()
    inject("web3Modal", web3Modal)
  }
}
