import styled from "styled-components";

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    
`
export const StyledRow = styled.tr<{$side?: "top" | "bottom", $count: number}>`
    background-color: #ffffff;
    display: grid;
    grid-template-columns: repeat(${props => props.$count}, 1fr);
    border-radius: ${props => props.$side === "top" ? "30px 30px 0 0" : props.$side === "bottom" ? "0 0 30px 30px" : "none"};
    margin: ${props => props.$side === "top" ? "0 0 10px 0" : props.$side === "bottom" ? "10px 0 0 0" : "none"};
`

export const StyledColumn = styled.td`
    padding: 5% 0 5% 0;
    border: 3px solid #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
`
