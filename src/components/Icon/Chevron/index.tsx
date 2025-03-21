import { Icon } from '..'
import { ParentProps } from '../'

export type Props = ParentProps

export const Chevron = (props: Props) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
      />
    </Icon>
  )
}
