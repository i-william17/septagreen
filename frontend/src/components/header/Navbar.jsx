import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  FiArrowRight,
  FiBriefcase,
  FiChevronDown,
  FiCode,
  FiGlobe,
  FiHeadphones,
  FiInfo,
  FiMenu,
  FiMessageSquare,
  FiMoon,
  FiSearch,
  FiShield,
  FiShoppingBag,
  FiSun,
  FiX,
} from 'react-icons/fi';
import TopBar from './Topbar';
import { serviceGroups, services, solutions } from '../../data/siteContent';
import { useSitePreferences } from '../../context/SitePreferences';

const MAX_Z_INDEX = 2147483647;

const navLinkClass = ({ isActive }) =>
  `sg-link-line text-sm font-semibold transition-colors ${isActive
    ? 'text-[#0068B8]'
    : 'text-[#20232e]/80 hover:text-[#0068B8] dark:text-white/75 dark:hover:text-white'
  }`;

const resourceLinks = [
  { href: '/developerx', labelKey: 'developers', icon: FiCode },
  { href: '/careers', labelKey: 'careers', icon: FiBriefcase },
  { href: '/shop', labelKey: 'shop', icon: FiShoppingBag },
  { href: '/chat-support', labelKey: 'support', icon: FiHeadphones },
];

