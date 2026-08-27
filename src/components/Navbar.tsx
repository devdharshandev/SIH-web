import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, ExternalLink, Sparkles, ChevronRight, LogIn } from 'lucide-react';
import { APP_CONFIG } from '../config';

interface NavbarProps {
  onOpenPortal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPortal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#problem' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Technology', href: '#technology' },
    { name: 'Impact', href: '#impact' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-lg shadow-slate-950/20' 
          : 'bg-slate-900 text-white border-b border-slate-800/80'
      }`}
    >
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-950 border-b border-blue-900/40 text-[11px] py-1.5 px-4 text-center text-blue-200">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 font-medium tracking-wide">
          <span className="inline-flex items-center gap-1 bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full text-[10px] font-bold border border-blue-400/30 uppercase">
            SIH 2026 Prototype
          </span>
          <span className="hidden sm:inline">Problem Statement: 26034 • Legal Metrology (Packaged Commodities) Rules, 2011 Compliance</span>
          <span className="sm:hidden">PS: 26034 • Legal Metrology</span>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left Side: Logo & Name */}
        <a 
          href="#hero" 
          id="nav-logo"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-600/30 group-hover:scale-105 transition">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-blue-400 transition">
                PACKCHECK AI
              </span>
            </div>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 hidden sm:block">
              Legal Metrology Compliance
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition"
            >
              {link.name}
            </a>
          ))}
          
          {/* Interactive Demo Link */}
          <a
            href="#demo-section"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 hover:bg-cyan-900/60 rounded-full transition ml-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Live Demo
          </a>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            id="nav-login-btn"
            onClick={onOpenPortal}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition"
          >
            <LogIn className="w-3.5 h-3.5 text-slate-400" />
            LOGIN
          </button>

          <button
            type="button"
            id="nav-open-portal-btn"
            onClick={onOpenPortal}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-sm shadow-blue-500/20 hover:shadow-blue-500/40 transition active:scale-95"
          >
            <span>OPEN INSPECTION PORTAL</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="#demo-section"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 rounded-lg"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Try Live Interactive Simulator
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal();
              }}
              className="inline-flex items-center justify-center gap-2 w-full py-3 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md transition"
            >
              <span>OPEN INSPECTION PORTAL</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
