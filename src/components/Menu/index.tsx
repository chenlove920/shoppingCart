import './index.scss'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { changeActiveIndex } from '../../store/modules/goods'
import { getClassName } from '../../utils/tools'

const Menu = () => {
  const { foodsList, activeIndex } = useAppSelector(state => state.goods)
  const dispatch = useAppDispatch()
  const menus = foodsList.map(item => ({ tag: item.tag, name: item.name }))
  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            onClick={() => dispatch(changeActiveIndex(index))}
            key={item.tag}
            className={getClassName(
              'list-menu-item',
              activeIndex === index ? 'active' : ""
            )}
          >
            {item.name}
          </div>
        )
      })}
    </nav>
  )
}

export default Menu
