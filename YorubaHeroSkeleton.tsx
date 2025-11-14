import React from 'react';

const YorubaHeroSkeleton: React.FC = () => {
    return (
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden mb-8 animate-pulse">
            <div className="h-10 bg-gray-300 dark:bg-gray-600"></div>
            <div className="md:flex">
                <div className="md:w-1/3">
                    <div className="h-full w-full bg-gray-300 dark:bg-gray-600 min-h-[250px] md:min-h-0"></div>
                </div>
                <div className="p-6 md:w-2/3">
                    <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-4"></div>
                    <div className="space-y-3 mt-4">
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YorubaHeroSkeleton;
