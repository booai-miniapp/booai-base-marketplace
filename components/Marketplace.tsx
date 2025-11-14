"use client";

import React, { useEffect, useState } from "react";
import NFTCard from "./NFTCard";

export default function Marketplace() {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    fetch("/api/opensea")
      .then((res) => res.json())
      .then((data) => setNfts(data.assets || []));
  }, []);

  return (
    <div>
      {nfts.map((n, i) => (
        <NFTCard key={i} nft={n} />
      ))}
    </div>
  );
}
