import { Button, Dialog, DialogBody, Input,Card, Typography, } from '@material-tailwind/react'

import React, { useState } from 'react'
import { GrFormClose } from 'react-icons/gr'
import { EmailIcon, PasswordIcon, PersonIcon } from '../../constants/Icons';

const EditProfileDialog = ({ open, handleOpen }) => {
    const [data, setData] = useState()
    return (
        <Dialog
            open={open}
            handler={handleOpen}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}
            className='w-56 p-5'
        >
            <DialogBody className='w-full flex items-center justify-center '>
                <span
                    className="absolute cursor-pointer top-3 right-5 text-gray-900 z-50" onClick={handleOpen}>
                    <GrFormClose className="text-xl font-extrabold" />
                </span>
                <Card className="w-full" shadow={false} floated={false}>

                    <Typography color="gray" className="mt-1 font-normal">
                        Edit your detail..
                    </Typography>
                    <form className="mt-8 mb-2 w-full mx-auto">
                        <div className="flex flex-col gap-6">
                            <Input
                                required={true}
                                onChange={(v) => {
                                    setData({
                                        ...data,
                                        name: v?.target?.value,
                                    });
                                }}
                                type="text"
                                label="Name"
                                icon={<PersonIcon />}
                            />
                            <Input label="Email"
                                required={true}
                                onChange={(v) => {
                                    setData({
                                        ...data,
                                        email: v?.target?.value,
                                    });
                                }}
                                type="email"
                                icon={<EmailIcon />} />

                            <Input
                                required={true}
                                onChange={(v) => {
                                    setData({
                                        ...data,
                                        password: v?.target?.value,
                                    });
                                }}
                                label="Password"
                                type="password"
                                icon={<PasswordIcon />} />
                            <Input
                                required={true}
                                onChange={(v) => {
                                    setData({
                                        ...data,
                                        confirmPassword: v?.target?.value,
                                    });
                                }}
                                label="Confirm Password"
                                type="password"
                                icon={<PasswordIcon />} />
                        </div>

                        <Button className="mt-6 w-full tracking-wider">Update Detail</Button>

                    </form>
                </Card>

            </DialogBody>

        </Dialog>
    )
}

export default EditProfileDialog
