import React from "react";
import store from "../Store/store";

export default function CreateInvoice(props) {
  const storeUser = store.getState();
  console.log(storeUser);
  return (
    <>
      <br />
      <h1>CreateInvoice</h1>
      <br />
      <h3>HI <span style={{color:"blue"}}>{storeUser.user.username}</span>!!!</h3>
      <h4>Your password is  <span style={{color:"blue"}}>{storeUser.user.password}</span></h4>
    </>
  );
}
