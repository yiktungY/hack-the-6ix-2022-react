console.clear();
require("dotenv").config();
const {
	Client,
} = require("@hashgraph/sdk");
const {Account, createNFT} = require("./utils.js")

// Configure accounts and client, and generate needed keys
const accountId = process.env.MY_ACCOUNT_ID;
const publicKey = process.env.MY_PUBLIC_KEY;
const privateKey = process.env.MY_PRIVATE_KEY;

const client = Client.forTestnet().setOperator(accountId, privateKey);
const account = new Account(accountId, privateKey, publicKey);

//IPFS content identifiers for which we will create a NFT
CID = ["QmTzWcVfk88JRqjTpVwHzBeULRTNzHY7mnBSG42CpwHmPa"];

let {tokenId, mintRx} = createNFT(client, account, CID, "Test NFT Name", "Test NFT symbol")
console.log(tokenId, mintRx)