import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
const ManageLayout: FC = () => {
  return (
    <>
      <div>ManageLayout left</div>
      <div>
        <Outlet />
      </div>
      <div>footer</div>
    </>
  )
}
export default ManageLayout
