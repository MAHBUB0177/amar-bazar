
// import React, { Component } from "react";
import {  Form, Label, Input } from 'reactstrap';
import { Button  } from '@mui/material';
import Swal  from 'sweetalert2'
import { useSelector ,useDispatch} from 'react-redux';
import {decrementCounterALL} from '../Service/Action/Action'
import {Link} from 'react-router-dom'

import React from 'react'
import { TabTitle } from '../utils/FunctionTitle';
 const CheckOut = () => {
     TabTitle('Amar Bazar | CheckOut')
    const dispatch=useDispatch()
  

  const handelSubmit = event => {
    let phone = document.getElementById('phone').value;
    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let email = document.getElementById('email').value;
    let cardnumber = document.getElementById('card-number').value;
    let expirationDate = document.getElementById('expiration-date').value;
    
  
    if (name === "" || phone==='' ||  date==="" || email === '' || cardnumber==="" || expirationDate==="") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fillup carefully!',
        timer: 5000
      })
    }
    else {
     Swal.fire({
      icon: 'success',
      title: 'Your Order Is Confirmed!!',
      showConfirmButton: false,
      timer: 5000,
     })
     dispatch(decrementCounterALL());
     window.location.href = '/'
    // console.log('mahbub reedirect')
    document.getElementsByName('contact-form')[0].reset()
    }
  
   }

  return (
    <div class="flex flex-col md:flex-row items-start justify-between  mt-[30px] p-[50px] gap-2">
      <div class="mx-auto w-full md:w-3/5 bg-white p-10 rounded-md shadow-md mb-10">
        <form>
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
                    placeholder="Enter state"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <input
                    type="text"
                    name="post-code"
                    id="post-code"
                    placeholder="Post Code"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <button class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Book Appointment
            </button>
          </div> */}
        </form>
      </div>

      <div class="mx-auto w-full md:w-2/5    rounded-sm sticky ">
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-lg font-medium mb-6">Payment Information</h2>
          <form>
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
                  name="expiration-date"
                  id="expiration-date"
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
                  name="card-holder"
                  id="card-holder"
                  placeholder="Full Name"
                  class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div class="mt-8">
              <button
                type="submit"
                onClick={handelSubmit}
                class="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckOut



