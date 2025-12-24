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
        type: 'comparison',
        title: "WHY GROWTH STARTS FEELING HEAVY",
        subtitle: "THE SCALE PROBLEM",
        mainIdea: "Running one gym is manageable. Scaling is where systems start breaking.",
        col1Title: "In Most Independent Gyms",
        col1: [
            "Trainers coach clients & handle enquiries",
            "Peak hours mean phones go unanswered",
            "Over 70% of calls drop when busy",
            "That’s not bad staff. That’s lost revenue."
        ],
        col2Title: "As Teams Grow",
        col2: [
            "Owners get pulled back into firefighting",
            "Consistency drops instantly",
            "Growth depends on people, not processes",
            "Most gyms don’t fail. They plateau."
        ],
        conclusion: `This is a SYSTEM problem — not a motivation problem.
        
        You might think the answer is “better software.”
        But as we’ll see, most tools only measure the problem —
        fixing it still depends on people.`,
        icon: TrendingUp
    },
    {
        id: 3,
        type: 'comparison',
        title: "WHY SOFTWARE DOESN'T FIX IT",
        subtitle: "ACTIVITY VS ACTION",
        mainIdea: "Most gym software is designed to show activity — not to create action.",
        col1Title: "What most tools show (Passive)",
        col1: ["CRM data", "Billing records", "Attendance logs", "Reports & dashboards"],
        col1Footer: "Useful for visibility.\nUseless without follow-through.",
        col2Title: "What’s missing (Active)",
        col2: [
            "Smart Lead Capture (Social DMs, WhatsApp, Website)",
            "Clear staff guidance",
            "Consistent sales process (No guesswork)",
            "Proper nurture system",
            "Proper onboarding system (For maximum retention)",
            "Automatic follow-ups"
        ],
        conclusion: `When software doesn’t act, people fill the gap.
        
        Manual effort fills the gap.
        Manual effort doesn’t scale.`,
        icon: Layers
    },
    {
        id: 4,
        type: 'list',
        title: "THE REAL BOTTLENECK",
        subtitle: "STAFF & CONSISTENCY",
        mainIdea: "When software doesn’t act, people become the system. And that’s where growth slows.",
        points: [
            "Sales & Service depend on 'good staff', not systems",
            "Performance drops overnight when staff leave",
            "Knowledge lives in people, not processes",
            "Results: Inconsistent, hard to repeat, impossible to scale"
        ],
        footer: "Chains don’t scale people. They scale systems.",
        icon: Users
    },
    {
        id: 5,
        type: 'list',
        title: "WHAT BIG CHAINS DO DIFFERENTLY",
        subtitle: "SYSTEMS OVER SCALE",
        mainIdea: "Big chains don’t rely on exceptional people. They rely on exceptionally clear systems.",
        points: [
            "Standardised onboarding & sales flows (Every time)",
            "Automated follow-ups & retention logic (Nothing slips)",
            "Unified reporting — one version of truth",
            "People can change. Performance doesn’t."
        ],
        footer: "The system runs the gym. People run the system.",
        icon: LayoutGrid
    },
    {
        id: 6,
        type: 'feature',
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
            { title: "Built to Scale", desc: "A system that runs the gym, so you don't have to" }
        ],
        mantra: "You don’t manage Gymrupt. Gymrupt manages your growth.",
        icon: Zap
    },
    {
        id: 7,
        type: 'app-showcase',
        title: "YOUR OWN BRANDED GYM APP",
        subtitle: "BUILT FOR YOUR GYM. POWERED BY GYMRUPT.",
        mainIdea: "This is not a generic fitness app. It’s a custom-built extension of your gym.",
        features: [
            { icon: Zap, title: "Fully branded", desc: "Your logo, colours, and identity — across all locations" },
            { icon: Smartphone, title: "Member self-service", desc: "Memberships, attendance, payments, programs — without front-desk dependency" },
            { icon: MessageCircle, title: "Smart communication", desc: "Updates, reminders, follow-ups — delivered automatically" },
            { icon: Layers, title: "Deep Gymrupt integration", desc: "Sales, onboarding, retention, and payments stay in sync" },
            { icon: Users, title: "Zero per-user fees", desc: "No penalties as your member base grows" },
            { icon: Lock, title: "Centralised control", desc: "One app. One system. Used across every location" }
        ],
        note: "Premium Add-on: Custom app development is available as an exclusive additional service.",
        icon: Smartphone
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
        id: 9,
        type: 'list',
        title: "INSTALLATION, NOT SUPPORT",
        subtitle: "GYMRUPT AS A GROWTH PARTNER",
        mainIdea: "We don’t sell software. We install the system.",
        points: [
            "We design your core money offer",
            "We build smart onboarding journeys",
            "We create automation workflows that actually run",
            "We install retention logic before members drop",
            "We reduce owner dependency over time"
        ],
        highlight: "This isn’t tech support. This is system ownership.",
        footer: "You don’t figure it out. We build it with you.",
        icon: Handshake
    },
    {
        id: 10,
        type: 'checklist',
        title: "DEFINITION OF SUCCESS",
        subtitle: "WHAT A “WORKING SYSTEM” LOOKS LIKE",
        mainIdea: "We don’t keep this vague. A system is considered working when:",
        checklist: [
            "One paid offer live with 10+ payments in 30 days",
            "Leads → follow-ups → payments run without owner chasing",
            "Staff follows clear processes",
            "Performance survives staff changes"
        ],
        highlight: "At this point: The system is predictable. The results are repeatable. The setup is copy-ready.",
        footer: "If it works once, it’s luck. If it works without you, it’s a system.",
        icon: CheckCircle2
    },
    {
        id: 11,
        type: 'grid-cards',
        title: "SYSTEM ESSENTIALS",
        subtitle: "INCLUDED TO ENSURE IT WORKS",
        items: [
            { title: "Smart Gym Website", value: "₹50,000", desc: "AI lead capture, smart pixel tracking & mobile-first design.", icon: Monitor },
            { title: "Google Profile Optimization", value: "₹15,000", desc: "Rank higher locally and get found by more members.", icon: Globe },
            { title: "Offer Design & Launch", value: "₹40,000", desc: "High-ticket offer structuring, ad creatives & launch strategy.", icon: Rocket },
            { title: "Custom Automations", value: "₹60,000", desc: "Zero-touch lead nurture, payment recovery & retention flows.", icon: Zap },
            { title: "Digital SOP Playbooks", value: "PRICELESS", desc: "Sales & retention workflows documented. Custom-built after deep business analysis.", icon: FileText },
            { title: "Quarterly Growth Call", value: "₹25,000/qtr", desc: "Deep-dive strategy reviews & roadmap planning sessions.", icon: BarChart3 }
        ],
        highlight: "TOTAL VALUE: ₹2,58,000+ (Included with Partnership)",
        limitedOffer: {
            title: "Bonus: 360° Virtual Tour",
            value: "₹48,000",
            desc: "2 Locations (@ ₹24k ea). Google verified immersive views. (Subject to slot availability)",
            tag: "Limited Slot Offer"
        },
        note: "Critical infrastructure. Not optional bonuses.",
        icon: ShieldCheck
    },
    {
        id: 12,
        type: 'pricing',
        title: "GROWTH PARTNERSHIP FEES",
        subtitle: "INVESTMENT",
        price: "₹2,10,000",
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
                title: "Rule 1: Recovery First",
                amount: "₹2,10,000",
                desc: "Recovered via memberships, PT, or challenges before we discuss further costs."
            },
            {
                title: "Rule 2: Monthly Asset",
                amount: "3X ROI",
                desc: "No recurring fees until you make 3x PowerUp cost or ₹75k-₹1L extra monthly revenue."
            }
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
            { title: "Meta Ads Management", price: "₹25k - ₹40k / mo", desc: "Complete 'Done-For-You' ad strategy, creative & optimization.", icon: Megaphone },
            { title: "Speed-to-Lead Service", price: "Custom Quote", desc: "Dedicated team to call leads within 5 minutes.", icon: PhoneCall },
            { title: "Custom App Build", price: "Custom Quote", desc: "Fully branded iOS & Android app for your gym.", icon: Smartphone },
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
            { title: "Smart Vending Machines", value: "EARLY ACCESS", desc: "Both for high protein munchies & shakes - increases retention.", icon: Zap },
            { title: "On-Demand Merchandise", value: "EARLY ACCESS", desc: "Zero-inventory branding. Dropshipped to members.", icon: Smartphone },
            { title: "Vertical Product Integrations", value: "EARLY ACCESS", desc: "Unified ecosystem for hardware, access, and retail.", icon: Layers },
            { title: "Workout Discovery Platform", value: "COMING SOON", desc: "Get discovered with our workout discovery platform.", icon: Globe }
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
