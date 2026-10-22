import { useEffect, useState } from 'react';
import { ArrowUpRight, BriefcaseBusiness, Camera, ChevronLeft, ChevronRight, ExternalLink, GraduationCap, Home, Image as ImageIcon, Mail, Menu, Newspaper, Palette, UserRound, X, Globe, BookOpen, Video, FileText } from 'lucide-react';
// Styles are loaded from src/main.jsx via ./index.css

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rommel-fangot-jr-1195a838b/', icon: BriefcaseBusiness },
  { label: 'Facebook', href: 'https://www.facebook.com/jrfangot', icon: Globe },
  { label: 'Instagram', href: 'https://www.instagram.com/rxmml.jr/', icon: Camera },
  { label: 'Email', href: 'mailto:rommeljrfangot@gmail.com', icon: Mail },
];
const SECTIONS = [
  { id: 'journalism', number: '01', label: 'Journalism', eyebrow: 'THE NEWSROOM', description: 'News reports, published articles & video stories.', icon: Newspaper, short: 'REPORT', large: true },
  { id: 'creative', number: '02', label: 'Creative Portfolio', eyebrow: 'THE DESIGN DESK', description: 'Posters, frames, mock-ups & editorial layouts.', icon: Palette, short: 'CREATE', large: true },
  { id: 'experience', number: '03', label: 'Experience', eyebrow: 'THE FIELD NOTES', description: 'Fieldwork, newsrooms & professional growth.', icon: BriefcaseBusiness, short: 'WORK' },
  { id: 'education', number: '04', label: 'Education', eyebrow: 'THE CREDENTIALS', description: 'BA Communication · Class of 2026.', icon: GraduationCap, short: 'LEARN' },
  { id: 'about', number: '05', label: 'About Me', eyebrow: 'THE PROFILE', description: 'The person behind the stories and designs.', icon: UserRound, short: 'STORY' },
  { id: 'contact', number: '06', label: 'Contact', eyebrow: 'THE NEXT CHAPTER', description: 'Open to opportunities & collaborations.', icon: Mail, short: 'CONNECT' },
];
const LINK = (title, url, kind = 'Article') => ({ title, url, kind });
const JOURNALISM = {
  'Amianan Balita Ngayon': {
    'Published articles': [
      LINK('Green spaces under pressure: Baguio pushes environmental programs amid urban challenges', 'https://amiananbalitangayon.com/green-spaces-under-pressure-baguio-pushes-environmental-programs-amid-urban-challenges/'),
      LINK('Mankakait 2026', 'https://amiananbalitangayon.com/mankakait-2026/'),
      LINK('Summer swimming clinic promotes water safety among Baguio youth', 'https://amiananbalitangayon.com/summer-swimming-clinic-promotes-water-safety-among-baguio-youth/'),
      LINK('Magulang nangangamba sa pagpapatupad ng three-term', 'https://amiananbalitangayon.com/magulangnangangamba-sa-pagpapatupad-ng-three-term/'),
      LINK('City revenue collections rise 35.27% in Q1 2026', 'https://amiananbalitangayon.com/city-revenue-collections-rise-35-27-in-q1-2026/'),
      LINK('Civil Registry Office reports higher document issuance and digitalization efforts', 'https://amiananbalitangayon.com/civil-registry-office-reports-higher-document-issuance-expands-digitalization-efforts/'),
      LINK('OFW returnees receive cash aid and reintegration support', 'https://amiananbalitangayon.com/ofw-returnees-receive-cash-aid-reintegration-support/'),
      LINK('Mga recyclable materials tinipon sa collection event sa Itogon', 'https://amiananbalitangayon.com/mga-recyclable-materials-tinipon-sa-collection-event-sa-itogon/'),
      LINK('Pagbaba ng pamasahe sa jeepney, malaking ginhawa sa mga residente', 'https://amiananbalitangayon.com/pagbaba-ng-pamasahe-sa-jeepney-malaking-ginhawa-sa-mga-residente/'),
    ],
    'Facebook posts': [
      LINK('Week 1 · Facebook post', 'https://www.facebook.com/share/p/1LLxbDg2Y6/', 'Facebook'),
      LINK('Week 2 · Facebook post 1', 'https://www.facebook.com/share/p/1Cxth4VpDk/', 'Facebook'),
      LINK('Week 2 · Facebook post 2', 'https://www.facebook.com/share/p/1E2QYqPYtY/', 'Facebook'),
      LINK('Week 3 · Facebook post', 'https://www.facebook.com/share/1P64EJPobZ/', 'Facebook'),
      LINK('Week 4 · Facebook post 1', 'https://www.facebook.com/share/p/1Bdj9A6R6q/', 'Facebook'),
      LINK('Week 4 · Facebook post 2', 'https://www.facebook.com/share/p/18KaYmdNen/', 'Facebook'),
    ],
    'Video': [LINK('Amianan Balita Ngayon · Video report', 'https://www.facebook.com/share/v/1CrFqcxJF2/', 'Video')],
  },
  'North Luzon Monitor': {
    'Published articles': [
      LINK('Community photo exhibit highlights LGBTQIA+ stories', 'https://northluzonmonitor.com/community-photo-exhibit-highlights-lgbtqia-stories/'),
      LINK('Technology seen to hike HIV/AIDS cases in CAR', 'https://northluzonmonitor.com/technology-seen-to-hike-hiv-aids-cases-in-car/'),
      LINK('Baguio GSO expands black soldier fly program', 'https://northluzonmonitor.com/baguio-gso-expands-black-soldier-fly-program/'),
    ],
    'Broadcast': [LINK('Co-host · HIV/AIDS Update', 'https://www.facebook.com/share/v/14iLEcRGwnt/', 'Broadcast')],
    'Photo captions': [LINK('Lente ni Accla', 'https://www.facebook.com/share/p/19224rrKN5/', 'Photo caption')],
    'Event coverage': [
      LINK("Anino't Sinag @ 19hundred Workspace", 'https://www.facebook.com/share/p/1Kt8EgdCYq/', 'Event'),
      LINK('Kapihan · July 8, 2026', 'https://www.facebook.com/share/p/1DDLC2jnU1/', 'Event'),
    ],
    'Reels': [LINK('Darwin Babon', 'https://www.facebook.com/share/r/18w6ayw1sa/', 'Reel')],
  },
};

