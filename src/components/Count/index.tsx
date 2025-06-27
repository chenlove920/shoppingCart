import { countType } from '../../types/goodsType'
import './index.scss'

const Count = (
  props: countType
) => {
  const {onPlus, onMinus,count} = props
  return (
    <div className="goods-count">
      <span className="minus" onClick={()=>onMinus()}>-</span>
      <span className="count">{count}</span>
      <span className="plus" onClick={()=>onPlus()}>+</span>
    </div>
  )
}

export default Count
