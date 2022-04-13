import { VFC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLogout } from '../hooks/useLogout'
import { auth } from '../firebaseConfig'
import { Layout } from '../components/Layout'
import { NewsListMemo } from '../components/NewsList'
import { NewsEditMemo } from '../components/NewsEdit'
import { TaskListMemo } from '../components/TaskList'
import {TaskEditMemo } from '../components/TaskEdit'

const Tasks: VFC = () => {
  const router = useRouter()
  const { logout } = useLogout()
  const user = auth.currentUser
  return (
    <Layout title="tasks">
      <p>{user?.email}</p>

      <button
        onClick={() => {
          logout()
          router.push('/')
        }}
      >
        ログアウト
      </button>

      <p>News Edit</p>
      <NewsListMemo />
      <NewsEditMemo />
      <p>Tasks Edit</p>
      <TaskListMemo />
      <TaskEditMemo />

      <Link href="/" passHref>
        <span>Back to main page</span>
      </Link>
    </Layout>
  )
}

export default Tasks
