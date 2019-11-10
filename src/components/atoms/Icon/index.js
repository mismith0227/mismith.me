import * as React from 'react'
import styled from 'styled-components'
import { StyledSvg } from './styles'

const Icon = ({
  className,
  children,
  role = 'icon',
  angle,
  rotate,
  viewBox,
}) => (
  <StyledSvg
    width="100%"
    fill="currentColor"
    className={className}
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    role={role}
    viewBox={viewBox}
  >
    {children}
  </StyledSvg>
)

export default styled(Icon)``
