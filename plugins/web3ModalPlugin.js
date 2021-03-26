import Web3Modal from "web3modal"
import WalletConnectProvider from "@walletconnect/web3-provider"

let web3Modal

function init() {
  const web3ModalNetwork = "mainnet"

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
