import React, { useState, useEffect } from "react";
import Web3 from "web3";

const web3 = new Web3("https://bsc-dataseed1.binance.org:443");
const tokenABI = [
  {
    constant: true,
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
const tokenAddress = "0x7c59a57fc16eac270421b74615c4bc009ecd486d";
const tokenContract = new web3.eth.Contract(tokenABI, tokenAddress);
const bankrollAddress = "0xEC45F47a6A7d86Fe407CA38F428029a8bD4Ae7A6";
const refreshInterval = 10 * 60 * 1000; // 10 minutes in milliseconds

function BankrollBalance() {
  const [balance, setBalance] = useState(null);

  async function getBalance() {
    const balance = await tokenContract.methods.balanceOf(bankrollAddress).call();
    const balanceInEth = web3.utils.fromWei(balance, "ether");
    const formattedBalance = parseFloat(balanceInEth).toLocaleString('en-US', {maximumFractionDigits: 0})
    setBalance(formattedBalance);
  }

  useEffect(() => {
    getBalance();

    const intervalId = setInterval(() => {
      getBalance();
    }, refreshInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (balance === null) {
    return <div>Loading balance...</div>;
  }

  return (
    <div>
      Our bankroll amount:{" "}
      <a href={`https://bscscan.com/token/tokenholderchart/${tokenAddress}`}>
        {Math.floor(parseFloat(balance)).toLocaleString()} RXCG
      </a>
    </div>
  );
}

export default BankrollBalance;
