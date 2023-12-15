import styled from "styled-components";
import {Colors} from "../../Colors";

export const StyledOrder = styled.div`
    width: 100%;
    justify-content: space-evenly;
    display: flex;
    margin-bottom: 30px;
`

export const StyledMessageBox = styled.div`
    background-color: ${Colors.White};
    padding: 3% 5% 3% 5%;
    border-radius: 20px;
    margin-bottom: 40px;
`

export const StyledFormCreateOrder = styled.form`
    display: grid;
    width: 60%;
    margin-left: 15%;
    justify-content: center;
    background-color: ${Colors.White};
    padding: 3% 5% 3% 5%;
    border-radius: 20px;
`

export const StyledFormBlock = styled.div`
    display: grid;
    margin-bottom: 15px;
`

export const StyledLabel = styled.label`
    margin-left: 5px;
    color: ${Colors.SoftGray};
    font-size: 30px;
`
export const StyledDatalist = styled.datalist``
export const StyledOption = styled.option``

export const StyledInput = styled.input`
    font-size: 20px;
    padding: 4px;
`

export const StyledButtonWrapper = styled.div`
    display: grid;
    justify-content: center;
`
export const StyledSendButton = styled.button`
    padding: 5px;
    font-size: 20px;
    border-radius: 5px;
    background-color: ${Colors.White};
`