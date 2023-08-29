
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
    let name = document.getElementById('firstName').value;
    let lname = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let street = document.getElementById('street').value;
  
    if (name === "" || phone==='' ||  lname==="" || email === '' || street==="") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fillup carefully!',
        timer: 2000
      })
    }
    else {
     Swal.fire({
      icon: 'success',
      title: 'Your Order Is Confirmed!!',
      showConfirmButton: false,
      timer: 1500,
     })
     dispatch(decrementCounterALL());
    window.location='/'
    console.log('mahbub reedirect')
    }
  
//     event.preventDefault()
    var frm = document.getElementsByName('contact-form')[0];
    frm.submit(); // Submit the form
    frm.reset();  // Reset all form data

    // return false; // Prevent page refresh
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
              Full Name
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
              Phone Number
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
              Email Address
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
                  Date
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
            <label class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
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
                  Card Number
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
                  Expiration Date
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



