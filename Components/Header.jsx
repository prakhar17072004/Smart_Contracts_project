import React, { useState, useEffect, useContext } from "react";

const Header = ({
  account,
  CONNECT_WALLET,
  setAccount,
  setLoader,
  setOwnerModal,
  shortenAddress,
  details,
  currency,
  ownerModal,
}) => {
  const [isMetaMaskInstalled, setIsMeteMaskInstalled] = useState(false);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setIsMeteMaskInstalled(true);

      window.ethereum.on("accountChanged", handleAccountChanged);
    }

    return () => {
      if (typeof window.ethereum !== "undefined") {
        window.ethereum.removeListener("accountChanged", handleAccountChanged);
      }
    };
  }, []);
  const handleAccountChanged = (account) => {
    setAccount(account[0]);
  };
  const connectMetamask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const account = await window.ethereum.request({
          mehtod: "eth_requestAccounts",
        });
        setAccount(account[0]);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      console.log("Metemask is not installed");
    }
  };
  return (
    <header className="site-header header--transparent ico-header">
      <div className="header_main-wrap">
        <div className="container mxw_1640 ">
          <div className="header_main ul_li_between">
            <div className="header_left ul_li">
              <div className="header__logo">
                <a href="/">
                  <img
                    src="assets/img/logo/logo.svg"
                    alt="hellp"
                    srcset=""
                  ></img>
                </a>
              </div>
            </div>

            <div className="main-menu_wrap ul_li navbar navbar-expand-xl">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  <li className="active has-mega-menu">
                    <a href="/">Home</a>
                  </li>
                  <li className="scrollspy-btn">
                    <a href="#about">About</a>
                  </li>
                  <li className="scrollspy-btn">
                    <a href="#roadmap">Roadmap</a>
                  </li>
                  <li className="scrollspy-btn">
                    <a href="#team">Team</a>
                  </li>
                  <li className="scrollspy-btn">
                    <a href="#faq">Faq</a>
                  </li>
                  <li className="scrollspy-btn">
                    <a href="#contact">Contact</a>
                  </li>
                  <li className="scrollspy-btn">
                    <a
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        ownerModal ? setOwnerModal(false) : setOwnerModal(true)
                      }
                    >
                      Tools
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header__action ul_li">
              <div className="d-xl-none">
                <a className="header__bar hamburger_menu ">
                  <div className="header__bar-icon">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </a>
              </div>

              {account ? (
                <div className="header__account">
                  <a
                    onClick={() =>
                      navigator.clipboard.writeText(details?.address)
                    }
                  >
                    {shortenAddress(details?.address)}:{""}
                    {details?.maticBal?.slice(0, 6)}
                    {currency}
                  </a>
                </div>
              ) : (
                <div className="header__account">
                  <a onClick={() => connectMetamask()}>Connect Wallet</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
