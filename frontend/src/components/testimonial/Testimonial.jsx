import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar, FiUser } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Dr. Nia Muthoni',
    role: 'CTO, KopaTech',
    content:
      'SeptaGreen helped us move from scattered vulnerability reports to a clear security roadmap. The executive summary was as useful as the technical detail.',
    highlight: 'Reduced fraud incidents by 78%',
  },
  {
    name: 'David Mwangi',
    role: 'Founder, eShamba',
    content:
      'We needed a security partner who understood growth, payments, and African operating realities. The team gave us practical fixes without slowing product delivery.',
    highlight: 'Zero data breaches in 12 months',
  },
  {
    name: 'Grace Atieno',
    role: 'CEO, TrueHealth Africa',
    content:
      'Their application testing was precise, well documented, and easy for our engineers to act on. It improved our platform and our board reporting.',
    highlight: 'Compliance readiness in under 3 months',
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section className="relative overflow-hidden bg-white py-20 text-[#20232e] dark:bg-[#20232e] dark:text-white md:py-28">
      <div className="absolute inset-0 sg-grid-pattern opacity-45" />
      <div className="sg-shell relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="sg-kicker font-bold text-[#0068B8]">Testimonials</p>
            <h2 className="sg-section-title mt-4 font-black">Clear communication, technical depth, stronger defenses.</h2>
          </div>
          <p className="sg-body-large text-gray-600 dark:text-white/60">
            Security buyers need proof that a partner can speak to engineers, operators, and leadership. This section now carries that proof with stronger hierarchy.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.42fr]">
          <div className="relative overflow-hidden bg-[#20232e] p-6 text-white md:p-10">
            <div className="flex gap-2 text-[#0068B8]">
              {[...Array(5)].map((_, index) => (
                <FiStar key={index} className="fill-current" />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.45 }}
              >
                <blockquote className="mt-8 text-3xl font-bold leading-tight md:text-5xl">“{active.content}”</blockquote>
                <div className="mt-10 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#20232e]">
                    <FiUser className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">{active.name}</p>
                    <p className="text-sm text-white/60">{active.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-3">
              <button onClick={prevTestimonial} className="rounded-full border border-white/20 p-3 transition hover:border-[#00B51D]" aria-label="Previous testimonial">
                <FiChevronLeft />
              </button>
              <button onClick={nextTestimonial} className="rounded-full border border-white/20 p-3 transition hover:border-[#00B51D]" aria-label="Next testimonial">
                <FiChevronRight />
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`border p-5 text-left transition ${
              activeIndex === index
                ? 'border-[#0068B8] bg-[#0068B8]/10 dark:bg-[#0068B8]/10'
                : 'border-gray-200 bg-white hover:border-[#0068B8] dark:border-white/10 dark:bg-white/5'
            }`}
          >
                <p className="text-sm font-bold text-[#0068B8]">0{index + 1}</p>
                <p className="mt-3 text-xl font-bold text-[#20232e] dark:text-white">{testimonial.highlight}</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-white/50">{testimonial.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
