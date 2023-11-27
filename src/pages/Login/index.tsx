import React, { FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTitle } from 'ahooks'
const Login: FC = () => {
  const [searchParams] = useSearchParams()
  useTitle('登录')
  console.log('searchParams', searchParams.get('redirectUrl'))

  return <div>login</div>
}
export default Login
