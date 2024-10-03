import React,{useState, useEffect,useContext} from "react";


import { 
  Footer,
   Header,
   About,
    Features,
    Brand,
     Contact,
     Faq,
      Hero,
      Sidebar
      ,Donate,
       Loader,
     Owner,
      Popup,
      Progress,
      Roadmap,
      Team,
      Token,
      TokenInfo,
      TransferCurrency,
      TransferToken,
      UpdatePrice,
      UpdateAddress,
      CONNECT_WALLET,
 } from "../Components/index";
 import {TOKEN_ICO_CONTEXT}from "../context/index"
 import {shortenAddress}from "../Utils/index"


const index = () => {
  const { 
    TOKEN_ICO,
    BUY_TOKEN,
    TOKEN_WITHDRAW,
    UPDATE_TOKEN,
    UPDATE_TOKEN_PRICE,
    DONATE ,
    TRANSFER_ETHER,
    TRANSFER_TOKEN,
    CONNECTED_WALLET,
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

    const [ownerModel,setOwnerModel]=useState(false);
    const [buyModel,setBuyModel]=useState(true);
    const [tranferModel,setTransferModel]=useState(false);
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
      
    },[account]);

  return(
    <>
    <div className="body_wrap">


 {ownerModel && 
   <Owner 
   setOwnerModel={setOwnerModel}
     currency={currency}
      details ={details}
      account={account}
    setTransferCurrency={setTransferCurrency}
      setTranferModel={setTransferModel}
      setOpenDonote={setOpenDonote}
      TOKEN_WITHDRAW={TOKEN_WITHDRAW}
      setOpenUpdatePrice={setOpenUpdatePrice}
     setOpenUpdateAddress={setOpenUpdateAddress}

      />

 }


{
  buyModel && 
  < Popup
   setBuyModel={setBuyModel}
  BUY_TOKEN={BUY_TOKEN}
  currency={currency}
  details={details}
  account={account}
  ERC20={ERC20}
  TOKEN_ADDRESS={TOKEN_ADDRESS}
  setLoader={setLoader}
  />

}

{
  tranferModel &&
  <TransferToken 
  setTransferModel = {setTransferModel}
  TRANSFER_TOKEN={TRANSFER_TOKEN}
  ERC20={ERC20}
  setLoader={setLoader}
  />

}

{
  transferCurrency &&
  <TransferCurrency 
 
  setTransferCurrency={setTransferCurrency}
  TRANSFER_ETHER={TRANSFER_ETHER}
  details={details}
  currency={currency}
  CHECK_ACCOUNT_BALANCE={CHECK_ACCOUNT_BALANCE}
  setLoader={setLoader}
  />

}

{
  openDonote &&
  <Donate 
    details={details}
    currency={currency}
    setOpenDonote={setOpenDonote}
    DONATE={DONATE}

/>
}

{
openUpdatePrice&&
  <UpdatePrice 
  details={details}
  currency={currency}
  setOpenUpdatePrice={setOpenUpdatePrice}
  UPDATE_TOKEN_PRICE={UPDATE_TOKEN_PRICE}
  />
}

{
  openUpdateAddress &&
  <UpdateAddress 
  
  details={details}
  currency={currency}
  setOpenUpdateAddress={setOpenUpdateAddress}
  UPDATE_TOKEN={UPDATE_TOKEN}
  ERC20={ERC20}
  setLoader={setLoader}
  
  />
}

{
  loader && 
  <Loader/>
}

<Header
account={account}
setLoader={setLoader}
CONNECTED_WALLET={CONNECTED_WALLET}
setAccount={setAccount}
details={details}
setOwnerModel={setOwnerModel}
shortenAddress={shortenAddress}

currency={currency}
ownerModel={ownerModel}
/>
<Sidebar/>

<Hero 
setBuyModel={setBuyModel}
 account={account}
 CONNECTED_WALLET={CONNECTED_WALLET}
 setAccount={setAccount}
 setLoader={setLoader}
 details={details}
 addTokenToMeteMask={addTokenToMeteMask}
 />
 <About/>
 <Features/>
 <Token/>
 <TokenInfo details={details} currency={currency} />
 <Team/>
 <Faq/>
 <Contact/>
 <Footer/>

      </div>
  
  </>
  ) 
};

export default index;
