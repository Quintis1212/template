import React from "react";
import { useSelector } from "react-redux";
import DashboardRow from "./DashboardRow";

const DashboardRows = () => {
  const rows = useSelector((state) => state.mainReducer.rows);
  return (
    <div>
      {rows.map((item) => {
        return <DashboardRow item={item} key={item.pair} />;
      })}
    </div>
  );
};

export default DashboardRows;
