import React from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/reducer";
import { useSelector } from "react-redux";

const DashboardFilterInput = ({ label }) => {
  const value = useSelector((state) => state.mainReducer.filters);

  const dispatch = useDispatch();
  const filterInputHandler = (e) => {
    dispatch(setFilters({ type: label, value: e.target.value }));
  };
  return (
    <div className="filter-item">
      <label htmlFor={label}>{label}</label>
      <input
        type="number"
        id={label}
        onChange={filterInputHandler}
        value={value[label]}
      />
    </div>
  );
};

export default DashboardFilterInput;
