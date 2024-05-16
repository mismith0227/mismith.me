import styled from '@emotion/styled'

const Wrap = styled.p`
  margin: 0;
  color: #000;
  font-weight: 700;
`

type Props = {
  className?: string
}

export const SiteTitle = ({ className }: Props) => (
  <Wrap className={className}>mismith</Wrap>
)
