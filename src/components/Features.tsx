interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description:
      'Optimized for performance from the ground up. Your users get a blazing fast experience every time they visit.',
    color: 'bg-yellow-50 border-yellow-200',
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    description:
      'Bank-grade encryption and security protocols keep your data safe. SOC 2 compliant with regular audits.',
    color: 'bg-green-50 border-green-200',
  },
  {
    icon: '📊',
    title: 'Powerful Analytics',
    description:
      'Get deep insights into your business with real-time dashboards and comprehensive reporting tools.',
    color: 'bg-blue-50 border-blue-200',
  },
  {
    icon: '🔄',
    title: 'Seamless Integrations',
    description:
      'Connect with 500+ tools your team already uses. From Slack to Salesforce, we integrate seamlessly.',
    color: 'bg-purple-50 border-purple-200',
  },
  {
    icon: '🤝',
    title: 'Team Collaboration',
    description:
      'Work together in real-time with your team. Share projects, assign tasks, and stay in sync effortlessly.',
    color: 'bg-pink-50 border-pink-200',
  },
  {
    icon: '🌍',
    title: 'Global Scale',
    description:
      'Deploy to multiple regions worldwide. Serve customers with low latency no matter where they are.',
    color: 'bg-indigo-50 border-indigo-200',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform provides all the tools and features you need to build, grow,
            and scale your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`card-hover rounded-2xl border-2 p-8 ${feature.color} cursor-default`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
