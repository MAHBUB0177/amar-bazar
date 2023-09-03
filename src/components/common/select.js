import React from 'react'

const Select = ({ labalText, options, ...rest }) => {
    return (
        <>
            <label className="font-medium inline-block mb-3">{labalText}</label>
            <div className="relative">
                <select className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:bg-white appearance-none focus:outline-none focus:ring-2 pr-10">
                    {
                        options?.map((option, index) => <option key={index} value={option?.value}>{option?.name}</option>)
                    }
                </select>
                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                    </svg>
                </span>
            </div>
        </>
    )
}

export default Select