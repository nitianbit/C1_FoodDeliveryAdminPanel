import { useEffect, useState } from "react"
import DashboardSingleItem from "../components/DashboardSingleItem"
import { USER } from "../utils/constants"
import { doGET } from "../utils/httpUtil"

const items = [
  { color: "bg-blue-300", title: "Total Place Order", number: 7, src: "/shop.png" },
  { color: "bg-pink-300", title: "Total Product Brands", number: 2, src: "/brand.png" },
  { color: "bg-lime-300", title: "Total Product Detail", number: 1817, src: "/package-delivery.png" },
  { color: "bg-cyan-300", title: "User Registrations", number: 5891, src: "/man.png" },
  { color: "bg-purple-300", title: "Product Catagories", number: 7, src: "/shop.png" },
  { color: "bg-yellow-300", title: "Total Email Subscribed", number: 123, src: "/subscribe.png" },
  { color: "bg-indigo-300", title: "Total Enquiry", number: 11025, src: "/questions.png" },
]


const Dashboard = () => {

  const [data, setData] = useState();

  const getData = async () => {
    try {
      const response = await doGET(USER?.DASHBOARD);

      if (response?.data?.status == 200) {
        setData(response?.data?.data)
      }
    } catch (error) {

    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <div className='space-y-6 mt-6'>
        <div className='flex items-center justify-between' >
          <h1 className='text-4xl font-bold tracking-wide'>Dashboard</h1>
          
        </div>
        
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
          <DashboardSingleItem color="bg-blue-300" title="Total Orders This Month" number={data?.totalOrders} src="/package-delivery.png"/>
          <DashboardSingleItem color="bg-green-300" title="Total Menu Items" number={data?.totalMenuItems} src="shop.png"/>
          {/* {
            items.map((item, id) => (
              <div key={id}>
                <DashboardSingleItem color={item.color} title={item.title} number={item.number} src={item.src} />
              </div>
            ))
          } */}

        </div>
      </div>
    </div>
  )
}

export default Dashboard
