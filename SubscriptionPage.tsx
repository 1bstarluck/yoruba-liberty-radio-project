
import React from 'react';
import { SubscriptionTier as SubscriptionTierType, Page } from '../types';

interface SubscriptionTierProps {
    tier: SubscriptionTierType;
    onNavigate: (page: Page) => void;
}

const SubscriptionTierCard: React.FC<SubscriptionTierProps> = ({ tier, onNavigate }) => {
    const { title, price, period, features, isPopular } = tier;
    const featureList = features.split(',').map(f => f.trim()).filter(f => f);

    return (
        <div className={`border rounded-lg p-6 relative ${isPopular ? 'border-blue-600 dark:border-yellow-400' : 'border-gray-200 dark:border-gray-600'}`}>
            {isPopular && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 dark:bg-yellow-400 text-white dark:text-blue-900 text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">{title}</h3>
            <p className="text-center mt-2">
                <span className="text-4xl font-extrabold text-gray-900 dark:text-white">${price}</span>
                <span className="text-base font-medium text-gray-500 dark:text-gray-400">/{period}</span>
            </p>
            <ul className="mt-6 space-y-4">
                {featureList.map((feature, index) => (
                    <li key={index} className="flex space-x-3">
                        <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                ))}
            </ul>
            <button 
                onClick={() => onNavigate(Page.ThankYou)}
                className={`w-full mt-8 py-3 rounded-lg font-semibold transition-colors ${isPopular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500'}`}
            >
                Subscribe
            </button>
        </div>
    );
}

interface SubscriptionPageProps {
    subscriptionTiers: SubscriptionTierType[];
    onNavigate: (page: Page) => void;
}

const SubscriptionPage: React.FC<SubscriptionPageProps> = ({ subscriptionTiers, onNavigate }) => {
    return (
        <div className="p-4 space-y-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Become a YLR Insider</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xl mx-auto">
                    Subscribe to get exclusive content, support our work, and become a core part of the Yoruba Liberty Radio family.
                </p>
            </div>
            <div className="space-y-6">
                {subscriptionTiers.map(tier => (
                    <SubscriptionTierCard key={tier.id} tier={tier} onNavigate={onNavigate} />
                ))}
            </div>
        </div>
    );
};

export default SubscriptionPage;