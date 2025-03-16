import express from "express";
import { sqlite3 as sqlite } from "sqlite3";

const app = express();

// Problem Statement:
// Create a JSON-RPC method that determines if a user owns an NFT.
// Company: ConsenSys
// ```
// // Test `curl` command (or use Postman):
// $ curl -X POST -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","method":"determineNftOwnership","params": { "walletAddress": "0x123", "contractAddress": "0xsomeAddress", "tokenId", "ABC123"}, "id":1}' http://localhost:3000/api/determine-nft-ownership
// ```
app.post("/api/determine-nft-ownership", function (req, res) {
  res.send(
    JSON.stringify({
      isOwner: true,
    }),
  );
});

app.listen(3000);

console.log("Running web server on http://localhost:3000");
