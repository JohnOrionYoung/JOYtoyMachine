import WalletConnectProvider from "@walletconnect/web3-provider"

export const provider = new WalletConnectProvider({
  infuraId: "056ad12dceac40558c4b9afb10d52391"
})

provider.enable()
