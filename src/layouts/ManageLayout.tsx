import React, { FC } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import styles from './ManageLayout.module.scss'
import { Button, Space } from 'antd'
import { PlusOutlined, StarOutlined, MenuUnfoldOutlined, DeleteOutlined } from '@ant-design/icons'
const ManageLayout: FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button
            type={pathname.startsWith('/manage/question') ? 'primary' : 'default'}
            icon={<PlusOutlined />}
          >
            新建问卷
          </Button>
          <Button
            type={pathname.startsWith('/manage/list') ? 'primary' : 'default'}
            icon={<MenuUnfoldOutlined />}
            onClick={() => nav('/manage/list')}
          >
            我的问卷
          </Button>
          <Button
            type={pathname.startsWith('/manage/star') ? 'primary' : 'default'}
            icon={<StarOutlined />}
            onClick={() => nav('/manage/star')}
          >
            星标问卷统计
          </Button>
          <Button
            type={pathname.startsWith('/manage/trash') ? 'primary' : 'default'}
            icon={<DeleteOutlined />}
            onClick={() => nav('/manage/trash')}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  )
}
export default ManageLayout
