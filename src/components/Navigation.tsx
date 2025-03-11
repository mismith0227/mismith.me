'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { OpenInNew } from './Icon/OpenInNew'

const navigations = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    isExternal: false,
  },
  {
    id: 'series',
    label: 'Series',
    href: '/series',
    isExternal: false,
  },
  {
    id: 'photos',
    label: 'Photos',
    href: '/photos',
    isExternal: false,
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
    isExternal: false,
  },
  {
    id: 'blog',
    label: 'Blog',
    href: '/blog',
    isExternal: false,
  },
  {
    id: 'note',
    label: 'Note',
    href: '/note',
    isExternal: false,
  },
  {
    id: 'request',
    label: 'Request',
    href: '/request',
    isExternal: false,
  },
  {
    id: 'shop',
    label: 'Shop',
    href: 'https://shop.mismith.me/',
    isExternal: true,
  },
]

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const pathName = usePathname()

  useEffect(() => {
    handleChangeRoute()
  }, [pathName])

  const handleChangeRoute = () => {
    setIsMenuOpen(false)
  }

  const isActiveMenu = (value: string) => {
    if (value === '/') {
      return pathName === value
    } else {
      return pathName !== '/' && pathName.includes(value)
    }
  }

  return (
    <>
      <p
        className={`fixed z-[100] font-bold top-4 left-4 text-base sm:left-8 md:top-6 md:left-12 md:text-2xl ${
          pathName == '/' && !isMenuOpen && 'text-white'
        }`}
      >
        mismith
      </p>
      <nav
        className={`navContainer max-sm:bg-white ${
          pathName === '/' && 'sm:text-white max-sm:bg-white/80'
        } ${isMenuOpen ? 'isOpenNav text-black' : 'isCloseNav'}`}
      >
        <div className={`max-sm:relative max-sm:flex max-sm:flex-col`}>
          <ul className="flex gap-4 flex-col m-0 p-0 list-none md:gap-2 md:gap-3">
            {navigations.map((n) => (
              <li key={n.id} className="relative transition duration-200">
                <span
                  className={`navItemInner transition-transform ${
                    isActiveMenu(n.href)
                      ? 'before:scale-x-100 font-bold'
                      : 'before:scale-x-0 hover:before:scale-x-100'
                  } ${
                    pathName !== n.href &&
                    'before:transition-transform before:duration-300'
                  }`}
                >
                  <Link
                    href={n.href}
                    aria-label={n.label}
                    className="inline-flex items-center no-underline text-current"
                    target={n.isExternal ? '_blank' : undefined}
                  >
                    {n.label}
                    {n.isExternal && (
                      <OpenInNew className="ml-[4px] text-[14px]" />
                    )}
                  </Link>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <button
        className={`block hidden max-sm:block fixed top-4 right-4 z-[100] text-sm h-[30px] border-none p-0 bg-transparent transition-all duration-200 text-current tracking-wide font-bold hover:cursor-pointer ${
          pathName === '/' && !isMenuOpen && 'text-white'
        }`}
        aria-controls="navigation"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
    </>
  )
}
