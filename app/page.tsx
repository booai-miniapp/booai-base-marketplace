"use client";

import { useState } from "react";
import ConnectWallet from "../components/ConnectWallet";
import Marketplace from "../components/Marketplace";

export default function Home() {
  const [wallet, setWallet] = useState<string | null>(null);

  return (
    <div style={{ padding: "20px" }}>
      <ConnectWallet onConnect={(addr: string) => setWallet(addr)} />
      <Marketplace wallet={wallet} />
    </div>
  );
}
