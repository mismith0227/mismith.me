'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const pathName = usePathname()
  console.log(pathName)

  return (
    <>
      <p
        className={`fixed z-[100] font-weight top-4 left-4 text-base sm:left-8 md:top-6 md:left-12 md:text-2xl ${
          pathName === '/' && 'text-white'
        }`}
      >
        mismith
      </p>
      <nav
        className={`navContainer ${
          pathName === '/' && 'max-md:text-white max-md:bg-white/80'
        } ${isMenuOpen ? 'isOpenNav' : 'isCloseNav'}`}
      >
        <div
          className={`max-sm:relative max-sm:flex max-sm:flex-col ${
            pathName === '/' && 'text-white'
          }`}
        >
          <ul className="flex flex-col m-0 p-0 list-none gap-2 md:gap-3">
            <li className="relative transition duration-200">
              <span
                className={`navItemInner transform ${
                  pathName === '/'
                    ? 'before:scale-x-100'
                    : 'before:scale-x-0 hover:before:scale-x-100'
                } ${
                  pathName !== '/' &&
                  'before:transition-transform before:duration-300'
                }`}
              >
                <Link
                  href="/"
                  className="inline-flex items-center no-underline text-current text-xl"
                >
                  Home
                </Link>
              </span>
            </li>
            <li className="relative transition duration-200">
              <span
                className={`navItemInner transform ${
                  pathName === '/series'
                    ? 'before:scale-x-100'
                    : 'before:scale-x-0 hover:before:scale-x-100'
                } ${
                  pathName !== '/series' &&
                  'before:transition-transform before:duration-300'
                }`}
              >
                <Link
                  href="/series"
                  className="inline-flex items-center no-underline text-current text-xl"
                >
                  Series
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
