import React from 'react'
import Logo from './Logo'
import NavItem from './NavItem'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'


const NavBar = () => {
  return (
    <header className={`w-full flex-center border-b header`}>
      <div className='wrapper w-full flex-between'>
        <div className='flex gap-3 items-center'>
          <Logo></Logo>
        </div>

        <div className='hidden md2:flex'>
          <NavItem></NavItem>
        </div>

        <div className='md2:flex gap-2 hidden'>
          <Button variant={'secondary'} className='py-5 md:px-12 px-7'>Liên Hệ</Button>
          <Button className='py-5 px-4 bg-blue-600 rounded-2xl'>Đăng Nhập</Button>
        </div>

        <div className='md2:hidden'>
          <Sheet>
            <SheetTrigger>
              <Image src='images/nav.svg' alt='nav' width={20} height={20}></Image>
            </SheetTrigger>
            <SheetContent>
              <div className='w-full h-full flex flex-col gap-3'>
                <Logo></Logo>
                <NavItem></NavItem>
                <div className='flex flex-col gap-3'>
                  <Button variant={'secondary'} className='w-full p-5'>Liên Hệ</Button>
                  <Button className='py-5 px-4 bg-blue-600 rounded-2xl'>Đăng Nhập</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>



        
        
      </div>
    </header>
  )
}

export default NavBar