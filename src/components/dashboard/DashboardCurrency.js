import React from "react";
import { useDispatch } from "react-redux";
import { setCurrency } from "../../redux/reducer";

const DashboardCurrency = () => {
  const dispatch = useDispatch();

  const selectCurrency = (e) => {
    dispatch(setCurrency({ type: e.target.value }));
  };
  return (
    <div className="dashboard-currency">
      <h3>Dashboard currency</h3>
      <div>
        <select name="select" onChange={selectCurrency}>
          <option value="USD" defaultValue>
            USD
          </option>
          <option value="EUR">EUR</option>
        </select>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  );
};

export default DashboardCurrency;
