import { Truck, Package, Star, Phone } from "lucide-react";
import { categories } from "./data";

export default function Footer() {
  return (
    <>
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
    </>
  );
}
