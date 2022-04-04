import { Props } from './types'
import { Wrap } from './styles'

const ListItem = ({ children, className }: Props) => {
  return <Wrap className={className}>{children}</Wrap>
}

export default ListItem
