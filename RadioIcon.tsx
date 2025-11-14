import React from 'react';

// An icon representing a radio broadcast signal
export const RadioIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 12h-4v-1a3 3 0 0 1 3 -3h1v4z" fill="currentColor" fillOpacity="0.3" />
    <path d="M17 12h4v-1a3 3 0 0 0 -3 -3h-1v4z" fill="currentColor" fillOpacity="0.3" />
    <path d="M3 13h18v-2h-18v2z" fill="currentColor" fillOpacity="0.3" />
    <path d="M12 4c-3.138 0-5.833 2.028-6.718 4.865a.5.5 0 0 0 .445 .635h12.546a.5.5 0 0 0 .445-.635C17.833 6.028 15.138 4 12 4z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 14.029V17a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2.97" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);