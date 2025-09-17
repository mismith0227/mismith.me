import Link from 'next/link'
import { Note } from '@/types/Note'

type AdjacentNoteLinksProps = {
  previous: Pick<Note, 'id' | 'title' | 'publishedAt'> | null
  next: Pick<Note, 'id' | 'title' | 'publishedAt'> | null
}

export const AdjacentNoteLinks = ({ previous, next }: AdjacentNoteLinksProps) => {
  if (!previous && !next) {
    return null
  }

  return (
    <div className="flex justify-between items-center mt-[60px] mb-[20px]">
      <div className="flex-1">
        {previous ? (
          <Link
            href={`/note/${previous.id}`}
            className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="text-sm text-gray-500 mb-1">← 前の記事</div>
            <div className="font-medium text-gray-900 line-clamp-2">
              {previous.title}
            </div>
          </Link>
        ) : (
          <div className="p-4 border border-transparent rounded-lg">
            {/* 空のスペースを保持 */}
          </div>
        )}
      </div>
      
      <div className="flex-1 ml-4">
        {next ? (
          <Link
            href={`/note/${next.id}`}
            className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="text-sm text-gray-500 mb-1 text-right">次の記事 →</div>
            <div className="font-medium text-gray-900 line-clamp-2 text-right">
              {next.title}
            </div>
          </Link>
        ) : (
          <div className="p-4 border border-transparent rounded-lg">
            {/* 空のスペースを保持 */}
          </div>
        )}
      </div>
    </div>
  )
}
