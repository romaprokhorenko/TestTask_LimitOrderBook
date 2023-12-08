import { combineReducers, configureStore } from "@reduxjs/toolkit";
import myOrdersSlice from "./reducers/slices/MyOrderSlice";

const rootReducer = combineReducers({
  myOrdersSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
