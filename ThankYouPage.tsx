
import React from 'react';
import { ThankYouContent, Page } from '../types';

interface ThankYouPageProps {
    content: ThankYouContent;
    onNavigate: (page: Page) => void;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ content, onNavigate }) => {
    return (
        <div className="p-4 flex flex-col items-center justify-center text-center min-h-[calc(100vh-160px)]">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl p-8 max-w-sm w-full">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-green-500 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{content.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                    {content.message}
                </p>
                <button 
                    onClick={() => onNavigate(Page.Home)}
                    className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default ThankYouPage;