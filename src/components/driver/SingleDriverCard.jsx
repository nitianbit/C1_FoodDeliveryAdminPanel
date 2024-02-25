import { Card, Typography } from '@material-tailwind/react'
import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md'

const SingleDriverCard = ({ handleOpen, driver, confirmhandleOpen, setEditId, setDeleteId }) => {
    return (
        <Card float={false} className='flex items-start justify-center shadow-lg inset-0 border border-gray-400 bg-gray-50 py-2 gap-3 pl-5'>
            <Typography variant="paragraph" className=" text-gray-900">
                {driver?.name ?? ""}
            </Typography>
            <Typography variant="paragraph" className=" text-gray-600 text-md">
                {driver?.mob_no ?? ""}
            </Typography>
            <div className="absolute text-sm flex flex-col items-center gap-1 top-2 right-2">
                <span
                    className="text-green-800 cursor-pointer p-1 rounded-full"
                    onClick={() => {
                        setEditId(driver?._id)
                        handleOpen()
                    }}
                >
                    <CiEdit className='w-5 h-5'/>
                </span>

                <span
                    className="text-orange-700 cursor-pointer p-1 rounded-full"
                    onClick={() => {
                        setDeleteId(driver?._id)
                        confirmhandleOpen()
                    }}
                >
                    <MdDelete className='w-5 h-5'/>
                </span>
            </div>
        </Card>
    )
}

export default SingleDriverCard
