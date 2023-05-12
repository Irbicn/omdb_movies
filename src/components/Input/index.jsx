import { useCallback, useState } from "react";
import debounce from "just-debounce-it";
import s from "./Input.module.css";

export default function Input({ onSearch, sort, onSort }) {
  const [search, setSearch] = useState("");

  const debounceOnSearch = useCallback(
    debounce((value) => onSearch(value), 500),
    []
  );
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === " ") return;
    setSearch(value);
    debounceOnSearch(value);
  };

  const handleSort = () => {
    onSort(!sort);
  };

  return (
    <form className={s.container} onSubmit={handleSearch}>
      <input name="query" type="text" value={search} onChange={handleChange} />
      <button type="submit">🔎</button>
      <input type="checkbox" onChange={handleSort} />
    </form>
  );
}
