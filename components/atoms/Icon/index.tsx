import styled from '@emotion/styled'

type SvgProps = {
  rotate?: number
}

const StyledSvg = styled.svg<SvgProps>`
  display: inline-block;
  font-size: 2.4rem;
  height: 1em;
  width: 1em;
  color: inherit;
  overflow: visible;
  ${({ rotate }) => rotate && `transform: rotate(${rotate}deg);`}
`

export type ParentProps = {
  className?: string
  role?: string
  rotate?: number
}

type Props = ParentProps & {
  viewBox: string
  children: React.ReactNode
}

const Icon = ({
  className,
  children,
  role = 'img',
  viewBox,
  rotate,
}: Props) => (
  <StyledSvg
    width="100%"
    fill="currentColor"
    className={className}
    preserveAspectRatio="xMidYMid meet"
    role={role}
    viewBox={viewBox}
    rotate={rotate}
  >
    {children}
  </StyledSvg>
)

export default styled(Icon)``
