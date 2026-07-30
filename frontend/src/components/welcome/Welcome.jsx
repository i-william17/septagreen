import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import expFiveNoImage from '../../assets/exp5-no.png';
import heroImage from '../../assets/an2.jpg';

export default function Welcome() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.45],
    ['0%', '8%']
  );

  const titleY = useTransform(
    scrollYProgress,
    [0, 0.45],
    ['0%', '-8%']
  );

  return (
    <section className="relative overflow-hidden bg-[#f5efe3] text-[#17191b] dark:bg-[#050608] dark:text-white">
      {/* Full-screen top area */}
      <div className="relative flex h-[100svh] flex-col">
        <div className="pointer-events-none absolute inset-0 sg-grid-pattern opacity-70 dark:opacity-20" />

        {/* Headline area */}
        <div className="sg-shell-wide relative z-10 flex flex-1 pt-28 md:pt-40">
          <motion.div
            style={shouldReduceMotion ? undefined : { y: titleY }}
            className="flex w-full flex-1 items-end border-t border-[#17191b]/20 pb-10 pt-12 dark:border-white/20 md:pb-14 md:pt-16"
          >
            <motion.h1
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 34,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.38,
              }}
              className="sg-display max-w-6xl break-words text-[#111315] dark:text-white"
            >
              Cybersecurity intelligence for Africa&apos;s digital builders.
            </motion.h1>
          </motion.div>
        </div>

        {/* Brand information band */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 28,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="relative z-10 shrink-0 overflow-visible border-y border-black/15 bg-[#024414] text-white dark:border-white/15"
        >
          <div className="sg-shell-wide grid gap-8 py-8 md:gap-10 md:py-10 lg:h-[38svh] lg:items-center xl:grid-cols-[minmax(0,0.92fr)_minmax(340px,0.8fr)]">
            <div className="max-w-[42rem]">
              <p className="sg-body-large text-white">
                SeptaGreen helps teams build, test, and monitor digital systems
                before attackers turn weak points into business disruption.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/request-assessment"
                  className="sg-button border-white bg-white text-[#111315] hover:bg-transparent hover:text-white"
                >
                  Request assessment
                  <FiArrowRight className="ml-2" />
                </Link>

                <Link
                  to="/services/penetration-testing"
                  className="sg-button border-white bg-transparent text-white hover:bg-white hover:text-[#024414]"
                >
                  Explore services
                </Link>
              </div>
            </div>

            <div
              className="hidden xl:block"
              aria-hidden="true"
            />
          </div>

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.58,
              delay: 0.58,
            }}
            className="absolute bottom-0 right-0 hidden h-[220%] max-w-none xl:block"
            style={{ aspectRatio: '2 / 3' }}
            aria-hidden="true"
          >
            <span className="pointer-events-none absolute bottom-0 right-full z-20 h-[45.455%] w-[50%] bg-white" />
            <img
              src={expFiveNoImage}
              alt=""
              className="relative z-10 h-full w-full object-contain"
              draggable="false"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Existing image section — unchanged */}
      <div className="sg-shell-wide relative z-10 pb-8 pt-16 md:pb-12 md:pt-24">
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 28,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.55,
          }}
          className="relative"
        >
          <div className="relative overflow-hidden border border-[#20232e]/[0.16] bg-[#151718] dark:border-white/[0.12]">
            <motion.img
              src={heroImage}
              alt="Cybersecurity operations workspace"
              style={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: heroY,
                      scale: 1.04,
                    }
              }
              className="h-[500px] w-full object-cover opacity-100 md:h-[660px]"
            />

            <div className="absolute inset-0 bg-[#151718]/[0.12]" />

            <div className="absolute bottom-0 left-0 right-0 grid border-t border-white/15 bg-[#151718]/[0.92] text-white backdrop-blur sm:grid-cols-3">
              {[
                {
                  value: '24/7',
                  label: 'security response posture',
                },
                {
                  value: '12+',
                  label: 'assessment disciplines',
                },
                {
                  value: '3',
                  label: 'delivery tracks: build, test, monitor',
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border-b border-white/10 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 md:p-6"
                >
                  <p className="sg-heading text-4xl md:text-5xl">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
