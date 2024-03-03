import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker';
import { CiSearch } from "react-icons/ci";
import { IconButton } from '@material-tailwind/react';
import moment from 'moment'
const DatePicker = ({ onSearch }) => {
  const [value, setValue] = useState({
    startDate: "",
    endDate: ""
  });

  const handleValueChange = newValue => {
    setValue(newValue);
  };

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

        <IconButton onClick={() => {
          let filterUrl = ``;
          if (value?.startDate) {
            filterUrl += `&from=${moment(value?.startDate).unix()}`
          }
          if (!value?.startDate && value?.endDate) {
            filterUrl += `&till=${moment(value?.endDate).unix()}`
          }
          if (value?.startDate && value?.endDate) {
            filterUrl += `&till=${moment(value?.endDate).unix()}`
          }

          console.log(filterUrl)
          console.log(value?.from)

          // filterUrl += `?from=${value?.from}&till=${value?.till}`;
          onSearch(filterUrl)
        }} ripple={true} className='m-0 h-8 w-8' variant=''>
          <CiSearch className="text-xl" />
        </IconButton>
      </div>

    </div>
  )
}

export default DatePicker
