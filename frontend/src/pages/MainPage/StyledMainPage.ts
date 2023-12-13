import styled from "styled-components";

export const StyledHeader = styled.div`
    display: grid;
    padding: 15% 20% 15% 20%;
    background-color: #f7f7f7;
`
export const StyledLabelName = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 1%;
    margin-top: 2%;
`
export const StyledNavigateItem = styled.div<{$pad?: number}>`
    padding: ${props => props.$pad ? props.$pad : 4}% 2% 2% 4%;
`

export const StyledOrder = styled.div`
    width: 100%;
    justify-content: space-evenly;
    display: flex;
    margin-bottom: 30px;
`
