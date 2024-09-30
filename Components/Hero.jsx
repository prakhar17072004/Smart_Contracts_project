import React,{useState,useEffect,useContext} from "react";
import toast from "react-hot-toast";

const Hero = ({
  setBuyModal,
 account,
 CONNECT_WALLET,
 setAccount,
 setLoader,
 details,
 addTokenToMeteMask,
}) => {
  const notifySuccess = (msg)=>toast.success(msg,{duration:2000})
  const notifyError = (msg)=>toast.err(msg,{duration:2000})

  const connectWallet = async()=>{
    setLoader(true);
    const address = await CONNECT_WALLET();
    setAccount(address);
  };
    const [percentage,setPercentage] =useState();

    useEffect(()=>{
      const calculatePercentage =()=>{
        const tokenSold =details?.soldToken??0;
        const tokenTotalSupply =details?.soldToken + Number(decimals?.tokenBal)* 1 ??1;

        const percentageNew = (tokenSold/tokenTotalSupply)*100;

        if(tokenTotalSupply==0){
          console.log("Token sal blance is zero and cannot calculate percentage")
        }else{
          setPercentage(percentageNew);
        }

        const timer = setTimeout(calculatePercentage,1000);
        return ()=>clearTimeout(timer);
      };
    },[details])

    const ADD_TOKEN_METAMASK = async ()=>{
      setLoader(true)
      const response= await addTokenToMeteMask();
      setLoader(false);
      notifySuccess(response);
    }
  return <section className="hero hero__ico pos-rel">

    <div className="hero__bg"
    data-background="assets/img/bg/hero_bg.png"/>
   

   <div className="container">
     <div className="row">
       <div className="col-lg-7">
        <div className="hero__content">
          <h1 className="title mb-45">
             Participate in the <span>Ongoing ICO Token </span> Sale
          </h1>
          <div className="btns  ">
            {
              account?(
                <a className="thm-btn" onClick={()=>setBuyModal(true)}
                >
                  PURCHASE TOKEN
                </a> ):(
                <a className="thm-btn " onClick={()=>connectWallet()}
                >
                  Connect Wallet
                </a> )
            }


                <a className="thm-btn thm-btn--dark" onClick={()=>ADD_TOKEN_METAMASK()}
                >
                  Add Metamask
                </a> 
          </div>
          
        </div>
       </div>
     </div>

   </div>

  

    
  </section>;
};

export default Hero;
