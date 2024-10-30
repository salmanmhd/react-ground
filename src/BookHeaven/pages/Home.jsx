import { FileHeart, LibraryBig, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center space-y-4 bg-white">
      <h1 className="mt-40 text-4xl font-bold text-emerald-950">
        Welcome to BooksHaven
      </h1>
      <p className="mt-20 text-xl text-emerald-900">
        Discover your next favorite book in our carefully curated collection
      </p>
      <div className="flex gap-x-8 py-12">
        <Features
          title={"Vast Collection"}
          description={"Explore thousands of books across all genres"}
          logo={<LibraryBig />}
        />
        <Features
          title={"Curated Lists"}
          description={"Hand-picked recommendations just for you"}
          logo={<FileHeart />}
        />
        <Features
          title={"Easy Shopping"}
          description={"Seamless checkout and fast delivery"}
          logo={<ShoppingBag />}
        />
      </div>
      <Link
        to="/books"
        className="flex h-11 w-44 items-center justify-center rounded-md bg-emerald-600 text-xl"
      >
        Browse Books
      </Link>
    </div>
  );
}

function Features({ title, description, logo }) {
  return (
    <div className="flex w-72 flex-col items-center justify-center rounded-md border border-emerald-800 bg-white px-3 py-5 text-black shadow-md shadow-emerald-950">
      <div className="text-2xl text-emerald-800">{logo}</div>
      <div className="text-md font-bold">{title}</div>
      <div className="text-center text-gray-700">{description}</div>
    </div>
  );
}

export default Home;
