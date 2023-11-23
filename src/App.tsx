import React, { useState } from 'react'
import type { MouseEvent } from 'react'
import './App.css'
import Demo from './component/Demo'
import Home from './pages/Home'
import List from './pages/List'
function App() {
  const [count, setCount] = React.useState(0)
  const [name, setName] = useState('张三')
  const handelClick = (e: MouseEvent) => {
    console.log('点击了', e)
    setCount(count + 1)
    setName('李四' + count)
  }
  return (
    <div className="App">
      <Home />
      <button onClick={handelClick}>按扭{count}</button>
      <h2>{name}</h2>
      <Demo />
      <List />
    </div>
  )
}

export default App
