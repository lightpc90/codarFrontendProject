import React from 'react'
import Preview from './Preview'
import Details from './Details'
import RelatedProduct from './RelatedProduct'

const page = () => {
  return (
      <div>
          <Preview/>
          <Details/>
          {/* related products */}
          <RelatedProduct/>
    </div>
  )
}

export default page