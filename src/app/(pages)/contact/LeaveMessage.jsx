import React from 'react'

const LeaveMessage = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold mt-[70px] mb-[50px]'>Leave Message</h2>
            <div className='flex flex-col w-full'>
                <span>
                    <input type='text' id='name' placeholder='Your Name' />
                    <input type='email' id='email' placeholder='Your Email' />
                </span>
                <textarea id='message' />
                <button className='bg-primary py-2 px-6'>SEND MESSAGE</button>
            </div>
        </div>
    )
}

export default LeaveMessage