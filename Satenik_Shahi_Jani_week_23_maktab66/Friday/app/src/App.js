import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Invoice from "./pages/Invoice";
import Invoices from "./pages/Invoices";
import Rules from "./pages/Rules";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import store from "./Store/store";
import ProtectedRout from "./Components/ProtectedRout";
import CreateInvoice from "./pages/CreateInvoice";

export default function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Welcome />}>
          <Route index={true} element={<Rules />} />
          <Route
          path="/create"
            element={
              <ProtectedRout>
                <CreateInvoice />
              </ProtectedRout>
            }
          ></Route>
          <Route path="/invoice" element={<Invoices />}>
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here! 404</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </Provider>
  );
}
