export default function NFTCard({ nft }) {
  return (
    <div
      style={{
        border: "1px solid #333",
        borderRadius: 12,
        padding: 15,
        marginBottom: 20
      }}
    >
      <img
        src={nft.image}
        alt={nft.name}
        style={{ width: "100%", borderRadius: 12 }}
      />

      <h3>{nft.name}</h3>
      <p>{nft.collection}</p>

      <button
        style={{
          background: "#0ff",
          padding: "10px 20px",
          borderRadius: 10,
          border: "none"
        }}
      >
        Buy
      </button>
    </div>
  );
}
