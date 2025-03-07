import React from 'react'

const OrderDetails = () => {
    return (
        <div className='px-6 py-12 flex flex-col w-full gap-4 2xl:w-[350px] bg-gray-200 h-fit'>
            <span className='font-bold text-2xl'>
                Your Order
            </span>
            {/* spacing */}
            <span className='inline-flex h-[1px] w-full bg-gray-300 px-4'></span>
            {/* spacing */}
            <div className='flex items-center justify-between font-bold text-lg'>
                <span>Products</span>
                <span>Total</span>
            </div>

            <div className='flex items-center justify-between text-gray-500'>
                <span>{`Vegetable's Package`}</span>
                <span className='font-bold'>$75.99</span>
            </div>
            <div className='flex items-center justify-between text-gray-500'>
                <span>{`Fresh Vegetable`}</span>
                <span className='font-bold'>$151.99</span>
            </div>
            <div className='flex items-center justify-between text-gray-500'>
                <span>{`Organic Bananas`}</span>
                <span className='font-bold'>$53.99</span>
            </div>
            {/* spacing */}
            <span className='inline-flex h-[1px] w-full bg-gray-300 px-4'></span>
            {/* spacing */}
            <div className='text-black font-bold text-lg flex items-center justify-between'>
                <span>{`Subtotal`}</span>
                <span>$750.99</span>
            </div>
            {/* spacing */}
            <span className='inline-flex h-[1px] w-full bg-gray-300 px-4'></span>
            {/* spacing */}
            <div className='text-black font-bold text-lg flex items-center justify-between'>
                <span>{`Total`}</span>
                <span>$750.99</span>
            </div>
            {/* spacing */}
            <span className='inline-flex h-[1px] w-full bg-gray-300 px-4'></span>
            {/* spacing */}
            <label className='flex items-center gap-2'>
                <input type="checkbox" name="create_account" className='' />
                <span>Create an account?</span>
            </label>
            <p className='text-gray-500 text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae.
                lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae.
                lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae.
            </p>
            <label className='flex items-center gap-2'>
                <input type="checkbox" name="check_payment" className='' />
                <span>Check Payment</span>
            </label>
            <label className='flex items-center gap-2'>
                <input type="checkbox" name="paypal" className='' />
                <span>Paypal</span>
            </label>
            <button className='bg-primary text-white font-bold py-3 px-6 text-xl'>PLACE ORDER</button>
        </div>
    )
}

export default OrderDetails