import { DepartmentsInShop } from '@/utils/data'
import Link from 'next/link'
import React from 'react'

const Departments = () => {
    return (
        <div>
            <h2 className='font-bold text-2xl'>Department</h2>
            <div className='flex flex-col'>
                {DepartmentsInShop.map((department, i) => (
                    <Link href={`/shop`} key={i} className='my-2'>{department}</Link>
                ))}
            </div>
        </div>
    )
}

export default Departments