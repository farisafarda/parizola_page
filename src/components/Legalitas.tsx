import { Award, BadgeCheck, Building2, ExternalLink, FlaskConical } from 'lucide-react';

const documents = [
  {
    icon: FlaskConical,
    title: 'Hasil Uji Lab',
    desc: 'Dokumen pengujian nutrisi dan kualitas produk PARIZOLA.',
    driveUrl: 'https://drive.google.com/',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Award,
    title: 'HKI',
    desc: 'Perlindungan kekayaan intelektual untuk merek dan inovasi produk.',
    driveUrl: 'https://drive.google.com/file/d/1QowgwExd0dixWpC1ljuw5c_nQL-WK8vo/view?usp=drive_link',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Building2,
    title: 'PT Perseorangan',
    desc: 'Legalitas badan usaha yang mendukung operasional PARIZOLA.',
    driveUrl: ' https://drive.google.com/file/d/12_dFZuj-DiFD_GRU-V2rF4oDTaAKFZzB/view?usp=drive_link',
    color: 'bg-primary-100 text-primary-600',
  },
  {
    icon: BadgeCheck,
    title: 'NIB',
    desc: 'Nomor Induk Berusaha sebagai identitas resmi pelaku usaha.',
    driveUrl: 'https://drive.google.com/file/d/19yORQ0BAiEO_7eoSgUYkX0Y7agduGfY3/view?usp=drive_link/',
    color: 'bg-emerald-100 text-emerald-600',
  },
];

export default function Legalitas() {
  return (
    <section id="legalitas" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            Legalitas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900 text-balance">
            Dokumen Pendukung PARIZOLA
          </h2>
          <p className="mt-4 text-lg text-primary-600">
            Kelengkapan dokumen usaha dan pengujian produk untuk memberikan rasa percaya kepada pelanggan.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc) => {
            const Icon = doc.icon;
            return (
              <a
                key={doc.title}
                href={doc.driveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Buka dokumen ${doc.title} di Google Drive`}
                className="group block rounded-2xl border border-primary-100 bg-primary-50/40 p-6 hover:border-primary-300 hover:bg-white hover:shadow-xl hover:shadow-primary-900/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className={`w-14 h-14 rounded-2xl ${doc.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" strokeWidth={2} />
                  </div>
                  <ExternalLink className="w-4 h-4 text-primary-400 group-hover:text-primary-600 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">{doc.title}</h3>
                <p className="text-sm text-primary-600 leading-relaxed">{doc.desc}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
