import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import Pending from "../../components/Order/Pending";
import Confirmed from "../../components/Order/Confirmed";
import Delievered from "../../components/Order/Delievered";
import { TiTick } from "react-icons/ti";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdPendingActions } from "react-icons/md";

const Orders = () => {
  const data = [
    {
      label: "Pending",
      value: "pending",
      icon: MdPendingActions,
      desc: <Pending />
    },
    {
      label: "Confirm",
      value: "confirm",
      icon: TiTick,
      desc: <Confirmed />
    },
    {
      label: "Delievered",
      value: "delievered",
      icon: CiDeliveryTruck,
      desc: <Delievered />
    },
  ]


  return (
    <Tabs value="pending" className="mt-7 h-[82vh]">
      <TabsHeader className="flex items-center justify-between">
        <h1 className='text-3xl font-bold tracking-wide'>Orders Detail</h1>

        <div className="flex items-center gap-1">
          {data.map(({ label, value, icon }) => (
            <Tab key={value} value={value} className="">
              <div className="flex items-center gap-2">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </div>
      </TabsHeader>
      <TabsBody className="h-[78vh] overflow-y-auto">
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  )
}

export default Orders
