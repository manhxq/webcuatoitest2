import React from 'react'
import { navItem } from '@/app/constant'
import Link from 'next/link'

const NavItem = () => {
  return (
    <ul className='flex w-full max-md2:flex-col gap-3 mt-3'>
        {
            navItem.map((item) => {
                return(
                    <li key={item.label} className='hover:bg-gray-200 duration-10 delay-2 p-3 rounded-lg transition duration-10 delay-4'>
                        <Link
                            href={item.ref}
                    
                        >
                            <p className='font-normal text-[16px] leading-3 text-black'>
                                {item.label}
                            </p>
                        </Link>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default NavItem