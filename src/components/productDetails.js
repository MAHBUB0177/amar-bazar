import React from 'react'
import { Button } from 'react-bootstrap'
import StarIcon from "@mui/icons-material/Star";

import { ProductdetailsCarusel } from './productdetails-carusel';
import { useSelector } from 'react-redux';
import { handelincrement } from './common/commonfunction';
import Select from './common/select';

export const ProductDetails = () => {

    const options = [
        {
            name: "SM",
            value: "1"
        },
        {
            name: "M",
            value: "2"
        },
        {
            name: "L",
            value: "3"
        },
        {
            name: "XL",
            value: "4"
        }
    ]

    const deliveryTextList = [
        {
            // icon: <FaLocationDot />,
            text: "Dhaka, Dhaka North, Banani Road No. 12 - 19",
        },
        {
            // icon: <FaBoxOpen />,
            text: "Free Delivery : Enjoy delivery of your order directly to the doorstep!",
        },
        {
            // icon: <FaRegMoneyBill1 />,
            text: "Cash on Delivery Available",
        }
    ]

    const serviceTextList = [
        {
            // icon: <FaClock />,
            text: "7 Days Returns",
        },
        {
            // icon: <FaBan />,
            text: "Warranty not available",
        }
    ]

    const productDetails=useSelector((state)=>state.detailsProduct)
    console.log(productDetails,'productDetails')

  return (
    <div className="container px-5 py-24 mx-auto" style={{ cursor: "auto" }}>
            <div className="lg:w-4/5 mx-auto flex flex-wrap justify-between">
                <div className='lg:w-1/2 w-full'>
                    <ProductdetailsCarusel  productDetails={productDetails}/>
                </div>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style={{ cursor: "auto" }}>
                    <h2 className="text-sm title-font text-gray-500 tracking-widest" style={{ cursor: "auto" }}>ON SALE</h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1" style={{ cursor: "auto" }}>{productDetails?.title}</h1>
                    <div className="flex mb-4">
                        <span className="flex items-center">
                        <StarIcon className="text-orange-500" fill="currentColor" />
                        <StarIcon className="text-orange-500" fill="currentColor" />
                        <StarIcon className="text-orange-500" fill="currentColor" />
                        <StarIcon className="text-orange-500" fill="currentColor" />
                        <StarIcon className="text-orange-500" fill="none" />
                            <span className="text-gray-600 ml-3">20 Reviews</span>
                        </span>
                        <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                            {/* <SocialLink /> */}
                            <a className="text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>
                            </a>
                        </span>
                    </div>
                    <p className="leading-relaxed text-left">{productDetails?.description}</p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                        <div className="flex">
                            <span className="mr-3">Color</span>
                            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                            <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                        </div>
                        <div className="flex ml-6 items-center">
                            <span className="mr-3">Size</span>
                            <Select options={options} />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="title-font font-medium text-2xl text-gray-900">${productDetails?.price}</div>
                        <button className="bg-orange-400 rounded-md p-2 font-semibold text-white" onClick={() => handelincrement(productDetails)}>
                    ADD TO CART
                  </button>
                    </div>
                </div>
            </div>
            <div className="lg:w-4/5 mx-auto flex flex-wrap mt-10">
                {/* <ProductDetailInfoSection list={deliveryTextList} title={"Delivery"} />
                <ProductDetailInfoSection list={serviceTextList} title={"Service"} /> */}
            </div>
            <div className="lg:w-4/5 mx-auto flex flex-wrap mt-10 bg-white p-2">
                {/* <ProductDetailReview/>
                <ProductDetailReview /> */}
            </div>
        </div>
  )
}
