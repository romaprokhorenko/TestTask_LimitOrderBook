import React from "react";
import styled from "styled-components";
import {IOrders, ITransactions} from "../models/models";
import {Colors} from "../Colors";
import axios from "axios";

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;

`
const StyledRow = styled.tr<{ $side?: "top" | "bottom", $count: number }>`
    background-color: ${Colors.White};
    display: grid;
    grid-template-columns: repeat(${props => props.$count}, 1fr);
    border-radius: ${props => props.$side === "top" ? "35px 35px 0 0" : props.$side === "bottom" ? "0 0 35px 35px" : "none"};
    margin: ${props => props.$side === "top" ? "0 0 10px 0" : props.$side === "bottom" ? "10px 0 0 0" : "none"};
    color: ${props => props.$side ? Colors.SoftGray : "black"};
    font-weight: ${props => props.$side ? "bold" : "normal"};
    font-size: 20px;
    
    :hover{
        cursor:  ${props => props.$side ? "default": "pointer"}
    }
`

const StyledColumn = styled.td`
    padding: 5% 0 5% 0;
    border: 3px solid ${Colors.Gray};
    display: flex;
    justify-content: center;
    align-items: center;
`
const deleteOrderById = (id: number) => {
    if (window.confirm(`Вы действительно хотите удалить этот заказ?`)) {
        // axios.post("", data = {})
    } else {
    }
}
export const TableComponent: React.FC<{ titles: string[], data: ITransactions[] | IOrders[] }> = ({titles, data}) => {
    return (
        <StyledTable>
            <StyledRow $side={"top"} $count={titles.length}>
                {titles.map((title) => (
                    <StyledColumn>{title}</StyledColumn>
                ))}
            </StyledRow>

            {data.map((item) => (
                    <StyledRow $count={titles.length} key={item.id}
                               onClick={"order_type" in item ? () => deleteOrderById(item.id) : undefined}>
                        <StyledColumn>{item.stock_name.name}</StyledColumn>
                        {"order_type" in item ?
                            <StyledColumn>{item.order_type == "Buy" ? "Покупка" : "Продажа"}</StyledColumn> : undefined}
                        {"buyer" in item ? <StyledColumn>{item.buyer.username}</StyledColumn> : undefined}
                        {"seller" in item ? <StyledColumn>{item.seller.username}</StyledColumn> : undefined}
                        <StyledColumn>{item.price}</StyledColumn>
                        <StyledColumn>{item.quantity}</StyledColumn>
                        {"time" in item ? <StyledColumn>{item.time}</StyledColumn> : undefined}
                    </StyledRow>
                )
            )}

            <StyledRow $side={"bottom"} $count={titles.length}>
                {titles.map((title) => (
                    <StyledColumn>{title}</StyledColumn>
                ))}
            </StyledRow>
        </StyledTable>
    )
}