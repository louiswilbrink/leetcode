import express from "express";

const app = express();

app.post("/api/determine-nft-ownership", function (req, res) {
  res.send(
    JSON.stringify({
      isOwner: true,
    }),
  );
});

app.listen(3000);

console.log("Running web server on http://localhost:3000");
