import dayjs from 'dayjs'
import {
  StyledContainer,
  Inner,
  BodyWrap,
  Body,
  Title,
  DateArea,
  Date,
  DateLabel,
  StyledTag,
  StyledCategories,
  StyledReadNext,
  ShareButtonsArea,
  StyledShareButtons,
  StyledToc,
} from './styles'
import { Props } from './types'
import 'highlight.js/styles/stackoverflow-light.css'

export const BlogDetailContent = ({
  data,
  body,
  toc,
  category,
  currentCategory,
}: Props) => (
  <StyledContainer size="full">
    <Inner>
      <StyledTag>{data.category.category_name}</StyledTag>
      <Title>{data.title}</Title>
      <DateArea>
        <Date>
          <DateLabel>公開日:</DateLabel>
          {dayjs(data.createdAt).format('YYYY年M月D日')}
        </Date>
        <Date>
          <DateLabel>最終更新日:</DateLabel>
          {dayjs(data.updatedAt).format('YYYY年M月D日')}
        </Date>
      </DateArea>
      <BodyWrap>
        {toc.length > 0 && <StyledToc items={toc} />}

        <Body
          dangerouslySetInnerHTML={{
            __html: body,
          }}
        />
        {currentCategory && (
          <ShareButtonsArea>
            <StyledShareButtons
              currentCategory={currentCategory}
              title={data.title}
              contentId={data.id}
            />
          </ShareButtonsArea>
        )}
      </BodyWrap>

      {data.related_post && data.related_post.length > 0 && (
        <StyledReadNext readNestPosts={data.related_post} />
      )}

      <StyledCategories category={category} currentCategory={currentCategory} />
    </Inner>
  </StyledContainer>
)
