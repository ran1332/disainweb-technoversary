export default function Hero() {
  return (
    <section className="relative pt-32 pb-28 bg-linear-to-br from-emerald-700 to-lime-500 text-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>

      <div className="relative max-w-5xl mx-auto text-center px-6">
        
        <h1 className="text-7xl font-extrabold leading-tight drop-shadow-xl">
          Selamatkan Bumi,
          <span className="text-lime-300"> Mulai dari Dirimu</span>
        </h1>

        <p className="mt-6 text-xl opacity-90 max-w-3xl mx-auto">
          Alam yang kita jaga hari ini adalah warisan terbaik untuk generasi berikutnya.
        </p>


        <img
          className="mx-auto mt-14 w-80 drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
