import { Button, Dialog, DialogBody, Input, Card, Typography, } from '@material-tailwind/react'

import React, { useEffect, useState } from 'react'
import { GrFormClose } from 'react-icons/gr'
import { EmailIcon, PasswordIcon, PersonIcon } from '../../constants/Icons';
import { doGET, doPUT } from '../../utils/httpUtil';
import { USER } from '../../utils/constants';
import { useUserContext } from '../../context/UserContext';

const EditProfileDialog = ({ open, handleOpen }) => {
    const { error } = useUserContext()
    const [data, setData] = useState({})

    const getCurrentUser = async (e) => {
        try {
            const response = await doGET(USER.CURRENT_USER);

            if (response?.data?.status >= 400) {
                return error(response?.data?.message)
            }
            if (response?.data?.status == 200) {
                setData(response?.data?.data)
            }
        } catch (error) { }
    };

    const updateCurrentUser = async (e) => {
        if (data?.password !== data?.confirmPassword) {
            return error('Password did not match with Confirm Password')
        }
        try {
            const response = await doPUT(USER.UPDATE_USER, data);

            if (response?.data?.status >= 400) {
                return error(response?.data?.message)
            }
            if (response?.data?.status == 200) {
                setData(response?.data?.data)
            }
        } catch (error) { }
    };

    useEffect(() => {
        getCurrentUser()
    }, [])

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
                    <form className="mt-8 mb-2 w-full mx-auto" >
                        <div className="flex flex-col gap-6">
                            <Input
                                value={data?.name}
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
                                value={data?.email}
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
                                data={data?.password}
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
                                data={data?.confirmPassword}
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

                        <Button onClick={updateCurrentUser} className="mt-6 w-full tracking-wider">Update Detail</Button>

                    </form>
                </Card>

            </DialogBody>

        </Dialog>
    )
}

export default EditProfileDialog
