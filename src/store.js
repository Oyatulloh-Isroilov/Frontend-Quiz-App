import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./slices/homeSlice";
import quizReducer from "./slices/quizSlice";

const store = configureStore({
  reducer: {
    home: homeReducer,
    quiz: quizReducer,
  },
});

export default store;
