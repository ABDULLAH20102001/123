import React from 'react'

const TrendingProductsHome = () => {
    return (
        <div>
            <div className='flex bg-[#F2F0FF] h-[490] justify-center   w-[1263] max-w-screen-xl  mt-[100]  mx-auto'>

                {/* <div><img src="icon/image 32.png" alt="" className='w-[260]' /></div> */}

                <div className='flex  mr-[430]   ' >
                    <div className='bg-[#ECD2FA59] w-[350] h-[360] rounded-[410] ml-11 absolute  z-0  ' />
                    <div className='bg-[#ECD2FA59] w-[350] h-[360] rounded-[410] mt-[50] absolute   z-10 ' />
                    <div className='  ml-5 mt-14  absolute z-20'>
                        <img src="icon/Chair-Sofa-Armchair-1.png" alt="" width={390} className='flex' />
                    </div>

                    {/* <div className='bg-[#00C1FE] w-[100] h-[100] rounded-[410] ml-[300] mb-[300] z-30 m    '> <h2 className='flex justify-center mt-5 text-white text-2xl font-semibold text-center'>50% <br />off</h2></div> */}
                </div>

                <div className='flex  gap-[]'>
                    <div className='flex  flex-col mr- justify-center w-[550]   '>
                        {/* <h2 className='text-[14px] text-[#FB2E86]'>Best Furniture For Your Castle....</h2> */}
                        <h2 className='text-[44px] text-black font-bold'>Unique Features Of leatest &
                            Trending Poducts</h2>

                        <div className='pt-9 '>
                            <div className='flex gap-2 h-6   '>
                                <div className='mt-1.5 w-2 h-2 bg-[#F52B70] rounded-3xl' />
                                <h2 className='text-[13px] text-[#8A8FB9] w-[456] h-14'>All frames constructed with hardwood solids and laminates</h2>
                            </div>
                            <div className='flex gap-2 h-11'>
                                <div className='mt-1.5 w-2 h-2 bg-[#2B2BF5] rounded-3xl' />
                                <h2 className='text-[13px] text-[#8A8FB9] w-[456] h-14'>Reinforced with double wood dowels, glue, screw - nails corner
                                    blocks and machine nails</h2>
                            </div>
                            <div className='flex gap-2 h-6 '>
                                <div className='mt-1.5 w-2 h-2 bg-[#2BF5CC] rounded-3xl' />
                                <h2 className='text-[13px] text-[#8A8FB9] w-[456] h-14'>Arms, backs and seats are structurally reinforced</h2>
                            </div>
                        </div>



                        <div className='flex  items-center gap-5 py-5'>
                            <button className='w-[140] h-10 text-white bg-[#FB2E86]'>Add To Cart</button>
                            <div className='text-[#151875]'>
                                <h2>B&B Italian Sofa </h2>
                                <h2>$32.00</h2>
                            </div>
                        </div>
                    </div>

                    {/* <div className='flex items-center mr-14 ' >
            <div className='bg-[#ECD2FA59] w-[400] h-[410] rounded-[410] ml-11 absolute  z-0  ' />
            <div className='bg-[#ECD2FA59] w-[400] h-[410] rounded-[410] mt-[50] absolute   z-10 ' />
            <div className='   ml- mt-14  absolute z-20'>
              <img src="icon/Armchair-Fabric 1.png" alt="" width={380} className='' />
            </div>
            
            <div className='bg-[#00C1FE] w-[100] h-[100] rounded-[410] ml-[300] mb-[300] z-30 m    '> <h2 className='flex justify-center mt-5 text-white text-2xl font-semibold text-center'>50% <br />off</h2></div>
          </div> */}
                </div>

            </div>
        </div>
    )
}

export default TrendingProductsHome