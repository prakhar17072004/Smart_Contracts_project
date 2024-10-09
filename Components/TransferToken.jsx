import React,{useState,useEffect} from "react";

const TransferToken = ({
  setTransferModel ,
  TRANSFER_TOKEN,
  ERC20,
  setLoader,
}) => {


  const[token,setToken]=useState({
    _sendTo:"",
    _amount:"",
    _tokenAdress:"",
  })

  const [tokenDetails,setTokenDetails] =useState();
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
  return <section className="new-margin ico-contact pos-rel">
    <div className="container">
      <div className="ico-contact__wrap">
        <h2 className="title">
          Transfer token
          <strong onClick={()=>setTransferModel(false)}>X</strong>
        </h2>
        <div className>
        <div className="row">
          <div className="col-lg-12" >
            {
              tokenDetails?.name?(
                <input type="text" value={`Name ${tokenDetails?.name}Balance${tokenDetails?.balance}${tokenDetails?.symbol}`}/>
              ):( <input type="text" placeholder="_tokenAddress"
              onChange={(e)=>(setToken({...tokenDetails,_tokenAddress: e.target.value}),setTransferToken(e.target.val))}/>)
            }
          </div>
          <div className="col-lg-12">
          <input type="text" placeholder="_sendTo"
              onChange={(e)=>
              setToken({...tokenDetails,_sendTo: e.target.value})}/>
          </div>

          <div className="col-lg-12">
          <input
                    type="text"
                    placeholder="_amount"
                    onChange={(e)=>{
                      const value=e.target.value;
                      setToken({
                        ...token,
                        _amount:value,
                      })}
                      
                    }
                  />
          </div>

          <div className="ico-contract__btn text-center mt-10">
            <button onClick={()=>TRANSFER_TOKEN(token)} className="thm-btn">
              Transfer Token
            </button>
          </div>
          
        </div>
      </div>
      <div className="ico-contact__shape-img">
        <div className="shape shape--1">
          <div className="">
            <img src="assets/img/shape/c_shape1.png" alt=""/>
          </div>
        </div>
        <div className="shape shape--2">
          <div className="">
            <img src="assets/img/shape/c_shape2.png" alt=""/>
          </div>
        </div>
      </div>

      </div>
     
    </div>
    <div className="ico-contact__shape">
        <div className="shape shape--1">
         
            <img src="assets/img/shape/c_shape1.png" alt=""/>
        
        </div>
        <div className="shape shape--2">
         
            <img src="assets/img/shape/c_shape2.png" alt=""/>
        
        </div>
        <div className="shape shape--3">
         
         <img src="assets/img/shape/c_shape3.png" alt=""/>
     
     </div>
      </div>
  </section>
};

export default TransferToken;
