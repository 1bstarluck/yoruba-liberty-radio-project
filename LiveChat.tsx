import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../types';
import { SendIcon } from './icons/SendIcon';
import { SearchIcon } from './icons/SearchIcon';

const botPersonas = [
    { name: 'Femi_Lagos' },
    { name: 'Ayo_London' },
    { name: 'Bisi_NY' },
    { name: 'YorubaScholar' },
];

const sampleBotMessages = [
    "Ẹ n lẹ o, gbogbo ènìyàn! Greetings, everyone!",
    "What's the current topic on the broadcast?",
    "Listening live from London, the signal is great today!",
    "Does anyone know the name of the song that just played? It was beautiful.",
    "I'm learning so much about our culture from this station.",
    "The discussion on Yoruba history was very insightful.",
    "Can't wait for the next episode of the podcast.",
    "Big shoutout to the YLR team for their great work!",
    "Hello from New York! Proud to be Yoruba.",
    "The 'Hero of the Month' section is my favorite.",
];

const LiveChat: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [nickname, setNickname] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [tempNickname, setTempNickname] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const messagesEndRef = useRef<null | HTMLDivElement>(null);
    const botIntervalRef = useRef<number | null>(null);
    
    const isAdmin = nickname === 'admin';

    useEffect(() => {
        const storedNickname = localStorage.getItem('ylr-chat-nickname');
        if (storedNickname) {
            setNickname(storedNickname);
        } else {
            setShowModal(true);
        }

        // Initial welcome message
        setMessages([{
            id: Date.now(),
            sender: 'YLR_Moderator',
            text: 'Welcome to the Yoruba Liberty Radio community chat! Please be respectful to others.',
            isUser: false,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }]);

    }, []);

    useEffect(() => {
        if (nickname && !showModal) {
            // Start bot messages interval
            botIntervalRef.current = window.setInterval(() => {
                const bot = botPersonas[Math.floor(Math.random() * botPersonas.length)];
                const text = sampleBotMessages[Math.floor(Math.random() * sampleBotMessages.length)];
                
                // Avoid bot repeating the same message right after another bot
                if (messages.length > 0 && messages[messages.length - 1].text === text) return;

                const newMessage: ChatMessage = {
                    id: Date.now(),
                    sender: bot.name,
                    text,
                    isUser: false,
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                };
                setMessages(prev => [...prev, newMessage]);
            }, 8000); // Post every 8 seconds
        }

        return () => {
            if (botIntervalRef.current) {
                clearInterval(botIntervalRef.current);
            }
        };
    }, [nickname, showModal, messages]); // Rerun if messages change to avoid closure issues with the check

    const filteredMessages = messages.filter(msg =>
        searchQuery.trim() === '' ||
        msg.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
        msg.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [filteredMessages]);

    const handleNicknameSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (tempNickname.trim()) {
            const finalNickname = tempNickname.trim();
            localStorage.setItem('ylr-chat-nickname', finalNickname);
            setNickname(finalNickname);
            setShowModal(false);
        }
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || !nickname) return;

        const userMessage: ChatMessage = {
            id: Date.now(),
            sender: nickname,
            text: input.trim(),
            isUser: true,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        
        // Simulate a bot reply
        setTimeout(() => {
            const bot = botPersonas[Math.floor(Math.random() * botPersonas.length)];
            const replies = ["Interesting point!", "I agree.", "Thanks for sharing.", "That's a good question."];
            const replyText = replies[Math.floor(Math.random() * replies.length)];
             const botMessage: ChatMessage = {
                id: Date.now() + 1,
                sender: bot.name,
                text: replyText,
                isUser: false,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages(prev => [...prev, botMessage]);
        }, 1500 + Math.random() * 1000);

    };

    const handleToggleSearch = () => {
        setIsSearching(!isSearching);
        setSearchQuery(''); // Clear search when toggling
    };

    if (showModal) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-sm">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Enter a Nickname</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Choose a nickname to use in the community chat. (Hint: Try 'admin' for extra features!)</p>
                    <form onSubmit={handleNicknameSubmit}>
                        <input
                            type="text"
                            value={tempNickname}
                            onChange={(e) => setTempNickname(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                            placeholder="Your Nickname"
                            maxLength={15}
                            required
                        />
                        <button type="submit" className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            Join Chat
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center min-h-[72px]">
                {isSearching && isAdmin ? (
                    <div className="w-full flex items-center gap-2">
                         <SearchIcon className="w-5 h-5 text-gray-400" />
                         <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by sender or message..."
                            className="flex-grow px-2 py-1 bg-transparent focus:outline-none dark:text-white"
                            autoFocus
                        />
                         <button onClick={handleToggleSearch} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600" aria-label="Close search">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                ) : (
                    <>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Live Community Chat</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Join the conversation!</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <p className="text-xs text-gray-500 dark:text-gray-400">Logged in as:</p>
                                <p className="font-semibold text-blue-600 dark:text-yellow-400">{nickname}</p>
                            </div>
                            {isAdmin && (
                                <button onClick={handleToggleSearch} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Search messages">
                                    <SearchIcon />
                                </button>
                            )}
                        </div>
                    </>
                )}
            </div>
            <div className="p-4 h-96 overflow-y-auto flex flex-col space-y-4">
                {filteredMessages.map((msg) => (
                    <div key={msg.id} className={`flex items-end gap-2 ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                        {!msg.isUser && <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex-shrink-0 flex items-center justify-center text-sm font-bold text-gray-600 dark:text-gray-300">{msg.sender.substring(0, 2)}</div>}
                        <div className={`flex flex-col ${msg.isUser ? 'items-end' : 'items-start'}`}>
                            {!msg.isUser && <span className="text-xs text-gray-500 dark:text-gray-400 ml-2 mb-0.5">{msg.sender}</span>}
                            <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg ${msg.isUser ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-bl-none'}`}>
                                <p className="whitespace-pre-wrap">{msg.text}</p>
                            </div>
                            <span className="text-xs text-gray-400 dark:text-gray-500 mt-1 px-1">{msg.timestamp}</span>
                        </div>
                    </div>
                ))}
                 {filteredMessages.length === 0 && searchQuery && (
                    <div className="text-center my-auto text-gray-500 dark:text-gray-400">
                        <p>No messages match your search for "{searchQuery}".</p>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
             <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={isSearching ? "Exit search to send a message" : "Type a message..."}
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700"
                        aria-label="Chat message"
                        disabled={isSearching}
                    />
                    <button
                        type="submit"
                        disabled={!input.trim() || isSearching}
                        className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 disabled:bg-gray-400 dark:disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors flex-shrink-0"
                        aria-label="Send message"
                    >
                        <SendIcon className="w-5 h-5"/>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LiveChat;