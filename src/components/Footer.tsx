import { Leaf, Facebook, Instagram, Mail } from 'lucide-react';

// Komponen icon kustom untuk TikTok bergaya outline (menyesuaikan gaya lucide-react)
const TiktokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-primary-800">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-extrabold text-xl text-white">PARIZOLA</span>
            </div>
            <p className="text-sm text-primary-300 leading-relaxed max-w-xs">
              Pakan ayam alami berbahan Azolla dan Parijoto. Bergizi tinggi, ramah lingkungan,
              dan menghasilkan ayam sehat untuk Indonesia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Navigasi</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Keunggulan', href: '#benefits' },
                { label: 'Bahan Baku', href: '#ingredients' },
                { label: 'Produk', href: '#products' },
                { label: 'Proses', href: '#process' },
                { label: 'Legalitas', href: '#legalitas' },
                { label: 'FAQ', href: '#faq' },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-primary-300 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-white mb-4">Produk</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#products" className="text-primary-300 hover:text-white transition-colors">PARIZOLA 500 g</a></li>
              <li><a href="#products" className="text-primary-300 hover:text-white transition-colors">PARIZOLA 1 Kg</a></li>
              <li><a href="#products" className="text-primary-300 hover:text-white transition-colors">PARIZOLA 5 Kg</a></li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="font-bold text-white mb-4">Hubungi Kami</h4>
            <ul className="space-y-2.5 text-sm text-primary-300">
              <li>parizolaofficial@gmail.com</li>
              <li>+62 856-0220-6313</li>
              <li>Kudus, Jawa Tengah</li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              {[
                { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/share/1QR7o5NxS8/' },
                { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/parizolacenter?igsh=aHJrMTR1ODhpNjU=' },
                { icon: TiktokIcon, label: 'TikTok', href: 'https://www.tiktok.com/@parizolacenter?_r=1&_t=ZS-94U5Nm2oFCD' },
                { icon: Mail, label: 'Email', href: 'mailto:parizolaofficial@gmail.com' },
              ].map((s) => {
                const Icon = s.icon;
                const isEmail = s.label === 'Email';
                
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl bg-primary-800 hover:bg-primary-700 flex items-center justify-center transition-colors hover:scale-105"
                  >
                    <Icon className="w-4.5 h-4.5 text-primary-200" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-400">
          <p>&copy; {new Date().getFullYear()} PARIZOLA. Semua hak dilindungi.</p>
          <p>Dibuat dengan kepedulian untuk peternakan Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}