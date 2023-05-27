import { mainTypes } from "./actionTypes"

export const addTaskAC = (taskData) => ({
  type: mainTypes.ADD_TASK,
  payload: taskData,
})

export const deleteTaskAC = (taskData) => ({
  type: mainTypes.DELETE_TASK,
  payload: taskData,
})

export const changeStatusAC = (taskData) => ({
  type: mainTypes.CHANGE_STATUS,
  payload: taskData,
})

export const editTaskAC = (taskData) => ({
  type: mainTypes.EDIT_TASK,
  payload: taskData,
})