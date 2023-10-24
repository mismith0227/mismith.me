import { BASE_URL } from '@/settings/siteSettings'
import { List, Item, StyledLink, StyledXlogo, StyledHatena } from './styles'
import { Props } from './types'

export const ShareButtons = ({
  className,
  currentCategory,
  title,
  contentId,
}: Props) => {
  const shareUrl = `${BASE_URL}/blog/${currentCategory}/${contentId}`
  const xLink = `https://twitter.com/intent/tweet?text=${title}&url=${shareUrl}`
  return (
    <List className={className}>
      <Item key="x">
        <StyledLink
          aria-label="x share"
          href={xLink}
          target="_blank"
          rel="noopener noreferrer"
          service="x"
        >
          <StyledXlogo />
        </StyledLink>
      </Item>
    </List>
  )
}
