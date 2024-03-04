import { Option, Select } from '@material-tailwind/react'
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
            // value={driverValue}
            onChange={handleDriverChange}
        >
            {
                (drivers ?? []).map((item, index) => (
                    <Option key={item?._id} value={item?._id}>{item?.name ?? ""} - {item?.mob_no ?? ""}</Option>
                ))
            }
        </Select>
    );
};

export default DriverSelect;
