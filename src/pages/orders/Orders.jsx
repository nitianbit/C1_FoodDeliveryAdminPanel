import React, { useEffect, useRef, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import Pending from "../../components/Order/Pending";
import Confirmed from "../../components/Order/Confirmed";
import { TiTick } from "react-icons/ti";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdPendingActions } from "react-icons/md";
import { ORDER_ENDPOINTS } from "../../utils/constants";
import { doGET, doPUT } from "../../utils/httpUtil";
import { useUserContext } from "../../context/UserContext";
import Delivered from "../../components/Order/Delivered";


// const data = [
//   {
//     label: "Pending",
//     value: "pending",
//     icon: MdPendingActions,
//     desc: <Pending orderDetails={orderDetails} updateOrder={updateOrder} status={status} onSuccess={getAllOrders} />
//   },
//   {
//     label: "Confirm",
//     value: "confirm",
//     icon: TiTick,
//     desc: <Confirmed orderDetails={orderDetails} updateOrder={updateOrder} status={status} onSuccess={getAllOrders} />
//   },
//   {
//     label: "Delivered",
//     value: "delivered",
//     icon: CiDeliveryTruck,
//     desc: <Delivered orderDetails={orderDetails} updateOrder={updateOrder} status={status} onSuccess={getAllOrders} />
//   },
// ]

const data = [
  {
    label: "Pending",
    value: "pending",
    icon: MdPendingActions,
    Component: Pending
  },
  {
    label: "Confirm",
    value: "confirm",
    icon: TiTick,
    Component: Confirmed
  },
  {
    label: "Delivered",
    value: "delivered",
    icon: CiDeliveryTruck,
    Component: Delivered
  },
]

const Orders = () => {
  const [orderDetails, setOrderDetails] = useState([])

  const intervalId = useRef(null)

  const [status, setStatus] = useState('Pending')
  const { success, error } = useUserContext()


  const getAllOrders = async (filterUrl = "") => {
    try {
      const response = await doGET(`${ORDER_ENDPOINTS.GET_ALL(status)}${filterUrl}`);
      if (response?.data?.status == 200) {
        setOrderDetails(response?.data?.data)
      }
    } catch (error) { }
  };



  // const updateOrder = async (id, orderStatus) => {
  //   try {
  //     let response = await doPUT(ORDER_ENDPOINTS.UPDATE(id), { status: orderStatus });

  //     if (response?.data?.status >= 400) {
  //       return error(response?.data?.message)
  //     }

  //     if (response?.data?.status == 200) {
  //       getAllOrders()
  //       return success(response?.data?.message)
  //     }

  //   } catch (error) { }
  // };


  useEffect(() => {
    if (status) {
      getAllOrders()

      if (status == 'Pending') {
        startInterval()
      } else {
        clearIntervalFunc()
      }
    }

  }, [status])


  const startInterval = () => {
    if (intervalId.current) return
    intervalId.current = setInterval(() => {
      getAllOrders()
    }, 5000 * 60);
  }

  const clearIntervalFunc = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current)
      intervalId.current = null
    }
  }

  useEffect(() => {
    return () => {
      clearIntervalFunc()
    }
  }, [])



  return (
    <Tabs value="pending" className="mt-7 h-[82vh]">
      <TabsHeader className="flex flex-col text-center md:flex-row md:items-center justify-between">
        <h1 className='text-3xl font-bold tracking-wide'>Order Details</h1>
        <div className="flex items-center gap-1">
          {data.map(({ label, value, icon }) => (
            <Tab key={value} value={value} className="" onClick={() => setStatus(label)}>
              <div className="flex items-center gap-2">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </div>
      </TabsHeader >
      <TabsBody className="h-[78vh] overflow-y-auto">
        {data.map(({ value, Component }) => (
          <TabPanel key={value} value={value}>
            {<Component orderDetails={orderDetails} status={status} onSuccess={(e) => {
              getAllOrders(e)
            }} />}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  )
}

export default Orders
