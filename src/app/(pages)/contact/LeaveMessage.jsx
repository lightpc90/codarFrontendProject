import React from 'react'

const LeaveMessage = () => {
    return (
        <div className='flex flex-col w-full gap-6 items-center'>
            <h2 className='text-2xl font-bold mt-[70px] mb-[50px]'>Leave Message</h2>
            <div className='flex flex-col w-full gap-6 items-center'>
                <span className='w-full flex items-center gap-4'>
                    <input type='text' id='name' placeholder='Your Name' className='flex-1 outline-none border-[1px] border-gray-300 py-3 px-4 rounded-sm'/>
                    <input type='email' id='email' placeholder='Your Email' className='flex-1 outline-none border-[1px] border-gray-300 py-3 px-4 rounded-sm' />
                </span>
                <textarea id='message' placeholder='Your Message' className='w-full outline-none border-[1px] border-gray-300 py-3 px-4 rounded-sm h-[150px]' />
                <button className='bg-primary py-4 px-8 w-fit text-white font-bold'>SEND MESSAGE</button>
            </div>
        </div>
    )
}

export default LeaveMessage