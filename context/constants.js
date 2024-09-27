import {ethers} from "ethers";
import Web3Modal from "web3Modal";


//INTERNAL IMPORT

import tokenICO from "./TokenICO.json";
import erc20 from "./ERC20.json";


export const TOKEN_ADDRESS ="";
export const ERC20_ABI = "";
export const  OWNER_ADDRESS = "";
export const CONTRACT_ADDRESS = "";
export const CONTRACT_ABI = "";





const networks = {
  sepolia: {
    chainId: `0x${Number(11155111).toString(16)}`,
    chainName: "Sepolia",
    nativeCurrency: {
      name: "SepoliaETH",
      symbol: "SepoliaETH",
      decimals: 18,
    },
    rpcUrls: ["https://sepolia.infura.io/v3/"],
    blockExplorerUrls: ["https://sepolia.etherscan.io"],
  },
  holesky: {
    chainId: `0x${Number(17000).toString(16)}`,
    chainName: "Holesky",
    nativeCurrency: {
      name: "holesky",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/eth_holesky"],
    blockExplorerUrls: ["https://holesky.etherscan.io/"],
  },
  polygon_amoy: {
    chainId: `0x${Number(80002).toString(16)}`,
    chainName: "Polygon Amoy",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-amoy.polygon.technology/"],
    blockExplorerUrls: ["https://www.oklink.com/amoy"],
  },
  polygon_mumbai: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Mumbai",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon_mumbai"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon"],
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/bsc"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  base_mainnet: {
    chainId: `0x${Number(8453).toString(16)}`,
    chainName: "Base Mainnet",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.base.org/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  base_sepolia: {
    chainId: `0x${Number(84532).toString(16)}`,
    chainName: "Base Sepolia",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://sepolia.base.org"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  localhost: {
    chainId: `0x${Number(31337).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "GO",
      symbol: "GO",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
};

const changeNetworks = async({networkName})=>{
  try{
    if(!window.ethereum)throw new Error ("no ethereum found");
    await window.ethereum.request({
      method:"wallet_addEthereumChain",
      params:[
        {
         ...networks[networkName],
      }
    ]
    })
  }
  catch(error){
    console.log(err.message);
  }
}
export const handleNetworkSwitch = async ()=>{
  const networkName ="holesky";
  await changeNetworks({networkName});
};


export const CHECK_WALLET_CONNECTED = async ()=>{
  if(!window.ethereum) 
    return console.log("Please install metemask")
   await handleNetworkSwitch();


   const account  = await window.ethereum.request({method: "eth_accounts"});

   if(account.length)
   {
    return account[0];

   }else{
    console.log("Please Install metamask & connect , reload");

   }

};

export const  CONNECTED_WALLET = async ()=>{
  try{
    if(!window.ethereum) 
      return console.log("Please install metemask")
     await handleNetworkSwitch();
  
  
     const account  = await window.ethereum.request({method: "eth_accounts"});
    window.location.reload();
     
     
      return account[0];

  }catch(err){
   console.log(err.message);
  }

   

};

   
const fetchContract = (address, abi, singer)=>{
  new ethers.Contract(address,abi,singer);
}

export const TOKEN_ICO_CONTRACT = async()=>{
  try{
    const web3Modal = new web3Modal();
    const connection = await web3Modal.connect();
   const provider = new ethers.providers.web3provider(connection);
   const signer = provider.getSigner();
   const contract = fetchContract(CONTRACT_ADDRESS,CONTRACT_ABI,signer)
   return contract
  }
  catch(err){
    console.log(err);
  }
}

export const ERC20 = async()=>{
  try{
    const web3Modal = new web3Modal();
    const connection = await web3Modal.connect();
   const provider = new ethers.providers.web3provider(connection);
   const network = provider.getNetwork();
   const signer = provider.getSigner();


   const userAddress = signer.getAddress();
   const balance = await contract.balanceOf(userAddress);
    const name = await contract.name();
    const symbol = await contract.symbol();
    const supply = await contract.tokenSupply();
    const decimals = await contract.decimals();
    const address = await contract.address;


    const token = {
      address: address,
      name: name,
      symbol: symbol,
      decimals: decimals,
      supply: ethers.utils.formatEther(supply.toString()),
      balance: ethers.utils.formatEther(balance.toString()),
      chainId:network.chainId,
    };
   return token;
  }
  catch(err){
    console.log(err);
  }
}

export const ERC20_CONTRACT = async(CONTRACT_ADDRESS)=>{
  try{
    const web3Modal = new web3Modal();
    const connection = await web3Modal.connect();
   const provider = new ethers.providers.web3provider(connection);
   const signer = provider.getSigner();
   const contract = fetchContract(CONTRACT_ADDRESS,ERC20_ABI,signer)
   return contract
  }
  catch(err){
    console.log(err);
  }
}

export const GET_BALANCE = async()=>{
  try{
    const web3Modal = new web3Modal();
    const connection = await web3Modal.connect();
   const provider = new ethers.providers.web3provider(connection);
   const signer = provider.getSigner();
   
   const matiBal = await signer.getBalance();
  return ethers.utils.formatEther(balance.toString());
   
  }
  catch(err){
    console.log(err);
  }
}

export const CHECK_ACCOUNT_BALANCE = async(ADDRESS)=>{
  try{
    const web3Modal = new web3Modal();
    const connection = await web3Modal.connect();
   const provider = new ethers.providers.web3provider(connection);
  
   
   const matiBal = await provider.getBalance(ADDRESS);
  return ethers.utils.formatEther(balance.toString());
   
  }
  catch(err){
    console.log(err);
  }
}


export const addTokenToMeteMask= async()=>{
  if(window.ethereum){
    const tokenDetails = await ERC20(TOKEN_ADDRESS);
    const tokenDecimals = tokenDetails?.decimals;
    const tokenSymbol = tokenDetails?.symbol;
    const tokenAddress = TOKEN_ADDRESS;
    const tokenImage = "";

    try{
      const wasAdded = await window.ethereum.request({
        method:"wallet_wasAsset",
        params: {
          type:"ERC20",
          options:{
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals:tokenDecimals,
            image:tokenImage,
          }
        }
      });
      if(wasAdded){
        return "Token is added";

      }
      else{
         return "not added";
      }
    }
    catch(err) {
      return "failed to add"
    }
  }else{
    return "MeteMask is not installed";
  }
}
const tokenImage =
      "https://www.daulathussain.com/wp-content/uploads/2024/05/theblockchaincoders.jpg";