// Individual paths are deliberately explicit. All images are served from public/images.
// If your saved extension differs, update that ONE entry below.
const CREATIVE = {
  'Posters & Pubmats': [
    { title: 'Poster 01', src: '/images/Posters-Pubmats/pb1.png' },
    { title: 'Poster 02', src: '/images/Posters-Pubmats/pb2.png' },
    { title: 'Poster 03', src: '/images/Posters-Pubmats/pb3.png' },
    { title: 'Poster 04', src: '/images/Posters-Pubmats/pb4.png' },
    { title: 'Poster 05', src: '/images/Posters-Pubmats/pb5.png' },
    { title: 'Poster 06', src: '/images/Posters-Pubmats/pb6.png' },
    { title: 'Poster 07', src: '/images/Posters-Pubmats/pb7.png' },
    { title: 'Poster 08', src: '/images/Posters-Pubmats/pb8.png' },
    { title: 'Poster 09', src: '/images/Posters-Pubmats/pb9.png' },
    { title: 'Poster 10', src: '/images/Posters-Pubmats/pb10.png' },
    { title: 'Poster 11', src: '/images/Posters-Pubmats/pb11.png' },
    { title: 'Poster 12', src: '/images/Posters-Pubmats/pb12.png' },
    { title: 'Poster 13', src: '/images/Posters-Pubmats/pb13.png' },
    { title: 'Poster 14', src: '/images/Posters-Pubmats/pb14.png' },
  ],
  'Facebook Frames': [
    { title: 'North Luzon Monitor · Frame 01', src: '/images/Facebook Profile & Picture Frame/fb1.png' },
    { title: 'North Luzon Monitor · Frame 02', src: '/images/Facebook Profile & Picture Frame/fb2.png' },
    { title: 'North Luzon Monitor · Frame 03', src: '/images/Facebook Profile & Picture Frame/fb3.png' },
    { title: 'School Frame', src: '/images/Facebook Profile & Picture Frame/fb4.png' },
  ],
  'Mock-ups': [
    { title: 'Jersey 01', src: '/images/Mock-up/jersey1.png' },
    { title: 'Jersey 02', src: '/images/Mock-up/jersey2.png' },
    { title: 'Jersey 03', src: '/images/Mock-up/jersey3.png' },
    { title: 'Lace 01', src: '/images/Mock-up/lace1.png' },
    { title: 'Lace 02', src: '/images/Mock-up/lace2.png' },
  ],
  'Magazine': [],
};
const NAV = [{ id: 'home', label: 'Home', icon: Home }, ...SECTIONS.map(({ id, label, icon }) => ({ id, label, icon }))];

function ImageWithFallback({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);
  return failed ? <div className={`image-fallback ${className}`}><ImageIcon size={30} /><span>{alt}</span><small>Check image filename or extension</small></div> : <img className={className} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}

