function Header({
  logo,
  t,
  setIsMenuOpen,
  setIsOpen,
  i18n,
  isOpen,
  changeLanguage,
  navItems,
  activeIndex,
  navRef,
  setActiveIndex,
  indicatorStyle,
}) {
  return (
    <>
      {/* main header */}
      <header className="header">
        {logo && <img className="headerLogo" src={logo} alt="logo" />}
        <h3 className="headerTitle">{t("welcome")}</h3>
        {/* burger menu */}
        <button
          className="open-btn material-symbols-outlined"
          onClick={() => setIsMenuOpen(true)}
        >
          menu
        </button>
      </header>

      {/* header information */}
      <div className="sub-header">
        <div className="lang-dropdown">
          <button className="lang-button" onClick={() => setIsOpen(!isOpen)}>
            🌐 {i18n.language.toUpperCase()} ▼
          </button>

          {isOpen && (
            <div className="lang-menu">
              {["en", "kr"].map((lang) => (
                <div
                  key={lang}
                  className="lang-option"
                  onClick={() => changeLanguage(lang)}
                >
                  {lang.toUpperCase()}
                </div>
              ))}
            </div>
          )}
        </div>

        <h4>{t("dine_in")}</h4>

        <h4>{t("table")} # 1</h4>
      </div>

      {/* header navigation */}
      <nav className="navbar-container">
        <div className="navbar">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`nav-item ${index === activeIndex ? "active" : ""}`}
              ref={(el) => (navRef.current[index] = el)}
              onClick={() => setActiveIndex(index)}
            >
              <div className="navbar-category" key={item.id}>
                <img src={item.icon} alt={item.label} width={24} height={24} />
                {item.label}
              </div>
            </div>
          ))}
          <div className="nav-indicator" style={indicatorStyle} />
        </div>
      </nav>
    </>
  );
}

export default Header;
