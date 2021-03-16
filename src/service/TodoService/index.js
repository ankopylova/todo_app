import api from '../API'

export const insertTask = payload => api.post(`/user/list/task`, payload)
export const getAllTasks = () => api.get(`/user/list/tasks`)
export const updateTask = id => api.put(`/user/list/task/${id}`)
export const updateAllTask = idArr => api.put(`/user/list/tasks`)
export const deleteTaskById = id => api.delete(`/user/list/task/${id}`)
