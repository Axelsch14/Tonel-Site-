import { useState, useEffect, useRef } from 'react';

const S = { maxW: { maxWidth: 1200, margin: '0 auto', padding: '0 40px' } };

const SERVICES = [
  { num: '01', title: 'Design Premium', desc: 'Des interfaces uniques, pensées pour votre identité. Chaque pixel est intentionnel, chaque détail soigné pour laisser une impression durable.' },
  { num: '02', title: 'Développement Web', desc: 'Des sites rapides, sécurisés et évolutifs. Technologies modernes adaptées à vos besoins, de la landing page au site vitrine complet.' },
  { num: '03', title: 'Référencement SEO', desc: 'Soyez trouvé par vos futurs clients. Optimisation technique et stratégique pour une visibilité maximale sur les moteurs de recherche.' },
  { num: '04', title: 'Site Vitrine', desc: 'Valorisez votre activité avec un site vitrine professionnel. Présentation élégante, formulaire de contact, galerie — tout pour convaincre.' },
  { num: '05', title: 'Maintenance & Support', desc: 'Votre site évolue avec vous. Mises à jour, modifications, support réactif — nous restons à vos côtés bien après la mise en ligne.' },
  { num: '06', title: 'Accompagnement Stratégique', desc: 'Conseil personnalisé pour définir votre stratégie digitale. Nos profils complémentaires tech & business au service de votre réussite.' },
];

/* ── NAV ── */
function Nav({ scrolled }) {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(8,8,8,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      <div style={{ ...S.maxW, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 2 }}>
          <span style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 600, color: 'var(--white)', letterSpacing: -0.5 }}>T</span>
          <span style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 400, color: 'var(--gold)', letterSpacing: -0.5 }}>.</span>
          <span style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 600, color: 'var(--white)', letterSpacing: -0.5 }}>onel</span>
        </button>

        {/* Nav links - horizontal */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          {[['services', 'Services'], ['story', 'Notre histoire'], ['contact', 'Contact']].map(([id, label]) => (
            <button key={id} onClick={() => go(id)} style={{
              background: 'none', border: 'none', fontSize: 13, fontWeight: 400,
              color: 'var(--text-dim)', letterSpacing: 0.5, transition: 'color 0.2s', cursor: 'pointer',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}
            >{label}</button>
          ))}
          <button onClick={() => go('devis')} style={{
            background: 'transparent', color: 'var(--gold)',
            border: '1px solid var(--border-gold)',
            padding: '9px 22px', borderRadius: 2, fontSize: 13,
            fontWeight: 500, letterSpacing: 0.5, cursor: 'pointer',
            transition: 'all 0.25s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--black)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)'; }}
          >✦ Devis gratuit</button>
        </div>
      </div>
    </nav>
  );
}

