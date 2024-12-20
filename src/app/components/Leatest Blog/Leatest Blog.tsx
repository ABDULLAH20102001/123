import React from 'react'
import { FaPenNib } from "react-icons/fa";     //pen icon
import { LuCalendarDays } from "react-icons/lu";  //calendar inon

const LeatestBlog = () => {
    return (
        <div>
            <div>
                <div className='my-14 flex '>
                    <div>
                        <h2>Leatest Blog</h2>
                    </div>
                    <div className='w-[275] h-[395] bg-red-400 flex justify-center'>
                        <div>
                            <div><img src="icon/Frame 3.png" alt="" /></div>
                            <div className='pl-3 bg-purple-100 text-[#151875]'>
                                <div className='flex gap-5 h-11 '>
                                    <div className='flex items-center'>
                                        <div><FaPenNib  className='flex text-[10px]  text-[#FB2E86]'/></div>
                                        <h2 className='text-[11px]'>SaberAli</h2>
                                    </div>
                                    <div className='flex  items-center'>
                                        <div><LuCalendarDays className='flex text-[10px] text-[#FFA454]'/></div>
                                        <h2 className='text-[11px]'>21 August,2020  </h2>
                                    </div>
                                </div>
                                <div className='bg-yellow- 300 h-[] pb-4 mt-1'>
                                    <h2 className='text-[13.6px]  font-semibold h-10'>Top esssential Trends in 2021</h2>
                                    <h2 className='text-[#72718F] text-[11px] h-11'>More off this less hello samlande lied much
                                    <br />over tightly circa horse taped mightly</h2>
                                    <div><a href="" className='text-[11px] '>Read More</a></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeatestBlog