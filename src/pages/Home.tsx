import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const nav = useNavigate()

  const handelLogin = () => {
    console.log('login')
    nav('/login')
  }
  return (
    <div>
      <p>home</p>
      <div>
        <button onClick={handelLogin}>login</button>
      </div>
    </div>
  )
}
export default Home
