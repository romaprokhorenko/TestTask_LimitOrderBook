import axios from "axios";
import React, {useEffect, useState} from "react";
import { NavLink } from 'react-router-dom'
import { IOrders } from "../../models/models";
// import "./MainPage.css"

export const MyOrdersPage: React.FC = ({}) => {
    const url = `http://127.0.0.1:8000/stocks/get_order/get_my_order/?username=${localStorage.getItem("username")}`
    const [orders, setOrders] = useState<IOrders[]>([])
    useEffect(()=>{
        axios.get<IOrders[]>(url).then(response => {
            console.log(response.data)
            setOrders(response.data)
        })
    }, [])
    return (
        <>
        {orders.map(order => 
        <div className="" key={order.id}>
            <li>{order.stock_name.name}</li>
            <li>{order.order_type}</li>
            <li>{order.price}</li>
            <li>{order.quantity}</li>
            <li>{order.time}</li>
        </div>
        )}
        </>
    )
}