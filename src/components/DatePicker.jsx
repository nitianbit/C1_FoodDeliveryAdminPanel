import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker';
import { CiSearch } from "react-icons/ci";
import { IconButton } from '@material-tailwind/react';
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
    <div className=' w-[280px] flex items-center gap-1'>
      <Datepicker
        value={value}
        onChange={handleValueChange}
        placeholder={"Select Date To Filter"}
        separator={"to"}
        displayFormat={"DD/MM/YYYY"}
        inputClassName="w-full rounded-md focus:ring-0 focus:outline-0 py-1 px-2 border border-black font-normal text-md"
      />

      <div className="flex w-max gap-4">

        <IconButton ripple={true} className='m-0 h-8 w-8' variant=''>
          <CiSearch className="text-xl" />
        </IconButton>
      </div>

    </div>
  )
}

export default DatePicker
