import React from 'react'
import { IoMenu } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const DepartmentCat = () => {
  return (
      <button className='bg-primary text-white p-2 h-12 font-bold w-[250px] flex gap-2 items-center justify-around'>
          <span className='flex gap-2'>     
          <IoMenu size={22}/>
         All departments 
          </span>
          <RiArrowDropDownLine size={22} />
    </button>
  )
}

export default DepartmentCat