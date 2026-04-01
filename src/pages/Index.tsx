import { useState } from "react";
import { type CartItem, products } from "../components/data";
import Header from "../components/Header";
import ProductCatalog from "../components/ProductCatalog";
import CartSidebar from "../components/CartSidebar";
import Footer from "../components/Footer";

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

      <Header
        search={search}
        setSearch={setSearch}
        totalItems={totalItems}
        onCartOpen={() => setCartOpen(true)}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <ProductCatalog
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        search={search}
        cart={cart}
        addToCart={addToCart}
        updateQty={updateQty}
        getQty={getQty}
      />

      <Footer />

      {cartOpen && (
        <CartSidebar
          cart={cart}
          totalItems={totalItems}
          totalPrice={totalPrice}
          onClose={() => setCartOpen(false)}
          updateQty={updateQty}
          setCart={setCart}
        />
      )}
    </div>
  );
}
