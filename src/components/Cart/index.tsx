import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getClassName, roundToTwoDecimalPlaces } from '../../utils/tools'
import './index.scss'
import Count from '../Count'
import { clearCart, decrementCart, incrementCart } from '../../store/modules/goods'

const Cart = () => {
  const { cartList } = useAppSelector(state => state.goods)
  const dispatch = useAppDispatch()
  // 起送费
  const MAXMONEY = 20
  // 当前总金额
  const countMoney = cartList.reduce((money, goods) => roundToTwoDecimalPlaces(money, goods.count * goods.price), 0)
  const count = cartList.reduce((num, goods) => num + goods.count, 0)
  const [isVisible, setVisible] = useState(false)
  const onShow = (status?: boolean) => {
    if (typeof status === 'boolean') {
      setVisible(status)
    } else {
      setVisible(!isVisible)
    }
  }

  return (
    <div className="cartContainer">
      {/* 遮罩层 添加visible类名可以显示出来 */}
      <div
        onClick={() => onShow(false)}
        className={getClassName('cartOverlay', isVisible ? 'visible' : '')}
      >
      </div>
      <div
        className="cart"
        onClick={() => onShow()}>
        {/* fill 添加fill类名可以切换购物车状态*/}
        {/* 购物车数量  */}
        <div className={getClassName('icon', count > 0 ? 'fill': "")}>
          {<div className="cartCornerMark">{count}</div>}
        </div>
        {/*  购物车价格 */}
        <div className="main">
          <div className="price">
            <span className="payableAmount">
              <span className="payableAmountUnit">¥</span>
              {countMoney}
            </span>
          </div>
          <span className="text">预估另需配送费 ¥5</span>
        </div>
        {/*  结算 or 起送  */}
        {countMoney > MAXMONEY ? (
          <div className="goToPreview">去结算</div>
        ) : (
          <div className="minFee">¥{MAXMONEY - countMoney}起送</div>
        )}
      </div>
      {/* 添加visible类名 div会显示出来 */}
      <div className={getClassName('cartPanel', isVisible ? 'visible' : '')}>
        <div className="header">
          <span className="text">购物车</span>
          <span className="clearCart" onClick={() => { dispatch(clearCart()) }}>
            清空购物车
          </span>
        </div>

        {/* 购物车列表 */}
        <div className="scrollArea">
          {cartList.map(item => {
            return (
              <div className="cartItem" key={item.id}>
                <img className="shopPic" src={item.picture} alt="" />
                <div className="main">
                  <div className="skuInfo">
                    <div className="name">{item.name}</div>
                  </div>
                  <div className="payableAmount">
                    <span className="yuan">¥</span>
                    <span className="price">{item.price}</span>
                  </div>
                </div>
                <div className="skuBtnWrapper btnGroup">
                  <Count
                    onPlus={() => {
                      dispatch(incrementCart({
                        id: item.id
                      }))
                    }}
                    onMinus={() => {
                      dispatch(decrementCart({
                        id: item.id
                      }))
                    }}
                    count={item.count}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart
