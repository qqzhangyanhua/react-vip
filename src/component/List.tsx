import React, { FC, useState } from 'react'
import { produce } from 'immer'
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
  return (
    <div>
      List{userInfo.age} <button onClick={handelClick}>按扭</button>
    </div>
  )
}
export default List
