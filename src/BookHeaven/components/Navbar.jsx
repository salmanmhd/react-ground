import { Link } from "react-router-dom";
import { ShoppingCart, BookText } from "lucide-react";
import { useContext } from "react";
import { BookContext } from "../Context/BookConext";

function NavBar() {
  const { cartItems } = useContext(BookContext);
  const cartLength = cartItems.length || 0;
  return (
    <div className="flex h-12 items-center justify-between bg-emerald-500 px-8 shadow-sm shadow-emerald-800">
      <Link
        to="/"
        className="flex cursor-pointer items-center space-x-2 text-xl font-bold"
      >
        <BookText />
        BooksHeaven
      </Link>
      <div className="flex h-8 gap-x-10">
        <Link className="cursor-pointer hover:text-emerald-900" to="/">
          Home
        </Link>
        <Link className="cursor-pointer hover:text-emerald-900" to="/books">
          Books
        </Link>
        <Link
          className="relative flex h-8 w-8 cursor-pointer items-start hover:text-emerald-900"
          to="/cart"
        >
          <div className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-950 text-xs text-white">
            {cartLength}
          </div>
          <ShoppingCart size={26} />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
