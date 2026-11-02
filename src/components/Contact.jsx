import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

export default function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    const form = formRef.current
    const firstName = form?.querySelector('#firstName')?.value?.trim() || ''
    const lastName = form?.querySelector('#lastName')?.value?.trim() || ''
    const email = form?.querySelector('#email')?.value?.trim() || ''
    const message = form?.querySelector('#message')?.value?.trim() || ''

    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const isConfigured =
      Boolean(
        emailjsConfig.serviceId &&
          emailjsConfig.templateId &&
          emailjsConfig.publicKey,
      ) &&
      emailjsConfig.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      emailjsConfig.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      emailjsConfig.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      const subject = `Portfolio Contact from ${firstName} ${lastName}`
      const body = `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(
          subject,
        )}&body=${encodeURIComponent(body)}`,
        '_blank',
      )
      setStatus('success')
      form?.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form,
        emailjsConfig.publicKey,
      )
      setStatus('success')
      form?.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 4000)
  }

  const instagramHref =
    socialLinks.instagram || 'https://www.instagram.com'

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Behind: Giant Parallax "Contact" Word (div, not h1) */}
      <motion.div
        style={{ y }}
        className="absolute top-10 left-6 right-6 pointer-events-none z-0 select-none overflow-hidden"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter scale-y-[1.6] origin-top text-white/5 whitespace-nowrap"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* In Front: Red Card Aligned to the Right */}
      <div
        data-aos="fade-up"
        className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] ml-auto p-8 md:p-16 relative z-10 text-white rounded-tl-3xl shadow-2xl"
      >
        {/* Header Row */}
        <div className="flex items-center justify-between border-b border-white/20 pb-6 mb-10">
          <span className="uppercase tracking-[0.2em] text-xs font-bold text-red-100 select-none">
            Reach Me
          </span>
          <a
            href={
              instagramHref.startsWith('http')
                ? instagramHref
                : `https://${instagramHref}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold tracking-wider transition-colors inline-flex items-center gap-2"
          >
            <span>DM on Instagram</span>
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-10"
        >
          {/* Two-Column Form Layout on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Inputs */}
            <div className="flex flex-col gap-8">
              <div>
                <input
                  id="firstName"
                  name="first_name"
                  type="text"
                  required
                  placeholder="First Name *"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  id="lastName"
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="Email Address *"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Right Textarea */}
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Your Message *"
                className="w-full h-full min-h-[140px] resize-none bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-6 pt-4 border-t border-white/20">
            {/* Consent Checkbox */}
            <label className="flex items-start gap-3 text-xs text-white/90 cursor-pointer select-none">
              <input
                type="checkbox"
                required
                defaultChecked
                className="mt-0.5 accent-black rounded"
              />
              <span>
                I consent to having this website store my submitted information
                so they can respond to my inquiry.
              </span>
            </label>

            {/* Information Notice & Direct Email */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-red-100/90">
              <p>
                Your message will be sent directly to my inbox. I typically
                respond within 24-48 hours.
              </p>
              <a
                href={`mailto:${personalInfo.emails.primary}`}
                className="underline underline-offset-2 hover:text-white transition-colors whitespace-nowrap"
              >
                Need urgent reply? Email me
              </a>
            </div>

            {/* Dynamic Submit Pill Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`rounded-full px-8 py-3.5 font-semibold text-sm transition-all duration-300 inline-flex items-center gap-3 cursor-pointer ${
                  status === 'sending'
                    ? 'bg-black/30 border border-white/20 text-white/70 cursor-wait'
                    : status === 'success'
                      ? 'bg-emerald-600 border border-emerald-400 text-white shadow-lg'
                      : status === 'error'
                        ? 'bg-red-900 border border-red-700 text-white shadow-lg'
                        : 'bg-transparent border border-white text-white hover:bg-white hover:text-[#ff2a2a] group shadow-md'
                }`}
              >
                {status === 'sending' && (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Sending...</span>
                  </>
                )}

                {status === 'success' && <span>Sent Successfully ✓</span>}

                {status === 'error' && <span>Failed — Try Again</span>}

                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

