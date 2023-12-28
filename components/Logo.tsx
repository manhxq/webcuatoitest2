import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'} className='flex items-center'>
        <Image
        src={'/images/logo.png'}
        alt='logo'
        width={70}
        height={70}
        ></Image>
        <div><h2 className='text-[24px] mt-2 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent'>WEBCUATOI</h2></div>
    </Link>
    
  )
}

export default Logo