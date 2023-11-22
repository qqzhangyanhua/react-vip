import React, { useState } from 'react'
import type { MouseEvent } from 'react'
import List from './component/List'
import './App.css'
import Demo from './component/Demo'
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
      <button onClick={handelClick}>按扭{count}</button>
      <h2>{name}</h2>
      <Demo />
      <List />
    </div>
  )
}

export default App
