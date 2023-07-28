import Image from 'next/image'
import React from 'react'
import avatar1 from '../../../assets/images/avatar1.png'
import LeftSideCom from '@/app/components/LeftSideCom'

const Testdashboard = () => {
  return (
    <div className='w-[50%] bg-red-300  h-[75%]  m-auto  flex items-center justify-center lg:flex-row flex-col '>

      <div className='lg:w-[40%] md:w-2/3 w-full  h-full'>
        <Image src={avatar1} alt='Avatart 1' className='w-full h-full object-fill' />
      </div>
      <div className=' lg:w-[60%] md:w-2/3  h-full'>
        <LeftSideCom />
      </div>

    </div>
  )
}

export default Testdashboard
