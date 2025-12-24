import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowRight, Check, X, Plus } from 'lucide-react';
import { slides } from './slidesData';
import MobileAppMockup from './MobileAppMockup';
import './index.css';

// --- ANIMATION VARIANTS ---
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5, ease: "easeOut" }
  })
};

// --- LAYOUT COMPONENTS ---

const Header = ({ title, subtitle, slideIndex, totalSlides }) => (
  <div className="w-full flex justify-between items-start mb-6 md:mb-10 border-b border-white/5 pb-4 md:pb-6">
    <div>
      <motion.h4
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-accent uppercase tracking-[0.2em] text-xs md:text-sm font-bold mb-2 font-body"
      >
        {subtitle}
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[0.9] font-heading uppercase"
      >
        {title}
      </motion.h2>
    </div>
    <div className="text-right hidden md:block">
      <div className="text-white/20 font-black text-xl tracking-tighter font-heading">
        GYMRUPT<span className="text-accent">.</span>
      </div>
      <div className="text-white/40 text-xs font-mono mt-1">
        {slideIndex + 1} / {totalSlides}
      </div>
    </div>
  </div>
);

const TitleSlide = ({ slide }) => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-6 md:space-y-8 p-4">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="p-6 bg-accent/10 rounded-full mb-4 ring-1 ring-accent/30"
    >
      <slide.icon size={64} className="text-accent" />
    </motion.div>

    <motion.h1
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-4xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[0.9] uppercase tracking-tight"
    >
      {slide.title}
    </motion.h1>

    <motion.h3
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-lg md:text-2xl text-white/80 font-body font-light tracking-widest uppercase"
    >
      {slide.subtitle}
    </motion.h3>

    <div className="h-px w-24 bg-accent my-8" />

    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-base md:text-xl max-w-2xl text-white/60 font-body"
    >
      {slide.tagline}
    </motion.p>

    {slide.points && (
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8">
        {slide.points.map((p, i) => (
          <motion.div
            key={i}
            custom={i + 4}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2 text-sm md:text-base font-bold text-white bg-white/5 px-4 py-2 rounded-full border border-white/5"
          >
            <div className="w-2 h-2 bg-accent rounded-full" />
            {p}
          </motion.div>
        ))}
      </div>
    )}
  </div>
);

const ListSlide = ({ slide }) => (
  <div className="flex flex-col h-full overflow-y-auto custom-scrollbar pr-4">
    {slide.mainIdea && (
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-xl md:text-3xl font-heading font-medium text-white/90 mb-10 max-w-4xl leading-tight"
      >
        {slide.mainIdea}
      </motion.div>
    )}

    <div className="grid gap-4 md:gap-6">
      {slide.points.map((point, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="flex items-start gap-4 p-4 md:p-6 bg-white/5 border border-white/5 rounded-xl hover:border-accent/40 transition-colors group"
        >
          <div className="mt-1 min-w-[24px] text-accent/50 group-hover:text-accent transition-colors">
            <ArrowRight size={24} />
          </div>
          <span className="text-lg md:text-xl text-white/80 font-body">{point}</span>
        </motion.div>
      ))}
    </div>

    {slide.footer && (
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="mt-8 pt-8 text-accent font-bold tracking-widest uppercase text-sm border-t border-white/5"
      >
        {slide.footer}
      </motion.div>
    )}
  </div>
);

