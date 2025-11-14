import React, { useState } from "react";

export default function DropPage() {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([{ name: "", image: "", supply: 1 }]);
  const [result, setResult] = useState<string | null>(null);

  function updateItem(i: number, key: string, value: any) {
    const copy = [...items];
    (copy as any)[i][key] = value;
    setItems(copy);
  }
  function addItem() {
    setItems([...items, { name: "", image: "", supply: 1 }]);
  }

  async function createDrop(e: any) {
    e.preventDefault();
    const payload = { title, items };
    // POST to serverless route that stores drop (for demo — in memory)
    const res = await fetch("/api/drops", {
      method: "POST",
      headers: {"content-type":"application/json"},
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    setResult(data.dropId ? `Created drop: ${data.dropId}` : "Error creating drop");
  }

  return (
    <main style={{padding: 16, minHeight: "100vh", background: "#000", color: "#fff"}}>
      <div style={{maxWidth: 800, margin: "0 auto"}}>
        <h2>Create Drop (Demo)</h2>
        <form onSubmit={createDrop}>
          <label>Drop title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} style={{width: "100%", padding: 8, marginBottom: 12}} />

          {items.map((it, i) => (
            <div key={i} style={{border: "1px solid #222", padding: 10, marginBottom: 10}}>
              <label>Name</label>
              <input value={it.name} onChange={e => updateItem(i, "name", e.target.value)} style={{width: "100%", padding: 6}} />
              <label>Image URL</label>
              <input value={it.image} onChange={e => updateItem(i, "image", e.target.value)} style={{width: "100%", padding: 6}} />
              <label>Supply</label>
              <input type="number" value={it.supply} onChange={e => updateItem(i, "supply", Number(e.target.value))} style={{width: "100%", padding: 6}} />
            </div>
          ))}

          <button type="button" onClick={addItem} style={{marginRight: 10}}>Add item</button>
          <button type="submit">Create Drop</button>
        </form>

        {result && <div style={{marginTop: 12}}>{result}</div>}
      </div>
    </main>
  );
}
