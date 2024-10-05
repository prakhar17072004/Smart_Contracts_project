import React, { useState, useEffect, useContext } from "react";
import {
  Footer,
  Header,
  About,
  Brand,
  Contact,
  Faq,
  Features,
  Hero,
  Loader,
  Progress,
  SideBar,
  Team,
  Token,
  TokenInfo,
  Roadmap,
  Popup,
  TransferToken,
  Owner,
  TransferCurrency,
  Donate,
  UpdatePrice,
  UpdateAddress,
} from "../Components/index";

import { TOKEN_ICO_Context } from "../context/index";
import { shortAddress } from "../Utils/index";

const Index = () => {
  const {
    TOKEN_ICO,
    BUY_TOKEN,
    TRANSFER_ETHER,
    DONATE,
    UPDATE_TOKEN,
    UPDATE_TOKEN_PRICE,
    TOKEN_WITHDRAW,
    TRANSFER_TOKEN,
    CONNECT_WALLET,
    ERC20,
    CHECK_ACCOUNT_BALANCE,
    setAccount,
    setLoader,
    addTokenToMetaMask,
    TOKEN_ADDRESS,
    loader,
    account,
    currency,
  } = useContext(TOKEN_ICO_Context);

  const [ownerModel, setOwnerModel] = useState(false);
  const [buyModel, setBuyModel] = useState(false);
  const [transferModel, setTransferModel] = useState(false);
  const [transferCurrency, setTransferCurrency] = useState(false);
  const [openDonate, setOpenDonate] = useState(false);
  const [openUpdatePrice, setOpenUpdatePrice] = useState(false);
  const [details, setDetails] = useState();
  const [openUpdateAddress,setOpenUpdateAddress] = useState(false);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data...");
      const items = await TOKEN_ICO();
      setDetails(items);
    };
    fetchData();
  }, [account]); // Include TOKEN_ICO in dependency array if it can change

  return (
    <>
      <div className="body_wrap">


        {ownerModel && (
        <Owner setOwnerModel={setOwnerModel}
              currency={currency} 
              details={details}
              account={account}
              setTransferModel={setTransferModel}
              setTransferCurrency={setTransferCurrency}
              setOpenDonate={setOpenDonate}
              TOKEN_WITHDRAW={TOKEN_WITHDRAW}
              setOpenUpdatePrice={setOpenUpdatePrice}
              setOpenUpdateAddress={setOpenUpdateAddress}
        />
        )}
        {/* Other components can be added here */}
        {
          buyModel && (
            <Popup
              setBuyModel={setBuyModel}
              BUY_TOKEN={BUY_TOKEN}
              currency={currency}
              details={details}
              account={account}
              ERC20={ERC20}
              TOKEN_ADDRESS={TOKEN_ADDRESS}
              setLoader={setLoader}
            />
          )
        }

        {
          transferModel && (
            <TransferToken
              setTransferModel={setTransferModel}
              TRANSFER_TOKEN={TRANSFER_TOKEN}
              ERC20={ERC20}
              setLoader={setLoader}
            />
          )
        }

        {
          transferCurrency && (
            <TransferCurrency
              setTransferCurrency={setTransferCurrency}
              TRANSFER_ETHER={TRANSFER_ETHER}
              details={details}
              currency={currency}
              CHECK_ACCOUNT_BALANCE={CHECK_ACCOUNT_BALANCE}
              setLoader={setLoader}
            />
          ) 
        }

        {
         openDonate && (
            <Donate
              details={details}
              currency={currency}
              setOpenDonate={setOpenDonate}
              DONATE={DONATE}
            />
          )
        }

        {
          openUpdatePrice && (
            <UpdatePrice
               details={details}
               currency={currency}
               setOpenUpdatePrice={setOpenUpdatePrice}
               UPDATE_TOKEN_PRICE={UPDATE_TOKEN_PRICE}

            />
          )
        }

        {
           openUpdateAddress && (
            <UpdateAddress
              details={details}
              currency={currency}
              setOpenUpdateAddress={setOpenUpdateAddress}
              UPDATE_TOKEN={UPDATE_TOKEN}
              ERC20={ERC20}
              setLoader={setLoader}
            />
           )
        }

        {
          loader && (
            <Loader/>
          )
        }


      <Header
         account={account}
         setLoader={setLoader}
         CONNECT_WALLET={CONNECT_WALLET}
         details={details}
         setAccount={setAccount}
         setOwnerModel={setOwnerModel}
         shortAddress={shortAddress}
         currency={currency}
         ownerModel={ownerModel}

      />

      <SideBar/>

      <Hero
       setBuyModel={setBuyModel}
       account={account}
       CONNECT_WALLET={CONNECT_WALLET}
       setAccount={setAccount}
       setLoader={setLoader}
       details={details}
       addTokenToMetaMask={addTokenToMetaMask}
      />

      <About/>
      <Features/>
      <Token/>
      <TokenInfo details={details} currency={currency}/>
      <Team/>
      <Faq/>
      <Contact/>
      <Footer/>


      </div>
    </>
  );
};

export default Index;