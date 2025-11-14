
import React from 'react';
import { BlogPost } from '../types';

interface BlogPageProps {
    posts: BlogPost[];
}

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    const placeholderImageUrl = `https://via.placeholder.com/600x320.png?text=YLR+Blog`;
    return (
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden flex flex-col">
            <img className="h-48 w-full object-cover" src={post.imageUrl || placeholderImageUrl} alt={post.title} />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex-grow">{post.title}</h3>
                <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>By {post.author}</span>
                    <span className="mx-2">&bull;</span>
                    <span>{post.date}</span>
                </div>
                <button className="mt-4 text-blue-600 dark:text-yellow-400 font-semibold hover:underline self-start">
                    Read More &rarr;
                </button>
            </div>
        </div>
    );
};

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
    return (
        <div className="p-4">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">From Our Blog</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Articles, stories, and cultural insights.</p>
            </div>
            <div className="mt-6">
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {posts.map(post => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-10 text-gray-500 dark:text-gray-400">
                        <p>No blog posts available yet. Come back soon!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogPage;