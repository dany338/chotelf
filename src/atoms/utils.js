/* eslint-disable import/no-anonymous-default-export */
import {atom} from 'jotai';

const alerts = atom([]);
const errorLoad = atom(false);
const loading = atom({show: true, opacity: 1});
const confirm = atom({show: false, data: {}});
const resetAll = atom(false);
const showBannerTour = atom(false);

export default {
  alerts,
  errorLoad,
  loading,
  confirm,
  resetAll,
  showBannerTour,
}