import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
            <span className="text-base font-semibold">Taskmation</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-white/70">
            <a href="#services" className="hover:text-white">Solutions</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="mailto:hello@taskmation.ai" className="hover:text-white">Email</a>
          </nav>
        </div>
        <div className="mt-6 text-xs text-white/50">
          © {new Date().getFullYear()} Taskmation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
