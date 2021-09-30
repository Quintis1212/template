import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import DashboardWrapper from "./components/dashboard/DashboardWrapper";
import { NavVrapper } from "./components/navigation/NavVrapper";
import { getData } from "./redux/reducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <div className="App">
      <NavVrapper />
      <DashboardWrapper />
    </div>
  );
}

export default App;
