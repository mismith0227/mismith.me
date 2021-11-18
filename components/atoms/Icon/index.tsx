import styled from '@emotion/styled'
import { StyledSvg } from './styles'
import { Props } from './types'

const Icon = ({ className, children, role = 'img', viewBox }: Props) => (
  <StyledSvg
    width="100%"
    fill="currentColor"
    className={className}
    preserveAspectRatio="xMidYMid meet"
    role={role}
    viewBox={viewBox}
  >
    {children}
  </StyledSvg>
)

export default styled(Icon)``
