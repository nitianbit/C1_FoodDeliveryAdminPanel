import { Card, Typography } from '@material-tailwind/react'
import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md'

const SingleDriverCard = ({ handleOpen, driver, confirmhandleOpen, setEditId, setDeleteId }) => {
    return (
        <Card float={false} className='flex items-center justify-center shadow-lg inset-0 border border-gray-400 bg-gray-50 py-5 gap-3'>
            <Typography variant="h4" className=" text-gray-900">
                {driver?.name ?? ""}
            </Typography>
            <Typography variant="paragraph" className=" text-gray-600 text-md">
                {driver?.mob_no ?? ""}
            </Typography>
            <div className="absolute text-lg flex flex-col items-center gap-3 top-6 right-4">
                <span
                    className="text-green-800 cursor-pointer p-1 rounded-full"
                    onClick={() => {
                        setEditId(driver?._id)
                        handleOpen()
                    }}
                >
                    <CiEdit />
                </span>

                <span
                    className="text-orange-700 cursor-pointer p-1 rounded-full"
                    onClick={() => {
                        setDeleteId(driver?._id)
                        confirmhandleOpen()
                    }}
                >
                    <MdDelete />
                </span>
            </div>
        </Card>
    )
}

export default SingleDriverCard
