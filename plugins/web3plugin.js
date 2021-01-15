import { initWeb3 } from "../utils/wallet"

function init() {
  window.addEventListener("load", function () {
    // this will init the web3read using default (main) infura
    initWeb3()
    //   console.group('WEB3INIT')
    //   const Web3 = window.Web3
    //   const web3Implementation = new Web3(
    //     new Web3.providers.HttpProvider(
    //       'https://rinkeby.infura.io/v3/760ff7b32ef04620b65bc7e6c416190b'
    //     )
    //   )
    //   console.log('const web3Implementation', web3Implementation)
    //   window.web3Read = web3Implementation

    //   if (typeof web3 !== 'undefined') {
    //     console.log("Web3 Detected! " + web3.currentProvider.constructor.name) // eslint-disable-line
    //   } else {
    //     console.log('No Web3 Detected... using HTTP Provider')
    //     window.web3Read = new Web3(
    //       new Web3.providers.HttpProvider(
    //         'https://rinkeby.infura.io/v3/760ff7b32ef04620b65bc7e6c416190b'
    //       )
    //     )
    //   }
    // })
    // // console.log("Web3Modal instance is", web3Modal);
    // console.groupEnd()
  })
}

export default async ({ app, store, $axios, isHMR }, inject) => {
  if (process.client) {
    // initWeb3()
    await init()
    // console.log('window', window)
    // console.log('window.web3Read', window.web3Read)
    // inject('web3Read', web3Read)
  }
}
