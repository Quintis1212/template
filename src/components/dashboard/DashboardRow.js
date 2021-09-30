import React from "react";

const DashboardRow = ({ item }) => {
  return (
    <div className="row">
      <h5 className="row-pair">{item.pair}</h5>
      <h5 className="row-buyPrice">{item.buyPrice}</h5>
      <h5 className="row-sellExch">{item.sellExch}</h5>
      <h5 className="row-sellPrice">{item.sellPrice}</h5>
      <h5 className="row-amount">{item.amount}</h5>
      <h5 className="row-arb">{item.arb}</h5>
      <h5 className="row-profit">{item.profit}</h5>
      <h5 className="row-fees">{item.fees}</h5>
      <h5 className="row-adj">{item.adj}</h5>
    </div>
  );
};

export default DashboardRow;
