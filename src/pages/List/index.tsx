import React, { useState } from 'react'
import style from './index.module.scss'
import QuestionCard from '../../component/QuestionCard'
import { Button } from 'antd'
const List = () => {
  const [list, setList] = useState([
    { id: 1, title: '问卷1', isStar: false },
    { id: 2, title: '问卷2', isStar: false },
    { id: 3, title: '问卷3', isStar: false },
    { id: 4, title: '问卷4', isStar: false },
    { id: 5, title: '问卷5', isStar: false },
    { id: 6, title: '问卷6', isStar: false },
  ])
  const handelClick = () => {
    setList(
      list.map(item => {
        if (item.id === 1) {
          return {
            ...item,
            isStar: !item.isStar,
          }
        }
        return item
      })
    )
  }
  return (
    <>
      <div className={style['list-item']}>List2222222</div>
      {list.map(item => (
        <div className={style['list-item']} key={item.id}>
          {item.title}
          <Button type="primary" onClick={handelClick}>
            按扭
          </Button>
        </div>
      ))}
      <QuestionCard />
    </>
  )
}
export default List
