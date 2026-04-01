import { useState } from "react";
import { ShoppingCart, Search, Phone, ChevronDown, X, Plus, Minus, Menu } from "lucide-react";

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
    badgeColor: "bg-orange-500",
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
    badgeColor: null,
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
    badgeColor: "bg-red-500",
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
    badgeColor: null,
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
    badgeColor: "bg-green-500",
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
    badgeColor: null,
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
    badgeColor: "bg-red-500",
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
    badgeColor: null,
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
    badgeColor: "bg-orange-500",
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
    badgeColor: null,
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
    badgeColor: "bg-green-500",
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
    badgeColor: "bg-red-500",
    inStock: true,
    packaging: "уп 6",
    material: "Стекло",
    size: "350 мл",
  },
];

type CartItem = { id: number; qty: number };

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
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">П</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-gray-900 text-base leading-tight">ПосудаОпт</div>
              <div className="text-xs text-gray-400">для кафе и ресторанов</div>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Поиск товаров..."
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a href="tel:+78001234567" className="hidden md:flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-600">
              <Phone className="w-4 h-4" />
              <span>8-800-123-45-67</span>
            </a>
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Корзина</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 px-4 py-3 flex flex-col gap-2">
            <a href="tel:+78001234567" className="flex items-center gap-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              8-800-123-45-67
            </a>
          </div>
        )}
      </header>

      {/* Hero banner */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-xl">
            <div className="text-xs font-semibold uppercase tracking-widest mb-2 opacity-80">Оптовые поставки</div>
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-3">
              Посуда и инвентарь<br />для кафе и ресторанов
            </h1>
            <p className="text-blue-100 text-sm mb-5">
              Фарфор, стекло, столовые приборы — всё для профессиональной кухни. Сорт 1, упаковками по выгодным ценам.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveCategory("all")}
                className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-lg text-sm hover:bg-blue-50 transition-colors"
              >
                Смотреть каталог
              </button>
              <a href="tel:+78001234567" className="border border-white/60 text-white px-5 py-2 rounded-lg text-sm hover:bg-white/10 transition-colors">
                Связаться с нами
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-500">
            Найдено товаров: <span className="font-semibold text-gray-700">{filtered.length}</span>
          </p>
          <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-600">
            <option>По умолчанию</option>
            <option>Цена: по возрастанию</option>
            <option>Цена: по убыванию</option>
            <option>Новинки</option>
          </select>
        </div>

        {/* Products Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <Search className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p className="text-lg font-medium">Ничего не найдено</p>
            <p className="text-sm mt-1">Попробуйте изменить параметры поиска</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((product) => {
              const qty = getQty(product.id);
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
                >
                  {/* Image */}
                  <div className="relative bg-gray-50 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-44 object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <span className={`absolute top-2 left-2 ${product.badgeColor} text-white text-xs font-semibold px-2 py-0.5 rounded-full`}>
                        {product.badge}
                      </span>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                        <span className="bg-gray-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Нет в наличии</span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <p className="text-sm font-medium text-gray-800 leading-snug mb-2 line-clamp-2 min-h-[2.5rem]">
                      {product.name}
                    </p>

                    {/* Specs */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{product.material}</span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{product.size}</span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{product.sort}</span>
                    </div>

                    {/* Price row */}
                    <div className="flex items-end justify-between gap-2">
                      <div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-lg font-bold text-gray-900">{product.price} ₽</span>
                          <span className="text-xs text-gray-400">/ {product.unit}</span>
                        </div>
                        {product.oldPrice && (
                          <div className="text-xs text-gray-400 line-through">{product.oldPrice} ₽</div>
                        )}
                        <div className="text-xs text-gray-400 mt-0.5">{product.packaging}</div>
                      </div>

                      {/* Add to cart */}
                      {product.inStock ? (
                        qty === 0 ? (
                          <button
                            onClick={() => addToCart(product.id)}
                            className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-2 rounded-lg transition-colors"
                          >
                            В корзину
                          </button>
                        ) : (
                          <div className="flex items-center gap-1 bg-blue-50 rounded-lg p-0.5">
                            <button
                              onClick={() => updateQty(product.id, -1)}
                              className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-blue-100 text-blue-700"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-6 text-center text-sm font-bold text-blue-700">{qty}</span>
                            <button
                              onClick={() => updateQty(product.id, 1)}
                              className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-blue-100 text-blue-700"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )
                      ) : (
                        <button disabled className="flex-shrink-0 bg-gray-100 text-gray-400 text-sm px-3 py-2 rounded-lg cursor-not-allowed">
                          Нет
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 bg-gray-800 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <div className="font-bold text-white mb-2">ПосудаОпт</div>
            <p className="text-sm text-gray-400">Оптовые поставки посуды для предприятий общественного питания.</p>
          </div>
          <div>
            <div className="font-semibold text-white mb-2">Каталог</div>
            <ul className="text-sm space-y-1">
              {categories.slice(1).map((c) => (
                <li key={c.id}>
                  <button onClick={() => setActiveCategory(c.id)} className="hover:text-white transition-colors">
                    {c.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white mb-2">Контакты</div>
            <p className="text-sm">📞 8-800-123-45-67</p>
            <p className="text-sm mt-1">✉️ info@posuda-opt.ru</p>
            <p className="text-sm mt-1">🕐 Пн–Пт 9:00–18:00</p>
          </div>
        </div>
        <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-500">
          © 2025 ПосудаОпт. Все права защищены.
        </div>
      </footer>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/40" onClick={() => setCartOpen(false)} />
          <div className="w-full max-w-sm bg-white shadow-2xl flex flex-col h-full">
            {/* Cart header */}
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <h2 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-blue-600" />
                Корзина
                {totalItems > 0 && (
                  <span className="text-sm font-normal text-gray-400">({totalItems} шт.)</span>
                )}
              </h2>
              <button onClick={() => setCartOpen(false)} className="p-1.5 rounded-lg hover:bg-gray-100">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-16 text-gray-400">
                  <ShoppingCart className="w-12 h-12 mx-auto mb-3 opacity-25" />
                  <p className="font-medium">Корзина пуста</p>
                  <p className="text-sm mt-1">Добавьте товары из каталога</p>
                </div>
              ) : (
                cart.map((item) => {
                  const p = products.find((x) => x.id === item.id)!;
                  return (
                    <div key={item.id} className="flex gap-3 bg-gray-50 rounded-xl p-3">
                      <img src={p.image} alt={p.name} className="w-16 h-16 object-contain rounded-lg bg-white border border-gray-100" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 line-clamp-2 leading-snug">{p.name}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{p.sort}</p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-0.5">
                            <button
                              onClick={() => updateQty(item.id, -1)}
                              className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-5 text-center text-sm font-semibold">{item.qty}</span>
                            <button
                              onClick={() => updateQty(item.id, 1)}
                              className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-bold text-gray-900 text-sm">{p.price * item.qty} ₽</span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Cart footer */}
            {cart.length > 0 && (
              <div className="border-t px-5 py-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Итого:</span>
                  <span className="text-xl font-bold text-gray-900">{totalPrice} ₽</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
                  Оформить заказ
                </button>
                <button
                  onClick={() => setCart([])}
                  className="w-full text-gray-400 hover:text-red-500 text-xs transition-colors py-1"
                >
                  Очистить корзину
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
