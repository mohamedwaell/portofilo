import React, { useState } from 'react'
const GITHUB_URL = "https://github.com/mohamedwaell";
const LINKEDIN_URL = "https://www.linkedin.com/in/mohamed-wael-9639bb344/";
const EMAIL_ADDRESS = "mhamedwaell22@gmail.com";
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function validateEmail(email) {
    return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus({ type: '', message: '' })
    const { name, email, message } = formData
    if (!name || !email || !message) {
      setStatus({ type: 'error', message: 'Please fill out all fields.' })
      return
    }
    if (!validateEmail(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }

    try {
      // Placeholder: open default mail client with prefilled content
      const subject = encodeURIComponent(`New message from ${name}`)
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)
      window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`
      setStatus({ type: 'success', message: 'Opening your email client to send the message…' })
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section id="contact" className="w-full mt-8 sm:mt-16">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold hero-heading">Get in touch</h2>
      <p className="mt-3 text-white/70">I’d love to hear about your project or collaboration.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-center gap-3 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-4 transition-all cursor-target"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white/90 group-hover:text-white">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.427 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.851.004 1.706.115 2.505.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.565 4.944.36.31.679.921.679 1.856 0 1.339-.012 2.419-.012 2.749 0 .268.18.58.688.481A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">GitHub</span>
        </a>

        <a
          href={`mailto:${EMAIL_ADDRESS}`}
          className="group flex items-center justify-center gap-3 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-4 transition-all cursor-target"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white/90 group-hover:text-white">
            <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75Z" />
            <path d="M2.91 6.28a.75.75 0 0 0-1.05 1.07l9.375 9.25a1.5 1.5 0 0 0 2.13 0l9.375-9.25a.75.75 0 0 0-1.05-1.07L12 15.25 2.91 6.28Z" fill="#060010" opacity=".2" />
          </svg>
          <span className="font-medium">Gmail</span>
        </a>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-center gap-3 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-4 transition-all cursor-target"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white/90 group-hover:text-white">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.9-2.8 3.8V24h-4V8z" />
          </svg>
          <span className="font-medium">LinkedIn</span>
        </a>
      </div>

      {/* Contact Form */}
      <div className="mt-10 text-left">
        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/15 bg-white/5 p-5 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm text-white/70">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="mt-1 w-full rounded-lg border border-white/15 bg-transparent px-3 py-2 outline-none focus:border-purple-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-white/70">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border border-white/15 bg-transparent px-3 py-2 outline-none focus:border-purple-500"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="block text-sm text-white/70">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me a bit about your project…"
              className="mt-1 w-full rounded-lg border border-white/15 bg-transparent px-3 py-2 outline-none focus:border-purple-500"
              required
            />
          </div>
          {status.message && (
            <p className={`mt-4 text-sm ${status.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
              {status.message}
            </p>
          )}
          <div className="mt-6">
            <button type="submit" className="px-5 py-3 bg-purple-700 hover:bg-purple-600 text-white font-medium rounded-lg transition-all cursor-target w-full sm:w-auto">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Contact
