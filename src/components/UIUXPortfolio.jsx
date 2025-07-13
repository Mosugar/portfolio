// import React, { useState, useRef, useEffect } from 'react';
// import { Eye, ExternalLink, Figma, Palette, Sparkles, ArrowRight } from 'lucide-react';
// import CyberpunkTitle from './CyberpunkTitle';

// const UIUXPortfolio = () => {
//   const [activeProject, setActiveProject] = useState(0);
//   const [isInView, setIsInView] = useState(false);
//   const sectionRef = useRef(null);

//   // UI/UX Projects from your Behance portfolio
//   const uiUxProjects = [
//     {
//       id: 1,
//       title: "Mobile Banking App",
//       category: "Mobile App Design",
//       description: "A comprehensive mobile banking experience focused on security, ease of use, and modern financial management.",
//       image: "https://via.placeholder.com/600x800/1a1a1a/10b981?text=Banking+App+UI",
//       behanceUrl: "https://www.behance.net/mohamed_sekkar/projects",
//       tags: ["Mobile Design", "Fintech", "User Research", "Prototyping"],
//       gradient: "from-emerald-500 to-teal-600",
//       year: "2024"
//     },
//     {
//       id: 2,
//       title: "E-Commerce Platform",
//       category: "Web App Design",
//       description: "Modern e-commerce platform with focus on user experience, conversion optimization, and seamless checkout flow.",
//       image: "https://res.cloudinary.com/decjm9mmr/image/upload/v1739658216/post_uzznss.jpg",
//       behanceUrl: "https://www.behance.net/mohamed_sekkar/projects",
//       tags: ["Web Design", "E-commerce", "UX Research", "A/B Testing"],
//       gradient: "from-yellow-500 to-orange-600",
//       year: "2024"
//     },
//     {
//       id: 3,
//       title: "Food Delivery App",
//       category: "Mobile App Design",
//       description: "Intuitive food delivery app with advanced filtering, real-time tracking, and personalized recommendations.",
//       image: "https://res.cloudinary.com/decjm9mmr/image/upload/v1739658216/post_uzznss.jpg",
//       behanceUrl: "https://www.behance.net/mohamed_sekkar/projects",
//       tags: ["Mobile Design", "Food Tech", "User Journey", "Wireframing"],
//       gradient: "from-red-500 to-pink-600",
//       year: "2023"
//     },
//     {
//       id: 4,
//       title: "Fitness Tracking App",
//       category: "Mobile App Design",
//       description: "Comprehensive fitness app redesign focusing on motivation, progress tracking, and community features.",
//       image: "https://res.cloudinary.com/decjm9mmr/image/upload/v1739658216/post_uzznss.jpg",
//       behanceUrl: "https://www.behance.net/mohamed_sekkar/projects",
//       tags: ["Mobile Design", "Health Tech", "Data Visualization", "Gamification"],
//       gradient: "from-cyan-500 to-blue-600",
//       year: "2023"
//     },
//     {
//       id: 5,
//       title: "SaaS Dashboard",
//       category: "Web App Design",
//       description: "Clean and powerful dashboard for SaaS platforms with advanced analytics and user management features.",
//       image: "https://res.cloudinary.com/decjm9mmr/image/upload/v1745795358/stretchedweb_ud8jye.webp",
//       behanceUrl: "https://www.behance.net/mohamed_sekkar/projects",
//       tags: ["Web Design", "SaaS", "Data Visualization", "Enterprise"],
//       gradient: "from-purple-500 to-indigo-600",
//       year: "2023"
//     },
//     {
//       id: 6,
//       title: "Travel Booking Platform",
//       category: "Web App Design",
//       description: "Modern travel booking experience with intelligent search, comparison tools, and seamless booking flow.",
//       image: "https://res.cloudinary.com/decjm9mmr/image/upload/v1745795358/stretchedweb_ud8jye.webp",
//       behanceUrl: "https://www.behance.net/mohamed_sekkar/projects",
//       tags: ["Web Design", "Travel Tech", "Search UX", "Booking Flow"],
//       gradient: "from-orange-500 to-red-600",
//       year: "2024"
//     }
//   ];

