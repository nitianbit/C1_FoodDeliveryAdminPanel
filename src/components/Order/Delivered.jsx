import React from 'react'
import OrderCard from "../OrderCard"

const Delivered = ({ updateOrder, orderDetails, status }) => {
  return (
    <div className='w-full grid md:grid-cols-1 lg:grid-cols-2  gap-4 overflow-y-auto'>
      {orderDetails?.map((item, indx) => {
        return <OrderCard updateOrder={updateOrder} item={item} status={status} orderId={item?._id} />
      })}
    </div>
  )
}

export default Delivered
