import React, { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from '../context/useLanguage';

const MoSugarLogo = ({ className = '' }) => (
  <svg aria-hidden="true" className={`block h-5 w-auto ${className}`} viewBox="0 0 129.79 27.71" xmlns="http://www.w3.org/2000/svg">
    <g fill="currentColor">
      <path d="M26.16,1.81v18.28h-3.41v-10.06l-4.66,10.06h-1.79l-4.65-10.11v10.12h-3.41V1.81h3.07l5.9,12.54L23.09,1.81h3.07Z"/>
      <path d="M32.05,19.58c-1-.57-1.77-1.38-2.33-2.42-.56-1.04-.83-2.24-.83-3.59s.28-2.53.85-3.58c.56-1.05,1.34-1.86,2.33-2.44.99-.58,2.12-.87,3.38-.87s2.4.29,3.39.86,1.78,1.38,2.34,2.43.85,2.25.85,3.6-.28,2.52-.85,3.56-1.34,1.85-2.34,2.43-2.13.87-3.39.87-2.4-.29-3.39-.86h-.01ZM37.64,16.31c.55-.68.82-1.59.82-2.73s-.27-2.06-.82-2.74-1.28-1.03-2.2-1.03-1.63.34-2.17,1.03-.82,1.6-.82,2.74.27,2.05.81,2.73c.54.68,1.26,1.01,2.18,1.01s1.65-.34,2.2-1.01Z"/>
      <path d="M54.83,19.73c-1.15-.48-2.07-1.17-2.74-2.07-.68-.9-1.05-1.97-1.12-3.2h3.72c.1.88.52,1.59,1.24,2.12s1.66.79,2.82.79c1.09,0,1.96-.22,2.6-.66s.96-1.05.96-1.83c0-1.13-.8-1.87-2.39-2.24l-3.75-.81c-1.54-.35-2.73-.92-3.56-1.72s-1.25-1.83-1.25-3.1c0-1.09.29-2.05.86-2.89.57-.83,1.39-1.48,2.46-1.95s2.31-.7,3.73-.7c2.12,0,3.84.51,5.18,1.52,1.34,1.01,2.07,2.43,2.21,4.25h-3.69c-.17-1.8-1.39-2.71-3.64-2.71-1.04,0-1.86.19-2.47.57s-.91.92-.91,1.61c0,.55.2.99.6,1.3.4.31,1.02.56,1.87.75l3.62.81c3.31.71,4.97,2.36,4.97,4.94,0,1.21-.3,2.27-.91,3.16s-1.47,1.57-2.58,2.04c-1.11.47-2.4.7-3.88.7s-2.79-.24-3.94-.71v.03Z"/>
      <path d="M80.7,7.02v13.08h-2.73l-.36-1.85c-.94,1.46-2.39,2.18-4.37,2.18-1.51,0-2.64-.46-3.41-1.37-.76-.91-1.14-2.35-1.14-4.33v-7.72h3.46v7.72c0,.83.19,1.45.56,1.86s.89.61,1.55.61c.83,0,1.53-.31,2.11-.94s.86-1.51.86-2.65v-6.61h3.48v.02Z"/>
      <path d="M96.26,7.02v12.02c0,2.41-.58,4.21-1.74,5.41-1.16,1.2-2.75,1.79-4.76,1.79-1.77,0-3.21-.42-4.32-1.25s-1.73-2.09-1.87-3.77h3.22c.14.64.46,1.14.96,1.51s1.12.55,1.85.55c.99,0,1.77-.34,2.34-1.01.57-.68.86-1.6.86-2.76v-.52c-.94.97-2.14,1.46-3.62,1.46-1.21,0-2.29-.29-3.21-.86s-1.65-1.38-2.16-2.42c-.51-1.04-.77-2.25-.77-3.62s.27-2.6.82-3.64,1.27-1.83,2.18-2.38,1.89-.82,2.95-.82c.83,0,1.61.17,2.33.52.72.35,1.32.82,1.81,1.43l.26-1.64h2.87ZM92.8,12.19c-.19-.75-.54-1.33-1.05-1.76-.51-.42-1.15-.64-1.91-.64-.99,0-1.77.34-2.35,1.03s-.87,1.6-.87,2.74.29,2.05.87,2.73,1.37,1.01,2.38,1.01c.76,0,1.41-.2,1.94-.59s.86-.94,1-1.65v-2.89.02Z"/>
      <path d="M108.87,8.04c.99.91,1.48,2.29,1.48,4.15v7.91h-2.73l-.34-1.74c-.38.55-.95,1.04-1.69,1.46s-1.6.62-2.55.62c-1.37,0-2.47-.35-3.3-1.04-.83-.69-1.25-1.63-1.25-2.81,0-1.02.34-1.85,1.01-2.47.68-.62,1.62-1.1,2.82-1.42s2.73-.58,4.56-.77v-.18c0-.75-.19-1.3-.56-1.66s-.91-.55-1.6-.55-1.24.18-1.62.53c-.39.36-.58.8-.58,1.34h-3.46c0-.9.24-1.71.73-2.43.49-.72,1.16-1.28,2.03-1.69.87-.41,1.86-.61,2.97-.61,1.73,0,3.09.46,4.08,1.37h0ZM105.83,17.19c.57-.48.93-1.13,1.07-1.95v-1.04c-1.61.09-2.82.31-3.63.68-.81.36-1.21.88-1.21,1.56,0,.49.17.85.51,1.11.34.25.78.38,1.31.38.73,0,1.38-.24,1.95-.73h0Z"/>
      <path d="M121.53,6.73l-.16,3.48c-.33-.14-.76-.21-1.30-.21-.57,0-1.12.13-1.65.4-.53.27-.96.65-1.29,1.16s-.49,1.08-.49,1.74v6.79h-3.49V7.01h2.89l.29,1.85c.99-1.46,2.45-2.18,4.4-2.18.29,0,.56.02.81.05h0Z"/>
    </g>
  </svg>
);

const inputClass =
  'w-full rounded-[10px] border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-[0.88rem] text-[var(--text)] outline-none [transition:border-color_0.2s] focus:border-[var(--border-accent)]';

const BUILT_WITH = [
  { name: 'React',         className: 'text-[#61dafb] bg-[#61dafb12] border-[#61dafb28]' },
  { name: 'Vite',          className: 'text-[#a78bfa] bg-[#a78bfa12] border-[#a78bfa28]' },
  { name: 'Framer Motion', className: 'text-[#ff4d9e] bg-[#ff4d9e12] border-[#ff4d9e28]' },
  { name: 'Tailwind CSS',  className: 'text-[#38bdf8] bg-[#38bdf812] border-[#38bdf828]' },
  { name: 'Formspree',     className: 'text-[#f97316] bg-[#f9731612] border-[#f9731628]' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const Footer = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [state, handleSubmit] = useForm('xjyydkwn');

  return (
    <footer
      id="contact"
      ref={ref}
      className="bg-[var(--surface)] px-[clamp(1.5rem,6vw,6rem)] pt-[clamp(5rem,10vw,9rem)] pb-[clamp(2rem,4vw,3rem)]"
    >
      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="mx-auto max-w-[1100px]"
      >
        {/* Top */}
        <div className="mb-20 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-16">

          {/* Left — Contact form */}
          <div>
            <motion.p variants={fadeUp} className="section-label mb-4">
              {t.footer.label}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="m-0 mb-4 font-display text-[clamp(2rem,4vw,2.8rem)] leading-[1.1] font-bold tracking-[-0.02em] text-[var(--text)]"
            >
              {t.footer.h2a}<br />
              <span className="text-[var(--accent-light)]">{t.footer.h2b}</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mb-7 text-[0.9rem] leading-[1.7] text-[var(--text-2)]">
              {t.footer.tagline}
            </motion.p>

            <AnimatePresence mode="wait">
              {state.succeeded ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3 rounded-xl border border-[rgba(34,197,94,0.3)] bg-[rgba(34,197,94,0.07)] p-5 text-[0.9rem] text-[#86efac]"
                >
                  <CheckCircle size={18} className="shrink-0" aria-hidden="true" />
                  {t.footer.form.success}
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  variants={fadeUp}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3"
                >
                  <div className="grid grid-cols-[1fr_1fr] gap-3">
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder={t.footer.form.name}
                      aria-label={t.footer.form.name}
                      autoComplete="name"
                      className={inputClass}
                    />
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder={t.footer.form.email}
                      aria-label={t.footer.form.email}
                      autoComplete="email"
                      className={inputClass}
                    />
                    <ValidationError field="email" errors={state.errors} className="col-span-full text-[0.78rem] text-[#f87171]" />
                  </div>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder={t.footer.form.message}
                    aria-label={t.footer.form.message}
                    className={`${inputClass} min-h-[110px] resize-y`}
                  />
                  <ValidationError field="message" errors={state.errors} className="text-[0.78rem] text-[#f87171]" />

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="btn-electric inline-flex w-fit cursor-pointer items-center justify-center gap-2 rounded-[10px] border-none bg-none px-7 py-[0.8rem] text-[0.9rem] font-semibold text-[var(--text)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <Send size={14} aria-hidden="true" />
                    {state.submitting ? t.footer.form.sending : t.footer.form.send}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Right — Links */}
          <div>
            <motion.p variants={fadeUp} className="section-label mb-6">
              {t.footer.findMe}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              {[
                { href: 'https://github.com/Mosugar', label: 'GitHub', sub: 'github.com/Mosugar', icon: Github },
                { href: 'https://www.linkedin.com/in/mohamedsekkar/', label: 'LinkedIn', sub: 'in/mohamedsekkar', icon: Linkedin },
                { href: 'mailto:mohamedsekkar1110@gmail.com', label: 'Email', sub: 'mohamedsekkar1110@gmail.com', icon: Mail },
              ].map(({ href, label, sub, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-5 py-4 no-underline [transition:all_0.2s] hover:-translate-y-[2px] hover:border-[var(--border-accent)]"
                >
                  <div className="flex size-9 items-center justify-center rounded-lg border border-[var(--border-accent)] bg-[rgba(139,92,246,0.1)]">
                    <Icon size={16} className="text-[var(--accent-light)]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-[0.9rem] font-medium text-[var(--text)]">{label}</div>
                    <div className="text-[0.78rem] text-[var(--text-3)]">{sub}</div>
                  </div>
                  <ArrowUpRight size={14} className="ml-auto text-[var(--text-3)]" aria-hidden="true" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-5 border-t border-[var(--border)] pt-8"
        >
          {/* Top row: logo + copyright */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <a href="#" aria-label={t.a11y.backToTop} onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <MoSugarLogo className="cursor-pointer text-[var(--text-3)] [transition:color_0.2s] hover:text-[var(--text)]" />
            </a>
            <p className="m-0 text-[0.8rem] text-[var(--text-3)]">
              © {new Date().getFullYear()} Mohamed Sekkar · {t.footer.copyright}
            </p>
          </div>

          {/* Built with */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[0.72rem] text-[var(--text-3)]">
              {t.footer.builtWith}
            </span>
            {BUILT_WITH.map(({ name, className }) => (
              <span
                key={name}
                className={`rounded-full border px-[0.55rem] py-[0.18rem] text-[0.68rem] font-medium tracking-[0.01em] ${className}`}
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
