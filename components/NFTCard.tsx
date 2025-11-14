import React from "react";

type NFT = {
  image?: string;
  name?: string;
  description?: string;
  collection?: string;
  token_id?: string;
  permalink?: string;
};

export default function NFTCard({ nft }: { nft: NFT }) {
  return (
    <div style={{
      border: "1px solid rgba(255,255,255,0.04)",
      borderRadius: 8,
      padding: 12,
      background: "#050505",
      color: "#fff",
      width: 260,
      margin: 8
    }}>
      <a href={nft.permalink || "#"} target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "inherit"}}>
        <div style={{height: 200, display: "flex", alignItems: "center", justifyContent: "center", background: "#111", borderRadius: 6, overflow: "hidden"}}>
          {nft.image ? <img src={nft.image} alt={nft.name} style={{maxWidth: "100%", maxHeight: "100%"}} /> : <div style={{color:"#888"}}>No image</div>}
        </div>
        <h3 style={{margin: "10px 0 4px"}}>{nft.name || "Unknown NFT"}</h3>
        <div style={{fontSize: 13, color: "#bdbdbd"}}>{nft.collection || "Unknown collection"}</div>
        <div style={{marginTop: 8, fontSize: 13, color: "#9e9e9e"}}>
          {nft.description ? nft.description.slice(0, 120) + (nft.description.length > 120 ? "…" : "") : ""}
        </div>
      </a>
    </div>
  );
}
