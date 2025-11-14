
import React from 'react';

const MissionPage: React.FC = () => {
    
    const MissionItem: React.FC<{title: string; description: string; icon: React.ReactNode}> = ({title, description, icon}) => (
        <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-gray-600 rounded-full flex items-center justify-center text-blue-600 dark:text-yellow-400">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h4>
                <p className="mt-1 text-gray-700 dark:text-gray-200">{description}</p>
            </div>
        </div>
    );
    
    const icons = {
        news: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3h2m-4 6h4m-4 4h4m-4 4h4" /></svg>,
        culture: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
        empower: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
        dialogue: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
    };

  return (
    <div className="p-4 space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Our Mission</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-1">Inform, Educate, Preserve, and Empower.</p>
      </div>
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 space-y-8">
        
        <MissionItem 
            title="To Inform"
            description="Provide unbiased and timely news through 'Iroyin Itaniji' (The Awakening News), keeping our community well-informed on local and global events."
            icon={icons.news}
        />
        <MissionItem 
            title="To Preserve Culture"
            description="Promote and safeguard the Yoruba language, arts, music, and traditions for future generations through engaging cultural programming."
            icon={icons.culture}
        />
        <MissionItem 
            title="To Empower"
            description="Empower our youth and connect the diaspora through dedicated programs, mentorship, and initiatives that foster leadership and success."
            icon={icons.empower}
        />
        <MissionItem 
            title="To Foster Dialogue"
            description="Serve as a vibrant platform for open dialogue and intellectual exchange on social, economic, and political issues affecting the Yoruba people."
            icon={icons.dialogue}
        />

      </div>
    </div>
  );
};

export default MissionPage;