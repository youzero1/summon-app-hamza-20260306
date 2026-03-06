'use client';

export default function CallToAction() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="cta"
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #7c3aed 100%)',
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full transform -translate-x-32 translate-y-32" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-white bg-opacity-20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
          Limited Time Offer
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Ready to transform
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
            your business?
          </span>
        </h2>

        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
          Join thousands of companies already using Nexora. Start your free 14-day trial
          today — no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="bg-white text-primary-700 px-10 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Start Free Trial
          </button>
          <button
            onClick={scrollToContact}
            className="border-2 border-white border-opacity-50 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-200"
          >
            Talk to Sales
          </button>
        </div>

        <p className="mt-8 text-blue-300 text-sm">
          No credit card required · Free 14-day trial · Cancel anytime
        </p>
      </div>
    </section>
  );
}
