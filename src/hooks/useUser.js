import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../atoms';

export const useUser = () => {
  const [ui, setUi] = useAtom(userAtom.ui);

  useEffect(() => {
    return () => {}
    //eslint-disable-next-line
  }, []);

  return {

  }
}