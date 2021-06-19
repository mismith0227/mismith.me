import styled from '@emotion/styled'
import media from '../../../styles/media'

export const Container = styled.div`
  display: block;
  max-width: 1024px;
  width: 96%;
  margin: 180px auto 0;
`

export const Title = styled.h2`
  margin: 0;
  font-size: 64px;
`

export const Section = styled.section`
  margin: 180px 0 0;
`

export const SectionInner = styled.div`
  margin: 40px 0 0;
`

export const SectionTitle = styled.h3`
  margin: 0;
  font-size: 42px;
`

export const Text = styled.p``

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
`

export const TagItem = styled.li`
  margin: 8px 8px 0 0;
  padding: 4px 8px;
  background-color: #000;
  color: #fff;
  font-size: 14px;

  &:last-of-type {
    margin-right: 0;
  }
`

export const Biographies = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const BiographyItem = styled.li`
  display: flex;
  position: relative;
  padding: 0 0 36px 36px;

  ${media.medium} {
    flex-direction: column;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 6px;
    left: 0;
    background-color: #fff;
    border: 1px solid #000;
    box-sizing: border-box;
    width: 15px;
    height: 15px;
    border-radius: 9999px;
    z-index: 1;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 6px;
    left: 7px;
    width: 1px;
    height: 100%;
    background-color: #000;
  }

  &:last-of-type {
    padding-bottom: 0;

    &::before {
      background-color: #000;
    }

    &::after {
      border-right: 1px dashed #aaa;
      left: 6px;
      background-color: #fff;
    }
  }
`

export const BiographyDate = styled.p`
  width: 150px;
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`

export const BiographyRight = styled.div`
  flex: 1;
`

export const BiographyTitle = styled.h4`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`

export const BiographyDetail = styled.p`
  margin: 16px 0 0;
  font-size: 14px;
`

export const BiographySkills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 0;
  padding: 0;
  list-style: none;
`

export const BiographySkillItem = styled.li`
  margin: 16px 8px 0 0;
  padding: 4px 8px;
  background-color: #000;
  color: #fff;
  font-size: 12px;
`

export const Activity = styled.dl``

export const ActivityItem = styled.div`
  margin: 24px 0 0;
`

export const ActivityTerm = styled.dt`
  font-weight: bold;
`

export const ActivityDescription = styled.dd`
  margin: 4px 0 0;
  overflow-wrap: break-word;
`

export const SnsList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const SnsItem = styled.li`
  margin: 32px 16px 0 0;

  &:last-of-type {
    margin-right: 0;
  }
`

export const ExternalLink = styled.a`
  color: #000;
`
