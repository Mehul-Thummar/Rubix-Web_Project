import React from 'react'

const Section_5 = () => {
    return (
        <div>
            {/* ------------------- Section-5 ------------------- */}
            <div className='flex justify-center mt-20'>
                <div className=''>
                    <div className=''>  
                        <div class="bg-fixed bg-newsletter  w-screen " >
                            <div className='flex justify-center text-center py-24 px-24' >
                                <div className='py-20 px-24 newsletter'>
                                    <h1 className='font-bold text-[32px]'>Subcribe To Our Newsletter</h1>
                                    <p className=' mb-4'>Sign up for the weekly newsletter and build better ecommerce stores.</p>
                                    <div>
                                        <div className='flex justify-center items-center mt-5'>
                                            <input type="email" id="email" className=' border h-20 border-gray-300 text-gray-900 text rounded w-[580px] py-3' placeholder="Enter your email address " required />
                                            <button type="button" className=' text-white bg-black border-gray-300 hover:bg-[#bd9b4c] font-bold rounded text-sm px-8 py-3 ml-3'>Subcribe</button>
                                        </div>
                                    </div>
                                    <p className=''>We respect your privacy, so we never share your info.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section_5
