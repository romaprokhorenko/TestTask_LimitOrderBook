import axios from "axios";
import { error } from "console";
import React from "react";
import { NavLink } from 'react-router-dom'
// import "./Orders.css"

export const CreateOrderPage: React.FC = ({}) => {
    const createOrder = () =>
    {
        const url = "http://127.0.0.1:8000/stocks/create_order/create_order_by_user/"
        const username = localStorage.getItem("username")
        const stock_name = document.getElementById("stock_name")
        const order_type = document.getElementById("order_type")
        const price = document.getElementById("price")
        const quantity = document.getElementById("quantity")

        axios.post(url, {
            "username": username,
            "stock_name": stock_name,
            "order_type": order_type,
            "price": price,
            "quantity": quantity
        }).then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <>
        <input type="text" id="stock_name"/>
        <input type="text" id="order_type"/>
        <input type="text" id="price"/>
        <input type="text" id="quantity"/>
        <input type="button" value="" onClick={createOrder} />
        </>
    )
}