import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Забираем нужные нам интерфейсы
import { IOrders } from "../../../models/models";

// Прописываем начальный стейт. Он почти у всех одинаковый. Разница лишь в myItems
interface myOrdersState {
  myOrders: IOrders[];
  isLoading: boolean;
  error: string;
}

// Инициализация служит для задания начальных значений
const initialState: myOrdersState = {
  myOrders: [],
  isLoading: false,
  error: "",
};

// Создание самого слайса\редьюсера. Каждая функция нужна для обработки того или
// иного действия. Все эти конструкции просто повторяем - в этом суть redux
export const myOrdersslice = createSlice({
  name: "myOrders",
  initialState,
  reducers: {
    myOrdersFething(state) {
      state.isLoading = true;
    },
    myOrdersFethingSuccess(state, action: PayloadAction<IOrders[]>) {
      state.isLoading = false;
      state.error = "";
      state.myOrders = action.payload;
    },
    myOrdersFethingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// По итогу отдается редьюсер на экспорт. Этот reducer и попадает в store.
export default myOrdersslice.reducer;
