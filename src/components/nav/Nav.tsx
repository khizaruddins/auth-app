import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1"
      >
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
      </button>
      <ul
        className={`flex flex-col md:flex-row gap-3 absolute md:static top-12 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 ${isOpen ? 'block text-black mt-4 border' : 'hidden md:flex'}`}
      >
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
