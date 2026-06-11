import { useState, useEffect, useRef } from 'react'
import { Trophy, Medal, Plus } from 'lucide-react'

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const handler = () => {
      nav.style.borderBottomColor = window.scrollY > 40
        ? 'rgba(197,241,53,0.2)'
        : 'rgba(197,241,53,0.12)'
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className="nav" ref={navRef} role="navigation" aria-label="Navegación principal">
        <a className="nav-brand" href="#inicio">Gabriel <em>Buzin</em></a>
        <ul className="nav-links">
          <li><a href="#sobre-mi" onClick={close}>Sobre mí</a></li>
          <li><a href="#logros" onClick={close}>Logros</a></li>
          <li><a href="#clases" onClick={close}>Clases</a></li>
          <li><a href="#precios" onClick={close}>Precios</a></li>
          <li><a href="#contacto" onClick={close}>Contacto</a></li>
        </ul>
        <a className="nav-cta" href="#contacto">Reservar clase</a>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="menu">
        <a href="#sobre-mi" onClick={close}>Sobre mí</a>
        <a href="#logros" onClick={close}>Logros</a>
        <a href="#clases" onClick={close}>Clases</a>
        <a href="#precios" onClick={close}>Precios</a>
        <a href="#contacto" onClick={close}>Contacto</a>
      </div>
    </>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio" aria-label="Inicio">
      <div className="hero-photo" aria-hidden="true" />
      <div className="hero-circles" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-eyebrow">Academia de Pádel · 2026</div>
        <div className="hero-badge">Nuevas clases 2026</div>
        <h1 className="hero-name">
          Gabriel<br /><span className="lime">Buzin</span>
        </h1>
        <p className="hero-tagline">
          Formado en la academia de <strong>Gustavo Pratto, Valladolid.</strong><br />
          Comprometido con el proceso de cada jugador.
        </p>
        <a className="btn btn-lime" href="#precios">Reservá tu clase</a>
      </div>
    </section>
  )
}

