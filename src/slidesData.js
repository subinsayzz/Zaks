import {
    Dumbbell, TrendingUp, Layers, Users, Zap, AlertTriangle,
    CheckCircle2, XCircle, LayoutGrid, Smartphone, Puzzle,
    Handshake, ShieldCheck, Gift, Rocket, Lock, CreditCard, Flag,
    Monitor, MessageCircle, BarChart3, Globe, Mail, Calendar, FileText, Bot, Star, Share2, Database, Code, Sidebar, Megaphone, PhoneCall
} from 'lucide-react';

export const slides = [
    {
        id: 1,
        type: 'title',
        title: "GYMRUPT GROWTH PARTNERSHIP",
        subtitle: "PROPOSAL FOR ZAK'S GYM MASTER",
        tagline: "Big-Chain Tech Systems For Home-Grown Gym Brands.",
        points: [
            "One system",
            "One growth partner",
            "Built to scale"
        ],
        icon: Dumbbell
    },
    {
        id: 2,
        type: 'scale-trap',
        title: "THE SCALE TRAP",
        subtitle: "OLD WAY VS. NEW WAY",
        icon: TrendingUp
    },
    {
        id: 6,
        type: 'system-features',
        title: "WHAT GYMRUPT ACTUALLY IS",
        subtitle: "NOT JUST A TOOL",
        mainIdea: "Gymrupt is not another gym app. It is a gym operating system.",
        features: [
            { title: "Unified Omnichannel Inbox", desc: "One inbox for IG, FB, WhatsApp, SMS & Website" },
            { title: "AI Sales & Booking Agent", desc: "Qualifies leads & books appointments 24/7" },
            { title: "Smart Member Onboarding", desc: "Includes smart forms, surveys & digital waivers" },
            { title: "Smart Pipeline CRM", desc: "Visualise exactly where every lead is in the journey" },
            { title: "Reputation Management", desc: "Automated review requests to boost Google ranking" },
            { title: "Smart Website & Funnel Builder", desc: "High-converting pages that capture every visitor" },
            { title: "Relentless Follow-Up", desc: "Automated WhatsApp persistence that converts" },
            { title: "Franchise-Level Logic", desc: "Sophisticated retention systems on autopilot" },
            { title: "All-in-One Ads Manager", desc: "Launch & optimize high-performing ads directly from your dashboard" }
        ],
        quote: "A system that runs the gym, so you don't have to.",
        mantra: "You don’t manage Gymrupt. Gymrupt manages your growth.",
        icon: Zap
    },
    {
        id: 8,
        type: 'cost-calculator',
        title: "COST OF PATCHING TOOLS",
        subtitle: "THE FRAGMENTATION TAX",
        mainIdea: "The true cost of trying to build this yourself with separate tools.",
        items: [
            { name: "CRM & Pipelines", cost: "8000", icon: Database },
            { name: "Sales Funnels", cost: "24000", icon: Layers },
            { name: "Website Builder", cost: "2500", icon: Monitor },
            { name: "Surveys & Forms", cost: "4000", icon: FileText },
            { name: "Email Marketing", cost: "8000", icon: Mail },
            { name: "WhatsApp Automation", cost: "3800", icon: MessageCircle },
            { name: "Bookings", cost: "2500", icon: Calendar },
            { name: "Automations", cost: "14000", icon: Code },
            { name: "AI Agents", cost: "12000", icon: Bot },
            { name: "Reputation Mgmt", cost: "13000", icon: Star },
            { name: "Analytics", cost: "24000", icon: BarChart3 },
            { name: "Communities", cost: "7000", icon: Users },
            { name: "Generic Gym Tool", cost: "1750", icon: Smartphone },
            { name: "Doc Signing", cost: "7000", icon: FileText },
            { name: "Social Auto", cost: "10000", icon: Share2 }
        ],
        disclaimer: "*Estimated monthly costs for equivalent standalone tools.",
        conclusion: "With Gymrupt, you replace them all.",
        icon: Puzzle
    },
    {
        id: 7,
        type: 'interactive-tabs',
        title: "EXPERIENCE THE ECOSYSTEM",
        subtitle: "INTERACTIVE DEMOS",
        mainIdea: "Explore the core pillars of the Gymrupt partnership experience.",
        tabs: [
            {
                id: 'website',
                label: 'Smart Website',
                icon: Monitor,
                content: {
                    type: 'split-preview',
                    componentName: 'WebsiteMockup',
                    title: "CONVERSION ENGINE",
                    desc: "Most gym websites are just digital brochures. Ours is a 24/7 sales team designed to capture leads.",
                    features: [
                        "Smart Lead Tracking & AI Captures the lead 24/7",
                        "Ad Precision: Track every lead source (Meta/Google)",
                        "Instant Conversion: Auto-booking engine built-in"
                    ],
                    value: "Included (Bonus)"
                }
            },
            {
                id: 'app',
                label: 'Custom App',
                icon: Smartphone,
                content: {
                    type: 'split-preview',
                    componentName: 'MobileAppMockup',
                    title: "YOUR GYM IN POCKET",
                    desc: "A world-class mobile experience that keeps your members addicted to their progress.",
                    features: [
                        "Seamless Booking: Classes, PT, and events",
                        "Workout Tracking: Replace paper logs forever",
                        "Gamification: Leaderboards & achievement badges"
                    ],
                    value: "Custom Build"
                }
            },
            {
                id: 'tour',
                label: '360° Tour',
                icon: Globe,
                content: {
                    type: 'split-preview',
                    componentName: 'TourEmbed',
                    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1766911809186!6m8!1m7!1sCAoSK0FGMVFpcE5PVlUydHBVSUJFYWlGSmh2OE5PYW1iaDk5dl9fN3d6amw2bTQ.!2m2!1d28.52171372208289!2d77.21604902752712!3f10.71!4f-8.269999999999996!5f0.4000000000000002',
                    title: "IMMERSIVE TRUST",
                    desc: "Trust is built when they can see where they're going to train.",
                    features: [
                        "Google Maps Integration: Appear in search results",
                        "High Conversion: Increase bookings by 85%",
                        "2 Locations Included: Professionally shot"
                    ],
                    value: "Included (Bonus)"
                }
            }
        ],
        icon: Smartphone
    },
    {
        id: 9,
        type: 'growth-partner',
        title: "GYMRUPT GROWTH PARTNER",
        subtitle: "INSTALLATION & SUCCESS",
        icon: Handshake
    },
    {
        id: 11,
        type: 'grid-cards',
        title: "SYSTEM ESSENTIALS",
        subtitle: "EXCLUSIVE PARTNERSHIP BONUSES",
        items: [
            { title: "Smart Gym Website", value: "₹50,000", desc: "AI lead capture, smart pixel tracking & mobile-first design.", icon: Monitor },
            { title: "Google Profile Optimization", value: "₹15,000", desc: "Rank higher locally and get found by more members.", icon: Globe },
            { title: "Offer Design & Launch", value: "₹40,000", desc: "High-ticket offer structuring & launch strategy.", icon: Rocket },
            { title: "Custom Automations", value: "₹60,000", desc: "Zero-touch lead nurture, payment recovery & retention flows.", icon: Zap },
            { title: "Social Media Revenue Sprint", value: "₹1,20,000", desc: "Campaigns designed to recover your fee. (Ends on recovery, max 90 days).", icon: TrendingUp },
            { title: "Quarterly Growth Call", value: "PRICELESS", desc: "Deep-dive strategy reviews & roadmap planning sessions.", icon: BarChart3 }
        ],
        highlight: "TOTAL VALUE: ₹8,13,000+ (Included with Partnership)",
        limitedOffers: [
            {
                title: "Bonus: 360° Virtual Tour",
                value: "₹48,000",
                desc: "2 Locations (@ ₹24k ea). Google verified immersive views. (Subject to slot availability)",
                tag: "Limited Slot Offer"
            },
            {
                title: "Branded App powered by Gymrupt",
                value: "₹4.8 Lakhs",
                desc: "Custom UI & features. Investing in our shared vision for market dominance.",
                tag: "Limited Only for Zak's Gym Master"
            }
        ],
        note: "Critical infrastructure. Not optional bonuses.",
        icon: ShieldCheck
    },
    {
        id: 12,
        type: 'pricing',
        title: "GROWTH PARTNERSHIP FEES",
        subtitle: "INVESTMENT",
        price: "₹2,79,000",
        priceSuffix: "+ GST",
        features: [
            "Full System Setup",
            "All Integrations & Migrations",
            "No AMC (Annual Maintenance)",
            "No Yearly Renewals",
            "24/7 VIP support line",
            "Priority Access: Gymrupt Growth Summit"
        ],
        icon: CreditCard
    },
    {
        id: 13,
        type: 'guarantee',
        title: "THE GYMRUPT GUARANTEE",
        subtitle: "RISK-FREE PARTNERSHIP",
        rules: [
            {
                title: "Revenue Recovery Bridge",
                amount: "90 Days",
                desc: "We actively run launch campaigns & offer-based creatives until your fee is recovered."
            },
            {
                title: "Rule 2: Monthly Asset",
                amount: "3X ROI",
                desc: "No recurring fees until you make 3x PowerUp cost or ₹50k-₹1L extra monthly revenue."
            }
        ],
        finePrint: [
            "CONDITIONS & SCOPE:",
            "• Campaign runs for up to 90 days or until fee recovery.",
            "• Focused on offers, launches, and local visibility (not generic posting).",
            "• Gym must run designed offers & respond to leads within SLA."
        ],
        icon: ShieldCheck
    },
    {
        id: 14,
        type: 'powerups',
        title: "SCALING POWER-UPS",
        subtitle: "OPTIONAL ADD-ONS",
        mainIdea: "Advanced tools to scale communications and automation.",
        items: [
            { title: "WhatsApp Business API", desc: "Official API integration for scalable, compliant messaging.", icon: MessageCircle },
            { title: "AI Employees", desc: "Voice, chat, reviews, and content agents that work 24/7.", icon: Bot },
            { title: "Dedicated Email IP", desc: "Improves deliverability as volume increases.", icon: Mail },
            { title: "AI Voice Number Setup", desc: "For automated calls, follow-ups, and confirmations.", icon: Sidebar }
        ],
        highlight: "No PowerUp fees until Gymrupt is clearly an asset. Not an expense.",
        pricingDetails: {
            items: [
                { label: "WhatsApp Business API", price: "₹2,100/mo+" },
                { label: "AI Employees", price: "From ₹3,999/mo" },
                { label: "Dedicated Email IP", price: "As required" },
                { label: "AI Voice Number", price: "Contact Sales" }
            ],
            footer: "Exact costs depend on usage and scale. BILLING activates ONLY AFTER results."
        },
        icon: Rocket
    },
    {
        id: 15,
        type: 'addons',
        title: "OPTIONAL UPGRADES",
        subtitle: "SCALE FASTER",
        items: [
            { title: "Social Media Campaigns", price: "Included*", desc: "Included until fee recovery (max 90 days). Available as a paid add-on later.", icon: Megaphone },
            { title: "Speed-to-Lead Service", price: "Custom Quote", desc: "Dedicated team to call leads within 5 minutes.", icon: PhoneCall },
            { title: "Custom App Build", price: "Included", desc: "Exclusive custom developement only for Zak's Gym Master. Fully branded iOS & Android.", icon: Smartphone },
            { title: "360 Gym ERP Setup", price: "Custom Quote", desc: "End-to-end ERP implementation for multi-location scaling.", icon: Layers }
        ],
        icon: Puzzle
    },
    {
        id: 16,
        type: 'grid-cards',
        title: "FUTURE ECOSYSTEM ACCESS",
        subtitle: "FIRST MOVER ADVANTAGE",
        items: [
            { title: "Smart Vending Machines", value: "EARLY ACCESS", desc: "Both for high protein munchies & shakes - increases retention.", icon: Zap, tag: "Future Innovation" },
            { title: "On-Demand Merchandise", value: "EARLY ACCESS", desc: "Zero-inventory branding. Dropshipped to members.", icon: Smartphone, tag: "Future Innovation" },
            { title: "Smart Kiosk & Integrations", value: "EARLY ACCESS", desc: "Floor screens to assist workouts, display ads & act as POS.", icon: Layers, tag: "Future Innovation" },
            { title: "Workout Discovery Platform", value: "COMING SOON", desc: "Get discovered with our workout discovery platform.", icon: Globe, tag: "Future Innovation" }
        ],
        highlight: "Gymrupt partners get priority access to physical & retail innovations.",
        note: "Be the first to deploy next-gen gym tech.",
        icon: Rocket
    },
    {
        id: 17,
        type: 'quote',
        title: "WHY SCALE MATTERS",
        subtitle: "THE FRANCHISE MINDSET",
        quote: "People buy franchises for systems, not logos.",
        subtext: "Buyers want predictable outcomes and no experimentation. Strong home-grown brands win when they have systems.",
        icon: Flag
    },
    {
        id: 18,
        type: 'ecosystem-flow',
        title: "FUTURE-PROOF SYSTEM",
        subtitle: "BUILT TO INTEGRATE",
        mainIdea: "Gymrupt connects your physical gym floor to your business logic.",
        col1Title: "From The Gym Floor",
        col1: ["BMI & Body Comp", "Access Control", "Smart Vending", "POS & Retail"],
        col2Title: "To The Business Layer",
        col2: ["ERP Scaling", "Customer 360°", "Auto Accounting", "Deep Analytics"],
        process: "One connected flow: Data in → action out → everything recorded.",
        note: "We also design and scale ERP implementations when needed — from smart accounting to Customer 360°. Introduced only when the business is ready. One-time implementation.",
        closure: "You don’t outgrow Gymrupt. You build on it.",
        icon: Layers
    },
    {
        id: 19,
        type: 'final-cta',
        title: "FINAL THOUGHTS",
        subtitle: "BUILD TOMORROW",
        tagline: "Most tools help manage today. Gymrupt helps build tomorrow.",
        points: [
            "One System.",
            "One Growth Partner.",
            "Many Gyms."
        ],
        ctaText: "Sign for Partnership",
        ctaLink: "#",
        icon: CheckCircle2
    }
];
