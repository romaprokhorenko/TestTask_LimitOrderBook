import React from "react";
import {StyledFormBlock, StyledInput, StyledLabel, StyledSendButton} from "../Orders/StyledOrders";
import {NavLink} from "react-router-dom";
import {StyledLogInWrapper} from "./Login";
import styled from "styled-components";
import {Colors} from "../../Colors";

const registration = () => {

}

const StyledRegistrationForm = styled.form`
    display: grid;
    width: 50%;
    margin-left: 20%;
    justify-content: center;
    background-color: ${Colors.White};
    padding: 3% 5% 3% 5%;
    border-radius: 20px;
`

export const RegistrationPage: React.FC = () => {
    return (
        <>
            <StyledRegistrationForm>
                <StyledFormBlock>
                    <StyledLabel>Придумайте ваш логин</StyledLabel>
                    <StyledInput id={"username"}/>
                </StyledFormBlock>

                <StyledFormBlock>
                    <StyledLabel>Введите ваш email</StyledLabel>
                    <StyledInput id={"email"}/>
                </StyledFormBlock>

                <StyledFormBlock>
                    <StyledLabel>Придумайте пароль</StyledLabel>
                    <StyledInput type={"password"} id={"password"}/>
                </StyledFormBlock>

                <StyledLogInWrapper>
                    <NavLink to={"/login"}><StyledSendButton>Войти</StyledSendButton></NavLink>
                    <StyledSendButton onClick={registration}>Регистрация</StyledSendButton>
                </StyledLogInWrapper>
            </StyledRegistrationForm>
        </>
    )
}