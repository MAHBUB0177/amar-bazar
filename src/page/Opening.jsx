import React from 'react'
import './Common.css'
export const Opening = () => {
  return (
    <div className=' row  opening' style={{ background: '#f7fcfc', height: 'auto', }}>
      <div class="max-w-7xl mx-auto  px-4 sm:px-6 lg:py-10 lg:px-8">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our service statistics</h2>
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
          <div class="bg-white overflow-hidden shadow sm:rounded-lg transform transition duration-300 hover:scale-105">
            <div class="px-4 py-5 sm:p-6">
              <dl>
                <dt class="text-sm leading-5 font-medium text-gray-500 truncate">Free Shipping From</dt>
                <dd class="mt-1 text-3xl leading-9 font-semibold text-indigo-600"> $500.00</dd>
              </dl>
            </div>
          </div>
          <div class="bg-white overflow-hidden shadow sm:rounded-lg transform transition duration-300 hover:scale-105">
            <div class="px-4 py-5 sm:p-6">
              <dl>
                <dt class="text-sm leading-5 font-medium text-gray-500 truncate">Support  At Anytime</dt>
                <dd class="mt-1 text-3xl leading-9 font-semibold text-indigo-600">24/7</dd>
              </dl>
            </div>
          </div>
          <div class="bg-white overflow-hidden shadow sm:rounded-lg transform transition duration-300 hover:scale-105">
            <div class="px-4 py-5 sm:p-6">
              <dl>
                <dt class="text-sm leading-5 font-medium text-gray-500 truncate">Latest Offer Upto Off</dt>
                <dd class="mt-1 text-3xl leading-9 font-semibold text-indigo-600">20% </dd>
              </dl>
            </div>
          </div>
          <div class="bg-white overflow-hidden shadow sm:rounded-lg transform transition duration-300 hover:scale-105">
            <div class="px-4 py-5 sm:p-6">
              <dl>
                <dt class="text-sm leading-5 font-medium text-gray-500 truncate">Total users</dt>
                <dd class="mt-1 text-3xl leading-9 font-semibold text-indigo-600">166.7K</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <hr className='hr-line' />
    </div>
  )
}
