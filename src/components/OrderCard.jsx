import { Card, CardBody, Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment/moment'

const OrderCard = ({ item, status, orderId }) => {
    const navigate = useNavigate()
    const formatDateTime = (timestamp) => {
        if (timestamp.toString().length > 10) {
            return moment.unix(timestamp / 1000).format('YYYY-MM-DD HH:mm:ss a');
        } else {
            return moment.unix(timestamp).format('YYYY-MM-DD HH:mm:ss a');
        }
    }
    const [changeStatus, setChangeStatus] = useState('')
    const [totalGST, setTotalGST] = useState(0)

    useEffect(() => {
        setChangeStatus(
            status === "Pending" ? "Confirm" : (status === "Confirm" ? "Delivered" : "Complete")
        );
    }, [status]);

    useEffect(() => {
        // const totalPriceFunc = () => currentOrder?.items?.reduce((total, curr) => total + curr.quantity * curr.price, 0);
        const totalGSTFunc = () => item?.items?.reduce((total, curr) => total + (curr.quantity * curr.price * (curr?.gst ?? 0) / 100), 0);
        // setGrandTotalPrice(totalPriceFunc())
        setTotalGST(totalGSTFunc())
    }, [])
    return (
        <>
            {/* <Card
                className='shadow-lg bg-white border border-gray-400 p-4 space-y-6 min-w-[300px] text-sm cursor-pointer'
                shadow={false}
                onClick={() => navigate(`${orderId}`)}
            >

                <div className='flex items-center justify-between' shadow={false}>
                    <div>
                        <span className='font-bold text-black'>Payment Status : </span>
                        <span >{item?.status == "Pending" ? "Pending" : "Completed"}</span>
                    </div>
                    <div className='text-xs'>
                        <span className='font-bold text-black'>Order Date : </span>
                        <span>{item?.time ? formatDateTime(item?.time) : ""}</span>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-4'>
                    <div className='flex-1  flex items-center gap-2'>

                        <div className=''>
                            <span className='font-bold text-black'>Name : </span>
                            <span>{item?.name}</span>
                        </div>

                    </div>

                    <div className='flex items-center justify-end'>
                        <div className=''>
                            <span className='font-bold text-black'>Mobile :  </span>
                            <span>{item?.phoneNo}</span>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between' shadow={false}>
                    <div className={`${item?.status === "Pending" ? "bg-red-50" : (item?.status === "Confirm" ? "bg-green-50" : "bg-blue-50")} rounded-lg shadow-md text-black flex items-center gap-4 py-1 px-2`}>
                        <span className='font-bold text-black'>Status : </span>
                        <span>{item?.status}</span>
                    </div>
                    <div>
                        <span className='font-bold text-black'>Price : </span>
                        <span> Rs {item?.totalAmount}</span>
                    </div>
                </div>
            </Card> */}
            <Card
                className="max-w-md cursor-pointer border-2 border-gray-300 bg-white "
                onClick={() => navigate(`${orderId}`)}
            >

                <CardBody className='space-y-1 px-4 py-2'>
                    <div className="grid grid-cols-2">
                        <Typography color="blue-gray" className="text-sm font-medium tracking-wide">
                            Name
                        </Typography>
                        <Typography color="blue-gray" className="text-sm font-medium tracking-wide">
                            {item?.name}
                        </Typography>
                    </div>
                    <div className="grid grid-cols-2">
                        <Typography color="blue-gray" className="text-sm font-medium tracking-wide">
                            PhoneNo
                        </Typography>
                        <Typography color="blue-gray" className="text-sm font-medium tracking-wide">
                            {item?.phoneNo}
                        </Typography>
                    </div>
                    <div className="grid grid-cols-2">
                        <Typography color="blue-gray" className="text-sm font-medium tracking-wide">
                            Date
                        </Typography>
                        <Typography color="blue-gray" className="text-sm font-medium tracking-wide">
                            {item?.time ? formatDateTime(item?.time).slice(0, 11) : ""}
                        </Typography>
                    </div>
                    <div className="grid grid-cols-2">
                        <Typography color="blue-gray" className="text-sm font-medium tracking-wide">
                            Time
                        </Typography>
                        <Typography color="blue-gray" className="text-sm font-medium tracking-wide">
                            {item?.time ? formatDateTime(item?.time).slice(11,) : ""}
                        </Typography>
                    </div>
                    <div className="grid grid-cols-2">
                        <Typography color="blue-gray" className="text-sm font-medium tracking-wide">
                            Payment Status
                        </Typography>
                        <Typography color="blue-gray" className="text-sm font-medium tracking-wide">
                            {item?.status == "Pending" ? "Pending" : "Completed"}
                        </Typography>
                    </div>
                    <div className="grid grid-cols-2">
                        <Typography color="blue-gray" className="text-sm font-medium tracking-wide">
                            Order Status
                        </Typography>
                        <Typography color="blue-gray" className={`${item?.status === "Pending" ? "text-red-500" : (item?.status === "Confirm" ? "text-green-500" : "text-blue-500")}`}>
                            {item?.status}
                        </Typography>
                    </div>
                    <hr />
                    <div className="grid grid-cols-2">
                        <Typography className="text-sm font-semibold">
                            Total Price :
                        </Typography>
                        <Typography className="text-sm font-semibold">
                            Rs {item?.totalAmount + totalGST}
                        </Typography>
                    </div>
                </CardBody>

            </Card>
        </>
    )
}

export default OrderCard
