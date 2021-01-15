// import Web3 from 'web3'
// import Web3Modal from 'web3modal'
import {
  getConnectedNetwork,
  getProviderType,
  initWeb3
  // promisify,
} from "../utils/wallet"

import contractABI from "./../contractABI.json"
import tokenshop from "./../tokenshop.config"

export const state = () => ({
  walletChain: "ethereum", // this will be unused, but her efor then Flow happens?
  hasWallet: false,
  walletAddress: null,
  walletStatus: "disconnected",
  walletProvider: null,
  walletType: null,
  walletNetwork: null,
  ensName: "",
  // eslint-disable-next-line prettier/prettier
  transactionStatus: "",
  transactionError: null,
  readStatus: "",
  tokenData: [],
  pendingToken: null,
  pendingCount: 0,
  transactionId: null
})

export const getters = {
  hasWallet: (state) => state.hasWallet,
  walletChain: (state) => state.walletChain,
  walletAddress: (state) => state.walletAddress,
  walletNetwork: (state) => state.walletNetwork,
  walletStatus: (state) => state.walletStatus,
  walletType: (state) => state.walletType,
  ensName: (state) => state.ensName,
  transactionStatus: (state) => state.transactionStatus,
  transactionError: (state) => state.transactionError,
  readStatus: (state) => state.readStatus,
  tokenData: (state) => state.tokenData,
  pendingToken: (state) => state.pendingToken,
  pendingCount: (state) => state.pendingCount,
  transactionId: (state) => state.transactionId
}
export const mutations = {
  setWalletAddress: (state, value) => {
    state.walletAddress = value
  },
  setWalletStatus: (state, value) => {
    state.walletStatus = value
  },
  setWalletNetwork: (state, value) => {
    state.walletNetwork = value
  },
  setWalletType: (state, value) => {
    state.walletType = value
  },
  setTransactionStatus: (state, value) => {
    state.transactionStatus = value
  },
  setTransactionError: (state, value) => {
    state.transactionError = value
  },
  setReadStatus: (state, value) => {
    state.readStatus = value
  },
  setTokenData: (state, value) => {
    state.tokenData = value
  },
  setPendingToken: (state, value) => {
    state.pendingToken = value
  },
  setPendingCount: (state, value) => {
    state.pendingCount = value
  },
  setTransactionId: (state, value) => {
    state.transactionId = value
  }
}