const ComparisonSlide = ({ slide }) => (
  <div className="flex flex-col h-full overflow-hidden">
    <div className="text-xl text-white/80 mb-6 font-light hidden md:block">{slide.mainIdea}</div>

    <div className="grid md:grid-cols-2 gap-4 md:gap-8 overflow-y-auto mb-6 flex-shrink-0">
      {/* Left Column */}
      <motion.div
        initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
        className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/5 flex flex-col"
      >
        <div className="text-white/40 uppercase tracking-widest font-bold mb-6 text-xs md:text-sm">{slide.col1Title}</div>
        <ul className="space-y-4 flex-1">
          {slide.col1.map((item, i) => (
            <li key={i} className="text-white/50 text-base md:text-xl font-body flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              {item}
            </li>
          ))}
        </ul>
        {slide.col1Footer && (
          <div className="mt-6 pt-4 border-t border-white/10 text-white/50 text-sm font-bold font-mono leading-relaxed whitespace-pre-line">
            {slide.col1Footer}
          </div>
        )}
      </motion.div>

      {/* Right Column */}
      <motion.div
        initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
        className="bg-accent/5 rounded-2xl p-6 md:p-8 border border-accent/20 flex flex-col relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-32 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="text-accent uppercase tracking-widest font-bold mb-6 text-xs md:text-sm relative z-10">{slide.col2Title}</div>
        <ul className="space-y-4 relative z-10 flex-1">
          {slide.col2.map((item, i) => (
            <li key={i} className="text-white text-base md:text-xl font-body font-medium flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
        {slide.col2Footer && (
          <div className="mt-6 pt-4 border-t border-accent/10 text-accent/80 text-sm font-bold font-mono leading-relaxed relative z-10 whitespace-pre-line">
            {slide.col2Footer}
          </div>
        )}
      </motion.div>
    </div>

    {/* Expanded Footer / Conclusion */}
    {slide.conclusion && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-auto border-t border-white/10 pt-6 text-white/70 text-base md:text-lg leading-relaxed whitespace-pre-line"
      >
        {slide.conclusion}
      </motion.div>
    )}
  </div>
);

const PricingSlide = ({ slide }) => (
  <div className="flex flex-col h-full justify-center items-center p-4">
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-full max-w-5xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 text-center lg:text-left">
          <div className="text-accent uppercase tracking-widest font-bold mb-2 text-sm">One-Time Partnership Fee</div>
          <div className="text-5xl md:text-7xl lg:text-8xl font-black font-heading text-white tracking-tighter mb-6">{slide.price}</div>
          <div className="text-white/60 text-base md:text-lg leading-relaxed">
            Full system setup, migration, and training. <br />
            <span className="text-white font-bold">You own the system.</span>
          </div>
        </div>

        <div className="hidden lg:block w-px h-64 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="block lg:hidden w-32 h-px bg-white/10" />

        <div className="flex-1 space-y-4 w-full">
          {slide.features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4 text-white/90 text-base md:text-lg font-medium p-3 rounded-lg hover:bg-white/5 transition-colors"
            >
              <div className="min-w-[20px] text-accent"><Check size={20} /></div>
              {feature}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

const GuaranteeSlide = ({ slide }) => (
  <div className="grid md:grid-cols-2 gap-6 h-full items-center overflow-y-auto p-2">
    {slide.rules.map((rule, i) => (
      <motion.div
        key={i}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: i * 0.2 }}
        className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl h-full flex flex-col justify-center hover:bg-white/10 transition-colors relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 p-24 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors" />

        <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent mb-6 font-bold text-xl font-heading">
          {i + 1}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-heading">{rule.title}</h3>
        <div className="text-accent text-3xl font-black font-mono mb-4">{rule.amount}</div>
        <p className="text-white/60 text-base md:text-lg leading-relaxed">{rule.desc}</p>
      </motion.div>
    ))}
  </div>
);

const CostCalculatorSlide = ({ slide }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="text-xl md:text-2xl font-light text-white/80 mb-8">{slide.mainIdea}</div>

      <div className="grid md:grid-cols-2 gap-8 flex-1">
        {/* Left: Chaos List */}
        <div className="flex flex-col gap-3">
          {slide.items.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5 hover:border-red-500/30 transition-colors"
            >
              <div className="font-medium text-white/80">{item.name}</div>
              <div className="font-mono text-red-500 font-bold">{item.cost}</div>
            </motion.div>
          ))}
          <div className="mt-4 p-4 rounded-xl border border-dashed border-white/20 text-center text-white/40 text-sm">
            + Hidden integration costs...
          </div>
        </div>

        {/* Right: Summary */}
        <div className="flex flex-col justify-center items-center p-8 bg-red-900/10 rounded-3xl border border-red-500/20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent pointer-events-none" />
          <h3 className="text-white/60 uppercase tracking-widest text-sm font-bold mb-4">The Monthly Reality</h3>
          <div className="text-6xl md:text-7xl font-black text-white mb-2">~₹38k<span className="text-2xl text-white/40">/mo</span></div>
          <div className="text-red-400 font-mono text-lg mb-8">Every single month. Forever.</div>

          <div className="h-px w-full bg-white/10 mb-8" />

          <div className="text-white font-bold text-xl mb-2">Gymrupt replaces ALL of this.</div>
          <p className="text-white/60 text-sm">{slide.conclusion}</p>
        </div>
      </div>
    </div>
  );
}

