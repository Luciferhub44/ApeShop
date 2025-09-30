import { createThirdwebClient } from "thirdweb"
import { walletConnect, embeddedWallet } from "thirdweb/wallets"

const clientId = import.meta.env.VITE_THIRDWEB_CLIENT_ID as string | undefined

if (!clientId) {
  // Fallback to avoid runtime crash; instructs developer to set env var.
  // You should define VITE_THIRDWEB_CLIENT_ID in your .env.
  // Thirdweb public client IDs are safe to expose on the client in Vite.
  console.warn("VITE_THIRDWEB_CLIENT_ID is not set. Thirdweb features may not work correctly.")
}

export const client = createThirdwebClient({
  clientId: clientId ?? "",
})

export const supportedWallets = [
  walletConnect(),
  embeddedWallet(),
]


