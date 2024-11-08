import { Link, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
}

function NavItems({ text, to }) {
  return (
    <Link to={to} className="">
      {text}
    </Link>
  );
}

function Header() {
  return (
    <div className="flex h-16 items-center justify-between border-b border-gray-600 px-8">
      <div className="text-3xl font-bold tracking-wider">The Todo</div>
      <ul className="flex items-center space-x-7">
        <NavItems text={"Home"} to={"/"} />
        <NavItems text={"All Todos"} to={"/alltodos"} />
        <NavItems text={"Add Todos"} to={"/addtodo"} />
        <NavItems text={"Completed"} to={"/completed"} />
        <NavItems text={"Incompleted"} to={"/incomplete"} />
      </ul>
    </div>
  );
}

export default AppLayout;
