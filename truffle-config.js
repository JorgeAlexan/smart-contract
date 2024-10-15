module.exports = {
    networks: {
        development: {
            host: "127.0.0.1", // Dirección de Ganache
            port: 7545, // Puerto de Ganache
            network_id: "*", // Cualquier red
        },
    },
    compilers: {
        solc: {
            version: "0.8.1", // Versión de Solidity
        },
    },
};




// Se usa para obtener la instancia del contrato
let instance = await MyBusinessNFT.deployed(); 

// Define la dirección del destinatario y la URI del NFT
let recipient = "0xYourRecipientAddress"; // Usé el recipient 0x57dB81Cd0CFc64Fe71118b740C75bB2Ae62b4268

let tokenURI = "https://link-a-tu-metadata.com/nft/1"; // URI de la metadata(opcional)

// Mintea el NFT
let newItemId = await instance.mintNFT(recipient, tokenURI);
console.log("NFT minteado con ID:", newItemId.toString());

// Consulta el URI del NFT minteado
let uri = await instance.tokenURI(newItemId);
console.log("URI del NFT:", uri);


const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider);

const tokenABI = [ /* ABI del contrato ERC20 */ ];
const tokenAddress = '0x...'; // Dirección del contrato desplegado
const myToken = new web3.eth.Contract(tokenABI, tokenAddress);

// Consultar balance
const balance = await myToken.methods.balanceOf('0x...').call();
console.log("Balance:", balance);

// Transferir tokens
await myToken.methods.transfer('0xAddressDestinatario', 1000).send({ from: '0xMiDireccion' });



const nftABI = [ /* ABI del contrato ERC721 */ ];
const nftAddress = '0x...'; // Dirección del contrato NFT desplegado
const myNFT = new web3.eth.Contract(nftABI, nftAddress);

// Mint NFT
await myNFT.methods.mintNFT('0xRecipient', 'https://metadata-url').send({ from: '0xMiDireccion' });
