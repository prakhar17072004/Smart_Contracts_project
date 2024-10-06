import React, { useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";

const Hero = ({
  setBuyModel,
  account,
  CONNECT_WALLET,
  setAccount,
  setLoader,
  details,
  addTokenToMetaMask,
}) => {
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.err(msg, { duration: 2000 });

  const connectWallet = async () => {
    setLoader(true);
    const address = await CONNECT_WALLET();

    console.log(CONNECT_WALLET);
    setAccount(address);
  };
  const [percentage, setPercentage] = useState();

  useEffect(() => {
    const calculatePercentage = () => {
      const tokenSold = details?.soldToken ?? 0;
      const tokenTotalSupply =
        details?.soldToken + Number(details?.tokenBal) * 1 ?? 1;

      const percentageNew = (tokenSold / tokenTotalSupply) * 100;

      if (tokenTotalSupply === 0) {
        console.log("Token sal blance is zero and cannot calculate percentage");
      } else {
        setPercentage(percentageNew);
      }

      const timer = setTimeout(calculatePercentage, 1000);
      return () => clearTimeout(timer);
    };
  }, [details]);

  const ADD_TOKEN_METAMASK = async () => {
    setLoader(true);
    const response = await addTokenToMetaMask();
    setLoader(false);
    notifySuccess(response);
  };
  return (
    <section className="hero hero__ico pos-rel">
      <div className="hero__bg" data-background="assets/img/bg/hero_bg.png" />

      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="hero__content">
              <h1 className="title mb-45">
                Participate in the <span>Ongoing ICO Token </span> Sale
              </h1>
              <div className="btns  ">
                {account ? (
                  <a className="thm-btn" onClick={() => setBuyModel(true)}>
                    PURCHASE TOKEN
                  </a>
                ) : (
                  <a className="thm-btn " onClick={() => connectWallet()}>
                    Connect Wallet
                  </a>
                )}

                <a
                  className="thm-btn  thm-btn--dark"
                  onClick={() => ADD_TOKEN_METAMASK()}
                >
                  Add Metamask
                </a>
              </div>


              <div className="hero__progress mt-50">
                <div className="progress-title ul_li_between">
                  <span>
                     <span>Raised -</span>
                     {
                      details?.soldTokens
                     }Tokens
                     </span>
                     <span>
                     <span>Total ICO -</span>
                     {
                      details?.soldTokens + Number (details?.tokenBal)
                     }{" "}
                     {details?.symbol}Tokens
                  </span>
                </div>

                <div className="porgress">
                  <div className="progress-bar " role="progressbar " style={{
                    width:`${percentage }`
                  }}/>
                </div>

                <ul className="ul_li_between">
                  <li>Pre Sell</li>
                  <li>Soft Cap </li>
                  <li>Bonus</li>

                </ul>

              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero__explore-wrap text-center ">
              <div className="hero__explore text-center">
                <div className="scroll-down"/>
                <span>Explor Causes</span>
              </div>
              <div className="hero__countdown">
                <h6 className="text-center ">ICO will Start in...</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__shape">
        <div className="shape shape--1">
          <img src="assets/img/shape/h_shape.png" alt="hell3" srcset="" />
        </div>
        <div className="shape shape--2">
          <img src="assets/img/shape/h_shape2.png" alt="hell3" srcset="" />
        </div>
        <div className="shape shape--3">
          <img src="assets/img/shape/h_shape3.png" alt="hell3" srcset="" />
        </div>

        
      </div>
      <div className="hero__coin">
        <div className="coin coin--1">
          <img src="assets/img/icon/coin1.png" alt="" srcset="" />
        </div>
        <div className="coin coin--2">
          <img src="assets/img/icon/coin2.png" alt="" srcset="" />
        </div>
        <div className="coin coin--3">
          <img src="assets/img/icon/coin3.png" alt="" srcset="" />
        </div>
        <div className="coin coin--4">
          <img src="assets/img/icon/coin4.png" alt="" srcset="" />
        </div>
        <div className="coin coin--5">
          <img src="assets/img/icon/coin5.png" alt="" srcset="" />
        </div>
        <div className="coin coin--6">
          <img src="assets/img/icon/coin6.png" alt="" srcset="" />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
