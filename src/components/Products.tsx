type Product = {
  name: string;
  originalPrice?: string;
  price: string;
  unit?: string;
  target?: string;
  highlight: boolean;
  image: string;
  badge?: string;
};

const products: Product[] = [
  {
    name: 'PARIZOLA 500 g',
    originalPrice: 'Rp 10.000',
    price: 'Rp 6.000',
    highlight: false,
    image: '/500g.jpg',
  },
  {
    name: 'PARIZOLA 1 Kg',
    originalPrice: 'Rp 16.000',
    price: 'Rp 11.000',
    highlight: false,
    image: '1kg.jpg',
    badge: 'Best Seller',
  },
  {
    name: 'PARIZOLA 5 KG',
    originalPrice: 'Rp 60.000',
    price: 'Rp 54.000',
    highlight: false,
    image: '5kg.jpg',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-primary-50 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            Produk Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900 text-balance">
            Pilihan Pakan untuk Kamu yang Ingin Ternak Ayam Lebih Sehat dan Produktif
          </h2>
          <p className="mt-4 text-lg text-primary-600">
            Tiga varian pakan PARIZOLA yang disesuaikan dengan kebutuhan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                p.highlight
                  ? 'bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-2xl shadow-primary-700/30 scale-105'
                  : p.badge === 'Best Seller'
                  ? 'bg-gradient-to-b from-emerald-700 via-emerald-800 to-emerald-900 text-white shadow-2xl shadow-emerald-900/30'
                  : 'bg-white border border-primary-100 hover:border-primary-300 hover:shadow-xl text-primary-900'
              }`}
            >
              {p.badge && (
                <div
                  className={`absolute top-4 right-4 z-10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${
                    p.highlight
                      ? 'bg-accent-400 text-primary-900'
                      : p.badge === 'Best Seller'
                      ? 'bg-amber-300 text-emerald-950'
                      : 'bg-primary-100 text-primary-700'
                  }`}
                >
                  {p.badge}
                </div>
              )}

              {/* Product image */}
              <div className="relative aspect-[4/4] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover hover:scale-95 transition-transform duration-500"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 ${
                    p.highlight
                      ? 'bg-gradient-to-t from-primary-800/80 via-primary-700/20 to-transparent'
                      : p.badge === 'Best Seller'
                      ? 'bg-gradient-to-t from-emerald-900/30 via-emerald-900/15 to-transparent'
                      : 'bg-gradient-to-t from-white/60 to-transparent'
                  }`}
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-extrabold mb-1">{p.name}</h3>
                {p.target && (
                  <p className={`text-sm mb-5 ${p.highlight ? 'text-primary-100' : 'text-primary-500'}`}>
                    {p.target}
                  </p>
                )}

                <div className="mb-6">
                  {p.originalPrice && (
                    <div
                      className={`text-sm font-semibold line-through mb-1 ${
                        p.highlight ? 'text-primary-200' : 'text-primary-400'
                      }`}
                    >
                      {p.originalPrice}
                    </div>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold">{p.price}</span>
                    <span className={`text-sm ${p.highlight ? 'text-primary-200' : 'text-primary-500'}`}>
                      {p.unit}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-primary-500 mt-8">
          *Harga dapat berubah sewaktu-waktu. Hubungi kami untuk informasi grosir &amp; diskon khusus.
        </p>
      </div>
    </section>
  );
}