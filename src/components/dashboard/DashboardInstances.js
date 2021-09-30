import React from "react";
import { useSelector } from "react-redux";

const DashboardInstances = () => {
  const currency = useSelector((state) => state.mainReducer.currency);
  const activeRows = useSelector((state) => state.mainReducer.rows.length);
  return (
    <div className="instances-wrapper">
      <h3>Instances</h3>
      <div className="instances">
        <div>
          <p>Most profit instance</p>
          <h4>BTC-{currency}</h4>
        </div>
        <div>
          <p>Active instance</p>
          <h4>{activeRows}</h4>
        </div>
        <div>
          <p>Total instance</p>
          <h4>{activeRows}</h4>
        </div>
      </div>
    </div>
  );
};

export default DashboardInstances;
