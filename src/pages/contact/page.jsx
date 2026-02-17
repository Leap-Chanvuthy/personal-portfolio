import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiArrowUpRight } from "react-icons/fi";
import Metatag from "../../components/resusable/meta-tag";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const { t } = useTranslation("meta");

  return (
    <div className="relative my-28 overflow-hidden">
      <Metatag
        title={t("contact.title")}
        description={t("contact.description")}
      />

      {/* Gradient graphic background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-10 h-64 w-64 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-sky-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-400/15 via-primary/15 to-purple-500/15 blur-3xl" />
      </div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2 items-center"
      >
        {/* Text / hero section */}
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Let&apos;s collaborate
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {t("contact.title").replace("|", "·")}
          </h1>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            {t("contact.description")}
          </p>
          <p className="text-slate-700 dark:text-slate-200 mb-8 max-w-md">
            Tell me about your idea, product, or team. I love turning complex
            problems into simple, elegant digital experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:leapchanvuthy16@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <FiMail className="text-lg" />
              <span>Email me directly</span>
              <FiArrowUpRight className="text-base" />
            </a>

            <a
              href="https://www.linkedin.com/in/leap-chanvuthy-9402b8282/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-100 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-colors duration-200"
            >
              <FiLinkedin className="text-lg" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Glassmorphism contact card */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="relative rounded-3xl border border-white/40 dark:border-slate-700/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl shadow-2xl shadow-slate-900/10 p-6 md:p-7">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-1">
                  Preferred channels
                </p>
                <h2 className="text-lg font-semibold">Say hello 👋</h2>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
                LC
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200/60 dark:border-slate-700/80 bg-slate-50/80 dark:bg-slate-900/60 px-4 py-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FiMail />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                    Email
                  </p>
                  <a
                    href="mailto:leapchanvuthy16@gmail.com"
                    className="text-sm font-medium text-slate-900 dark:text-slate-50 hover:text-primary break-all"
                  >
                    leapchanvuthy16@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-slate-200/60 dark:border-slate-700/80 bg-slate-50/80 dark:bg-slate-900/60 px-4 py-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
                  <FiLinkedin />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/leap-chanvuthy-9402b8282/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-slate-900 dark:text-slate-50 hover:text-primary break-all"
                  >
                    linkedin.com/in/leap-chanvuthy
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3 text-xs text-slate-400 dark:text-slate-500">
              <p>Average response time: &lt; 24 hours</p>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for freelance &amp; full-time</span>
              </div>
            </div>
          </div>

          {/* Floating accent graphic */}
          <div className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-3xl bg-gradient-to-tr from-primary/40 to-secondary/40 blur-xl opacity-70" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
