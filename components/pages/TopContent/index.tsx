import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import { Wrap, List, Item, StyledImage, Dots, Dot } from './styles'
import { Props } from './types'

export const TopContent = ({ data }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <Wrap>
      <div ref={sliderRef} className="keen-slider">
        {data.map((item) => (
          <div key={item.id} className="keen-slider__slide">
            <StyledImage
              key={item.id}
              src={item.image.url}
              alt={item.title}
              width={item.image.width}
              height={item.image.height}
            />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <Dots>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <Dot
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                isCurrent={currentSlide === idx}
              />
            )
          })}
        </Dots>
      )}
    </Wrap>
  )
}
