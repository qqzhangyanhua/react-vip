import React, { useState, FC } from 'react'

const Demo: FC = () => {
  const [count, setCount] = useState(0)
  const handelClick = () => {
    //  使用函数更新状态
    setCount(count => count + 1)
    setCount(count => count + 1)

    console.log('点击了', count)
  }
  return (
    <div className="demo" onClick={handelClick}>
      demo {count}
    </div>
  )
}
export default Demo
