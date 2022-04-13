import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EditNews, EditTask } from '../types/types'
import { RootState } from '../app/store'

export type uiState = {
  editedTask: EditTask,
  editedNews: EditNews,
}

const initialState: uiState = {
  editedTask: {
    id: '',
    title: '',
  },
  editedNews: {
    id: '',
    content: '',
  },
}


export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setEditedTask: (state, action: PayloadAction<EditTask>) => {
      state.editedTask = action.payload
    },
    resetEditedTask: (state) => {
      state.editedTask = initialState.editedTask
    },
    setEditedNews: (state, action: PayloadAction<EditNews>) => {
      state.editedNews = action.payload
    },
    resetEditedNews: (state) => {
      state.editedNews = initialState.editedNews
    },
  },
})

export const {
  setEditedTask,
  resetEditedTask,
  setEditedNews,
  resetEditedNews,
} = uiSlice.actions

export const selectEditedTask = (state: RootState) => state.ui.editedTask
export const selectEditedNews = (state: RootState) => state.ui.editedNews

export default uiSlice.reducer
