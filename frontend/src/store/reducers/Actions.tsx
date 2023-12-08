import axios from "axios";
import { IOrders } from "../../models/models";
import { AppDispatch } from "../store";
import { myOrdersslice } from "./slices/MyOrderSlice";

export const FetchMyOrders = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(myOrdersslice.actions.myOrdersFething());
    const response = await axios.get<IOrders[]>(
      `http://127.0.0.1:8000/stocks/get_order/get_my_order/?username=${localStorage.getItem(
        "username",
      )}`,
    );
    dispatch(myOrdersslice.actions.myOrdersFethingSuccess(response.data));
  } catch (e) {
    dispatch(myOrdersslice.actions.myOrdersFethingError("ошибка"));
  }
};
