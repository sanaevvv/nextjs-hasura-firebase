// ニュース
export type EditNews = {
  id: string
  content: string
}
export type News = EditNews & {
  created_at: string
}

// タスク
export type EditTask = {
  id: string
  title: string
}
export type Task = EditTask & {
  created_at: string
  user_id: string
}
