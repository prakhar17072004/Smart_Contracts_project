import React,{useState, useEffect,useContext} from "react";


import { 
  Footer, Header,About, Features,Brand, Contact,Faq, Hero,Sidebar,Donate,
     Loader,Owner, Popup,Progress,Roadmap,Team,Token,TokenInfo,TransferCurrency,TransferToken,UpdatePrice,UpdateAddress
 } from "../Components/index";
 import {TOKEN_ICO_CONTEXT}from "../context/index"
 import {shortenAddress}from "../Utils/index"


const index = () => {
  const {  TOKEN_ICO,
    BUY_TOKEN,
    TOKEN_WITHDRAW,
    UPDATE_TOKEN,
    UPDATE_TOKEN_PRICE,
    DONATE ,
    TRANSFER_ETHER,
    TRANSFER_TOKEN,
    CHECK_WALLET_CONNECTED,
    ERC20,
    CHECK_ACCOUNT_BALANCE,
    setAccount,
    setLoader,
    addTokenToMeteMask,
    TOKEN_ADDRESS,
    loader,
    account,
    currency,} =useContext(TOKEN_ICO_CONTEXT);

    const [ownerModal,setOwnerModal]=useState(false);
    const [buyModal,setBuyModal]=useState(true);
    const [tranferModal,setTransferModal]=useState(false);
    const [transferCurrency,setTransferCurrency]=useState(false);
    const [openDonote,setOpenDonote]=useState(false);
    const [openUpdatePrice,setOpenUpdatePrice]=useState(false);
    const [openUpdateAddress,setOpenUpdateAddress]=useState(false);
    const [details,setDetails]=useState(false);


    useEffect(()=>{
      const fetchData = async ()=>{
        const items = await TOKEN_ICO();

        console.log(items);
        setDetails(items);
      };
      fetchData();
      
    },[]);

  return <div>@TheEthereumCoders </div>;
};

export default index;
