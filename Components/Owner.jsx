import React from "react";
import { FaPlus } from "react-icons/fa6";

const Owner = ({
  setOwnerModel,
  currency,
  details,
  account,
  setTransferCurrency,
  setTransferModel,
  setOpenDonote,
  TOKEN_WITHDRAW,
  setOpenUpdatePrice,
  setOpenUpdateAddress,
}) => {
  return (
    <section className="team pos-rel">
      <div className="container">
        <div className="new-owner team__wrap ul_li">
          <div className="team__item">
            <div className="avatar">
              <img src="assets/img/shape/c_shape1.png" alt="" />
            </div>
            <div className="team__info text-center mb-20">
              <h3>TOKEN TRANSFER</h3>
              <span>Any ERC 20</span>
            </div>
            <div className="team__social ul_li_center">
              <span
                onClick={() => (setOwnerModel(false),setTransferModel(true))}
                className="h-icon"
                style={{
                  cursor: "pointer",
                }}
              >
                <FaPlus />
              </span>
            </div>
          </div>

          <div className="team__item">
            <div className="avatar">
              <img src="assets/img/token/t_info_img.png" />
            </div>
            <div className="team__info text-center mb-20">
              <h3>TOKEN TRANSFER FUNDS</h3>
              <span>
                {details?.matiBal.slice(0, 6)}
                {currency}
              </span>
            </div>
            <div className="team__social ul_li_center">
              <span
                onClick={() => (
                  setOwnerModel(false), setTransferCurrency(true)
                )}
                className="h-icon"
                style={{
                  cursor: "pointer",
                }}
              >
                <FaPlus />
              </span>
            </div>
          </div>

          <div className="team__item">
            <div className="avatar">
              <img src="assets/img/shape/c_shape2.png" />
            </div>
            <div className="team__info text-center mb-20">
              <h3>Donate Fund</h3>
              <span>If you can</span>
            </div>
            <div className="team__social ul_li_center">
              <span
                onClick={() => (setOwnerModel(false), setOpenDonote(true))}
                className="h-icon"
                style={{
                  cursor: "pointer",
                }}
              >
                <FaPlus />
              </span>
            </div>
          </div>

          {  
               account==details?.owner && (
            <>
              <div className="team__item">
                <div className="avatar">
                  <img src="assets/img/token/t_info_img.png" />
                </div>
                <div className="team__info text-center mb-20">
                  <h3>Withdraw</h3>
                  <span>If you can</span>
                </div>
                <div className="team__social ul_li_center">
                  <span
                    onClick={() => TOKEN_WITHDRAW()}
                    className="h-icon"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <FaPlus />
                  </span>
                </div>
              </div>

              <div className="team__item">
                <div className="avatar">
                  <img src="assets/img/token/t_info_img.png" />
                </div>
                <div className="team__info text-center mb-20">
                  <h3>Update Token</h3>
                  <span>If you can</span>
                </div>
                <div className="team__social ul_li_center">
                  <span
                    onClick={() => (
                      setOwnerModel(false), setOpenUpdateAddress(true)
                    )}
                    className="h-icon"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <FaPlus />
                  </span>
                </div>
              </div>

              <div className="team__item">
                <div className="avatar">
                  <img src="assets/img/token/t_info_img.png" />
                </div>
                <div className="team__info text-center mb-20">
                  <h3>Update Token Price</h3>
                  <span>If you can</span>
                </div>
                <div className="team__social ul_li_center">
                  <span
                    onClick={() => (
                      setOwnerModel(false), setOpenUpdatePrice(true)
                    )}
                    className="h-icon"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <FaPlus />
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="team__shape">
        <div className="shape shape--1">
          <img src="assets/img/shape/t_shape1.png"/>
        </div>
      </div>
    </section>
  );
};

export default Owner;
