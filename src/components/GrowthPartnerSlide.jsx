import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, CheckCircle2, ArrowRight, Cog, Trophy, Zap, ShieldCheck } from 'lucide-react';

const GrowthPartnerSlide = ({ slide }) => {
    const [activeTab, setActiveTab] = useState('installation');
    const [allSelected, setAllSelected] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div className="h-full flex flex-col md:flex-row gap-6 md:gap-12 p-4 md:p-8 max-w-7xl mx-auto">

            {/* LEFT COLUMN: THE PHILOSOPHY (INSTALLATION) */}
            <div className="flex-1 flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-4">
                        Not A SaaS Tool
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white font-heading leading-tight mb-4">
                        INSTALLATION, <br />
                        <span className="text-white/30">NOT SUPPORT.</span>
                    </h2>
                    <p className="text-xl text-zinc-300 leading-relaxed font-light">
                        Most agencies give you a login and wish you luck. <br />
                        <strong className="text-white font-bold">We build the machine, turn it on, and hand you the keys.</strong>
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-4"
                >
                    {[
                        { text: "We design your Irresistible Offer.", icon: Zap },
                        { text: "We build the Automation Architecture.", icon: Cog },
                        { text: "We install the Retention Logic.", icon: ShieldCheck },
                        { text: "We remove Owner Dependency.", icon: Trophy }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-accent/30 transition-all group cursor-default"
                        >
                            <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-zinc-500 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                                <item.icon size={20} />
                            </div>
                            <span className="text-lg font-medium text-zinc-200 group-hover:text-white transition-colors">
                                {item.text}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-sm text-white/40 font-mono uppercase tracking-widest"
                >
                    "You don't figure it out. We build it with you."
                </motion.div>
            </div>

            {/* RIGHT COLUMN: THE OUTCOME (DEFINITION OF SUCCESS) */}
            <div className="flex-1 flex flex-col relative">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-accent/5 to-transparent blur-3xl pointer-events-none" />

                <div className="bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 h-full flex flex-col relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent" />

                    <div className="mb-8 relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-2 font-heading">DEFINITION OF SUCCESS</h3>
                        <p className="text-zinc-400">We don't guess. The system is working when:</p>
                    </div>

                    <div className="flex-1 space-y-3 relative z-10">
                        {[
                            {
                                title: "Cold Traffic Converts",
                                desc: "Strangers become members without you explaining the gym."
                            },
                            {
                                title: "Zero-Chase Follow Up",
                                desc: "Leads are chased by AI agents, not you or your staff."
                            },
                            {
                                title: "Process Over People",
                                desc: "Staff follows a playbook. Performance survives staff turnover."
                            },
                            {
                                title: "Predictable Revenue",
                                desc: "Growth is a math equation, not a monthly surprise."
                            }
                        ].map((item, i) => (
                            <SuccessItem
                                key={i}
                                index={i}
                                title={item.title}
                                desc={item.desc}
                                forceSelected={allSelected}
                            />
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 relative z-10 text-center">
                        <div
                            onClick={() => setAllSelected(!allSelected)}
                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.3)] ${allSelected
                                    ? 'bg-white text-zinc-900 scale-105'
                                    : 'bg-accent text-zinc-900 hover:scale-105'
                                }`}
                        >
                            <span>This is what we install</span>
                            <ArrowRight size={16} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const SuccessItem = ({ index, title, desc, forceSelected }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Determine active state based on hover or forced selection
    const isActive = isHovered || forceSelected;

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + (index * 0.1) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`p-4 rounded-xl border transition-all duration-300 cursor-default ${isActive
                ? 'bg-accent/10 border-accent/40 translate-x-2'
                : 'bg-white/5 border-white/5'
                }`}
        >
            <div className="flex items-start gap-4">
                <div className={`mt-1 p-1 rounded-full border transition-colors ${isActive ? 'bg-accent border-accent text-zinc-900' : 'border-zinc-600 text-transparent'
                    }`}>
                    <Check size={14} strokeWidth={4} />
                </div>
                <div>
                    <h4 className={`font-bold transition-colors ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                        {title}
                    </h4>
                    <p className="text-sm text-zinc-500 mt-1 leading-relaxed">
                        {desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default GrowthPartnerSlide;
