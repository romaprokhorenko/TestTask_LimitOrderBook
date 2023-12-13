import React, {useEffect, useState} from "react";
import "./StyledTransactions";
import axios from "axios";
import {ITransactions} from "../../models/models";
import {observer} from "mobx-react-lite";
import {StyledColumn, StyledRow, StyledTable} from "./StyledTransactions";

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
            <StyledTable>
                <StyledRow $side={"top"} $count={5}>
                    <StyledColumn>Акция</StyledColumn>
                    <StyledColumn>Покупатель</StyledColumn>
                    <StyledColumn>Продавец</StyledColumn>
                    <StyledColumn>Цена</StyledColumn>
                    <StyledColumn>Количество</StyledColumn>
                </StyledRow>

                {transactions.map((transaction) => (
                        <StyledRow $count={5} key={transaction.id}>
                            <StyledColumn>{transaction.stock_name.name}</StyledColumn>
                            <StyledColumn>{transaction.buyer.username}</StyledColumn>
                            <StyledColumn>{transaction.seller.username}</StyledColumn>
                            <StyledColumn>{transaction.price}</StyledColumn>
                            <StyledColumn>{transaction.quantity}</StyledColumn>
                        </StyledRow>
                    )
                )}

                <StyledRow $side={"bottom"} $count={5}>
                    <StyledColumn>Акция</StyledColumn>
                    <StyledColumn>Покупатель</StyledColumn>
                    <StyledColumn>Продавец</StyledColumn>
                    <StyledColumn>Цена</StyledColumn>
                    <StyledColumn>Количество</StyledColumn>
                </StyledRow>
            </StyledTable>
        </>
    )
        ;
});
