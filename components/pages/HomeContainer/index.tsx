import { Fivehundredpx } from '@/components/atoms/Icon/Fivehundredpx'
import { GitHub } from '@/components/atoms/Icon/GitHub'
import { Instagram } from '@/components/atoms/Icon/Instagram'
import { Note } from '@/components/atoms/Icon/Note'
import { Twitter } from '@/components/atoms/Icon/Twitter'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import {
  Wrap,
  StyledImage,
  ArrowLeft,
  ArrowRight,
  Dots,
  Dot,
  Profile,
  Name,
  Description,
  StyledIconList,
  StyledIconListItem,
  ExternalLink,
  SlideWrap,
} from './styles'
import { Props } from './types'

export const HomeContainer = ({ data }: Props) => {
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
      <SlideWrap>
        <div ref={sliderRef} className="keen-slider">
          {data.map((item) => (
            <div key={item.id} className="keen-slider__slide">
              <StyledImage
                key={item.id}
                src={item.image.url}
                alt={item.title || ''}
                width={item.image.width}
                height={item.image.height}
              />
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <ArrowLeft onClick={() => instanceRef.current?.prev()} />

            <ArrowRight onClick={() => instanceRef.current?.next()} />
          </>
        )}
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
      </SlideWrap>

      <Profile>
        <Name>Misumi Takuma</Name>
        <Description>
          Street, portrait, etc.
          <br />
          Digital: X-S10 / RX100 M6
          <br />
          Film: Rollei B35
          <br />
          Free-lance web engineer / photographer based in Osaka, Japan.
        </Description>

        <StyledIconList>
          <StyledIconListItem>
            <ExternalLink
              href="https://twitter.com/misumi_takuma/"
              target="_blank"
              aria-label="Twitter"
              rel="noopener"
            >
              <Twitter />
            </ExternalLink>
          </StyledIconListItem>
          <StyledIconListItem>
            <ExternalLink
              href="https://www.instagram.com/mismith0227/?hl=ja"
              target="_blank"
              aria-label="Instagram"
              rel="noopener"
            >
              <Instagram />
            </ExternalLink>
          </StyledIconListItem>
          <StyledIconListItem>
            <ExternalLink
              href="https://500px.com/mismith2216"
              target="_blank"
              aria-label="500px"
              rel="noopener"
            >
              <Fivehundredpx />
            </ExternalLink>
          </StyledIconListItem>
          <StyledIconListItem>
            <ExternalLink
              href="https://github.com/mismith0227"
              target="_blank"
              aria-label="GitHub"
              rel="noopener"
            >
              <GitHub />
            </ExternalLink>
          </StyledIconListItem>
          <StyledIconListItem>
            <ExternalLink
              href="https://note.com/mismith"
              target="_blank"
              aria-label="note"
              rel="noopener"
            >
              <Note />
            </ExternalLink>
          </StyledIconListItem>
        </StyledIconList>
      </Profile>
    </Wrap>
  )
}
