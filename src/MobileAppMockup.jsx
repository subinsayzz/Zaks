import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Home, Calendar, Trophy, User,
    Droplets, Flame, BarChart2, Zap, Clock, ArrowUpRight, ChevronLeft, ChevronRight
} from 'lucide-react';

const MobileAppMockup = () => {
    const [activeTab, setActiveTab] = useState('welcome');
    const [notification, setNotification] = useState(null);

    const navigateTo = (tab) => setActiveTab(tab);

    const handleAction = (msg) => {
        setNotification(msg);
        setTimeout(() => setNotification(null), 2000);
    };

    return (
        <div className="flex justify-center items-center h-full w-full py-4 font-sans antialiased">
            {/* Device Frame */}
            <div className="relative w-[320px] h-[660px] bg-black rounded-[55px] shadow-2xl border-[6px] border-[#121212] overflow-hidden ring-1 ring-white/10 select-none">

                {/* Dynamic Island */}
                <div className="absolute top-0 w-full h-12 z-50 flex justify-center items-end pb-2 pointer-events-none">
                    <div className="w-28 h-8 bg-black rounded-full flex items-center justify-between px-4 ring-1 ring-white/5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#333]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#333]" />
                    </div>
                </div>

                {/* Status Bar */}
                <div className="absolute top-3.5 left-7 text-white text-[10px] font-bold z-40 font-mono">9:41</div>
                <div className="absolute top-3.5 right-7 flex gap-1 z-40 opacity-80">
                    <div className="w-4 h-2.5 border border-white rounded-[2px]" />
                    <div className="w-0.5 h-2.5 bg-white rounded-[1px]" />
                </div>

                {/* Main Content Area */}
                <div className="w-full h-full bg-[#050505] text-white relative flex flex-col">

                    <AnimatePresence mode="wait">
                        {activeTab === 'welcome' && <WelcomeScreen key="welcome" onStart={() => navigateTo('home')} onExplore={() => navigateTo('workshops')} />}
                        {activeTab === 'home' && <HomeScreen key="home" onAction={handleAction} />}
                        {activeTab === 'workshops' && <WorkshopsScreen key="workshops" onAction={handleAction} />}
                        {activeTab === 'progress' && <ProgressScreen key="progress" />}
                        {activeTab === 'leaderboard' && <LeaderboardScreen key="leaderboard" />}
                    </AnimatePresence>

                    {/* Navigation - Floating Dock Style */}
                    {activeTab !== 'welcome' && (
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50">
                            <NavBar activeTab={activeTab} onNavigate={navigateTo} />
                        </div>
                    )}

                    {/* Toast Notification */}
                    <AnimatePresence>
                        {notification && (
                            <motion.div
                                initial={{ y: 20, opacity: 0, scale: 0.9 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ y: 20, opacity: 0, scale: 0.9 }}
                                className="absolute top-16 left-1/2 -translate-x-1/2 bg-[#222] border border-white/10 text-white px-4 py-2 rounded-full text-[10px] uppercase font-bold tracking-widest shadow-2xl z-50 flex items-center gap-2"
                            >
                                <div className="w-2 h-2 rounded-full bg-[#ff3333] animate-pulse" />
                                {notification}
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </div>
    );
};

// --- SCREENS ---

const WelcomeScreen = ({ onStart, onExplore }) => (
    <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="w-full h-full flex flex-col relative bg-black overflow-hidden"
    >
        {/* Ambient Background */}
        <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[70%] bg-gradient-to-b from-[#ff3333]/20 via-[#ff3333]/5 to-transparent rounded-full blur-[80px] opacity-60" />

        {/* Content Container */}
        <div className="flex-1 flex flex-col justify-center items-center relative z-10 p-6">
            {/* Logo */}
            <div className="w-28 h-28 bg-[#1a1a1a] rounded-[32px] flex items-center justify-center border border-white/10 shadow-2xl mb-8 relative group">
                <div className="absolute inset-0 bg-[#ff3333] blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity" />
                <img src="/zaks-logo.jpg" alt="Logo" className="w-full h-full object-contain p-2 filter contrast-125 relative z-10" />
            </div>

            <h1 className="text-3xl font-bold text-white tracking-tight text-center mb-2">
                Zak's Gym
            </h1>
            <p className="text-white/40 text-sm font-medium tracking-wide uppercase mb-12">
                Member Portal
            </p>

            {/* Quote Card */}
            <div className="w-full max-w-[260px] relative">
                <div className="absolute -left-2 -top-2 text-4xl text-white/10 font-serif">"</div>
                <p className="text-center text-white/70 text-sm leading-relaxed font-medium italic">
                    Discipline is the bridge between goals and accomplishment.
                </p>
                <div className="absolute -right-2 -bottom-4 text-4xl text-white/10 font-serif transform rotate-180">"</div>
            </div>
        </div>

        {/* Actions Sheet */}
        <div className="w-full p-6 pb-12 bg-gradient-to-t from-black via-black/90 to-transparent relative z-20">
            <div className="space-y-3">
                <button onClick={onStart} className="w-full h-14 bg-white text-black rounded-[20px] font-bold text-sm tracking-wide hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)] relative overflow-hidden group">
                    <span className="relative z-10">Sign In</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>
                <button onClick={onExplore} className="w-full h-14 bg-[#111] text-white rounded-[20px] font-bold text-sm border border-white/10 active:scale-95 transition-all flex items-center justify-center gap-2 hover:bg-[#1a1a1a] hover:border-white/20">
                    Guest Access
                </button>
            </div>
            <p className="text-center text-[10px] text-white/20 mt-6 font-mono uppercase tracking-widest">
                Version 2.5.0
            </p>
        </div>
    </motion.div>
);

const HomeScreen = ({ onAction }) => (
    <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="w-full h-full p-5 pt-16 pb-28 overflow-y-auto scrollbar-hide bg-[#050505]"
    >
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
            <div>
                <h2 className="text-[10px] uppercase font-bold tracking-widest text-[#ff3333] mb-1">Overview</h2>
                <h1 className="text-3xl font-medium tracking-tight text-white">Hello, <span className="text-white/40">Zak</span></h1>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#222] border border-white/10" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 gap-3 mb-3">
            {/* Scan / Check-in */}
            <div
                onClick={() => onAction('Ready to scan')}
                className="col-span-1 aspect-square bg-[#111] rounded-[24px] p-4 flex flex-col justify-between border border-white/5 active:scale-95 transition-transform relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 p-12 bg-[#ff3333]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-8 h-8 rounded-full bg-[#222] flex items-center justify-center text-white"><Zap size={14} fill="currentColor" /></div>
                <div>
                    <div className="text-2xl font-medium tracking-tighter">Scan</div>
                    <div className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Check-in</div>
                </div>
            </div>

            {/* Workout */}
            <div
                onClick={() => onAction('Workout mode active')}
                className="col-span-1 aspect-square bg-[#fff] text-black rounded-[24px] p-4 flex flex-col justify-between active:scale-95 transition-transform"
            >
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center"><BarChart2 size={14} /></div>
                <div>
                    <div className="text-2xl font-medium tracking-tighter">Start</div>
                    <div className="text-[10px] text-black/40 uppercase font-bold tracking-wider">Session</div>
                </div>
            </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-[#111] p-4 rounded-[24px] border border-white/5">
                <div className="flex items-center gap-1.5 mb-3 text-[10px] font-bold uppercase text-white/40">
                    <Flame size={10} className="text-orange-500" /> Kcal
                </div>
                <div className="text-xl font-mono">1,240</div>
                <div className="w-full h-1 bg-[#222] rounded-full mt-2 overflow-hidden">
                    <div className="h-full w-1/2 bg-orange-500 rounded-full" />
                </div>
            </div>
            <div className="bg-[#111] p-4 rounded-[24px] border border-white/5">
                <div className="flex items-center gap-1.5 mb-3 text-[10px] font-bold uppercase text-white/40">
                    <Droplets size={10} className="text-blue-500" /> H2O
                </div>
                <div className="text-xl font-mono">1.2<span className="text-xs text-white/30 ml-1">L</span></div>
                <div className="w-full h-1 bg-[#222] rounded-full mt-2 overflow-hidden">
                    <div className="h-full w-[40%] bg-blue-500 rounded-full" />
                </div>
            </div>
        </div>

        {/* Next Up Card */}
        <div className="bg-[#111] rounded-[24px] p-5 border border-white/5 flex items-center justify-between group active:scale-[0.98] transition-all">
            <div>
                <div className="text-[10px] font-bold text-[#ff3333] uppercase tracking-widest mb-1">Up Next</div>
                <div className="text-lg font-medium mb-1">Fat Loss Bootcamp</div>
                <div className="text-xs text-white/40 font-mono">10:00 AM • Coach Mike</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center group-hover:bg-[#ff3333] group-hover:text-black transition-colors">
                <ArrowUpRight size={18} />
            </div>
        </div>

    </motion.div>
);

const WorkshopsScreen = ({ onAction }) => (
    <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="w-full h-full p-5 pt-16 pb-28 bg-[#050505]"
    >
        <div className="flex items-center justify-between mb-2">
            <h1 className="text-xl font-medium tracking-tight">Workshops</h1>
            <div className="text-xs font-mono text-white/30 bg-[#111] px-2 py-1 rounded-md">DEC 2025</div>
        </div>

        {/* Mini Calendar Strip */}
        <div className="flex justify-between items-center mb-6 pb-2 border-b border-white/5">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                <div key={i} className={`flex flex-col items-center gap-1 p-2 rounded-xl text-xs font-bold ${i === 3 ? 'bg-[#ff3333] text-black' : 'text-white/30'}`}>
                    <span className="text-[9px] uppercase">{d}</span>
                    <span>{21 + i}</span>
                </div>
            ))}
        </div>

        <div className="space-y-2.5 overflow-y-auto h-[350px] scrollbar-hide pb-20">
            {[
                { title: 'Powerlifting 101', type: 'Strength', time: '05:00 PM', spots: 4 },
                { title: 'HIIT Blast', type: 'Cardio', time: '06:30 PM', spots: 2 },
                { title: 'Yoga Flow', type: 'Recovery', time: '07:00 AM', spots: 8 },
                { title: 'Core Crusher', type: 'Strength', time: '08:00 AM', spots: 5 }
            ].map((item, i) => (
                <div key={i} className="bg-[#111] p-4 rounded-[20px] border border-white/5 flex flex-col gap-3 active:scale-[0.98] transition-all hover:border-white/10">
                    <div className="flex justify-between items-start">
                        <span className={`px-2 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider ${item.type === 'Strength' ? 'bg-[#ff3333]/10 text-[#ff3333]' : item.type === 'Cardio' ? 'bg-orange-500/10 text-orange-500' : 'bg-blue-500/10 text-blue-500'}`}>
                            {item.type}
                        </span>
                        <span className="text-[10px] font-mono text-white/40">{item.time}</span>
                    </div>
                    <div>
                        <h3 className="font-medium text-base mb-0.5">{item.title}</h3>
                        <p className="text-xs text-white/40 text-[10px] uppercase font-bold tracking-wide">{item.spots} spots left</p>
                    </div>
                    <button
                        onClick={() => onAction(`Booked ${item.title}`)}
                        className="w-full py-2.5 bg-[#1a1a1a] hover:bg-white hover:text-black text-white text-xs font-bold rounded-xl transition-colors border border-white/5"
                    >
                        Reserve Spot
                    </button>
                </div>
            ))}
        </div>
    </motion.div>
);

const ProgressScreen = () => (
    <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="w-full h-full p-5 pt-16 pb-28 bg-[#050505]"
    >
        <h1 className="text-xl font-medium tracking-tight mb-8">Analytics</h1>

        <div className="bg-[#111] rounded-[24px] p-5 border border-white/5 mb-4 relative overflow-hidden">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <div className="text-[10px] font-bold uppercase text-white/40 tracking-wider">Weight</div>
                    <div className="text-2xl font-mono mt-1">74.5<span className="text-sm text-white/40 ml-1">kg</span></div>
                </div>
                <div className="px-2 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold rounded-lg">-1.2%</div>
            </div>

            {/* Chart Bars */}
            <div className="flex items-end justify-between h-24 gap-1.5">
                {[40, 60, 45, 70, 50, 65, 55].map((h, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05 }}
                        className={`w-full rounded-t-sm ${i === 6 ? 'bg-[#ff3333]' : 'bg-[#222]'}`}
                    />
                ))}
            </div>
        </div>

        <div className="bg-[#111] rounded-[24px] p-5 border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ff3333] flex items-center justify-center text-black font-bold">
                    <Flame size={18} />
                </div>
                <div>
                    <div className="font-medium text-sm">Streak</div>
                    <div className="text-xs text-white/40">Just getting started</div>
                </div>
            </div>
            <div className="text-xl font-mono font-bold">12<span className="text-xs text-white/40">d</span></div>
        </div>
    </motion.div>
);

