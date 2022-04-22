import { useParams } from "react-router-dom";
import { getInvoice } from "../data";
import NotFound from "./NotFound";

export default function Invoice() {
  let params = useParams();
  console.log(params);
  let invoice = getInvoice(Number(params.invoiceId));
  if (!invoice) {
    return <NotFound />;
  }
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
}
