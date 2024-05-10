import React from 'react'
import img404 from '../images/404.svg'
import { TabTitle } from '../utils/FunctionTitle'
import { useSelector } from 'react-redux'



export const Profile = () => {
    TabTitle('Amar Bazar | Profile')

    const user = useSelector(state => state.userAuth)
    console.log(user,'12345678')

    const items = [
        {
            label: "First Name",
            text: "Jeanne",
        },
        {
            label: "Last Name",
            text: "Halvorson",
        },
        {
            label: "Gender",
            text: "Female",
        },
        {
            label: "Contact No.",
            text: "+11 998001001",
        },
        {
            label: "Current Address",
            text: "Beech Creek, PA, Pennsylvania",
        },
        {
            label: "Permanant Address",
            text: "Arlington Heights, IL, Illinois",
        },
        {
            label: "Email.",
            text: "jane@example.com",
        },
        {
            label: "Birthday.",
            text: "Feb 06, 1998",
        },
    ]
    return (
        <>
          

<div className="bg-white mx-auto max-w-screen-xl my-[100px]  p-3">
            <div className="md:flex no-wrap">

                <div className="w-full md:w-3/12 m-2 shadow-2xl">
                    <div className="bg-white p-3 border-t-4 border-primary">
                        <div className="image overflow-hidden">
                        <img className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4" src={user?.user?.photoURL ? user?.user?.photoURL : user?.image} alt="" />
                        </div>
                        <div className="py-2">
                                    <h3 className="font-bold text-2xl mb-1">{user?.user?.displayName ? user?.user?.displayName  : `${user?.firstName} ${user?.lastName}`}</h3>
                                    <div className="inline-flex text-gray-700 items-center">
                                        <svg className="h-5 w-5 text-gray-400 mr-1" fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                            <path className=""
                                                d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                                        </svg>
                                        New York, NY
                                    </div>
                                </div>
                        <h3 className="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
                        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
                            consectetur adipisicing elit.
                            Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                        <ul
                            className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                            <li className="flex items-center py-3">
                                <span>Status</span>
                                <span className="ml-auto"><span
                                    className="bg-primary py-1 px-2 rounded text-white text-sm">Active</span></span>
                            </li>
                            <li className="flex items-center py-3">
                                <span>Member since</span>
                                <span className="ml-auto">Nov 07, 2016</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full md:w-9/12 m-2 lg:h-64 h-auto">
                    <div className="bg-white p-3 rounded-sm shadow-2xl">
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span clas="text-green-500">
                                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <span className="tracking-wide font-medium text-lg">About</span>
                        </div>
                        <div className="text-gray-700">
                            <div className="grid md:grid-cols-2 text-sm">
                                {
                                    items?.map((item, index) =>  <div className="grid grid-cols-2">
                                    <div className=" py-2 font-semibold text-start">{item?.label}</div>
                                    <div className=" py-2 text-start">{item?.text}</div>
                                </div>)
                                }
                                <div className="grid grid-cols-2 ">
                                    <div className="px-4 py-2 font-semibold flex justify-start">
                                        <button type={"submit"} className=' bg-orange-500 rounded-md p-2 text-white w-[150px] h-[40px] ' >
                                        Change Password
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}
