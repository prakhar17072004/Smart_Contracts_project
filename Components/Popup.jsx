import React ,{useState,useEffect}from "react";
import { shortAddress } from "../Utils";


const Popup = (
  { setBuyModel,
  BUY_TOKEN,
  currency,
  details,
  account,
  ERC20,
  TOKEN_ADDRESS,
  setLoader,
}) => {
 
  const [amount,setAmount] = useState()
  const [transferToken,setTransferToken] = useState();

  useEffect(()=> {

    setLoader(true);
    ERC20(TOKEN_ADDRESS).then((item)=>{
      setTransferToken(item);
      console.log(item)
      setLoader(false);
    })
   
  },[])

  return(
    <section className="new-margin ico-contact pos-rel">
        <div className="container mb-20">
          <div className="ico-contact__wrap">
            <h2 className="title">Buy Token<strong onClick={()=>setBuyModel(false)}>X</strong></h2>
            
            <div>
            <div className="row">
             
              <div className="col-lg-6 mb-20">
              <input
                    type="text"
                    placeholder={`Token Balance : ${transferToken?.balance} ${transferToken?.symbol}`}
                    onChange={(e)=> setAmount(e.target.value)
                      
                    }
                  />
              </div>

              

              <div className="col-lg-6 mb-20">
              <input
                    type="text"
                    value={amount ? `${amount * details?.tokenPrice} ${currency}` : "Output Value"}
                      
                    
                  />
              </div>

              <div className="col-lg-12 mb-20">
              <textarea disabled name="message" cols="30" rows="10" placeholder={`Current Price: ${details?.tokenBal}${details?.symbol} Token Address:${details?.tokenBal}${shortAddress(details?.tokenAddr)}`}></textarea>
              </div>

              <div className="ico-contact__btn text-center mt-10">
                <button className="thm-btn" onClick={()=> BUY_TOKEN(amount)}>
                  Buy Token
                </button>
              </div>
            </div>
          </div>

           
          </div>

          
        </div>
      
    </section>
  )
};

export default Popup;