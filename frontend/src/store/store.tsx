import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import mySliceReducer from './reducers/slices/MySlice'

const rootReducer = combineReducers({
  // mySliceReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
