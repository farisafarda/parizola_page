import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contacts = [
  {
    icon: MapPin,
    label: 'Alamat',
    value: 'Rejosari, Kecamatan Dawe, Kabupaten Kudus, Jawa Tengah',
  },
  {
    icon: Phone,
    label: 'Telepon / WhatsApp',
    value: '+62 856-0220-6313',
    href: 'https://wa.me/6285602206313',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'parizolaofficial@gmail.com',
    href: 'mailto:parizolaofficial@gmail.com',
  },
  {
    icon: Clock,
    label: 'Jam Operasional',
    value: 'Selasa- Minggu, 08.00 - 17.00 WIB',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-primary-100 text-sm font-semibold mb-4 backdrop-blur-sm">
          Hubungi Kami
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance leading-tight">
          Siap Meningkatkan Kualitas Peternakan Anda?
        </h2>
        <p className="mt-5 text-lg text-primary-100/90 leading-relaxed max-w-2xl mx-auto">
          Hubungi tim PARIZOLA untuk informasi lebih lanjut tentang produk pakan ayam alami kami.
          Kami siap membantu menjawab pertanyaan Anda.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {contacts.map((item) => {
            const Icon = item.icon;
            const Card = item.href ? 'a' : 'div';
            return (
              <Card
                key={item.label}
                href={item.href}
                target={item.href ? '_blank' : undefined}
                rel={item.href ? 'noreferrer' : undefined}
                className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent-300" />
                </div>
                <div>
                  <div className="text-sm text-primary-200 font-medium">{item.label}</div>
                  <div className="text-white font-semibold mt-0.5">{item.value}</div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
