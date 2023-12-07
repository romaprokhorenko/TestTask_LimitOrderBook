import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { LoginPage } from "./pages/User/Login";
import { CreateOrderPage } from "./pages/Orders/CreateOrder";
import { DetailOrderPage } from "./pages/Orders/DetailOrder";
import { MyOrdersPage } from "./pages/Orders/MyOrders";
import { TransactionsPage } from "./pages/Transactions/Transactions";
import { Header } from "./pages/MainPage/Header";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/myorder" element={<MyOrdersPage />} />
          <Route path="/detailorder" element={<DetailOrderPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/create" element={<CreateOrderPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
