import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Minting DApp</h2>
        <ConnectWallet />
        <br />
        <Web3Button
          contractAddress="0x16433D082e8b7F8514FAcbB3c066bcD751769b67"
          action={(contract) => contract.erc721.claim(1)}
          onSuccess={() => alert("Claimed!")}
        >Claim Reward</Web3Button>
      </main>
    </div>
  );
};

export default Home;
