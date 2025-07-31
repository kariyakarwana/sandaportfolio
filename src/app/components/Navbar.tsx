"use client";

interface NavbarProps {
  darkMode: boolean;
}

const Navbar = ({ darkMode }: NavbarProps) => {
  return (
    <nav className={`fixed top-0 left-0 h-screen w-20 z-40 flex flex-col justify-between py-10 items-center border-r
      ${darkMode ? "bg-gray-900 border-green-400" : "bg-white/80 border-indigo-600"}
    `}>
      <div className={`${darkMode ? "text-green-400" : "text-indigo-600"} font-bold text-3xl`}>S</div>

      <div className="flex flex-row gap-6 rotate-90 mt-20">
        <a href="#home" className={`hover:underline ${darkMode ? "text-green-400" : "text-indigo-600"}`}>Home</a>
        <a href="#about" className={`hover:underline ${darkMode ? "text-green-400" : "text-indigo-600"}`}>About</a>
        <a href="#projects" className={`hover:underline ${darkMode ? "text-green-400" : "text-indigo-600"}`}>Projects</a>
        <a href="#experience" className={`hover:underline ${darkMode ? "text-green-400" : "text-indigo-600"}`}>Experience</a>
        <a href="#contact" className={`hover:underline ${darkMode ? "text-green-400" : "text-indigo-600"}`}>Contact</a>
      </div>

      <div className="flex flex-col items-center gap-3">
        <a href="#" className={`${darkMode ? "text-green-400" : "text-indigo-600"} text-xl`}>in</a>
        <a href="#" className={`${darkMode ? "text-green-400" : "text-indigo-600"} text-xl`}>tw</a>
      </div>
    </nav>
  );
};

export default Navbar;
