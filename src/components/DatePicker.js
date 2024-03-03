import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker';

const DatePicker = () => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = newValue => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };
    // console.log(value)
  return (
    <div className=' w-full'>
      <Datepicker 
        value={value} 
        onChange={handleValueChange} 
        placeholder={"Select date range to filter"} 
        separator={"to"}
        displayFormat={"DD/MM/YYYY"} 
        inputClassName="w-full rounded-md focus:ring-0 py-1 px-2 border border-gray-800"
        />
    </div>
  )
}

export default DatePicker
