
// import React, { Component } from "react";
import {  Form, Label, Input } from 'reactstrap';
import { Button  } from '@mui/material';
import Swal  from 'sweetalert2'
import { useSelector ,useDispatch} from 'react-redux';
import {decrementCounterALL} from '../Service/Action/Action'
import {Link, useNavigate} from 'react-router-dom'

import React from 'react'
import { TabTitle } from '../utils/FunctionTitle';
import { useState } from 'react';
import { notifyError, notifySuccess } from '../components/common/notifySuccess';
 const CheckOut = () => {
     TabTitle('Amar Bazar | CheckOut')
    const dispatch=useDispatch()
    const product = useSelector((state) => state.product);
    const navigate=useNavigate()

    const [data,setData]=useState({
      phone:'',
      name:'',
      date:'',
      email:'',
      time:'',
      area:'',
      city:'',
      state:'',
      postcode:'',
      cardnumber:'',
      expirationDate:'',
      cvv:'',
      cardholder:''
      
    })
  console.log(data,'data')

  


   const handelSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    if (data.name === "" || data.phone === '' ||  data.date === "" || data.email === '' || data.cardnumber === "" || data.expirationdate === "") {
      console.log('first')
      notifyError('Please Fillup Carefully')
    } else {
      notifySuccess('Your Order Confirmed Successfuly')
        // Reset name and email to empty strings
        setData({
      ...data,
      phone:'',
      name:'',
      date:'',
      email:'',
      time:'',
      area:'',
      city:'',
      state:'',
      postcode:'',
      cardnumber:'',
      expirationDate:'',
      cvv:'',
      cardholder:''
    });
    dispatch(decrementCounterALL());
    // window.location.href = '/'
    navigate('/')
    document.getElementById('contactForm').reset();

    }
  };

   
  return (

    <>
      <form id='contactForm' onSubmit={handelSubmit}>
    <div class="flex flex-col md:flex-row items-start justify-between  mt-[30px] p-[50px] gap-2">

      <div class="mx-auto w-full md:w-3/5 bg-white p-10 rounded-md shadow-md mb-10">
        
          <div class="mb-5">
            <label
              for="name"
              class="mb-3 block text-start font-medium text-[#07074D]"
            >
              Full Name <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => {
                setData({
                  ...data,
                  name: e.target.value,
                });
              }}
              placeholder="Full Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="phone"
              class="mb-3 block text-start font-medium text-[#07074D]"
            >
              Phone Number <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              onChange={(e) => {
                setData({
                  ...data,
                  phone: e.target.value,
                });
              }}
              placeholder="Enter your phone number"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-start font-medium text-[#07074D]"
            >
              Email Address <span className='text-red-500'>*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setData({
                  ...data,
                  email: e.target.value,
                });
              }}
              placeholder="Enter your email"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="date"
                  class="mb-3 block text-start font-medium text-[#07074D]"
                >
                  Date <span className='text-red-500'>*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  onChange={(e) => {
                    setData({
                      ...data,
                      date: e.target.value,
                    });
                  }}
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="time"
                  class="mb-3 block text-start font-medium text-[#07074D]"
                >
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  onChange={(e) => {
                    setData({
                      ...data,
                      time: e.target.value,
                    });
                  }}
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div class="mb-5 pt-3">
            <label class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl text-start">
              Address Details
            </label>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <input
                    type="text"
                    name="area"
                    id="area"
                    onChange={(e) => {
                      setData({
                        ...data,
                        area: e.target.value,
                      });
                    }}
                    placeholder="Enter area"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    onChange={(e) => {
                      setData({
                        ...data,
                        city: e.target.value,
                      });
                    }}
                    placeholder="Enter city"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    onChange={(e) => {
                      setData({
                        ...data,
                        state: e.target.value,
                      });
                    }}
                    placeholder="Enter state"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <input
                    type="text"
                    name="postcode"
                    id="post-code"
                    onChange={(e) => {
                      setData({
                        ...data,
                        postcode: e.target.value,
                      });
                    }}
                    placeholder="Post Code"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          
        
      </div>

      <div class="mx-auto w-full md:w-2/5    rounded-sm sticky ">
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-lg font-medium mb-6">Payment Information</h2>
          
            <div class="grid grid-cols-2 gap-6">
              <div class="col-span-2 sm:col-span-1">
                <label
                  for="card-number"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Card Number<span className='text-red-500'>*</span>
                </label>
                <input
                  type="text"
                  name="card-number"
                  id="card-number"
                  onChange={(e) => {
                    setData({
                      ...data,
                      cardnumber: e.target.value,
                    });
                  }}
                  placeholder="0000 0000 0000 0000"
                  class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <label
                  for="expiration-date"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Expiration Date<span className='text-red-500'>*</span>
                </label>
                <input
                  type="text"
                  name="expirationdate"
                  id="expiration-date"
                  onChange={(e) => {
                    setData({
                      ...data,
                      expirationdate: e.target.value,
                    });
                  }}
                  placeholder="MM / YY"
                  class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <label
                  for="cvv"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  CVV
                </label>
                <input
                  type="text"
                  name="cvv"
                  id="cvv"
                  onChange={(e) => {
                    setData({
                      ...data,
                      cvv: e.target.value,
                    });
                  }}
                  placeholder="000"
                  class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <label
                  for="card-holder"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Card Holder
                </label>
                <input
                  type="text"
                  name="cardholder"
                  id="card-holder"
                  onChange={(e) => {
                    setData({
                      ...data,
                      cardholder: e.target.value,
                    });
                  }}
                  placeholder="Full Name"
                  class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div class="mt-8">
              <button
                type="submit"
                class="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none"
              >
                Confirm
              </button>
            </div>
         
        </div>
      </div>
    </div>

      </form>
    </>
    
  );
}

export default CheckOut