function SobreMi() {
  const r1 = useReveal()
  const r2 = useReveal()
  return (
    <section className="sec-light" id="sobre-mi">
      <div className="container-site">
        <div className="sobre-grid">
          <div className="sobre-img-wrap reveal" ref={r1}>
            <img src="/images/sobremi.jpeg" alt="Gabriel Buzin entrenando en el gimnasio" loading="lazy" />
          </div>
          <div className="sobre-text reveal reveal-delay" ref={r2}>
            <div className="eyebrow on-light">Sobre mí</div>
            <div className="divider" />
            <h2 className="section-title">Mi historia</h2>
            <p className="sobre-body" style={{ marginTop: 20 }}>
              Me llamo Gabriel Buzin, tengo 16 años y me formé en la academia de{' '}
              <strong>Gustavo Pratto en Valladolid, España.</strong>{' '}
              Compito activamente y ese recorrido es lo que hoy vuelco en mis alumnos.
            </p>
            <p className="sobre-body" style={{ marginTop: 16 }}>
              Arranco este camino como profesor con mucha energía y con un objetivo claro:{' '}
              <strong>acompañar el proceso real de cada jugador</strong>,
              sea cual sea su nivel, con compromiso y entusiasmo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Logros() {
  const r = useReveal()
  return (
    <section className="sec-dark" id="logros" aria-label="Logros">
      <div
        className="logros-photo-bg"
        style={{ backgroundImage: 'url(/images/logros.jpeg)' }}
        aria-hidden="true"
      />
      <div className="container-site logros-content reveal" ref={r}>
        <div className="logros-title-row">
          <div className="eyebrow">Palmarés</div>
          <h2 className="section-title" style={{ color: 'var(--cream)', fontSize: 'clamp(44px,10vw,72px)' }}>
            Mis logros
          </h2>
        </div>
        <div className="logros-grid">
          <div className="logro-card gold">
            <div className="logro-icon"><Trophy size={22} /></div>
            <div>
              <div className="logro-name">Campeón — Argentina Next Gen Campana</div>
              <div className="logro-meta">2026</div>
            </div>
          </div>
          <div className="logro-card gold">
            <div className="logro-icon"><Trophy size={22} /></div>
            <div>
              <div className="logro-name">Campeón de múltiples circuitos regionales</div>
              <div className="logro-meta">Palmarés regional</div>
            </div>
          </div>
          <div className="logro-card">
            <div className="logro-icon"><Medal size={22} /></div>
            <div>
              <div className="logro-name">Semifinalista — FIP Promises</div>
              <div className="logro-meta">Torneo internacional FIP</div>
            </div>
          </div>
          <div className="logro-card">
            <div className="logro-icon"><Plus size={22} /></div>
            <div>
              <div className="logro-name">Competencias nacionales e internacionales</div>
              <div className="logro-meta">Participación constante de alto nivel</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Clases() {
  const r1 = useReveal()
  const r2 = useReveal()
  return (
    <section className="sec-light" id="clases">
      <div className="container-site">
        <div className="clases-grid">
          <div className="clases-photo-wrap reveal" ref={r1}>
            <img src="/images/clases.jpeg" alt="Gabriel Buzin frente a la red" loading="lazy" />
          </div>
          <div className="clases-content reveal reveal-delay" ref={r2}>
            <div className="eyebrow on-light">Modalidad</div>
            <div className="divider" />
            <h2 className="section-title">Clases de<br />pádel</h2>
            <div style={{ height: 22 }} />
            <div className="pill-row">
              <div className="pill lime">Individual</div>
              <div className="pill">Parejas</div>
              <div className="pill">Grupal</div>
              <div className="pill">1×/semana</div>
              <div className="pill">2×/semana</div>
            </div>
            <p className="clases-info">
              Clases de <strong>1 hora</strong> de duración, con frecuencia de 1 o 2 veces por semana.
              Aptas para <strong>todas las edades y niveles</strong>.
              Los horarios se coordinan según disponibilidad.
            </p>
            <div>
              <div className="cal-label">Calendario 2026</div>
              <div className="period-row">
                <div className="period-tag">Período 1 — Mar a Jun</div>
                <div className="period-tag strike">Julio — receso</div>
                <div className="period-tag">Período 2 — Ago a Nov</div>
              </div>
              <div className="cal-note">
                Inicio: semana del 9 de marzo · Pago adelantado del 1 al 10 de cada mes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Aranceles() {
  const r = useReveal()
  return (
    <section className="sec-dark" id="precios" aria-label="Precios">
      <div className="container-site reveal" ref={r}>
        <div className="eyebrow">Aranceles</div>
        <h2 className="section-title" style={{ color: 'var(--cream)', fontSize: 'clamp(44px,10vw,72px)' }}>
          Precios 2026
        </h2>
        <div className="pricing-grid">
          <div className="price-card featured">
            <div className="price-card-eyebrow">Por clase</div>
            <div className="price-card-name">Individual</div>
            <div className="price-row">
              <span className="price-freq">Precio por clase</span>
              <span className="price-amount"><sup>$</sup>18.000</span>
            </div>
            <p className="price-note">1 alumno · pago por clase tomada</p>
          </div>
          <div className="price-card">
            <div className="price-card-eyebrow">Mensual</div>
            <div className="price-card-name">Parejas</div>
            <div className="price-row">
              <span className="price-freq">1× por semana</span>
              <span className="price-amount"><sup>$</sup>40.000</span>
            </div>
            <div className="price-row">
              <span className="price-freq">2× por semana</span>
              <span className="price-amount"><sup>$</sup>65.000</span>
            </div>
            <p className="price-note">2 alumnos · cuota mensual</p>
          </div>
          <div className="price-card">
            <div className="price-card-eyebrow">Mensual</div>
            <div className="price-card-name">Grupal</div>
            <div className="price-row">
              <span className="price-freq">1× por semana</span>
              <span className="price-amount"><sup>$</sup>32.000</span>
            </div>
            <div className="price-row">
              <span className="price-freq">2× por semana</span>
              <span className="price-amount"><sup>$</sup>45.000</span>
            </div>
            <p className="price-note">Hasta 4 alumnos · grupos por nivel</p>
          </div>
        </div>
        <div className="payment-box">
          <div>
            <div className="payment-label">Forma de pago</div>
            <div className="payment-title">Transferencia bancaria</div>
            <div className="payment-sub">Del 1 al 10 de cada mes · Enviar comprobante por WhatsApp</div>
          </div>
          <div>
            <div style={{ fontSize: 11, color: 'rgba(247,245,240,0.38)', textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 700, marginBottom: 5, fontFamily: "'Barlow Condensed', sans-serif" }}>
              Mercado Pago
            </div>
            <div className="payment-alias">Alias a confirmar</div>
            <div style={{ fontSize: 11, color: 'rgba(247,245,240,0.3)', marginTop: 4 }}>
              Coordinar al inscribirse
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Sponsors() {
  const r1 = useReveal()
  const r2 = useReveal()
  return (
    <section className="sec-light" id="sponsors">
      <div className="container-site">
        <div className="sponsors-header reveal" ref={r1}>
          <div className="eyebrow on-light">Me acompañan</div>
          <div className="divider" />
          <h2 className="section-title" style={{ fontSize: 'clamp(36px,8vw,56px)' }}>Mis sponsors</h2>
        </div>
        <div className="sponsors-logos reveal reveal-delay" ref={r2}>
          <div className="sponsor-logo">
            <img src="/images/sixty.png" alt="Sixty Padel" loading="lazy" />
          </div>
          <div className="sponsor-logo">
            <img src="/images/HB.png" alt="HB Mecánica Integral del Automotor" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer" id="contacto" aria-label="Contacto">
      <div className="footer-inner">
        <div>
          <div className="footer-label-sm">Profesor de Pádel · 2026</div>
          <div className="footer-name">Gabriel<br />Buzin</div>
          <div className="footer-subtitle">Clases individuales · parejas · grupos</div>
        </div>
        <div className="footer-contact-col">
          <div>
            <div className="footer-label-sm">WhatsApp</div>
            <div className="footer-phone">+54 9 3434 52-5551</div>
          </div>
          <a className="btn btn-dark" href="https://wa.me/5493434525551" target="_blank" rel="noopener noreferrer">
            Escribime
          </a>
          <a className="footer-ig" href="https://www.instagram.com/buzin.gabriel_/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
            @buzin.gabriel_
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SobreMi />
        <Logros />
        <Clases />
        <Aranceles />
        <Sponsors />
      </main>
      <Footer />
    </>
  )
}
