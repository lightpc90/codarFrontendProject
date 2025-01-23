import React from 'react'
import ContactBar from './ContactBar'
import Navbar from './NavBar'

const Header = () => {
    return (
        <div className='flex flex-col w-full gap-4'>
            <ContactBar />
            <Navbar />
        </div>
    )
}

export default Header