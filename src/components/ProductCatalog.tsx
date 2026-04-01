import { Search, ShoppingCart, Plus, Minus, ChevronRight } from "lucide-react";
import { categories, products, getBadgeStyle, type CartItem } from "./data";

interface ProductCatalogProps {
  activeCategory: string;
  setActiveCategory: (v: string) => void;
  search: string;
  cart: CartItem[];
  addToCart: (id: number) => void;
  updateQty: (id: number, delta: number) => void;
  getQty: (id: number) => number;
}

export default function ProductCatalog({
  activeCategory,
  setActiveCategory,
  search,
  cart: _cart,
  addToCart,
  updateQty,
  getQty,
}: ProductCatalogProps) {
  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch =
      search.trim() === "" ||
      p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
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
                }}
                onMouseEnter={e => {
                  if (activeCategory !== cat.id) {
                    e.currentTarget.style.background = "var(--ex-lt-gray)";
                  }
                }}
                onMouseLeave={e => {
                  if (activeCategory !== cat.id) {
                    e.currentTarget.style.background = "transparent";
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
    </>
  );
}
