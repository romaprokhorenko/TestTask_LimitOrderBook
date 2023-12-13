import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import {FetchMyOrders} from "../../store/reducers/Actions";
import {StyledOrder} from "./StyledOrders";

export const MyOrdersPage: React.FC = ({}) => {
    const dispatch = useAppDispatch();

    const {myOrders, isLoading, error} = useAppSelector(
        (state) => state.myOrdersSlice,
    );

    useEffect(() => {
        dispatch(FetchMyOrders());
    }, []);
    return (
        <>
            {myOrders.map((order) => (
                <StyledOrder key={order.id}>
                    <div className="">{order.stock_name.name}</div>
                    <div className="">{order.order_type}</div>
                    <div className="">{order.price}</div>
                    <div className="">{order.quantity}</div>
                    <div className="">{order.time}</div>
                </StyledOrder>
            ))}
        </>
    )
        ;
};
