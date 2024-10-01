import React from "react";
import {FaPlus} from "react-icons/fa6"

const Owner = ({

  setOwnerModal,
     currency,
      details,
      account,
    setTransferCurrency,
      setTranferModal,
      setOpenDonote,
      TOKEN_WITHDRAW,
      setOpenUpdatePrice,
     setOpenUpdateAddress,
}) => {
  return <section className="team pos-rel">
    <div className="container">
      <div className="new-owner team__wrap ul_li">
        <div className="team__team">
              <div className="avatar">
                <img src="assets/img/shape/c_shape1.png"/>
              </div>
              <div className="team__info text-center mb-20">
                <h3>TOKEN TRANSFER</h3>
                <span>Any ERC 20</span>
              </div>
              <div className="team__social ul_li_center">
                <span onClick={()=>(setOwnerModal(false),setTranferModal(true))} className="h-icon" style={{
                  cursor:"pointer",
                }}>
                  <FaPlus/>
                </span>
              </div>
        </div>

        <div className="team__team">
              <div className="avatar">
                <img src="assets/img/token/t_info_img.png"/>
              </div>
              <div className="team__info text-center mb-20">
                <h3>TOKEN TRANSFER Funds</h3>
                <span>{details?.maticBal.slice(0,6)}{currency}</span>
              </div>
              <div className="team__social ul_li_center">
                <span onClick={()=>(setOwnerModal(false),setTransferCurrency(true))} className="h-icon" style={{
                  cursor:"pointer",
                }}>
                  <FaPlus/>
                </span>
              </div>
        </div>

        <div className="team__team">
              <div className="avatar">
                <img src="assets/img/shape/c_shape2.png"/>
              </div>
              <div className="team__info text-center mb-20">
                <h3>Donate Fund</h3>
                <span>If you can</span>
              </div>
              <div className="team__social ul_li_center">
                <span onClick={()=>(setOwnerModal(false),setOpenDonote(true))} className="h-icon" style={{
                  cursor:"pointer",
                }}>
                  <FaPlus/>
                </span>
              </div>
        </div>


        {
          account== details?.owner&&( 
            <>
            <div className="team__team">
              <div className="avatar">
                <img src="assets/img/token/t_info_img.png"/>
              </div>
              <div className="team__info text-center mb-20">
                <h3>Withdraw</h3>
                <span>If you can</span>
              </div>
              <div className="team__social ul_li_center">
                <span onClick={()=>TOKEN_WITHDRAW()} className="h-icon" style={{
                  cursor:"pointer",
                }}>
                  <FaPlus/>
                </span>
              </div>
        </div>
            
            </>
          )
        }
      </div>
    </div>
  </section>
};

export default Owner;
