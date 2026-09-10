import { Check } from 'lucide-react';

const ingredients = [
  {
    name: 'Azolla',
    subtitle: 'Microphylla',
    tagline: 'Superfood Protein Nabati',
    description:
      'Azolla adalah pakis air kecil yang tumbuh cepat dan kaya protein (18%), asam amino esensial, vitamin A & B12, serta mineral. Sebagai pakan ayam, Azolla meningkatkan pertumbuhan dan menurunkan biaya pakan hingga 30%.',
    nutrients: [
      { label: 'Protein', value: '18%' },
      { label: 'Serat', value: '10-15%' },
      { label: 'Mineral', value: '8-12%' },
    ],
    benefits: [
      'Pertumbuhan ayam lebih cepat',
      'Meningkatkan kekebalan tubuh ayam',
      'Sumber protein berkelanjutan',
    ],
    image: '/Azolla.jpeg',
    accent: 'from-primary-500 to-primary-700',
  },
  {
    name: 'Parijoto',
    subtitle: 'Medinilla speciosa',
    tagline: 'Buah Ajaib Kaya Antioksidan',
    description:
      'Parijoto adalah tanaman endemik dengan buah yang kaya antioksidan, antosianin, dan senyawa antimikroba alami. Kandungannya membantu menjaga kesehatan pencernaan ayam, meningkatkan kualitas telur, dan bertindak sebagai antibiotik alami.',
    nutrients: [
      { label: 'Antosianin', value: 'Tinggi' },
      { label: 'Antioksidan', value: 'Sangat Tinggi' },
      { label: 'Vitamin C', value: 'Melimpah' },
    ],
    benefits: [
      'Antioksidan alami untuk ayam',
      'Antimikroba alami pengganti antibiotik',
    ],
    image: '/parijoto.jpeg',
    accent: 'from-accent-500 to-earth-600',
  },
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-4">
            Bahan Baku Pilihan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900 text-balance">
            Dua Bahan Alami, Satu Kebaikan
          </h2>
          <p className="mt-4 text-lg text-primary-600">
            Kombinasi sempurna Azolla dan Parijoto menghasilkan pakan ayam bernutrisi tinggi.
          </p>
        </div>

        <div className="space-y-20">
          {ingredients.map((ing, idx) => (
            <div
              key={ing.name}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/10">
                  <img
                    src={ing.image}
                    alt={ing.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${ing.accent} opacity-20 mix-blend-multiply`} />
                </div>
                {/* Floating nutrient card */}
                <div className="absolute -bottom-6 left-6 right-6 sm:left-8 sm:right-auto sm:max-w-xs glass rounded-2xl p-5 shadow-xl border border-white/40">
                  <div className="text-xs font-semibold text-primary-500 uppercase tracking-wide mb-3">
                    Kandungan Nutrisi
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {ing.nutrients.map((n) => (
                      <div key={n.label}>
                        <div className="text-lg font-extrabold text-primary-800">{n.value}</div>
                        <div className="text-xs text-primary-500">{n.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="text-sm font-semibold text-accent-600 uppercase tracking-wide mb-2">
                  {ing.tagline}
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-primary-900 mb-1">
                  {ing.name}
                </h3>
                <p className="text-sm italic text-primary-500 mb-5">{ing.subtitle}</p>
                <p className="text-primary-700 leading-relaxed mb-6">{ing.description}</p>
                <ul className="space-y-3">
                  {ing.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-primary-600" strokeWidth={3} />
                      </span>
                      <span className="text-primary-700">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
