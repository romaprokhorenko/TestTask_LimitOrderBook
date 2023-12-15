import axios from "axios";
import React, {useEffect, useState} from "react";
import {
    StyledButtonWrapper,
    StyledDatalist,
    StyledFormBlock,
    StyledFormCreateOrder,
    StyledInput,
    StyledLabel, StyledMessageBox,
    StyledOption, StyledSendButton
} from "./StyledOrders";
import {StyledNewsLabel, StyledNewsText} from "../MainPage/StyledMainPage";

const createOrder = () => {
    const url =
        "http://127.0.0.1:8000/stocks/create_order/create_order_by_user/";
    const username = localStorage.getItem("username");
    const stock_name = (
        document.getElementById("stock_name") as HTMLInputElement
    )?.value;
    const order_type = (
        document.getElementById("order_type") as HTMLInputElement
    )?.value;
    const price = (document.getElementById("price") as HTMLInputElement)?.value;
    const quantity = (document.getElementById("quantity") as HTMLInputElement)
        ?.value;

    // axios
    //     .post(url, {
    //         username: username,
    //         stock_name: stock_name,
    //         order_type: order_type,
    //         price: price,
    //         quantity: quantity,
    //     })
    //     .then((response) => {
    //         console.log(response.data);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
};

export const CreateOrderPage: React.FC = ({}) => {
    // const [stockNames, setStockNames] = useState([])
    // useEffect(() => {
    //     axios.get("get_all_stocks").then(response => {
    //         setStockNames(response.data)
    //     })
    // }, []);
    return (
        <>
            <StyledMessageBox>
                <StyledNewsLabel>Предупреждаем!</StyledNewsLabel>
                <StyledNewsText>
                    Предупреждаем о том, что вы сами несете ответственность за свои акции и деньги. В случае их потери
                    мы не несем ответственности за это. Предупреждаем о том, что вы сами несете ответственность за свои
                    акции и деньги. В случае их потери мы не несем ответственности за это. Предупреждаем о том, что вы
                    сами несете ответственность за свои акции и деньги. В случае их потери мы не несем ответственности
                    за это. Предупреждаем о том, что вы сами несете ответственность за свои акции и деньги. В случае их
                    потери мы не несем ответственности за это. Предупреждаем о том, что вы сами несете ответственность
                    за свои акции и деньги. В случае их потери мы не несем ответственности за это.
                </StyledNewsText>
            </StyledMessageBox>

            <StyledFormCreateOrder>

                <StyledFormBlock>
                    <StyledLabel>Выберите акцию</StyledLabel>
                    <StyledInput list={"stock_name_datalist"} id={"stock_name"}/>
                    <StyledDatalist id={"stock_name_datalist"}>
                        {/*{stockNames.map(stock => {*/}
                        {/*    <StyledOption value={stock.name}/>*/}
                        {/*})}*/}
                        <StyledOption value={"AAPL"}/>
                        <StyledOption value={"USDT"}/>
                        <StyledOption value={"AMD"}/>
                        <StyledOption value={"INTEL"}/>
                    </StyledDatalist>
                </StyledFormBlock>

                <StyledFormBlock>
                    <StyledLabel>Выберите тип заказа</StyledLabel>
                    <StyledInput list={"order_type_datalist"} id={"order_type"}/>
                    <StyledDatalist id={"order_type_datalist"}>
                        <StyledOption value={"Покупка"}/>
                        <StyledOption value={"Продажа"}/>
                    </StyledDatalist>
                </StyledFormBlock>

                <StyledFormBlock>
                    <StyledLabel>Укажите цену за акцию</StyledLabel>
                    <StyledInput id={"price"}/>
                </StyledFormBlock>

                <StyledFormBlock>
                    <StyledLabel>Укажите количество акций</StyledLabel>
                    <StyledInput id={"quantity"}/>
                </StyledFormBlock>

                <StyledButtonWrapper>
                    <StyledSendButton onClick={createOrder}>Создать заказ</StyledSendButton>
                </StyledButtonWrapper>

            </StyledFormCreateOrder>

        </>
    );
};
