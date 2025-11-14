"use client";

import NFTCard from "./NFTCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Marketplace() {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    loadNFTs();
  }, []);

  async function loadNFTs() {
    const res = await axios.get(
      "https://api.opensea.io/api/v2/chain/base/nfts?limit=12",
      {
        headers: {
          "X-API-KEY": "bf045c9f6482420b82df814d45cffdcd"
        }
      }
    );

    const items = res.data.nfts.map((n) => ({
      name: n.name || "Unnamed NFT",
      image: n.image_url,
      collection: n.collection,
      token: n.identifier
    }));

    setNfts(items);
  }

  return (
    <div style={{ marginTop: 30 }}>
      <h2>Trending NFTs on Base</h2>

      {nfts.length === 0 && <p>Loading NFTs...</p>}

      {nfts.map((n, i) => (
        <NFTCard key={i} nft={n} />
      ))}
    </div>
  );
}
