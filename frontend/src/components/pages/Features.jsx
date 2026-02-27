import React from "react";
import { Brain, CheckSquare, BarChart3, Focus, Target, LayoutDashboard } from "lucide-react";

const Features = () => {
    const features = [
        {
            title: "AI Suggestions",
            desc: "Our intelligent engine analyzes your study behavior and generates personalized recommendations to maximize efficiency and retention.",
            icon: <Brain size={30} />,
        },
        {
            title: "Smart Task Manager",
            desc: "Plan, prioritize, and execute daily academic tasks with structured workflow and intelligent reminders.",
            icon: <CheckSquare size={30} />,
        },
        {
            title: "Advanced Analytics",
            desc: "Track performance metrics and discover insights that help you continuously improve.",
            icon: <BarChart3 size={30} />,
        },
        {
            title: "Focus Mode",
            desc: "Activate distraction-free deep work sessions designed for peak productivity.",
            icon: <Focus size={30} />,
        },
        {
            title: "Goal Tracking",
            desc: "Set meaningful goals and monitor progress with measurable milestones.",
            icon: <Target size={30} />,
        },
        {
            title: "Live Dashboard",
            desc: "Access real-time updates of your study sessions and weekly progress.",
            icon: <LayoutDashboard size={30} />,
        },
    ];

    return (
        <div className="relative min-h-screen bg-[#1C1C1E] text-white overflow-hidden pt-44 px-6">

            {/* Background Gradient Blobs */}
            <div className="absolute -top-40 -left-40 w-100 h-100 bg-purple-600 rounded-full blur-[140px] opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-40 -right-40 w-100 h-100 bg-orange-500 rounded-full blur-[140px] opacity-30 animate-pulse"></div>
            <div className="absolute top-[40%] left-[50%] w-75 h-75 bg-blue-500 rounded-full blur-[140px] opacity-20 animate-pulse"></div>


            {/* Background Glow */}
            <div className="absolute -top-30 -left-30 w-105 h-105 bg-purple-600 rounded-full blur-[180px] opacity-25"></div>
            <div className="absolute -bottom-30 -right-30 w-105 h-105 bg-orange-500 rounded-full blur-[180px] opacity-25"></div>

            <div className="relative z-10 max-w-6xl mx-auto text-center">

                {/* Hero Heading */}
                <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8 bg-linear-to-r from-yellow-400 via-orange-500 to-purple-500 bg-clip-text text-transparent">
                    Built to Elevate Your Study Experience
                </h2>

                <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed mb-24">
                    AI Study Planner is an intelligent productivity system crafted for ambitious learners
                    who want clarity, structure, and measurable academic growth.
                </p>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-14 mb-36">

                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="group p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:-translate-y-4 hover:border-purple-400 transition-all duration-500 cursor-pointer"
                        >
                            <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-linear-to-r from-orange-500 to-purple-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition duration-500">
                                {feature.icon}
                            </div>

                            <h3 className="text-2xl font-semibold mb-4 text-white">
                                {feature.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed text-lg">
                                {feature.desc}
                            </p>
                        </div>
                    ))}

                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-14 mb-36">

                    {[
                        { number: "10K+", label: "Active Learners" },
                        { number: "500K+", label: "Tasks Completed" },
                        { number: "95%", label: "Productivity Boost" },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="p-14 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition duration-500 cursor-pointer"
                        >
                            <h3 className="text-6xl font-extrabold bg-linear-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">
                                {stat.number}
                            </h3>
                            <p className="text-gray-400 mt-4 text-xl">{stat.label}</p>
                        </div>
                    ))}

                </div>

                {/* Testimonials */}
                <div className="mb-36">
                    <h3 className="text-4xl font-bold mb-14 text-white">
                        Loved by Students
                    </h3>

                    <div className="grid md:grid-cols-2 gap-14">
                        {[
                            { text: "This app completely changed how I prepare for exams.", name: "Aarav Sharma" },
                            { text: "The AI suggestions improved my consistency massively.", name: "Riya Verma" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-400 transition cursor-pointer"
                            >
                                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                    “{item.text}”
                                </p>
                                <p className="font-semibold text-white text-lg">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="p-20 rounded-3xl bg-linear-to-r from-purple-600/20 to-orange-500/20 backdrop-blur-xl border border-white/10 mb-40">
                    <h3 className="text-4xl font-bold mb-6 text-white">
                        Take Control of Your Academic Future
                    </h3>
                    <p className="text-gray-400 mb-10 text-xl max-w-xl mx-auto">
                        Start using AI-powered planning tools to unlock consistent performance.
                    </p>
                    <button className="px-14 py-5 rounded-xl bg-linear-to-r from-orange-500 via-purple-500 to-blue-500 hover:scale-110 transition duration-300 shadow-xl font-semibold text-lg cursor-pointer">
                        Get Started Free
                    </button>
                </div>

            </div>

            {/* CLEAN MINIMAL FOOTER */}
            <footer className="border-t border-white/10 py-10 text-center text-gray-500 text-sm">
                <p className="hover:text-gray-300 transition cursor-pointer">
                    © 2026 AI Study Planner • Designed for Modern Learners
                </p>
            </footer>

        </div>
    );
};

export default Features;