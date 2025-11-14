import React from "react";
import dynamic from "next/dynamic";

const Marketplace = dynamic(() => import("../components/Marketplace"), { ssr: false });

export default function HomePage() {
  return (
    <main style={{minHeight: "100vh", background: "#000", padding: 16}}>
      <div style={{maxWidth: 1000, margin: "0 auto"}}>
        <header style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18}}>
          <h1 style={{color: "#fff"}}>BooAI — Base marketplace</h1>
          <nav>
            <a style={{color:"#9ecfff", marginRight: 12}} href="/mint">Mint</a>
            <a style={{color:"#9ecfff", marginRight: 12}} href="/drop">Create Drop</a>
          </nav>
        </header>

        <Marketplace />
      </div>
    </main>
  );
}
