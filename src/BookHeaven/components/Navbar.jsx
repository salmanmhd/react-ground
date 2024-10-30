import { Link } from "react-router-dom";
import { ShoppingCart, BookText } from "lucide-react";

function NavBar() {
  return (
    <div className="flex h-12 items-center justify-between bg-emerald-500 px-8 shadow-sm shadow-emerald-800">
      <Link
        to="/"
        className="flex cursor-pointer items-center space-x-2 text-xl font-bold"
      >
        <BookText />
        BooksHeaven
      </Link>
      <div className="flex gap-x-6">
        <Link className="cursor-pointer hover:text-emerald-900" to="/">
          Home
        </Link>
        <Link className="cursor-pointer hover:text-emerald-900" to="/books">
          Books
        </Link>
        <Link className="cursor-pointer hover:text-emerald-900" to="/cart">
          <ShoppingCart />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
