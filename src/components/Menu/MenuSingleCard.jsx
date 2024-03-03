import { Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { MENUITEMS_ENDPOINTS } from "../../utils/constants";
import { doDELETE, doGET } from "../../utils/httpUtil";
import { useUserContext } from "../../context/UserContext";

const MenuSingleCard = ({ open, handleOpen, item, onSuccess, confirmhandleOpen, setEditId, setDeleteId }) => {

    const [singleData, setSingleData] = useState({});



    return (
        <Card className="w-full max-w-[20rem] shadow-lg h-[220px]">
            <CardHeader floated={false} color="blue-gray" className="mt-1">
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody className="-mb-1">
                <div className="mb-1 flex items-start justify-between gap-1">
                    <Typography variant="h6" color="blue-gray" className="font-bold tracking-wide h-14 overflow-hidden">
                        {item?.name}
                    </Typography>
                    <Typography
                        color="blue-gray"
                        className="flex w-fill h-full  gap-1.5 text-sm font-bold"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                            />
                        </svg>
                        5.0
                    </Typography>
                </div>
                <Typography color="gray" className="text-sm">
                    {item?.description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-3 flex flex-col">
                <div className="flex items-center justify-between">

                    <div className="text-black">
                        <span className="font-bold">Price : </span>
                        <span className="text-sm">Rs {item?.price}</span>
                    </div>
                    <div className="text-black">
                        <span className="font-bold">Gst : </span>
                        <span className="text-sm"> {item?.gst ?? 0} % </span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-black">
                        <span className="font-bold">MaxQuantity : </span>
                        <span className="text-sm"> {item?.maxQuantity ?? 1000} </span>
                    </div>
                    <div className="text-xl flex items-center gap-3">
                        <span
                            className="text-green-800 cursor-pointer p-1 rounded-full hover:scale-125 duration-500"
                            onClick={() => {
                                setEditId(item?._id)
                                handleOpen()
                            }}
                        >
                            <CiEdit />
                        </span>

                        <span
                            className="text-orange-700 cursor-pointer p-1 rounded-full hover:scale-125 duration-500"
                            onClick={
                                () => {
                                    confirmhandleOpen()
                                    setDeleteId(item?._id)
                                }
                            }
                        >
                            <MdDelete />
                        </span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}

export default MenuSingleCard