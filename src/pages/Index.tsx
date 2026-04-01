import { useState } from "react";
import { ShoppingCart, Search, Phone, X, Plus, Minus, Menu, ChevronRight } from "lucide-react";

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

function badgeStyle(type: string | null) {
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
    <div style={{ minHeight: "100vh", background: "#f1f4f4", fontFamily: "'Roboto', Arial, sans-serif", color: "#333" }}>

      {/* ===== HEADER ===== */}
      <header style={{ background: "#fff", boxShadow: "0 0 10px hsla(0,0%,39%,.2)", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", gap: 24, height: 64 }}>

          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
            <div style={{
              width: 38, height: 38,
              background: "#fef037",
              borderRadius: 4,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 700, fontSize: 20, color: "#333"
            }}>П</div>
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#333" }}>ПосудаОпт</div>
              <div style={{ fontSize: 11, color: "#929999" }}>для кафе и ресторанов</div>
            </div>
          </a>

          {/* Search */}
          <div style={{ flex: 1, maxWidth: 520, position: "relative" }}>
            <Search style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#929999", width: 16, height: 16 }} />
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
          <nav style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 14, color: "#666" }} className="hidden md:flex">
            <a href="/" style={{ color: "#666", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#333")} onMouseLeave={e => (e.currentTarget.style.color = "#666")}>Каталог</a>
            <a href="/" style={{ color: "#666", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#333")} onMouseLeave={e => (e.currentTarget.style.color = "#666")}>Доставка</a>
            <a href="/" style={{ color: "#666", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#333")} onMouseLeave={e => (e.currentTarget.style.color = "#666")}>О нас</a>
          </nav>

          {/* Phone */}
          <a href="tel:+78001234567" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, color: "#666", textDecoration: "none", flexShrink: 0, whiteSpace: "nowrap" }} className="hidden md:flex">
            <Phone style={{ width: 15, height: 15, color: "#10b16b" }} />
            8-800-123-45-67
          </a>

          {/* Cart button */}
          <button
            onClick={() => setCartOpen(true)}
            style={{
              position: "relative",
              display: "flex", alignItems: "center", gap: 8,
              background: "#fef037",
              color: "#333",
              border: "none",
              borderRadius: 4,
              padding: "9px 16px",
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              flexShrink: 0,
              transition: "background 0.15s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#cec001")}
            onMouseLeave={e => (e.currentTarget.style.background = "#fef037")}
          >
            <ShoppingCart style={{ width: 17, height: 17 }} />
            <span className="hidden sm:inline">Корзина</span>
            {totalItems > 0 && (
              <span style={{
                position: "absolute", top: -8, right: -8,
                background: "#d20046", color: "#fff",
                fontSize: 11, fontWeight: 700,
                borderRadius: "50%", width: 20, height: 20,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>{totalItems}</span>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 6, borderRadius: 4, display: "none" }}
            className="md:hidden"
          >
            <Menu style={{ width: 22, height: 22, color: "#666" }} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div style={{ borderTop: "1px solid #d8d8d8", background: "#fff", padding: "12px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
            <a href="tel:+78001234567" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#666", textDecoration: "none" }}>
              <Phone style={{ width: 15, height: 15, color: "#10b16b" }} />
              8-800-123-45-67
            </a>
            <a href="/" style={{ fontSize: 14, color: "#666", textDecoration: "none" }}>Каталог</a>
            <a href="/" style={{ fontSize: 14, color: "#666", textDecoration: "none" }}>Доставка</a>
            <a href="/" style={{ fontSize: 14, color: "#666", textDecoration: "none" }}>О нас</a>
          </div>
        )}
      </header>

      {/* ===== BREADCRUMB ===== */}
      <div style={{ background: "#fff", borderBottom: "1px solid #d8d8d8" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "8px 40px", display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#929999" }}>
          <a href="/" style={{ color: "#929999", textDecoration: "none" }}>Главная</a>
          <ChevronRight style={{ width: 13, height: 13 }} />
          <span style={{ color: "#333" }}>Каталог</span>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <main style={{ maxWidth: 1280, margin: "0 auto", padding: "30px 40px" }}>

        {/* Page title */}
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: 26, fontWeight: 700, color: "#333", margin: 0, lineHeight: 1.2 }}>Каталог товаров</h1>
          <p style={{ fontSize: 14, color: "#929999", marginTop: 6 }}>Профессиональная посуда для кафе, ресторанов и столовых</p>
        </div>

        <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>

          {/* ===== SIDEBAR CATEGORIES ===== */}
          <aside style={{
            width: 220,
            flexShrink: 0,
            background: "#fff",
            borderRadius: 4,
            boxShadow: "0 0 10px hsla(0,0%,39%,.2)",
            overflow: "hidden",
          }} className="hidden md:block">
            <div style={{ padding: "14px 16px", borderBottom: "1px solid #d8d8d8", fontWeight: 600, fontSize: 13, color: "#666", textTransform: "uppercase", letterSpacing: "0.05em" }}>
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
                  background: activeCategory === cat.id ? "#fffbcf" : "transparent",
                  borderLeft: activeCategory === cat.id ? "3px solid #cec001" : "3px solid transparent",
                  border: "none",
                  borderBottom: "1px solid #f1f4f4",
                  cursor: "pointer",
                  fontSize: 14,
                  color: activeCategory === cat.id ? "#333" : "#666",
                  fontWeight: activeCategory === cat.id ? 500 : 400,
                  textAlign: "left",
                  transition: "all 0.15s",
                  fontFamily: "inherit",
                }}
                onMouseEnter={e => {
                  if (activeCategory !== cat.id) {
                    e.currentTarget.style.background = "#f9f9f9";
                    e.currentTarget.style.color = "#333";
                  }
                }}
                onMouseLeave={e => {
                  if (activeCategory !== cat.id) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#666";
                  }
                }}
              >
                <span>{cat.label}</span>
                {activeCategory === cat.id && <ChevronRight style={{ width: 14, height: 14, color: "#cec001" }} />}
              </button>
            ))}
          </aside>

          {/* ===== PRODUCTS AREA ===== */}
          <div style={{ flex: 1, minWidth: 0 }}>

            {/* Mobile categories scroll */}
            <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4, marginBottom: 20 }} className="md:hidden">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: "7px 14px",
                    borderRadius: 4,
                    border: "1px solid",
                    borderColor: activeCategory === cat.id ? "#cec001" : "#d8d8d8",
                    background: activeCategory === cat.id ? "#fef037" : "#fff",
                    color: activeCategory === cat.id ? "#333" : "#666",
                    fontSize: 13,
                    fontWeight: activeCategory === cat.id ? 500 : 400,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    fontFamily: "inherit",
                    transition: "all 0.15s",
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Results count + sort bar */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              marginBottom: 16,
              padding: "10px 16px",
              background: "#fff",
              borderRadius: 4,
              boxShadow: "0 0 10px hsla(0,0%,39%,.2)",
              fontSize: 13,
              color: "#929999",
            }}>
              <span>Найдено товаров: <strong style={{ color: "#333" }}>{filtered.length}</strong></span>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                Сортировка:
                <select style={{
                  border: "1px solid #d8d8d8",
                  borderRadius: 4,
                  padding: "3px 8px",
                  fontSize: 13,
                  color: "#666",
                  background: "#fff",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  outline: "none",
                }}>
                  <option>По умолчанию</option>
                  <option>По цене ↑</option>
                  <option>По цене ↓</option>
                  <option>Новинки</option>
                </select>
              </span>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div style={{
                background: "#fff",
                borderRadius: 4,
                boxShadow: "0 0 10px hsla(0,0%,39%,.2)",
                padding: "60px 20px",
                textAlign: "center",
                color: "#929999",
              }}>
                <Search style={{ width: 40, height: 40, margin: "0 auto 12px", opacity: 0.3 }} />
                <div style={{ fontSize: 16, fontWeight: 500, color: "#666", marginBottom: 6 }}>Товары не найдены</div>
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
                  const discount = product.oldPrice
                    ? Math.round((1 - product.price / product.oldPrice) * 100)
                    : null;

                  return (
                    <div
                      key={product.id}
                      className="kr-card"
                      style={{ display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}
                    >
                      {/* Badge */}
                      {product.badge && (
                        <div style={{
                          position: "absolute", top: 10, left: 10,
                          zIndex: 2,
                          ...badgeStyle(product.badgeType),
                          borderRadius: 3,
                          fontSize: 11,
                          fontWeight: 700,
                          padding: "3px 8px",
                          letterSpacing: "0.02em",
                        }}>
                          {product.badge}
                        </div>
                      )}
                      {/* Discount percent */}
                      {discount && (
                        <div style={{
                          position: "absolute", top: product.badge ? 36 : 10, left: 10,
                          zIndex: 2,
                          background: "#d20046",
                          color: "#fff",
                          borderRadius: 3,
                          fontSize: 11,
                          fontWeight: 700,
                          padding: "3px 8px",
                        }}>
                          -{discount}%
                        </div>
                      )}
                      {/* Out of stock overlay */}
                      {!product.inStock && (
                        <div style={{
                          position: "absolute", inset: 0,
                          background: "rgba(255,255,255,0.7)",
                          zIndex: 3,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <span style={{
                            background: "#d8d8d8", color: "#929999",
                            padding: "6px 14px", borderRadius: 4,
                            fontSize: 12, fontWeight: 600,
                          }}>Нет в наличии</span>
                        </div>
                      )}

                      {/* Image */}
                      <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden", background: "#f9f9f9" }}>
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.3s ease" }}
                          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                        />
                      </div>

                      {/* Info */}
                      <div style={{ padding: "14px 14px 0", flex: 1 }}>
                        {/* Specs row */}
                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
                          <span style={{
                            fontSize: 11, color: "#929999",
                            background: "#f1f4f4",
                            borderRadius: 2, padding: "2px 6px",
                          }}>{product.material}</span>
                          <span style={{
                            fontSize: 11, color: "#929999",
                            background: "#f1f4f4",
                            borderRadius: 2, padding: "2px 6px",
                          }}>{product.size}</span>
                          <span style={{
                            fontSize: 11, color: "#929999",
                            background: "#f1f4f4",
                            borderRadius: 2, padding: "2px 6px",
                          }}>{product.sort}</span>
                        </div>

                        {/* Name */}
                        <h3 style={{
                          fontSize: 13.5,
                          fontWeight: 500,
                          color: "#333",
                          margin: "0 0 8px",
                          lineHeight: 1.35,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}>
                          {product.name}
                        </h3>

                        {/* Packaging */}
                        <div style={{ fontSize: 12, color: "#929999", marginBottom: 10 }}>
                          Упаковка: <span style={{ color: "#666" }}>{product.packaging}</span>
                        </div>

                        {/* Price */}
                        <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 12 }}>
                          <span style={{ fontSize: 20, fontWeight: 700, color: "#333" }}>
                            {product.price.toLocaleString("ru-RU")} ₽
                          </span>
                          <span style={{ fontSize: 12, color: "#929999" }}>/ {product.unit}</span>
                          {product.oldPrice && (
                            <span style={{ fontSize: 13, color: "#bbb", textDecoration: "line-through" }}>
                              {product.oldPrice.toLocaleString("ru-RU")} ₽
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Add to cart */}
                      <div style={{ padding: "0 14px 14px" }}>
                        {product.inStock ? (
                          qty === 0 ? (
                            <button
                              onClick={() => addToCart(product.id)}
                              style={{
                                width: "100%",
                                background: "#fef037",
                                color: "#333",
                                border: "none",
                                borderRadius: 4,
                                padding: "9px 0",
                                fontSize: 13,
                                fontWeight: 600,
                                cursor: "pointer",
                                display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                                transition: "background 0.15s",
                                fontFamily: "inherit",
                              }}
                              onMouseEnter={e => (e.currentTarget.style.background = "#cec001")}
                              onMouseLeave={e => (e.currentTarget.style.background = "#fef037")}
                            >
                              <ShoppingCart style={{ width: 15, height: 15 }} />
                              В корзину
                            </button>
                          ) : (
                            <div style={{ display: "flex", alignItems: "center", gap: 0, border: "2px solid #fef037", borderRadius: 4, overflow: "hidden" }}>
                              <button
                                onClick={() => updateQty(product.id, -1)}
                                style={{ flex: "0 0 36px", height: 36, background: "#fef037", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.15s", fontFamily: "inherit" }}
                                onMouseEnter={e => (e.currentTarget.style.background = "#cec001")}
                                onMouseLeave={e => (e.currentTarget.style.background = "#fef037")}
                              >
                                <Minus style={{ width: 14, height: 14, color: "#333" }} />
                              </button>
                              <span style={{ flex: 1, textAlign: "center", fontSize: 14, fontWeight: 600, color: "#333" }}>{qty}</span>
                              <button
                                onClick={() => addToCart(product.id)}
                                style={{ flex: "0 0 36px", height: 36, background: "#fef037", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.15s", fontFamily: "inherit" }}
                                onMouseEnter={e => (e.currentTarget.style.background = "#cec001")}
                                onMouseLeave={e => (e.currentTarget.style.background = "#fef037")}
                              >
                                <Plus style={{ width: 14, height: 14, color: "#333" }} />
                              </button>
                            </div>
                          )
                        ) : (
                          <button disabled style={{
                            width: "100%", background: "#f1f4f4", color: "#bbb",
                            border: "1px solid #d8d8d8", borderRadius: 4, padding: "9px 0",
                            fontSize: 13, fontWeight: 500, cursor: "not-allowed", fontFamily: "inherit",
                          }}>
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

      {/* ===== FOOTER ===== */}
      <footer style={{ background: "#333", color: "#d8d8d8", marginTop: 48 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 40px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, marginBottom: 32 }}>
            {/* Company */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 34, height: 34, background: "#fef037", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 18, color: "#333" }}>П</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#fff" }}>ПосудаОпт</div>
                  <div style={{ fontSize: 11, color: "#929999" }}>для кафе и ресторанов</div>
                </div>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: "#929999", margin: 0 }}>
                Профессиональная посуда оптом. Поставки для кафе, ресторанов, гостиниц и столовых по всей России.
              </p>
            </div>

            {/* Catalog */}
            <div>
              <div style={{ fontWeight: 600, fontSize: 13, color: "#fff", marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.05em" }}>Каталог</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {categories.slice(1).map(cat => (
                  <a key={cat.id} href="/" style={{ fontSize: 13, color: "#929999", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fef037")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#929999")}
                  >{cat.label}</a>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <div style={{ fontWeight: 600, fontSize: 13, color: "#fff", marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.05em" }}>Информация</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {["О компании", "Доставка и оплата", "Возврат товара", "Контакты"].map(link => (
                  <a key={link} href="/" style={{ fontSize: 13, color: "#929999", textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fef037")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#929999")}
                  >{link}</a>
                ))}
              </div>
            </div>

            {/* Contacts */}
            <div>
              <div style={{ fontWeight: 600, fontSize: 13, color: "#fff", marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.05em" }}>Контакты</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Phone style={{ width: 14, height: 14, color: "#10b16b", flexShrink: 0 }} />
                  <a href="tel:+78001234567" style={{ fontSize: 14, fontWeight: 600, color: "#fff", textDecoration: "none" }}>8-800-123-45-67</a>
                </div>
                <div style={{ fontSize: 12, color: "#929999" }}>Бесплатно по России</div>
                <div style={{ fontSize: 13, color: "#929999", marginTop: 4 }}>Пн–Пт: 9:00–18:00</div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: "1px solid #444", paddingTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: 12, color: "#666" }}>© 2024 ПосудаОпт. Все права защищены.</span>
            <div style={{ display: "flex", gap: 16 }}>
              <a href="/" style={{ fontSize: 12, color: "#666", textDecoration: "none" }}>Политика конфиденциальности</a>
              <a href="/" style={{ fontSize: 12, color: "#666", textDecoration: "none" }}>Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ===== CART DRAWER ===== */}
      {cartOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex" }}>
          {/* Backdrop */}
          <div
            style={{ flex: 1, background: "rgba(0,0,0,0.5)" }}
            onClick={() => setCartOpen(false)}
          />
          {/* Panel */}
          <div style={{
            width: 420,
            maxWidth: "100vw",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            boxShadow: "-4px 0 20px rgba(0,0,0,0.15)",
          }}>
            {/* Cart header */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "18px 20px",
              borderBottom: "1px solid #d8d8d8",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <ShoppingCart style={{ width: 20, height: 20, color: "#333" }} />
                <span style={{ fontWeight: 700, fontSize: 16, color: "#333" }}>Корзина</span>
                {totalItems > 0 && (
                  <span style={{ background: "#fef037", color: "#333", fontSize: 12, fontWeight: 700, borderRadius: 3, padding: "2px 8px" }}>
                    {totalItems} шт.
                  </span>
                )}
              </div>
              <button
                onClick={() => setCartOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 4, borderRadius: 4, display: "flex" }}
              >
                <X style={{ width: 20, height: 20, color: "#929999" }} />
              </button>
            </div>

            {/* Cart items */}
            <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px" }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: "center", padding: "60px 20px", color: "#929999" }}>
                  <ShoppingCart style={{ width: 48, height: 48, margin: "0 auto 16px", opacity: 0.2 }} />
                  <div style={{ fontSize: 15, fontWeight: 500, color: "#666", marginBottom: 6 }}>Корзина пуста</div>
                  <div style={{ fontSize: 13 }}>Добавьте товары из каталога</div>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {cart.map((item) => {
                    const p = products.find((x) => x.id === item.id);
                    if (!p) return null;
                    return (
                      <div key={item.id} style={{
                        display: "flex", gap: 12, alignItems: "flex-start",
                        padding: 12, borderRadius: 4,
                        border: "1px solid #d8d8d8",
                        background: "#f9f9f9",
                      }}>
                        <img src={p.image} alt={p.name} style={{ width: 60, height: 60, objectFit: "cover", borderRadius: 3, flexShrink: 0 }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 13, fontWeight: 500, color: "#333", lineHeight: 1.3, marginBottom: 6 }}>{p.name}</div>
                          <div style={{ fontSize: 12, color: "#929999", marginBottom: 8 }}>{p.price.toLocaleString("ru-RU")} ₽ / {p.unit}</div>
                          <div style={{ display: "flex", alignItems: "center", gap: 0, width: "fit-content", border: "1px solid #d8d8d8", borderRadius: 4, overflow: "hidden" }}>
                            <button onClick={() => updateQty(p.id, -1)}
                              style={{ width: 28, height: 28, background: "#f1f4f4", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "inherit" }}>
                              <Minus style={{ width: 12, height: 12, color: "#666" }} />
                            </button>
                            <span style={{ padding: "0 12px", fontSize: 13, fontWeight: 600, color: "#333" }}>{item.qty}</span>
                            <button onClick={() => addToCart(p.id)}
                              style={{ width: 28, height: 28, background: "#f1f4f4", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "inherit" }}>
                              <Plus style={{ width: 12, height: 12, color: "#666" }} />
                            </button>
                          </div>
                        </div>
                        <div style={{ textAlign: "right", flexShrink: 0 }}>
                          <div style={{ fontSize: 14, fontWeight: 700, color: "#333" }}>
                            {(p.price * item.qty).toLocaleString("ru-RU")} ₽
                          </div>
                          <button
                            onClick={() => updateQty(p.id, -item.qty)}
                            style={{ background: "none", border: "none", cursor: "pointer", marginTop: 8, padding: 0 }}
                          >
                            <X style={{ width: 16, height: 16, color: "#d8d8d8" }} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Cart footer */}
            {cart.length > 0 && (
              <div style={{ padding: "16px 20px", borderTop: "1px solid #d8d8d8" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span style={{ fontSize: 14, color: "#666" }}>Итого:</span>
                  <span style={{ fontSize: 20, fontWeight: 700, color: "#333" }}>{totalPrice.toLocaleString("ru-RU")} ₽</span>
                </div>
                <button style={{
                  width: "100%",
                  background: "#10b16b",
                  color: "#fff",
                  border: "none",
                  borderRadius: 4,
                  padding: "13px 0",
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: "pointer",
                  marginBottom: 10,
                  fontFamily: "inherit",
                  transition: "background 0.15s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#0c824f")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#10b16b")}
                >
                  Оформить заказ
                </button>
                <button onClick={() => setCartOpen(false)} style={{
                  width: "100%",
                  background: "transparent",
                  color: "#929999",
                  border: "1px solid #d8d8d8",
                  borderRadius: 4,
                  padding: "10px 0",
                  fontSize: 13,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.15s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#929999"; e.currentTarget.style.color = "#666"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#d8d8d8"; e.currentTarget.style.color = "#929999"; }}
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
