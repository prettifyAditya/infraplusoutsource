// components/ScrollClickHandler.js
'use client';
import { useEffect } from 'react';
import { scrollToTarget } from '../utils/scrollToTarget';

export default function ScrollClickHandler() {
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('[data-scrollto]');
      if (target) {
        e.preventDefault();
        const selector = target.getAttribute('data-scrollto');
        scrollToTarget(selector);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null; 
}
