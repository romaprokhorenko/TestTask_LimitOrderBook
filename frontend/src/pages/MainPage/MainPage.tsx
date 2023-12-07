import React, {useState, useEffect} from "react";
import "./MainPage.css"
import axios from "axios";
import {IOrders} from "../../models/models"

export const MainPage: React.FC = ({}) => {
    const [orders, setOrders] = useState<IOrders[]>([]) 
    const url = "http://127.0.0.1:8000/stocks/get_order/"
    useEffect(()=>{
        axios.get<IOrders[]>(url).then(response => {
            setOrders(response.data)
        })
    }, [])
    console.log(orders.map(order => order.stock_name.name))

    
    return(<>
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