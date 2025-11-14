import React from 'react';

// A simple sparkle icon to represent Gemini AI
export const GeminiIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L13.65 8.35L19 10L13.65 11.65L12 17L10.35 11.65L5 10L10.35 8.35L12 3Z" />
    <path d="M19 15L19.7 17.6L22 18L19.7 18.4L19 21L18.3 18.4L16 18L18.3 17.6L19 15Z" />
    <path d="M7 5L7.45 6.8L9 7L7.45 7.2L7 9L6.55 7.2L5 7L6.55 6.8L7 5Z" />
  </svg>
);
