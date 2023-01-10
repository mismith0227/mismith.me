import { Wrap, StyledInputText } from './styles'
import { Props } from './types'

export const SearchInput = ({
  className,
  currentRefinement,
  refine,
}: Props) => (
  <Wrap className={className}>
    <StyledInputText
      type="search"
      value={currentRefinement}
      onChange={(event) => refine(event.currentTarget.value)}
      placeholder="Next.js, microCMS, Firebase..., etc..."
    />
  </Wrap>
)
