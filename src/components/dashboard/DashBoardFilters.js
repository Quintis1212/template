import React from "react";
import DashboardFilterInput from "./DashboardFilterInput";
import { useDispatch } from "react-redux";
import { clearFiltersInputs, filterItems } from "../../redux/reducer";

const DashBoardFilters = () => {
  const filters = [
    "Buy price from",
    "Buy price to",
    "Sell price from",
    "Sell price to",
  ];
  const dispatch = useDispatch();

  const clearFilters = () => {
    dispatch(clearFiltersInputs());
  };

  const filter = () => {
    dispatch(filterItems());
  };
  return (
    <div className="filters">
      {filters.map((item) => {
        return <DashboardFilterInput label={item} key={item} />;
      })}
      <button type="submit" onClick={clearFilters}>
        Clear filters
      </button>
      <button type="submit" onClick={filter}>
        Filter Arbitrage
      </button>
    </div>
  );
};

export default DashBoardFilters;
