import { Download } from "lucide-react";
import React from "react";
import Hero from '../assets/Hero.JPG';
import PrabeshCV from '../assets/PrabeshCV.pdf';

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center overflow-hidden" data-aos="zoom-in-up">

            {/* Background glow blobs */}
            <div className="absolute top-0 left-0 w-2/3 h-64 bg-gradient-to-br from-[#0c7fac] to-transparent blur-3xl opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-64 bg-gradient-to-tl from-[#0c64ac] to-transparent blur-3xl opacity-20 pointer-events-none"></div>

            <div className="mx-auto relative w-full px-5 sm:px-8 md:px-12 lg:px-16 max-w-7xl py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left — Text Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                        <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight flex items-center gap-2 flex-wrap justify-center lg:justify-start">
                            <span>Hi,</span>
                            <span className="typing-animation">
                                I'm{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                                    Prabesh
                                </span>
                            </span>
                            <span className="animate-wave">👋</span>
                        </h1>

                        <p className="text-gray-300 pt-6 max-w-xl text-base md:text-lg leading-relaxed">
                            I am an IT student with a passion for building innovative web applications.
                        </p>

                        <div className="flex items-center gap-4 pt-9 flex-col sm:flex-row w-full sm:w-auto">
                            {/* Hire Me */}
                            <button 
                                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                className="bg-cyan-500 hover:bg-cyan-400 hover:scale-105 active:scale-95 transition-all duration-300 text-white font-semibold px-8 py-3 rounded-full w-full sm:w-auto cursor-pointer shadow-lg hover:shadow-cyan-500/20"
                            >
                                Hire Me
                            </button>

                            {/* Download Resume */}
                            <a
                                href={PrabeshCV}
                                download="PrabeshCV.pdf"
                                className="border border-cyan-400 hover:bg-cyan-400/10 hover:scale-105 active:scale-95 transition-all duration-300 text-white px-8 py-3 rounded-full w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-cyan-400/10"
                            >
                                <Download size={18} className="text-cyan-400 animate-bounce" />
                                <span>Download Resume</span>
                            </a>
                        </div>
                    </div>

                    {/* Right — Hero Image */}
                    <div className="flex items-center justify-center order-1 lg:order-2">
                        <div className="relative">
                            {/* Cyan glow behind image */}
                            <div className="absolute inset-0 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-cyan-500 blur-2xl opacity-20 scale-110"></div>

                            {/* Image container with blob shape, hover properties, and animation */}
                            <div className="relative border-2 border-cyan-500 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden shadow-2xl shadow-cyan-500/20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] transition-all duration-500 hover:scale-105 hover:border-cyan-400 hover:shadow-cyan-400/40 group">
                                <img
                                    src={Hero}
                                    alt="Prabesh - Hero"
                                    className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default HeroSection;
