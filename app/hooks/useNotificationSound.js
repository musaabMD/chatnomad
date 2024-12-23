
// hooks/useNotificationSound.js
import { useState, useEffect } from 'react';

export const useNotificationSound = () => {
  const [currentSound, setCurrentSound] = useState('1');
  
  useEffect(() => {
    const savedSound = localStorage.getItem('preferredSound') || '1';
    setCurrentSound(savedSound);
  }, []);

  const playNotification = () => {
    const audio = new Audio(`/sounds/notifications/${currentSound}.mp3`);
    audio.play().catch(error => console.log('Error playing sound:', error));
  };

  const changeSound = (soundNumber) => {
    setCurrentSound(soundNumber);
    localStorage.setItem('preferredSound', soundNumber);
    // Play sample of selected sound
    const audio = new Audio(`/sounds/notifications/${soundNumber}.mp3`);
    audio.play().catch(error => console.log('Error playing sound:', error));
  };

  return { currentSound, playNotification, changeSound };
};