import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import {FetchMyOrders} from "../../store/reducers/Actions";
import {StyledOrder} from "./StyledOrders";
import {TableComponent} from "../../components/Table";

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
            <TableComponent titles={["Акция", "Тип сделки", "Цена", "Количество", "Время"]} data={myOrders}/>
        </>
    )
        ;
};
