// src/components/AnalystToolkit.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiActivity, FiRefreshCw, FiMessageSquare, FiUsers, FiClock } from 'react-icons/fi';

// 1. Hapus SiPowerbi dari sini
import {
    SiPython, SiMysql,
    SiPandas, SiNumpy, SiGooglebigquery
} from 'react-icons/si';
import { IoLogoTableau } from 'react-icons/io5';

// 2. Tambahkan RiBarChartBoxFill (Untuk pengganti Power BI)
import { RiFileExcel2Fill, RiBarChartBoxFill } from 'react-icons/ri';

const skills = [
    { name: "Python", icon: <SiPython />, color: "text-black dark:text-yellow-400", desc: "Data Cleaning & Analysis (Pandas/NumPy)" },
    { name: "SQL", icon: <SiMysql />, color: "text-black dark:text-blue-400", desc: "Complex Queries & Database Management" },
    { name: "Tableau", icon: <IoLogoTableau />, color: "text-black dark:text-orange-500", desc: "Interactive Dashboard Visualization" },

    // 3. Gunakan ikon baru di sini
    { name: "Power BI", icon: <RiBarChartBoxFill />, color: "text-black dark:text-yellow-500", desc: "Business Intelligence Reporting" },

    { name: "Excel", icon: <RiFileExcel2Fill />, color: "text-black dark:text-green-500", desc: "Advanced Pivot & Macro" },
    { name: "BigQuery", icon: <SiGooglebigquery />, color: "text-black dark:text-blue-300", desc: "Cloud Data Warehousing" },
];

const AnalystToolkit = () => {
    return (
        <section className="py-20 bg-neutral-50 dark:bg-slate-900 relative transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">Skills & <span className="text-black dark:text-teal-400">Expertise</span></h2>
                    <p className="text-neutral-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A collection of tools and technologies I use to extract, process, and visualize data, paired with the interpersonal skills to drive effective solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-slate-800/50 border border-neutral-200 dark:border-slate-700 hover:border-black dark:hover:border-teal-500/50 p-6 rounded-xl transition-all group cursor-default shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-none"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`text-4xl ${skill.color} bg-neutral-100 dark:bg-slate-900 p-3 rounded-lg group-hover:scale-110 transition-transform shadow-inner dark:shadow-none`}>
                                    {skill.icon}
                                </div>
                                <div className="text-neutral-500 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                                    {skill.name}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-black dark:text-white mb-2">{skill.name}</h3>
                            <p className="text-neutral-600 dark:text-slate-400 text-sm leading-relaxed">
                                {skill.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Soft Skills Section */}
                <div className="mt-20 pt-16 border-t border-neutral-200 dark:border-slate-800/80">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-black dark:text-white mb-4">
                            Soft <span className="text-black dark:text-teal-400">Skills</span>
                        </h3>
                        <p className="text-neutral-600 dark:text-slate-400 max-w-2xl mx-auto">
                            The essential interpersonal skills that ensure data insights are effectively communicated and actioned.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "Problem Solving", icon: <FiTarget />, desc: "Approaching complex challenges with logical solutions." },
                            { name: "Analytical Thinking", icon: <FiActivity />, desc: "Connecting the dots to uncover underlying patterns." },
                            { name: "Adaptability", icon: <FiRefreshCw />, desc: "Quickly learning and adjusting to new tools and environments." },
                            { name: "Data Communication", icon: <FiMessageSquare />, desc: "Translating technical findings into business language." },
                            { name: "Teamwork", icon: <FiUsers />, desc: "Collaborating effectively across different departments." },
                            { name: "Time Management", icon: <FiClock />, desc: "Efficiently prioritizing tasks to meet project deadlines." }
                        ].map((skill, index) => (
                            <motion.div
                                key={`soft-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-slate-800/50 border border-neutral-200 dark:border-slate-700 hover:border-black dark:hover:border-teal-500/50 p-6 rounded-xl transition-all group cursor-default shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-none flex flex-col items-center text-center"
                            >
                                <div className={`text-4xl text-teal-600 dark:text-teal-400 bg-neutral-100 dark:bg-slate-900 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform shadow-inner dark:shadow-none`}>
                                    {skill.icon}
                                </div>
                                <h4 className="text-xl font-bold text-black dark:text-white mb-2">{skill.name}</h4>
                                <p className="text-neutral-600 dark:text-slate-400 text-sm leading-relaxed">
                                    {skill.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AnalystToolkit;