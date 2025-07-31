"use client";

import React, { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import '@fortawesome/fontawesome-free/css/all.min.css';
import lmsImage from "../Pics/lms.png"
import aadiImage from "../Pics/aadi.png";
import cre8xImage from "../Pics/cre8x.png";
import Captext from "../Pics/captext.jpg"; // 🔁 Replace this with the actual imported image if available


declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  const loadScript = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const existingScript = document.querySelector(`script[src="${src}"]`);
      if (existingScript) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    const loadAllScripts = async () => {
      try {
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js");
        if (!window.THREE) window.THREE = (window as any).THREE;
        await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js");
        setScriptsLoaded(true);
      } catch (err) {
        console.error("[SCRIPT LOADING ERROR]:", err);
      }
    };
    loadAllScripts();
  }, []);

  useEffect(() => {
    if (!scriptsLoaded || !vantaRef.current || !window.VANTA || !window.THREE) return;

    if (vantaEffect.current) {
      vantaEffect.current.destroy();
      vantaEffect.current = null;
    }

    try {
      vantaEffect.current = window.VANTA.NET({
        el: vantaRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: darkMode ? 0x22c55e : 0x2e68dc,
        backgroundColor: darkMode ? 0x0f172a : 0xf0f4ff,
        points: 5.0,
        maxDistance: 35.0,
        spacing: 17.0,
      });
    } catch (err) {
      console.error("[VANTA INITIALIZATION ERROR]:", err);
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [scriptsLoaded, darkMode]);

  const projects = [
    {
      title: "KDU LMS Portal",
      description:
        "A secure student management portal with login authentication, attendance, and result management. Built with React.js for frontend and Supabase as the backend. Emphasizes scalability, role-based access, and real-time updates.",
      techStack: ["React.js", "Supabase", "Tailwind CSS", "JWT"],
      imageUrl: lmsImage,
      projectLink: "https://student-mangement-system-frontend.vercel.app/"
    },
    {
      title: "AADI Official Website",
      description:
        "A fully responsive website designed for AADI Company. Includes real-time support with Tawk.to, contact forms via EmailJS, and smooth GSAP animations. Built using React.js and Tailwind CSS.",
      techStack: ["React.js", "Tailwind CSS", "GSAP", "EmailJS", "Tawk.to"],
      imageUrl: aadiImage,
      projectLink: "https://aadi-eta.vercel.app/"
    },
    {
      title: "Capture Text – Mobile & Desktop Apps",
      description:
        "Cross-platform ecosystem that allows users to input and store text in real-time using Firebase Cloud. The mobile version is built with React Native and the desktop app with Electron, enabling seamless data sync and access.",
      techStack: ["React Native", "Electron", "Firebase", "JavaScript"],
      imageUrl: Captext, // 🔁 Replace this with the actual imported image if available
      projectLink: "https://lnkd.in/gUgWa2wW" // or optionally your portfolio GitHub if you want a single link
    }

  ];

  return (
    <main
      className={`${darkMode ? "text-green-400" : "text-indigo-600"} min-h-screen relative overflow-hidden transition-colors duration-500`}
    >
      <div ref={vantaRef} className="fixed inset-0 -z-10" />
      <Navbar darkMode={darkMode} />

      <div className="fixed top-4 right-6 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-white/80 dark:bg-gray-800 shadow-md hover:scale-110 transition"
          title="Toggle Dark Mode"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-green-400" />
          ) : (
            <Moon className="w-5 h-5 text-indigo-600" />
          )}
        </button>
      </div>

      <div className="ml-24">
        <section
    id="home"
    className="min-h-screen flex flex-col justify-center items-center px-6 text-center transition-colors duration-300"
  >
    <h1 className={`text-5xl font-bold mb-4 ${darkMode ? "text-green-400" : "text-indigo-700"}`}>
      Hi, I'm Sandaruwan
    </h1>
    <p className={`text-xl max-w-3xl mb-6 transition-colors duration-300 ${darkMode ? "text-green-200" : "text-indigo-800"}`}>
      Full-Stack Software Engineering Undergraduate passionate about building scalable, secure,
      and aesthetically pleasing web applications. I specialize in React, Node.js, and
      cutting-edge system architectures like microservices and zero-trust security.
    </p>

    {/* Social Icons */}
    <div className="flex gap-6 mt-4 text-2xl">
      <a
        href="https://www.linkedin.com/in/sandaruwan-kariyakarawana/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
      >
        <i className={`fab fa-linkedin ${darkMode ? "text-green-400" : "text-indigo-600"}`} />
      </a>
      <a
        href="https://github.com/kariyakarwana"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
      >
        <i className={`fab fa-github ${darkMode ? "text-green-400" : "text-indigo-600"}`} />
      </a>
      <a
        href="mailto:kariyakarawanaz@gmail.com"
        className="hover:scale-110 transition-transform"
      >
        <i className={`fas fa-envelope ${darkMode ? "text-green-400" : "text-indigo-600"}`} />
      </a>
    </div>
  </section>

  {/* Final Year Project Section */}
  <section id="final-year" className="py-24 px-6 max-w-5xl mx-auto transition-colors duration-300">
    <h2 className={`text-3xl font-bold mb-6 ${darkMode ? "text-green-300" : "text-indigo-700"}`}>
      Final Year Project
    </h2>
    <div className={`p-6 rounded-lg shadow-lg border transition-all duration-300
      ${darkMode ? "bg-gray-900 text-green-100 border-green-600" : "bg-white text-indigo-900 border-indigo-200"}`}>
      <p className="mb-4">
        <strong>Title:</strong> Zero-Trust Banking Microservices Architecture with AI-Powered Policy Engine
      </p>
      <p className="mb-2">
        <strong>Problem:</strong> Traditional banking apps rely on perimeter-based security models,
        which leave user data and transactions vulnerable to attacks once the perimeter is breached.
      </p>
      <p className="mb-2">
        <strong>Solution:</strong> Design and implement a microservice-based architecture with a zero-trust model
        that authenticates every transaction and session. Powered by an AI-driven policy engine,
        it dynamically enforces access control rules per user/session/activity.
      </p>
      <p className="mb-2">
        <strong>Innovation:</strong> First student-implemented zero-trust AI security system built for banking microservices.
      </p>
    </div>
  </section>

  {/* Second Year Project Section */}
<section id="second-year" className="py-24 px-6 max-w-5xl mx-auto transition-colors duration-300">
  <h2 className={`text-3xl font-bold mb-6 ${darkMode ? "text-green-300" : "text-indigo-700"}`}>
    Second Year Project
  </h2>
  <div className={`p-6 rounded-lg shadow-lg border transition-all duration-300
    ${darkMode ? "bg-gray-900 text-green-100 border-green-600" : "bg-white text-indigo-900 border-indigo-200"}`}>

    <p className="mb-4">
      <strong>Title:</strong> Breast Cancer Awareness & Digitalization System for Suwanari Project
    </p>

    <p className="mb-2">
      <strong>Problem:</strong> In Sri Lanka, many individuals lack awareness of breast cancer symptoms,
      early detection methods, and preventive care — especially in rural communities.
      Public health awareness campaigns are still largely manual and inefficient.
    </p>

    <p className="mb-2">
      <strong>Solution:</strong> Designed and developed a digital platform to promote breast cancer awareness
      as part of the Suwanari Project. The system included an AI-powered chatbot for educational support,
      a personalized SMS notification system, and bilingual (Sinhala and English) accessibility to ensure
      inclusivity across all regions.
    </p>

    <p className="mb-2">
      <strong>Technologies Used:</strong> React.js, Node.js, MongoDB, Twilio, Tailwind CSS
    </p>

    <p className="mb-2">
      <strong>My Contribution:</strong> Led the chatbot integration, developed the bilingual user interface,
      implemented SMS-based notifications using Twilio, and collaborated with health professionals
      to ensure the accuracy and relevance of the content.
    </p>
  </div>
</section>



        {/* About Section */}
<section id="about" className="min-h-screen py-24 px-6">
  <div
    className={`max-w-4xl mx-auto transition-all duration-300 p-6 rounded-lg shadow-lg
      ${darkMode ? "bg-gray-900 text-green-100 border border-green-600" : "bg-white text-indigo-900 border border-indigo-200"}
    `}
  >
    <h2 className={`text-3xl font-bold mb-6 ${darkMode ? "text-green-300" : "text-indigo-700"}`}>
      About Me
    </h2>
    <p className="text-lg leading-relaxed">
      I’m <strong>Sandaruwan Kariyakarawana</strong>, a Final Year Software Engineering Undergraduate
      at KDU with a deep passion for building scalable, secure, and elegant web applications.
      I specialize in <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>,
      and cutting-edge concepts like <strong>Zero-Trust Architecture</strong> and <strong>AI-powered policy engines</strong>.
    </p>
    <p className="mt-4 text-base leading-relaxed">
      With hands-on experience in <strong>frontend frameworks</strong>, <strong>backend services</strong>,
      <strong>Supabase</strong>, <strong>JWT</strong> authentication, and <strong>UI/UX design</strong>,
      I love delivering products that are not only technically solid but also user-centric.
    </p>
    <p className="mt-4 text-base leading-relaxed">
      I’m a collaborative team player with a keen interest in emerging tech, cybersecurity,
      and design thinking, always looking for meaningful opportunities to innovate and grow.
    </p>
  </div>
</section>

{/* Projects Section */}
 <section id="projects" className="px-6 py-24 max-w-6xl mx-auto">
          <div
            className={`transition-all duration-300 p-6 rounded-lg shadow-lg
              ${darkMode ? "bg-gray-900 border border-green-600" : "bg-white border border-indigo-200"}
            `}
          >
            <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? "text-green-300" : "text-indigo-700"}`}>
              Projects
            </h2>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((proj, index) => (
                <ProjectCard
                  key={index}
                  title={proj.title}
                  description={proj.description}
                  techStack={proj.techStack}
                  imageUrl={proj.imageUrl}  // <-- works fine now
                  darkMode={darkMode}
                  projectLink={proj.projectLink}
                />
              ))}
            </div>
          </div>
        </section>



        <section id="experience" className="min-h-screen py-24 px-6">
          <h2 className={`text-3xl font-bold mb-6 ${darkMode ? "text-green-300" : "text-indigo-700"}`}>
            Experience
          </h2>
          <p className={`mb-10 ${darkMode ? "text-green-100" : "text-indigo-600"}`}>
            Software Engineering Undergraduate | Specializing in web technologies, backend logic, and scalable systems
          </p>

          {/* Cre8X Achievement Card */}
          <div
            className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl shadow-lg transition-all duration-300 border
              ${darkMode ? "bg-gray-900 border-green-600 text-green-100" : "bg-white border-indigo-200 text-indigo-800"}
            `}
          >
            {/* Image */}
            <img
              src={cre8xImage.src}
              alt="Cre8X 2024 Designathon"
              className={`w-full md:w-1/3 rounded-lg object-cover shadow-md transition-all
                ${darkMode ? "filter brightness-75 contrast-125" : "filter brightness-100 contrast-100"}
              `}
            />

            {/* Content */}
            <div className="md:w-2/3">
              <h3 className={`text-lg font-bold mb-3 ${darkMode ? "text-green-400" : "text-indigo-700"}`}>
                🏆 2nd Runner-Up - Cre8X 2024 Inter-University Designathon
              </h3>
              <p className="text-sm mb-2 leading-relaxed">
                🎉 Our team, <strong>Dare Devils</strong> from General Sir John Kotelawala Defence University,
                proudly secured the <strong>2nd Runner-Up</strong> position at <strong>Cre8X 2024</strong>, competing among nearly 100 teams and placing in the Top 10!
              </p>
              <p className="text-sm mb-2 leading-relaxed">
                Huge appreciation to my teammates <strong>Sachin Pitigala</strong> and <strong>Matheesha Ekanayake</strong>
                for the dedication and creativity throughout this journey.
              </p>
              <p className="text-sm leading-relaxed">
                Special thanks to <strong>BCS</strong>, <strong>KDU</strong>, and all partners for making this platform possible.
                This is just the beginning! 💪💡
              </p>

              {/* Hashtags */}
              <div className="flex flex-wrap gap-2 mt-4 text-xs">
                {[
                  "#Cre8X", "#Designathon", "#Innovation", "#TeamDareDevils", "#KDU", "#BCS", "#ProudMoment"
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-1 rounded-full font-mono
                      ${darkMode
                        ? "bg-green-800 text-green-100"
                        : "bg-indigo-100 text-indigo-700"}
                    `}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>



<section id="contact" className="min-h-screen py-24 px-6 flex flex-col items-center justify-center">
  <h2 className={`text-3xl font-bold mb-6 ${darkMode ? "text-green-300" : "text-indigo-700"}`}>
    Contact
  </h2>

  <form
    className={`w-full max-w-xl space-y-4 transition-all duration-300
      ${darkMode ? "bg-gray-900 text-green-100" : "bg-white text-indigo-800"}
      p-6 rounded-lg shadow-lg border 
      ${darkMode ? "border-green-600" : "border-indigo-200"}
    `}
  >
    <input
      type="text"
      placeholder="Your Name"
      className={`w-full p-3 rounded border transition
        ${darkMode ? "bg-gray-800 border-green-500 text-green-100 placeholder-green-300" : "bg-white border-indigo-300 text-indigo-900 placeholder-indigo-400"}
      `}
    />
    <input
      type="email"
      placeholder="Your Email"
      className={`w-full p-3 rounded border transition
        ${darkMode ? "bg-gray-800 border-green-500 text-green-100 placeholder-green-300" : "bg-white border-indigo-300 text-indigo-900 placeholder-indigo-400"}
      `}
    />
    <textarea
      placeholder="Message"
      className={`w-full p-3 h-32 rounded border transition
        ${darkMode ? "bg-gray-800 border-green-500 text-green-100 placeholder-green-300" : "bg-white border-indigo-300 text-indigo-900 placeholder-indigo-400"}
      `}
    />
    <button
      type="submit"
      className={`px-6 py-2 font-semibold rounded transition-colors
        ${darkMode ? "bg-green-500 hover:bg-green-600 text-black" : "bg-indigo-500 hover:bg-indigo-600 text-white"}
      `}
    >
      Send
    </button>
  </form>
</section>

      </div>
    </main>
  );
};

export default Home;