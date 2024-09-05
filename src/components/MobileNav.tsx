"use client"

import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '../../public/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'


const MobileNav = () => {
    const pathname = usePathname();
  return (
      <section>
          <Sheet>
              <SheetTrigger>
                  <Image
                      src="/icons/hamburger.svg"
                      width={30}
                      height={30}
                      alt="menu"
                      className='cursor-pointer'
                  />
              </SheetTrigger>
            <SheetContent className='bg-white '>
                <Link href="/" className='mb-12 flex cursor-pointer items-center gap-2'>
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="Harmony logo"
                    /> 
                    <h1 className="font-ibm-plex-serif text-26 font-bold text-black-1">Harmony</h1>
                  </Link>
                  <div className="mobilenav-sheet">
                      <SheetClose asChild>
                          <nav className="flex h-full gap-6 pt-16 text-white flex-col">
                              {sidebarLinks.map((link) => {
                                const isActive =  pathname === link.route || pathname.startsWith(`{link.route}/`)
                                  return (
                                    <SheetClose asChild key={link.label}>
                                        <Link href={link.route} key={link.label} className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}>
                                                <Image
                                                    src={link.imgURL}
                                                    alt={link.label}
                                                  width={20}
                                                  height={20}
                                                    className={cn({'brightness-[3] invert-0':isActive})}
                                                />
                                            <p className={cn('text-16 text-black-2 font-semibold', {'text-white':isActive})}>{link.label}</p>
                                        </Link>
                                    </SheetClose>
                                    
                                )
                            })}
                          </nav>
                      </SheetClose>
                  </div>
                
            </SheetContent>
        </Sheet>

    </section>
  )
}

export default MobileNav