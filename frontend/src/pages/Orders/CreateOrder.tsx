import axios from "axios";
import React from "react";

export const CreateOrderPage: React.FC = ({}) => {
  const createOrder = () => {
    const url =
      "http://127.0.0.1:8000/stocks/create_order/create_order_by_user/";
    const username = localStorage.getItem("username");
    const stock_name = (
      document.getElementById("stock_name") as HTMLInputElement
    )?.value;
    const order_type = (
      document.getElementById("order_type") as HTMLInputElement
    )?.value;
    const price = (document.getElementById("price") as HTMLInputElement)?.value;
    const quantity = (document.getElementById("quantity") as HTMLInputElement)
      ?.value;

    axios
      .post(url, {
        username: username,
        stock_name: stock_name,
        order_type: order_type,
        price: price,
        quantity: quantity,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <label htmlFor="">Stock name</label>
      <input type="text" id="stock_name" />
      <br />
      <label htmlFor="">Order type</label>
      <input type="text" id="order_type" />
      <br />
      <label htmlFor="">Price</label>
      <input type="text" id="price" />
      <br />
      <label htmlFor="">Quantity</label>
      <input type="text" id="quantity" />
      <br />
      <button type="button" onClick={createOrder}>
        Create
      </button>
    </>
  );
};
