import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const testRedux = createSlice({
    name: 'testRedux',
    // 初始状态数据
    initialState: {
        count: 0
    },
    // 修改数据方法
    reducers: {
        increment (state, action:PayloadAction<number>) {
            state.count += action.payload
        },
        decrement (state, action:PayloadAction<number>) {
            state.count -= action.payload
        }
    }
})

// 解构action函数
const {increment, decrement} = testRedux.actions

// 获取reducer
const testReduxReducer = testRedux.reducer


// 导出
export  {increment, decrement}
export default testReduxReducer
