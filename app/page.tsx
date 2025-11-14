"use client";

import Marketplace from "../components/Marketplace";
import ConnectWallet from "../components/ConnectWallet";

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>BooAI Base Marketplace</h1>

      <ConnectWallet />

      <Marketplace />
    </main>
  );
}
