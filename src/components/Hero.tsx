import { ArrowRight, Leaf, Recycle, ShieldCheck, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-primary-100/40 to-accent-50/30" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-primary-300/20 blur-3xl animate-float" />
      <div className="absolute -bottom-20 -left-32 w-[400px] h-[400px] rounded-full bg-accent-300/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left content */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-primary-200 text-primary-700 text-sm font-medium mb-6 shadow-sm">
            <Leaf className="w-4 h-4 text-primary-600" />
            100% Bahan Alami & Ramah Lingkungan
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-primary-900 text-balance">
            <span className="gradient-text">PARIZOLA </span> Pakan Ayam organik dari Azolla &amp; Parijoto
          </h1>

          <p className="mt-6 text-lg text-primary-700/90 max-w-xl leading-relaxed">
            PARIZOLA menghadirkan pakan ayam premium dengan kandungan protein tinggi dari Azolla
            dan antibakteri dari Parijoto. Sehat untuk ayam, aman untuk konsumsi, dan lestari untuk bumi.
          </p>

          <div className="mt-8">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 shadow-xl shadow-primary-600/30 hover:shadow-primary-600/50 hover:-translate-y-0.5 transition-all"
            >
              Lihat Produk
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6 max-w-xs">
            {[
              { value: '18%', label: 'Protein Tinggi' },
              { value: '100%', label: 'Bahan Alami' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl font-extrabold text-primary-700">{s.value}</div>
                <div className="text-xs sm:text-sm text-primary-600 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual - Gambar sekarang bersih tanpa lapisan hijau */}
        <div className="relative animate-grow">
          <div className="relative aspect-square max-w-lg mx-auto">
            {/* Main card - bg-white dan shadow tetap ada agar kartu tetap menarik */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-white shadow-2xl shadow-primary-700/30 overflow-hidden flex items-center justify-center">
              <img
                src="/parizola-all.jpg"
                alt="Ayam sehat dengan pakan alami PARIZOLA"
                className="w-full h-full object-contain p-6"
                loading="eager"
              />
            </div>

            {/* Floating badge - top */}
            <div className="absolute -top-4 -left-4 sm:-left-8 glass rounded-2xl px-5 py-4 shadow-xl border border-emerald-200 bg-emerald-50/80 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-200 flex items-center justify-center">
                  <Recycle className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <div className="text-sm font-bold text-emerald-900">Ramah Lingkungan</div>
                  <div className="text-xs text-emerald-600">100% Alami</div>
                </div>
              </div>
            </div>

            {/* Floating badge - bottom */}
            <div className="absolute -bottom-4 -right-4 sm:-right-8 glass rounded-2xl px-5 py-4 shadow-xl border border-white/40 animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary-900">Tanpa Kimia</div>
                  <div className="text-xs text-primary-600">Aman &amp; alami</div>
                </div>
              </div>
            </div>

            {/* Rating badge */}
            <div className="absolute top-1/2 -right-6 sm:-right-10 -translate-y-1/2 glass rounded-2xl px-4 py-3 shadow-xl border border-white/40">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <div className="text-xs font-semibold text-primary-800">4.9/5 Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,40 C360,100 1080,0 1440,60 L1440,100 L0,100 Z" fill="#f0f9f4" />
        </svg>
      </div>
    </section>
  );
} 
