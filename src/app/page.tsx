'use client'

import { useEffect, useState } from 'react'
import main1Img from '@/public/img/main-1.webp'
import main2Img from '@/public/img/main-2.webp'
import main3Img from '@/public/img/main-3.webp'
import Image from 'next/image'
import Link from 'next/link'

const images = [main1Img, main2Img, main3Img]

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 6000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="relative w-screen h-screen h-dvh after:content-[''] after:absolute after:top-0 after:left-0 after:z-3 after:block after:w-full after:h-full after:bg-black/40">
      {images.map((image, index) => (
        <Image
          key={`image-${index}`}
          src={image}
          width={3000}
          height={2000}
          alt=""
          className={`absolute top-0 left-0 z-1 w-full h-full object-cover object-center transition-opacity duration-[1500ms] ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <Link
        href="series"
        className="absolute right-2 bottom-10 md:right-6 md:bottom-16 z-5 inline-flex items-center justify-center px-4 py-1.5 text-white border border-white text-[14px] transition duration-200 md:hover:bg-white md:hover:text-black"
      >
        View More
      </Link>
      <div className="gap-x-2 right-2 bottom-4 absolute md:bottom-10 left-0 md:right-6 z-5 flex justify-end md:gap-x-4 mx-auto">
        {[...Array(images.length).keys()].map((index) => {
          return (
            <div
              key={index}
              className={`w-[50px] relative md:w-[100px] h-1 bg-[#808080] relative before:content-[''] before:block before:w-full before:h-full before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:origin-top-left before:bg-white before:scale-x-0 ${
                index === currentImageIndex &&
                'before:animate-bar before:scale-x-100'
              }`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Home
