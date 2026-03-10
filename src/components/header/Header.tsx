import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-gray-800 text-white">
      <Link to="/" className="text-2xl font-bold">
        <h1>mCron</h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
