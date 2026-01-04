import { useState, useMemo } from "react";
import { products as initialProducts } from "./data/products";
import ProductList from "./components/ProductList";
import Filters from "./components/Filters";
import Cart from "./components/Cart";
import "./index.css";

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  const filteredProducts = useMemo(() => {
    let data = [...initialProducts];

    if (search) {
      data = data.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "all") {
      data = data.filter(p => p.category === category);
    }

    if (sort === "low") {
      data.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [search, category, sort]);

  const addToCart = (product) => {
    setCart(prev => {
      const item = prev.find(i => i.id === product.id);
      if (item) {
        if (item.qty < product.stock) {
          return prev.map(i =>
            i.id === product.id ? { ...i, qty: i.qty + 1 } : i
          );
        }
        return prev;
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="container">
      <h1>Mini E-Commerce</h1>

      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      <div className="layout">
        <ProductList products={filteredProducts} addToCart={addToCart} />
        <Cart cart={cart} updateQty={updateQty} removeItem={removeItem} />
      </div>
    </div>
  );
}

export default App;
