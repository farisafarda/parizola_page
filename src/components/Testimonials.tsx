import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ishhh',
    role: 'Peternak Ayam Rumahan',
    location: 'Kudus, Jawa Tengaah',
    text: 'Sejak pakai PARIZOLA, ayam saya lebih sehat dan pertumbuhannya cepat. Sangat puas!',
    rating: 5,
  },
  {
    name: 'Solikhul Hadi',
    role: 'Peternak Ayam Rumahan',
    location: 'Kudus, Jawa Tengah',
    text: 'saya tidak perlu meracik sendiri untuk ayam saya, MANTABB👍',
    rating: 5,
  },
  {
    name: 'bayu',
    role: 'Peternak Ayam Rumahan',
    location: 'Kudus, Jawa Tengah',
    text: 'Ayam saya lahap makanya, ga gampang sakit, top lah pokoknya',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-primary-50 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900 text-balance">
            Kata Mereka yang Sudah Merasakan
          </h2>
          <p className="mt-4 text-lg text-primary-600">
            Sudah banyak peternak telah membuktikan kualitas PARIZOLA.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-white rounded-2xl p-7 border border-primary-100 hover:shadow-xl hover:shadow-primary-900/5 transition-all hover:-translate-y-1"
            >
              <Quote className="w-10 h-10 text-primary-200 absolute top-6 right-6" fill="currentColor" />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-400 text-accent-400" />
                ))}
              </div>

              <p className="text-primary-700 leading-relaxed mb-6 relative z-10">"{t.text}"</p>

              <div className="pt-4 border-t border-primary-100">
                <div className="font-bold text-primary-900">{t.name}</div>
                <div className="text-sm text-primary-500">
                  {t.role} · {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
