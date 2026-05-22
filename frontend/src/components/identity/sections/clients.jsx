import { motion } from 'framer-motion';
import ember from '../../../assets/ember.png';
import jenga from '../../../assets/jenga.png';
import longclause from '../../../assets/second.png';
import zivuko from '../../../assets/zivuko.png';
import remunary from '../../../assets/1-nobg.png';
import code from '../../../assets/logo-me.jpeg';
import { useSitePreferences } from '../../../context/SitePreferences';

export default function ClientShowcase() {
  const { text } = useSitePreferences();
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
    <section className="overflow-hidden bg-[#f3f7f6] py-16 text-[#20232e] dark:bg-[#050608] dark:text-white md:py-20">
      <div className="sg-shell">
        <div className="grid gap-6 md:grid-cols-[0.55fr_1fr] md:items-end">
          <div>
            <p className="sg-kicker font-bold text-[#0068B8]">{text.identity.clientsKicker}</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">{text.identity.clientsTitle}</h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-white/60 md:text-right">
            {text.identity.clientsBody}
          </p>
        </div>
      </div>

      <div className="mt-12 overflow-hidden border-y border-[#20232e]/10 bg-white dark:border-white/10 dark:bg-white/5">
        <motion.div className="sg-marquee flex w-max items-center gap-12 py-8">
          {repeatedClients.map((client, index) => (
            <div key={`${client.name}-${index}`} className="flex w-44 items-center justify-center opacity-75 transition hover:opacity-100">
              <img src={client.logo} alt={client.name} className="h-20 w-32 object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
