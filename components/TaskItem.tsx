import React, { memo, VFC } from 'react'
import { useDispatch } from 'react-redux'
import { useAppMutate } from '../hooks/useAppMutate'
import { setEditedTask } from '../slices/uiSlice'
import { Task } from '../types/types'

type Props = { task: Task }

const TaskItem: VFC<Props> = ({ task }) => {
  const dispatch = useDispatch()
  const { deleteTaskMutation } = useAppMutate()
  if (deleteTaskMutation.isLoading) {
    return <p>Deleting...</p>
  }
  if (deleteTaskMutation.error) {
    return <p>Error</p>
  }
  return (
    <li>
      <span>{task.title}</span>
      <button
        onClick={() => {
          dispatch(
            setEditedTask({
              id: task.id,
              title: task.title,
            })
          )
        }}
      >
        Delete
      </button>
      <button onClick={() => deleteTaskMutation.mutate(task.id)}>削除</button>
    </li>
  )
}
export const TaskItemMemo = memo(TaskItem)
