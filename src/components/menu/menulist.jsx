import React from 'react'

import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import WcIcon from '@mui/icons-material/Wc';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeCategoryButton from './HomeCategoryButton';

const categoryButtonList = [
    {
        name: "Mart",
        value: 'mart',
        icon: <RiceBowlIcon />
    },
    {
        name: "Fashion",
        value: 'fashion',
        icon: <WcIcon />
    },
    {
        name: "Beauty",
        value: 'beauty',
        icon: <ShoppingBagIcon />
    },
    {
        name: "Makeover",
        value: 'makeover',
        icon: <LightbulbIcon />
    },
    {
        name: "Low Price",
        value: 'lowprice',
        icon: <AttachMoneyIcon />
    },
]

const Menu = () => {
  return (
    <div>
         <div className='hidden  mx-auto max-w-screen-xl lg:flex flex-wrap justify-center gap-3 mt-4'>
                    {
                        categoryButtonList?.map((item, index) => <HomeCategoryButton key={index} btnName={item?.name} icon={item?.icon} />)
                    }

                </div>
    </div>
  )
}

export default Menu