import { Button, Input } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { MENUITEMS_ENDPOINTS } from '../utils/constants';
import { doGET, doPOST, doPUT } from '../utils/httpUtil';

const FoodForm = ({ handleOpen, formData, setFormData, onSuccess, open, editId, setEditId }) => {
    const { success, error } = useUserContext()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const getCurrentMenuItems = async (e) => {
        try {
            const response = await doGET(MENUITEMS_ENDPOINTS.GET_ID(editId));

            if (response?.data?.status >= 400) {
                return error(response?.data?.message)
            }
            if (response?.data?.status == 200) {
                setFormData(response?.data?.data)
            }
        } catch (error) { }
    };

    useEffect(() => {
        if (editId) {
            getCurrentMenuItems();
        }
    }, [editId])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formData?.name || !formData?.description || !formData?.price || !formData?.gst || !formData?.maxQuantity) {
            return error('Please Enter all required Fields');
        }
        if (formData?.description?.length > 70) {
            return error("Description can be a maximum of two lines only");
        }
        
        try {
            let response;

            if (editId) {
                response = await doPUT(MENUITEMS_ENDPOINTS.UPDATE(editId), formData);
            } else {
                response = await doPOST(MENUITEMS_ENDPOINTS.CREATE, formData);
            }

            if (response?.data?.status >= 400) {
                return error(response?.data?.message)
            }

            if (response?.data?.status == 200) {
                handleOpen()
                onSuccess()
                setEditId(null)
                setFormData({})
                return success(response?.data?.message)
            }

        } catch (error) { }
    };

    return (
        <div className=" bg-white rounded-md my-5">
            <h1 className="text-sm my-2 text-center uppercase text-gray-900">
                {editId ? `Edit` : "Add"} Food Details
            </h1>
            <form
                className="mt-2 mb-2 w-full mx-auto px-4"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col gap-6">
                    <Input
                        required
                        label="Name" type="text" id="name" name="name"
                        value={formData?.name} onChange={handleChange}
                    />
                    <Input
                        required
                        label="Description" type="text" id="description" name="description"
                        value={formData?.description} onChange={handleChange}
                    />
                    <Input
                        required
                        label="Price" type="text" id="price" name="price"
                        value={formData?.price} onChange={handleChange}
                    />
                    <Input
                        required
                        label="Maximum Quanity" type="number" id="maxQuantity" name="maxQuantity"
                        value={formData?.maxQuantity} onChange={handleChange}
                    />
                    <Input
                        required
                        label="Gst" type="number" id="gst" name="gst"
                        value={formData?.gst} onChange={handleChange}
                    />
                    <Button type="submit" className=" w-full tracking-wider">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default FoodForm;
