import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative pt-40 pb-20 px-6 md:px-0 bg-transparent overflow-hidden">
      {/* 3D Safety Atmos Foundation */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="glass-frosted p-12 md:p-20 rounded-[4rem] border-white/40 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Brand Intelligence Shell */}
            <div className="space-y-10">
              <Link to="/" className="logo flex items-center group">
                <div className="relative h-16 w-16 glass-frosted p-1 rounded-2xl border-white/20 flex items-center justify-center overflow-hidden group-hover:rotate-12 group-hover:scale-110 transition-transform shadow-xl">
                  <img src="/logo.png" alt="VV Safety" className="object-contain p-2" />
                </div>

                <div className="ml-5 flex flex-col">
                  <span className="text-3xl font-black tracking-tighter leading-none text-gray-900">VARATHA VINAYAGAR</span>
                  <span className="text-[9px] font-black uppercase tracking-[0.5em] text-primary leading-none mt-2">SAFETY & FIRE PROTOCOL</span>
                </div>
              </Link>
              
              <p className="text-gray-500 font-black tracking-widest text-[11px] uppercase leading-relaxed italic max-w-sm">
                “Never Trust Fire! Trust Varatha Vinayagar Safety & Fire - Your Structural Integrity Guard.”
              </p>

              <div className="glass-frosted border-primary/20 bg-primary/5 p-6 rounded-3xl flex items-center gap-6 shadow-inner group/gst grow-0 inline-flex">
                <div className="w-12 h-12 glass-frosted rounded-xl flex items-center justify-center border-primary/20 group-hover/gst:scale-110 transition-transform">
                   <ShieldCheck className="text-primary" size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] font-black tracking-[0.3em] text-primary uppercase">GSTIN REGISTERED</span>
                  <span className="text-sm font-black text-gray-900 tabular-nums">33FOCPP2123C1ZJ</span>
                </div>
              </div>
            </div>

            {/* Support Protocol */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:col-span-2">
              <div className="space-y-10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-gray-400 flex items-center">
                  Navigation <div className="h-[1px] w-10 bg-gray-200 ml-4" />
                </h4>
                <div className="flex flex-col space-y-4">
                  {['Home', 'About Us', 'Services', 'Products', 'Contact'].map(link => (
                    <Link 
                      key={link} 
                      to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '')}`}
                      className="text-gray-400 hover:text-primary transition-all text-[11px] font-black uppercase tracking-[0.3em] flex items-center group"
                    >
                      <span className="w-2 h-[1px] bg-gray-200 group-hover:bg-primary group-hover:w-4 mr-4 transition-all" />
                      {link}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-gray-400 flex items-center">
                  Sync Data Terminals <div className="h-[1px] w-10 bg-gray-200 ml-4" />
                </h4>
                <div className="flex flex-col space-y-6">
                  <a href="tel:+919944677149" className="flex items-center gap-4 group/contact">
                    <div className="w-10 h-10 glass-frosted rounded-xl flex items-center justify-center border-gray-100 group-hover/contact:bg-primary group-hover/contact:border-primary transition-all">
                      <Phone size={16} className="text-primary group-hover/contact:text-white" />
                    </div>
                    <span className="text-sm font-black text-gray-900 tracking-tighter tabular-nums">+91 99446 77149</span>
                  </a>
                  <a href="mailto:varathavinayagar1989@gmail.com" className="flex items-center gap-4 group/contact">
                    <div className="w-10 h-10 glass-frosted rounded-xl flex items-center justify-center border-gray-100 group-hover/contact:bg-primary group-hover/contact:border-primary transition-all">
                      <Mail size={16} className="text-primary group-hover/contact:text-white" />
                    </div>
                    <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest break-all">varathavinayagar1989@gmail.com</span>
                  </a>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=112Q%2F3%2C+Muthukrishnapuram+2nd+Street%2C+Tuticorin" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-4 group/contact"
                  >
                    <div className="w-10 h-10 glass-frosted rounded-xl flex items-center justify-center border-gray-100 group-hover/contact:bg-primary group-hover/contact:border-primary transition-all">
                      <MapPin size={16} className="text-primary group-hover/contact:text-white" />
                    </div>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-relaxed">112Q/3, Muthukrishnapuram 2nd Street, Tuticorin</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[8px] font-black uppercase tracking-[0.5em] text-gray-400 text-center gap-4">
            <p>&copy; {new Date().getFullYear()} VV Safety & Fire. Protocol Status: SECURE</p>
            <p className="md:border-l border-gray-100 md:pl-6 text-primary">Reliability | Integrity | Structural Protection</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
