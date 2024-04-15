import main1Img from '@/public/img/main-1.webp'
import main2Img from '@/public/img/main-2.webp'
import main3Img from '@/public/img/main-3.webp'
import {
  Wrap,
  StyledMainImage,
  SlideBar,
  SlideBarItem,
  ViewMore,
} from './styles'
import { useEffect, useState } from 'react'

const images = [main1Img, main2Img, main3Img]

export const HomeContainer = () => {
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
    <Wrap>
      {images.map((image, index) => (
        <StyledMainImage
          key={`image-${index}`}
          src={image}
          width={3000}
          height={2000}
          alt=""
          iscurrent={`${index === currentImageIndex}`}
        />
      ))}
      <ViewMore href="series">View More →</ViewMore>
      <SlideBar>
        {[...Array(images.length).keys()].map((index) => {
          return (
            <SlideBarItem
              key={index}
              iscurrent={`${index === currentImageIndex}`}
            />
          )
        })}
      </SlideBar>
    </Wrap>
  )
}
