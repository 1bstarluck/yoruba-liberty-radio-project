import React from 'react';

const NewsCardSkeleton: React.FC = () => {
    return (
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden flex flex-col animate-pulse">
            <div className="h-48 w-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-4"></div>
                <div className="space-y-2 flex-grow">
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
                </div>
                <div className="mt-4 flex items-center space-x-4">
                    <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-20"></div>
                    <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-20"></div>
                    <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-20"></div>
                </div>
            </div>
        </div>
    );
};

export default NewsCardSkeleton;
