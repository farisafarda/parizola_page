import { Sprout, FlaskConical, Package, Truck } from 'lucide-react';

const steps = [
  {
    icon: Sprout,
    title: 'Budidaya Bahan',
    desc: 'Azolla dibudidayakan di kolam khusus dan Parijoto ditanam organik tanpa pestisida.',
  },
  {
    icon: FlaskConical,
    title: 'Formulasi & Uji',
    desc: 'Bahan diformulasi dengan takaran optimal dan diuji kualitas nutrisinya di laboratorium.',
  },
  {
    icon: Package,
    title: 'Produksi & Kemasan',
    desc: 'Diproduksi dengan standar higienis dan dikemas dalam kemasan kedap udara untuk menjaga kesegaran.',
  },
  {
    icon: Truck,
    title: 'Distribusi',
    desc: 'Dikirim langsung ke peternakan Anda dengan kualitas terjaga dan tepat waktu.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            Proses Produksi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900 text-balance">
            Dari Kebun ke Kandang Ayam Anda
          </h2>
          <p className="mt-4 text-lg text-primary-600">
            Setiap tahap produksi dijaga kualitasnya untuk menghasilkan pakan terbaik.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200" />

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="relative text-center">
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white border-2 border-primary-200 shadow-lg shadow-primary-900/5 mb-5 hover:border-primary-400 hover:shadow-xl transition-all hover:scale-105">
                  <Icon className="w-10 h-10 text-primary-600" strokeWidth={1.8} />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary-600 text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{s.title}</h3>
                <p className="text-sm text-primary-600 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
