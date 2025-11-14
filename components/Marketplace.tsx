import React, { useEffect, useState } from "react";
import NFTCard from "./NFTCard";

type OpenSeaAsset = {
  token_id: string;
  name?: string;
  image_url?: string;
  description?: string;
  permalink?: string;
  collection?: { name?: string };
};

export default function Marketplace({ limit = 24 }: { limit?: number }) {
  const [loading, setLoading] = useState(false);
  const [assets, setAssets] = useState<OpenSeaAsset[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAssets();
  }, []);

  async function fetchAssets() {
    setLoading(true);
    setError(null);
    try {
      // we call our server-side proxy route: /api/opensea?limit=...
      const res = await fetch(`/api/opensea?limit=${limit}`);
      if (!res.ok) throw new Error("OpenSea fetch failed");
      const data = await res.json();
      // OpenSea typically returns `assets`
      setAssets(data.assets || []);
    } catch (e: any) {
      setError(e.message || "Failed to fetch");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{padding: 16, color: "white"}}>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12}}>
        <h2>Your NFTs on Base</h2>
        <button onClick={fetchAssets} style={{padding: "8px 14px", borderRadius: 8}}>Refresh</button>
      </div>

      {loading && <div>Loading NFTs…</div>}
      {error && <div style={{color: "salmon"}}>{error}</div>}

      <div style={{display: "flex", flexWrap: "wrap"}}>
        {assets.length === 0 && !loading && <div style={{color: "#aaa", marginTop: 20}}>No NFTs found.</div>}
        {assets.map((a: any) => (
          <NFTCard key={`${a.token_id}-${a.collection?.name}`} nft={{
            image: a.image_url,
            name: a.name,
            description: a.description,
            collection: a.collection?.name,
            token_id: a.token_id,
            permalink: a.permalink
          }} />
        ))}
      </div>
    </div>
  );
  }
