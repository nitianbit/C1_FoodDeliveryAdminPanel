import { Dialog, DialogBody } from '@material-tailwind/react'
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from 'react'
import { GrFormClose } from 'react-icons/gr'
import { USER } from '../../utils/constants';
import { useUserContext } from '../../context/UserContext';
import { doGET } from '../../utils/httpUtil';

const ProfileDialog = ({ open, handleOpen }) => {

    const { success, error, user } = useUserContext()


    return (
        <Dialog
            open={open}
            handler={handleOpen}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}
            className='w-96'
        >
            <DialogBody>
                <span
                    className="absolute cursor-pointer top-3 right-5 text-gray-900 z-50" onClick={handleOpen}>
                    <GrFormClose className="text-xl font-extrabold" />
                </span>
                <Card className="w-full ">

                    <CardBody className='flex gap-5 items-center' >
                        <Card className=" w-72" shadow={false} floated={false}>
                            <img
                                src="/admin.png"
                                alt="card-image"
                                className="h-full w-full object-cover"
                            />

                        </Card>
                        <Card shadow={false} floated={false}>
                            <Typography color="blue-gray" className="font-bold items-center text-2xl mb-5">
                                Welcome, Admin ✌️
                            </Typography>
                            <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                    Name
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                    {user?.name}
                                </Typography>
                            </div>
                            <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                    Email
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                    {user?.email}
                                </Typography>
                            </div>
                            <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                    Role
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                    {user?.role}
                                </Typography>
                            </div>
                            {/* <Typography
                                variant="small"
                                color="gray"
                                className="font-normal opacity-75"
                            >
                                With plenty of talk and listen time, voice-activated Siri access, and
                                an available wireless charging case.
                            </Typography> */}
                        </Card>
                    </CardBody>

                </Card>
            </DialogBody>

        </Dialog>
    )
}

export default ProfileDialog
