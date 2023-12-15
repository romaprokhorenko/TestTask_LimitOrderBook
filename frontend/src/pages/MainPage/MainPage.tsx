import React from "react";
import {
    StyledDate,
    StyledNewsCard,
    StyledNewsLabel, StyledNewsLabelWrapper, StyledNewsList,
    StyledNewsText,
    StyledNewsWriter
} from "./StyledMainPage";
import {NavLink} from "react-router-dom";

export const MainPage: React.FC = ({}) => {
    return (
        <>
            <StyledNewsList>
                <NavLink to={"#"}>
                    <StyledNewsCard>
                        <StyledNewsLabelWrapper>
                            <StyledNewsLabel>10 признаков машенников в интернете</StyledNewsLabel>
                            <StyledNewsWriter>
                                <img src={"./img.png"}/> Юрка Юрок <StyledDate>15.06.2023</StyledDate>
                            </StyledNewsWriter>
                        </StyledNewsLabelWrapper>
                        <StyledNewsText>
                            Как я борюсь со страхом нарушения работы сердца Как я борюсь со страхом нарушения работы
                            сердца
                            Как я борюсь со страхом нарушения работы сердца
                        </StyledNewsText>
                    </StyledNewsCard>
                </NavLink>

                <NavLink to={"#"}>
                    <StyledNewsCard>
                        <StyledNewsLabelWrapper>
                            <StyledNewsLabel>10 признаков машенников в интернете</StyledNewsLabel>
                            <StyledNewsWriter>
                                <img src={"./img.png"}/> Юрка Юрок <StyledDate>15.06.2023</StyledDate>
                            </StyledNewsWriter>
                        </StyledNewsLabelWrapper>
                        <StyledNewsText>
                            Как я борюсь со страхом нарушения работы сердца Как я борюсь со страхом нарушения работы
                            сердца
                            Как я борюсь со страхом нарушения работы сердца
                        </StyledNewsText>
                    </StyledNewsCard>
                </NavLink>


            </StyledNewsList>
        </>
)
};
