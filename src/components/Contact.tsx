'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccess(null);
    setError(null);
    setSending(true);

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    setSending(false);

    if (res.ok) {
      setSuccess("Thank you! Your message has been sent.");
      form.reset();
    } else {
      const json = await res.json();
      setError(json.error || "Failed to send message.");
    }
  }

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col justify-between px-4 py-16" id="Contact">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center lg:text-start">Let’s Connect 👋</h2>
        <p className="text-gray-500 mb-8 text-center lg:text-start">
          I'd love to hear from you. Whether you have a question, a project idea, or just want to say hi — feel free to reach out.
        </p>

        {/* Contact Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-gray-700">Name</label>
            <input
              name="name"
              type="text"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
              placeholder="Your full name"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Message</label>
            <textarea
              name="message"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
              rows={5}
              placeholder="Tell me about your project or how I can help..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
          {success && <p className="text-green-600 text-center mt-4">{success}</p>}
          {error && <p className="text-red-600 text-center mt-4">{error}</p>}
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Emmanuel. All rights reserved.
      </footer>
    </section>
  );
}
