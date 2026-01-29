import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full h-10 py-2 mb-2 bg-amber-500">
        <div>
          <ul>
            <li>
              <Link to='/' className="hover:text-blue-500 duration-400 font-bold">Home</Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <ul className="flex gap-4">
            <li className="hove:color-blue">
              <Link to='/' className="hover:text-blue-500 duration-400 font-bold">Login</Link>
            </li>
            <li>
              <Link to='/' className="hover:text-blue-500 duration-400 font-bold">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
