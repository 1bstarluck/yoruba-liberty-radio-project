import React from 'react';

export const StripeIcon: React.FC<{ className?: string }> = ({ className = "w-24 h-24" }) => (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path fill="#6772e5" d="M46 31.5h-10.8c-5.4 0-9.8 4.4-9.8 9.8v-18.2c0-5.4 4.4-9.8 9.8-9.8h10.8v-6.8c0-2.2-1.8-4-4-4h-38c-2.2 0-4 1.8-4 4v35c0 2.2 1.8 4 4 4h21.3c-2.2-7.8-1.5-16.3 2-23.5h-21.3v-10h21.3c-0.2-1.4 0-2.8 0.7-4.1 1-2.1 2.8-3.6 5.1-4.2 1-0.2 2-0.2 3 0v-1.5h-27.3v-10h34.1v15.7h-9.8c-4.3 0-7.8 3.5-7.8 7.8v11.8c0 3.5 2.2 6.5 5.3 7.5v-23.8h12.3v10z"></path>
    </svg>
));