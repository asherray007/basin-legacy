export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Basin Legacy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral-300">
            Crafting Timeless Homes. Building Your Legacy.
          </p>
          <a
            href="tel:4325305153"
            className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-neutral-200 transition"
          >
            Call Now
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6">About Basin Legacy</h2>
          <p className="text-neutral-400 mb-4 leading-relaxed">
            Founded and led by <strong>Mr. C</strong>, Basin Legacy specializes
            in luxury home building and residential development. We are
            committed to precision craftsmanship, premium materials, and
            timeless architectural design.
          </p>
          <p className="text-neutral-400 leading-relaxed">
            Our mission is simple: build homes that stand the test of time and
            reflect the legacy of the families who live in them.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          alt="Construction Site"
          className="rounded-2xl shadow-xl h-80 w-full object-cover"
        />
      </section>

      {/* Services Section */}
      <section className="bg-neutral-900 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-950 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">
                Custom Home Building
              </h3>
              <p className="text-neutral-400">
                Luxury homes designed and built with precision and premium
                materials.
              </p>
            </div>

            <div className="bg-neutral-950 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">
                Residential Development
              </h3>
              <p className="text-neutral-400">
                Full-scale property development focused on quality and long-term
                value.
              </p>
            </div>

            <div className="bg-neutral-950 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">
                Project Management
              </h3>
              <p className="text-neutral-400">
                Professional oversight ensuring timelines, budgets, and
                excellence are maintained.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
            alt="Luxury Home"
            className="rounded-2xl shadow-xl h-64 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1588854337118-7b1e9b2e4a09"
            alt="Modern House"
            className="rounded-2xl shadow-xl h-64 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1599423300746-b62533397364"
            alt="Construction Project"
            className="rounded-2xl shadow-xl h-64 w-full object-cover"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-neutral-900 py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Start Your Project</h2>
        <p className="text-neutral-300 mb-4">
          Contact Mr. C and the Basin Legacy team today.
        </p>
        <p className="text-xl font-semibold mb-6">(432) 530-5153</p>
        <a
          href="tel:4325305153"
          className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-neutral-200 transition"
        >
          Call Now
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-neutral-800 text-neutral-500 text-sm">
        © {new Date().getFullYear()} Basin Legacy. All rights reserved.
      </footer>
    </main>
  );
}