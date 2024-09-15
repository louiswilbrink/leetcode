# My Leetcode Solutions

## To Run on command line

```bash
$ nvm use
$ npm install
$ npx tsx problem-name.ts
```

## To Debug in Chrome

```bash
$ nvm use
$ npm install
$ npx tsc --watch
$ open index.html
```

This will launch Chrome and execute `index.html`, which has of the compiled JavaScript files loaded in as `<script>` tags (yes, all problems are executed during every page reload, w/e).

## Server Code Challenges

There are a few non-leetcode problems included in this repo.  Launch the server by following the instructions below, and make the desired `curl` requests to test server code.

### Launch webserver

```bash
$ nvm use
$ npm install
$ npx tsx server/index.ts
```

### Determine NFT Ownership

```bash
$ curl -X POST -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","method":"determineNftOwnership","params": { "walletAddress": "0x123", "contractAddress": "0xsomeAddress", "tokenId", "ABC123"}, "id":1}' http://localhost:3000/api/determine-nft-ownership
```
