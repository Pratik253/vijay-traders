'use client';
import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Navigation, Mail, Send } from 'lucide-react';

const hours = [
  { day: 'Monday – Saturday', time: '9:00 AM – 7:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 4:00 PM' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open WhatsApp with pre-filled message
    const msg = encodeURIComponent(
      `Hello Vijay Traders!\n\nName: ${formData.name}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/919422773072?text=${msg}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0d0d0d 0%, #0a0a0a 100%)',
      }}
    >
      {/* BG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 70% 30%, rgba(232,98,26,0.04) 0%, transparent 50%)`,
        }}
      />

      <div className="container-xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-badge mx-auto">Contact Us</div>
          <h2
            className="font-display font-black mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}
          >
            Visit or{' '}
            <span className="text-gradient">Call Us Today</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            We&apos;re here to help with any building material need. Stop by, call, or WhatsApp us.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Info Panel */}
          <div className="space-y-6">
            {/* Quick Action Buttons */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href="tel:9422773072"
                className="flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-200 hover:scale-105"
                style={{
                  background: 'rgba(245,166,35,0.1)',
                  border: '1px solid rgba(245,166,35,0.25)',
                }}
              >
                <Phone size={22} style={{ color: '#f5a623' }} />
                <span className="text-xs font-semibold text-white">Call Now</span>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>9422773072</span>
              </a>
              <a
                href="https://wa.me/919422773072"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-200 hover:scale-105"
                style={{
                  background: 'rgba(34,197,94,0.08)',
                  border: '1px solid rgba(34,197,94,0.2)',
                }}
              >
                <MessageCircle size={22} style={{ color: '#22c55e' }} />
                <span className="text-xs font-semibold text-white">WhatsApp</span>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Chat Now</span>
              </a>
              <a
                href="https://maps.google.com/?q=Vijay+Traders+Yawal+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-200 hover:scale-105"
                style={{
                  background: 'rgba(59,130,246,0.08)',
                  border: '1px solid rgba(59,130,246,0.2)',
                }}
              >
                <Navigation size={22} style={{ color: '#3b82f6' }} />
                <span className="text-xs font-semibold text-white">Directions</span>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Google Maps</span>
              </a>
            </div>

            {/* Address Card */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(245,166,35,0.12)' }}
                >
                  <MapPin size={18} style={{ color: '#f5a623' }} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Vijay Traders</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                    Yawal, Dist. Jalgaon<br />
                    Maharashtra, India<br />
                    <span style={{ color: '#f5a623' }}>Mo: 9422773072</span>
                  </p>
                </div>
              </div>
              <div
                className="h-px"
                style={{ background: 'rgba(255,255,255,0.06)', margin: '16px 0' }}
              />
              {/* Hours */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(34,197,94,0.1)' }}
                >
                  <Clock size={18} style={{ color: '#22c55e' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Business Hours</h4>
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-8 text-sm mb-1">
                      <span style={{ color: 'rgba(255,255,255,0.5)' }}>{h.day}</span>
                      <span className="font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{
                height: '240px',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <iframe
                src="https://maps.google.com/maps?q=Yawal,Maharashtra,India&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 'none', filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(0.9)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vijay Traders location map"
              />
              {/* Overlay pin label */}
              <div
                className="absolute bottom-4 left-4 px-3 py-2 rounded-lg text-xs font-semibold"
                style={{
                  background: 'rgba(0,0,0,0.8)',
                  backdropFilter: 'blur(10px)',
                  color: '#f5a623',
                  border: '1px solid rgba(245,166,35,0.3)',
                }}
              >
                📍 Vijay Traders, Yawal
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div>
            <div
              className="p-8 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(245,166,35,0.12)' }}
                >
                  <Mail size={18} style={{ color: '#f5a623' }} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-xl">Send a Message</h3>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    We&apos;ll respond via WhatsApp
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="contact-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your mobile number"
                    required
                    className="contact-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    What do you need?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="E.g. 50 bags Ambuja cement, TMT 8mm bars, PVC pipes..."
                    required
                    rows={5}
                    className="contact-input resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                  style={{ width: '100%' }}
                >
                  {sent ? '✓ Message Sent via WhatsApp!' : (
                    <>
                      <Send size={16} />
                      Send via WhatsApp
                    </>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>or</span>
                <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
              </div>

              <a
                href="tel:9422773072"
                className="btn-secondary w-full justify-center"
                style={{ width: '100%' }}
              >
                <Phone size={16} />
                Call 9422773072 Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
