import Link from 'next/link'
import { NoteForAdjacentNotes } from '@/types/Note'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  previous: NoteForAdjacentNotes | null
  next: NoteForAdjacentNotes | null
}

export const AdjacentNoteLinks = (props: Props) => {
  const { className, previous, next } = props
  if (!previous && !next) {
    return null
  }

  return (
    <div
      className={twMerge(
        'flex flex-col sm:flex-row justify-between items-stretch sm:items-center  gap-4 sm:gap-0',
        className
      )}
    >
      <div className="flex-1">
        {previous ? (
          <Link
            href={`/note/${previous.id}`}
            className="group relative block h-[120px] overflow-hidden rounded-md"
            style={{
              backgroundImage: previous.thumbnail?.url
                ? `url(${previous.thumbnail.url})`
                : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />
            <div className="relative h-full p-4 flex flex-col justify-end text-white">
              <div className="text-sm opacity-90">← 前の記事</div>
              <div className="font-medium line-clamp-2">{previous.title}</div>
            </div>
          </Link>
        ) : (
          <div className="p-4 border border-transparent">
            {/* 空のスペースを保持 */}
          </div>
        )}
      </div>

      <div className="flex-1 sm:ml-4 sm:mt-0">
        {next ? (
          <Link
            href={`/note/${next.id}`}
            className="group relative block h-[120px] overflow-hidden rounded-md"
            style={{
              backgroundImage: next.thumbnail?.url
                ? `url(${next.thumbnail.url})`
                : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />
            <div className="relative h-full p-4 flex flex-col justify-end text-white items-end text-right">
              <div className="text-sm opacity-90">次の記事 →</div>
              <div className="font-medium line-clamp-2">{next.title}</div>
            </div>
          </Link>
        ) : (
          <div className="p-4 border border-transparent">
            {/* 空のスペースを保持 */}
          </div>
        )}
      </div>
    </div>
  )
}
