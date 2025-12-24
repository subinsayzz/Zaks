import {
    Dumbbell, TrendingUp, Layers, Users, Zap, AlertTriangle,
    CheckCircle2, XCircle, LayoutGrid, Smartphone, Puzzle,
    Handshake, ShieldCheck, Gift, Rocket, Lock, CreditCard, Flag,
    Monitor, MessageCircle, BarChart3, Globe
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
        col2: ["Proper member onboarding", "Clear staff guidance", "Automatic follow-ups", "Early retention intervention", "Systems built to scale"],
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
            "Every trainer works differently",
            "Sales depend on “good staff”",
            "Training new hires takes weeks",
            "One resignation drops performance overnight"
        ],
        footer: "Chains don’t scale people. They scale systems.",
        icon: Users
    },
    {
        id: 5,
        type: 'list',
        title: "WHAT BIG CHAINS DO DIFFERENTLY",
        subtitle: "SYSTEMS OVER SCALE",
        mainIdea: "Chains rely on systems, not exceptional individuals.",
        points: [
            "Standardized Onboarding",
            "Automated Follow-ups",
            "Scripted Sales Flows",
            "Logic-Based Retention",
            "Unified Reporting"
        ],
        highlight: "Replace 'talent dependency' with 'process consistency'.",
        icon: LayoutGrid
    },
    {
        id: 6,
        type: 'feature',
        title: "WHAT GYMRUPT ACTUALLY IS",
        subtitle: "NOT JUST A TOOL",
        mainIdea: "Gymrupt is a gym OPERATING SYSTEM.",
        features: [
            { title: "Smart Onboarding", desc: "Digital first impressions" },
            { title: "Staff Guidance", desc: "Step-by-step SOPS" },
            { title: "Connected Logic", desc: "Sales, retention & payments linked" },
            { title: "Automation", desc: "Works when humans don't" },
            { title: "Scalable", desc: "Reuse the system as you grow" }
        ],
        mantra: "Build once. Copy many times.",
        icon: Zap
    },
    {
        id: 7,
        type: 'app-showcase',
        title: "ZAK'S GYM MASTER APP",
        subtitle: "YOUR BRAND, OUR TECH",
        mainIdea: "A fully branded gym app powered by Gymrupt.",
        features: [
            { icon: Zap, text: "Full Custom Branding" },
            { icon: Users, text: "Zero Per-User Fees" },
            { icon: Layers, text: "Deep Integration" },
            { icon: Smartphone, text: "Member Self-Service" },
            { icon: Lock, text: "Centralized Control" }
        ],
        note: "Optional, but powerful for scale.",
        icon: Smartphone
    },
    {
        id: 8,
        type: 'cost-calculator',
        title: "COST OF PATCHING TOOLS",
        subtitle: "THE FRAGMENTATION TAX",
        mainIdea: "Tools don't talk to each other. You become the connector.",
        items: [
            { name: "Lead Capture", cost: "₹5,000/mo" },
            { name: "Website Hosting", cost: "₹2,000/mo" },
            { name: "WhatsApp/SMS", cost: "₹3,000/mo" },
            { name: "Billing Software", cost: "₹4,000/mo" },
            { name: "Review Mgmt", cost: "₹3,500/mo" },
            { name: "Analytics Tools", cost: "₹5,500/mo" },
            { name: "Staff Time (Admin)", cost: "₹15,000/mo" }
        ],
        disclaimer: "Cost varies by users & locations. But the fragmentation remains.",
        conclusion: "Gymrupt replaces the patchwork with one connected system.",
        icon: Puzzle
    },
    {
        id: 9,
        type: 'list',
        title: "GYMRUPT AS A PARTNER",
        subtitle: "INSTALLATION, NOT SUPPORT",
        mainIdea: "We install the system. We don't just sell software.",
        points: [
            "We design the core money offer",
            "We build onboarding journeys",
            "We create automation workflows",
            "We install retention logic",
            "We reduce owner dependency"
        ],
        icon: Handshake
    },
    {
        id: 10,
        type: 'checklist',
        title: "WHAT IS A 'WORKING SYSTEM'?",
        subtitle: "DEFINITION OF SUCCESS",
        checklist: [
            "One paid offer live",
            "Minimum 10 paid conversions (within 30 days)",
            "Leads-to-payment flow runs automatically",
            "Staff follows processes",
            "Performance survives staff changes"
        ],
        icon: CheckCircle2
    },
    {
        id: 11,
        type: 'grid-cards',
        title: "INCLUDED BONUSES",
        subtitle: "EVERYTHING YOU NEED",
        items: [
            { title: "Smart Gym Website", value: "₹50,000", desc: "AI lead capture, smart pixel tracking & mobile-first design.", icon: Monitor },
            { title: "360° Virtual Tour", value: "₹48,000", desc: "2 Locations (@ ₹24k ea). Google verified immersive views.", icon: Globe },
            { title: "Offer Design & Launch", value: "₹40,000", desc: "High-ticket offer structuring, ad creatives & launch strategy.", icon: Rocket },
            { title: "Custom Automations", value: "₹60,000", desc: "Zero-touch lead nurture, payment recovery & retention flows.", icon: Zap },
            { title: "Quarterly Growth Call", value: "₹25,000/qtr", desc: "Deep-dive strategy reviews & roadmap planning sessions.", icon: BarChart3 }
        ],
        note: "INCLUDED. NOT UPSELLS.",
        icon: Gift
    },
    {
        id: 12,
        type: 'powerups',
        title: "POWERUPS",
        subtitle: "OPTIONAL ADD-ONS",
        mainIdea: "Activated only when the system proves value.",
        items: [
            { title: "WhatsApp Business API", desc: "Official API integration for scale" },
            { title: "AI Employees", desc: "Voice, Chat, Reviews, Content Agents" }
        ],
        highlight: "No fees until Gymrupt is an asset.",
        icon: Rocket
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
        type: 'quote',
        title: "WHY SCALE MATTERS",
        subtitle: "THE FRANCHISE MINDSET",
        quote: "People buy franchises for systems, not logos.",
        subtext: "Buyers want predictable outcomes and no experimentation. Strong home-grown brands win when they have systems.",
        icon: Flag
    },
    {
        id: 15,
        type: 'list',
        title: "GAME CHANGER",
        subtitle: "WHY GYMRUPT?",
        mainIdea: "Easier scaling. Easier franchising. Less dependency.",
        points: [
            "Chain-level systems for independent gyms",
            "Centralized technology",
            "Proven sales & retention workflows",
            "Staff-ready, copyable processes"
        ],
        icon: AlertTriangle
    },
    {
        id: 16,
        type: 'list',
        title: "PARTNER-ONLY ACCESS",
        subtitle: "FUTURE ROADMAP",
        mainIdea: "Partners influence the roadmap and get early access.",
        points: [
            "Self-service Kiosks",
            "In-gym Merchandise Sales",
            "Advanced Retention Engines",
            "New Revenue Verticals"
        ],
        icon: Lock
    },
    {
        id: 17,
        type: 'comparison',
        title: "FUTURE-PROOF SYSTEM",
        subtitle: "BUILT TO INTEGRATE",
        mainIdea: "Gymrupt connects your physical gym floor to your business logic.",
        col1Title: "From The Gym Floor",
        col1: ["BMI & Body Comp", "Access Control", "Smart Vending", "POS & Retail"],
        col2Title: "To The Business Layer",
        col2: ["ERP Scaling", "Customer 360°", "Auto Accounting", "Deep Analytics"],
        conclusion: `One connected flow: Data in → action out → everything recorded.
        
        We also design and scale ERP implementations when needed — from smart accounting to Customer 360°.
        Introduced only when the business is ready. One-time implementation.
        
        You don’t outgrow Gymrupt. You build on it.`,
        icon: Layers
    },
    {
        id: 18,
        type: 'pricing',
        title: "PARTNERSHIP PRICING",
        subtitle: "ONE-TIME INVESTMENT",
        price: "₹2,10,000",
        features: [
            "Full System Setup",
            "All Integrations & Migrations",
            "No AMC (Annual Maintenance)",
            "No Yearly Renewals",
            "Full System Ownership",
            "Franchise License: Per Location Basis"
        ],
        icon: CreditCard
    },
    {
        id: 19,
        type: 'title',
        title: "FINAL THOUGHTS",
        subtitle: "BUILD TOMORROW",
        tagline: "Most tools help manage today. Gymrupt helps build tomorrow.",
        points: [
            "One System.",
            "One Growth Partner.",
            "Many Gyms."
        ],
        icon: CheckCircle2
    }
];
