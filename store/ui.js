import { getField, updateField } from "vuex-map-fields"

export const state = () => ({
  network: "mainnet",
  walletChain: "ethereum",
  hasWallet: false,
  walletAddress: null,
  walletStatus: "",
  walletProvider: null,
  walletNetwork: null,
  ensName: "",
  devMode: false,
  uiMode: "",
  uiTheme: "",
  contrastMode: ""
})

export const getters = {
  getField,
  devMode: (state) => state.devMode,
  hasWallet: (state) => state.hasWallet,
  walletChain: (state) => state.walletChain,
  walletAddress: (state) => state.walletAddress,
  walletNetwork: (state) => state.walletNetwork,
  walletStatus: (state) => state.walletStatus,
  ensName: (state) => state.ensName,
  uiMode: (state) => state.uiMode,
  uiTheme: (state) => state.uiTheme,
  contrastMode: (state) => state.contrastMode
}
export const mutations = {
  updateField,

  setUiMode(state, value) {
    state.uiMode = value
    if (value === "none") {
      state.hideUi = true
    }
  },
  setUiTheme(state, value) {
    state.uiTheme = value
  },
  setUiContrast(state, value) {
    state.contrastMode = value
  }
}

export const actions = {}
