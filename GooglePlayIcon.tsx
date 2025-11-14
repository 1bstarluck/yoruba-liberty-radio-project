import React from 'react';

export const GooglePlayIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.63,2.32a2,2,0,0,0-.47,3.4L6,7.57,3.16,9.43A2,2,0,0,0,3.63,13l5-2.86V8.12ZM2,12l9,5.14V6.82ZM20.37,9.43a2,2,0,0,0-.47-3.4L18,4.17,20.84,6a2,2,0,0,0,0,3.46l-5,2.89v2.86l5-2.89a2,2,0,0,0,0-3.46Z" />
    </svg>
);