import React from 'react'
import Guarantee from '../../assets/guarantee.png'


const Credentials: React.FC = () => {
  return (
    <div className="flex">
    <div className="mr-4  flex-shrink-0">
      <img src={Guarantee} alt='guarantee' className=' w-10 h-10 lg:w-full lg:h-full object-contain' />
    </div>
    <div>
      <p className="mt-1 text-xs lg:text-base">
      If you are not completely thrilled with your Clarifion - We have a <strong>30 day satisfaction guarantee</strong>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
      </p>
    </div>
  </div>
  )
}

export default Credentials