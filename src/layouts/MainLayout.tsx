import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import styles from './MainLayout.module.scss'
import Logo from '../component/Logo'
import UserInfo from '../component/UserInfo'
const { Header, Footer, Content } = Layout

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
}

const MainLayout: FC = () => {
  return (
    <>
      <Layout>
        <Header style={headerStyle} className={styles.header}>
          <div className={styles.left}>
            <Logo />
          </div>
          <div className={styles.right}>
            <UserInfo />
          </div>
        </Header>
        <Content className={styles.main}>
          {' '}
          <Outlet />
        </Content>
        <Footer className={styles.footer}>Footer</Footer>
      </Layout>
    </>
  )
}
export default MainLayout
