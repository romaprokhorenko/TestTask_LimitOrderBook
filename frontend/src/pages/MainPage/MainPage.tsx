import React, {useState, useEffect} from "react";
import axios from "axios";
import {IOrders} from "../../models/models";
import {StyledOrder} from "./StyledMainPage";

export const MainPage: React.FC = ({}) => {
    const [orders, setOrders] = useState<IOrders[]>([]);
    const url = "http://127.0.0.1:8000/stocks/get_order/";
    useEffect(() => {
        axios.get<IOrders[]>(url).then((response) => {
            setOrders(response.data);
        });
    }, []);
    return (
        <>
            {orders.map((order) => (
                    <StyledOrder key={order.id}>
                        <div className="">{order.stock_name.name}</div>
                        <div className="">{order.order_type}</div>
                        <div className="">{order.price}</div>
                        <div className="">{order.quantity}</div>
                        <div className="">{order.time}</div>
                    </StyledOrder>
                )
            )}
        </>
    )
        ;
};
