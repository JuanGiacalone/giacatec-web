'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, MessageCircle, Loader2 } from 'lucide-react';

export default function ContactPage() {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const phoneNumber = "5492236694722";

  const message = lang === 'es'
    ? "Hola, me gustaría obtener más información sobre sus servicios."
    : "Hello, I would like to get more information about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formsubmit.co/ajax/b102e02f1bd0a7891efe05cc2a446b05', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New website inquiry from ${formData.name}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="font-outfit text-4xl md:text-5xl font-bold text-pantone-blue dark:text-white mb-4">{t.contact.title}</h1>
        <p className="text-lg text-pantone-text/70 dark:text-white/70 max-w-2xl mx-auto">{t.contact.desc}</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-[#1E1E1E] p-6 md:p-8 rounded-3xl shadow-sm border border-pantone-text/5 dark:border-white/5"
        >
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-pantone-text dark:text-white mb-1.5">{t.contact.form.name}</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-pantone-text/20 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-pantone-blue/50 dark:focus:ring-pantone-coral/50 bg-pantone-bg/50 dark:bg-[#2B2B2B] dark:text-white disabled:opacity-50 transition-colors"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-pantone-text dark:text-white mb-1.5">{t.contact.form.email}</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-pantone-text/20 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-pantone-blue/50 dark:focus:ring-pantone-coral/50 bg-pantone-bg/50 dark:bg-[#2B2B2B] dark:text-white disabled:opacity-50 transition-colors"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-pantone-text dark:text-white mb-1.5">{t.contact.form.message}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="w-full px-4 py-3 text-sm rounded-xl border border-pantone-text/20 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-pantone-blue/50 dark:focus:ring-pantone-coral/50 bg-pantone-bg/50 dark:bg-[#2B2B2B] dark:text-white resize-none disabled:opacity-50 transition-colors"
                placeholder="..."
                required
              />
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex justify-center items-center bg-pantone-blue text-white w-full py-3.5 rounded-xl font-medium hover:bg-pantone-blue/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    {lang === 'es' ? 'Enviando...' : 'Sending...'}
                  </>
                ) : (
                  t.contact.form.submit
                )}
              </button>

              {/* ARIA Live Region for Form Status */}
              <div aria-live="polite" className="min-h-[20px] text-center flex items-center justify-center">
                {status === 'success' && (
                  <p className="text-sm text-green-600 font-medium">
                    {lang === 'es' ? '¡Mensaje enviado con éxito!' : 'Message sent successfully!'}
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-red-600 font-medium">
                    {lang === 'es' ? 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.' : 'There was an error sending the message. Please try again.'}
                  </p>
                )}
              </div>
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-8 justify-center"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-pantone-coral/10 rounded-full flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-pantone-coral" />
            </div>
            <div>
              <h3 className="font-outfit font-semibold text-xl text-pantone-blue dark:text-white mb-1">{t.contact.info.email}</h3>
              <p className="text-pantone-text/70 dark:text-white/70">hola@giacatec.com.ar</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-pantone-coral/10 rounded-full flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-pantone-coral" />
            </div>
            <div>
              <h3 className="font-outfit font-semibold text-xl text-pantone-blue dark:text-white mb-1">{t.contact.info.phone}</h3>
              <p className="text-pantone-text/70 dark:text-white/70">+54 9 (223) 6694722</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-pantone-coral/10 rounded-full flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-pantone-coral" />
            </div>
            <div>
              <h3 className="font-outfit font-semibold text-xl text-pantone-blue dark:text-white mb-1">{t.contact.info.office}</h3>
              <p className="text-pantone-text/70 dark:text-white/70">Mar del Plata<br />Argentina</p>
            </div>
          </div>

          <div className="w-full h-px bg-pantone-text/10 dark:bg-white/10 my-2"></div>

          <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-2xl shadow-sm border border-[#25D366]/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <h3 className="font-outfit font-semibold text-xl text-pantone-blue dark:text-white mb-1">{t.contact.info.whatsapp}</h3>
                <p className="text-pantone-text/70 dark:text-white/70 mb-4 text-sm">{t.contact.info.whatsappDesc}</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#20bd5a] transition-colors text-sm"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  {t.contact.info.whatsappBtn}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
