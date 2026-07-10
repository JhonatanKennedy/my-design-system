const FOOTER_LINKS = ["Docs", "GitHub", "NPM", "Figma"];

export function Footer() {
  return (
    <footer className="app__footer">
      <div className="app__footer-inner">
        <div>
          <div className="app__footer-brand">INK UI</div>
          <p className="app__footer-tagline">Design system · Estilo Quadrinhos</p>
        </div>
        <div className="app__footer-center">
          <p className="app__footer-credit">Feito com tinta e paixão</p>
          <p className="app__footer-copy">© 2026 · MIT License</p>
        </div>
        <div className="app__footer-links">
          {FOOTER_LINKS.map((l) => (
            <a key={l} href="#" className="app__footer-link">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
