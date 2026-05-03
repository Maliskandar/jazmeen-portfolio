"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiExternalLink, FiBarChart2, FiX, FiCode,
  FiTarget, FiTrendingUp, FiCheckSquare, FiDatabase, FiMonitor, FiFileText,
  FiPieChart, FiShoppingCart, FiActivity
} from 'react-icons/fi';
import { SiPython, SiMysql, SiGooglebigquery } from 'react-icons/si';
import { IoLogoTableau } from 'react-icons/io5';
import { RiFileExcel2Fill, RiBarChartBoxFill } from 'react-icons/ri';

import { projectsData } from '../data/projectsData';
import Link from 'next/link';

const recentProjects = projectsData.filter(p => [1, 4, 5].includes(p.id));

const CaseStudies = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950 text-black dark:text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-2 text-black dark:text-white">
              Recent <span className="text-black dark:text-teal-400">Projects</span>
            </h2>
            <p className="text-neutral-600 dark:text-slate-400 max-w-xl">
              A curated data analytics project that transforms raw data into strategic business decisions.
            </p>
          </div>
          <div className="hidden md:block w-32 h-1 bg-gradient-to-r from-teal-500 to-transparent"></div>
        </div>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProjects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-neutral-200 dark:border-slate-800 h-[450px] cursor-pointer shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-teal-500/10 transition-shadow"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >

              {/* Cover Ikon (Pengganti Gambar) */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-neutral-100 dark:from-slate-800 to-neutral-200 dark:to-slate-900 flex items-center justify-center overflow-hidden">
                <motion.div
                  className="text-slate-300 dark:text-slate-700/30 group-hover:text-teal-500/20 transition-colors duration-500 transform group-hover:scale-110 text-[180px]"
                >
                  {project.coverIcon}
                </motion.div>
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 dark:from-slate-950 dark:via-slate-950/80 to-transparent opacity-90"></div>

              {/* Content Card */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 text-xs font-mono font-bold text-black dark:text-teal-400 bg-neutral-100 dark:bg-teal-500/10 border border-neutral-200 dark:border-teal-500/20 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                <div className={`transition-all duration-300 ${hoveredId === project.id ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
                  <h3 className="text-2xl font-bold mb-2 text-black dark:text-white group-hover:text-black dark:group-hover:text-teal-400 transition-colors drop-shadow-sm dark:drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-slate-300 text-sm line-clamp-2 mb-4 drop-shadow-sm">
                    {project.desc}
                  </p>
                  <div className="flex gap-3 text-lg text-black dark:text-teal-400">
                    {project.tools}
                  </div>
                </div>
              </div>

              {/* Hover Insight (Key Result) */}
              <div className={`absolute inset-0 bg-teal-900/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center transition-all duration-300 z-20 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 text-teal-300">
                  <FiTrendingUp size={32} />
                </div>
                <p className="text-teal-200 font-mono text-xs uppercase tracking-widest mb-2">Key Impact</p>
                <h4 className="text-3xl font-bold text-white mb-2">{project.insight}</h4>
                <p className="text-white/80 text-sm mb-8 max-w-xs">{project.insightDesc}</p>
                <button className="px-6 py-2 bg-white text-teal-900 rounded-full flex items-center gap-2 font-bold text-sm hover:bg-teal-50 transition-colors">
                  View Full Case Study <FiExternalLink />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 flex justify-center">
          <Link href="/projects" className="px-8 py-3 bg-neutral-900 dark:bg-teal-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-black dark:hover:bg-teal-400 transition-all flex items-center gap-2">
            View All Projects
          </Link>
        </div>
      </div>

      {/* --- MODAL DETAIL PROJECT --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="w-full max-w-5xl bg-white dark:bg-slate-900 border border-neutral-200 dark:border-slate-700 rounded-2xl overflow-hidden relative z-10 max-h-[90vh] flex flex-col shadow-2xl"
            >
              {/* Header Modal */}
              <div className="p-6 md:p-8 border-b border-neutral-200 dark:border-slate-700 flex justify-between items-start bg-neutral-50/80 dark:bg-slate-800/80">
                <div>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2 text-black dark:text-teal-400 text-xs md:text-sm font-mono">
                    <span className="flex items-center gap-2">{selectedProject.tools}</span>
                    <span className="hidden md:inline">•</span>
                    <span className="bg-neutral-100 dark:bg-teal-500/10 px-2 py-1 rounded border border-neutral-200 dark:border-teal-500/20">{selectedProject.category}</span>
                    <span className="hidden md:inline">•</span>
                    <span className="text-neutral-600 dark:text-slate-400 bg-neutral-100 dark:bg-slate-800 px-2 py-1 rounded border border-neutral-300 dark:border-slate-700">{selectedProject.fullDetail?.duration}</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-black dark:text-white mt-3">{selectedProject.title}</h3>
                </div>
                <button onClick={() => setSelectedProject(null)} className="p-2 bg-neutral-200 dark:bg-slate-700 rounded-full hover:bg-black hover:text-white dark:hover:bg-red-500 dark:hover:text-white transition-colors">
                  <FiX size={24} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar space-y-8 bg-white dark:bg-slate-900">

                {/* 1. Background & Objective */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-black dark:text-teal-400 font-bold mb-3 flex items-center gap-2 text-lg">
                      <FiTarget /> Project Background
                    </h4>
                    <p className="text-neutral-700 dark:text-slate-300 text-sm md:text-base leading-relaxed text-justify">
                      {selectedProject.fullDetail?.background}
                    </p>
                  </div>

                  <div className="bg-neutral-50 dark:bg-slate-800/50 p-6 rounded-xl border border-neutral-200 dark:border-slate-700">
                    <h4 className="text-black dark:text-white font-bold mb-4 flex items-center gap-2 text-lg">
                      <FiCheckSquare className="text-black dark:text-green-400" /> Scope of Work / Objective
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.fullDetail?.objective.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm md:text-base text-neutral-700 dark:text-slate-300">
                          <span className="text-black dark:text-green-500 mt-1 flex-shrink-0">✔</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 2. Methods & Results */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-neutral-200 dark:border-slate-800 pt-8">
                  <div>
                    <h4 className="text-black dark:text-blue-400 font-bold mb-3 flex items-center justify-between text-lg">
                      <span className="flex items-center gap-2"><FiCode /> Tools and Methods</span>
                      <span className="flex items-center gap-2 text-black dark:text-slate-300 text-base">{selectedProject.tools}</span>
                    </h4>
                    <p className="text-neutral-700 dark:text-slate-300 text-sm md:text-base leading-relaxed text-justify">
                      {selectedProject.fullDetail?.methods}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-black dark:text-purple-400 font-bold mb-3 flex items-center gap-2 text-lg">
                      <FiBarChart2 /> Results and Visuals
                    </h4>
                    <p className="text-neutral-700 dark:text-slate-300 text-sm md:text-base leading-relaxed text-justify">
                      {selectedProject.fullDetail?.results}
                    </p>
                  </div>
                </div>

              </div>

              {/* Footer Actions (Links) */}
              <div className="p-6 border-t border-neutral-200 dark:border-slate-700 bg-neutral-50 dark:bg-slate-950 flex flex-wrap gap-4 justify-start items-center">

                {selectedProject.fullDetail?.links.deck && selectedProject.fullDetail?.links.deck !== "#" && (
                  <a href={selectedProject.fullDetail?.links.deck} target="_blank" rel="noreferrer"
                    className="px-4 py-2 border border-black/10 dark:border-slate-600 bg-white dark:bg-transparent text-black dark:text-slate-300 rounded hover:border-black hover:bg-black hover:text-white dark:hover:border-pink-500 dark:hover:text-pink-400 transition-all flex items-center gap-2 text-sm font-medium">
                    <FiMonitor /> Presentation Deck
                  </a>
                )}

                {selectedProject.fullDetail?.links.query && selectedProject.fullDetail?.links.query !== "#" && (
                  <a href={selectedProject.fullDetail?.links.query} target="_blank" rel="noreferrer"
                    className="px-4 py-2 border border-black/10 dark:border-slate-600 bg-white dark:bg-transparent text-black dark:text-slate-300 rounded hover:border-black hover:bg-black hover:text-white dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all flex items-center gap-2 text-sm font-medium">
                    <FiDatabase /> Console Query
                  </a>
                )}

                {selectedProject.fullDetail?.links.tableau && selectedProject.fullDetail?.links.tableau !== "#" && (
                  <a href={selectedProject.fullDetail?.links.tableau} target="_blank" rel="noreferrer"
                    className="px-6 py-2 bg-black dark:bg-gradient-to-r dark:from-teal-500 dark:to-blue-600 text-white rounded hover:bg-neutral-800 dark:hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] transition-all flex items-center gap-2 text-sm font-bold shadow-md">
                    <IoLogoTableau /> View Dashboard
                  </a>
                )}

                {selectedProject.fullDetail?.links.kaggle && selectedProject.fullDetail?.links.kaggle !== "#" && (
                  <a href={selectedProject.fullDetail?.links.kaggle} target="_blank" rel="noreferrer"
                    className="px-4 py-2 border border-black/10 dark:border-slate-600 bg-white dark:bg-transparent text-black dark:text-slate-300 rounded hover:border-black hover:bg-black hover:text-white dark:hover:border-blue-400 dark:hover:text-blue-300 transition-all flex items-center gap-2 text-sm font-medium">
                    <FiDatabase /> Kaggle Dataset
                  </a>
                )}

                {selectedProject.fullDetail?.links.sheet1 && selectedProject.fullDetail?.links.sheet1 !== "#" && (
                  <a href={selectedProject.fullDetail?.links.sheet1} target="_blank" rel="noreferrer"
                    className="px-4 py-2 border border-black/10 dark:border-slate-600 bg-white dark:bg-transparent text-black dark:text-slate-300 rounded hover:border-black hover:bg-black hover:text-white dark:hover:border-green-500 dark:hover:text-green-400 transition-all flex items-center gap-2 text-sm font-medium">
                    <FiFileText /> TokoBli Dataset
                  </a>
                )}

                {selectedProject.fullDetail?.links.sheet2 && selectedProject.fullDetail?.links.sheet2 !== "#" && (
                  <a href={selectedProject.fullDetail?.links.sheet2} target="_blank" rel="noreferrer"
                    className="px-4 py-2 border border-black/10 dark:border-slate-600 bg-white dark:bg-transparent text-black dark:text-slate-300 rounded hover:border-black hover:bg-black hover:text-white dark:hover:border-green-500 dark:hover:text-green-400 transition-all flex items-center gap-2 text-sm font-medium">
                    <FiFileText /> A/B Testing Dataset
                  </a>
                )}

                {selectedProject.fullDetail?.links.colab && selectedProject.fullDetail?.links.colab !== "#" && (
                  <a href={selectedProject.fullDetail?.links.colab} target="_blank" rel="noreferrer"
                    className="px-4 py-2 border border-black/10 dark:border-slate-600 bg-white dark:bg-transparent text-black dark:text-slate-300 rounded hover:border-black hover:bg-black hover:text-white dark:hover:border-yellow-500 dark:hover:text-yellow-400 transition-all flex items-center gap-2 text-sm font-medium">
                    <SiPython /> Python (Colab)
                  </a>
                )}

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CaseStudies;