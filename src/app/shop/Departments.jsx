import { DepartmentsInShop } from '@/utils/data'
import React from 'react'

const Departments = () => {
  return (
      <div>
          <h2 className='font-bold text-2xl'>Department</h2>
          {DepartmentsInShop.map((department, i) => (
              <h5 key={i} className='my-4'>{department}</h5>
          ))}
      </div>
  )
}

export default Departments