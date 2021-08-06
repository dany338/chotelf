/* eslint-disable import/no-anonymous-default-export */
import {atom} from 'jotai';

const uid = atom('');
const token = atom('');
const userInfo = atom({});

export default {
  uid,
  token,
  userInfo
}