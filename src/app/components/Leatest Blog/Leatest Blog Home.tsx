import Image from 'next/image';  // next/image کمپوننٹ کو ایمپورٹ کریں
import React from 'react'

const LeatestBlogHome = () => {
    return (
        <div>
            <div>
                <div className=' flex justify-center items-center'>
                    <div className=' absolute  mt-14'>
                        <h2 className=' flex justify-center items-center text-center  h-14 w-140 text-[25px]     text-[#151875]'>Get Leatest Update By Subscribe
                            <br /> 0ur Newslater</h2>
                        <div className='flex justify-center py-5'>
                            <button className='w-[110] h-[35px] bg-[#FB2E86]'>Shop Now</button>
                        </div>
                    </div>
                    <Image src="/Rectangle102.png" alt="" width={10000} height={1000} className=' w-[1263] h-[450px] ' />

                </div>

                <div className='flex justify-center'>
                    <div className='bg-red-300 flex justify-center items-center w-[700] h-[200]'>
                        <Image src="/image174.png" alt="" width={1000} height={500} className='flex justify-center w-[650] h-[100]'/>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default LeatestBlogHome