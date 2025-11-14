"use client";

import { useState } from "react";
import { createWalletClient, custom } from "viem";
import { base } from "viem/chains";

export default function ConnectWallet() {
  const [address, setAddress] = useState<string | null>(null);

  async function connect() {
    if (!window.ethereum) {
      alert("Wallet not found. Please open inside Base App.");
      return;
    }

    try {
      const client = createWalletClient({
        chain: base,
        transport: custom(window.ethereum)
      });

      const accounts = await client.requestAddresses();
      setAddress(accounts[0]);
    } catch (err) {
      console.error(err);
      alert("Could not connect wallet");
    }
  }

  return (
    <div style={{ marginBottom: "20px" }}>
      {address ? (
        <div>
          <p style={{ fontSize: "16px" }}>Connected:</p>
          <p style={{ fontWeight: "bold" }}>{address}</p>
        </div>
      ) : (
        <button
          onClick={connect}
          style={{
            padding: "12px 18px",
            background: "#005eff",
            color: "white",
            borderRadius: "12px",
            border: "none",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}
