/* eslint-disable import/no-anonymous-default-export */
import {atom} from 'jotai';

const leads = atom([]);
const query = atom('');
const leadsSelecteds = atom([]);
const message = atom({});
const isvisible = atom(false);

export default {
  leads,
  query,
  leadsSelecteds,
  message,
  isvisible
}