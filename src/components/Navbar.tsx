import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { label: 'Keunggulan', href: '#benefits' },
  { label: 'Bahan', href: '#ingredients' },
  { label: 'Produk', href: '#products' },
  { label: 'Proses', href: '#process' },
  { label: 'Legalitas', href: '#legalitas' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg shadow-primary-900/5 border-b border-primary-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 sm:gap-3 group">
          {/* Ukuran container diperbesar menjadi w-16 h-16 untuk mobile, dan sm:w-20 sm:h-20 untuk desktop */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-105 transition-transform">
            <img
              src="/logo-parizola.png"
              alt="Logo PARIZOLA"
              /* p-0.5 dihapus dan ditambahkan scale-110 agar gambar lebih penuh */
              className="w-full h-full object-contain mix-blend-multiply scale-110"
            />
          </div>
          <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-primary-800">
            PARIZOLA
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-primary-700 hover:text-primary-900 rounded-lg hover:bg-primary-100/60 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 hover:-translate-y-0.5 transition-all"
          >
            Hubungi Kami
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg text-primary-800 hover:bg-primary-100"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden glass border-t border-primary-100 px-5 py-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg text-primary-700 hover:bg-primary-100 font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block px-4 py-3 rounded-lg bg-primary-600 text-white text-center font-semibold mt-2"
          >
            Hubungi Kami
          </a>
        </div>
      )}
    </header>
  );
}