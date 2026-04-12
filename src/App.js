import React from 'react';
import myPhoto from './my-photo.jpg'; // নিশ্চিত করুন ছবিটি src ফোল্ডারে এই নামে আছে

function App() {
  return (
    <div className="bg-base-100 min-h-screen font-sans" data-theme="dark">
      {/* 1. Navbar */}
      <div className="navbar bg-base-200 shadow-lg sticky top-0 z-50 px-4 md:px-20">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl font-bold text-primary">MD JISAN</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* 2. Hero Section (Updated with Photo) */}
      <div id="about" className="hero min-h-[80vh] bg-base-100 px-4 md:px-20">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 md:gap-20">
          
          {/* প্রোফাইল ছবি অংশ */}
          <div className="avatar">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 shadow-2xl">
              <img src={myPhoto} alt="Md Jisan" className="object-cover" />
            </div>
          </div>

          {/* টেক্সট অংশ */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Frontend <span className="text-primary">Developer</span>
            </h1>
            <p className="py-6 text-lg text-gray-400">
              I’m a passionate React Developer from Bhola, Bangladesh. I specialize in building responsive web applications using Tailwind CSS, Next.js, and Firebase.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="#projects" className="btn btn-primary px-8">View My Work</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
          </div>
          
        </div>
      </div>

      {/* 3. Projects Section */}
      <div id="projects" className="py-20 bg-base-200 px-4 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project 1: Jixen Shop */}
          <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-800">
            <div className="card-body">
              <h2 className="card-title text-primary text-2xl">Jixen Shop</h2>
              <p className="text-sm text-gray-400">Advanced E-commerce platform with Firebase Auth and Real-time Database.</p>
              <div className="card-actions justify-start mt-4">
                <div className="badge badge-outline">React</div>
                <div className="badge badge-outline">Firebase</div>
              </div>
              <div className="card-actions justify-end mt-4 gap-2">
                <a href="https://mdjisan641160.github.io/my-e-commerce-web/" target="_blank" rel="noreferrer" className="btn btn-xs btn-primary">Live View</a>
                <a href="https://github.com/mdjisan641160" target="_blank" rel="noreferrer" className="btn btn-xs btn-outline">GitHub</a>
              </div>
            </div>
          </div>

          {/* Project 2: Digital Tools Marketplace */}
          <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-800">
            <div className="card-body">
              <h2 className="card-title text-primary text-2xl">Digital Tools</h2>
              <p className="text-sm text-gray-400">A niche marketplace for digital assets with optimized search and mobile UI.</p>
              <div className="card-actions justify-start mt-4">
                <div className="badge badge-outline">Tailwind</div>
                <div className="badge badge-outline">Netlify</div>
              </div>
            </div>
          </div>

          {/* Project 3: Our Future Dreams */}
          <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-800">
            <div className="card-body">
              <h2 className="card-title text-primary text-2xl">Future Dreams</h2>
              <p className="text-sm text-gray-400">Interactive celebration portal with countdown timers and persistent storage.</p>
              <div className="card-actions justify-start mt-4">
                <div className="badge badge-outline">Local Storage</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4. Footer / Contact */}
      <footer id="contact" className="footer footer-center p-10 bg-base-300 text-base-content rounded">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Let's Connect</h2>
          <p className="font-bold">MD JISAN <br/>Frontend Web Developer</p> 
          <p>Email: mdjisan641160@gmail.com</p>
          <p>Bhola, Barishal, Bangladesh</p>
        </div> 
        <div>
          <div className="grid grid-flow-col gap-6 mt-4">
              <a 
                href="https://github.com/mdjisan641160" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline btn-primary btn-sm"
              >
                GitHub
              </a>
              
              <a 
                href="https://www.linkedin.com/in/md-jisan-webdev" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary btn-sm"
              >
                LinkedIn
              </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;