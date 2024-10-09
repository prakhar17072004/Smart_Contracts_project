import React, { useState, useEffect } from "react";
import "../styles/globals.css";

const Header = ({ 
  account,
  setLoader,
  CONNECT_WALLET,
  details,
  setAccount,
  setOwnerModel,
  shortAddress,
  currency,
  ownerModel
}) => {

  const [isMetaMaskInstalled, setIsMetaMaskInstall] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  const connectWallet = async () => {
    setLoader(true);
    const address = await CONNECT_WALLET();
    setAccount(address);
  };

  const disconnectWallet = () => {
    setAccount(null);
    setIsDropdownOpen(false); // Close dropdown after disconnect
    // Optionally: Reset any other wallet-related states
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState); // Toggle the dropdown state
  };

  const handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      setAccount(null); // Wallet disconnected
    } else {
      setAccount(accounts[0]); // Account switched
    }
  };

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setIsMetaMaskInstall(true);
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }

    return () => {
      if (typeof window.ethereum !== "undefined") {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
      }
    };
  }, []);

  return (
    <header className="site-header header--transparent ico-header ">
      <div className="header_main-wrap">
        <div className="container mxw_1640">
          <div className="header_main ul_li_between">
            <div className="header_left ul_li">
              <div className="header__logo">
                <a href="/">
                  <img src="assets/img/logo/logo.svg" alt="anshuu" />
                </a>
              </div>
            </div>
            <div className="main-menu_wrap ul_li navbar navbar-expand-xl">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  <li className="active has-mega-menu">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a className="scrollspy-btn" href="#about">About</a>
                  </li>
                  <li>
                    <a className="scrollspy-btn" href="#team">Team</a>
                  </li>
                  <li>
                    <a className="scrollspy-btn" href="#faq">Faq</a>
                  </li>
                  <li>
                    <a className="scrollspy-btn" href="#contact">Contact</a>
                  </li>
                  <li>
                    <a
                      className="scrollspy-btn"
                      style={{ cursor: "pointer" }}
                      onClick={() => ownerModel ? setOwnerModel(false) : setOwnerModel(true)}
                    >
                      Tools
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header__action ul_li">
              <div className="d-xl-none">
                <a className="header__bar hamburger_menu">
                  <div className="header__bar-icon">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </a>
              </div>
              {account ? (
                <div className="header__account connect-wlt-btn">
                  <a
                    onClick={toggleDropdown}
                    style={{ cursor: "pointer" }}
                  >
                    {shortAddress(details?.address)} :{" "}
                    {details?.maticBal?.slice(0, 6)}
                    {currency}
                  </a>

                  {/* Dropdown for disconnecting wallet */}
                  {isDropdownOpen && (
                    <div className="dropdown-menu">
                      <ul>
                        <li>
                          <a
                            onClick={() => navigator.clipboard.writeText(details?.address)}
                          >
                            Copy Address
                          </a>
                        </li>
                        <li>
                          <a onClick={disconnectWallet}>Disconnect Wallet</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <div className="header__account connect-wlt-btn">
                  <a className="thm-btn" onClick={connectWallet}>Connect Wallet</a>
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
