import { BASE_URL } from '@/settings/siteSettings'
import { List, Item, StyledLink, StyledTwitter, StyledHatena } from './styles'
import { Props } from './types'

export const ShareButtons = ({
  className,
  currentCategory,
  title,
  contentId,
}: Props) => {
  const shareUrl = `${BASE_URL}/blog/${currentCategory}/${contentId}`
  const twitterLink = `https://twitter.com/intent/tweet?text=${title}&url=${shareUrl}`
  const hatenaLink = `https://b.hatena.ne.jp/entry/${shareUrl}`
  return (
    <List className={className}>
      <Item key="twitter">
        <StyledLink
          href={twitterLink}
          target="_blank"
          rel="noopener noreferrer"
          service="twitter"
        >
          <StyledTwitter />
        </StyledLink>
      </Item>
      <Item key="hatena">
        <StyledLink
          href={hatenaLink}
          target="_blank"
          rel="noopener noreferrer"
          service="hatena"
        >
          <StyledHatena />
        </StyledLink>
      </Item>
    </List>
  )
}
