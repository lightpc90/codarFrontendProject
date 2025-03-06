import React from 'react'
import OrderDetails from './OrderDetails'
import CustomerDetails from './CustomerDetails'

const BillingDetails = () => {
    return (
        <div className='w-full flex flex-col gap-4'>
            <h3 className='font-bold text-2xl mt-12'>Billing Details</h3>
            <hr />
            <div className='flex flex-col 2xl:flex-row w-full gap-4'>
                <CustomerDetails/>
                <OrderDetails/>
            </div>
        </div>
    )
}

export default BillingDetails