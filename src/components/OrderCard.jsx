import { Avatar, Button, Card } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import moment from 'moment/moment'

const OrderCard = ({ item, status, orderId }) => {
  const navigate = useNavigate()
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
      className='shadow-lg bg-white border border-gray-900 p-4 space-y-1 min-w-[300px] text-sm cursor-pointer'
      shadow={false}
      onClick={() => navigate(`${orderId}`)}
    >
      <div className='flex items-center justify-between' shadow={false}>
        <div className=''>
          <span className='font-bold'>Name : </span>
          <span>{item?.name}</span>
        </div>
        <div className='text-xs'>
          <span className='font-bold'>Order Date : </span>
          <span>{item?.time ? formatDateTime(item?.time) : ""}</span>
        </div>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <div className='flex-1  flex items-center gap-2'>
          {/* <div className="flex items-center ">
            <span className='font-bold'>Items : </span>
            {item?.items?.map((menuItems, i) => {
              return <span>
                {menuItems?.name ? menuItems?.name : ""} : {menuItems?.quantity ? menuItems?.quantity : 0}
              </span>
            })}

          </div> */}

        </div>

        <div className='flex items-center justify-end'>
          <div>
            <span className='font-bold'>Payment Status : </span>
            <span >{item?.status == "Pending" ? "Pending" : "Completed"}</span>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between' shadow={false}>
        <div>
          <span className='font-bold'>Price : </span>
          <span> Rs {item?.totalAmount}</span>
        </div>
        <div className={`${item?.status === "Pending" ? "bg-red-50" :(item?.status === "Confirm" ? "bg-green-50" : "bg-blue-50")} rounded-lg shadow-md text-black flex items-center gap-4 py-1 px-2`}>
          <span className='font-bold'>Status : </span>
          <span>{item?.status}</span>
        </div>
      </div>
    </Card>
  )
}

export default OrderCard
