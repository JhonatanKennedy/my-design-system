import { useState } from "react";
import { Menu } from "lucide-react";
import { Badge, Toggle, useTheme } from "@jhonatankennedy/ui-react";

const NAV_ITEMS = ["Componentes", "Tokens", "Docs", "GitHub"];

export function NavBar() {
  const { isDark, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="app__nav">
      <div className="app__nav-container">
        <div className="app__nav-brand-group">
          <div className="app__nav-logo">INK</div>
          <span className="app__nav-title">UI</span>
          <Badge variant="neutral">v1.0</Badge>
        </div>
        <div className="app__nav-links">
          {NAV_ITEMS.map((item) => (
            <a key={item} href="#" className="app__nav-link">
              {item}
            </a>
          ))}
          <Toggle checked={isDark} onChange={toggleTheme} label="Dark mode" />
        </div>
        <button className="app__nav-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          <Menu size={24} />
        </button>
      </div>
      {mobileOpen && (
        <div className="app__nav-mobile">
          {NAV_ITEMS.map((item) => (
            <a key={item} href="#" className="app__nav-mobile-link">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
