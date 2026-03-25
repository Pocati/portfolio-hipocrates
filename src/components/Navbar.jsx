import { Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-slate-800 bg-slate-950/50 backdrop-blur-md px-6 py-4 flex justify-between items-center">
            <span className="text-xl font-bold tracking-tighter text-white">
                Hipócrates Matheus  <span className="text-sky-500">Dev Front-End</span>
            </span>
            <div className="flex gap-6 items-center">
                <a
                    href="https://github.com/pocati"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-sky-400 transition-colors duration-300"
                    title="GitHub de Hipócrates Matheus"
                >
                    <Github size={22} />
                </a>

                <a
                    href="https://www.linkedin.com/in/hip%C3%B3crates-matheus-78054a213/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-sky-400 transition-colors duration-300"
                    title="LinkedIn de Hipócrates Matheus"
                >
                    <Linkedin size={22} />
                </a>

            </div>
        </nav>
    );
};

export default Navbar;