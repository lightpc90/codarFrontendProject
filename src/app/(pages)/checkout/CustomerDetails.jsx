import React from 'react'

const CustomerDetails = () => {
    return (
        <div className='flex flex-col gap-4'>
            {/* first name and last name */}
            <div className='flex items-center gap-6 w-full'>
                <label className='flex-1 flex-col gap-3 inline-flex'>
                    <div className='flex items-center'>
                        First Name
                        <span className='text-red-500'>*</span>
                    </div>
                    <input type="text" name="first_name" className='w-full outline-none border-[1px] border-gray-200 py-3 px-4 rounded-sm' />
                </label>
                <label className='flex-1 flex-col gap-3 inline-flex'>
                    <div className='flex items-center'>
                        Last Name
                        <span className='text-red-500'>*</span>
                    </div>
                    <input type="text" name="first_name" className='w-full outline-none border-[1px] border-gray-200 py-3 px-4 rounded-sm' />
                </label>
            </div>
            {/* country */}
            <label className='flex flex-col gap-3'>
                <div className='flex items-center'>
                    Country
                    <span className='text-red-500'>*</span>
                </div>
                <input type="text" name="country" className='w-full outline-none border-[1px] border-gray-200 py-3 px-4 rounded-sm' />
            </label>
            {/* address */}
            <label className='flex flex-col gap-3'>
                <div className='flex items-center'>
                    Address
                    <span className='text-red-500 '>*</span>
                </div>
                <input type="text" name="street address" placeholder='Street Address' className='w-full mb-4 outline-none border-[1px] border-gray-200 py-3 px-4 rounded-sm' />
                <input type="text" name="apartment address" placeholder='Apartment, suite, unit etc(optional)' className='w-full outline-none border-[1px] border-gray-200 py-3 px-4 rounded-sm' />
            </label>
            {/* city */}
            <label className='flex flex-col gap-3'>
                <div className='flex items-center'>
                    Town/City
                    <span className='text-red-500'>*</span>
                </div>
                <input type="text" name="city" className='w-full outline-none border-[1px] border-gray-200 py-3 px-4 rounded-sm' />
            </label>
            {/* Counrty/State */}
            <label className='flex flex-col gap-3'>
                <div className='flex items-center'>Country/State<span className='text-red-500'>*</span></div>
                <input type="text" name="state" className='w-full outline-none border-[1px] border-gray-200 py-3 px-4 rounded-sm' />
            </label>
            {/* postcode */}
            <label className='flex flex-col gap-3'>
                <div className='flex items-center'>Postcode/Zip<span className='text-red-500'>*</span></div>
                <input type="text" name="postcode" className='w-full outline-none border-[1px] border-gray-200 py-3 px-4 rounded-sm' />
            </label>
            {/* phone and email */}
            <div className='flex items-center gap-4'>
                {/* phone */}
                <label className='flex-1 flex flex-col gap-3'>
                    <div className=''>Phone<span className='text-red-500'>*</span></div>
                    <input type="text" name="phone" className='w-full outline-none border-[1px] border-gray-200 py-3 px-4 rounded-sm' />
                </label>
                {/* email */}
                <label className='flex-1 flex flex-col gap-3'>
                    <div>Email Address<span className='text-red-500'>*</span></div>
                    <input type="text" name="email" className='w-full outline-none border-[1px] border-gray-200 py-3 px-4 rounded-sm' />
                </label>
            </div>
            {/* ------------ */}
            <label htmlFor='create_account' className='cursor-pointer'>
                <input type="checkbox" id="create_account" className='mr-2' />
                <span>Create an account?</span>
            </label>
            <p>
                Create an account by entering the information below. If you are a returning customer please login at the top of the page
            </p>

            <div className='flex flex-col gap-3'>
                <div className='flex items-center'>
                Account Password
                <span className='text-red-500'>*</span>
                </div>
                <input type="password" name="password" className='w-full outline-none border-[1px] border-gray-200 py-3 px-4 rounded-sm' />
            </div>
            <label htmlFor='ship_to_different_address' className='cursor-pointer'>
                <input type="checkbox" id="ship_to_different_address" className='mr-2' />
                <span>Ship to a different address?</span>
            </label>
            {/* ------------ */}
            <p>Order notes <span className='text-red-500'>*</span></p>
            <input type='text' name='order_notes' placeholder='Notes about your order, e.g. special notes for delivery' className='w-full outline-none border-[1px] border-gray-200 py-3 px-4 rounded-sm' />

        </div>
    )
}

export default CustomerDetails