/* ── HERO ── */
function Hero() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section id="hero" style={{ minHeight: '100vh', background: 'var(--black)', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '120px 40px 80px' }}>
      {/* Subtle grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,169,110,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.03) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      {/* Glow */}
      <div style={{ position: 'absolute', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)', top: '30%', left: '60%', transform: 'translate(-50%,-50%)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative' }}>
        {/* Tag */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 48, animation: 'fadeUp 0.8s ease both' }}>
          <div style={{ width: 32, height: 1, background: 'var(--gold)' }} />
          <span style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>Agence Web Premium · Paris</span>
        </div>

        {/* Title */}
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(52px, 8vw, 96px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: -2, marginBottom: 36, maxWidth: 800, animation: 'fadeUp 0.8s 0.1s ease both', opacity: 0, animationFillMode: 'forwards' }}>
          Votre site,<br />
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>votre image,</em><br />
          sans compromis.
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: 17, color: 'var(--text-dim)', lineHeight: 1.8, maxWidth: 520, marginBottom: 56, animation: 'fadeUp 0.8s 0.2s ease both', opacity: 0, animationFillMode: 'forwards' }}>
          Sites web sur mesure pour les particuliers et entrepreneurs qui refusent le compromis entre esthétique et performance.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', animation: 'fadeUp 0.8s 0.3s ease both', opacity: 0, animationFillMode: 'forwards' }}>
          <button onClick={() => go('devis')} style={{
            background: 'var(--gold)', color: 'var(--black)', border: 'none',
            padding: '15px 36px', borderRadius: 2, fontSize: 14, fontWeight: 600,
            letterSpacing: 0.5, cursor: 'pointer', transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >Devis gratuit →</button>
          <button onClick={() => go('services')} style={{
            background: 'transparent', color: 'var(--text)',
            border: '1px solid var(--border)',
            padding: '15px 36px', borderRadius: 2, fontSize: 14,
            cursor: 'pointer', transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(245,243,239,0.3)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >Découvrir nos services</button>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 56, marginTop: 96, paddingTop: 48, borderTop: '1px solid var(--border)', flexWrap: 'wrap', animation: 'fadeUp 0.8s 0.4s ease both', opacity: 0, animationFillMode: 'forwards' }}>
          {[['100%', 'Sur-mesure'], ['48h', 'Premier retour'], ['∞', 'Support inclus']].map(([val, label]) => (
            <div key={val}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 36, fontWeight: 400, color: 'var(--gold)', lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: 12, color: 'var(--text-dimmer)', marginTop: 8, letterSpacing: 1, textTransform: 'uppercase' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll */}
      <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        <div style={{ fontSize: 10, letterSpacing: 3, color: 'var(--text-dimmer)', textTransform: 'uppercase', marginBottom: 10 }}>Scroll</div>
        <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, var(--gold), transparent)', margin: '0 auto', animation: 'scroll-hint 2s ease-in-out infinite' }} />
      </div>
    </section>
  );
}

/* ── SERVICES ── */
function Services() {
  return (
    <section id="services" style={{ padding: '120px 40px', background: 'var(--dark)' }}>
      <div style={S.maxW}>
        {/* Header */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <div style={{ width: 32, height: 1, background: 'var(--gold)' }} />
            <span style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>Ce que nous faisons</span>
          </div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, lineHeight: 1.15 }}>
            Des sites qui<br /><em style={{ color: 'var(--gold)' }}>marquent les esprits</em>
          </h2>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 1, background: 'var(--border)' }}>
          {SERVICES.map(({ num, title, desc }) => (
            <div key={num} style={{
              background: 'var(--dark)', padding: '2.5rem',
              transition: 'background 0.3s',
              cursor: 'default',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--dark2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--dark)'}
            >
              <div style={{ fontFamily: 'var(--serif)', fontSize: 13, color: 'var(--gold)', marginBottom: 20, opacity: 0.7 }}>{num}</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 500, marginBottom: 16, lineHeight: 1.3 }}>{title}</div>
              <div style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.8 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── STORY ── */
function Story() {
  return (
    <section id="story" style={{ padding: '120px 40px', background: 'var(--black)' }}>
      <div style={S.maxW}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <div style={{ width: 32, height: 1, background: 'var(--gold)' }} />
              <span style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>Notre ADN</span>
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(34px, 4vw, 52px)', fontWeight: 400, lineHeight: 1.15, marginBottom: 32 }}>
              L'histoire de<br /><em style={{ color: 'var(--gold)' }}>deux amis</em>
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-dim)', lineHeight: 1.9, marginBottom: 20 }}>
              Tout a commencé sur les bancs de nos grandes écoles respectives. Deux passionnés, deux visions complémentaires, une seule ambition : offrir aux particuliers et aux entrepreneurs l'excellence digitale habituellement réservée aux grands groupes.
            </p>
            <p style={{ fontSize: 15, color: 'var(--text-dim)', lineHeight: 1.9, marginBottom: 20 }}>
              L'un apporte la rigueur de l'ingénierie — architecture solide, code propre, performances optimales. L'autre, la vision stratégique du business — positionnement, conversions, retour sur investissement.
            </p>
            <p style={{ fontSize: 15, color: 'var(--text-dim)', lineHeight: 1.9 }}>
              Ensemble, <strong style={{ color: 'var(--text)' }}>Tonel est né.</strong> Nous croyons que chaque projet mérite une attention totale. Pas de template préconçu, pas de solution générique. Seulement du sur-mesure, pensé et réalisé avec passion.
            </p>
          </div>

          {/* Team cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { initial: 'A', name: 'Axel', role: 'Co-fondateur · Technique', desc: 'Élève-ingénieur passionné de développement web et d\'architecture logicielle. Il traduit chaque idée en code performant et maintenable, avec une obsession pour les détails techniques qui font la différence.', school: 'École d\'Ingénieur' },
              { initial: 'T', name: 'Tony', role: 'Co-fondateur · Stratégie', desc: 'Étudiant en école de commerce avec un œil acéré pour le design et la stratégie digitale. Il structure chaque projet pour maximiser son impact business et son attrait visuel auprès des clients.', school: 'École de Commerce' },
            ].map(({ initial, name, role, desc, school }) => (
              <div key={name} style={{ background: 'var(--dark2)', border: '1px solid var(--border)', borderRadius: 2, padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                  <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--dark3)', border: '1px solid var(--border-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--gold)', flexShrink: 0 }}>{initial}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 500 }}>{name}</div>
                    <div style={{ fontSize: 12, color: 'var(--gold)', marginTop: 2 }}>{role}</div>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: 14 }}>{desc}</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--dark3)', padding: '5px 12px', borderRadius: 2 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)' }} />
                  <span style={{ fontSize: 11, color: 'var(--text-dimmer)', letterSpacing: 0.5 }}>{school}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── DEVIS ── */
function Devis() {
  const [form, setForm] = useState({ prenom: '', nom: '', email: '', tel: '', type: '', budget: '', desc: '' });
  const [sent, setSent] = useState(false);
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const inputStyle = {
    width: '100%', padding: '14px 16px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--border)',
    borderRadius: 2, color: 'var(--text)',
    fontSize: 14, outline: 'none',
    transition: 'border-color 0.2s',
  };

  const focusStyle = { borderColor: 'var(--gold)' };

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="devis" style={{ padding: '120px 40px', background: 'var(--dark)' }}>
      <div style={{ ...S.maxW, display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
        {/* Left */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <div style={{ width: 32, height: 1, background: 'var(--gold)' }} />
            <span style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>Gratuit & sans engagement</span>
          </div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, lineHeight: 1.15, marginBottom: 20 }}>
            Votre devis<br /><em style={{ color: 'var(--gold)' }}>personnalisé</em>
          </h2>
          <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: 40 }}>
            Décrivez-nous votre vision et recevez une proposition détaillée dans les 48h. Notre processus transparent vous garantit une estimation juste, sans surprise.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              ['⚡', 'Réponse sous 24h', 'Nous analysons chaque demande avec sérieux'],
              ['🔓', '100% gratuit & sans engagement', 'Aucune condition, aucune surprise cachée'],
              ['📋', 'Estimation détaillée', 'Budget, délais et périmètre clairement définis'],
              ['📞', 'Appel de découverte offert', '30 minutes pour aligner nos visions'],
            ].map(([icon, title, sub]) => (
              <div key={title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 18, marginTop: 2 }}>{icon}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 2 }}>{title}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-dimmer)' }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div style={{ background: 'var(--dark2)', border: '1px solid var(--border)', borderRadius: 2, padding: '2.5rem' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', animation: 'fadeIn 0.4s ease' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 48, color: 'var(--gold)', marginBottom: 20 }}>✦</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 400, marginBottom: 12 }}>Demande envoyée !</h3>
              <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.8 }}>
                Merci pour votre confiance. Axel ou Tony vous contactera sous 24h pour échanger sur votre projet.
              </p>
            </div>
          ) : (
            <>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 400, marginBottom: 28, color: 'var(--text)' }}>Parlons de votre projet</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={{ fontSize: 11, letterSpacing: 1, color: 'var(--text-dimmer)', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Prénom *</label>
                    <input style={inputStyle} placeholder="Votre prénom" value={form.prenom} onChange={set('prenom')} required
                      onFocus={e => Object.assign(e.target.style, focusStyle)}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 11, letterSpacing: 1, color: 'var(--text-dimmer)', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Nom *</label>
                    <input style={inputStyle} placeholder="Votre nom" value={form.nom} onChange={set('nom')} required
                      onFocus={e => Object.assign(e.target.style, focusStyle)}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 11, letterSpacing: 1, color: 'var(--text-dimmer)', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Email *</label>
                  <input style={inputStyle} type="email" placeholder="votre@email.com" value={form.email} onChange={set('email')} required
                    onFocus={e => Object.assign(e.target.style, focusStyle)}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 11, letterSpacing: 1, color: 'var(--text-dimmer)', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Téléphone</label>
                  <input style={inputStyle} type="tel" placeholder="06 XX XX XX XX" value={form.tel} onChange={set('tel')}
                    onFocus={e => Object.assign(e.target.style, focusStyle)}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 11, letterSpacing: 1, color: 'var(--text-dimmer)', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Type de projet *</label>
                  <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.type} onChange={set('type')} required
                    onFocus={e => Object.assign(e.target.style, focusStyle)}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  >
                    <option value="">Sélectionner...</option>
                    <option>Site vitrine restaurant</option>
                    <option>Site vitrine commerce / loisirs</option>
                    <option>Portfolio créatif</option>
                    <option>Landing page</option>
                    <option>Site vitrine personnel</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 11, letterSpacing: 1, color: 'var(--text-dimmer)', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Budget estimé</label>
                  <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.budget} onChange={set('budget')}
                    onFocus={e => Object.assign(e.target.style, focusStyle)}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  >
                    <option value="">Je ne sais pas encore</option>
                    <option>Moins de 500€</option>
                    <option>500€ – 1 000€</option>
                    <option>1 000€ – 2 500€</option>
                    <option>Plus de 2 500€</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 11, letterSpacing: 1, color: 'var(--text-dimmer)', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Description du projet *</label>
                  <textarea style={{ ...inputStyle, minHeight: 120, resize: 'vertical' }} placeholder="Décrivez votre projet, vos objectifs, votre secteur d'activité..." value={form.desc} onChange={set('desc')} required
                    onFocus={e => Object.assign(e.target.style, focusStyle)}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <button type="submit" style={{
                  background: 'var(--gold)', color: 'var(--black)', border: 'none',
                  padding: '15px', borderRadius: 2, fontSize: 14, fontWeight: 600,
                  letterSpacing: 0.5, cursor: 'pointer', marginTop: 8, transition: 'opacity 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >Envoyer ma demande de devis →</button>
                <p style={{ fontSize: 11, color: 'var(--text-dimmer)', textAlign: 'center' }}>🔒 Vos données sont confidentielles et ne sont jamais revendues</p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── CONTACT ── */
function Contact() {
  return (
    <section id="contact" style={{ padding: '120px 40px', background: 'var(--black)' }}>
      <div style={S.maxW}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <div style={{ width: 32, height: 1, background: 'var(--gold)' }} />
          <span style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>Nous joindre</span>
        </div>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(34px, 5vw, 52px)', fontWeight: 400, lineHeight: 1.15, marginBottom: 56 }}>
          Restons en<br /><em style={{ color: 'var(--gold)' }}>contact</em>
        </h2>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <a href="mailto:contact.tonel@gmail.com" style={{
            display: 'flex', gap: 20, alignItems: 'center',
            background: 'var(--dark2)', border: '1px solid var(--border)',
            borderRadius: 2, padding: '1.75rem 2rem', textDecoration: 'none',
            flex: 1, minWidth: 280, transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-gold)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <div style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid var(--border-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>✉️</div>
            <div>
              <div style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>Email</div>
              <div style={{ fontSize: 15, color: 'var(--text)', fontWeight: 500 }}>contact.tonel@gmail.com</div>
              <div style={{ fontSize: 12, color: 'var(--text-dimmer)', marginTop: 2 }}>Réponse sous 24h</div>
            </div>
          </a>
          <a href="tel:0663884560" style={{
            display: 'flex', gap: 20, alignItems: 'center',
            background: 'var(--dark2)', border: '1px solid var(--border)',
            borderRadius: 2, padding: '1.75rem 2rem', textDecoration: 'none',
            flex: 1, minWidth: 280, transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-gold)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <div style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid var(--border-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>📞</div>
            <div>
              <div style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>Téléphone</div>
              <div style={{ fontSize: 15, color: 'var(--text)', fontWeight: 500 }}>06 63 88 45 60</div>
              <div style={{ fontSize: 12, color: 'var(--text-dimmer)', marginTop: 2 }}>Lun – Ven, 9h – 18h</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
function Footer() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <footer style={{ background: 'var(--dark)', borderTop: '1px solid var(--border)', padding: '60px 40px 32px' }}>
      <div style={S.maxW}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 48, flexWrap: 'wrap', gap: 32 }}>
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 400, marginBottom: 12 }}>
              T<span style={{ color: 'var(--gold)' }}>.</span>onel
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-dimmer)', maxWidth: 260, lineHeight: 1.7 }}>
              L'excellence digitale, à votre portée.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 48 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: 2, color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 16 }}>Navigation</div>
              {[['services','Services'],['story','Histoire'],['devis','Devis'],['contact','Contact']].map(([id,label]) => (
                <button key={id} onClick={() => go(id)} style={{ display: 'block', background: 'none', border: 'none', fontSize: 13, color: 'var(--text-dimmer)', marginBottom: 10, cursor: 'pointer', transition: 'color 0.2s', textAlign: 'left' }}
                  onMouseEnter={e => e.target.style.color = 'var(--text)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-dimmer)'}
                >{label}</button>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'var(--text-dimmer)' }}>© 2025 <strong style={{ color: 'var(--text-dim)' }}>Tonel</strong> — Tous droits réservés</p>
          <div style={{ display: 'flex', gap: 24 }}>
            <span style={{ fontSize: 12, color: 'var(--text-dimmer)', cursor: 'pointer' }}>Mentions légales</span>
            <span style={{ fontSize: 12, color: 'var(--text-dimmer)', cursor: 'pointer' }}>Politique de confidentialité</span>
          </div>
        </div>
      </div>

      {/* Fixed devis CTA */}
      <button onClick={() => go('devis')} style={{
        position: 'fixed', bottom: 32, right: 32, zIndex: 99,
        background: 'var(--gold)', color: 'var(--black)',
        border: 'none', borderRadius: 2, padding: '12px 24px',
        fontSize: 13, fontWeight: 600, cursor: 'pointer',
        boxShadow: '0 8px 32px rgba(201,169,110,0.3)',
        transition: 'opacity 0.2s',
      }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >✦ Devis gratuit</button>
    </footer>
  );
}

/* ── APP ── */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <>
      <Nav scrolled={scrolled} />
      <Hero />
      <Services />
      <Story />
      <Devis />
      <Contact />
      <Footer />
    </>
  );
}
