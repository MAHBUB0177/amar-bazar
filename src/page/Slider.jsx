import React from 'react'
import { Carousel, Card, Button } from 'react-bootstrap'
// import Carousel from 'react-bootstrap/Carousel'
import image1 from '../images/shoping1.jpg'
import image2 from '../images/shoping.jpg'
import image3 from '../images/shoping2.jpg'
import vagitables from '../images/vagitables3.png'

import image5 from '../images/shoping5.jpg'
import './Common.css'
import vagetables1 from '../images/fresh-vegetables.webp'
import {  CountdownStart, startCountdown } from '../components/countdown'
import { useState } from 'react'
import { useEffect } from 'react'



const slideItem = [

  {
    title: `Hot Deals `,
    description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    image: image1
  },
  {
    title: 'FlashSale',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: image2
  },
  {
    title: 'Latest products ',
    description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: image3
  }
]

export const Slider = () => {
  const [countdown1, setCountdown1] = useState({ days1: 0, hours1: 0, minutes1: 0, seconds1: 0 });//card 1
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });//card 2
  
  useEffect(() => {
      startCountdown(setCountdown);
      // return () => clearInterval(); // Clean up on unmount

      CountdownStart(setCountdown1);
      return () => clearInterval(); 
  }, []);


;

   
  return (
    <div className='row mx-[2px]' style={{ background: 'white', marginTop: '5px',  }}>
      <div className='col-md-8 slide' style={{ height: '380px' }}>
        <Carousel nextIcon={null} prevIcon={null} variant='dark' interval={3000}>
          {
            slideItem?.map((item, index) => (
              <Carousel.Item>


                <section class="text-gray-600 body-font bg-gray-200 dark:bg-slate-900 rounded-md shadow-sm h-[360px]">
                  <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
                    <div
                      class=" hidden md:block lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16  flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                      <h1
                        class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                        {/* Title of Project  */}
                        {item?.title}
                      </h1>
                      <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
                        Short description here, Short description here Short description here Short description here Short
                        description here Short description here.
                      </p>
                      <div class="flex justify-center">
                        <a href="#"
                          class="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">Start
                          Exploring
                        </a>
                        <a href="#"
                          class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Read
                          articles</a>
                      </div>
                    </div>
                    <div class=" lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-5/6">
                      <img class="object-cover object-center rounded d-block w-100" alt="hero" src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg" />
                    </div>
                  </div>
                </section>

              </Carousel.Item>
            ))
          }
        </Carousel>
      </div>

      <div className='col-md-4 rounded-md bg-[#F9FAFB] ' style={{ border: '2px solid tomato', height: '360px' }} id="showdiv">
      <h6 className='bg-orange-300 w-[100%] p-2  font-semibold rounded-sm' >Latest Super Discount Active Coupon Code</h6>
        <div  className=' flex width-auto h-[140px] mt-[15px] shadow-md p-[20px] gap-3 rounded-sm' >
          <img src={image5} alt='card-image' className='h-[90px] w-[50%] rounded-md'/>
          <div>
            <div className='flex gap-2'>
              <p className='text-2xl text-red-600 font-semibold'>$50 </p><span className='text-[20px]'>Off </span> 
              <button className='bg-[#D1FAE5] rounded-full w-[70px] p-0'>active </button>
            </div>
            <h2 className='text-start font-semibold'>SUMMER23</h2>
            <div class="flex flex-wrap gap-2 justify-between items-center pt-2 ">
                <div class="border rounded-md px-1 bg-orange-300">
                    <div id="days" class="font-bold font-mono text-sm text-gray-800">{countdown1?.days1}</div>
                </div>
                <div class="border rounded-md px-1 bg-orange-300">
                    <div id="hours" class="font-bold font-mono text-sm text-gray-800">{countdown1?.hours1}</div>
                </div>
                <div class="border rounded-md px-2 bg-orange-300">
                    <div id="minutes" class="font-bold font-mono text-sm text-gray-800">{countdown1?.minutes1}</div>
                </div>
                <div class="border rounded-md px-1 bg-orange-300">
                    <div id="seconds" class="font-bold font-mono text-sm text-gray-800">{countdown1?.seconds1}</div>
                </div>
            </div>
          </div>
        </div>


        <div  className=' flex width-auto h-[140px] mt-[10px] shadow-md p-[20px] gap-3 rounded-sm'>
          <img src={vagitables} alt='card-image' className='h-[90px] w-[50%] rounded-md'/>
          <div>
            <div className='flex gap-2'>
              <p className='text-2xl text-red-600 font-semibold'>15% </p><span className='text-[20px]'>Off </span> 
              <button className='bg-[#D1FAE5] rounded-full w-[70px] p-0'>active </button>
            </div>
            <h2 className='text-start font-semibold'>Summer Gift Coupn</h2>
            <div class="flex flex-wrap gap-2 justify-between items-center pt-2 ">
                <div class="border rounded-md px-1 bg-orange-300">
                    <div id="days1" class="font-bold font-mono text-sm text-gray-800">{countdown?.days}</div>
                </div>
                <div class="border rounded-md px-1 bg-orange-300">
                    <div id="hours1" class="font-bold font-mono text-sm text-gray-800">
                      {countdown?.hours}
                    </div>
                </div>
                <div class="border rounded-md px-2 bg-orange-300">
                    <div id="minutes1" class="font-bold font-mono text-sm text-gray-800">{countdown?.minutes}</div>
                </div>
                <div class="border rounded-md px-1 bg-orange-300">
                    <div id="seconds1" class="font-bold font-mono text-sm text-gray-800">{countdown?.seconds}</div>
                </div>
            </div>
          </div>
        </div>

    

      </div>


      <div className="row bg-[#f5afa9] rounded-md mb-[20px] ml-[5px] mr-[5px] p-[10px]" >
        <div className='col-md-8'>
          <span>  <h4 ><strong ><span style={{ color: 'green' }}>100% Natural Quality</span></strong> Organic Product</h4> </span>
          <p >See Our latest discounted products from here and get a specialdiscount product </p>

        </div>

        <div className='col-md-4' style={{ marginTop: '25px', marginBottom: '20px' }}>
          <a href='' className='view-all-btn' >Shop Now</a>
        </div>

      </div>



      {/* <div className=' row  opening' style={{background:'#8c6e91',borderRadius:'30px',marginTop:'2px',height:'100px',}}>
          <div className='col-md-4' style={{paddingTop:'40px',fontSize:'20px'}}>
                    <p><span><LocalShippingIcon/></span> Free Shipping From $500.00 |</p>
          </div>
          <div className='col-md-4' style={{paddingTop:'40px',fontSize:'20px'}}>
                    <p><span></span><PermPhoneMsgIcon/> Support 24/7 At Anytime |</p>
          </div>
          <div className='col-md-4' style={{paddingTop:'40px',fontSize:'20px'}}>
                    <p><span></span> Latest Offer Upto 20% Off |</p>
          </div> */}



      {/* </div> */}


    </div>
  )
}
