import React from "react";
import DasboardTableHead from "./DasboardTableHead";
import DashboardCurrency from "./DashboardCurrency";
import DashBoardFilters from "./DashBoardFilters";
import DashboardRows from "./DashboardRows";
import DashboardInstances from "./DashboardInstances";

const DashboardWrapper = () => {
  return (
    <div className="main-wrapper">
      <div className="dashboard-wrapper">
        <DashBoardFilters />
        <DasboardTableHead />
        <DashboardRows />
      </div>
      <div>
        <DashboardCurrency />
        <DashboardInstances />
      </div>
    </div>
  );
};

export default DashboardWrapper;
