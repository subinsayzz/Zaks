import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Maximize2 } from 'lucide-react';
import MobileAppMockup from '../MobileAppMockup';
import WebsiteMockup from '../WebsiteMockup';

const InteractiveTabsSlide = ({ slide, onFullscreenToggle }) => {
    const [activeTab, setActiveTab] = useState(slide.tabs[0].id);
    const [isMockupFullscreen, setIsMockupFullscreen] = useState(false);
    const activeContent = slide.tabs.find(t => t.id === activeTab).content;

    const handleFullscreenToggle = (isFull) => {
        setIsMockupFullscreen(isFull); // Track locally to adjust styles
        if (onFullscreenToggle) onFullscreenToggle(isFull); // Propagate to Deck
    };

    // Helper to render the specific component or iframe within the Split View
    const renderSplitPreview = () => {
        if (activeContent.componentName === 'WebsiteMockup') {
            return (
                <div className={`w-full h-full relative overflow-hidden bg-[#050505] rounded-r-2xl border-l border-white/5 group ${isMockupFullscreen ? 'z-[9999]' : ''}`}>
                    {/* Simulated 1440px Desktop Viewport. 
                        CRITICAL FIX: When fullscreen, we must REMOVE the transform/scale so fixed positioning works relative to viewport. 
                    */}
                    <div className={`absolute inset-0 origin-top-left transition-transform duration-0 ${isMockupFullscreen ? '' : 'w-[200%] h-[200%] transform scale-[0.5]'}`}>
                        <WebsiteMockup onFullscreenToggle={handleFullscreenToggle} isFullscreen={isMockupFullscreen} />
                    </div>

                    {/* Clear Enlargement Call-to-Action - ON HOVER ONLY for sleekness */}
                    {!isMockupFullscreen && (
                        <button
                            onClick={() => handleFullscreenToggle(true)}
                            className="absolute top-6 right-6 z-50 bg-black/70 backdrop-blur-md text-white/90 hover:text-white px-5 py-2.5 rounded-full flex items-center gap-2.5 border border-white/20 hover:bg-accent hover:border-accent transition-all cursor-pointer shadow-2xl scale-95 hover:scale-105 opacity-0 group-hover:opacity-100 duration-300"
                        >
                            <Maximize2 size={16} />
                            <span className="text-xs font-bold uppercase tracking-wider">Enlarge</span>
                        </button>
                    )}
                </div>
            );
        }
        if (activeContent.componentName === 'MobileAppMockup') {
            return (
                <div className="w-full h-full flex items-center justify-center relative overflow-visible">
                    {/* Clean Ambient Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-accent/5 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative z-10 w-max h-max">
                        {/* Mockup Container */}
                        <div className="transform scale-[0.80] md:scale-[0.85] xl:scale-[0.90] origin-center">
                            <MobileAppMockup />
                        </div>

                        {/* FEATURE NODES (Overlay) - Positioned with calculated offset to touch bezel only */}

                        {/* Node 1: Branding (Top Left) */}
                        <div className="absolute top-[12%] -left-[40px] md:-left-[230px] flex items-center gap-2 animate-in fade-in slide-in-from-right-8 duration-700 delay-300 pointer-events-none">
                            <div className="bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[10px] uppercase font-bold text-white shadow-2xl whitespace-nowrap hidden md:block">
                                Custom Branding
                            </div>
                            <div className="w-8 md:w-24 h-[1px] bg-gradient-to-l from-accent to-transparent" />
                            <div className="w-1.5 h-1.5 rounded-full bg-accent box-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                        </div>

                        {/* Node 2: Booking (Middle Right) */}
                        <div className="absolute top-[42%] -right-[40px] md:-right-[230px] flex items-center gap-2 flex-row-reverse animate-in fade-in slide-in-from-left-8 duration-700 delay-500 pointer-events-none">
                            <div className="bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[10px] uppercase font-bold text-white shadow-2xl whitespace-nowrap hidden md:block">
                                1-Tap Booking
                            </div>
                            <div className="w-8 md:w-24 h-[1px] bg-gradient-to-r from-accent to-transparent" />
                            <div className="w-1.5 h-1.5 rounded-full bg-accent box-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                        </div>

                        {/* Node 3: Gamification (Bottom Left) */}
                        <div className="absolute bottom-[22%] -left-[40px] md:-left-[230px] flex items-center gap-2 animate-in fade-in slide-in-from-right-8 duration-700 delay-700 pointer-events-none">
                            <div className="bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[10px] uppercase font-bold text-white shadow-2xl whitespace-nowrap hidden md:block">
                                Gamified Progress
                            </div>
                            <div className="w-8 md:w-24 h-[1px] bg-gradient-to-l from-accent to-transparent" />
                            <div className="w-1.5 h-1.5 rounded-full bg-accent box-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                        </div>
                    </div>
                </div>
            );
        }
        if (activeContent.componentName === 'TourEmbed') {
            return (
                <div className="w-full h-full relative group bg-[#050505] rounded-r-2xl overflow-hidden border-l border-white/5">
                    <iframe
                        src={activeContent.embedUrl}
                        className="w-full h-full border-0 opacity-100 mix-blend-normal"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    {/* Interactive hint overlay */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                    <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 pointer-events-none z-10 shadow-lg">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">Live 360° View</span>
                    </div>
                </div>
            );
        }
        // Fallback for generic Iframe if needed
        if (activeContent.type === 'iframe') {
            return <iframe src={activeContent.url} className="w-full h-full border-0" title={activeTab} allowFullScreen />;
        }
        return null;
    };

    return (
        <div className="h-full flex flex-col">
            {/* Header Area with Tabs on Right */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 shrink-0">
                <div className="text-xl text-white/60 font-light max-w-xl leading-snug">
                    {slide.mainIdea}
                </div>

                {/* Tabs Header */}
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide shrink-0">
                    {slide.tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all whitespace-nowrap ${isActive
                                    ? 'bg-[#1a1a1a] border-accent text-white shadow-lg'
                                    : 'bg-transparent border-transparent text-white/40 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <tab.icon size={18} className={isActive ? 'text-accent' : ''} />
                                <span className="font-bold uppercase tracking-wide text-xs md:text-sm">{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Split Content Area - Seamless & Blended */}
            <div className="flex-1 bg-[#0a0a0a] rounded-3xl border border-white/5 overflow-hidden relative shadow-2xl flex flex-col lg:flex-row">

                {activeContent.type === 'split-preview' ? (
                    <>
                        {/* LEFT COLUMN: Features & Explainer */}
                        <div className="w-full lg:w-[40%] p-8 lg:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 bg-[#0a0a0a] relative z-10">
                            <motion.div
                                key={`text-${activeTab}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-8"
                            >
                                <div>
                                    <h3 className="text-3xl font-black uppercase italic font-heading text-white mb-3">
                                        {activeContent.title}
                                    </h3>
                                    <p className="text-white/50 leading-relaxed font-light text-base">
                                        {activeContent.desc}
                                    </p>
                                </div>

                                <div className="grid gap-4">
                                    {activeContent.features.map((feat, i) => (
                                        <div key={i} className="flex items-center gap-4 text-white/80 group">
                                            <div className="w-8 h-8 rounded-full bg-accent/5 flex items-center justify-center text-accent/50 group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <span className="text-sm font-medium">{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* DynamicValue Display */}
                                {activeContent.value && (
                                    <div className="pt-6 border-t border-white/5">
                                        <div className="flex items-center gap-4">
                                            <div>
                                                <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest mb-1">Estimated Value</div>
                                                <div className="text-xl text-white font-bold tracking-tight">
                                                    {activeContent.value.replace('Value:', '').replace('VALUE:', '')}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        {/* RIGHT COLUMN: Interactive Preview */}
                        <div className="w-full lg:w-[60%] h-full relative bg-[#050505]">
                            <motion.div
                                key={`preview-${activeTab}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full"
                            >
                                {renderSplitPreview()}
                            </motion.div>
                        </div>
                    </>
                ) : (
                    // Fallback
                    <div className="w-full h-full relative">
                        {renderSplitPreview()}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InteractiveTabsSlide;
