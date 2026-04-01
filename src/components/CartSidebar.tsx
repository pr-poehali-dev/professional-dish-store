import { ShoppingCart, X, Plus, Minus } from "lucide-react";
import { products, type CartItem } from "./data";

interface CartSidebarProps {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
  onClose: () => void;
  updateQty: (id: number, delta: number) => void;
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export default function CartSidebar({
  cart,
  totalItems,
  totalPrice,
  onClose,
  updateQty,
  setCart,
}: CartSidebarProps) {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 100 }}>
      {/* Overlay */}
      <div
        style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }}
        onClick={onClose}
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
            onClick={onClose}
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
              onClick={onClose}
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
  );
}
