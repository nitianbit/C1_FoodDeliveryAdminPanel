import React from 'react'


const DashboardSingleItem = (props) => {
    const { color, title, number, src } = props
    return (
        <div className={`${color} text-white rounded-lg tracking-wide cursor-pointer flex flex-col items-center justify-between pt-4 text-xl`}>
            <div className='flex items-center justify-between p-2 gap-7'>
                <div className='flex flex-col items-start justify-start'>
                    <span className='font-bold text-5xl'>{number}</span>
                </div>
                <div>
                    <img src={src} className='w-16' />
                </div>
            </div>
            <div className={`contrast-125 border-t-2 w-full text-center py-3 `}>{title}</div>
        </div>
    )
}

export default DashboardSingleItem