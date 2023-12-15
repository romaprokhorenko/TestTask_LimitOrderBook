import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";
import {LoginPage} from "./pages/User/Login";
import {CreateOrderPage} from "./pages/Orders/CreateOrder";
import {DetailOrderPage} from "./pages/Orders/DetailOrder";
import {MyOrdersPage} from "./pages/Orders/MyOrders";
import {TransactionsPage} from "./pages/Transactions/Transactions";
import {Header} from "./pages/MainPage/Header";
import styled from "styled-components";
import {Footer} from "./pages/Footer/Footer";
import {LiftToTopComponent} from "./components/LiftToTop";
import {RegistrationPage} from "./pages/User/Registration";

const StyledContent = styled.div`
    padding: 10%;
`
const StyledVoid = styled.div``

function App() {
    return (
        <div className="App">
            <StyledVoid>
                <Header/>
                <LiftToTopComponent />
            </StyledVoid>
            <StyledContent>
                <Routes>
                    <Route path="/main" element={<MainPage/>}/>
                    <Route path="/myorder" element={<MyOrdersPage/>}/>
                    <Route path="/detailorder" element={<DetailOrderPage/>}/>
                    <Route path="/transactions" element={<TransactionsPage/>}/>
                    <Route path="/create" element={<CreateOrderPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/registration" element={<RegistrationPage/>}/>
                </Routes>
            </StyledContent>
            <StyledVoid/>
            <Footer/>
        </div>
    );
}

export default App;
