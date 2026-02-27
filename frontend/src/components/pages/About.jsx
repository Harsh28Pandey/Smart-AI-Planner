import React from "react";
import { Brain, Target, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="relative min-h-screen bg-[#1C1C1E] text-white overflow-hidden pt-40 px-6">

            {/* Background Gradient Blobs */}
            <div className="absolute -top-30 -left-30 w-105 h-105 bg-purple-600 rounded-full blur-[160px] opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-30 -right-30 w-105 h-105 bg-orange-500 rounded-full blur-[160px] opacity-30 animate-pulse"></div>
            <div className="absolute top-[40%] left-[50%] w-[320px] h-80 bg-blue-500 rounded-full blur-[160px] opacity-20 animate-pulse"></div>

            {/* Floating Stars */}
            <div className="absolute top-10 left-1/3 w-2 h-2 rounded-full bg-white opacity-70 animate-ping-slow"></div>
            <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full bg-white opacity-50 animate-ping-slower"></div>

            <div className="relative z-10 max-w-6xl mx-auto text-center">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-extrabold mb-8 bg-linear-to-r from-yellow-400 via-orange-500 to-purple-500 bg-clip-text text-transparent drop-shadow-xl">
                    About AI Study Planner
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-gray-400 text-xl max-w-3xl mx-auto mb-20 leading-relaxed">
                    We are building a smarter way for students to plan, focus, and succeed
                    in an increasingly distracted digital world.
                </motion.p>

                {/* Main Glass Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:border-purple-500 transition duration-500">

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                        AI Study Planner is a next-generation productivity ecosystem
                        designed to transform how students manage their academic life.
                        It merges structured task planning with intelligent AI-driven
                        recommendations to boost consistency and performance.
                    </p>

                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        By analyzing study behavior and tracking progress patterns,
                        our platform delivers personalized insights that improve focus,
                        reduce procrastination, and enhance long-term retention.
                    </p>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        Crafted with modern web technologies and a futuristic design philosophy,
                        the platform ensures a seamless, distraction-free, and visually immersive experience.
                    </p>
                </motion.div>

                {/* Mission Cards */}
                <div className="grid md:grid-cols-3 gap-10 mt-24">
                    {[
                        {
                            icon: <Brain size={26} />,
                            title: "Intelligent Planning",
                            gradient: "from-orange-400 to-purple-400",
                            desc: "AI-powered insights that adapt to your learning habits and suggest optimized study strategies."
                        },
                        {
                            icon: <Target size={26} />,
                            title: "Clear Goals",
                            gradient: "from-yellow-400 to-orange-400",
                            desc: "Structured milestone tracking that keeps you accountable and focused on measurable growth."
                        },
                        {
                            icon: <Sparkles size={26} />,
                            title: "Modern Experience",
                            gradient: "from-purple-400 to-blue-400",
                            desc: "A futuristic and immersive interface designed to eliminate distractions and maximize productivity."
                        }
                    ].map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:-translate-y-4 hover:border-purple-500 transition duration-500 cursor-pointer"
                        >
                            <div className={`w-14 h-14 mx-auto mb-6 rounded-2xl bg-linear-to-r ${card.gradient} flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition duration-300`}>
                                {card.icon}
                            </div>
                            <h3 className={`text-2xl font-semibold mb-4 bg-linear-to-r ${card.gradient} bg-clip-text text-transparent`}>
                                {card.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Call To Action */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-28 mb-32"
                >
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
                        Ready to Upgrade Your Study Workflow?
                    </h3>
                    <button className="px-12 py-4 rounded-xl bg-linear-to-r from-orange-500 via-purple-500 to-blue-500 hover:scale-110 hover:shadow-2xl transition duration-300 shadow-xl font-semibold cursor-pointer">
                        Get Started Today
                    </button>
                </motion.div>

            </div>
        </div>
    );
};

export default About;