import React from 'react';
import { PlayIcon } from './icons/PlayIcon';

const YouTubeVideoPlaceholder: React.FC = () => {
    const youtubeChannelUrl = 'https://www.youtube.com/@YorubaLibertyRadio';

    return (
        <div className="my-8">
            <a 
                href={youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:-translate-y-1"
                aria-label="Watch our latest events on YouTube"
            >
                <div 
                    className="relative h-56 w-full bg-cover bg-center"
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1521336631023-ce15873b3658?q=80&w=800&auto=format&fit=crop')"}}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                        <div className="bg-red-600 bg-opacity-80 rounded-full p-4 transform group-hover:scale-110 transition-transform text-white">
                            <PlayIcon />
                        </div>
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Watch Our Latest Events</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                        Visit our YouTube channel for live streams, event recordings, and exclusive video content.
                    </p>
                </div>
            </a>
        </div>
    );
};

export default YouTubeVideoPlaceholder;
