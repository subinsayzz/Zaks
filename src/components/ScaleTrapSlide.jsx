import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, TrendingUp, PhoneOff, Flame, Users, Zap, Bot, BarChart3, ArrowRight } from 'lucide-react';

const ScaleTrapSlide = ({ data }) => {
    const [activeTab, setActiveTab] = useState('pain'); // 'pain' or 'gain'

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? 50 : -50,
            opacity: 0
        })
    };

    const isPain = activeTab === 'pain';

    return (
        <div className="h-full flex flex-col p-4 md:p-6 w-full max-w-6xl mx-auto overflow-y-auto md:overflow-hidden">
            {/* Header Section */}
            <div className="flex flex-col gap-2 mb-8">
                <div className="flex items-center gap-3 text-red-500 mb-2">
                    <AlertTriangle size={24} className="flex-shrink-0" />
                    <span className="text-xs md:text-sm font-bold tracking-widest uppercase">The Scale Trap</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black italic uppercase leading-none">
                    {isPain ? "Why Growth Feels Heavy" : "How To Scale With Speed"}
                </h2>
                <p className="text-base md:text-xl text-neutral-400 font-medium max-w-2xl">
                    {isPain ? "More members shouldn't mean more chaos. But right now, it does." : "Predictable systems. Predictable growth. Zero chaos."}
                </p>
            </div>

            {/* Main Content Area - Split or Toggle */}
            <div className="flex-1 flex flex-col relative bg-neutral-900/80 rounded-3xl border border-neutral-800 overflow-hidden backdrop-blur-xl shadow-2xl">
                {/* Ambient background glow */}
                <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b ${isPain ? 'from-red-600/10' : 'from-green-600/10'} to-transparent rounded-full blur-[100px] pointer-events-none transition-colors duration-500`} />

                {/* Toggle Switch */}
                <div className="md:absolute md:top-6 md:right-6 z-20 flex justify-center pt-6 md:pt-0">
                    <div className="bg-neutral-950 rounded-full p-1 border border-neutral-800 flex">
                        <button
                            onClick={() => setActiveTab('pain')}
                            className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold uppercase transition-all duration-300 ${isPain ? 'bg-red-600 text-white shadow-lg shadow-red-900/50' : 'text-neutral-500 hover:text-white'}`}
                        >
                            The Old Way
                        </button>
                        <button
                            onClick={() => setActiveTab('gain')}
                            className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold uppercase transition-all duration-300 ${!isPain ? 'bg-green-600 text-white shadow-lg shadow-green-900/50' : 'text-neutral-500 hover:text-white'}`}
                        >
                            The Gymrupt Way
                        </button>
                    </div>
                </div>

                <div className="flex-1 p-6 md:p-12 overflow-y-auto md:overflow-visible flex flex-col justify-center">
                    <AnimatePresence mode="wait" custom={isPain ? -1 : 1}>
                        <motion.div
                            key={activeTab}
                            custom={isPain ? -1 : 1}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="w-full flex flex-col md:grid md:grid-cols-[200px_1fr] gap-8 items-center"
                        >
                            {/* Left: Visual/Icon */}
                            <div className="flex justify-center mt-6 md:mt-0">
                                <div className={`w-48 h-48 rounded-full flex items-center justify-center border-4 relative ${isPain ? 'border-red-500/20 bg-red-500/5' : 'border-green-500/20 bg-green-500/5'}`}>
                                    {/* Pulse Effect */}
                                    <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${isPain ? 'bg-red-500' : 'bg-green-500'}`} style={{ animationDuration: '3s' }} />
                                    {isPain ? (
                                        <Flame size={80} className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                                    ) : (
                                        <TrendingUp size={80} className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                                    )}
                                </div>
                            </div>

                            {/* Right: Copy */}
                            <div className="w-full">
                                {isPain ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                            <div className="p-2 bg-red-500/10 rounded-lg text-red-500 mt-1 flex-shrink-0"><PhoneOff size={20} /></div>
                                            <div>
                                                <h4 className="text-sm font-bold text-white uppercase mb-1">You Miss Calls</h4>
                                                <p className="text-xs text-neutral-400 leading-relaxed">Busy front desk = 70% drop rate. That's cash on fire.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                            <div className="p-2 bg-red-500/10 rounded-lg text-red-500 mt-1 flex-shrink-0"><Users size={20} /></div>
                                            <div>
                                                <h4 className="text-sm font-bold text-white uppercase mb-1">Staff Burnout</h4>
                                                <p className="text-xs text-neutral-400 leading-relaxed">They handle sales, cleaning, and coaching. Breaks happen.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                            <div className="p-2 bg-red-500/10 rounded-lg text-red-500 mt-1 flex-shrink-0"><BarChart3 size={20} /></div>
                                            <div>
                                                <h4 className="text-sm font-bold text-white uppercase mb-1">You Plateau</h4>
                                                <p className="text-xs text-neutral-400 leading-relaxed">You can't scale manual labor. You hit a ceiling.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                            <div className="p-2 bg-red-500/10 rounded-lg text-red-500 mt-1 flex-shrink-0"><Zap size={20} /></div>
                                            <div>
                                                <h4 className="text-sm font-bold text-white uppercase mb-1">Subscription Hell</h4>
                                                <p className="text-xs text-neutral-400 leading-relaxed">More growth = more tools. Zapier breaks. Data gets lost.</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                            <div className="p-2 bg-green-500/10 rounded-lg text-green-500 mt-1 flex-shrink-0 shadow-[0_0_15px_rgba(34,197,94,0.2)]"><Zap size={20} /></div>
                                            <div>
                                                <h4 className="text-sm font-bold text-white uppercase mb-1">Streamlined Sales</h4>
                                                <p className="text-xs text-neutral-400 leading-relaxed">Marketing & sales in one flow. Leads don't slip. They close.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                            <div className="p-2 bg-green-500/10 rounded-lg text-green-500 mt-1 flex-shrink-0 shadow-[0_0_15px_rgba(34,197,94,0.2)]"><TrendingUp size={20} /></div>
                                            <div>
                                                <h4 className="text-sm font-bold text-white uppercase mb-1">Seamless Operations</h4>
                                                <p className="text-xs text-neutral-400 leading-relaxed">Your gym runs on autopilot. Zero chaos. Staff focus on members.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                            <div className="p-2 bg-green-500/10 rounded-lg text-green-500 mt-1 flex-shrink-0 shadow-[0_0_15px_rgba(34,197,94,0.2)]"><Users size={20} /></div>
                                            <div>
                                                <h4 className="text-sm font-bold text-white uppercase mb-1">Built-in Features</h4>
                                                <p className="text-xs text-neutral-400 leading-relaxed">Everything you need is inside. No extra tools. No "patching" it together.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                            <div className="p-2 bg-green-500/10 rounded-lg text-green-500 mt-1 flex-shrink-0 shadow-[0_0_15px_rgba(34,197,94,0.2)]"><BarChart3 size={20} /></div>
                                            <div>
                                                <h4 className="text-sm font-bold text-white uppercase mb-1">One Source of Truth</h4>
                                                <p className="text-xs text-neutral-400 leading-relaxed">One dashboard. One login. Total clarity on your entire business.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Footer / CTA Area within card */}
                <div className={`p-6 border-t border-neutral-800 transition-colors duration-500 ${isPain ? 'bg-red-950/20' : 'bg-green-950/20'}`}>
                    <div className="flex items-center justify-between">
                        <p className="text-neutral-400 text-sm font-medium uppercase tracking-wider">
                            {isPain ? "The Result: You are the bottleneck." : "The Result: You are the owner."}
                        </p>
                        {isPain && (
                            <button
                                onClick={() => setActiveTab('gain')}
                                className="flex items-center gap-2 text-white font-bold hover:gap-3 transition-all"
                            >
                                FIX THE SYSTEM <ArrowRight size={20} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScaleTrapSlide;
