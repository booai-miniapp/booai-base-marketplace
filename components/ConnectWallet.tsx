"use client";

import { useState } from "react";

export default function ConnectWallet() {
  const [connected, setConnected] = useState(false);

  return (
    <div style={{ margin: "20px 0" }}>
      {connected ? (
        <p>Wallet Connected ✔️</p>
      ) : (
        <button
          style={{
            background: "#1e90ff",
            padding: "10px 20px",
            borderRadius: 10,
            border: "none",
            color: "#fff"
          }}
          onClick={() => setConnected(true)}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}
