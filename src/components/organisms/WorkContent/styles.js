import styled from 'styled-components'
import media from '~/styles/media'

export const Wrap = styled.div`
  display: block;
  width: 100%;
  max-width: 1024px;
  margin: 120px auto;
`

export const Title = styled.h2`
  font-family: 'Teko', Arial, Helvetica, sans-serif;
  font-size: 80px;
  margin: 0;
  text-align: center;
`

export const LeadText = styled.p`
  font-size: 16px;
  margin: 24px 0 0;
  text-align: center;
`

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 80px 0 0;
  padding: 0;
`

export const Item = styled.li`
  display: block;
  padding: 0;
  list-style: none;
  width: 48%;
  margin: 0 0 56px 0;

  ${media.small} {
    width: 100%;
    margin: 0 0 48px 0;
  }
  }
`
