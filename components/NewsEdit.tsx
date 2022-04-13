import React, { FormEvent, memo, VFC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAppMutate } from '../hooks/useAppMutate'
import { selectEditedNews, setEditedNews } from '../slices/uiSlice'

export const NewsEdit: VFC = () => {
  const dispatch = useDispatch()
  const editedNews = useSelector(selectEditedNews)
  const { createNewsMutation, updateNewsMutation } = useAppMutate();


const submitHandler = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  if (editedNews.id === '') {
    createNewsMutation.mutate(editedNews.content)
  } else {
    updateNewsMutation.mutate(editedNews)
  }
}
if (createNewsMutation.error || updateNewsMutation.error) {
  return <div>{'Error'}</div>
}

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className=""
          placeholder="new news ?"
          type="text"
          value={editedNews.content}
          onChange={(e) =>
            dispatch(setEditedNews({ ...editedNews, content: e.target.value }))
          }
        />
        <button
          disabled={!editedNews.content}
        >
          {editedNews.id === '' ? 'Create' : 'Update'}
        </button>
      </form>
    </div>
  )
}
export const NewsEditMemo = memo(NewsEdit)
