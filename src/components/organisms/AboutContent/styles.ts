import styled from '@emotion/styled'

export const Container = styled.main`
  display: block;
`

export const Title = styled.h2`
  font-size: 64px;
`

export const Section = styled.section``

export const SectionTitle = styled.h3`
  font-size: 42px;
`

export const Text = styled.p``

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const TagItem = styled.li`
  margin: 0 8px 0 0;

  &::after {
    content: '/';
    margin: 0 0 0 8px;
  }

  &:last-of-type {
    margin: 0;

    &::after {
      display: none;
      margin: 0;
    }
  }
`

export const Biographies = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const BiographyItem = styled.li``

export const BiographyDate = styled.p``

export const BiographyTitle = styled.h4``

export const BiographyDetail = styled.p``

export const BiographySkills = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const BiographySkillItem = styled.li``

export const Activity = styled.dl``

export const ActivityItem = styled.div``

export const ActivityTerm = styled.dt``

export const ActivityDescription = styled.dd``

export const SnsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const SnsItem = styled.li``