const AppShowcaseSlide = ({ slide }) => (
  <div className="grid md:grid-cols-2 gap-12 h-full items-center">
    {/* Features List */}
    <div className="space-y-6">
      <div className="text-2xl text-white/90 font-medium mb-6">{slide.mainIdea}</div>
      {slide.features.map((feature, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5"
        >
          <div className="p-2 bg-accent/20 rounded-lg text-accent">
            {feature.icon ? <feature.icon size={20} /> : <Check size={20} />}
          </div>
          <span className="text-lg font-medium text-white">{feature.text || feature}</span>
        </motion.div>
      ))}
      {slide.note && <div className="text-accent font-bold mt-6 tracking-widest uppercase text-sm">{slide.note}</div>}
    </div>

    {/* Visual Mockup Area */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="hidden md:flex justify-center items-center relative h-full w-full"
    >
      <div className="transform scale-90 lg:scale-100 origin-center">
        <MobileAppMockup />
      </div>
    </motion.div>
  </div>
);

const GridSlide = ({ slide }) => (
  <div className="h-full flex flex-col overflow-y-auto">
    {slide.note && <div className="text-accent font-bold mb-6 tracking-widest uppercase text-sm">{slide.note}</div>}

    {slide.mainIdea && <div className="text-xl text-white/80 mb-8">{slide.mainIdea}</div>}

    <div className={`grid gap-6 ${slide.items.length > 4 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
      {slide.items.map((item, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="p-6 bg-white/5 border border-white/10 rounded-xl flex flex-col gap-3 hover:border-accent/40 hover:bg-white/10 transition-all group"
        >
          <div className="flex justify-between items-start">
            <div className="text-white/40 text-xs uppercase tracking-wider font-bold">
              {slide.type === 'powerups' ? 'Add-on' : 'Bonus'}
            </div>
            {item.icon && <item.icon className="text-accent opacity-50 group-hover:opacity-100 transition-opacity" size={20} />}
          </div>

          <div className="text-xl font-bold text-white font-heading">{item.title}</div>

          {item.desc && <div className="text-white/60 text-sm leading-relaxed">{item.desc}</div>}

          {item.value && (
            <div className="text-accent text-2xl font-mono font-bold mt-auto pt-4 border-t border-white/5">
              {item.value}
            </div>
          )}
        </motion.div>
      ))}
    </div>

    {slide.highlight && (
      <div className="mt-8 p-4 bg-accent/10 border border-accent/20 rounded-xl text-center text-accent font-bold">
        {slide.highlight}
      </div>
    )}
  </div>
);

// --- MAIN APP COMPONENT ---

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  const renderContent = () => {
    switch (slide.type) {
      case 'title': return <TitleSlide slide={slide} />;
      case 'list': return <ListSlide slide={slide} />;
      case 'comparison': return <ComparisonSlide slide={slide} />;
      case 'pricing': return <PricingSlide slide={slide} />;
      case 'guarantee': return <GuaranteeSlide slide={slide} />;
      case 'cost-calculator': return <CostCalculatorSlide slide={slide} />;
      case 'app-showcase': return <AppShowcaseSlide slide={slide} />;
      case 'grid-cards':
      case 'powerups':
        return <GridSlide slide={slide} />;
      case 'checklist': return <ListSlide slide={{ ...slide, points: slide.checklist }} />;
      case 'feature': return <GridSlide slide={{ ...slide, items: slide.features }} />;
      case 'quote': return (
        <div className="flex flex-col justify-center h-full max-w-5xl mx-auto text-center md:text-left">
          <div className="text-4xl md:text-7xl font-heading font-black text-white leading-tight mb-8">"{slide.quote}"</div>
          <div className="text-lg md:text-xl text-white/60 font-body leading-relaxed md:pl-8 md:border-l-4 border-accent">
            {slide.subtext}
          </div>
        </div>
      );
      default: return <ListSlide slide={slide} />;
    }
  };

  return (
    <div className="w-screen h-screen bg-bg text-text overflow-hidden selection:bg-accent selection:text-white flex flex-col relative">
      {/* Background Ambient */}
      <div className="absolute top-[-50%] left-[-20%] w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-[-50%] right-[-20%] w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[200px] pointer-events-none" />

      {/* Slide Content Area */}
      <div className="flex-1 w-full max-w-[1600px] mx-auto p-6 md:p-12 relative flex flex-col">
        {slide.type !== 'title' && (
          <Header
            title={slide.title}
            subtitle={slide.subtitle}
            slideIndex={currentSlide}
            totalSlides={slides.length}
          />
        )}

        <div className="flex-1 relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 w-full h-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="h-16 md:h-20 w-full border-t border-white/5 flex items-center justify-between px-6 md:px-16 z-50 bg-bg/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-xs font-mono text-white/50">
            {currentSlide + 1}
          </div>
          <span className="text-white/20 text-xs font-mono uppercase tracking-widest hidden md:inline-block">/ {slides.length}</span>
        </div>

        <div className="flex gap-4">
          <button onClick={prevSlide} disabled={currentSlide === 0} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-all">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center hover:bg-red-600 disabled:opacity-30 transition-all shadow-lg shadow-accent/20">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
