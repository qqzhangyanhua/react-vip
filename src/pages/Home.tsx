import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import { useTitle } from 'ahooks'

const Home = () => {
  useTitle('首页')
  const nav = useNavigate()

  const handelLogin = () => {
    console.log('login')
    nav('/login')
  }
  return (
    <div>
      <p>home</p>
      <div>
        <Button onClick={handelLogin} type="primary">
          login
        </Button>
      </div>
    </div>
  )
}
export default Home