function App() {
  const [open, setOpen] = useState(null);
  const [creativeTab, setCreativeTab] = useState('Posters & Pubmats');
  const [publisher, setPublisher] = useState('Amianan Balita Ngayon');
  const [lightbox, setLightbox] = useState(null);
  const [mobileNav, setMobileNav] = useState(false);
  const [gridImage, setGridImage] = useState('/images/grid/grid.png');

  useEffect(() => {
    function onKey(event) {
      if (event.key === 'Escape') { setLightbox(null); setOpen(null); }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open || lightbox ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open, lightbox]);
  function navigate(id) {
    setMobileNav(false);
    if (id === 'home') { setOpen(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    else setOpen(id);
  }
  const selected = SECTIONS.find(item => item.id === open);

  return <div className="site-shell">
    <button className="mobile-menu" onClick={() => setMobileNav(v => !v)} aria-label="Toggle menu"><Menu size={22} /></button>
    <aside className={`sidebar ${mobileNav ? 'sidebar-open' : ''}`}>
      <div className="identity">
        <div className="avatar-wrap"><ImageWithFallback src="/images/profile.jpg" alt="Rommel Fangot Jr." className="avatar" /><span className="online-dot" /></div>
        <h2>ROMMEL<br />FANGOT JR.</h2><p>BA Communication Graduate</p>
      </div>
      <nav className="side-nav" aria-label="Main navigation">{NAV.map(({ id, label, icon: Icon }) => <button key={id} className={!open && id === 'home' || open === id ? 'nav-active' : ''} onClick={() => navigate(id)}><Icon size={19} />{label}</button>)}</nav>
      <div className="sidebar-bottom"><div className="sidebar-socials">{SOCIALS.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer" aria-label={label} title={label}><Icon size={17} /></a>)}</div><small>© 2026 Rommel Fangot Jr.<br />Made for stories worth telling.</small></div>
    </aside>
    <main className="main-content">
      <header className="topline"><span><i className="green-dot" /> JOURNALISM × CREATIVE MEDIA</span><button className="get-in-touch" onClick={() => setOpen('contact')}>Get in touch <ArrowUpRight size={17} /></button></header>
      <section className="hero"><div><p className="eyebrow">HELLO, I'M ROMMEL!</p><h1>STORIES.<br />IDEAS.<br /><em>IMPACT.</em></h1></div><div className="hero-side"><small>THE STORY STARTS HERE — 2026</small><p>A communication graduate with experience in print and digital journalism, storytelling, and creative media.</p><span className="hero-line" /><strong>REPORT. DESIGN. COMMUNICATE.</strong></div></section>
      <div className="collection-heading"><div><p className="eyebrow">THE COLLECTION</p><h2>EXPLORE THE BENTO</h2></div><span>Pick a compartment to open its story <ArrowUpRight size={16} /></span></div>
      <section className="bento-tray" aria-label="Portfolio compartments"><div className="bento-grid">
        {SECTIONS.map(({ id, number, label, eyebrow, description, icon: Icon, short, large }) => <button key={id} className={`bento-cell ${large ? 'bento-large' : ''}`} onClick={() => setOpen(id)}><div className="cell-inner"><span className="cell-icon"><Icon size={29} /></span><span className="cell-number">{number} / {short}</span><Icon className="cell-watermark" strokeWidth={1} /><div className="cell-copy"><small>{eyebrow}</small><h3>{label}</h3><p>{description}</p></div><span className="cell-arrow"><ArrowUpRight size={24} /></span></div></button>)}
        <div className="bento-photo">{gridImage ? <img src={gridImage} alt="Journalism workspace with newspaper, camera and notebook" onError={() => { if (gridImage.endsWith('.png')) setGridImage('/images/grid/grid.jpg'); else if (gridImage.endsWith('.jpg')) setGridImage('/images/grid/grid.jpeg'); else if (gridImage.endsWith('.jpeg')) setGridImage('/images/grid/grid.webp'); else setGridImage(null); }} /> : <div className="grid-photo-missing">Place your photo at<br/><code>public/images/grid/grid.png</code></div>}<div className="photo-caption"><span>BEHIND EVERY STORY</span><strong>OBSERVE. CREATE. CONNECT.</strong></div></div>
      </div></section>
      <footer className="page-footer"><span>“Every story deserves to be told well.”</span><span>ROMMEL FANGOT JR. / PORTFOLIO 2026</span></footer>
    </main>
    {selected && <div className="modal-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) setOpen(null); }}><section className="detail-modal" role="dialog" aria-modal="true" aria-label={selected.label}><button className="close-modal" onClick={() => setOpen(null)} aria-label="Close"><X size={26} /></button><p className="modal-kicker">OPEN COMPARTMENT / {selected.number} / {selected.short}</p><h2>{selected.label}</h2><div className="modal-body">
      {open === 'journalism' && <><p className="detail-intro">A selection of published stories, field coverage, broadcasts, and digital reporting from two newsroom internships.</p><div className="pill-row">{Object.keys(JOURNALISM).map(name => <button key={name} className={publisher === name ? 'pill-active' : ''} onClick={() => setPublisher(name)}>{name}</button>)}</div>{Object.entries(JOURNALISM[publisher]).map(([category, entries]) => <div className="link-section" key={category}><h3>{category} <span>{entries.length}</span></h3><div className="article-grid">{entries.map(({ title, url, kind }) => <a href={url} key={url} target="_blank" rel="noreferrer" className="article-card"><span>{kind}</span><strong>{title}</strong><ExternalLink size={18} /></a>)}</div></div>)}</>}
      {open === 'creative' && <><p className="detail-intro">A collection of design work, visual storytelling and creative experiments.</p><div className="pill-row">{Object.keys(CREATIVE).map(tab => <button key={tab} className={creativeTab === tab ? 'pill-active' : ''} onClick={() => setCreativeTab(tab)}>{tab}</button>)}</div>{CREATIVE[creativeTab].length ? <div className="gallery-grid">{CREATIVE[creativeTab].map((item, index) => <button key={item.src} className="gallery-item" onClick={() => setLightbox({ items: CREATIVE[creativeTab], index })}><ImageWithFallback src={item.src} alt={item.title} /><span>{item.title}<ArrowUpRight size={16} /></span></button>)}</div> : <div className="empty-gallery"><BookOpen size={35} /><h3>Magazine work coming soon</h3><p>This collection will be updated once the files are ready.</p></div>}</>}
      {open === 'experience' && <div className="timeline"><div><span>JUNE — AUGUST 2026</span><h3>North Luzon Monitor</h3><strong>Digital News Journalist Intern</strong><p>Practical newsroom experience involving published news articles, digital reporting, photo captions, event coverage, reels and broadcast co-hosting.</p></div><div><span>MAY — JUNE 2026</span><h3>Amianan Balita Ngayon</h3><strong>Newspaper Journalist Intern</strong><p>Experience in print and digital journalism, producing published local news stories, Facebook coverage and video content.</p></div></div>}
      {open === 'education' && <div className="single-detail"><GraduationCap size={54} /><h3>Bachelor of Arts in Communication</h3><p>Graduated September 26, 2026.</p><span>Class of 2026 · Communication, journalism and media</span></div>}
      {open === 'about' && <div className="about-detail"><ImageWithFallback src="/images/profile.jpg" alt="Rommel Fangot Jr." /><div><h3>Hi, I'm Rommel.</h3><p>I'm a Bachelor of Arts in Communication graduate with hands-on experience in print and digital journalism, news writing, field reporting, creative content production, and visual storytelling. Through my internships at Amianan Balita Ngayon and North Luzon Monitor, I've had opportunities to explore local stories, cover community events, contribute published articles, and work with digital media formats.</p><p>Beyond reporting, I enjoy bringing ideas to life through graphic design, video editing, and other creative projects. I believe meaningful communication begins with curiosity, careful listening, and a commitment to telling stories that matter. I'm excited to continue learning, collaborate with creative teams, and contribute to projects that inform, connect, and inspire audiences.</p><div className="tools-line"><strong>Creative toolkit</strong><span>Canva · Adobe Photoshop · CapCut · Figma · Microsoft Office · Google Workspace</span></div></div></div>}
      {open === 'contact' && <div className="contact-detail"><h3>LET'S MAKE SOMETHING MEANINGFUL.</h3><p>Open to professional opportunities, creative collaborations, and conversations about journalism and media.</p><a className="email-cta" href="mailto:rommeljrfangot@gmail.com"><Mail size={20} /> rommeljrfangot@gmail.com <ArrowUpRight size={19} /></a><div className="contact-socials">{SOCIALS.filter(s => s.label !== 'Email').map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer"><Icon size={22} />{label}<ArrowUpRight size={16} /></a>)}</div></div>}
    </div></section></div>}
    {lightbox && <div className="lightbox" onMouseDown={e => { if (e.target === e.currentTarget) setLightbox(null); }} role="dialog" aria-modal="true" aria-label="Image preview"><button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close preview"><X /></button><button className="lightbox-prev" onClick={() => setLightbox(v => ({ ...v, index: (v.index - 1 + v.items.length) % v.items.length }))} aria-label="Previous image"><ChevronLeft /></button><div className="lightbox-content"><ImageWithFallback src={lightbox.items[lightbox.index].src} alt={lightbox.items[lightbox.index].title} /><p>{lightbox.items[lightbox.index].title} · {lightbox.index + 1} / {lightbox.items.length}</p></div><button className="lightbox-next" onClick={() => setLightbox(v => ({ ...v, index: (v.index + 1) % v.items.length }))} aria-label="Next image"><ChevronRight /></button></div>}
  </div>;
}
export default App;
