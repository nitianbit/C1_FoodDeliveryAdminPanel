import { Option, Select } from '@material-tailwind/react'
import React from 'react'

const DriverDetail = [
    { name: "Rahul", "phoneNo": "9711648064" },
    { name: "Ratan", "phoneNo": "9871862858" },
    { name: "Gagan", "phoneNo": "7827852147" },
    { name: "Mandeep", "phoneNo": "9971164333" }
]

const DriverSelect = ({driverValue,setDriverValue}) => {
    return (
        <Select
            label="Select Driver"
            size='sm'
            value={driverValue}
            onChange={(val) => setDriverValue(val)}
        >
            {
                DriverDetail.map((item) => (
                    <Option key={item} value={item}>{item.name} - {item.phoneNo}</Option>
                ))
            }

        </Select>
    )
}

export default DriverSelect
