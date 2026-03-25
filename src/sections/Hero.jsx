import { useSelector, useDispatch } from 'react-redux';
import { setSelectedProject } from '../features/projectSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';

const Hero = () => {
    const dispatch = useDispatch();
    const { list, selectedId } = useSelector((state) => state.projects);

    const activeProject = list.find(p => p.id === selectedId) || list[0];

    return (
        <section className="min-h-screen pt-24 pb-12 px-6 md:px-12 flex flex-col lg:flex-row gap-12 items-center bg-[#020617]">

            <div className="w-full lg:w-1/3 flex flex-col gap-4">
                <h2 className="text-slate-500 uppercase tracking-widest text-sm font-bold mb-4">Projetos Selecionados</h2>
                {list.map((project) => (
                    <button
                        key={project.id}
                        onClick={() => dispatch(setSelectedProject(project.id))}
                        className={`group flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${selectedId === project.id
                            ? 'border-sky-500 bg-sky-500/10 text-sky-400'
                            : 'border-slate-800 hover:border-slate-600 text-slate-400'
                            }`}
                    >
                        <span className="text-lg font-medium">{project.title}</span>
                        <ChevronRight className={`transition-transform ${selectedId === project.id ? 'rotate-90 md:rotate-0' : ''}`} />
                    </button>
                ))}
            </div>

            <div className="w-full lg:w-2/3 h-[500px] relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeProject.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
                    >
                        <div className="w-full md:w-1/2 h-48 md:h-full overflow-hidden">
                            <img
                                src={activeProject.image}
                                alt={activeProject.title}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="p-8 md:w-1/2 flex flex-col justify-center">
                            <div className="flex gap-2 mb-4">
                                {activeProject.tech.map(t => (
                                    <span key={t} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded tracking-tighter">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-white">{activeProject.title}</h3>
                            <p className="text-slate-400 leading-relaxed mb-8">
                                {activeProject.description}
                            </p>

                            <a
                                href={activeProject.link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white w-fit px-6 py-3 rounded-full font-bold transition-colors"
                            >
                                Acessar Projeto <ExternalLink size={18} />
                            </a>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Hero;