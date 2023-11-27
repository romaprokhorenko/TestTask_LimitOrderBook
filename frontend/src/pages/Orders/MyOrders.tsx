import axios from "axios";
import React, {useEffect, useState} from "react";
import { IOrders } from "../../models/models";
import "./Orders.css"

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
        <div className="order" key={order.id}>
        <div className="">{order.stock_name.name}</div>
        <div className="">{order.order_type}</div>
        <div className="">{order.price}</div>
        <div className="">{order.quantity}</div>
        <div className="">{order.time}</div>
        </div>
        )}
        </>
    )
}