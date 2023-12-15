import React from "react";
import styled from "styled-components";
import {StyledFormBlock, StyledInput, StyledLabel, StyledSendButton} from "../Orders/StyledOrders";
import {Colors} from "../../Colors";
import {NavLink, redirect} from "react-router-dom";

const StyledLogInForm = styled.form`
    display: grid;
    width: 50%;
    margin-left: 20%;
    justify-content: center;
    background-color: ${Colors.White};
    padding: 3% 5% 3% 5%;
    border-radius: 20px;
`
export const StyledLogInWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`


export const LoginPage: React.FC = ({}) => {
    const loginByUsername = () => {
        const username = (
            document.getElementById("username") as HTMLInputElement | null
        )?.value;
        localStorage.setItem("username", username ? username : "");
    };
    return (
        <>
            <StyledLogInForm>

                <StyledFormBlock>
                    <StyledLabel>Введите ваш логин</StyledLabel>
                    <StyledInput id={"username"}/>
                </StyledFormBlock>

                <StyledFormBlock>
                    <StyledLabel>Введите ваш пароль</StyledLabel>
                    <StyledInput type={"password"} id={"username"}/>
                </StyledFormBlock>

                <StyledLogInWrapper>
                    <StyledSendButton onClick={loginByUsername}>Войти</StyledSendButton>
                    <NavLink to={"/registration"}><StyledSendButton>Регистрация</StyledSendButton></NavLink>
                </StyledLogInWrapper>


            </StyledLogInForm>
        </>
    );
};
