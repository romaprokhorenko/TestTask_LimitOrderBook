import React, {useEffect, useState} from "react";
import { NavLink } from 'react-router-dom'
import "./Transactions.css"
import axios from "axios";
import { ITransactions } from "../../models/models";

export const TransactionsPage: React.FC = ({}) => {
    const url = `http://127.0.0.1:8000/stocks/get_order/get_my_transactions/?username=${localStorage.getItem("username")}`;
    const [transactions, setTransactions] = useState<ITransactions[]>([])
    useEffect(()=>{
        axios.get<ITransactions[]>(url).then(response => {
            setTransactions(response.data)
        })
    }, [])
    return (
        <>
        {transactions.map(transaction => 
            <div className="" key={transaction.id}>
                <li>{transaction.stock_name.name}</li>
                <li>{transaction.buyer.username}</li>
                <li>{transaction.seller.username}</li>
                <li>{transaction.price}</li>
                <li>{transaction.quantity}</li>
            </div>
        )}
        </>
    )
}