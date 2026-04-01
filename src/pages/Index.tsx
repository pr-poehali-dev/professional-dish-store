import { useState } from "react";
import { ShoppingCart, Search, Phone, X, Plus, Minus, Menu, ChevronRight, Package, Truck, Star } from "lucide-react";

const categories = [
  { id: "all", label: "Все товары" },
  { id: "plates", label: "Тарелки" },
  { id: "cups", label: "Кружки и чашки" },
  { id: "bowls", label: "Салатники и миски" },
  { id: "cutlery", label: "Приборы" },
  { id: "glasses", label: "Стаканы и бокалы" },
  { id: "trays", label: "Подносы" },
];

const products = [
  {
    id: 1,
    name: "Тарелка белая фарфор плоская 9\" 22.5см уп 12",
    category: "plates",
    sort: "СОРТ 1",
    unit: "шт.",
    price: 185,
    oldPrice: 220,
    image: "https://cdn.poehali.dev/projects/5c0ab573-b5b1-4b50-8c64-41ac246c8113/bucket/09a539b4-d9ac-4cd3-8e13-b332b42ee1a9.jpg",
    badge: "Хит продаж",
    badgeType: "hit",
    inStock: true,
    packaging: "уп 12",
    material: "Фарфор",
    size: "22.5 см",
  },
  {
    id: 2,
    name: "Тарелка белая фарфор плоская 7\" 17.5см уп 12",
    category: "plates",
    sort: "СОРТ 1",
    unit: "шт.",
    price: 145,
    oldPrice: null,
    image: "https://cdn.poehali.dev/projects/5c0ab573-b5b1-4b50-8c64-41ac246c8113/bucket/09a539b4-d9ac-4cd3-8e13-b332b42ee1a9.jpg",
    badge: null,
    badgeType: null,
    inStock: true,
    packaging: "уп 12",
    material: "Фарфор",
    size: "17.5 см",
  },
  {
    id: 3,
    name: "Тарелка белая фарфор глубокая 8\" 20см уп 12",
    category: "plates",
    sort: "СОРТ 1",
    unit: "шт.",
    price: 210,
    oldPrice: 250,
    image: "https://cdn.poehali.dev/projects/5c0ab573-b5b1-4b50-8c64-41ac246c8113/bucket/09a539b4-d9ac-4cd3-8e13-b332b42ee1a9.jpg",
    badge: "Скидка",
    badgeType: "sale",
    inStock: true,
    packaging: "уп 12",
    material: "Фарфор",
    size: "20 см",
  },
  {
    id: 4,
    name: "Тарелка закусочная фарфор 6\" 15см уп 12",
    category: "plates",
    sort: "СОРТ 1",
    unit: "шт.",
    price: 120,
    oldPrice: null,
    image: "https://cdn.poehali.dev/projects/5c0ab573-b5b1-4b50-8c64-41ac246c8113/bucket/09a539b4-d9ac-4cd3-8e13-b332b42ee1a9.jpg",
    badge: null,
    badgeType: null,
    inStock: true,
    packaging: "уп 12",
    material: "Фарфор",
    size: "15 см",
  },
  {
    id: 5,
    name: "Чашка кофейная фарфор 90мл с блюдцем уп 6",
    category: "cups",
    sort: "СОРТ 1",
    unit: "шт.",
    price: 165,
    oldPrice: null,
    image: "https://cdn.poehali.dev/projects/5c0ab573-b5b1-4b50-8c64-41ac246c8113/bucket/09a539b4-d9ac-4cd3-8e13-b332b42ee1a9.jpg",
    badge: "Новинка",
    badgeType: "new",
    inStock: true,
    packaging: "уп 6",
    material: "Фарфор",
    size: "90 мл",
  },
  {
    id: 6,
    name: "Кружка фарфор белая 300мл уп 6",
    category: "cups",
    sort: "СОРТ 1",
    unit: "шт.",
    price: 135,
    oldPrice: null,
    image: "https://cdn.poehali.dev/projects/5c0ab573-b5b1-4b50-8c64-41ac246c8113/bucket/09a539b4-d9ac-4cd3-8e13-b332b42ee1a9.jpg",
    badge: null,
    badgeType: null,
    inStock: true,
    packaging: "уп 6",
    material: "Фарфор",
    size: "300 мл",
  },
  {
    id: 7,
    name: "Салатник фарфор круглый 16см уп 6",
    category: "bowls",
    sort: "СОРТ 1",
    unit: "шт.",
    price: 195,
    oldPrice: 230,
    image: "https://cdn.poehali.dev/projects/5c0ab573-b5b1-4b50-8c64-41ac246c8113/bucket/09a539b4-d9ac-4cd3-8e13-b332b42ee1a9.jpg",
    badge: "Скидка",
    badgeType: "sale",
    inStock: false,
    packaging: "уп 6",
    material: "Фарфор",
    size: "16 см",
  },
  {
    id: 8,
    name: "Стакан стеклянный 250мл уп 6",
    category: "glasses",
    sort: "СОРТ 1",
    unit: "шт.",
    price: 95,
    oldPrice: null,
    image: "https://cdn.poehali.dev/projects/5c0ab573-b5b1-4b50-8c64-41ac246c8113/bucket/09a539b4-d9ac-4cd3-8e13-b332b42ee1a9.jpg",
    badge: null,
    badgeType: null,
    inStock: true,
    packaging: "уп 6",
    material: "Стекло",
    size: "250 мл",
  },
  {
    id: 9,
    name: "Поднос меламин прямоугольный 36x26см",
    category: "trays",
    sort: "СОРТ 1",
    unit: "шт.",
    price: 320,
    oldPrice: null,
    image: "https://cdn.poehali.dev/projects/5c0ab573-b5b1-4b50-8c64-41ac246c8113/bucket/09a539b4-d9ac-4cd3-8e13-b332b42ee1a9.jpg",
    badge: "Хит продаж",
    badgeType: "hit",
    inStock: true,
    packaging: "1 шт.",
    material: "Меламин",
    size: "36×26 см",
  },
  {
    id: 10,
    name: "Вилка столовая нержавейка 195мм уп 12",
    category: "cutlery",
    sort: "СОРТ 1",
    unit: "шт.",
    price: 75,
    oldPrice: null,
    image: "https://cdn.poehali.dev/projects/5c0ab573-b5b1-4b50-8c64-41ac246c8113/bucket/09a539b4-d9ac-4cd3-8e13-b332b42ee1a9.jpg",
    badge: null,
    badgeType: null,
    inStock: true,
    packaging: "уп 12",
    material: "Нержавейка",
    size: "195 мм",
  },
  {
    id: 11,
    name: "Ложка столовая нержавейка 195мм уп 12",
    category: "cutlery",
    sort: "СОРТ 1",
    unit: "шт.",
    price: 75,
    oldPrice: null,
    image: "https://cdn.poehali.dev/projects/5c0ab573-b5b1-4b50-8c64-41ac246c8113/bucket/09a539b4-d9ac-4cd3-8e13-b332b42ee1a9.jpg",
    badge: "Новинка",
    badgeType: "new",
    inStock: true,
    packaging: "уп 12",
    material: "Нержавейка",
    size: "195 мм",
  },
  {
    id: 12,
    name: "Бокал для вина стеклянный 350мл уп 6",
    category: "glasses",
    sort: "СОРТ 1",
    unit: "шт.",
    price: 185,
    oldPrice: 210,
    image: "https://cdn.poehali.dev/projects/5c0ab573-b5b1-4b50-8c64-41ac246c8113/bucket/09a539b4-d9ac-4cd3-8e13-b332b42ee1a9.jpg",
    badge: "Скидка",
    badgeType: "sale",
    inStock: true,
    packaging: "уп 6",
    material: "Стекло",
    size: "350 мл",
  },
];