//   // Intersection Observer
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIsInView(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   // Auto-slide functionality
//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       setActiveProject((prev) => (prev + 1) % uiUxProjects.length);
//     }, 5000);

//     return () => clearInterval(slideInterval);
//   }, [uiUxProjects.length]);

//   const nextProject = () => {
//     setActiveProject((prev) => (prev + 1) % uiUxProjects.length);
//   };

//   const prevProject = () => {
//     setActiveProject((prev) => (prev - 1 + uiUxProjects.length) % uiUxProjects.length);
//   };

//   const currentProject = uiUxProjects[activeProject];

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative py-20 overflow-hidden"
//     >
//       {/* Background Effects */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl" />
//         <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-red-500/15 to-orange-500/15 rounded-full blur-3xl" />
//       </div>

//       {/* Grid Pattern */}
//       <div 
//         className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(255, 102, 0, 0.3) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255, 102, 0, 0.3) 1px, transparent 1px)
//           `,
//           backgroundSize: '50px 50px'
//         }}
//       />

//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         {/* Title */}
//         <CyberpunkTitle 
//           title="UI/UX DESIGN"
//           gradient="from-orange-400 via-red-400 to-orange-500"
//           glowColor="text-orange-500"
//           glitchColor="text-red-500"
//           leftIcon={Palette}
//           rightIcon={Sparkles}
//           leftIconColor="text-orange-400"
//           rightIconColor="text-red-400"
//         />

//         {/* Main Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
//           {/* Left Side - Project Display */}
//           <div className="relative">
//             {/* Main Project Image */}
//             <div className="relative group">
//               <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-xl transform group-hover:scale-105 transition-transform duration-500" />
//               <div className="relative bg-black/40 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-500">
//                 <div className="aspect-[3/4] rounded-2xl overflow-hidden relative group">
//                   <img 
//                     src={currentProject.image} 
//                     alt={currentProject.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
//                   {/* Project Year Badge */}
//                   <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-white text-sm font-medium">
//                     {currentProject.year}
//                   </div>
                  
//                   {/* View Project Button */}
//                   <div className="absolute bottom-4 left-4 right-4">
//                     <a 
//                       href={currentProject.behanceUrl} 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full py-3 px-6 text-white font-medium hover:bg-white/30 transition-all duration-300 group"
//                     >
//                       <Eye className="w-4 h-4" />
//                       View on Behance
//                       <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Navigation Arrows */}
//             <button
//               onClick={prevProject}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 group"
//             >
//               <ArrowRight className="w-5 h-5 rotate-180 group-hover:scale-110 transition-transform" />
//             </button>
//             <button
//               onClick={nextProject}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 group"
//             >
//               <ArrowRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
//             </button>
//           </div>

//           {/* Right Side - Project Details */}
//           <div className="space-y-8">
//             {/* Project Info */}
//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <span className="text-orange-400 text-sm font-medium tracking-wide uppercase">
//                   {currentProject.category}
//                 </span>
//                 <div className="h-1 w-12 bg-gradient-to-r from-orange-400 to-red-400 rounded" />
//               </div>
              
//               <h3 className="text-4xl font-bold text-white leading-tight">
//                 {currentProject.title}
//               </h3>
              
//               <p className="text-gray-300 text-lg leading-relaxed">
//                 {currentProject.description}
//               </p>
//             </div>

//             {/* Tags */}
//             <div className="flex flex-wrap gap-2">
//               {currentProject.tags.map((tag, index) => (
//                 <span 
//                   key={index}
//                   className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             {/* Project Navigation Dots */}
//             <div className="flex gap-2">
//               {uiUxProjects.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveProject(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     index === activeProject 
//                       ? 'bg-orange-500 w-8' 
//                       : 'bg-orange-500/30 hover:bg-orange-500/50'
//                   }`}
//                 />
//               ))}
//             </div>

//             {/* Call to Action */}
//             <div className="space-y-4">
//               <a 
//                 href="https://www.behance.net/mohamed_sekkar/projects" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 group"
//               >
//                 <Figma className="w-5 h-5" />
//                 View Full Portfolio
//                 <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//               </a>
              
//               <p className="text-gray-400 text-sm">
//                 Explore all {uiUxProjects.length}+ design projects on Behance
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Particles */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(15)].map((_, i) => (
//           <div 
//             key={i}
//             className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${2 + Math.random() * 3}s`
//             }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default UIUXPortfolio;