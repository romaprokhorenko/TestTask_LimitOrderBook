import React from "react";
import styled from "styled-components";
import {IOrders} from "../models/models";

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;

`
const StyledRow = styled.tr<{ $side?: "top" | "bottom", $count: number }>`
    background-color: #ffffff;
    display: grid;
    grid-template-columns: repeat(${props => props.$count}, 1fr);
    border-radius: ${props => props.$side === "top" ? "30px 30px 0 0" : props.$side === "bottom" ? "0 0 30px 30px" : "none"};
    margin: ${props => props.$side === "top" ? "0 0 10px 0" : props.$side === "bottom" ? "10px 0 0 0" : "none"};
`

const StyledColumn = styled.td`
    padding: 5% 0 5% 0;
    border: 3px solid #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const TableComponent: React.FC<{ titles: [], data: any[] | [] }> = ({titles, data}) => {
    return (
        <StyledTable>
            <StyledRow $side={"top"} $count={titles.length}>
                <StyledColumn>Первый тайтл</StyledColumn>
            </StyledRow>

            {data.map((item) => (
                    <StyledRow $count={5} key={item.id}>
                        <StyledColumn>{item.stock_name.name}</StyledColumn>
                        <StyledColumn>{item.buyer.username}</StyledColumn>
                        <StyledColumn>{item.seller.username}</StyledColumn>
                        <StyledColumn>{item.price}</StyledColumn>
                        <StyledColumn>{item.quantity}</StyledColumn>
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
    )
}