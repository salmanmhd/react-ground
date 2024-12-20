import { createContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState("Self-Help");
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (!search) return;
    const title = search.split(" ").join("+");
    const URL = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=${KEY}`;
    setCategory("categories");
    fetchData(URL);
  }, [search, KEY]);

  useEffect(() => {
    if (category === "categories") return;
    const URL = `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&key=${KEY}`;

    fetchData(URL);
    setSearch("");
  }, [category, KEY]);

  useEffect(() => {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=subject:${"Self-Help"}&key=${KEY}`;
    fetchData(URL);
  }, [KEY]);

  async function fetchData(URL) {
    try {
      const response = await axios.get(URL);
      const newBooks = response.data.items.map((book) => ({
        title: book.volumeInfo.title,
        id: book.id,
        subtitle: book.volumeInfo.subtitle,
        description: book.volumeInfo.description,
        averageRating: book.volumeInfo.averageRating,
        categories: book.volumeInfo.categories,
        thumbnail: book.volumeInfo.imageLinks?.thumbnail,
        price: book.saleInfo.retailPrice?.amount || 299,
      }));
      setBooks(newBooks);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  function handleDelete(id) {
    const newCart = cartItems.filter((book) => book.id !== id);

    setCartItems(newCart);
  }

  const values = {
    books,
    category,
    setCategory,
    search,
    setSearch,
    cartItems,
    setCartItems,
    handleDelete,
  };

  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
}