const MegaMenu = ({ onNavigate, text }) => (
  <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
    <div className="grid gap-4 md:grid-cols-3">
      {serviceGroups.map((group) => (
        <div key={group.heading} className="border-l border-[#20232e]/15 pl-4 dark:border-white/10">
          <p className="text-sm font-bold text-[#0068B8]">{group.heading}</p>

          <p className="mt-2 text-xs leading-relaxed text-[#20232e]/55 dark:text-white/50">
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
                  className="group flex items-center justify-between gap-3 px-3 py-2 text-sm font-semibold text-[#20232e]/75 transition hover:bg-[#f3f7f6] hover:text-[#0068B8] dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
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

    <div className="border border-[#20232e]/10 bg-[#f3f7f6] p-5 dark:border-white/10 dark:bg-white/5">
      <p className="text-xs font-semibold uppercase text-[#20232e]/45 dark:text-white/40">
        {text.nav.solutions}
      </p>

      <div className="mt-4 space-y-3">
        {solutions.map((solution) => (
          <Link
            key={solution.slug}
            to={`/solutions/${solution.slug}`}
            onClick={onNavigate}
            className="group block border-b border-[#20232e]/10 pb-3 last:border-b-0 dark:border-white/10"
          >
            <span className="flex items-center justify-between text-sm font-semibold text-[#20232e] dark:text-white">
              {solution.title}
              <FiArrowRight className="h-4 w-4 text-[#00B51D] transition group-hover:translate-x-1" />
            </span>

            <span className="mt-1 block text-xs leading-relaxed text-[#20232e]/55 dark:text-white/50">
              {solution.summary}
            </span>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const { language, text, theme, toggleLanguage, toggleTheme } = useSitePreferences();

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

  const logoClass = 'sg-brand-logo h-auto w-32 object-contain sm:w-44 lg:w-52';

  const navThemeClass =
    theme === 'dark'
      ? isScrolled
        ? 'border-b border-white/10 bg-[#050608]/95 shadow-xl shadow-black/40 backdrop-blur-xl'
        : 'border-b border-white/10 bg-[#050608]/95 backdrop-blur-xl'
      : isScrolled
        ? 'border-b border-[#20232e]/10 bg-white/95 shadow-xl shadow-black/10 backdrop-blur-xl'
        : 'border-b border-[#20232e]/10 bg-white/95 backdrop-blur-xl';

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 isolate transition-all duration-300 ${navThemeClass}`}
        style={{ zIndex: MAX_Z_INDEX }}
      >
        <TopBar />

        <div className="sg-shell flex h-20 items-center justify-between gap-4 max-lg:h-16 max-lg:px-4">
          <Link to="/" className="flex items-center" aria-label="SeptaGreen home">
            <img src="/septagreen-logo.png" alt="SeptaGreen" className={logoClass} />
          </Link>

          <div className="hidden items-center gap-5 xl:gap-7 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                type="button"
                onFocus={() => setMegaOpen(true)}
                className="flex items-center gap-1 text-sm font-semibold text-[#20232e]/80 transition hover:text-[#0068B8] dark:text-white/80 dark:hover:text-white"
              >
                {text.nav.services}
                <FiChevronDown className={`h-4 w-4 transition ${megaOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`absolute left-1/2 top-full w-[min(88vw,920px)] -translate-x-1/2 pt-5 transition ${megaOpen
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-2 opacity-0'
                  }`}
                style={{ zIndex: MAX_Z_INDEX }}
              >
                <div className="border border-[#20232e]/10 bg-white/95 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl dark:border-white/10 dark:bg-[#20232e]/95">
                  <MegaMenu onNavigate={closeMenus} text={text} />
                </div>
              </div>
            </div>

            <NavLink to="/identity" className={navLinkClass}>
              {text.nav.identity}
            </NavLink>

            <NavLink to="/insights" className={navLinkClass}>
              {text.nav.insights}
            </NavLink>

            <NavLink to="/developerx" className={navLinkClass}>
              {text.nav.developers}
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              {text.nav.contact}
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button
                type="button"
                onFocus={() => setResourcesOpen(true)}
                className="flex items-center gap-1 text-sm font-semibold text-[#20232e]/80 transition hover:text-[#0068B8] dark:text-white/75 dark:hover:text-white"
              >
                {text.nav.more}
                <FiChevronDown className={`h-4 w-4 transition ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`absolute right-0 top-full w-56 pt-4 transition ${resourcesOpen
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-2 opacity-0'
                  }`}
                style={{ zIndex: MAX_Z_INDEX }}
              >
                <div className="border border-[#20232e]/10 bg-white/95 p-2 shadow-2xl shadow-black/20 backdrop-blur-xl dark:border-white/10 dark:bg-[#20232e]/95">
                  {resourceLinks.slice(1).map(({ href, labelKey, icon: Icon }) => (
                    <Link
                      key={href}
                      to={href}
                      onClick={closeMenus}
                      className="flex items-center gap-3 px-3 py-3 text-sm font-semibold text-[#20232e]/75 transition hover:bg-[#f3f7f6] hover:text-[#0068B8] dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
                    >
                      <Icon className="h-4 w-4 text-[#0068B8]" />
                      {text.nav[labelKey]}
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
              className="hidden h-10 w-10 items-center justify-center border border-[#20232e]/15 text-[#20232e] transition hover:border-[#0068B8] hover:text-[#0068B8] dark:border-white/15 dark:text-white sm:flex"
              aria-label={theme === 'dark' ? text.controls.themeLight : text.controls.themeDark}
              title={theme === 'dark' ? text.controls.themeLight : text.controls.themeDark}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>

            <button
              type="button"
              onClick={toggleLanguage}
              className="hidden h-10 items-center gap-2 border border-[#20232e]/15 px-3 text-xs font-bold text-[#20232e] transition hover:border-[#0068B8] hover:text-[#0068B8] dark:border-white/15 dark:text-white sm:flex"
              aria-label={text.controls.language}
              title={text.controls.language}
            >
              <FiGlobe className="h-4 w-4" />
              {language === 'en' ? text.controls.english : text.controls.swahili}
            </button>

            <div ref={searchRef} className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => setIsSearchActive((value) => !value)}
                className="flex h-10 w-10 items-center justify-center border border-[#20232e]/15 text-[#20232e] transition hover:border-[#0068B8] hover:text-[#0068B8] dark:border-white/15 dark:text-white"
                aria-label={text.nav.searchServices}
              >
                {isSearchActive ? <FiX /> : <FiSearch />}
              </button>

              <div
                className={`absolute right-0 top-12 w-80 overflow-hidden border border-[#20232e]/10 bg-white shadow-2xl transition dark:border-white/10 dark:bg-[#20232e] ${isSearchActive
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-2 opacity-0'
                  }`}
                style={{ zIndex: MAX_Z_INDEX }}
              >
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={text.nav.searchPlaceholder}
                  className="w-full border-b border-[#20232e]/10 bg-[#f3f7f6] px-4 py-3 text-sm text-[#20232e] outline-none placeholder:text-[#20232e]/40 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40"
                />

                <div className="p-2">
                  {searchResults.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={closeMenus}
                      className="block px-3 py-3 text-sm text-[#20232e]/75 transition hover:bg-[#f3f7f6] hover:text-[#0068B8] dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
                    >
                      <span className="font-semibold">{service.shortTitle}</span>
                      <span className="block text-xs text-[#20232e]/45 dark:text-white/40">
                        {service.category}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="hidden border-2 border-[#20232e] bg-[#20232e] px-5 py-3 text-sm font-bold uppercase text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-transparent hover:text-[#20232e] dark:border-white dark:bg-white dark:text-[#20232e] dark:hover:bg-transparent dark:hover:text-white md:inline-flex"
            >
              {text.nav.requestAssessment}
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#0068B8]/40 bg-[#0068B8] px-4 py-2 text-xs font-black uppercase tracking-wide text-white shadow-lg shadow-[#0068B8]/20 transition active:scale-95 sm:hidden"
            >
              Request
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#20232e]/15 bg-white text-[#20232e] shadow-lg shadow-black/10 transition active:scale-95 dark:border-white/15 dark:bg-white/10 dark:text-white lg:hidden"
              aria-label="Open menu"
            >
              <FiMenu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition duration-300 lg:hidden ${isMobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
        style={{ zIndex: MAX_Z_INDEX }}
        onClick={closeMenus}
      />

      <aside
        className={`fixed bottom-0 right-0 top-0 flex w-full max-w-[420px] flex-col bg-[#050608] text-white shadow-2xl shadow-black/50 transition-transform duration-500 ease-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition active:scale-95"
            aria-label="Close menu"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-bold"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
            {theme === 'dark' ? text.controls.themeLight : text.controls.themeDark}
          </button>

          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-bold"
          >
            <FiGlobe />
            {language === 'en' ? text.controls.english : text.controls.swahili}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-white/35">
              Navigation
            </p>

            <div className="mt-4 grid gap-2">
              {[
                ['/identity', text.nav.identity, FiInfo],
                ['/insights', text.nav.insights, FiMessageSquare],
                ['/developerx', text.nav.developers, FiCode],
                ['/contact', text.nav.contact, FiShield],
              ].map(([href, label, Icon]) => (
                <Link
                  key={href}
                  to={href}
                  onClick={closeMenus}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 transition hover:border-[#0068B8]/60 hover:bg-[#0068B8]/10"
                >
                  <span className="flex items-center gap-3 text-lg font-black">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0068B8]/15 text-[#00B51D]">
                      <Icon className="h-5 w-5" />
                    </span>
                    {label}
                  </span>

                  <FiArrowRight className="h-5 w-5 text-white/45 transition group-hover:translate-x-1 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-white/35">
              More
            </p>

            <div className="mt-4 grid gap-2">
              {resourceLinks.slice(1).map(({ href, labelKey, icon: Icon }) => (
                <Link
                  key={href}
                  to={href}
                  onClick={closeMenus}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 transition hover:border-[#00B51D]/50 hover:bg-[#00B51D]/10"
                >
                  <span className="flex items-center gap-3 text-base font-bold">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#00B51D]">
                      <Icon className="h-4 w-4" />
                    </span>
                    {text.nav[labelKey]}
                  </span>

                  <FiArrowRight className="h-5 w-5 text-white/45 transition group-hover:translate-x-1 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-white/35">
              {text.nav.services}
            </p>

            <div className="mt-4 grid gap-3">
              {services.slice(0, 6).map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  onClick={closeMenus}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-[#0068B8]/60 hover:bg-[#0068B8]/10"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-[#00B51D]">
                    {service.category}
                  </span>

                  <span className="mt-1 block text-base font-black">
                    {service.shortTitle}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 p-5">
          <Link
            to="/contact"
            onClick={closeMenus}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-black uppercase tracking-wide text-[#050608] shadow-xl shadow-black/20 transition active:scale-[0.98]"
          >
            {text.nav.requestAssessment}
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;