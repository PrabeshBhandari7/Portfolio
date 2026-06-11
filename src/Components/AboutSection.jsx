import React from 'react';
import about from '../assets/about.jpg';

const AboutSection = () => {

    return (
        <section className="text-white mt-20 relative overflow-hidden" id='aboutme'>
            <div className="max-w-7xl mx-auto px-4 xl:px-16 py-16 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left — Text & Stats */}
                    <div data-aos='fade-right'>
                        <h2 className='text-4xl md:text-5xl font-extrabold text-white mb-6'>
                            More <span className='text-primary'>About</span> Me
                        </h2>
                        <p className='text-gray-400 text-base lg:text-lg mb-6 leading-relaxed'>
                            I'm a passionate IT student currently pursuing a Bachelor of
                            Information Technology (BIT) at Itahari International College.
                        </p>
                        <p className='text-gray-400 text-base lg:text-lg mb-10 leading-relaxed'>
                            I love turning ideas into reality through clean, efficient code.
                            Always eager to learn new technologies and solve real-world problems.
                        </p>

                        {/* Stats */}
                        <div className='grid grid-cols-3 gap-4 max-w-xl'>
                            <div className='text-center rounded-2xl bg-[#111a3e] border border-[#1f1642] p-5 transition-all duration-300 hover:border-primary/50'>
                                <h3 className='text-primary font-bold text-2xl md:text-3xl'>+2</h3>
                                <p className='text-xs text-gray-400 uppercase tracking-wider mt-1'>Clients</p>
                            </div>

                            <div className='text-center rounded-2xl bg-[#111a3e] border border-[#1f1642] p-5 transition-all duration-300 hover:border-primary/50'>
                                <h3 className='text-primary font-bold text-2xl md:text-3xl'>+5</h3>
                                <p className='text-xs text-gray-400 uppercase tracking-wider mt-1'>Projects</p>
                            </div>

                            <div className='text-center rounded-2xl bg-[#111a3e] border border-[#1f1642] p-5 transition-all duration-300 hover:border-primary/50'>
                                <h3 className='text-primary font-bold text-2xl md:text-3xl'>+2</h3>
                                <p className='text-xs text-gray-400 uppercase tracking-wider mt-1'>Years</p>
                            </div>
                        </div>
                    </div>

                    {/* Right — Circular Image */}
                    <div className='mt-16 md:mt-0 flex justify-center lg:justify-end relative' data-aos='fade-left'>
                        <div className='relative w-64 h-64 md:w-96 md:h-96'>
                            {/* Offset border ring */}
                            <div className='absolute inset-0 z-0 rounded-full shadow-lg border border-primary translate-x-4 translate-y-4'></div>
                            {/* Image circle */}
                            <div className='relative z-10 w-full h-full bg-[#111a3e] rounded-full overflow-hidden border border-[#1f1641]'>
                                <img
                                    src={about}
                                    alt="About"
                                    className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default AboutSection;