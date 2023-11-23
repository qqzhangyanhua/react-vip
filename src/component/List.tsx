import React, { FC, useState } from 'react'
import { produce } from 'immer'
import classNames from 'classnames'
import styles from './list.module.css'
import style2 from './list.module.scss'
const List: FC = () => {
  const [userInfo, setUserInfo] = useState({ name: 'sss', age: 11 }) // 1. 定义一个状态
  const handelClick = () => {
    setUserInfo({ name: 'sss', age: userInfo.age + 1 }) // 2. 更新状态
    setUserInfo(
      produce(draft => {
        draft.age++
      })
    )
  }
  const itemsClass = classNames({
    [styles['list-item']]: true,
    'list-item-active': true,
  })
  console.log('styles', itemsClass)

  return (
    <div className={itemsClass}>
      List{userInfo.age} <button onClick={handelClick}>按扭</button>
      <div className={style2['list-item']}>sddsd</div>
    </div>
  )
}
export default List
