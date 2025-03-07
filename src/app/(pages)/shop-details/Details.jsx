'use client'
import { useState } from 'react'

const tab1 = () => {
    return <div className='flex flex-col gap-3'>
        <p>
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
            Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
            Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit
            amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
            Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
            accumsan id imperdiet et, porttitor at sem. Praesent sapien massa,
            a pellentesque nec, egestas non nisi. Vestibulum ac diam sit
            amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
            auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.
        </p>
        <p>
            Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
            ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta.
            Sed porttitor lectus nibh.
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
        </p>
        <p>
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
            Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
            auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.
            sit amet dui. Proin eget tortor risus.
        </p>
</div>}
const tab2 = () => {
    return <div className='flex flex-col gap-3'>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit,
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
            Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed
            sit amet dui. Proin eget tortor risus.
            Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit,
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
            Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed
           
        </p>
</div>}
const tab3 = () => {
    return <div className='flex flex-col gap-3'>
        <p>
            (1). Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
        </p>
        <p>
            (2). Pellentesque in ipsum id orci porta dapibus.
        </p>
        <p>
            (3). volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget
        </p>
        <p>
            (4). volutpat. Vestibulum ac diam sit amet quam 
        </p>
    </div>
}



const Details = () => {
    const [tab, setTab] = useState(1)
   
  return (
      <div className='w-full my-[70px]'>
          <div className='flex items-center justify-between gap-2'>
              <div className='border-b-[1px] border-gray-300 flex-1'></div>
              <div className='flex items-center gap-6 justify-between flex-1'>
                  <button onClick={() => setTab(1)} className={`font-bold ${tab === 1 ? 'text-black' : 'text-gray-500'}`}>Description</button>
                  <button onClick={() => setTab(2)} className={`font-bold  ${tab === 2 ? 'text-black' : 'text-gray-500'}`}>Information</button>
                  <button onClick={() => setTab(3)} className={`font-bold ${tab === 3 ? 'text-black' : 'text-gray-500'}`}>Reviews(1)</button>
              </div>
              <div className='border-b-[1px] border-gray-300 flex-1'></div>
              
          </div>
          <div className='mt-[70px] flex flex-col gap-6'>
              <p className='font-bold'>Product Information</p>
              <div>
                  {tab === 1 ? tab1() : tab === 2 ? tab2(): tab === 3 ? tab3() : tab1()}
              </div>
          </div>
    </div>
  )
}

export default Details