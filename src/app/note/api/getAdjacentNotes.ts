import { client } from '@/libs/client'
import {NoteForAdjacentNotes } from '@/types/Note'

type AdjacentNotes = {
  previous: NoteForAdjacentNotes | null
  next: NoteForAdjacentNotes | null
}

export const getAdjacentNotes = async (currentId: string): Promise<AdjacentNotes> => {
  // 全てのnote記事を公開日順で取得
  const allNotes = await client.get({
    endpoint: 'note',
    queries: {
      fields: 'id,title,publishedAt,thumbnail',
      limit: 1000, // 十分大きな数値を設定
      orders: 'publishedAt',
    },
  })

  const notes = allNotes.contents as NoteForAdjacentNotes[]
  
  // 現在の記事のインデックスを取得
  const currentIndex = notes.findIndex(note => note.id === currentId)
  
  if (currentIndex === -1) {
    return { previous: null, next: null }
  }

  // 前後の記事を取得
  const previousNote = currentIndex > 0 ? notes[currentIndex - 1] : null
  const nextNote = currentIndex < notes.length - 1 ? notes[currentIndex + 1] : null

  return {
    previous: previousNote,
    next: nextNote,
  }
}
