import React from "react";
import {NavLink} from "react-router-dom";
import {StyledHeader} from "./StyledMainPage";

export const Header: React.FC = ({}) => {
    return (
        <>
            <StyledHeader>
                <NavLink to={"/main"}>
                    <div className="link">Main</div>
                </NavLink>
                <NavLink to={"/myorder"}>
                    <div className="link">My orders</div>
                </NavLink>
                <NavLink to={"/transactions"}>
                    <div className="link">My transactions</div>
                </NavLink>
                <NavLink to={"/create"}>
                    <div className="link">Create Order</div>
                </NavLink>
                <NavLink to={"/login"}>
                    <div className="link">Profile</div>
                </NavLink>
            </StyledHeader>
        </>
    );
};
