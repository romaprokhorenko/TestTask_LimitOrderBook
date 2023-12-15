import React from "react";
import styled from "styled-components";
import {Colors} from "../Colors";

const StyledLiftButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 100px;
    border: none;
    background-color: ${Colors.White};
    position: fixed;
    margin-left: 5%;
    margin-top: 20%;

`

export const LiftToTopComponent: React.FC = () => {
    return (
        <>
            <a href={"#header"}><StyledLiftButton>Top</StyledLiftButton></a>
        </>
    )
}