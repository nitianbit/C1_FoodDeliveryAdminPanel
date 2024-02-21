
import { Button, Input } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { doGET, doPUT } from '../../utils/httpUtil';
import { DRIVER_ENDPOINTS, ORDER_ENDPOINTS } from '../../utils/constants';
import { useUserContext } from '../../context/UserContext';
import { TiTick } from "react-icons/ti";
import moment from 'moment';
import AddDriverDialog from '../../components/Dialog/AddDriverDialog';
import DriverSelect from '../../components/driver/DriverSelect';
const SingleOrderDetail = ({ order }) => {

    const [selectDriverValue, setSelectedDriverValue] = useState(null);
    const [drivers, setDrivers] = useState(null)
    const [time, setTime] = useState(null)

    const { id } = useParams()

    const [currentOrder, setCurrentOrder] = useState({})
    const [currentOrderStatus, setCurrentOrderStatus] = useState("Pending")
    const { success, error } = useUserContext()

    const getCurrentMenuItems = async (e) => {
        try {
            const response = await doGET(ORDER_ENDPOINTS.GET_ID(id));

            if (response?.data?.status >= 400) {
                return error(response?.data?.message)
            }
            if (response?.data?.status == 200) {
                setCurrentOrder(response?.data?.data)
            }
        } catch (error) { }
    };

    const updateOrder = async () => {
        try {
            let response = await doPUT(ORDER_ENDPOINTS.UPDATE(id), { status: currentOrderStatus, driverInfo: currentOrder?.driverInfo, time: currentOrder?.time });
            if (response?.data?.status >= 400) {
                return error(response?.data?.message)
            }

            if (response?.data?.status == 200) {
                // getCurrentMenuItems()
                setCurrentOrder(response?.data?.data)

                return success(response?.data?.message)
            }

        } catch (error) { }
    };


    const getAllDrivers = async (e) => {
        try {
            const response = await doGET(DRIVER_ENDPOINTS.GET_ALL);
            if (response?.data?.status == 200) {
                setDrivers(response?.data?.data)
            }
        } catch (error) { }
    };


    const formatDateTime = (timestamp) => {
        return moment(timestamp * 1000).format('YYYY-MM-DD HH:mm:ss a');
    }

    useEffect(() => {
        getCurrentMenuItems()
        getAllDrivers()
    }, [])

    useEffect(() => {
        const status = currentOrder?.status == "Pending" ? "Confirm" : "Delivered"
        setCurrentOrderStatus(status)
    }, [currentOrder?.status])

    return (
        <>
            {/* <AddDriverDialog open={open} handleOpen={handleOpen} driverValue={driverValue} setDriverValue={setDriverValue}/> */}
            <div className='w-full h-[82vh] overflow-y-auto mt-5'>
                <div className="py-14 px-4">
                    <div className='w-full md:flex items-center justify-between'>
                        <div className="flex justify-start item-start space-y-2 flex-col">
                            <h1 className="text-2xl  lg:text-3xl font-semibold leading-7 lg:leading-9 text-gray-800">Order # {currentOrder?._id}</h1>
                            <p className="text-base  font-medium leading-6 text-gray-600">{formatDateTime(currentOrder?.time)}</p>
                        </div>
                        <div className='space-y-2'>
                            <h1 className="text-2xl text-center lg:text-3xl font-semibold leading-7 lg:leading-9 text-gray-800">Status</h1>
                            <div className="flex items-center gap-5 ">
                                {currentOrder?.status === "Delivered" ?
                                    <div className='text-blue-900 font-bold tracking-wide flex items-center'> <TiTick className='inline-flex text-2xl' />{currentOrder?.status}</div>
                                    :
                                    <Button onClick={updateOrder} variant="outlined" size='sm' className={`border ${currentOrder?.status == "Pending" ? "text-red-600 border-red-600" : "text-green-600 border-green-600"}`}>
                                        {currentOrder?.status}
                                    </Button>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                            <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">

                                <div className=" md:flex-row flex-col flex items-start justify-between w-full p-2 space-y-4 md:space-y-0">
                                    <div className="w-full flex flex-col justify-start items-start space-y-2">
                                        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Food Detail Cart</p>
                                    </div>
                                    <div className="flex justify-between space-x-8 items-center w-full">
                                        <p className="text-lg leading-6">Price</p>
                                        <p className="text-lg leading-6 text-gray-800">Quantity</p>
                                        <p className="text-lg font-semibold leading-6 text-gray-800">Total</p>
                                    </div>
                                </div>
                                <div className="mt-4 justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                    {currentOrder?.items?.map((oitem, oIndex) => {
                                        return (
                                            <div key={oIndex} className="bg-white border-b border-gray-200 md:flex-row flex-col flex items-start justify-between w-full p-2 mb-4 space-y-4 md:space-y-0">
                                                <div className="w-full flex flex-col justify-start items-start space-y-2">
                                                    <h3 className="text-lg font-semibold leading-6 text-gray-800">{oitem?.name ?? ""}</h3>
                                                </div>
                                                <div className="flex justify-between space-x-8 items-center w-full">
                                                    <p className="text-lg leading-6">Rs {oitem?.price ?? 0}</p>
                                                    <p className="text-lg leading-6 text-gray-800">{oitem?.quantity ?? 0}</p>
                                                    <p className="text-lg font-semibold leading-6 text-gray-800">Rs {(oitem?.price ?? 0) * (oitem?.quantity ?? 0)} </p>
                                                </div>
                                            </div>

                                        );
                                    })}
                                </div>
                            </div>

                            <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                                <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                                    <h3 className="text-xl  font-semibold leading-5 text-gray-800">Summary</h3>

                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-base  font-semibold leading-4 text-gray-800">Total</p>
                                        <p className="text-base  font-semibold leading-4 text-gray-600">{currentOrder?.totalAmount}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                            <div className='bg-white w-full my-5 space-y-3'>
                                <h4 className="text-lg  font-semibold leading-5 text-gray-800">Select Driver</h4>
                                <DriverSelect driverValue={currentOrder?.driverInfo} setDriverValue={setCurrentOrder} allDrivers={setDrivers} />
                                <h4 className="text-lg  font-semibold leading-5 text-gray-800">Delivery Time</h4>
                                <Input
                                    label='Estimated Delivery Time'
                                    type='text'
                                    value={currentOrder?.time ?? ""}
                                    onChange={(v) => {
                                        setCurrentOrder(prev => ({
                                            ...prev,
                                            time: v.target?.value
                                        }))
                                    }}
                                />

                            </div>
                            <h3 className="text-xl  font-semibold leading-5 text-gray-800 mt-2">Customer</h3>
                            <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                                <div className="flex flex-col justify-start items-start flex-shrink-0">
                                    <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                        <div className="flex justify-start items-start flex-col space-y-2">
                                            <p className="text-base  font-semibold leading-4 text-left text-gray-800">{currentOrder?.name}</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-center text-gray-800  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                        <span>PhoneNo.</span>
                                        <p className="cursor-pointer text-sm leading-5 ">{currentOrder?.phoneNo}</p>

                                    </div>
                                    <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                                        <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                            <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                                <p className="text-base  font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                                                <p className="w-48 lg:w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{currentOrder?.address}</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleOrderDetail;
