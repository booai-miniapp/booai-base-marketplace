"use client";

import { useEffect, useState } from "react";

export default function Marketplace({ wallet }: { wallet: string | null }) {
  const [nfts, setNfts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function loadNFTs() {
    if (!wallet) return;

    setLoading(true);

    try {
      const url = `https://api.simplehash.com/api/v0/nfts/owners?chains=base&wallet_addresses=${wallet}`;

      const res = await fetch(url, {
        headers: {
          accept: "application/json"
        }
      });

      const data = await res.json();

      if (data.nfts) {
        setNfts(data.nfts);
      }
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadNFTs();
  }, [wallet]);

  return (
    <div>
      <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
        Your NFTs on Base
      </h2>

      {!wallet && <p>Connect your wallet to view NFTs</p>}

      {loading && <p>Loading NFTs...</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "12px",
        }}
      >
        {nfts.map((nft, i) => (
          <div
            key={i}
            style={{
              background: "#111",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <img
              src={nft.image_url || nft.previews?.image_small_url}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "8px",
              }}
            />

            <p style={{ fontSize: "14px", fontWeight: "bold" }}>
              {nft.name || "Unnamed NFT"}
            </p>

            <p style={{ fontSize: "12px", opacity: 0.7 }}>
              {nft.collection?.name}
            </p>

            <button
              style={{
                marginTop: "6px",
                padding: "8px",
                width: "100%",
                background: "#0070f3",
                color: "white",
                borderRadius: "8px",
                border: "none",
              }}
            >
              Sell
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
