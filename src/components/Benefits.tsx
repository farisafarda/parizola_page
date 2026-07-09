import { HeartPulse, Sprout, Coins, Recycle, Egg, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: HeartPulse,
    title: 'Meningkatkan Daya Tahan Tubuh Ayam',
    desc: 'Kandungan nutrisi seimbang meningkatkan imunitas dan menurunkan angka kematian ayam.',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    icon: Sprout,
    title: 'Mendukung Pertumbuhan Ayam',
    desc: 'Protein nabati tinggi dari Azolla mempercepat pertumbuhan dan bobot ayam.',
    color: 'bg-primary-100 text-primary-600',
  },
  {
    icon: Egg,
    title: 'Membantu Produktivitas Ternak',
    desc: 'Kandungan antioksidan yang tinggi pada Parijoto dapat dimanfaatkan sebagai tambahan pakan ternak unggas.',
    color: 'bg-accent-100 text-accent-600',
  },
  {
    icon: Coins,
    title: 'Hemat Biaya',
    desc: 'Bahan baku lokal membuat pakan lebih terjangkau dibanding pakan komersial.',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: Recycle,
    title: 'Ramah Lingkungan',
    desc: 'Azolla menyerap CO₂ dan Parijoto tumbuh subur dalam siklus pertanian berkelanjutan.',
    color: 'bg-teal-100 text-teal-600',
  },
  {
    icon: ShieldCheck,
    title: 'Bebas Bahan Kimia',
    desc: 'Tanpa antibiotik, hormon, atau bahan kimia berbahaya. Aman untuk konsumsi keluarga.',
    color: 'bg-blue-100 text-blue-600',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 sm:py-28 bg-primary-50 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            Keunggulan PARIZOLA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900 text-balance">
            Mengapa Memilih PARIZOLA?
          </h2>
          <p className="mt-4 text-lg text-primary-600">
            manfaat utama yang membuat PARIZOLA menjadi pilihan terbaik untuk peternakan Anda.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="group bg-white rounded-2xl p-7 border border-primary-100 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-900/5 hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl ${b.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">{b.title}</h3>
                <p className="text-primary-600 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
