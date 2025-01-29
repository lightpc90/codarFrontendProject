import Link from 'next/link'
import React from 'react'

const PagesLinks = [
    {name: 'Shop Details', link: '/shop-details'},
    {name: 'Shopping Cart', link: '/shopping-cart'},
    {name: 'Check Out', link: '/checkout'},
    {name: 'Blog Details', link: '/blog-details'},
]

const PagesTooltip = () => {
  return (
      <div className='bg-black text-white p-4 flex flex-col gap-3 text-sm w-[150px]'>
          {PagesLinks.map(({name, link}, i) => (
              
              <Link key={i} href={link} className='transition-all duration-500 delay-50 
              hover:text-primary font-light'>
                  {name}
              </Link>
          ))}
    </div>
  )
}

export default PagesTooltip