import { ShoppingBag } from "lucide-react";

export const NavBar = () => {
  return (<div className="flex justify-normal items-center gap-8">
    <div className="w-10 h-10 bg-slate-500 rounded-full" />
    <nav className="flex justify-between w-full">
      <ul className="flex gap-8 items-center">
        <li>
          <a className="text-slate-900 font-medium text-sm hover:font-semibold" href="#">Home</a>
        </li>
        <li>
          <a className="text-slate-900 font-medium text-sm hover:font-semibold" href="#">Products</a>
        </li>
        <li>
          <a className="text-slate-900 font-medium text-sm hover:font-semibold" href="#">Featured Products</a>
        </li>
        <li>
          <a className="text-slate-900 font-medium text-sm hover:font-semibold" href="#">Best Sellers</a>
        </li>
      </ul>
      <ul className="flex gap-8 items-center">
        <li>
          <ShoppingBag size={32} />
        </li>
        <li>
          <a className="w-10 h-10 bg-slate-200 rounded-full flex justify-center items-center">
            <p>CN</p>
          </a>
        </li>
      </ul>
    </nav>
  </div>);
}