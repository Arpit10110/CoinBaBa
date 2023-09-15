import React from "react";
import "../style/Coins.css"
const Api = ({ id, symbol, images, price }) => {
  return (
    <>
      <div className="ApiCont">
        <div className="CoinCont">
          <h3>{id}({symbol})</h3>
          <img className="Coinsimg" src={images} alt="" />
          <h3>
           price ₹{price}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Api;
