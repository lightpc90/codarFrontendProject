import React from 'react'
import Preview from './Preview'
import Details from './Details'
import RelatedProduct from './RelatedProduct'

const page = () => {
  return (
      <div className='w-full flex flex-col items-center px-4'>
          <Preview/>
          <Details/>
          {/* related products */}
          <RelatedProduct/>
    </div>
  )
}

export default page