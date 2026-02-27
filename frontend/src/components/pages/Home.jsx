import React, { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        const elements = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("opacity-100", "translate-y-0");
                    }
                });
            },
            { threshold: 0.2 }
        );

        elements.forEach((el) => observer.observe(el));
    }, []);

    return (
        <div className="relative min-h-screen bg-[#1C1C1E] text-white overflow-hidden pt-40">

            {/* ========== Animated Background Blobs ========== */}
            <div className="absolute -top-25 -left-25 w-100 h-100 bg-purple-600 rounded-full blur-[140px] opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-30 -right-25 w-100 h-100 bg-orange-500 rounded-full blur-[140px] opacity-30 animate-pulse"></div>
            <div className="absolute top-[40%] left-[50%] w-75 h-75 bg-blue-500 rounded-full blur-[140px] opacity-20 animate-pulse"></div>

            {/* ================= HERO ================= */}
            <section className="pb-32 text-center px-6 relative z-10">
                <div className="max-w-4xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-1000">

                    <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                        Plan Smarter.
                        <br />
                        <span className="bg-linear-to-r from-yellow-400 via-orange-500 to-purple-500 bg-clip-text text-transparent">
                            Study Better.
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                        AI powered productivity system designed to transform how students plan,
                        execute, and succeed.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <button className="px-10 py-4 rounded-2xl bg-linear-to-r from-orange-500 via-purple-500 to-blue-500 
                               hover:scale-110 transition duration-300 shadow-xl cursor-pointer">
                            Start Planning
                        </button>

                        <button className="px-10 py-4 rounded-2xl border border-white/20 backdrop-blur-lg 
                               hover:bg-white/10 transition duration-300 cursor-pointer">
                            Watch Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* ================= FEATURES ================= */}
            <section className="py-32 relative z-10">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    <h3 className="text-4xl font-bold mb-20 reveal opacity-0 translate-y-10 transition-all duration-1000">
                        Powerful Features
                    </h3>

                    <div className="grid md:grid-cols-3 gap-12">

                        {["AI Insights", "Smart Scheduling", "Progress Tracking"].map((title, i) => (
                            <div
                                key={i}
                                className="p-10 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10
                           hover:-translate-y-3 hover:shadow-2xl transition-all duration-500
                           reveal opacity-0 translate-y-10 cursor-pointer"
                            >
                                <h4 className="text-2xl font-semibold mb-4 bg-linear-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
                                    {title}
                                </h4>
                                <p className="text-gray-400">
                                    Experience next-gen productivity tools designed to elevate your performance.
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;