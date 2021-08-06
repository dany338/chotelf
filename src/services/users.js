import api from './api';
import { USERS } from '../constants/backend';

const getById = id => new Promise(async (resolve, reject) => {
  try {
    const responsCourses = await api.get(`${USERS}/${id}`)
    if (responsCourses.ok) {
      resolve(responsCourses.data)
    } else {
      reject(responsCourses.data)
    }
  } catch (e) {
    reject(e)
  }
});

const listByPage = page => new Promise(async (resolve, reject) => {
  try {
    const responsCourses = await api.get(`${USERS}/page/${page}`)
    if (responsCourses.ok) {
      resolve(responsCourses.data)
    } else {
      reject(responsCourses.data)
    }
  } catch (e) {
    reject(e)
  }
});

const list = () => new Promise(async (resolve, reject) => {
  try {
    const responsCourses = await api.get(`${USERS}/`)
    if (responsCourses.ok) {
      resolve(responsCourses.data)
    } else {
      reject(responsCourses.data)
    }
  } catch (e) {
    reject(e)
  }
});

const insert = (data) => new Promise(async (resolve, reject) => {
  try {
    const response = await api.post(`${USERS}/`, data)
    if (response.ok) {
      resolve(response.data)
    } else {
      reject(response.data)
    }
  } catch (e) {
    reject(e)
  }
});

const update = (id, data) => new Promise(async (resolve, reject) => {
  try {
    const response = await api.put(`${USERS}/${id}`, data)
    if (response.ok) {
      resolve(response.data)
    } else {
      reject(response.data)
    }
  } catch (e) {
    reject(e)
  }
});

const remove = (id) => new Promise(async (resolve, reject) => {
  try {
    const response = await api.delete(`${USERS}/${id}`)
    if (response.ok) {
      resolve(response.data)
    } else {
      reject(response.data)
    }
  } catch (e) {
    reject(e)
  }
});

export {
  list,
  listByPage,
  insert,
  update,
  remove,
  getById,
}