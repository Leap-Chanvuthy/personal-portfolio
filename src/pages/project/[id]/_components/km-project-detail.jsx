// import { useEffect, useRef } from "react";
// import { Badge } from "flowbite-react";
// import { FaGithub } from "react-icons/fa";
// import PhotoSwipeLightbox from "photoswipe/lightbox";
// import "photoswipe/style.css";

// const KmProejctDetail = ({ project }) => {
//     const galleryRef = useRef(null);

//     useEffect(() => {
//         const lightbox = new PhotoSwipeLightbox({
//             gallery: "#project-gallery-km",
//             children: "a",
//             pswpModule: () => import("photoswipe"),
//         });
//         lightbox.init();

//         return () => lightbox.destroy();
//     }, []);

//     return (
//         <div className="flex flex-col gap-10">
//             <div className="flex flex-col gap-5">
//                 <h1 className="text-2xl font-bold">{project.title}</h1>
//                 <p>{project.subtitle}</p>
//                 <div className="flex flex-wrap lg:md:flex-row items-center gap-3">
//                     {project.tags?.map((badge, index) => (
//                         <div key={index} className="flex flex-wrap gap-2">
//                             <Badge color="gray">{badge}</Badge>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <img
//                 className="w-full lg:md:h-[35rem] object-cover rounded-lg"
//                 src={project.images[0]}
//                 alt="main"
//             />

//             <div>
//                 <h3>Github Repositories</h3>
//                 <div className="flex flex-col gap-3 mt-5">
//                     {project.githubRepo?.map((git, index) => (
//                         <a
//                             key={index}
//                             className="flex gap-3 items-center"
//                             href={git.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <FaGithub className="text-2xl" />
//                             <p>{git.title}</p>
//                         </a>
//                     ))}
//                 </div>
//             </div>

//             <div dangerouslySetInnerHTML={{ __html: project.body }} />

//             <h3 className="font-bold">រូបភាពខ្លះៗ</h3>
//             <div
//                 className="grid bg-gray-100 dark:bg-gray-800 grid-cols-1 lg:md:grid-cols-2 gap-5"
//                 id="project-gallery-km"
//                 ref={galleryRef}
//             >
//                 {project.images.map((img, index) => (
//                     <a
//                         key={index}
//                         href={img}
//                         data-pswp-width="1380"
//                         data-pswp-height="800"
//                         target="_blank"
//                         rel="noreferrer"
//                     >
//                         <img
//                             className="w-full lg:md:h-[20rem] object-cover rounded-lg"
//                             src={img}
//                             alt={`project-image-${index}`}
//                         />
//                     </a>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default KmProejctDetail;


import React, { useEffect, useRef } from 'react';
import { ArrowLeft, Github, ExternalLink, Calendar, User, Layers } from 'lucide-react';
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { Link } from 'react-router-dom';

const KmProejctDetail = ({ project }) => {
    const galleryRef = useRef(null);

    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: "#project-gallery-km",
            children: "a",
            pswpModule: () => import("photoswipe"),
        });
        lightbox.init();

        return () => lightbox.destroy();
    }, []);

    if (!project) return null;

    return (
        <div className="font-kh min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
            
            {/* 1. Header / Hero Section */}
            <div className="relative h-[400px] w-full">
                <div className="absolute inset-0">
                    <img 
                        src={project.images?.[0]} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                </div>


                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-5xl mx-auto">
                    {project.category && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full shadow-sm">
                                {project.category}
                            </span>
                        </div>
                    )}
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl">
                        {project.subtitle}
                    </p>
                </div>
            </div>

            {/* 2. Main Content */}
            <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                
                {/* Left Column */}
                <div className="md:col-span-1 space-y-8">
                    
                    <div className="flex flex-col gap-3">
                        {project.demoLink && (
                            <a href={project.demoLink} target="_blank" rel="noreferrer" 
                               className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-lg hover:shadow-blue-500/30">
                                <ExternalLink size={20} />
                                មើលផ្ទាល់ (Live)
                            </a>
                        )}
                        
                        {project.githubRepo?.map((git, index) => (
                             <a key={index} href={git.link} target="_blank" rel="noreferrer" 
                                className="flex items-center justify-center gap-2 w-full py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 text-gray-700 dark:text-gray-200 font-medium rounded-xl transition-all">
                                <Github size={20} />
                                {git.title || "មើលកូដ (Source)"}
                             </a>
                        ))}
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
                        <h3 className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-4 font-khmer">ព័ត៌មានគម្រោង</h3>
                        
                        <div className="space-y-4">
                            {project.role && (
                                <div className="flex items-start gap-3">
                                    <User className="text-blue-500 mt-1" size={18} />
                                    <div>
                                        <p className="text-xs text-gray-400">តួនាទី</p>
                                        <p className="font-medium">{project.role}</p>
                                    </div>
                                </div>
                            )}
                            
                            {project.date && (
                                <div className="flex items-start gap-3">
                                    <Calendar className="text-blue-500 mt-1" size={18} />
                                    <div>
                                        <p className="text-xs text-gray-400">កាលបរិច្ឆេទ</p>
                                        <p className="font-medium">{project.date}</p>
                                    </div>
                                </div>
                            )}

                            <div className="flex items-start gap-3">
                                <Layers className="text-blue-500 mt-1" size={18} />
                                <div>
                                    <p className="text-xs text-gray-400">បច្ចេកវិទ្យា</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.tags?.map((tech, index) => (
                                            <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-xs rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="md:col-span-2 space-y-10">
                    
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-khmer">សេចក្តីសង្ខេប</h2>
                        <div 
                            className="text-gray-600 dark:text-gray-300 leading-relaxed prose dark:prose-invert max-w-none font-khmer"
                            dangerouslySetInnerHTML={{ __html: project.body }} 
                        />
                    </section>

                    {project.features && (
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-khmer">លក្ខណៈពិសេស</h2>
                            <ul className="space-y-3">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white font-khmer">រូបភាពខ្លះៗ</h2>
                        <div 
                            className="grid gap-6 grid-cols-1 md:grid-cols-2" 
                            id="project-gallery-km" 
                            ref={galleryRef}
                        >
                            {project.images?.map((img, index) => (
                                <a 
                                    key={index} 
                                    href={img}
                                    data-pswp-width="1380"
                                    data-pswp-height="800"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group relative overflow-hidden rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm block"
                                >
                                    <img 
                                        src={img} 
                                        alt={`Screenshot ${index + 1}`} 
                                        className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
                                    />
                                </a>
                            ))}
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default KmProejctDetail;