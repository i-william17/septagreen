import { motion } from 'framer-motion';
import ember from '../../../assets/ember.png';
import jenga from '../../../assets/jenga.png';
import longclause from '../../../assets/second.png';
import zivuko from '../../../assets/zivuko.png';
import remunary from '../../../assets/1-nobg.png';
import code from '../../../assets/logo-me.jpeg';

export default function ClientShowcase() {
  const clients = [
    { name: 'EmberPrise', logo: ember },
    { name: 'JengaWork', logo: jenga },
    { name: 'LongClause', logo: longclause },
    { name: 'Zivuko', logo: zivuko },
    { name: 'Remunary', logo: remunary },
    { name: 'Code', logo: code },
  ];

  const repeatedClients = [...clients, ...clients];

  return (
    <section className="overflow-hidden border-y border-[#20232e]/15 bg-[#faf6ee] py-16 text-[#20232e] dark:border-white/10 dark:bg-[#050608] dark:text-white md:py-20">
      <div className="sg-shell">
        <div className="grid gap-6 md:grid-cols-[0.55fr_1fr] md:items-end">
          <div>
            <h2 className="sg-heading text-3xl md:text-5xl">Built around ambitious African teams.</h2>
          </div>
          <p className="text-lg leading-relaxed text-[#5d6568] dark:text-white/60 md:text-right">
            Partners, builders, and early customers help shape a security practice that is practical, local, and ready for scale.
          </p>
        </div>
      </div>

      <div className="mt-12 overflow-hidden border-y border-[#20232e]/15 bg-[#fffdf8] dark:border-white/10 dark:bg-white/5">
        <motion.div className="sg-marquee flex w-max items-center gap-12 py-8">
          {repeatedClients.map((client, index) => (
            <div key={`${client.name}-${index}`} className="flex w-44 items-center justify-center border-r border-[#20232e]/10 pr-12 opacity-75 transition hover:opacity-100 dark:border-white/10">
              <img src={client.logo} alt={client.name} className="h-20 w-32 object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
