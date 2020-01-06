import * as React from 'react'
import Icon from '..'
import { ParentProps } from '../types'

export type Props = ParentProps

const Logo = (props: Props) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path d="M1,21H23L12,2" />
    </Icon>
  )
}

export default Logo
