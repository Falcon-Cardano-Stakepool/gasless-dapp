import type { AppProps } from "next/app";
import { ThirdwebProvider, localWallet, metamaskWallet, smartWallet } from "@thirdweb-dev/react";
import { SmartWalletConfig } from "@thirdweb-dev/wallets";
import { Mumbai } from "@thirdweb-dev/chains";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

// Setup the Smart Wallet configuration
let config: SmartWalletConfig = {
  chain: Mumbai, // the chain where your smart wallet will be or is deployed
  factoryAddress: "0x24D3eeaA1DE9e93a0D871298c0737061729B3BEc", // your own deployed account factory address
  thirdwebApiKey: "a3ee819408bc1e27a00f0f188a89eee1fa5a582397072a7493fde3986e3896022ef0b04d1b9172ec2e831b628b1d4e285858c27e55c51b0f6054ca73b8f36209", // obtained from the thirdweb dashboard
  gasless: true, // enable or disable gasless transactions,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
      activeChain={activeChain}
      supportedWallets={[
        smartWallet(config),
        metamaskWallet(),
        localWallet(),
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
