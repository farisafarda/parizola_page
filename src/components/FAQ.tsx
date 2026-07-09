import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Apakah PARIZOLA benar-benar 100% alami?',
    a: 'Ya. PARIZOLA dibuat dari Azolla dan Parijoto yang dibudidayakan secara organik tanpa pestisida, hormon, atau antibiotik kimia. Semua bahan alami dan aman.',
  },
  {
    q: 'Berapa lama penyimpanan pakan PARIZOLA?',
    a: 'Dalam kemasan kedap udara, pakan PARIZOLA dapat bertahan hingga 3 bulan di tempat sejuk dan kering. Setelah dibuka, sebaiknya habiskan dalam 2 minggu.',
  },
  {
    q: 'Apakah pakan ini cocok untuk semua jenis ayam?',
    a: 'PARIZOLA cocok untuk semua jenis ayam, termasuk ayam pedaging, petelur, dan ayam kampung.',
  },
  {
    q: 'Bagaimana cara pemesanan?',
    a: 'Anda dapat memesan dengan menghubungi kami langsung via WhatsApp. Kami melayani pemesanan eceran maupun grosir dengan pengiriman ke seluruh Indonesia.',
  },
  {
    q: 'Apakah ada minimum pemesanan?',
    a: 'Tidak ada minimum untuk pembelian bisa grosir maupun eceran. Hubungi kami untuk informasi lebih lanjut.',
  },
  {
    q: 'Apakah PARIZOLA sudah teruji laboratorium?',
    a: 'Ya, setiap batch produksi kami uji kandungan nutrisinya di laboratorium terpercaya untuk memastikan kualitas dan keamanan pakan sebelum didistribusikan.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900 text-balance">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all ${
                open === i
                  ? 'border-primary-300 bg-primary-50/50 shadow-md'
                  : 'border-primary-100 bg-white hover:border-primary-200'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-semibold text-primary-900">{f.q}</span>
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 text-primary-500 transition-transform ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-5 pb-5 text-primary-600 leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