type CartItem = { id: number; qty: number };

function getBadgeStyle(type: string | null): React.CSSProperties {
  if (type === "hit") return { background: "#fef037", color: "#333" };
  if (type === "sale") return { background: "#d20046", color: "#fff" };
  if (type === "new") return { background: "#10b16b", color: "#fff" };
  return {};
}

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch =
      search.trim() === "" ||
      p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => {
    const p = products.find((x) => x.id === i.id);
    return s + (p ? p.price * i.qty : 0);
  }, 0);

  function addToCart(id: number) {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { id, qty: 1 }];
    });
  }

  function updateQty(id: number, delta: number) {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  }

  function getQty(id: number) {
    return cart.find((i) => i.id === id)?.qty ?? 0;
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--ex-lt-gray)", fontFamily: "var(--defaultFontFamily), Arial, sans-serif", color: "var(--ex-dr-gray)" }}>

      {/* ===== HEADER ===== */}
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
            onClick={() => setCartOpen(true)}
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

      {/* ===== BREADCRUMB ===== */}
      <div style={{ background: "var(--white)", borderBottom: "1px solid var(--lt-gray)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "8px var(--offset)", display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--gray)" }}>
          <a href="/" style={{ color: "var(--gray)", textDecoration: "none" }}>Главная</a>
          <ChevronRight style={{ width: 13, height: 13 }} />
          <span style={{ color: "var(--ex-dr-gray)" }}>Каталог</span>
        </div>
      </div>

      {/* ===== MAIN ===== */}
      <main style={{ maxWidth: 1280, margin: "0 auto", padding: "30px var(--offset)" }}>

        {/* Page title */}
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: 26, fontWeight: 700, color: "var(--ex-dr-gray)", margin: 0, lineHeight: 1.2 }}>Каталог товаров</h1>
          <p style={{ fontSize: 14, color: "var(--gray)", marginTop: 6, marginBottom: 0 }}>Профессиональная посуда для кафе, ресторанов и столовых</p>
        </div>

        <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>

          {/* ===== SIDEBAR CATEGORIES ===== */}
          <aside
            className="hidden md:block"
            style={{
              width: 220,
              flexShrink: 0,
              background: "var(--white)",
              borderRadius: 4,
              boxShadow: "var(--shadow-md)",
              overflow: "hidden",
            }}>
            <div style={{
              padding: "14px 16px",
              borderBottom: "1px solid var(--lt-gray)",
              fontWeight: 600,
              fontSize: 13,
              color: "var(--dr-gray)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}>
              Категории
            </div>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "11px 16px",
                  background: activeCategory === cat.id ? "var(--primary-lighter)" : "transparent",
                  borderLeft: activeCategory === cat.id ? "3px solid var(--primary-dark)" : "3px solid transparent",
                  border: "none",
                  borderBottom: "1px solid var(--ex-lt-gray)",
                  cursor: "pointer",
                  fontSize: 14,
                  color: activeCategory === cat.id ? "var(--ex-dr-gray)" : "var(--dr-gray)",
                  fontWeight: activeCategory === cat.id ? 500 : 400,
                  textAlign: "left",
                  transition: "all 0.15s",
                  fontFamily: "inherit",
                  borderLeftWidth: 3,
                  borderLeftStyle: "solid",
                  borderLeftColor: activeCategory === cat.id ? "var(--primary-dark)" : "transparent",
                }}
                onMouseEnter={e => {
                  if (activeCategory !== cat.id) {
                    e.currentTarget.style.background = "var(--xl-gray)";
                    e.currentTarget.style.color = "var(--ex-dr-gray)";
                  }
                }}
                onMouseLeave={e => {
                  if (activeCategory !== cat.id) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--dr-gray)";
                  }
                }}
              >
                <span>{cat.label}</span>
                {activeCategory === cat.id && (
                  <ChevronRight style={{ width: 14, height: 14, color: "var(--primary-dark)" }} />
                )}
              </button>
            ))}
          </aside>

          {/* ===== PRODUCTS AREA ===== */}
          <div style={{ flex: 1, minWidth: 0 }}>

            {/* Mobile category pills */}
            <div className="md:hidden" style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4, marginBottom: 20 }}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: "7px 14px",
                    borderRadius: 4,
                    border: "1px solid",
                    borderColor: activeCategory === cat.id ? "var(--primary-dark)" : "var(--lt-gray)",
                    background: activeCategory === cat.id ? "var(--primary-lighter)" : "var(--white)",
                    color: activeCategory === cat.id ? "var(--ex-dr-gray)" : "var(--dr-gray)",
                    fontWeight: activeCategory === cat.id ? 500 : 400,
                    fontSize: 13,
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "all 0.15s",
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Products count */}
            <div style={{ marginBottom: 16, fontSize: 13, color: "var(--gray)" }}>
              Найдено товаров: <span style={{ color: "var(--ex-dr-gray)", fontWeight: 500 }}>{filtered.length}</span>
            </div>

            {/* Products grid */}
            {filtered.length === 0 ? (
              <div style={{
                background: "var(--white)",
                borderRadius: 4,
                boxShadow: "var(--shadow-md)",
                padding: "60px 20px",
                textAlign: "center",
                color: "var(--gray)",
              }}>
                <Search style={{ width: 40, height: 40, margin: "0 auto 16px", color: "var(--lt-gray)" }} />
                <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 8, color: "var(--dr-gray)" }}>Товары не найдены</div>
                <div style={{ fontSize: 14 }}>Попробуйте изменить запрос или выбрать другую категорию</div>
              </div>
            ) : (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: 16,
              }}>
                {filtered.map((product) => {
                  const qty = getQty(product.id);
                  return (
                    <div
                      key={product.id}
                      className="kr-card"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        transition: "box-shadow 0.2s",
                        opacity: product.inStock ? 1 : 0.7,
                      }}
                      onMouseEnter={e => (e.currentTarget.style.boxShadow = "var(--shadow-lg)")}
                      onMouseLeave={e => (e.currentTarget.style.boxShadow = "var(--shadow-md)")}
                    >
                      {/* Product image */}
                      <div style={{ position: "relative", paddingTop: "75%", background: "var(--xl-gray)", overflow: "hidden" }}>
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{
                            position: "absolute", inset: 0,
                            width: "100%", height: "100%",
                            objectFit: "contain",
                            padding: 8,
                          }}
                        />
                        {/* Badge */}
                        {product.badge && (
                          <div style={{
                            position: "absolute",
                            top: 8, left: 8,
                            ...getBadgeStyle(product.badgeType),
                            padding: "3px 8px",
                            borderRadius: 3,
                            fontSize: 11,
                            fontWeight: 700,
                            lineHeight: 1.5,
                          }}>
                            {product.badge}
                          </div>
                        )}
                        {/* Out of stock overlay */}
                        {!product.inStock && (
                          <div style={{
                            position: "absolute", inset: 0,
                            background: "rgba(255,255,255,0.5)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}>
                            <span style={{
                              background: "var(--ex-dr-gray)",
                              color: "var(--white)",
                              fontSize: 11,
                              fontWeight: 700,
                              padding: "4px 12px",
                              borderRadius: 3,
                              textTransform: "uppercase",
                              letterSpacing: "0.05em",
                            }}>Нет в наличии</span>
                          </div>
                        )}
                      </div>

                      {/* Product info */}
                      <div style={{ padding: "12px 14px", flex: 1, display: "flex", flexDirection: "column" }}>

                        {/* Sort badge + unit */}
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                          <span style={{
                            fontSize: 10,
                            fontWeight: 700,
                            color: "var(--secondary)",
                            border: "1px solid var(--secondary-lighter)",
                            borderRadius: 3,
                            padding: "1px 5px",
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                          }}>{product.sort}</span>
                          <span style={{ fontSize: 11, color: "var(--gray)" }}>/ {product.unit}</span>
                        </div>

                        {/* Name */}
                        <div style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: "var(--ex-dr-gray)",
                          lineHeight: 1.4,
                          marginBottom: 8,
                          flex: 1,
                        }}>
                          {product.name}
                        </div>

                        {/* Specs */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "3px 10px", marginBottom: 10 }}>
                          {product.material && (
                            <span style={{ fontSize: 11, color: "var(--gray)" }}>{product.material}</span>
                          )}
                          {product.size && (
                            <span style={{ fontSize: 11, color: "var(--gray)" }}>{product.size}</span>
                          )}
                          {product.packaging && (
                            <span style={{ fontSize: 11, color: "var(--gray)" }}>{product.packaging}</span>
                          )}
                        </div>

                        {/* Stock status */}
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          marginBottom: 10,
                          fontSize: 12,
                          color: product.inStock ? "var(--secondary)" : "var(--gray)",
                          fontWeight: 500,
                        }}>
                          <div style={{
                            width: 6, height: 6,
                            borderRadius: "50%",
                            background: product.inStock ? "var(--secondary)" : "var(--lt-gray)",
                            flexShrink: 0,
                          }} />
                          {product.inStock ? "В наличии" : "Нет в наличии"}
                        </div>

                        {/* Price row */}
                        <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 12 }}>
                          <span style={{ fontSize: 20, fontWeight: 700, color: "var(--ex-dr-gray)", lineHeight: 1 }}>
                            {product.price} ₽
                          </span>
                          {product.oldPrice && (
                            <span style={{ fontSize: 13, color: "var(--gray)", textDecoration: "line-through" }}>
                              {product.oldPrice} ₽
                            </span>
                          )}
                        </div>

                        {/* Add to cart */}
                        {product.inStock ? (
                          qty === 0 ? (
                            <button
                              onClick={() => addToCart(product.id)}
                              style={{
                                width: "100%",
                                height: 36,
                                background: "var(--primary)",
                                color: "var(--ex-dr-gray)",
                                border: "none",
                                borderRadius: 4,
                                fontSize: 13,
                                fontWeight: 500,
                                cursor: "pointer",
                                fontFamily: "inherit",
                                transition: "background 0.15s",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 6,
                              }}
                              onMouseEnter={e => (e.currentTarget.style.background = "var(--primary-dark)")}
                              onMouseLeave={e => (e.currentTarget.style.background = "var(--primary)")}
                            >
                              <ShoppingCart style={{ width: 15, height: 15 }} />
                              В корзину
                            </button>
                          ) : (
                            <div style={{ display: "flex", alignItems: "center", gap: 0, height: 36, border: "1px solid var(--lt-gray)", borderRadius: 4, overflow: "hidden" }}>
                              <button
                                onClick={() => updateQty(product.id, -1)}
                                style={{
                                  width: 36, height: 36, flexShrink: 0,
                                  border: "none", borderRight: "1px solid var(--lt-gray)",
                                  background: "var(--xl-gray)",
                                  cursor: "pointer",
                                  display: "flex", alignItems: "center", justifyContent: "center",
                                  color: "var(--dr-gray)",
                                  fontSize: 18,
                                  transition: "background 0.15s",
                                  fontFamily: "inherit",
                                }}
                                onMouseEnter={e => (e.currentTarget.style.background = "var(--primary-lighter)")}
                                onMouseLeave={e => (e.currentTarget.style.background = "var(--xl-gray)")}
                              >
                                <Minus style={{ width: 14, height: 14 }} />
                              </button>
                              <div style={{ flex: 1, textAlign: "center", fontWeight: 600, fontSize: 15, color: "var(--ex-dr-gray)" }}>
                                {qty}
                              </div>
                              <button
                                onClick={() => updateQty(product.id, 1)}
                                style={{
                                  width: 36, height: 36, flexShrink: 0,
                                  border: "none", borderLeft: "1px solid var(--lt-gray)",
                                  background: "var(--primary)",
                                  cursor: "pointer",
                                  display: "flex", alignItems: "center", justifyContent: "center",
                                  color: "var(--ex-dr-gray)",
                                  fontSize: 18,
                                  transition: "background 0.15s",
                                  fontFamily: "inherit",
                                }}
                                onMouseEnter={e => (e.currentTarget.style.background = "var(--primary-dark)")}
                                onMouseLeave={e => (e.currentTarget.style.background = "var(--primary)")}
                              >
                                <Plus style={{ width: 14, height: 14 }} />
                              </button>
                            </div>
                          )
                        ) : (
                          <button
                            disabled
                            style={{
                              width: "100%",
                              height: 36,
                              background: "var(--ex-lt-gray)",
                              color: "var(--disabled)",
                              border: "1px solid var(--lt-gray)",
                              borderRadius: 4,
                              fontSize: 13,
                              cursor: "not-allowed",
                              fontFamily: "inherit",
                            }}
                          >
                            Нет в наличии
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* ===== INFO STRIP ===== */}
      <div style={{ background: "var(--white)", borderTop: "1px solid var(--lt-gray)", marginTop: 40 }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          padding: "24px var(--offset)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 24,
        }}>
          {[
            { icon: <Truck style={{ width: 28, height: 28, color: "var(--primary-dark)" }} />, title: "Быстрая доставка", desc: "Доставим по всей России" },
            { icon: <Package style={{ width: 28, height: 28, color: "var(--primary-dark)" }} />, title: "Оптовые цены", desc: "Минимальная партия от 1 уп." },
            { icon: <Star style={{ width: 28, height: 28, color: "var(--primary-dark)" }} />, title: "Сертифицированный товар", desc: "Все позиции с документами" },
            { icon: <Phone style={{ width: 28, height: 28, color: "var(--primary-dark)" }} />, title: "Поддержка 24/7", desc: "Ответим на любой вопрос" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <div style={{
                width: 48, height: 48,
                background: "var(--primary-lighter)",
                borderRadius: 4,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: "var(--ex-dr-gray)", marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: "var(--gray)" }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer style={{ background: "var(--ex-dr-gray)", color: "var(--white)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px var(--offset)" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 32,
            marginBottom: 32,
          }}>
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{
                  width: 36, height: 36,
                  background: "var(--primary)",
                  borderRadius: 4,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: 18, color: "var(--ex-dr-gray)",
                }}>П</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "var(--white)" }}>ПосудаОпт</div>
                  <div style={{ fontSize: 11, color: "var(--gray)" }}>для кафе и ресторанов</div>
                </div>
              </div>
              <p style={{ fontSize: 13, color: "var(--gray)", lineHeight: 1.6, margin: 0 }}>
                Профессиональная посуда оптом для заведений общественного питания.
              </p>
            </div>

            {/* Catalog */}
            <div>
              <div style={{ fontWeight: 600, fontSize: 13, color: "var(--white)", marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.05em" }}>Каталог</div>
              {categories.slice(1).map(cat => (
                <div key={cat.id} style={{ marginBottom: 8 }}>
                  <a href="/" style={{ fontSize: 13, color: "var(--gray)", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--white)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--gray)")}>
                    {cat.label}
                  </a>
                </div>
              ))}
            </div>

            {/* Company */}
            <div>
              <div style={{ fontWeight: 600, fontSize: 13, color: "var(--white)", marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.05em" }}>Компания</div>
              {["О нас", "Доставка и оплата", "Возврат", "Контакты"].map(link => (
                <div key={link} style={{ marginBottom: 8 }}>
                  <a href="/" style={{ fontSize: 13, color: "var(--gray)", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--white)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--gray)")}>
                    {link}
                  </a>
                </div>
              ))}
            </div>

            {/* Contacts */}
            <div>
              <div style={{ fontWeight: 600, fontSize: 13, color: "var(--white)", marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.05em" }}>Контакты</div>
              <a href="tel:+78001234567" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--white)", textDecoration: "none", marginBottom: 10 }}>
                <Phone style={{ width: 15, height: 15, color: "var(--primary)" }} />
                8-800-123-45-67
              </a>
              <div style={{ fontSize: 13, color: "var(--gray)", lineHeight: 1.6 }}>
                Пн–Пт: 9:00–18:00<br />
                Сб: 10:00–15:00
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20, display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ fontSize: 12, color: "var(--gray)" }}>
              © 2024 ПосудаОпт. Все права защищены.
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              {["Политика конфиденциальности", "Оферта"].map(link => (
                <a key={link} href="/" style={{ fontSize: 12, color: "var(--gray)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--white)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--gray)")}>
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ===== CART SIDEBAR ===== */}
      {cartOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100 }}>
          {/* Overlay */}
          <div
            style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }}
            onClick={() => setCartOpen(false)}
          />

          {/* Panel */}
          <div style={{
            position: "absolute", top: 0, right: 0, bottom: 0,
            width: "100%", maxWidth: 420,
            background: "var(--white)",
            display: "flex", flexDirection: "column",
            boxShadow: "-4px 0 20px rgba(0,0,0,0.15)",
          }}>
            {/* Cart header */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "16px 20px",
              borderBottom: "1px solid var(--lt-gray)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <ShoppingCart style={{ width: 20, height: 20, color: "var(--primary-dark)" }} />
                <span style={{ fontWeight: 700, fontSize: 16, color: "var(--ex-dr-gray)" }}>Корзина</span>
                {totalItems > 0 && (
                  <span style={{
                    background: "var(--primary)",
                    color: "var(--ex-dr-gray)",
                    fontSize: 12, fontWeight: 700,
                    borderRadius: 3, padding: "2px 7px",
                  }}>{totalItems} шт.</span>
                )}
              </div>
              <button
                onClick={() => setCartOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 4, borderRadius: 4, color: "var(--gray)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--ex-dr-gray)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--gray)")}
              >
                <X style={{ width: 20, height: 20 }} />
              </button>
            </div>

            {/* Cart items */}
            <div style={{ flex: 1, overflowY: "auto", padding: "12px 0" }}>
              {cart.length === 0 ? (
                <div style={{ padding: "60px 20px", textAlign: "center", color: "var(--gray)" }}>
                  <ShoppingCart style={{ width: 48, height: 48, margin: "0 auto 16px", color: "var(--lt-gray)" }} />
                  <div style={{ fontSize: 15, fontWeight: 500, color: "var(--dr-gray)", marginBottom: 8 }}>Корзина пуста</div>
                  <div style={{ fontSize: 13 }}>Добавьте товары из каталога</div>
                </div>
              ) : (
                cart.map((item) => {
                  const product = products.find((p) => p.id === item.id)!;
                  return (
                    <div key={item.id} style={{
                      display: "flex", gap: 12,
                      padding: "12px 20px",
                      borderBottom: "1px solid var(--ex-lt-gray)",
                      alignItems: "flex-start",
                    }}>
                      {/* Image */}
                      <div style={{ width: 56, height: 56, flexShrink: 0, background: "var(--xl-gray)", borderRadius: 4, overflow: "hidden" }}>
                        <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                      </div>

                      {/* Info */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 13, fontWeight: 500, color: "var(--ex-dr-gray)", lineHeight: 1.3, marginBottom: 6 }}>
                          {product.name}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                          {/* Qty control */}
                          <div style={{ display: "flex", alignItems: "center", gap: 0, border: "1px solid var(--lt-gray)", borderRadius: 4, overflow: "hidden" }}>
                            <button
                              onClick={() => updateQty(item.id, -1)}
                              style={{
                                width: 28, height: 28,
                                border: "none", borderRight: "1px solid var(--lt-gray)",
                                background: "var(--xl-gray)",
                                cursor: "pointer",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                transition: "background 0.15s",
                                fontFamily: "inherit",
                              }}
                              onMouseEnter={e => (e.currentTarget.style.background = "var(--primary-lighter)")}
                              onMouseLeave={e => (e.currentTarget.style.background = "var(--xl-gray)")}
                            >
                              <Minus style={{ width: 11, height: 11, color: "var(--dr-gray)" }} />
                            </button>
                            <span style={{ width: 30, textAlign: "center", fontSize: 13, fontWeight: 600, color: "var(--ex-dr-gray)" }}>
                              {item.qty}
                            </span>
                            <button
                              onClick={() => updateQty(item.id, 1)}
                              style={{
                                width: 28, height: 28,
                                border: "none", borderLeft: "1px solid var(--lt-gray)",
                                background: "var(--primary)",
                                cursor: "pointer",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                transition: "background 0.15s",
                                fontFamily: "inherit",
                              }}
                              onMouseEnter={e => (e.currentTarget.style.background = "var(--primary-dark)")}
                              onMouseLeave={e => (e.currentTarget.style.background = "var(--primary)")}
                            >
                              <Plus style={{ width: 11, height: 11, color: "var(--ex-dr-gray)" }} />
                            </button>
                          </div>

                          {/* Price */}
                          <div style={{ fontWeight: 700, fontSize: 15, color: "var(--ex-dr-gray)", whiteSpace: "nowrap" }}>
                            {product.price * item.qty} ₽
                          </div>

                          {/* Remove */}
                          <button
                            onClick={() => setCart(prev => prev.filter(i => i.id !== item.id))}
                            style={{ background: "none", border: "none", cursor: "pointer", padding: 4, borderRadius: 4, color: "var(--lt-gray)" }}
                            onMouseEnter={e => (e.currentTarget.style.color = "var(--red)")}
                            onMouseLeave={e => (e.currentTarget.style.color = "var(--lt-gray)")}
                          >
                            <X style={{ width: 14, height: 14 }} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Cart footer */}
            {cart.length > 0 && (
              <div style={{ padding: "16px 20px", borderTop: "1px solid var(--lt-gray)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
                  <span style={{ fontSize: 14, color: "var(--dr-gray)" }}>Итого:</span>
                  <span style={{ fontSize: 22, fontWeight: 700, color: "var(--ex-dr-gray)" }}>{totalPrice} ₽</span>
                </div>
                <button
                  style={{
                    width: "100%",
                    height: 44,
                    background: "var(--primary)",
                    color: "var(--ex-dr-gray)",
                    border: "none",
                    borderRadius: 4,
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "background 0.15s",
                    marginBottom: 8,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--primary-dark)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "var(--primary)")}
                >
                  Оформить заказ
                </button>
                <button
                  onClick={() => setCartOpen(false)}
                  style={{
                    width: "100%",
                    height: 36,
                    background: "transparent",
                    color: "var(--dr-gray)",
                    border: "1px solid var(--lt-gray)",
                    borderRadius: 4,
                    fontSize: 13,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "var(--xl-gray)"; e.currentTarget.style.borderColor = "var(--gray)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "var(--lt-gray)"; }}
                >
                  Продолжить покупки
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
