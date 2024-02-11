import { Dialog, DialogBody } from '@material-tailwind/react'
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import React from 'react'
import { GrFormClose } from 'react-icons/gr'

const ProfileDialog = ({ open, handleOpen }) => {
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
                                    Ankit Singh
                                </Typography>
                            </div>
                            <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                    Email
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                    ankitsingh@gmail.com
                                </Typography>
                            </div>
                            <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                    PhoneNo.
                                </Typography>
                                <Typography color="blue-gray" className="font-medium">
                                    +91 9876543210
                                </Typography>
                            </div>
                            <Typography
                                variant="small"
                                color="gray"
                                className="font-normal opacity-75"
                            >
                                With plenty of talk and listen time, voice-activated Siri access, and
                                an available wireless charging case.
                            </Typography>
                        </Card>
                    </CardBody>

                </Card>
            </DialogBody>

        </Dialog>
    )
}

export default ProfileDialog
