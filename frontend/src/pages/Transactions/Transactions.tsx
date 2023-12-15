import React, {useEffect, useState} from "react";
import "./StyledTransactions";
import axios from "axios";
import {ITransactions} from "../../models/models";
import {observer} from "mobx-react-lite";
import {TableComponent} from "../../components/Table";

export const TransactionsPage: React.FC = observer(() => {
    const url = `http://127.0.0.1:8000/stocks/get_order/get_my_transactions/?username=${localStorage.getItem(
        "username",
    )}`;
    const [transactions, setTransactions] = useState<ITransactions[]>([]);
    useEffect(() => {
        axios.get<ITransactions[]>(url).then((response) => {
            setTransactions(response.data);
        });
    });

    return (
        <>
            <TableComponent titles={["Акция", "Покупатель", "Продавец", "Цена", "Количество"]} data={transactions}/>
        </>
    )
        ;
});
