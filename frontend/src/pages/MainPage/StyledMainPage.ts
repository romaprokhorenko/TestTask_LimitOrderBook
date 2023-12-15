import styled from "styled-components";
import {Colors} from "../../Colors";

export const StyledHeader = styled.div`
    display: grid;
    padding: 15% 20% 15% 20%;
    background-color: ${Colors.Gray};
`
export const StyledLabelName = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 1%;
    margin-top: 2%;
`
export const StyledNavigateItem = styled.div<{$logged?: boolean}>`
    padding: 4% 2% 2% 4%;
    background-color ${Colors.Gray};
    

    :hover {
        color: ${Colors.White};
        cursor: ${props => props.$logged ? "pointer" : "not-allowed"};
    }
`

export const StyledNewsList = styled.div`
    display: grid;
    grid-row-gap: 40px;

`

export const StyledNewsCard = styled.div`
    display: grid;
    background-color: ${Colors.White};
    padding: 3% 5% 3% 5%;
    border-radius: 20px;
`

export const StyledNewsLabelWrapper = styled.div`
    display: grid;
    margin-bottom: 25px;
`
export const StyledNewsLabel = styled.div`
    font-weight: bold;
    font-size: 35px;
    margin-bottom: 5px;
`
export const StyledNewsWriter = styled.div`
    display: flex;
    gap: 10px;
    img {
        border-radius: 50px;
    }
`

export const StyledDate = styled.div`
    color: ${Colors.SoftGray};
`

export const StyledNewsText = styled.div`
    font-size: 20px;
`