import React from 'react';
import { motion } from 'framer-motion';
import { Check, Quote } from 'lucide-react';

const SystemFeaturesSlide = ({ slide }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        }
    };

    return (
        <div className="h-full flex flex-col w-full max-w-7xl mx-auto px-4">
            {/* Header Content */}
            <div className="text-center mb-8">
                {slide.mainIdea && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed"
                    >
                        {slide.mainIdea}
                    </motion.div>
                )}
            </div>

            {/* Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-y-auto pb-4 custom-scrollbar flex-1 content-start"
            >
                {slide.features.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={itemVariants}
                        className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-accent/30 transition-all duration-300 flex flex-col gap-3 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1"
                    >
                        <div className="flex justify-between items-start">
                            <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-wider text-white/40 group-hover:text-accent group-hover:bg-accent/10 group-hover:border-accent/20 transition-colors">
                                <Check size={10} strokeWidth={4} />
                                System Included
                            </div>
                        </div>

                        <h3 className="text-lg md:text-xl font-bold text-white font-heading leading-tight group-hover:text-accent transition-colors">
                            {item.title}
                        </h3>

                        <p className="text-sm text-white/50 leading-relaxed font-medium">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Bottom Quote */}
            {slide.quote && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 md:mt-10 mb-2 relative"
                >
                    <div className="absolute inset-0 bg-accent/20 blur-[60px] rounded-full pointer-events-none opacity-20" />
                    <div className="relative bg-gradient-to-r from-zinc-900 to-zinc-900/50 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left shadow-2xl">
                        <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20 text-accent">
                            <Quote size={24} className="fill-accent/20" />
                        </div>
                        <div>
                            <p className="text-xl md:text-3xl font-black italic text-white font-heading uppercase tracking-wide leading-tight">
                                "{slide.quote}"
                            </p>
                            <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mt-2">
                                The Gymrupt Philosophy
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default SystemFeaturesSlide;
