import React from 'react'
import { FaHeart, FaRetweet } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const ProductReaction = () => {
  return (
      <div>
          <Link href="/">
                <FaHeart />
          </Link>
          <Link href="/">
                <FaRetweet />
          </Link>
          <Link href="/">
                <FaCartShopping />
          </Link>
    </div>
  )
}

export default ProductReaction