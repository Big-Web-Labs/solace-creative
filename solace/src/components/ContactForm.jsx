import React from 'react'

const ContactForm = () => {
    return (
        <div className="section flex justify-center py-10">
            <form className="w-full max-w-[600px]">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-[#F3F3F3] font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Full Name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-[#F3F3F3] focus:border-[#11117E]" id="inline-full-name" type="text" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-[#F3F3F3] font-bold md:text-right mb-1 md:mb-0 pr-4" for="company">
                            Company
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-[#F3F3F3] focus:border-[#11117E]" id="company" type="text" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-[#F3F3F3] font-bold md:text-right mb-1 md:mb-0 pr-4" for="email">
                            Email
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-[#F3F3F3] focus:border-[#11117E]" id="email" type="email" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-[#F3F3F3] font-bold md:text-right mb-1 md:mb-0 pr-4" for="phone">
                            Phone Number
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-[#F3F3F3] focus:border-[#11117E]" id="phone" type="text" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-[#F3F3F3] font-bold md:text-right mb-1 md:mb-0 pr-4" for="notes">
                            Notes
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-[#F3F3F3] focus:border-[#11117E] min-h-[75px]" id="notes" type="text" />
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="shadow bg-[#11117E] hover:bg-blue-900 focus:shadow-outline focus:outline-none text-[#F3F3F3] font-bold py-2 px-4 rounded" type="button">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm