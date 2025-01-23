import Link from 'next/link';
import React from 'react'
import { TbHeartFilled } from "react-icons/tb";

const Likes = () => {
  return (
    <Link href={`/`} className='relative'>
      <div className='h-4 w-4 bg-primary rounded-full text-sm flex items-center justify-center text-white font-semibold absolute top-[-30%] right-[-70%]'>1</div>
          <TbHeartFilled/>
    </Link>
  )
}

export default Likes