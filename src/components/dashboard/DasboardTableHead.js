import React from "react";
import { useSelector } from "react-redux";

const DasboardTableHead = () => {
  const currency = useSelector((state) => state.mainReducer.currency);

  const tableHeads = [
    "Buy exchange pair",
    "Buy price",
    "Sell exchange",
    "Sell price",
    "Trade amount",
    "Arb%(Free%)",
    "Exp. profit " + currency,
    "Exp. fees " + currency,
    "Adj.",
  ];
  return (
    <div className="dashboard-table-head">
      {tableHeads.map((item) => {
        return <h5 key={item}>{item}</h5>;
      })}
    </div>
  );
};

export default DasboardTableHead;
