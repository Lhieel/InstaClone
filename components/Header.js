import React from 'react'
import Image from 'next/image'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineMenu } from 'react-icons/ai'
import { HiOutlinePaperAirplane,  } from 'react-icons/hi'
import { GrHomeRounded } from 'react-icons/gr'
import { FiPlusSquare } from 'react-icons/fi'

export default function Header() {
  return (
    
    <div>
      <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'> 
        <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
          <Image src="https://links.papareact.com/ocw" layou="fill" width={100} height={100} object-Fit='contain' />  
        </div>

        <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
          <Image src="https://links.papareact.com/jjm" layou="fill" width={100} height={100} object-Fit='contain' />
        </div>  


        <div className='max-w-xs'>
          <div className='relative mt-1 p-3 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <BiSearch className='h-5 w-5 text-gray-500'/>
            </div>

            <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md'
              type="text"
              placeholder='Search'
            />
          </div>
        </div>

        <div className='flex items-center justify-end space-x-4'>
          <GrHomeRounded className='navBtn' />
          <AiOutlineMenu className='h-6 md:hidden cursor-pointer' />
          <HiOutlinePaperAirplane className='navBtn' />
          <FiPlusSquare className='navBtn'/>
        </div>
        
      </div> 
    </div>
    
  )
}

