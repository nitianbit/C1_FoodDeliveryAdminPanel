import { Option, Select } from '@material-tailwind/react'
import React from 'react'



const DriverSelect = ({ driverValue, setDriverValue, allDrivers }) => {
    return (
        <Select
            label="Select Driver"
            size='sm'
            value={driverValue}
            onChange={(val) => {
                setDriverValue(prev => ({
                    ...prev,
                    time: val
                }))
            }}
        >
            {
                (allDrivers ?? [])?.map((item, index) => (
                    <Option key={index} value={item}>{item?.name ?? ""} - {item?.mob_no ?? ""}</Option>
                ))
            }

        </Select>
    )
}

export default DriverSelect
