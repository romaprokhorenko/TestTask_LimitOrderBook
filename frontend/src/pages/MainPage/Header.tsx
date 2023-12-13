import React from "react";
import {NavLink} from "react-router-dom";
import {StyledHeader, StyledLabelName, StyledNavigateItem} from "./StyledMainPage";

export const Header: React.FC = ({}) => {
    return (
        <>
            <StyledHeader>
                <StyledLabelName>Сервисы</StyledLabelName>
                <StyledNavigateItem $pad={4}><NavLink to={"/main"}>Главная страница</NavLink></StyledNavigateItem>
                <StyledNavigateItem><NavLink to={"/myorder"}>Мои заказы</NavLink></StyledNavigateItem>
                <StyledNavigateItem><NavLink to={"/transactions"}>Мои транзакции</NavLink></StyledNavigateItem>
                <StyledNavigateItem><NavLink to={"/create"}>Создать заказ</NavLink></StyledNavigateItem>
                <StyledNavigateItem><NavLink to={"/login"}>Профиль</NavLink></StyledNavigateItem><br/>

                <StyledLabelName>Контакты</StyledLabelName>
                <StyledNavigateItem><NavLink to={"/main"}>Главная страница</NavLink></StyledNavigateItem>
                <StyledNavigateItem><NavLink to={"/myorder"}>Мои заказы</NavLink></StyledNavigateItem>
                <StyledNavigateItem><NavLink to={"/transactions"}>Мои транзакции</NavLink></StyledNavigateItem>
                <StyledNavigateItem><NavLink to={"/create"}>Создать заказ</NavLink></StyledNavigateItem>
                <StyledNavigateItem><NavLink to={"/login"}>Профиль</NavLink></StyledNavigateItem>
            </StyledHeader>
        </>
    );
};
