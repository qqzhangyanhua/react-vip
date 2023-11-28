import React, { FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTitle } from 'ahooks'
import { Button } from 'antd'
const Login: FC = () => {
  const [searchParams] = useSearchParams()
  useTitle('登录')
  console.log('searchParams', searchParams.get('redirectUrl'))

  return (
    <div>
      login <Button type="primary">登录</Button>
    </div>
  )
}
export default Login
