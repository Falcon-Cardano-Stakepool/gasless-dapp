import type { AppProps } from "next/app";
import { ThirdwebProvider, localWallet, metamaskWallet, smartWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
      activeChain={activeChain}
      supportedWallets={[
        smartWallet({
          factoryAddress: "0x24D3eeaA1DE9e93a0D871298c0737061729B3BEc",
          thirdwebApiKey: "fa97ae2edb3597ae5e51a3f4eab1bd69f7103ca4e8ebc751004727d10db1cb8d82894a12501a9d82fd75b269f81e181790cfe09dc99cb1733444b4e8ffce635d",
          gasless: true,
          personalWallets: [
            metamaskWallet(),
            localWallet()
          ]
        })
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
