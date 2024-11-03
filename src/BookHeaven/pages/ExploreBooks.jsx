import { Search, ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { BookContext } from "../Context/BookConext";

function ExploreBooks() {
  const { books, search, setSearch, category, setCategory } =
    useContext(BookContext);
  return (
    <div className="bg-white">
      <div className="flex h-20 items-center justify-center border-b border-emerald-900">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            e.preventDefault();
            setSearch(e.target.value);
          }}
          className="h-10 w-60 rounded-l-xl border border-r-0 border-gray-300 p-3 text-xl text-emerald-950 focus:outline-none"
          placeholder="Search books..."
        />
        <button className="mr-16 flex h-10 items-center justify-center rounded-r-xl border border-l-0 border-gray-300 p-3 text-xl text-gray-700">
          <Search size={28} />
        </button>

        <p className="flex h-9 w-28 items-center justify-center rounded-l-xl border border-r-0 border-gray-300 text-xl text-emerald-950">
          Categories
        </p>
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="h-9 w-40 rounded-r-xl border-l-0 bg-gray-300 px-2 text-center text-lg text-black accent-emerald-600"
        >
          <option value="categories">categories</option>
          <option value="Business & Economics">Business & Economics</option>
          <option value="Fiction">Fiction</option>
          <option value="Self-Help">Self-Help</option>
          <option value="Biography & Autobiography">
            Biography & Autobiography
          </option>
          <option value="Science">Science</option>
          <option value="Technology">Technology</option>
          <option value="Health & Fitness">Health & Fitness</option>
          <option value="History">History</option>
          <option value="Art">Art</option>
          <option value="Philosophy">Philosophy</option>
        </select>
      </div>
      <div className="space mt-32 flex flex-wrap justify-center">
        {books.map((book, i) => (
          <BookItem book={book} key={i} />
        ))}
      </div>
    </div>
  );
}

function BookItem({ book }) {
  const { setCartItems } = useContext(BookContext);
  const { title, subtitle, averageRating, thumbnail } = book;
  console.log(book.id);
  return (
    <div className="items-center-center mx-4 mb-8 h-[30rem] w-80 rounded-lg rounded-t-lg bg-white text-black shadow-sm shadow-emerald-950">
      <img
        className="h-[18rem] w-full rounded-t-lg object-cover"
        src={thumbnail}
        alt={title}
      />
      <div className="h-14 px-4 py-2 font-bold"> {title}</div>
      <div className="h-14 px-4">{subtitle}</div>
      <div className="px-4">{averageRating}</div>
      <button
        onClick={() => setCartItems((prev) => [...prev, book])}
        className="mx-auto flex h-10 w-40 items-center justify-center rounded-lg bg-emerald-600 text-white"
      >
        Add to Cart <ShoppingCart size={36} />
      </button>
    </div>
  );
}

export default ExploreBooks;
