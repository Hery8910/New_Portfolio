export function NavBar({ theme, toggleTheme }) {
    const { t } = useTranslation();
  
    return (
      <nav className="navbar">
        <Link to="/" className="navbar-link">{t('nav.home')}</Link>
        <div>
          <a href="https://linkedin.com/in/tuPerfil" target="_blank" rel="noopener noreferrer" className="navbar-link">{t('nav.linkedin')}</a>
          <a href="https://github.com/tuPerfil" target="_blank" rel="noopener noreferrer" className="navbar-link">{t('nav.github')}</a>
          <LanguageSwitcher />
        </div>
      </nav>
    );
  };