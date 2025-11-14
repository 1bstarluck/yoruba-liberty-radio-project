
import React from 'react';
import { PodcastEpisode } from '../types';

interface PodcastPageProps {
    episodes: PodcastEpisode[];
}

const PodcastCard: React.FC<{ episode: PodcastEpisode }> = ({ episode }) => {
    const placeholderImageUrl = `https://via.placeholder.com/150.png?text=YLR+Podcast`;
    return (
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md flex items-center p-4 space-x-4">
            <img src={episode.imageUrl || placeholderImageUrl} alt={episode.title} className="w-24 h-24 object-cover rounded-md flex-shrink-0" />
            <div className="flex-grow">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">{episode.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{episode.duration}</p>
                <button className="mt-3 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Play Episode
                </button>
            </div>
        </div>
    );
};

const PodcastPage: React.FC<PodcastPageProps> = ({ episodes }) => {
    return (
        <div className="p-4 space-y-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Our Podcast</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Listen to insightful conversations and stories.</p>
            </div>
            <div className="space-y-4">
                {episodes.length > 0 ? (
                    episodes.map(episode => (
                        <PodcastCard key={episode.id} episode={episode} />
                    ))
                ) : (
                     <div className="text-center py-10 text-gray-500 dark:text-gray-400">
                        <p>No podcast episodes available yet. Stay tuned!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PodcastPage;