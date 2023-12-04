import { FormOutlined } from '@ant-design/icons'
import { Space, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
const { Title } = Typography
const Logo = () => {
  return (
    <div>
      <Link to={'/'}>
        <Space>
          <Title level={4}>
            <FormOutlined />
          </Title>
          <Title level={4}>问卷管理系统</Title>
        </Space>
      </Link>
    </div>
  )
}
export default Logo
