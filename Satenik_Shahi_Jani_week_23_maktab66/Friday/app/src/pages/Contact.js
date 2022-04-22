import React from "react";
import { getInvoices } from "../data";

export default function Contact() {
  let invoices = getInvoices();

  return (
    <div>
      <h1>Contact</h1>
      {invoices.map((invoice) => (
        <h4 key={invoice.name}>{invoice.name}</h4>
      ))}
    </div>
  );
}