const LeaderboardScreen = () => (
    <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="w-full h-full p-5 pt-16 pb-28 bg-[#050505]"
    >
        <h1 className="text-xl font-medium tracking-tight mb-6">Leaderboard</h1>

        <div className="space-y-2 overflow-y-auto scrollbar-hide h-[400px]">
            {[
                { name: 'Alex M.', workouts: 24, score: 2450 },
                { name: 'Sarah J.', workouts: 22, score: 2310 },
                { name: 'Mike T.', workouts: 20, score: 2150 },
                { name: 'Dav P.', workouts: 18, score: 1980 },
                { name: 'Emma R.', workouts: 17, score: 1840 }
            ].map((user, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-[16px] ${i === 0 ? 'bg-[#ff3333] text-black' : 'bg-[#111] border border-white/5'}`}>
                    <div className="font-mono text-xs font-bold opacity-60">0{i + 1}</div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black ${i === 0 ? 'bg-black/20 text-black' : 'bg-[#222] text-white/40'}`}>
                        {user.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                        <div className="text-sm font-bold">{user.name}</div>
                        <div className={`text-[10px] ${i === 0 ? 'text-black/60' : 'text-white/40'}`}>{user.workouts} Workouts</div>
                    </div>
                    <div className="font-mono text-xs font-bold">{user.score}</div>
                </div>
            ))}
        </div>
    </motion.div>
);


// --- NAV BAR ---

const NavBar = ({ activeTab, onNavigate }) => {
    const tabs = [
        { id: 'home', icon: Home },
        { id: 'workshops', icon: Calendar },
        { id: 'progress', icon: BarChart2 },
        { id: 'leaderboard', icon: Trophy },
    ];

    return (
        <div className="h-14 bg-[#1a1a1a] rounded-full flex items-center gap-1 p-1.5 border border-white/10 shadow-2xl backdrop-blur-xl">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onNavigate(tab.id)}
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${activeTab === tab.id
                        ? 'bg-[#333] text-white'
                        : 'text-white/30 hover:text-white/60'
                        }`}
                >
                    <tab.icon size={18} strokeWidth={2.5} />
                </button>
            ))}
        </div>
    );
};

export default MobileAppMockup;
