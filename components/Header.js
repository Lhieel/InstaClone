import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    
    <div>
      <div className='flex justify-between max-w-6xl'> 
        <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
          <Image src="https://links.papareact.com/ocw" layou="fill" width={100} height={100} object-Fit='contain' />  
        </div>
      </div> 
        
      <div className='relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer'>
        <Image src="https://links.papareact.com/jjm" layou="fill" width={100} height={100} object-Fit='contain' />
      </div>  
      
      <div>
        <div>
          <MagnifyingGlassIcon className='h-5 w-5'/>
        </div>

        <input type="text" placeholder='Search'></input>
      </div>

    </div>
    
  )
}

