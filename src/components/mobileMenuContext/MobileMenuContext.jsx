'use client'

import { useState, useContext, createContext } from 'react'


const MenuContext = createContext()
export const useMobileMenu = () => useContext(MenuContext)
const MobileMenuProvider = ({ children }) => {
    const [openSlideIn, setOpenSlideIn] = useState(false)
    return (
        <MenuContext.Provider value={{ openSlideIn, setOpenSlideIn }}>
            <div onClick={() => setOpenSlideIn(false)} className={`${openSlideIn ?
                'h-screen overflow-hidden relative' :
                'min-h-[100vh] w-[100vw] overflow-x-hidden'}`}>
                {/* dark overlay */}
                <div className={`transform-all duration-500  ${openSlideIn &&
                    'absolute inset-0 h-full w-full bg-black/80 z-50 backdrop-blur-sm'}`}></div>
                {children}
            </div>
        </MenuContext.Provider>
    )
}
export default MobileMenuProvider