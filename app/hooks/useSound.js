// hooks/useSound.js
import { useCallback } from 'react';

export const useSound = () => {
  const playSound = useCallback((soundNumber = '1') => {
    const audio = new Audio(`/sounds/notifications/${soundNumber}.mp3`);
    audio.play().catch(error => console.log('Error playing sound:', error));
  }, []);

  return { playSound };
};
