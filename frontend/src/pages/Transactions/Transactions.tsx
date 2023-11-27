import React, {useEffect, useState} from "react";
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
            <div className="transaction" key={transaction.id}>
                <div className="">{transaction.stock_name.name}</div>
                <div className="">{transaction.buyer.username}</div>
                <div className="">{transaction.seller.username}</div>
                <div className="">{transaction.price}</div>
                <div className="">{transaction.quantity}</div>
            </div>
        )}
        </>
    )
}