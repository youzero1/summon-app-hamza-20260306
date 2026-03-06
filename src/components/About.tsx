export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              We&apos;re building the future of work
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2020, Nexora has been on a mission to help businesses of all
              sizes unlock their full potential. We believe that great software should
              be accessible, powerful, and delightful to use.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of world-class engineers, designers, and business experts work
              tirelessly to build tools that make a real difference. Join over 10,000
              companies that trust Nexora to power their most critical workflows.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">10K+</div>
                <div className="text-sm text-gray-500 mt-1">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">99.9%</div>
                <div className="text-sm text-gray-500 mt-1">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-gray-500 mt-1">Integrations</div>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #7c3aed 100%)',
                aspectRatio: '4/3',
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <div className="text-7xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                <p className="text-blue-200 text-center">
                  Empowering teams to build extraordinary products through simplicity
                  and innovation.
                </p>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-xl">✓</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Trusted Worldwide</div>
                <div className="text-xs text-gray-500">By 10,000+ businesses</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">Customer Rating</div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm font-bold text-gray-900 ml-1">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
