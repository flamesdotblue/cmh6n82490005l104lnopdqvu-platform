import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
          <span className="text-lg font-semibold tracking-tight">Taskmation</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <a href="#services" className="transition hover:text-white">Solutions</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
          <a href="#demo" className="rounded-md bg-white text-black px-4 py-2 font-medium transition hover:bg-white/90">Book a demo</a>
        </nav>
        <a href="#demo" className="md:hidden rounded-md bg-white text-black px-3 py-2 text-sm font-medium">Demo</a>
      </div>
    </header>
  );
};

export default Navbar;
