'use client';

import { useLanguage } from '@/components/LanguageContext';
import { motion } from 'motion/react';

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-outfit text-4xl font-bold text-pantone-blue mb-8">{t.terms.title}</h1>
        <div className="prose prose-lg prose-slate max-w-none text-pantone-text/80">
          <p>{t.terms.content}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h2 className="text-pantone-blue font-outfit text-2xl font-semibold mt-8 mb-4">Uso de los Servicios</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2 className="text-pantone-blue font-outfit text-2xl font-semibold mt-8 mb-4">Limitación de Responsabilidad</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
