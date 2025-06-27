import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import './App.scss'
import { fetchFoodsList } from './store/modules/goods';
import FoodsCategory from './components/FoodsCategory';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Cart from './components/Cart';


function App() {
  const {foodsList,activeIndex} = useAppSelector(state => state.goods)
  const dispatch = useAppDispatch()

  //模拟数据请求
  useEffect(() => {
    dispatch(fetchFoodsList())
  }, [dispatch])
  
  return (
    <div className="home">
      {/* 导航 */}
      <NavBar />

      {/* 内容 */}
      <div className="content-wrap">
        <div className="content">
          <Menu />

          <div className="list-content">
            <div className="goods-list">
              {/* 外卖商品列表 */}
               {foodsList.map((item, index) => {
                return (
                  activeIndex === index && <FoodsCategory
                    key={index}
                    // 列表标题
                    name={item.name}
                    // 列表商品
                    foods={item.foods}
                  />
                )
              })} 
            </div>
          </div>
        </div>
      </div>

      {/* 购物车 */ }
      <Cart />
    </div>
  );
}

export default App;
