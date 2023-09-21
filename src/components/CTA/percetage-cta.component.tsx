import React from 'react'

const PercentageCTA: React.FC = () => {
  return (
    <div className='flex w-full  rounded-lg bg-blue-100'>
        <div className='flex w-full py-3 px-4  justify-center items-center'>
            <div className='flex w-6 h-6 justify-center items-center rounded-full bg-blue-300'>
                <p className='flex text-sm text-white-100'>%</p>
            </div>
            <span className='text-sm w-56 lg:w-full ml-4'>
            Save <strong className='text-blue-300'>53%</strong> and get <strong  className='text-blue-300'>6 extra Clarifision </strong>for only <strong  className='text-blue-300'> $14 Each.</strong>
            </span>
        </div>
    </div>
  )
}

export default PercentageCTA