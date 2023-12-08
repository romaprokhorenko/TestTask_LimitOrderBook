import React, { useEffect, useState } from "react";
import "./Orders.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { FetchMyOrders } from "../../store/reducers/Actions";

export const MyOrdersPage: React.FC = ({}) => {
  const dispatch = useAppDispatch();

  const { myOrders, isLoading, error } = useAppSelector(
    (state) => state.myOrdersSlice,
  );

  useEffect(() => {
    dispatch(FetchMyOrders());
  }, [dispatch]);
  return (
    <>
      {myOrders.map((order) => (
        <div className="order" key={order.id}>
          <div className="">{order.stock_name.name}</div>
          <div className="">{order.order_type}</div>
          <div className="">{order.price}</div>
          <div className="">{order.quantity}</div>
          <div className="">{order.time}</div>
        </div>
      ))}
    </>
  );
};
