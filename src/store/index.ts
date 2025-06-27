import { configureStore } from "@reduxjs/toolkit";
import testReduxReducer from "./modules/testRedux";
import goodsReducre  from "./modules/goods"

// 创建根store组合子模块
const store = configureStore({
    reducer: {
        testRedux: testReduxReducer,
        goods: goodsReducre
    }
})

export default store


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store