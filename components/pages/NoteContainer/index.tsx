import styled from '@emotion/styled'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'

import { Heading } from '@/components/atoms/Heading'
import { Pagination } from '@/components/molecules/Pagination'
import { Container } from '@/components/organisms/Container'
import { NOTE_PER_PAGE } from '@/settings/siteSettings'
import media from '@/styles/media'
import { Blog } from '@/types/Blog'

const StyledContainer = styled(Container)``

const StyledHeading = styled(Heading)`
  display: none;

  ${media.small} {
    display: block;
  }
`

const NoteList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px 40px;
  list-style: none;
  margin: 0;
  padding: 0;

  ${media.medium} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.small} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin: 48px 0 0;
    gap: 48px 40px;
  }
`

const NoteListItem = styled.li``

const NoteTitle = styled.h2`
  margin: 16px 0 0;
`

const DateArea = styled.div`
  display: flex;

  ${media.small} {
    margin-top: 8px;
    flex-direction: column;
  }
`

const Date = styled.div`
  margin: 0 24px 0 0;
  font-size: 12px;

  ${media.small} {
    font-size: 10px;
  }
`

const DateLabel = styled.span`
  display: inline-block;
  margin: 0 4px 0 0;
  font-weight: bold;
`

const StyledLink = styled(Link)`
  display: block;
  color: #000;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    color: #777;
    cursor: pointer;
  }
`

const StyledThumbnail = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: bottom;
`

const StyledPagination = styled(Pagination)`
  margin-top: 120px;

  ${media.small} {
    margin-top: 60px;
  }
`

export type Props = {
  data: Blog[]
  totalCount: number
  currentPage: number
}

export const NoteContainer = ({ data, totalCount, currentPage }: Props) => {
  return (
    <StyledContainer size="lg">
      <StyledHeading>Note</StyledHeading>

      <NoteList>
        {data.map((note, index) => (
          <NoteListItem key={note.id}>
            <StyledLink href={`/note/${note.id}`}>
              {note.thumbnail && (
                <StyledThumbnail
                  src={note.thumbnail.url}
                  alt={note.title}
                  width={note.thumbnail.width}
                  height={note.thumbnail.height}
                  loading={index > 5 ? 'lazy' : 'eager'}
                />
              )}

              <NoteTitle>{note.title}</NoteTitle>

              <DateArea>
                <Date>
                  <DateLabel>公開日:</DateLabel>
                  {dayjs(note.publishedAt).format('YYYY年M月D日')}
                </Date>
              </DateArea>
            </StyledLink>
          </NoteListItem>
        ))}
      </NoteList>
      {totalCount > NOTE_PER_PAGE && (
        <StyledPagination
          pageRoot="/note"
          totalCount={totalCount}
          currentPage={currentPage}
          perPage={NOTE_PER_PAGE}
        />
      )}
    </StyledContainer>
  )
}