export const actions = {
  async handleWeb3Connect(context, web3Modal) {
    console.log("context", context, web3Modal)
    const { commit } = context
    if (!web3Modal) {
      return
    }
    commit("setWalletStatus", "connecting")
    // const requiredNetwork = this.$config.requiredNetwork;
    web3Modal.clearCachedProvider()
    const provider = await web3Modal.connect().catch((error) => {
      console.log("error here:", error)
      // this.connectStatus = "error";
      // this.connectError = error;
      commit("setWalletStatus", "denied")
    })
    console.log("provider", provider)
    if (!provider) {
      commit("setWalletStatus", "error")
      return
    }
    commit("setWalletStatus", "connected")
    const providerType = getProviderType(provider)
    commit("setWalletType", providerType)

    const accts = await provider.enable()
    // const accts = await web3.eth
    //   .getAccounts((error, accounts) => {
    //     console.log("accts", accts);
    //   })
    //   .catch((error) => {
    //     console.log("error here:", error);
    //   });
    console.log("accts", accts)
    if (!accts[0]) {
      commit("setWalletStatus", "noAccount")
      console.error("error: no account")
    }
    commit("setWalletAddress", accts[0])
    provider.autoRefreshOnNetworkChange = true
    // // Listen for change of account
    if (provider && provider.on) {
      provider.on("accountsChanged", (accts) => {
        commit("setWalletAddress", accts[0])
      })
    }
    // Get network
    const net = provider.networkVersion
    const connectedNetwork = getConnectedNetwork(net)
    commit("setWalletNetwork", connectedNetwork)
  },

  networkCheck(context, requiredNetwork) {
    if (typeof window.ethereum !== "undefined") {
      const provider = window.ethereum
      const networkVersion = provider.networkVersion
      const walletNetwork = getConnectedNetwork(networkVersion)
      if (walletNetwork && requiredNetwork !== walletNetwork) {
        if (walletNetwork === "private") {
          return
        }
        if (requiredNetwork === "main") {
          alert(
            `Your wallet is connected to ${walletNetwork}. Please connect wallet to ${requiredNetwork}`
          )
        }
        if (requiredNetwork === "rinkeby") {
          alert(
            `Your wallet is connected to ${walletNetwork}. Please connect wallet to ${requiredNetwork} to use the staging environment. `
          )
        }
      }
    }
  },

  handleReset(context) {
    console.log("resetting: ")
    context.commit("setPendingToken", null)
    context.commit("setTransactionStatus", null)
    context.commit("setTransactionError", null)
    context.commit("setTransactionId", null)
    context.commit("setPendingCount", 0)
  },

  async readTemplate(context, props) {
    // note: axios is a nuxt plugin, so using it here to avoid installing it again
    const { tokenId, requiredNetwork, axios, artworkIndex = 1 } = props

    console.log("readtemplate ", tokenId, axios)

    // NOTE: the nuxt axios plugin allows nice proxy, so that
    // https://joyworld.azurewebsites.net/api/HttpTrigger?id=1
    // can become /api/....
    // if the api url changes, you will need to add a base setting in the nuxt.config.js
    const rinkebyApi = `/api/HttpTrigger?artworkIndex=${artworkIndex}&id=${tokenId}`
    const mainApi = `/api/HttpTrigger?artworkIndex=${artworkIndex}&id=${tokenId}`
    const templateApiUrl = requiredNetwork === "rinkeby" ? rinkebyApi : mainApi
    console.log("templateApiUrl", templateApiUrl)
    // const theUrl2 = `${templateApiUrl}${tokenId}`
    // const theUrl = `https://dog.ceo/api/breeds/image/random`
    // const { data } = await $axios.get(theUrl)
    const { data } = await axios.get(templateApiUrl)
    console.log("data", data)

    return data
    // return await getData(templateApiUrl)
    // return await tokenContract.methods
    //   .getMetadata(tokenId)
    //   .call()
    //   .then((result) => {
    //     const priceEth = web3Read.utils.fromWei(result[6], "ether")
    //     const priceWei = Number(result[6])
    //     const tokenObject = {
    //       title: result[0],
    //       description: result[1],
    //       editionSize: Number(result[2]), // "x", // result[2],
    //       editionNumber: Number(result[3]), // result[3],
    //       vendingMachine: result[4], // result[4],
    //       feature: result[5], // result[4],
    //       price: priceEth, // result[5],
    //       priceWei, // result[5],
    //       collaborators: result[7],
    //       active: result[8],
    //       id: tokenId
    //     }
    //     return tokenObject
    //   })
    //   .catch((error) => {
    //     console.log("error", error)
    //     return error
    //   })
  },

  async readToken(context, props) {
    if (!process.client) {
      return
    }
    const { tokenId, requiredNetwork } = props
    // const { commit } = context
    const { contracts } = tokenshop
    const rinkebyContract = contracts.rinkeby
    const mainContract = contracts.main
    // const web3Read = window.Web3 // workaround to handle deploy issues with node web3
    // console.log('web3Read', web3Read)
    // console.log('window.Web3', window.Web3)
    // console.log('props', props, tokenId)
    const contractHash =
      requiredNetwork === "rinkeby" ? rinkebyContract : mainContract

    // const infuraUrl =
    //   requiredNetwork === 'rinkeby'
    //     ? 'https://rinkeby.infura.io/v3/760ff7b32ef04620b65bc7e6c416190b'
    //     : 'https://mainnet.infura.io/v3/760ff7b32ef04620b65bc7e6c416190b'

    await initWeb3(requiredNetwork)
    const web3Read = window.web3Read
    if (!web3Read) {
      console.info("NO WEB3READ", window)
      return
    }

    const tokenContract = new web3Read.eth.Contract(contractABI, contractHash)
    if (!tokenContract) {
      console.error("no contract")
      return null
    }
    return await tokenContract.methods
      .getMetadata(tokenId)
      .call()
      .then((result) => {
        const priceEth = web3Read.utils.fromWei(result[6], "ether")
        const priceWei = Number(result[6])
        const tokenObject = {
          title: result[0],
          description: result[1],
          editionSize: Number(result[2]), // "x", // result[2],
          editionNumber: Number(result[3]), // result[3],
          vendingMachine: result[4], // result[4],
          feature: result[5], // result[4],
          price: priceEth, // result[5],
          priceWei, // result[5],
          collaborators: result[7],
          active: result[8],
          id: tokenId
        }
        return tokenObject
      })
      .catch((error) => {
        console.log("error", error)
        return error
      })
  },
  async readImage(context, props) {
    const { tokenId, requiredNetwork, index } = props
    // const { commit } = context
    // console.log('requiredNetwork', requiredNetwork)
    // console.log('props: ', props)
    // const web3 = window.web3
    const { contracts } = tokenshop
    const rinkebyContract = contracts.rinkeby
    const mainContract = contracts.main
    // console.log('props', props)
    const contractHash =
      requiredNetwork === "rinkeby" ? rinkebyContract : mainContract
    await initWeb3(requiredNetwork)
    const web3Read = window.web3Read
    if (!web3Read) {
      console.info("NO WEB3READ", window)
      return
    }
    const tokenContract = new web3Read.eth.Contract(contractABI, contractHash)

    return await tokenContract.methods
      .getArtworkData(tokenId, index)
      .call()
      .then((result) => {
        const imageObject = {
          artworkHash: result[0],
          artworkType: result[1]
        }
        return imageObject
      })
      .catch((error) => {
        console.log("error", error)
        return error
      })
  },
  purchaseToken(context, props) {
    const { requiredNetwork, priceWei, tokenId } = props
    const { commit, dispatch } = context
    // console.log('requiredNetwork', requiredNetwork)
    const { contracts } = tokenshop
    const debugMode = false // stops the contract from firing, while debugging
    const rinkebyContract = contracts.rinkeby
    const mainContract = contracts.main
    const web3 = window.web3
    console.log("props", props, priceWei, tokenId)
    console.log({ rinkebyContract, mainContract })
    commit("setTransactionId", null)
    commit("setTransactionError", null)
    commit("setPendingCount", 0)
    commit("setTransactionStatus", "confirming")
    const contractHash =
      requiredNetwork === "rinkeby" ? rinkebyContract : mainContract
    const tokenContract = web3.eth.contract(contractABI).at(contractHash)

    if (!tokenContract) {
      console.error("no ADDCONTRACT")
      return
    }
    // console.log('tokenContract', tokenContract)
    if (debugMode) {
      setTimeout(() => {
        commit("setTransactionStatus", "pending")
        commit("setTransactionId", "1234")
      }, 1000)
      setTimeout(() => {
        commit("setPendingToken", null)
        commit("setTransactionStatus", "completed")
      }, 3000)
      return
    }
    if (!debugMode) {
      console.log("tokenContract to mint", tokenContract)
      console.log("about to mint id", tokenId)
      console.log("about to mint to hash", contractHash)
      commit("setTransactionStatus", "confirming")
      tokenContract.JOYtoyMachine(
        tokenId,
        { value: priceWei },
        (err, result) => {
          if (err) {
            console.error("err", err)
            commit("setTransactionStatus", "error")
            commit("setTransactionError", err.message)
            commit("setPendingToken", null)
            commit("setTransactionId", null)
          }
          if (!err) {
            // transaction sent (close popup)}
            commit("setTransactionStatus", "pending")
            commit("setTransactionError", null)
            commit("setPendingToken", tokenId)
            commit("setTransactionId", result)
            dispatch("trackTransaction", {
              transactionId: result,
              requiredNetwork
            })
          }
        }
      )
    }
  },
  trackTransaction(context, props) {
    const { transactionId, requiredNetwork } = props
    const { dispatch, commit } = context
    console.log("trackTransaction", transactionId)
    // dispatch('getTransactionReceiptMined', {
    //   transactionId,
    //   interval: 500,
    // })
    if (!transactionId) {
      console.error("transactionId", transactionId)
      return
    }
    dispatch("queryTransaction", {
      transactionId,
      interval: 1000,
      requiredNetwork
    })
      .then((completedTransaction) => {
        console.log("VEND DONE: ", completedTransaction)
        commit("setPendingToken", null)
        commit("setTransactionId", null)
        commit("setPendingCount", 0)
        commit("setTransactionStatus", "completed")
      })
      .catch((error) => console.error(error))
    // recursiveFunction(60, activeTransactionId, context)
    // .then((completedTransaction) => {
    //   console.log(
    //     "DEPLOY completed, completedTransaction obj ",
    //     completedTransaction
    //   );
    //   if (completedTransaction.status === true) {
    //     context.commit("deployFormStore/setDeployStatus", "completed");

    //     const newAddress = completedTransaction.logs[0].address;
    //     const contractData = {
    //       contractAddress: newAddress,
    //       contractName,
    //       contractSymbol,
    //     };
    //     console.log("DEPLOY contract data to set = ", contractData);

    //     context.dispatch(
    //       "deployFormStore/setContractData",
    //       contractData
    //     );
    //   } else {
    //     console.info("NOTE: completedTransaction.status !== true");
    //     context.commit("deployFormStore/setDeployStatus", "timeout");
    //   }
    // })
    // .catch(function (err) {
    //   console.log("oops:" + err);
    // });
  },
  // queryTransaction(transactionId){

  // }

  /**
   * QUERY TRANSACTION
   *
   * NOTE: OLD web3 version
   * Todo: unify with modern web3 js version
   * recursively checks the transaction to see if it is mined
   */
  queryTransaction(context, props) {
    const {
      num,
      txHash,
      transactionId,
      number,
      // requiredNetwork,
      interval = 1000
    } = props
    const { commit, state } = context
    console.log("queryTransaction props", props)
    console.log("typeof transactionId", typeof transactionId)
    if (!transactionId) {
      alert("No transactionId")
      return
    }
    console.log({ num, txHash, transactionId, number })
    // await initWeb3(requiredNetwork)
    const web3Read = window.web3Read
    if (!web3Read) {
      console.info("NO WEB3READ", window)
      return
    }
    const self = web3Read.eth
    const transactionReceiptAsync = function (resolve, reject) {
      self.getTransactionReceipt(transactionId, (error, receipt) => {
        if (error) {
          reject(error)
        } else if (receipt == null) {
          const existingCount = state.pendingCount
          console.log("existingCount", existingCount)
          const newCount = existingCount + interval
          commit("setPendingCount", newCount)
          console.log("still pending", newCount)
          console.log("state", state.pendingCount)
          setTimeout(
            () => transactionReceiptAsync(resolve, reject),
            interval || 1000
          )
        } else {
          resolve(receipt)
        }
      })
    }

    if (Array.isArray(transactionId)) {
      return Promise.all(
        transactionId.map((oneTxHash) =>
          self.getTransactionReceiptMined(oneTxHash, interval)
        )
      )
    } else if (typeof transactionId === "string") {
      return new Promise(transactionReceiptAsync)
    } else {
      throw new TypeError("Invalid Type: " + transactionId)
    }
  }
}
