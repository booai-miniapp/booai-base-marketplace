import React, { useState } from "react";

export default function MintPage() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("");

  async function handleMint(e: any) {
    e.preventDefault();
    setStatus("Creating metadata…");
    // This is a placeholder flow: we create metadata and show success
    const metadata = { name, description: desc, image };
    // TODO: replace with actual ipfs upload + contract call
    setStatus("Metadata ready. (Demo) — You would now call your mint contract with the metadata URI.");
    console.log("metadata", metadata);
  }

  return (
    <main style={{padding: 16, color: "#fff", background: "#000", minHeight: "100vh"}}>
      <div style={{maxWidth: 700, margin: "0 auto"}}>
        <h2>Mint NFT (Demo)</h2>
        <form onSubmit={handleMint}>
          <label>Image URL:</label>
          <input value={image} onChange={e => setImage(e.target.value)} placeholder="https://example.com/nft.png" style={{width: "100%", padding: 8, marginTop: 6, marginBottom: 12}} />

          <label>NFT Name:</label>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="NFT name" style={{width: "100%", padding: 8, marginTop: 6, marginBottom: 12}} />

          <label>Description:</label>
          <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="Description" style={{width: "100%", padding: 8, marginTop: 6, marginBottom: 12}} />

          <button type="submit" style={{padding: "10px 16px", borderRadius: 8}}>Mint (demo)</button>
        </form>

        <div style={{marginTop: 12, color: "#88f"}}>
          {status}
        </div>
      </div>
    </main>
  );
}
