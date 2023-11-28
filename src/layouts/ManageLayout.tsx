import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './ManageLayout.module.scss'
import { Button, Space } from 'antd'
import { PlusOutlined, StarOutlined, MenuUnfoldOutlined, DeleteOutlined } from '@ant-design/icons'
const ManageLayout: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button type="primary" icon={<PlusOutlined />}>
            新建问卷
          </Button>
          <Button type="primary" icon={<MenuUnfoldOutlined />}>
            我的问卷
          </Button>
          <Button type="primary" icon={<StarOutlined />}>
            星标问卷统计
          </Button>
          <Button type="primary" icon={<DeleteOutlined />}>
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
