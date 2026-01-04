export default function Filters({
    search, setSearch,
    category, setCategory,
    sort, setSort
  }) {
    return (
      <div className="filters">
        <input
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
  
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
        </select>
  
        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="">Sort</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
  
        <button onClick={() => {
          setSearch("");
          setCategory("all");
          setSort("");
        }}>
          Clear
        </button>
      </div>
    );
  }
  