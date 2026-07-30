import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  FiArrowRight,
  FiBriefcase,
  FiChevronDown,
  FiCode,
  FiHeadphones,
  FiInfo,
  FiMenu,
  FiMessageSquare,
  FiMoon,
  FiSearch,
  FiShoppingBag,
  FiSun,
  FiX,
} from 'react-icons/fi';
import TopBar from './Topbar';
import { useSitePreferences } from '../../context/SitePreferences';

const MAX_Z_INDEX = 2147483647;

const navLinkClass = ({ isActive }) =>
  `sg-link-line text-[0.78rem] font-bold uppercase tracking-[0.1em] transition-colors ${isActive
    ? 'text-[#0068B8]'
    : 'text-[#20232e]/[0.72] hover:text-[#0068B8] dark:text-white/[0.72] dark:hover:text-white'
  }`;

const resourceLinks = [
  { href: '/developerx', label: 'Developers', icon: FiCode },
  { href: '/careers', label: 'Careers', icon: FiBriefcase },
  { href: '/shop', label: 'Shop', icon: FiShoppingBag },
  { href: '/chat-support', label: 'Xempi support', icon: FiHeadphones },
];

const serviceGroups = [
  {
    heading: 'Offensive Security',
    description: 'Simulate real attackers before real attackers find the gap.',
    links: ['red-team', 'penetration-testing', 'vulnerability-assessment'],
  },
  {
    heading: 'Digital Platforms',
    description: 'Build web products, commerce platforms, and application layers with security in the design.',
    links: ['web-development', 'ecommerce-security', 'application-security'],
  },
  {
    heading: 'Cloud and Managed Security',
    description: 'Harden cloud estates, monitor exposure, and keep security operations moving.',
    links: ['cloud-security', 'security-monitoring', 'ai-security'],
  },
];

const services = [
  {
    slug: 'red-team',
    title: 'Red Team Simulation',
    shortTitle: 'Red Team',
    category: 'Offensive Security',
    summary:
      'Realistic adversary simulations across digital, social, and operational entry points to test detection and response.',
  },
  {
    slug: 'penetration-testing',
    title: 'Penetration Testing',
    shortTitle: 'Penetration Testing',
    category: 'Offensive Security',
    summary:
      'Manual and automated testing for applications, infrastructure, APIs, and exposed digital assets.',
  },
  {
    slug: 'vulnerability-assessment',
    title: 'Vulnerability Assessment',
    shortTitle: 'Vulnerability Assessment',
    category: 'Offensive Security',
    summary:
      'Find, prioritize, and track vulnerabilities across critical systems before they become incidents.',
  },
  {
    slug: 'web-development',
    title: 'Secure Web Development',
    shortTitle: 'Web Development',
    category: 'Digital Platforms',
    summary:
      'Business websites, portals, dashboards, and application frontends designed for speed, usability, and security.',
  },
  {
    slug: 'ecommerce-security',
    title: 'E-Commerce Security',
    shortTitle: 'E-Commerce',
    category: 'Digital Platforms',
    summary:
      'Secure storefronts, payment flows, customer accounts, and operational dashboards for growing commerce brands.',
  },
  {
    slug: 'application-security',
    title: 'Application Security',
    shortTitle: 'Application Security',
    category: 'Digital Platforms',
    summary:
      'Security design reviews, application testing, and secure development support for teams building software.',
  },
  {
    slug: 'cloud-security',
    title: 'Cloud Security',
    shortTitle: 'Cloud Security',
    category: 'Cloud and Managed Security',
    summary:
      'Configuration reviews, identity hardening, and cloud architecture assessments for modern environments.',
  },
  {
    slug: 'security-monitoring',
    title: 'Security Monitoring',
    shortTitle: 'Security Monitoring',
    category: 'Cloud and Managed Security',
    summary:
      'Continuous visibility, alert triage, and vulnerability follow-up for teams that need security momentum.',
  },
  {
    slug: 'ai-security',
    title: 'AI and Automation Security',
    shortTitle: 'AI Security',
    category: 'Cloud and Managed Security',
    summary:
      'Security reviews for AI-enabled workflows, automation, data use, and model-adjacent application surfaces.',
  },
];

