import api from './api';
import { LEADS } from '../constants/backend';

const search = data => new Promise(async (resolve, reject) => {
  try {
    const response = await api.post(`${LEADS}/search`, data)
    if (response.ok) {
      resolve(response.data)
    } else {
      reject(response.data)
    }
  } catch (e) {
    reject(e)
  }
});

const validation = id => new Promise(async (resolve, reject) => {
  try {
    const response = await api.get(`${LEADS}/validation/${id}`)
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
  search,
  validation,
}