import React from "react";
import edu from '../assets/edu.jpg'
import { GraduationCap, Calendar, CheckCircle } from "lucide-react";

const Education = () => {
    const educationData = [
        {
            id: 1,
            degree: 'Higher Secondary Level',
            institute: 'Sukuna Secondary School',
            duration: "2022-2024",
            details: " Completed Higher Secondary Level with focus on science stream."

        },
        {
            id: 2,
            degree: 'Bachelor of Information Technology',
            institute: 'Ithari International College',
            duration: "2024-2027",
            details: " Currently pursuing 3rd year of BIT with focus on software development, data structures, and algorithms. Active participant in hackathons and coding challenges."

        },
    ]
    return (
        <section className="text-white py-20 overflow-hidden" id='education'>
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
                <div className="mb-16">
                    <p className="text-primary text-sm uppercase tracking-widest mb-2 font-semibold ">
                        Learning Path
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">Education</h2>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-5/12 flex justify-center lg:justify-start" data-aos="fade-right">
                        <div className="relative">

                            <div className="absolute h-full w-full z-0 p-2 translate-x-4 translate-y-4 rounded-2xl shadow-lg border border-cyan-500">
                            </div>

                            <div className="relative z-10 bg-[#111a3e] rounded-2xl overflow-hidden border border-[#1f1641]">
                                <img src={edu} alt="Education" className="w-64 h-64 md:w-96 md:h-[480px] object-cover transform transition-transform duration-500 hover:scale-110" />

                            </div>
                            <div className="absolute -top-4 -left-4 bg-primary/20 w-16 h-16 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                    <div className="w-full lg:w-7/12 space-y-6" data-aos='fade-left'>
                        {educationData.map((edu) => (
                            <div key={edu.id}
                                className="group relative p-6 rounded-2xl bg-[#111a3e] border border-transparent hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] shadow-md hover:shadow-primary/10">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                                        <div className="p-2 bg-[#050816] rounded-lg border border-primary/20 group-hover:border-primary transition-colors w-fit">
                                            <GraduationCap className='text-primary' size={24} />
                                        </div>
                                        <div>
                                             <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-gray-400 text-sm">
                                                {edu.institute}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-medium bg-[#050816] px-3 py-1 rounded-full border border-gray-700 w-fit">
                                        <Calendar size={12} className="text-primary" />
                                        {edu.duration}
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {edu.details}
                                </p>
                                <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-primary font-bold">
                                    <CheckCircle size={12} />
                                    Academic Excellence
                                </div>
                            </div>
                        ))}


                    </div>


                </div>
            </div>


        </section>

    );
}
export default Education;