import React, {useState, useEffect} from "react";
import { NavLink } from 'react-router-dom'
// import "./MainPage.css"
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