import * as React from 'react'
import Icon from '..'
import { ParentProps } from '../types'

export type Props = ParentProps

const Grid = (props: Props) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path d="M16,5V11H21V5M10,11H15V5H10M16,18H21V12H16M10,18H15V12H10M4,18H9V12H4M4,11H9V5H4V11Z" />
    </Icon>
  )
}

export default Grid
