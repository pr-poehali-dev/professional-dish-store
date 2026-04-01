import { ShoppingCart, Search, Phone, Menu } from "lucide-react";

interface HeaderProps {
  search: string;
  setSearch: (v: string) => void;
  totalItems: number;
  onCartOpen: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
}

export default function Header({
  search,
  setSearch,
  totalItems,
  onCartOpen,
  mobileMenuOpen,
  setMobileMenuOpen,
}: HeaderProps) {
  return (
    <header style={{ background: "var(--white)", boxShadow: "var(--shadow-md)", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 var(--offset)", display: "flex", alignItems: "center", gap: 24, height: 64 }}>

        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
          <div style={{
            width: 38, height: 38,
            background: "var(--primary)",
            borderRadius: 4,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: 20, color: "var(--ex-dr-gray)",
          }}>П</div>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: "var(--ex-dr-gray)" }}>ПосудаОпт</div>
            <div style={{ fontSize: 11, color: "var(--gray)" }}>для кафе и ресторанов</div>
          </div>
        </a>

        {/* Search */}
        <div style={{ flex: 1, maxWidth: 520, position: "relative" }}>
          <Search style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--gray)", width: 16, height: 16 }} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск товаров..."
            className="kr-input"
            style={{ width: "100%", paddingLeft: 38, boxSizing: "border-box" }}
          />
        </div>

        {/* Nav links (desktop) */}
        <nav style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 14 }} className="hidden md:flex">
          <a href="/" style={{ color: "var(--dr-gray)", textDecoration: "none", transition: "color 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--ex-dr-gray)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--dr-gray)")}>Каталог</a>
          <a href="/" style={{ color: "var(--dr-gray)", textDecoration: "none", transition: "color 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--ex-dr-gray)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--dr-gray)")}>Доставка</a>
          <a href="/" style={{ color: "var(--dr-gray)", textDecoration: "none", transition: "color 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--ex-dr-gray)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--dr-gray)")}>О нас</a>
        </nav>

        {/* Phone */}
        <a href="tel:+78001234567"
          style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, color: "var(--dr-gray)", textDecoration: "none", flexShrink: 0, whiteSpace: "nowrap" }}
          className="hidden md:flex">
          <Phone style={{ width: 15, height: 15, color: "var(--secondary)" }} />
          8-800-123-45-67
        </a>

        {/* Cart button */}
        <button
          onClick={onCartOpen}
          style={{
            position: "relative",
            display: "flex", alignItems: "center", gap: 8,
            background: "var(--primary)",
            color: "var(--ex-dr-gray)",
            border: "none",
            borderRadius: 4,
            padding: "9px 16px",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            flexShrink: 0,
            transition: "background 0.15s",
            fontFamily: "inherit",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "var(--primary-dark)")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--primary)")}
        >
          <ShoppingCart style={{ width: 17, height: 17 }} />
          <span className="hidden sm:inline">Корзина</span>
          {totalItems > 0 && (
            <span style={{
              position: "absolute", top: -8, right: -8,
              background: "var(--red)", color: "var(--white)",
              fontSize: 11, fontWeight: 700,
              borderRadius: "50%", width: 20, height: 20,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>{totalItems}</span>
          )}
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 6, borderRadius: 4 }}
        >
          <Menu style={{ width: 22, height: 22, color: "var(--dr-gray)" }} />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div style={{ borderTop: "1px solid var(--lt-gray)", background: "var(--white)", padding: "12px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
          <a href="tel:+78001234567" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--dr-gray)", textDecoration: "none" }}>
            <Phone style={{ width: 15, height: 15, color: "var(--secondary)" }} />
            8-800-123-45-67
          </a>
          <a href="/" style={{ fontSize: 14, color: "var(--dr-gray)", textDecoration: "none" }}>Каталог</a>
          <a href="/" style={{ fontSize: 14, color: "var(--dr-gray)", textDecoration: "none" }}>Доставка</a>
          <a href="/" style={{ fontSize: 14, color: "var(--dr-gray)", textDecoration: "none" }}>О нас</a>
        </div>
      )}
    </header>
  );
}
