import { PiHexagonThin } from 'react-icons/pi';
import { motion } from 'framer-motion';
import React from 'react';
import portrait from './assets/image/portrait.png';
import project1 from './assets/Image/bridgey.png';
import project2 from './assets/Image/educhain.png';
import project3 from './assets/Image/moomeadows.jpg';
import game1 from './assets/Image/game1.png';
import game2 from './assets/Image/game2.jpg';

const App = () => {

  // Daftar icon SVG, termasuk yang berakhiran 2
  const iconFiles = [
    'android studio 1.svg',
    'blender 1.svg',
    'c sharp.svg',
    'c++ 1.svg',
    'css3 1.svg',
    'docker 2.svg',
    'express 2.svg',
    'git.svg',
    'github.svg',
    'html5.svg',
    'java 1.svg',
    'javascript 1.svg',
    'jira 2.svg',
    'kotlin.svg',
    'mysql 2.svg',
    'node.js 1.svg',
    'nodemon 2.svg',
    'npm 1.svg',
    'opencv 2.svg',
    'postman 2.svg',
    'python 2.svg',
    'react.svg',
    'tailwind css 1.svg',
    'typescript.svg',
    'unity 1.svg',
    'visual studio 1.svg',
    'visual studio code (vs code) 1.svg',
    'vite.js 1.svg',
  ];

  // Icon tanpa angka 2 di akhir
  const icons1 = iconFiles.filter(f => !f.match(/ 2\.svg$/));
  // Icon dengan angka 2 di akhir
  const icons2 = iconFiles.filter(f => f.match(/ 2\.svg$/));

  // Fungsi untuk membuat judul dari nama file
  function getTitle(filename) {
    // Hilangkan ekstensi dan trailing angka (baik 1 maupun 2)
    let name = filename.replace(/\.svg$/, '');
    name = name.replace(/ [12]$/, '');
    name = name.replace(/\(|\)/g, '');
    return name
      .split(/\s+/)
      .filter(Boolean)
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  }

// Render di JSX


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      
      {/* Hero Section */}
      <section className="relative flex w-full items-center justify-center overflow-hidden px-4 text-center sm:px-6">
        {/* Hexagon background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <PiHexagonThin className="h-auto w-[70vw] max-w-[700px] text-cyan-400 opacity-50 blur-sm drop-shadow-[0_0_25px_rgba(34,211,238,0.7)]" />
          </motion.div>
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-black/80" />

        {/* Content */}
        <div className="py-10 relative z-10 mx-auto max-w-7xl w-full flex flex-col md:flex-row items-center justify-between">
        {/* Konten teks di kiri */}
        <div className="flex-[2] text-left">
        <h1 className="bg-gradient-to-r from-[#18E18C] via-[#77FFC6] to-[#FFD541] bg-clip-text text-xl leading-tight font-bold text-transparent lg:text-6xl">
        Ariel Ardiansyah Portfolio<br /> Informatics Student at UPNVJ
        </h1>
        <p className="mt-6 text-base text-gray-300 sm:text-lg">
        I am a Computer Science student currently in my 5th semester. <br />  
        Throughout my journey, I’ve built several projects in both frontend and backend development, ranging from web applications to Android apps.  
        <br /> Beyond software development, I am deeply interested in game development, where I focus on programming and bringing interactive experiences to life.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() =>
                document
                  .getElementById('Projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="rounded-lg bg-white px-6 py-3 font-semibold text-black hover:bg-gray-200"
            >
              My Frontend Projects
            </button>
            <button
              onClick={() =>
                document
                  .getElementById('passion-project')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="rounded-lg bg-white px-6 py-3 font-semibold text-black hover:bg-gray-200"
            >
              Passion Project
            </button>
            <button
              onClick={() =>
                document
                  .getElementById('tools-tech')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="rounded-lg bg-white px-6 py-3 font-semibold text-black hover:bg-gray-200"
            >
              Tools & Technologies & Frameworks
            </button>
            
          </div>
    </div>
    {/* Gambar di kanan */}
    <div className="flex-1 flex justify-center mt-8 md:mt-0">
      <img
        src={portrait}
        alt="Portrait"
        className="w-400 h-400 object-cover rounded-xl shadow-lg"
      />
    </div>
  </div>
      </section>

      {/* Frontend Projects */}
      <section id="projects" className="bg-gradient-to-b from-black/80 to-black py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-12 text-center text-2xl font-semibold sm:text-3xl">
            My Frontend Projects
          </h2>
          <div className="grid justify-center gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                icon: project1,
                title: 'Bridgey',
                text: 'An Android-based mobile application designed to streamline communication between event organizers (EO), tenants, and sponsors through a unified digital platform. Developed using the prototyping methodology, the application was built in Android Studio with Kotlin as the primary programming language and Firebase as the backend for authentication and real-time data storage. ',
              },
              {
                icon: project2,
                title: 'EduChain',
                text: 'A Web3-based edutech platform designed to empower learning through blockchain technology. The platform integrates Motoko smart contracts for secure and transparent course management, while the frontend is built using React, TypeScript, and Vite for a fast and modern user experience. ',
              },
              {
                icon: project3,
                title: 'MooMeadows',
                text: 'A web-based livestock management system designed to help farm owners monitor and organize livestock data efficiently. The platform provides structured data management for each animal enclosure, including details such as weight, gender, and health condition. Built with a simple and user-friendly interface, this project enables better oversight and decision-making in daily farm operations.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="mx-auto flex w-full max-w-[320px] flex-col rounded-[12px] bg-[#1a1a1a] p-6 sm:p-8"
              >
                <div className="mb-4 flex justify-center">
                  <img src={card.icon} alt={card.title} className=" w-full h-48 object-cover rounded-lg" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {card.title}
                </h3>
                <div className="my-4 h-[2px] w-16 bg-white/40"></div>
                <p className="text-sm leading-relaxed text-gray-400">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="passion-project" className="bg-gradient-to-b from-black to-gray-900 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-4 text-center text-2xl font-bold text-white sm:text-4xl">
            Passion Project
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-gray-300 sm:text-base">
            I picked game development as my interest in software engineering,  
            and this section highlights the project I have built as a game programmer.  
          </p>
          <h2 className="mb-4 text-center text-2xl font-bold text-white sm:text-4xl">
            Aquatic Journey
          </h2>
          <div className="justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-row justify-center items-center gap-8 mb-6">
              <img src={game1} alt="Game 1" className="w-128 h-80 px-4 rounded-lg" />
              <img src={game2} alt="Game 2" className="w-128 h-80 px-4 rounded-lg" />
            </div>
            <div className="text-center text-base text-gray-300">
              <p>
                Aquatic Journey is a prototype game developed in Unity using C#. It was built as part of my exploration in game development, focusing on gameplay mechanics and interactive design. The game highlights my ability to combine programming skills with creativity, representing one of my earliest steps into the field of game programming.  
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="tools-tech" className="bg-gradient-to-b from-gray-900 to-black py-16 sm:py-20"> 
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-4 text-center text-2xl font-bold text-white sm:text-4xl">
            Tools & Technologies
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-gray-300 sm:text-base">
            These are the tools and technologies I have gained expertise in throughout my journey as a developer.  
          </p>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {/* Icon tanpa angka 2 di akhir */}
            {icons1.map(file => (
              <div key={file} className="flex flex-col items-center">
                <img
                  src={`/${file}`}
                  alt={getTitle(file)}
                  className="h-20 w-20 object-contain bg-white/80 rounded-xl p-4"
                />
                <p className="mt-2 text-center text-white">{getTitle(file)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="bg-black/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-gray-300 pt-10 pb-5 sm:text-base">
            These are the tools and technologies I have gained expertise in throughout my journey as a developer, including some that I have learned but not yet applied in the projects showcased here.  
          </p>
          {/* Icon dengan angka 2 di akhir, grid terpisah */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 mt-12">
            {icons2.map(file => (
              <div key={file} className="flex flex-col items-center">
                <img
                  src={`/${file}`}
                  alt={getTitle(file)}
                  className="h-20 w-20 object-contain bg-white/80 rounded-xl p-4"
                />
                <p className="mt-2 text-center text-white">{getTitle(file)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
