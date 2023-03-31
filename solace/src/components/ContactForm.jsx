import React from 'react'

const ContactForm = () => {
    return (
        <div className="flex justify-center py-10">
            <form className="max-w-[600px]">
                <div className="flex flex-col gap-y-8">
                    <div className="flex gap-x-2 items-center">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" className="w-full bg-transparent shadow appearance-none border rounded px-2 py-1 focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <label htmlFor="company">Company:</label>
                        <input type="text" name="company" id="company" className="w-full bg-transparent shadow appearance-none border rounded px-2 py-1 focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" className="w-full bg-transparent shadow appearance-none border rounded px-2 py-1 focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <label htmlFor="phone" className="">Phone:</label>
                        <input type="tel" name="phone" id="phone" className="w-full bg-transparent shadow appearance-none border rounded px-2 py-1 focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="flex gap-x-2">
                        <label htmlFor="notes">Notes:</label>
                        <textarea name="notes" id="notes" cols="30" rows="10" className="w-full bg-transparent shadow appearance-none border rounded px-2 py-1 focus:outline-none focus:shadow-outline h-32"></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-[#2323F2] text-white px-5 py-2 rounded shadow hover:bg-[#F3F3F3] hover:text-[#2323F2] transition duration-300 ease-in-out">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm