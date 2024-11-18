import { useId } from 'react';
import { useUser } from '../../context/UserContext';
import { Link } from 'react-router-dom';

export default function Navbar({ onSearchChange }) {
  const inputId = useId();
  const { isLoggedIn, login, logout } = useUser();

  const handleSearchInput = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <nav className="grid grid-cols-3 justify-between px-8 py-4 bg-[#3B4E89] items-center shadow-lg">
      {/* Logo & Navigation Links */}
      <ul className="flex gap-6 items-center justify-start">
        <li>
          <Link
            to="/"
            className="text-[#F2F4FF] text-xl font-semibold hover:text-[#D9E0F3] transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/categories"
            className="text-[#F2F4FF] text-xl font-semibold hover:text-[#D9E0F3] transition-colors duration-200"
          >
            Categories
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-[#F2F4FF] text-xl font-semibold hover:text-[#D9E0F3] transition-colors duration-200"
          >
            About
          </Link>
        </li>
      </ul>

      {/* Search Bar */}
      <ul className="flex justify-center items-center w-full">
        <li className="relative w-3/4 sm:w-1/2 md:w-1/3">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-[#F2F4FF] text-[#333] border-none focus:outline-none focus:ring-2 focus:ring-[#8091FF] transition-all duration-300"
            name="search"
            id={inputId}
            placeholder="Search food and drink..."
            onChange={handleSearchInput}
          />
        </li>
      </ul>

      {/* Auth and Cart/Orders */}
      {!isLoggedIn ? (
        <ul className="flex gap-4 justify-end items-center">
          <li>
            <button
              onClick={login}
              className="text-[#F2F4FF] font-semibold bg-[#8091FF] px-4 py-2 rounded-lg hover:bg-[#5b6fc5] transition-all duration-300"
            >
              Sign in
            </button>
          </li>
          <li>
            <Link
              className="text-[#F2F4FF] font-semibold bg-[#8091FF] px-4 py-2 rounded-lg hover:bg-[#5b6fc5] transition-all duration-300"
              to="/signup"
            >
              Sign up
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="flex gap-6 justify-end items-center">
          <li>
            <Link
              className="text-[#F2F4FF] font-semibold hover:text-[#D9E0F3] transition-colors duration-200"
              to="/cart"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="text-[#F2F4FF] font-semibold hover:text-[#D9E0F3] transition-colors duration-200"
            >
              My Orders
            </Link>
          </li>
          <li>
            <button
              onClick={logout}
              className="text-[#F2F4FF] font-semibold bg-[#8091FF] px-4 py-2 rounded-lg hover:bg-[#5b6fc5] transition-all duration-300"
            >
              Sign out
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
