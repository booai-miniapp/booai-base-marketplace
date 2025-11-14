"use client";

import { useEffect, useState } from "react";

export default function Marketplace() {
  const [nfts, setNfts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const OPENSEA_API = "https://api.opensea.io/api/v2/chain/base/nfts";

  useEffect(() => {
    async function fetchNFTs() {
      try {
        const res = await fetch(OPENSEA_API);
        const data = await res.json();

        setNfts(data.nfts || []);
      } catch (err) {
        console.error("Error fetching NFTs:", err);
      }

      setLoading(false);
    }

    fetchNFTs();
  }, []);

  if (loading) return <p>Loading NFTs...</p>;

  return (
    <div>
      <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>🔥 BooAI NFT Marketplace</h2>

      {nfts.length === 0 && <p>No NFTs found.</p>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
        {nfts.map((nft, index) => (
          <div key={index} style={{ border: "1px solid #333", padding: "10px", borderRadius: "10px" }}>
            <img
              src={nft.image_url || "/placeholder.png"}
              alt="NFT"
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <p style={{ marginTop: "8px", fontWeight: "bold" }}>{nft.name || "Unnamed NFT"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
