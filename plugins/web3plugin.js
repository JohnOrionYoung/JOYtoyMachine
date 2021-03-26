import { initWeb3 } from "../utils/wallet"
import tokenshop from "../tokenshop.config"

const web3Override = require("web3")

function init() {
  window.addEventListener("load", function () {
    console.log("network", window.ethereum)
    if (window.ethereum) {
      // check web3js where the script added it to window
      // this is an annoying workaround.
      const infuraUrl = tokenshop.keys.infura.main
      const Web3 = web3Override
      window.web3 = undefined
      const web3Write = new Web3(new Web3.providers.HttpProvider(infuraUrl))
      window.web3Write = web3Write
    }

    // this will init the web3read using default (main) infura
    // if it doesnt' already exist

    if (!window.web3Read) {
      initWeb3()
    }
  })
}

export default async () => {
  await init()
}
