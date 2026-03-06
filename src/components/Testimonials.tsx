interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechFlow Inc.',
    content:
      'Nexora has completely transformed how our engineering team operates. The platform is incredibly intuitive, and the analytics have given us insights we never had before. Highly recommend!',
    avatar: 'SJ',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Product Manager',
    company: 'GrowthLabs',
    content:
      "We've tried many platforms, but Nexora stands out for its reliability and ease of use. Our team adoption was nearly instant, and we saw a 40% productivity boost within the first month.",
    avatar: 'MR',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'CEO',
    company: 'StartupVenture',
    content:
      "As a startup, we needed something that could scale with us. Nexora delivered exactly that. The integrations saved us countless hours, and the support team is world-class.",
    avatar: 'EC',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Director of Operations',
    company: 'Enterprise Corp.',
    content:
      'The security features and compliance tools were exactly what our enterprise needed. Implementation was smooth, and ROI was evident within weeks.',
    avatar: 'DK',
    rating: 4,
  },
  {
    name: 'Lisa Thompson',
    role: 'Head of Marketing',
    company: 'BrandForce',
    content:
      'The analytics dashboard is a game-changer. I can now make data-driven decisions in real-time instead of waiting for weekly reports. It has fundamentally changed our workflow.',
    avatar: 'LT',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Lead Developer',
    company: 'DevStudio',
    content:
      "The API is clean, well-documented, and a joy to work with. Integration with our existing stack took less than a day. That's impressive engineering.",
    avatar: 'JW',
    rating: 5,
  },
];

const avatarColors = [
  'bg-blue-500',
  'bg-purple-500',
  'bg-green-500',
  'bg-red-500',
  'bg-yellow-500',
  'bg-indigo-500',
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Loved by thousands of teams
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our customers have to say about
            Nexora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed mb-6">&ldquo;{testimonial.content}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                    avatarColors[index % avatarColors.length]
                  }`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
