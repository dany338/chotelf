import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { dashboardAtom } from '../atoms';
import { SCORE } from '../constants/backend';
import {
  search,
  validation
} from '../services/rooms';

const objAnswers = {
  0: { title: 'Oh no, Not is possible reserve this room', text: 'The room not available', icon: '😢' },
  1: { title: 'Yes, Approved', text: 'The room is available', icon: '💯' }
}

export const useDashboard = () => {
  const [rooms, setrooms] = useAtom(dashboardAtom.rooms);
  const [query, setQuery] = useAtom(dashboardAtom.query);
  const [roomsSelecteds, setroomsSelecteds] = useAtom(dashboardAtom.roomsSelecteds);
  const [message, setMessage] = useAtom(dashboardAtom.message);
  const [isvisible, setIsvisible] = useAtom(dashboardAtom.isvisible);

  const onChangeIsVisible = (isVisible) => {
    setIsvisible(!isvisible);
  };

  const onChangeQuery = async value => {
    setQuery(value);
    setIsvisible(false);
    if(value.trim() === '') {
      setrooms([]);
      setMessage({});
    } else {
      let response = await search({
        firstname: value,
        lastname: value,
        idcard: value 
      });

      if(response && response?.payload?.data && response.payload.data.length > 0) {
        setrooms(response.payload.data);
      }
    }
  };

  const onSelectLead = async lead => {
    const isLead = roomsSelecteds.some(item => item.id === lead.id);
    let newroomsSelecteds = [];
    if(isLead) {
      newroomsSelecteds = roomsSelecteds.filter(item => item.id !== lead.id);
    } else {
      newroomsSelecteds = [ ...roomsSelecteds, lead];
    }
    setroomsSelecteds(newroomsSelecteds);

    let response = await validation(lead.id);

    if(response && response?.payload?.data) {
      let description = '';
      if(response.payload.data.reservations.length > 0) {
        description = objAnswers[0];
      } 

      const msg = { ...response.payload.data, ...description };
      setMessage(msg);
      if(isLead) {
        setIsvisible(false);
      } else {
        setIsvisible(true);
      }
    }
  };

  useEffect(() => {
    return () => {}
    //eslint-disable-next-line
  }, []);

  return {
    rooms,
    query,
    onChangeQuery,
    onSelectLead,
    roomsSelecteds,
    message,
    isvisible,
    onChangeIsVisible
  }
}