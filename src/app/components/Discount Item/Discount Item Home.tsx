import React from 'react'
import Image from 'next/image';  // next/image کمپوننٹ کو ایمپورٹ کریں

const DiscountItemHome = () => {
    return (
        <div>

            <div className='flex flex-col'>
                <div>
                    <nav className=''>
                        <h2 className='flex justify-center py-5 text-[30px]'>aaaaaaaaaa</h2>
                        <ul className='flex justify-center items-center text-center gap-9 text-sm text-[#151875] h- '>
                            <li className=' hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]'><a href="">Leatest Products</a></li>
                            <li className=' hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]'><a href="">Best Seller</a></li>
                            <li className=' hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]'><a href="">Featured</a></li>
                            <li className=' hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]'><a href="">Special Offer</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='flex bg-[#F2F0FF] h-[490] justify-center   w-[1263] max-w-screen-xl  mt-[30]  mx-auto'>


                    <div>
                        <div className='flex justify-center mt-  '>
                            <div>

                                <h2 className='text-[30px] text-black font-bold'>20% Discount Of All Products</h2>
                                <h2 className='text-[14px] text-[#FB2E86] pt-5'>Eams Sofa Compact</h2>
                                <div className='pt-9 '>
                                    <h2 className='text-[13px] text-[#8A8FB9] pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget <br /> feugiat habitasse nec, bibendum condimentum.</h2>
                                    <div className='flex gap-6'>
                                        <div>
                                            <div className='flex gap-2 h-7   '>
                                                <div className='mt-1.5 w-2 h-2 bg-[#F52B70] rounded-3xl' />
                                                <h2 className='text-[13px] text-[#8A8FB9] w-[] '>Material expose like metals</h2>
                                            </div>
                                            <div className='flex gap-2 h-7   '>
                                                <div className='mt-1.5 w-2 h-2 bg-[#F52B70] rounded-3xl' />
                                                <h2 className='text-[13px] text-[#8A8FB9] '>Material expose like metals</h2>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex gap-2 h-7   '>
                                                <div className='mt-1.5 w-2 h-2 bg-[#F52B70] rounded-3xl' />
                                                <h2 className='text-[13px] text-[#8A8FB9]  '>Clear lines and geomatric figures</h2>
                                            </div>
                                            <div className='flex gap-2 h-7   '>
                                                <div className='mt-1.5 w-2 h-2 bg-[#F52B70] rounded-3xl' />
                                                <h2 className='text-[13px] text-[#8A8FB9]  '>Material expose like metals</h2>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='pt-5'>
                                    <button className='  w-[140] h-10 text-white bg-[#FB2E86]'>Add To Cart</button>
                                    </div>
                                </div>

                            </div>
                            

                            <div className='flex  mr-[430]   ' >
                                <div className='bg-[#ECD2FA59] w-[350] h-[360] rounded-[410] ml-11 absolute  z-0  ' />
                                {/* <div className='bg-[#ECD2FA59] w-[350] h-[360] rounded-[410] mt-[50] absolute   z-10 ' /> */}
                                <div className='  ml-5 mt-1  absolute z-20'>
                                    <Image src="/tortuga-01.png" alt="" width={390} height={200} className='flex' />
                                </div>


                            </div>
                        </div>
                    </div>










                    

                </div>
            </div>
        </div>
    )
}

export default DiscountItemHome