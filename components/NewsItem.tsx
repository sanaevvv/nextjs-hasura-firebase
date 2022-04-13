import React, { memo, VFC } from 'react'
import { useDispatch } from 'react-redux'
import { useAppMutate } from '../hooks/useAppMutate'
import { setEditedNews } from '../slices/uiSlice'
import { News } from '../types/types'

type Props = {
  news: News
}

const NewsItem: VFC<Props> = ({ news }) => {
  const dispatch = useDispatch()
  const { deleteNewsMutation } = useAppMutate()

  if (deleteNewsMutation.isLoading) {
    return <p>Deleting...</p>
  }
  if (deleteNewsMutation.error) {
    return <p>Error</p>
  }
  return (
    <li>
      <span>{news.content}</span>
      <button
        onClick={() => {
          dispatch(
            setEditedNews({
              id: news.id,
              content: news.content,
            })
          )
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          deleteNewsMutation.mutate(news.id)
        }}
      />
    </li>
  )
}

export const NewsItemMemo= memo(NewsItem)
