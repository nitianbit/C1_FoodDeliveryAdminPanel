import { Avatar, Button, Card } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import moment from 'moment/moment'

const OrderCard = ({ item, updateOrder, status }) => {
  const formatDateTime = (timestamp) => {
    return moment(timestamp * 1000).format('YYYY-MM-DD HH:mm:ss a');
  }
  const [changeStatus, setChangeStatus] = useState('')

  useEffect(() => {
    setChangeStatus(
      status === "Pending" ? "Confirm" : (status === "Confirm" ? "Delivered" : "Complete")
    );
  }, [status]);

  return (
    <Card
      className='shadow-lg bg-white border border-gray-900 p-4 space-y-1 min-w-[300px] text-sm'
      shadow={false}
    >
      <div className='flex items-center justify-between' shadow={false}>
        <div className=''>
          <span className='font-bold'>OrderId : </span>
          <span>123456</span>
        </div>
        <div className='text-xs'>
          <span className='font-bold'>Order Date : </span>
          <span>{item?.time ? formatDateTime(item?.time) : ""}</span>
        </div>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <div className='flex-1  flex items-center gap-2'>
          <div className="flex items-center ">
            <Avatar
              variant="circular"
              alt="user 1"
              className=" hover:z-10 focus:z-10"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
          </div>
          <div>
            {item?.name}
          </div>
        </div>
        <div className='flex items-center justify-end'>
          <div>
            <span className='font-bold'>Payment Mode : </span>
            <span>{item?.status}</span>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between' shadow={false}>
        <div>
          <span className='font-bold'>Price : </span>
          <span> Rs {item?.totalAmount}</span>
        </div>
        <div className="flex items-center gap-4">
          {/* <NavLink href="#">
            <Button variant="outlined" size='sm' color='orange'>Reject</Button>
          </NavLink> */}
          <NavLink href="#">
            <Button variant="outlined" size='sm' color='green' onClick={() => {
              updateOrder(item?._id, changeStatus)
            }}>{changeStatus}</Button>
          </NavLink>
        </div>
      </div>
    </Card>
  )
}

export default OrderCard
