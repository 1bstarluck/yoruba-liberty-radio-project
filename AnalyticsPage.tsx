
import React from 'react';
import { AnalyticsData } from '../types';

interface AnalyticsPageProps {
    analyticsData: AnalyticsData;
}

const StatCard: React.FC<{title: string; value: string; change: string; icon: React.ReactNode}> = ({ title, value, change, icon }) => (
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
        <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 dark:bg-gray-600 text-blue-600 dark:text-yellow-400">
                {icon}
            </div>
            <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">{title}</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
            </div>
        </div>
        <p className="text-sm text-green-500 mt-2">{change} vs last month</p>
    </div>
);

const BarChart: React.FC<{ title: string; data: { label: string; value: number }[]; unit?: string }> = ({ title, data, unit = '' }) => {
    const maxValue = Math.max(...data.map(d => d.value), 0);
    return (
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4">{title}</h3>
            <div className="space-y-3">
                {data.map((item, index) => (
                    <div key={index} className="grid grid-cols-3 gap-2 items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-300 truncate">{item.label}</span>
                        <div className="col-span-2 bg-gray-100 dark:bg-gray-600 rounded-full h-6">
                            <div
                                className="bg-blue-500 dark:bg-yellow-400 h-6 rounded-full flex items-center justify-end px-2"
                                style={{ width: `${(item.value / maxValue) * 100}%` }}
                            >
                                <span className="text-xs font-medium text-white dark:text-blue-900">{item.value.toLocaleString()}{unit}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const AnalyticsPage: React.FC<AnalyticsPageProps> = ({ analyticsData }) => {
    const icons = {
        users: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
        dollar: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 12v-4m0 4v.01M12 12a2.25 2.25 0 00-2.25 2.25c0 1.383 1.343 2.5 3 2.5s3-1.117 3-2.5A2.25 2.25 0 0012 12zm0 0h.01" /></svg>,
    };

    const parseChartData = (str: string, valueType: 'number' | 'percentage' = 'number') => {
        return str.split(';').map(item => {
            const [label, value] = item.split(':');
            return { label, value: parseFloat(value) || 0 };
        }).filter(item => item.label && !isNaN(item.value));
    };

    const topLocationsData = parseChartData(analyticsData.topLocations, 'percentage');
    const topProductsData = parseChartData(analyticsData.topProducts);
    
    const trends = analyticsData.listenerTrends.split(',').map(Number);
    const trendDisplay = trends.join(' / ');

    return (
        <div className="p-4 space-y-6 bg-gray-50 dark:bg-gray-900">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Admin Analytics</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Key metrics and performance overview.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <StatCard title="Total Listeners (24h)" value={analyticsData.totalListeners24h} change={analyticsData.listenersChange} icon={icons.users} />
                <StatCard title="Store Sales (Month)" value={analyticsData.storeSalesMonth} change={analyticsData.salesChange} icon={icons.dollar} />
            </div>

            <div className="space-y-6">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold text-gray-800 dark:text-white">Recent Listener Counts</h3>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{trendDisplay}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Daily listener sessions for the past 5 days.</p>
                </div>

                <BarChart title="Top Listener Locations" data={topLocationsData} unit="%" />
                <BarChart title="Top Products by Revenue" data={topProductsData} unit="$" />
            </div>
        </div>
    );
};

export default AnalyticsPage;