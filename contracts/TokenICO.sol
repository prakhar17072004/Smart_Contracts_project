// SPDX-License-Identifier: MIT
  pragma solidity ^0.8.0;

  interface ERC20{
    function tranfer(address recipient , uint256 amount) external returns (bool);
    function blanceOf(address account) external view returns(uint256);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256) external returns (bool);
    function transferFrom(address sender,address recipient ,uint256) external returns(bool);
    function symbol() external view returns (string memory); 
    function totalSuppy() external view returns(uint256);
    function name() external view returns(string memory);
  }

  contract TokenICO {
    address public owner;
    address public tokenAddress;
    uint256 public tokenSalePrice;
    uint256 public soldTokens;
    //    call by only owner 
     modifier onlyOwner(){
        require(msg.sender==owner,"only contract owner can perform this action");
        _;
     } 

//update the address of owner
     constructor(){
        owner==msg.sender;
     }  

//update address of token
     function updateToken(address _tokenAddress) public onlyOwner{
      tokenAddress=_tokenAddress;

     }


//updatTokenSale price
 function updateTokenSalePrice(uint256 _tokenSalePrice)public onlyOwner{
    tokenSalePrice=_tokenSalePrice;
 }

 //multiply two no.
 function multiply(uint256 x, uint256 y)internal pure returns(uint256 z){
    require(y==0||(z=x*y)/y==x);
 }


 //buy token
 function buyToken(uint256 _tokenAmount)public payable{
    require(msg.value == multiply(_tokenAmount,tokenSalePrice),"Insufficent Ether provided for thee token purchase");
 
   ERC20 token = ERC20 (tokenAddress);
   require(_tokenAmount<=token.blanceOf(address(this)),"Not enough token left for sale");
 }
//getTokenDetails
 function getTokenDetails() public  view returns(string memory name, string memory symbol , uint256 balance ,uint256 supply ,uint256 tokenPrice, address tokenAddr ) {
   ERC20 token = ERC20(tokenAddress);

    return (
      token.name(),
      token.symbol(),
      token.blanceOf(address(this)),
      token.totalSuppy(),
      tokenSalePrice,
      tokenAddress
    );
 }
//transfer the amonunt
 function transferToOwner(uint256 _amount) external payable{
   require(msg.value >= _amount,"Insufficient funds sent ");
   (bool success,)=  owner.call{value:_amount}("");
   require(success,"trasection failed");
 }

 //transfer the ether
 function transferEther(address payable _receiver,uint256 _amount) external payable{
    require(msg.value >= _amount,"Insufficient funds sent ");
   (bool success,)=  _receiver.call{value:_amount}("");
   require(success,"trasection failed");
 }
 //allow all token to withdraw;
 function withdrawAllTokens() public onlyOwner{
   ERC20 token = ERC20(tokenAddress);
   uint256 balance = token.blanceOf(address(this));
   require(balance>0,"No tokens to withdraw");
   require(token.tranfer(owner,balance),"Transfer failed");
 }

    
  }