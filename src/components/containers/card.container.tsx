import React from 'react'
// img 
import cardImgLg from '../../assets/card/Card-lg.png'
import CommentFragment from './comment.fragment'
const CardContainer :React.FC = () => {
  return (
    <div className='flex p-4 flex-wrap w-full lg:w-[1245px] bg-white-200'>
        <div className='flex flex-col'>
            <img className='w-[320px] h-[328px] lg:w-[575px] lg:h-[591px]' src={cardImgLg} alt="cladifion charger" /> 
            <CommentFragment />
        </div>
        <div className='flex'>
            
        </div>
       
    </div>
  )
}

export default CardContainer