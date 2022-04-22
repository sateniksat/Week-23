import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../data.js";

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <>
      <h2>Invoices</h2>
      <div style={{ display: "flex" }}>
        <nav
          style={{
            padding: "1rem"
          }}
        >
          {invoices.map((invoice) => (
            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={`${invoice.number}`}
              key={invoice.number}
            >
              {/* we can also use ====> to={`/invoice/${invoice.number}`} */}
              {invoice.name}
            </Link>
          ))}
        </nav>
        <Outlet />
      </div>
    </>
  );
}
