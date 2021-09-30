import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  staticRows: [],
  rows: [],
  filters: {
    "Buy price from": "",
    "Buy price to": "",
    "Sell price from": "",
    "Sell price to": "",
  },
  currency: "USD",
};

export const mainReducer = createSlice({
  name: "mainReducer",
  initialState,
  reducers: {
    getData: (state) => {
      state.staticRows = [
        {
          pair: "GTC-USD",
          buyPrice: 0.5,
          sellExch: "EEFSAD-USD",
          sellPrice: 2.3,
          amount: 34,
          arb: 31,
          profit: 1,
          fees: 4,
          adj: 3,
        },
        {
          pair: "GTSFC-USD",
          buyPrice: 2.5,
          sellExch: "EEFSAD-USD",
          sellPrice: 1.3,
          amount: 34,
          arb: 31,
          profit: 1,
          fees: 4,
          adj: 3,
        },
        {
          pair: "GTDEWRGC-USD",
          buyPrice: 4.5,
          sellExch: "EEFSAD-USD",
          sellPrice: 5.3,
          amount: 34,
          arb: 31,
          profit: 1,
          fees: 4,
          adj: 3,
        },
        {
          pair: "GZZTC-USD",
          buyPrice: 1.5,
          sellExch: "EEFSAD-USD",
          sellPrice: 2.3,
          amount: 34,
          arb: 31,
          profit: 1,
          fees: 4,
          adj: 3,
        },
        {
          pair: "GTGEC-USD",
          buyPrice: 2.5,
          sellExch: "EEFSAD-USD",
          sellPrice: 5.3,
          amount: 34,
          arb: 31,
          profit: 1,
          fees: 4,
          adj: 3,
        },
        {
          pair: "GTFEC-USD",
          buyPrice: 7.5,
          sellExch: "EEFSAD-USD",
          sellPrice: 4.3,
          amount: 34,
          arb: 31,
          profit: 1,
          fees: 4,
          adj: 3,
        },
        {
          pair: "GTSC-USD",
          buyPrice: 2.5,
          sellExch: "EEFSAD-USD",
          sellPrice: 1.3,
          amount: 34,
          arb: 31,
          profit: 1,
          fees: 4,
          adj: 3,
        },
        {
          pair: "GTSFC-EUR",
          buyPrice: 2.5,
          sellExch: "EEFSAD-USD",
          sellPrice: 1.3,
          amount: 34,
          arb: 31,
          profit: 1,
          fees: 4,
          adj: 3,
        },
        {
          pair: "GTSF-EUR",
          buyPrice: 1.5,
          sellExch: "EEFSAD-USD",
          sellPrice: 4.3,
          amount: 34,
          arb: 31,
          profit: 1,
          fees: 4,
          adj: 3,
        },
        {
          pair: "QF-EUR",
          buyPrice: 0.5,
          sellExch: "EEFSAD-USD",
          sellPrice: 4.9,
          amount: 34,
          arb: 31,
          profit: 1,
          fees: 4,
          adj: 3,
        },
        {
          pair: "QASF-EUR",
          buyPrice: 0.45,
          sellExch: "EEFSAD-USD",
          sellPrice: 7.9,
          amount: 34,
          arb: 31,
          profit: 1,
          fees: 4,
          adj: 3,
        },
        {
          pair: "QASAZEF-EUR",
          buyPrice: 3.45,
          sellExch: "EEFSAD-USD",
          sellPrice: 4.9,
          amount: 34,
          arb: 31,
          profit: 1,
          fees: 4,
          adj: 3,
        },
        {
          pair: "QASQSFFAZEF-EUR",
          buyPrice: 5.45,
          sellExch: "EEFSAD-USD",
          sellPrice: 4.9,
          amount: 34,
          arb: 31,
          profit: 1,
          fees: 4,
          adj: 3,
        },
      ];

      mainReducer.caseReducers.filterCurrency(state);
      console.log(mainReducer);
    },
    setFilters: (state, action) => {
      state.filters[action.payload.type] = +action.payload.value;
    },
    clearFiltersInputs: (state) => {
      state.filters = initialState.filters;
      state.rows = state.staticRows;
      mainReducer.caseReducers.filterCurrency(state);
    },
    filterItems: (state) => {
      const rows = current(state.rows);
      const filtered = rows.filter((row) => {
        return (
          row.buyPrice >= state.filters["Buy price from"] &&
          row.buyPrice <= state.filters["Buy price to"] &&
          row.sellPrice >= state.filters["Sell price from"] &&
          row.sellPrice <= state.filters["Sell price to"]
        );
      });
      state.rows = filtered;
    },
    setCurrency: (state, action) => {
      state.currency = action.payload.type;
      mainReducer.caseReducers.clearFiltersInputs(state);
    },
    filterCurrency: (state) => {
      state.rows = state.staticRows.filter((item) =>
        item.pair.includes(state.currency)
      );
    },
  },
});

export const {
  getData,
  setFilters,
  clearFiltersInputs,
  filterItems,
  setCurrency,
} = mainReducer.actions;

export default mainReducer.reducer;
