import React from 'react'
import image19 from "../images/product/image19.webp";
import image21 from "../images/product/image21.webp";
import image22 from "../images/product/image22.webp";
import image23 from "../images/product/image23.webp";
import image24 from "../images/product/image24.webp";
import image26 from "../images/product/image26.webp";
import image27 from "../images/product/image27.webp";
import image28 from "../images/product/image28.webp";
import image29 from "../images/product/image29.webp";


import './Common.css'
import { TabTitle } from '../utils/FunctionTitle'



const categoriesList=[
  {
    name:'Daiet Food',
    price:'20.00 $',
    image:image19,
    color:'bg-orange-500'
  },
{
    name:'womens shop',
    price:'35.50$',
    image:image21,
    color:'bg-teal-500'
  },
{
    name:'Helth Food',
    price:'20$',
    image:image22,
    color:' bg-purple-500'
  },
{
    name:'Fresh Fish',
    price:'20.00$',
    image:image23,
    color:' bg-purple-500'
  },
{
    name:'Mango',
    price:'30.30$',
    image:image24,
    color:'bg-teal-500'
  },
{
    name:'Iglotex ',
    price:'25.50$',
    image:image26,
    color:'bg-orange-500'
  },
{
    name:'Organic Bell ',
    price:'40.40$',
    image:image28,
    color:'bg-purple-500'
  },
{
    name:'Radicchio',
    price:'33.33$',
    image:image29,
    color:'bg-orange-500'
  },

]

// ${item.color}

export const Categoris = () => {
  TabTitle('Amar Bazar | Category')
  return (
    <div style={{ background: 'white', paddingTop: '20px' }}>
    <section className='category-product'>
      <div className='container'>
        <div className="mt-4 flex items-center justify-between">
          <span className="border-b w-1/5 lg:w-2/5"></span>
          <a href="#" className="text-2xl font-medium  text-center text-gray-500 uppercase ">CATEGORIES</a>
          <span className="border-b w-1/5 lg:w-2/5"></span>
        </div>
      </div>

      <div className="p-1 flex flex-wrap items-center justify-center">

        {
          categoriesList?.map((item,index)=>
          <>
          <div className={`flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg transform transition duration-300 hover:scale-105`} >
          <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
            style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center">
          
            <img className="relative w-40" src={item?.image} alt="" />
          </div>
       
          <div className="relative text-white px-6 pb-6 mt-6">
            <div className="flex justify-between">
              <span className="block font-semibold text-xl text-black">{item.name}</span>
              <span className="block bg-white rounded-full text-black text-xs font-bold px-3 py-2 leading-none flex items-center">{item.price}</span>
            </div>
          </div>
        </div>
          </>)

        }
        


        {/* <div className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg" style={{ backgroundColor: '#38B2AC', }}>
          <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
            style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{
              background: 'radial-gradient(black, transparent 60%)',
              transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
              opacity: 0.2,
            }}></div>
            <img className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png" alt="" />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Outdoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">Monstera</span>
              <span className="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$45.00</span>
            </div>
          </div>
        </div> */}
      </div>

    </section>


  </div>
  )
}
