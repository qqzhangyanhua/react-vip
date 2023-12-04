import React, { FC, useState } from 'react'
import { Input } from 'antd'
const { Search } = Input
const ListSearch: FC = () => {
  const [value, setValue] = useState('')
  const handelSearch = (value: string) => {
    console.log(value)
  }
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <Search
      placeholder="input search text"
      onChange={handelChange}
      onSearch={handelSearch}
      enterButton
      value={value}
      style={{ width: 200 }}
    />
  )
}

export default ListSearch
