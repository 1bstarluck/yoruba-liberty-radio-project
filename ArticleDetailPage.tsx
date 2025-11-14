
import React from 'react';
import { NewsArticle } from '../types';

interface ArticleDetailPageProps {
    article: NewsArticle | null;
    onBack: () => void;
}

const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ article, onBack }) => {
    if (!article) {
        return (
            <div className="p-4 text-center">
                <p className="text-gray-600 dark:text-gray-300">Article not found.</p>
                <button 
                    onClick={onBack}
                    className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700"
                >
                    &larr; Back to News
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-800">
            <div className="p-4">
                 <button 
                    onClick={onBack}
                    className="mb-4 text-blue-600 dark:text-yellow-400 font-semibold hover:underline"
                >
                    &larr; Back to All News
                </button>
            </div>
            <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-64 object-cover"
            />
            <div className="p-6">
                <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white">{article.title}</h1>
                <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>By <strong>{article.author}</strong></span>
                    <span className="mx-2">&bull;</span>
                    <span>{article.date}</span>
                </div>
                <div className="mt-6 max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                    <p>
                        {article.excerpt}
                    </p>
                    {/* Placeholder for more content */}
                    <p>
                        This is additional placeholder text to simulate a longer article. In a real application, the full content of the news story would be displayed here, providing readers with in-depth information and insights. The layout is designed to be clean and readable, ensuring a pleasant experience for all users.
                    </p>
                     <p className="mt-4 text-gray-400 dark:text-gray-500 italic">
                        (Note: This is placeholder content. The full article would appear here.)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetailPage;