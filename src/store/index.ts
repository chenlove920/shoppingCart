import { configureStore } from "@reduxjs/toolkit";
import testReduxReducer from "./modules/testRedux";

// 创建根store组合子模块
const store = configureStore({
    reducer: {
        testRedux: testReduxReducer
    }
})

export default store


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store