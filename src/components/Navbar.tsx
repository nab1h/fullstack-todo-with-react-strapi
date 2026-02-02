import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full h-20 px-2 py-6 mb-10">
        <div>
          <ul>
            <li>
              <NavLink to='/' className="hover:text-blue-500 duration-400 font-bold border border-black-700 rounded-sm py-2 px-4 m-3">Home</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex">
          <ul className="flex gap-4">
            <li className="hove:color-blue">
              <NavLink to='/login' className="hover:text-blue-500 duration-400 font-bold border border-black-700 rounded-sm py-2 px-4 m-3">Login</NavLink>
            </li>
            <li>
              <NavLink to='/register' className="hover:text-blue-500 duration-400 font-bold border border-black-700 rounded-sm py-2 px-4 m-3">Register</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
