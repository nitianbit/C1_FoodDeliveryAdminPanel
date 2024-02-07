import React from 'react'
import OrderCard from "../OrderCard"

const Confirmed = () => {
  return (
      <div className='w-full grid md:grid-cols-1 lg:grid-cols-2  gap-4 overflow-y-auto'>
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
         
      </div> 
  )
}

export default Confirmed
