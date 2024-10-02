
import React, { useState, useEffect } from "react";
import { shortenAddress } from "../Utils";

const UpdateAddress= ({
  details,
  currency,
  setOpenUpdateAddress,
  UPDATE_TOKEN,
  ERC20,
  setLoader,}
) => {
const[address,setAddress] =useState();
const [tokenDetails,setTokenDetails] = useState();
const [transferToken, setTransferToken]=useState();
  

  useEffect(()=>{

    if(transferToken){
      const loadToken =async()=>{
        setLoader(true);
        const token = await ERC20(transferToken);
        if(token== undefined){
         console.log("kindly past the token address")
        }else{
          setTokenDetails(token);
          console.log(token);
        }
        setLoader(false)
  
      };
      loadToken();
    }
   
  },[transferToken])

  
  return (
    <section className="new-margin ico-contact pos-rel">
      <div className="container">
        <div className="ico-contact__wrap">
          <h2 className="title">
          Update Token
            <strong onClick={() => setOpenUpdateAddress(false)}>X</strong>
          </h2>
          
          <div className="row">
          <div className="col-lg-12" >
            {
              tokenDetails?(
                <input type="text" value={`Name ${tokenDetails?.name}Balance${tokenDetails?.balance}${tokenDetails?.symbol}`}/>
              ):( <input type="text" placeholder="_tokenAddress"
              onChange={(e)=>(setAddress( e.target.value),setTransferToken(e.target.val))}/>)
            }
          </div>
          </div>

          
           
              
             

              <p>
                <strong>Current Price:</strong> {details?.tokenPrice} {currency}&nbsp; &nbsp; 
                <strong>Token Balance:</strong>{details?.tokenBal}{" "}{details?.symbol} &nbsp; &nbsp;  
                <strong onClick={()=>navigator.clipboard.writeText(details?.tokenAddr)}>Token Address </strong>  
                           {details?.tokenBal} {shortenAddress(details?.tokenAddr)}
                          </p>
              <div className="ico-contract__btn text-center mt-10">
                <button
                  onClick={() => UPDATE_TOKEN(address)}
                  className="thm-btn"
                >
                  Update Address
                </button>
             
          
          </div>
          <div className="ico-contact__shape-img">
            <div className="shape shape--1">
              <div className="">
                <img src="assets/img/shape/c_shape1.png" alt="" />
              </div>
            </div>
            <div className="shape shape--2">
              <div className="">
                <img src="assets/img/shape/c_shape2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ico-contact__shape">
        <div className="shape shape--1">
          <img src="assets/img/shape/c_shape1.png" alt="" />
        </div>
        <div className="shape shape--2">
          <img src="assets/img/shape/c_shape2.png" alt="" />
        </div>
        <div className="shape shape--3">
          <img src="assets/img/shape/c_shape3.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default UpdateAddress;
