export default function Home() {
  return (
    <main className="bg-[#0f0f0f] text-white">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Luxury Home Construction"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Basin Legacy
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-200">
            Luxury Custom Home Building & Development in Odessa, Texas
          </p>
          <a
            href="#contact"
            className="bg-[#6b0f1a] hover:bg-[#8a1c2c] transition px-8 py-4 text-lg font-semibold rounded"
          >
            Request a Consultation
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-[#8a1c2c]">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Custom Home Building</h3>
            <p className="text-gray-400">
              We design and construct high-quality custom homes tailored to your lifestyle and vision.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Residential Development</h3>
            <p className="text-gray-400">
              Full-scale residential development projects built with precision, integrity, and craftsmanship.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Project Management</h3>
            <p className="text-gray-400">
              From concept to completion, we oversee every detail to ensure excellence at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-[#1a1a1a] px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#8a1c2c]">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6" className="rounded-lg" />
          <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde" className="rounded-lg" />
          <img src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c" className="rounded-lg" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-[#8a1c2c]">
          About Basin Legacy
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Basin Legacy is a premier custom home builder serving Odessa, Texas and surrounding areas.
          We are committed to superior craftsmanship, timeless design, and uncompromising quality.
          Our mission is to create homes that stand as lasting legacies for generations to come.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-[#1a1a1a] px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-[#8a1c2c]">
          Start Your Project
        </h2>
        <p className="text-lg mb-4 text-gray-300">
          Call us directly to begin your consultation.
        </p>
        <p className="text-2xl font-semibold text-white">
          432-530-5153
        </p>
      </section>

      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Basin Legacy. All rights reserved.
      </footer>

    </main>
  );
}