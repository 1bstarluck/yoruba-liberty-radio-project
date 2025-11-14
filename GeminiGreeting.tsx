import React, { useState, useEffect } from 'react';
import { RadioIcon } from './icons/RadioIcon';

const GeminiGreeting: React.FC = () => {
    const [greeting, setGreeting] = useState({ english: '', yoruba: '' });

    useEffect(() => {
        const getGreeting = () => {
            const hour = new Date().getHours();
            if (hour >= 5 && hour < 12) {
                setGreeting({ english: 'Good morning', yoruba: 'Ẹ kaarọ' });
            } else if (hour >= 12 && hour < 18) {
                setGreeting({ english: 'Good afternoon', yoruba: 'Ẹ kaasan' });
            } else {
                setGreeting({ english: 'Good evening', yoruba: 'Ẹ kaalẹ' });
            }
        };
        getGreeting();
        // Optional: Set an interval to update if the app is left open for a long time
        const intervalId = setInterval(getGreeting, 60000); // Check every minute
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="bg-gradient-to-br from-blue-800 to-blue-900 dark:from-gray-700 dark:to-gray-800 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <div className="flex-shrink-0 text-yellow-300">
                <RadioIcon className="w-12 h-12" />
            </div>
            <div>
                <h3 className="text-2xl font-bold">{greeting.english}</h3>
                <p className="text-lg text-yellow-300 font-semibold">{greeting.yoruba}</p>
                <p className="text-xs text-blue-200 dark:text-gray-400 mt-2">A special greeting from Yoruba Liberty Radio!</p>
            </div>
        </div>
    );
};

export default GeminiGreeting;