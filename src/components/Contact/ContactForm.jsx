import { useState } from 'react';
import useMagnetic from '../../hooks/useMagnetic';
import { countryCodes } from '../../data/countryCodes';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm = {
  name: '',
  email: '',
  countryCode: '+92',
  phone: '',
  query: '',
};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Please enter your name.';
  if (!form.email.trim()) errors.email = 'Please enter your email.';
  else if (!EMAIL_RE.test(form.email.trim())) errors.email = 'Enter a valid email address.';
  if (!form.phone.trim()) errors.phone = 'Please enter your phone number.';
  else if (!/^[0-9\s-]{6,15}$/.test(form.phone.trim())) errors.phone = 'Enter a valid phone number.';
  if (!form.query.trim()) errors.query = 'Tell us a little about your query.';
  return errors;
}

const fieldBase =
  'w-full bg-white border border-line rounded-xl px-4 py-3 text-navy placeholder:text-slate/40 outline-none transition-all duration-300 focus:border-accent focus:ring-4 focus:ring-accent/10';

function Field({ label, error, children, htmlFor }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-navy/80 mb-2">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs font-medium text-red-500">{error}</p>}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const submitRef = useMagnetic();

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => (e[field] ? { ...e, [field]: undefined } : e));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitted(true);
    setForm(initialForm);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-line shadow-2xl p-8 sm:p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display font-extrabold text-2xl text-navy mb-3">Message sent</h3>
        <p className="text-slate/70 leading-relaxed mb-8 max-w-sm mx-auto">
          Thanks for reaching out. Our sourcing team will get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-line text-navy font-semibold text-sm hover:border-accent hover:text-accent transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-line shadow-2xl p-6 sm:p-10"
    >
      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <Field label="Full name" error={errors.name} htmlFor="cf-name">
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={fieldBase}
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
          />
        </Field>

        <Field label="Email address" error={errors.email} htmlFor="cf-email">
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldBase}
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
          />
        </Field>
      </div>

      <div className="mb-6">
        <Field label="Phone number" error={errors.phone} htmlFor="cf-phone">
          <div className="flex gap-3">
            <select
              aria-label="Country code"
              className={`${fieldBase} w-[120px] sm:w-[150px] shrink-0 cursor-pointer`}
              value={form.countryCode}
              onChange={(e) => update('countryCode', e.target.value)}
            >
              {countryCodes.map((c) => (
                <option key={c.iso} value={c.dial}>
                  {c.iso} {c.dial}
                </option>
              ))}
            </select>
            <input
              id="cf-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              placeholder="300 000 0000"
              className={`${fieldBase} flex-1`}
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
            />
          </div>
        </Field>
      </div>

      <div className="mb-8">
        <Field label="Your query" error={errors.query} htmlFor="cf-query">
          <textarea
            id="cf-query"
            rows={5}
            placeholder="Tell us about the products, quantities or sourcing needs you'd like help with..."
            className={`${fieldBase} resize-none`}
            value={form.query}
            onChange={(e) => update('query', e.target.value)}
          />
        </Field>
      </div>

      <button
        ref={submitRef}
        type="submit"
        className="btn-primary magnetic w-full sm:w-auto text-white font-bold text-sm px-9 py-4 rounded-full transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
