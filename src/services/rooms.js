import api from './api';
import { AGENTS } from '../constants/backend';

const getById = id => new Promise(async (resolve, reject) => {
  try {
    const response = await api.get(`${AGENTS}/${id}`)
    if (response.ok) {
      resolve(response.data)
    } else {
      reject(response.data)
    }
  } catch (e) {
    reject(e)
  }
});

const listByPage = page => new Promise(async (resolve, reject) => {
  try {
    const response = await api.get(`${AGENTS}/page/${page}`)
    if (response.ok) {
      resolve(response.data)
    } else {
      reject(response.data)
    }
  } catch (e) {
    reject(e)
  }
});

const list = () => new Promise(async (resolve, reject) => {
  try {
    const response = await api.get(`${AGENTS}/`)
    if (response.ok) {
      resolve(response.data)
    } else {
      reject(response.data)
    }
  } catch (e) {
    reject(e)
  }
});

const insert = (data) => new Promise(async (resolve, reject) => {
  try {
    const response = await api.post(`${AGENTS}/`, data)
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
    const response = await api.put(`${AGENTS}/${id}`, data)
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
    const response = await api.delete(`${AGENTS}/${id}`)
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