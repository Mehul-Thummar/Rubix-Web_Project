import React from 'react'

const Shop = () => {
    return (
        <div>
            {/* ------------------- Shop Page ------------------- */}
            <div className='flex justify-center '>
                <div className='w-screen relative'>
                    <div className='h-96'>
                        <div className='absolute' >
                            <img className='bg-fixed bg-no-repeat bg-cover w-screen' src="http://wordpress.blueskytechco.net/rubix/wp-content/uploads/2021/04/default_category.jpg" alt="" />
                        </div>
                        <div className='absolute w-screen px-8 mx-6 '>
                            <div className=''>
                                <h1 className='font-bold text-4xl'>Shop</h1>
                                <div className='flex '>
                                    <p className='hover:text-[#bd9b4c] mr-2'>Home / </p>
                                    <p className='text-gray-500'>Shop</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
