import React from 'react'
import Api from "./Api.jsx"
import axios from "axios"
import { useEffect } from 'react';
import { useState } from 'react';
const Coins = () => {
  let [bitcoins,Setbitcoins]=useState([]);
  useEffect(() => {
    const fetchCoin= async()=>{
      const {data}= await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr");
      Setbitcoins(data);
      console.log(data);
    }
    fetchCoin();
  },[]);
  
  return (
   <div className='CoinsMain'>
   {
    bitcoins.map((i)=>{
      return(
        <Api id={i.id} symbol={i.symbol} images={i.image} price={i.current_price} />
      )
    })
   }
   </div>
  )
}

export default Coins
