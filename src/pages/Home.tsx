import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from 'antd'
import { useTitle } from 'ahooks'
const { Title, Paragraph } = Typography
import styles from './Home.module.scss'
const Home = () => {
  useTitle('首页')
  const nav = useNavigate()

  const handelLogin = () => {
    nav('/manage/list')
  }
  return (
    <div className={styles.container}>
      <Title>问卷管理系统</Title>
      <Title level={2}>欢迎使用问卷管理系统</Title>
      <Paragraph>已创建问卷100份，未发布问卷50份，共收集到回收问卷50份</Paragraph>
      <div>
        <Button onClick={handelLogin} type="primary">
          开始使用
        </Button>
      </div>
    </div>
  )
}
export default Home
