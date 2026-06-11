import { Menu, X } from 'lucide-react';
// import { HiCalendarDateRange } from "react-icons/hi2";
import React, { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { name: 'Education', href: '#education' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'About Me', href: '#aboutme' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
    ];
    const scrollToSection = (href) => {
        setIsMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
        });

    }

    return (
        <header className="relative z-50 px-6 py-7">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-white text-3xl font-black cursor-pointer hover:text-primary transition-all duration-300 hover:scale-105 select-none">
                    PORTFOLIO <span className="text-primary hover:text-white transition-colors duration-300">.</span>
                </div>
                <nav className="hidden md:flex gap-10 items-center">
                    <ul className="flex gap-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <button onClick={() => scrollToSection(item.href)} className="text-gray-300 hover:text-primary transition-all duration-300 text-base font-medium cursor-pointer hover:scale-110 relative group">
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => scrollToSection('#contact')} className="bg-primary hover:bg-primary/80 hover:scale-105 active:scale-95 text-white px-5 py-2.5 rounded-lg font-semibold text-base transition-all duration-300 cursor-pointer shadow-md hover:shadow-primary/20">
                        Contact Me
                    </button>

                </nav>

                {/* Mobile Menu */}
                <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Menu size={32} />
                </button>
            </div>
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden" onClick={() => setIsMenuOpen(false)}>

                </div>
            )
            }
            <div className={`fixed top-0 right-0 h-full w-80 bg-[#111827] z-50 transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} p-8 flex flex-col`}>
                <button className="self-end text-white mb-10 " onClick={() => setIsMenuOpen(false)}>
                    <X size={32} />
                </button>
                <ul className="flex flex-col gap-6">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <button onClick={() => scrollToSection(item.href)} className="text-white hover:text-primary text-xl transition-colors cursor-pointer">
                                {item.name}

                            </button>
                        </li>
                    ))}
                    <li className="pt-6">
                        <button onClick={() => scrollToSection('#contact')} className="w-full bg-primary text-white py-4 rounded-xl text-lg font-bold cursor-pointer" >
                            Contact Me
                        </button>
                    </li>

                </ul>

            </div>
        </header>
    );
};
export default Header;