const solutions = [
  {
    slug: 'security-awareness',
    title: 'Security Awareness',
    summary:
      'Practical training that helps teams identify phishing, credential abuse, social engineering, and unsafe data handling.',
  },
  {
    slug: 'phishing-simulation',
    title: 'Phishing Simulation',
    summary:
      'Realistic campaigns that measure staff readiness and convert mistakes into targeted learning.',
  },
  {
    slug: 'ransomware-simulation',
    title: 'Ransomware Simulation',
    summary:
      'Scenario-based exercises that test decision-making, recovery planning, communication, and business continuity.',
  },
];

const MegaMenu = ({ onNavigate }) => (
  <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
    <div className="grid gap-0 border-y border-[#20232e]/10 md:grid-cols-3 dark:border-white/10">
      {serviceGroups.map((group) => (
        <div key={group.heading} className="border-b border-[#20232e]/10 p-4 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 dark:border-white/10">
          <p className="text-sm font-bold text-[#0068B8]">{group.heading}</p>

          <p className="mt-2 text-xs leading-relaxed text-[#20232e]/[0.55] dark:text-white/50">
            {group.description}
          </p>

          <div className="mt-4 space-y-2">
            {group.links.map((slug) => {
              const service = services.find((item) => item.slug === slug);
              if (!service) return null;

              return (
                <Link
                  key={slug}
                  to={`/services/${slug}`}
                  onClick={onNavigate}
                  className="group flex items-center justify-between gap-3 border-t border-[#20232e]/10 py-2.5 text-sm font-semibold text-[#20232e]/75 transition hover:text-[#0068B8] dark:border-white/10 dark:text-white/75 dark:hover:text-white"
                >
                  {service.shortTitle}
                  <FiArrowRight className="h-4 w-4 text-[#00B51D] transition group-hover:translate-x-1" />
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>

    <div className="border border-[#20232e]/10 bg-[#faf6ee] p-5 dark:border-white/10 dark:bg-white/5">
      <div className="space-y-3">
        {solutions.map((solution) => (
          <Link
            key={solution.slug}
            to={`/solutions/${solution.slug}`}
            onClick={onNavigate}
            className="group block border-b border-[#20232e]/10 pb-4 last:border-b-0 dark:border-white/10"
          >
            <span className="flex items-center justify-between text-sm font-semibold text-[#20232e] dark:text-white">
              {solution.title}
              <FiArrowRight className="h-4 w-4 text-[#00B51D] transition group-hover:translate-x-1" />
            </span>

            <span className="mt-1 block text-xs leading-relaxed text-[#20232e]/[0.55] dark:text-white/50">
              {solution.summary}
            </span>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const { theme, toggleTheme } = useSitePreferences();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [query, setQuery] = useState('');

  const location = useLocation();
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchActive(false);
    setMegaOpen(false);
    setResourcesOpen(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isSearchActive) return undefined;

    const closeOnOutsideClick = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchActive(false);
      }
    };

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsSearchActive(false);
      }
    };

    document.addEventListener('mousedown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isSearchActive]);

  const searchResults = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) return services.slice(0, 4);

    return services
      .filter((service) =>
        `${service.title} ${service.category} ${service.summary}`.toLowerCase().includes(normalized)
      )
      .slice(0, 5);
  }, [query]);

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setMegaOpen(false);
    setResourcesOpen(false);
    setIsSearchActive(false);
  };

  const logoClass = 'sg-brand-logo h-auto w-32 object-contain sm:w-40 lg:w-44';

  const navThemeClass =
    theme === 'dark'
      ? isScrolled
        ? 'border-b border-white/10 bg-[#050608]/95 backdrop-blur-xl'
        : 'border-b border-white/10 bg-[#050608]/95 backdrop-blur-xl'
      : isScrolled
        ? 'border-b border-[#20232e]/15 bg-[#f5efe3]/95 backdrop-blur-xl'
        : 'border-b border-[#20232e]/10 bg-[#f5efe3]/[0.92] backdrop-blur-xl';

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 isolate transition-all duration-300 ${navThemeClass}`}
        style={{ zIndex: MAX_Z_INDEX }}
      >
        <TopBar />

        <div className="sg-shell flex h-[72px] items-center justify-between gap-4 max-lg:h-16 max-lg:px-0">
          <Link to="/" className="flex flex-none items-center" aria-label="SeptaGreen home">
            <img src="/septagreen-logo.png" alt="SeptaGreen" className={logoClass} />
          </Link>

          <div className="hidden items-center gap-5 xl:flex xl:gap-6">
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                type="button"
                onFocus={() => setMegaOpen(true)}
                className="flex items-center gap-1 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-[#20232e]/[0.72] transition hover:text-[#0068B8] dark:text-white/[0.72] dark:hover:text-white"
              >
                Services
                <FiChevronDown className={`h-4 w-4 transition ${megaOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`absolute left-1/2 top-full w-[min(88vw,920px)] -translate-x-1/2 pt-5 transition ${megaOpen
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-2 opacity-0'
                  }`}
                style={{ zIndex: MAX_Z_INDEX }}
              >
                <div className="border border-[#20232e]/[0.12] bg-[#fffdf8]/[0.98] p-5 backdrop-blur-xl dark:border-white/10 dark:bg-[#151718]/[0.98]">
                  <MegaMenu onNavigate={closeMenus} />
                </div>
              </div>
            </div>

            <NavLink to="/identity" className={navLinkClass}>
              Identity
            </NavLink>

            <NavLink to="/insights" className={navLinkClass}>
              Insights
            </NavLink>

            <NavLink to="/developerx" className={navLinkClass}>
              Developers
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button
                type="button"
                onFocus={() => setResourcesOpen(true)}
                className="flex items-center gap-1 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-[#20232e]/[0.72] transition hover:text-[#0068B8] dark:text-white/[0.72] dark:hover:text-white"
              >
                More
                <FiChevronDown className={`h-4 w-4 transition ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`absolute right-0 top-full w-56 pt-4 transition ${resourcesOpen
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-2 opacity-0'
                  }`}
                style={{ zIndex: MAX_Z_INDEX }}
              >
                <div className="border border-[#20232e]/[0.12] bg-[#fffdf8]/[0.98] p-2 backdrop-blur-xl dark:border-white/10 dark:bg-[#151718]/[0.98]">
                  {resourceLinks.slice(1).map(({ href, label, icon: Icon }) => (
                    <Link
                      key={href}
                      to={href}
                      onClick={closeMenus}
                      className="flex items-center gap-3 border-b border-[#20232e]/10 px-3 py-3 text-sm font-semibold text-[#20232e]/75 transition last:border-b-0 hover:text-[#0068B8] dark:border-white/10 dark:text-white/75 dark:hover:text-white"
                    >
                      <Icon className="h-4 w-4 text-[#0068B8]" />
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="sg-icon-button hidden text-[#20232e] dark:border-white/15 dark:text-white sm:flex"
              aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>

            <div ref={searchRef} className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => setIsSearchActive((value) => !value)}
                className="sg-icon-button text-[#20232e] dark:border-white/15 dark:text-white"
                aria-label="Search services"
              >
                {isSearchActive ? <FiX /> : <FiSearch />}
              </button>

              <div
                className={`absolute right-0 top-12 w-80 overflow-hidden border border-[#20232e]/[0.12] bg-[#fffdf8] transition dark:border-white/10 dark:bg-[#151718] ${isSearchActive
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-2 opacity-0'
                  }`}
                style={{ zIndex: MAX_Z_INDEX }}
              >
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search security services"
                  className="w-full border-b border-[#20232e]/10 bg-[#faf6ee] px-4 py-3 text-sm text-[#20232e] outline-none placeholder:text-[#20232e]/40 focus:border-[#0068B8] dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40"
                />

                <div className="p-2">
                  {searchResults.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={closeMenus}
                      className="block border-b border-[#20232e]/10 px-3 py-3 text-sm text-[#20232e]/75 transition last:border-b-0 hover:text-[#0068B8] dark:border-white/10 dark:text-white/75 dark:hover:text-white"
                    >
                      <span className="font-semibold">{service.shortTitle}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/request-assessment"
              className="sg-button sg-button-primary hidden md:inline-flex dark:border-white dark:bg-white dark:text-[#20232e] dark:hover:bg-transparent dark:hover:text-white"
            >
              Request assessment
            </Link>

            <Link
              to="/contact"
              className="sg-button sg-button-brand hidden md:inline-flex"
            >
              Contact
            </Link>

            <Link
              to="/request-assessment"
              className="inline-flex min-h-11 items-center justify-center border border-[#0068B8] bg-[#0068B8] px-4 py-2 text-xs font-black uppercase tracking-wide text-white transition active:scale-95 sm:hidden"
            >
              Request
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex h-11 w-11 items-center justify-center border border-[#20232e]/15 bg-[#fffdf8] text-[#20232e] transition active:scale-95 dark:border-white/15 dark:bg-white/10 dark:text-white xl:hidden"
              aria-label="Open menu"
            >
              <FiMenu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition duration-300 xl:hidden ${isMobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
        style={{ zIndex: MAX_Z_INDEX }}
        onClick={closeMenus}
      />

      <aside
        className={`fixed bottom-0 right-0 top-0 flex w-full max-w-[420px] flex-col border-l border-white/10 bg-[#050608] text-white transition-transform duration-500 ease-out xl:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ zIndex: MAX_Z_INDEX }}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
          <Link to="/" onClick={closeMenus} className="flex items-center">
            <img
              src="/septagreen-logo.png"
              alt="SeptaGreen"
              className="sg-brand-logo h-auto w-36 object-contain brightness-0 invert"
            />
          </Link>

          <button
            type="button"
            onClick={closeMenus}
            className="flex h-11 w-11 items-center justify-center border border-white/15 bg-white/10 text-white transition active:scale-95"
            aria-label="Close menu"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex w-full items-center justify-center gap-2 border border-white/15 bg-white/5 px-4 py-3 text-sm font-bold"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          <div>
            <div className="grid gap-2">
              {[
                ['/identity', 'Identity', FiInfo],
                ['/insights', 'Insights', FiMessageSquare],
                ['/developerx', 'Developers', FiCode],
              ].map(([href, label, Icon]) => (
                <Link
                  key={href}
                  to={href}
                  onClick={closeMenus}
                  className="group flex items-center justify-between border border-white/10 bg-white/[0.04] px-4 py-4 transition hover:border-[#0068B8]/60 hover:bg-[#0068B8]/10"
                >
                  <span className="flex items-center gap-3 text-lg font-black">
                    <span className="flex h-10 w-10 items-center justify-center border border-white/10 bg-[#0068B8]/15 text-[#00B51D]">
                      <Icon className="h-5 w-5" />
                    </span>
                    {label}
                  </span>

                  <FiArrowRight className="h-5 w-5 text-white/[0.45] transition group-hover:translate-x-1 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="grid gap-2">
              {resourceLinks.slice(1).map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  to={href}
                  onClick={closeMenus}
                  className="group flex items-center justify-between border border-white/10 bg-white/[0.04] px-4 py-4 transition hover:border-[#00B51D]/50 hover:bg-[#00B51D]/10"
                >
                  <span className="flex items-center gap-3 text-base font-bold">
                    <span className="flex h-9 w-9 items-center justify-center border border-white/10 bg-white/10 text-[#00B51D]">
                      <Icon className="h-4 w-4" />
                    </span>
                    {label}
                  </span>

                  <FiArrowRight className="h-5 w-5 text-white/[0.45] transition group-hover:translate-x-1 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="grid gap-3">
              {services.slice(0, 6).map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  onClick={closeMenus}
                  className="border border-white/10 bg-white/[0.04] p-4 transition hover:border-[#0068B8]/60 hover:bg-[#0068B8]/10"
                >
                  <span className="block text-base font-black">
                    {service.shortTitle}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 border-t border-white/10 p-5">
          <Link
            to="/request-assessment"
            onClick={closeMenus}
            className="flex w-full items-center justify-center gap-2 bg-white px-3 py-4 text-xs font-black uppercase tracking-wide text-[#050608] transition active:scale-[0.98] sm:text-sm"
          >
            Assessment
            <FiArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            onClick={closeMenus}
            className="flex w-full items-center justify-center gap-2 border border-white/20 bg-[#0068B8] px-3 py-4 text-xs font-black uppercase tracking-wide text-white transition active:scale-[0.98] sm:text-sm"
          >
            Contact
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
