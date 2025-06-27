import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../../store";
import { goodsStoreType } from '../../types/goodsType'

const goodsStore = createSlice({
    name: 'foods',
    initialState: {
        // 商品列表
        foodsList: [],
        // 当前激活标签
        activeIndex: 0,
        cartList: []
    } as goodsStoreType,
    reducers: {
        // 请求数据获取列表项
        setFoodsList(state, action) {
            state.foodsList = action.payload
        },
        changeActiveIndex(state, action) {
            state.activeIndex = action.payload
        },
        addCart(state, action) {
            const item = state.cartList.find(item => item.id === action.payload.id)
            if (item) {
                item.count++
            } else {
                state.cartList.push(action.payload)
            }
        },
        clearCart(state) {
            state.cartList.splice(0, state.cartList.length)
        },
        incrementCart(state, action) {
            const item = state.cartList.find(item => item.id === action.payload.id)
            item && item.count++
        },
        decrementCart(state, action) {
            const item = state.cartList.find(item => item.id === action.payload.id)
            const itemIndex = state.cartList.findIndex(item => item.id === action.payload.id)
            if (item) {
                item.count--
                if (item.count <= 0) {
                    state.cartList.splice(itemIndex, 1)
                }
            }
            
        }

    }
})


const { setFoodsList, changeActiveIndex, addCart, clearCart, incrementCart, decrementCart } = goodsStore.actions
// 异步请求
const fetchFoodsList = () => {
    return async (dispatch: AppDispatch) => {
        const res = await fetch("http://localhost:3004/goods")
        await res.json().then((res) => {
            dispatch(setFoodsList(res))
        })
    }
}


export { fetchFoodsList, changeActiveIndex, addCart, clearCart, incrementCart, decrementCart }

export default goodsStore.reducer