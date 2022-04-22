import "./styles.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Table from "./Components/Table";
import { Routes, Route } from "react-router-dom";
import Order from "./pages/Order";
import Dashboard from "./pages/Dashboard";
import BasicTools from "./Components/basicTools";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BasicTools />}>
          <Route path="order" elemsnt={<Order />} />
          <Route path="dashboard" elemsnt={<Dashboard />} />
        </Route>
      </Routes>

      {/* <Sidebar /> */}
      {/* <Table /> */}
    </div>
  );
}
