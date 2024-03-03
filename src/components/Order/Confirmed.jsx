import React from 'react'
import OrderCard from "../OrderCard"
import DatePicker from "../DatePicker"

const Confirmed = ({ updateOrder, orderDetails, status }) => {
  return (
    <div className='w-full'>
      <div className="w-full mb-3">
        <DatePicker />
      </div>
      <div className='w-full grid lg:grid-cols-2 xl:grid-cols-3 overflow-y-auto gap-5'>
        {orderDetails?.map((item, indx) => {
          return <OrderCard updateOrder={updateOrder} item={item} status={status} orderId={item?._id} />
        })}
      </div>
    </div>
  )
}

export default Confirmed
