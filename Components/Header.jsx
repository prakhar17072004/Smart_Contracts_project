import React,{useState,useEffect, useContext} from "react";

const Header = ({
  account,
  CONNECT_WALLET,
  setAccount,
  setLoader,
  setOwnerModal,
    shortenAddress,
  details,
  currency,
  ownerModal,}) => {

    const [isMetaMaskInstalled ,setIsMeteMaskInstalled]=useState(false);

    useEffect(()=>{
      if(typeof window.ethereum!=="undefined"){
          setIsMeteMaskInstalled(true);

          window.ethereum.on("accountChanged",
            handleAccountChanged
          );

      }

      return()=>{
        if(typeof window.ethereum!=="undefined"){
          window.ethereum.removeListener("accountChanged",handleAccountChanged)
        };
      }
    },[]);
    const handleAccountChanged=(account)=>{
      setAccount(account[0]);
    }
    const connectMetamask = async()=>{
      if(typeof window.ethereum!=="undefined"){
        try {
             const account = await window.ethereum.request({
              mehtod:"eth_requestAccount",

             })
             setAccount(account[0]);
        } catch (error) {
          console.log(error.message)
        }
      }else{
        console.log("Metemask is not installed")
        }
      
    }
  return <div>Header</div>;
};

export default Header;
