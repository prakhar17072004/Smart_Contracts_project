
import React, { useState, useEffect } from "react";

const Donate = ({
  details,
    currency,
    setOpenDonote,
    DONATE,
}) => {
const[donateFund,setDonateFund]=useState();

  
  return (
    <section className="new-margin ico-contact pos-rel">
      <div className="container">
        <div className="ico-contact__wrap">
          <h2 className="title">
          Donate {currency}
            <strong onClick={() => setOpenDonote(false)}>X</strong>
          </h2>
          <div className="">
            <div className="row">
              <div className="col-lg-12">
                
               
                  <input
                    type="text"
                    placeholder="_amount"
                    onChange={(e) => {
                      setDonateFund( e.target.value)
                      
                    }}
                  />
                
              </div>
             

              <p>
                <strong>Balance:</strong> {details?.maticBal} {currency}
              </p>
              <div className="ico-contract__btn text-center mt-10">
                <button
                  onClick={() => DONATE(donateFund)}
                  className="thm-btn"
                >
                  Donate
                </button>
              </div>
            </div>
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

export default Donate;
