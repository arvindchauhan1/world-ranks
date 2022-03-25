import React from 'react'

const ProgressBar = ({ value }) => {

    if (value === null) return (
        <>
            <span className='w-48 text-xs font-medium'>N/A</span>
        </>
    )
    return (
        <div className='w-48 h-full flex items-center text-xs font-medium'>
            <span className='progress-bar w-32 sm:w-36 bg-slate-200 rounded relative mr-1  sm:mr-3'>
                <span style={{ width: `${value}%` }} className='inline-block h-full bg-teal-500 absolute left-0 rounded' />
            </span>
            <span className='text-left'>
                {`${value}%`}
            </span>
        </div>
    )
}

export default ProgressBar