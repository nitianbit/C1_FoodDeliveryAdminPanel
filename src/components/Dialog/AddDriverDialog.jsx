import { Button, Card, CardBody, Dialog, Input, Typography } from '@material-tailwind/react';
import React, { useState, useEffect } from 'react'
import { useUserContext } from '../../context/UserContext';
import { doPUT, doPOST, doGET } from '../../utils/httpUtil.js'
import { DRIVER_ENDPOINTS } from '../../utils/constants.js'

const AddDriverDialog = ({ open, handleOpen, onSuccess, editId, setEditId }) => {

    const [driverDetails, setDriverDetails] = useState(null)

    const { success, error } = useUserContext()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDriverDetails({ ...driverDetails, [name]: value });
    };

    const getCurrentDriverDetails = async (e) => {
        try {
            const response = await doGET(DRIVER_ENDPOINTS.GET_ID(editId));

            if (response?.data?.status >= 400) {
                return error(response?.data?.message)
            }
            if (response?.data?.status == 200) {
                setDriverDetails(response?.data?.data)
            }
        } catch (error) { }
    };

    useEffect(() => {
        if (editId) {
            getCurrentDriverDetails();
        }
    }, [editId])


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!driverDetails?.name || !driverDetails?.mob_no) {
            return error('Please Enter all required Fields');
        }
        if (driverDetails?.mob_no?.length != 10) {
            return error('Please enter 10 digit Mobile Number');
        }
        try {
            let response;

            if (editId) {
                response = await doPUT(DRIVER_ENDPOINTS.UPDATE(editId), driverDetails);
            } else {
                response = await doPOST(DRIVER_ENDPOINTS.CREATE, driverDetails);
            }

            if (response?.data?.status >= 400) {
                return error(response?.data?.message)
            }

            if (response?.data?.status == 200) {
                handleOpen()
                onSuccess()
                setEditId(null)
                setDriverDetails({})
                return success(response?.data?.message)
            }

        } catch (error) { }
    };

    return (
        <Dialog
            open={open}
            handler={handleOpen}
            className="bg-transparent shadow-none"
        >
            <Card className="mx-auto w-full max-w-[24rem]">
                <CardBody className="flex flex-col gap-4">
                    <Typography variant="h4" color="blue-gray">
                        Enter Driver Detail
                    </Typography>
                    <div className="w-full space-y-5">
                        <Input
                            label="Driver Name"
                            type='text'
                            required
                            name='name'
                            value={driverDetails?.name}
                            onChange={handleChange}
                        />
                        <Input
                            label="PhoneNo"
                            type="number"
                            required
                            name='mob_no'
                            onChange={handleChange}
                            value={driverDetails?.mob_no}
                        />
                    </div>
                    <Button type="submit" className=" w-full tracking-wider" onClick={handleSubmit}>
                        Submit
                    </Button>
                </CardBody>
            </Card>
        </Dialog>
    )
}

export default AddDriverDialog

{/*  */ }
