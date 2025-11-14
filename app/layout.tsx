export const metadata = {
  title: "BooAI Marketplace",
  description: "Base + Farcaster NFT Marketplace"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "#000", color: "#fff", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
