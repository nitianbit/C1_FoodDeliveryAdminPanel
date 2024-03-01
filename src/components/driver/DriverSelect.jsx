import { Option, Select } from '@material-tailwind/react'
<<<<<<< HEAD
import React from 'react'
=======
import React, { useEffect, useState } from 'react'
import { doGET } from '../../utils/httpUtil';
import { DRIVER_ENDPOINTS } from '../../utils/constants';

const DriverSelect = ({ driverValue, setDriverValue }) => {

    const [drivers, setDrivers] = useState(null)
    const getAllDrivers = async (e) => {
        try {
            const response = await doGET(DRIVER_ENDPOINTS.GET_ALL);
            if (response?.data?.status === 200) {
                setDrivers(response?.data?.data)
            }
        } catch (error) { }
    };

    useEffect(() => {
        getAllDrivers()
    }, [])
>>>>>>> fec3989a9a1e1b4d7dbc35dea9287b1a6efd0f81


    const handleDriverChange = (event) => {
        setDriverValue(prev => ({
            ...prev,
            driverInfo: event
        }));
    };

    return (
        <Select
            label="Select Driver"
            size='sm'
<<<<<<< HEAD
            value={driverValue}
            onChange={(val) => 
                setDriverValue(prev => ({
                    ...prev,
                    driverInfo: val
                }))
            }
        >
            {
                (allDrivers ?? [])?.map((item, index) => (
                    <Option key={index} value={item.name}>{item?.name ?? ""} - {item?.mob_no ?? ""}</Option>
=======
            onChange={handleDriverChange}
        >
            {
                (drivers ?? []).map((item, index) => (
                    <Option key={item?._id} value={item?._id}>{item?.name ?? ""} - {item?.mob_no ?? ""}</Option>
>>>>>>> fec3989a9a1e1b4d7dbc35dea9287b1a6efd0f81
                ))
            }
        </Select>
    );
};

export default DriverSelect;
