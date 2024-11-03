import { useContext } from "react";
import { Trash2 } from "lucide-react";
import { BookContext } from "../Context/BookConext";

function Cart() {
  const { cartItems } = useContext(BookContext);
  const price = cartItems.reduce((total, item) => total + item.price, 0);
  return (
    <div className="min-h-screen bg-white px-10 py-16 text-black">
      <div className="mb-2 flex h-12 items-center justify-between">
        <h1 className="text-xl font-bold">Shopping Cart</h1>
        <p>Total Items: {cartItems.length}</p>
      </div>
      <div className="space mt-12">
        {cartItems.map((book, i) => (
          <CartItem book={book} key={i} />
        ))}
      </div>
      <button className="mt-10 h-12 w-full rounded-lg bg-emerald-700 text-2xl font-bold text-white">
        Proceed to checkout ₹{price}
      </button>
    </div>
  );
}

function CartItem({ book }) {
  const { title, author, thumbnail, averageRating } = book;
  const { handleDelete } = useContext(BookContext);
  return (
    <div className="items-center-center flex h-40 w-full justify-between rounded-lg rounded-t-lg bg-white p-4 text-black shadow-sm shadow-emerald-950">
      <div className="flex">
        <img
          className="w-28 rounded-t-lg object-cover"
          src={thumbnail}
          alt={title}
        />
        <div>
          <div className="px-4 py-2 font-bold"> {title}</div>
          <div className="px-4">{author}</div>
          <div className="px-4">{averageRating}</div>
          <div className="px-4 font-bold text-emerald-900">₹199</div>
        </div>
      </div>
      <button
        onClick={() => handleDelete(book.id)}
        className="mr-2 flex items-center justify-center rounded-lg text-emerald-800"
      >
        <Trash2 size={36} />
      </button>
    </div>
  );
}

export default Cart;
