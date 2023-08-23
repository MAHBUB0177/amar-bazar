import React from 'react'
import image1 from '../images/image1.webp'
import image2 from '../images/image2.webp'
import image3 from '../images/image3.webp'
import image4 from '../images/image4.webp'
import image5 from '../images/image5.webp'
import image6 from '../images/image6.webp'
import image7 from '../images/image7.webp'
import image8 from '../images/image8.webp'
import './Common.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { TabTitle } from '../utils/FunctionTitle'



const categoriesList=[
  {
    name:'Carrot',
    price:'20.00 $',
    image:image1,
    color:'bg-orange-500'
  },
{
    name:'Clementine',
    price:'35.50$',
    image:image2,
    color:'bg-teal-500'
  },
{
    name:'Pineapple',
    price:'20$',
    image:image3,
    color:' bg-purple-500'
  },
{
    name:'Cranberries',
    price:'20.00$',
    image:image4,
    color:' bg-purple-500'
  },
{
    name:'Mango',
    price:'30.30$',
    image:image5,
    color:'bg-teal-500'
  },
{
    name:'Iglotex ',
    price:'25.50$',
    image:image6,
    color:'bg-orange-500'
  },
{
    name:'Organic Bell ',
    price:'40.40$',
    image:image7,
    color:'bg-purple-500'
  },
{
    name:'Radicchio',
    price:'33.33$',
    image:image8,
    color:'bg-orange-500'
  },

]

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
          <div className={`flex-shrink-0 m-6 relative overflow-hidden ${item.color} rounded-lg max-w-xs shadow-lg`} >
          <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
            style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: 'radial-gradient(black, transparent 60%)',
                transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                opacity: 0.2,
              }}>
            </div>
            <img className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="" />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            {/* <span className="block opacity-75 -mb-1">Indoor</span> */}
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">{item.name}</span>
              <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">{item.price}</span>
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
