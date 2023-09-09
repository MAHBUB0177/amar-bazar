import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HomeCategoryButton = ({icon, btnName, ...rest }) => {
    return (
        <button {...rest} className="w-52 block bg-orange-500 drop-shadow hover:drop-shadow-lg hover:scale-105 duration-700 font-semibold rounded-full
    px-1 py-1 group">
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <span  className='rounded-full px-1 py-1 text-2xl text-white'>
                        {icon}
                    </span>
                    <div className='ml-3 text-white'>{btnName}</div>
                </div>
                <div className='group-hover:scale-150 text-white duration-700'>
                    <ArrowForwardIosIcon />
                </div>
            </div>
        </button>
    )
}

export default HomeCategoryButton