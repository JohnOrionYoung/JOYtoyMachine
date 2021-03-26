import { initWeb3 } from "../utils/wallet"

function init(requiredNetwork) {
  window.addEventListener("load", function () {
    if (window.ethereum) {
      // check web3js where the script added it to window
      // this is an annoying workaround.

      const Web3 = window.Web3
      window.web3 = undefined
      const web3Write = new Web3(window.ethereum)
      window.web3Write = web3Write
    }

    // this will init the web3read using default (main) infura
    // if it doesnt' already exist

    if (!window.web3Read) {
      initWeb3()
    }
  })
}

export default async ({ app, store, $axios, isHMR }, inject) => {
  if (process.client) {
    const { requiredNetwork } = app.$config
    // web3 workaround for vercel deployments
    // init function waits for page load to ensure script
    // exists, since we cannot use node module
    await init(requiredNetwork)
  }
}
