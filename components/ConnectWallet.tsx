"use client";

import { useState } from "react";

export default function ConnectWallet({ onConnect }: { onConnect: (addr: string) => void }) {
  const [address, setAddress] = useState<string | null>(null);

  async function connect() {
    try {
      // Check if MiniKit wallet is available
      // If not, fallback to window.ethereum (MetaMask / Base wallet)
      
      if (typeof (window as any).ethereum !== "undefined") {
        const accounts = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });

        const addr = accounts[0];
        setAddress(addr);
        onConnect(addr);
        return;
      }

      alert("Wallet not found.");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div style={{ marginBottom: "20px" }}>
      {address ? (
        <p style={{ fontSize: "14px", opacity: 0.8 }}>
          Connected: {address.slice(0, 6)}...{address.slice(-4)}
        </p>
      ) : (
        <button
          onClick={connect}
          style={{
            padding: "12px 16px",
            background: "#0070f3",
            color: "white",
            borderRadius: "10px",
            border: "none",
            fontSize: "16px",
            width: "100%",
          }}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}
