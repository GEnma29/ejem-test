import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const ButtonCTA: React.FC<{
    title: string;
}> = ({title}) => {
  return (
    <button className='flex h-[50px] w-full rounded-full justify-center items-center bg-green-500'>
        <p className='text-white-100 text-sm lg:text-lg font-bold'>{title.toLocaleUpperCase()}</p>
        <ArrowRightIcon className='h-6 w-6 ml-2 text-white-100' />
    </button>
  )
}

export default ButtonCTA