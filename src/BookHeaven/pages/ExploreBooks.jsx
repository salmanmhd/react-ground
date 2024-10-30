import axios from "axios";
import { useEffect, useState } from "react";

function ExploreBooks() {
  const [books, setBooks] = useState(null);
  const KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
  const URL = `https://www.googleapis.com/books/v1/volumes?q=eat+that+frog&key=${KEY}`;
  useEffect(() => {
    console.log(KEY);
    async function fetchData() {
      const response = await axios.get(URL);
    }

    fetchData();
  }, [URL]);
  return <div>Explore Books</div>;
}

export default ExploreBooks;
