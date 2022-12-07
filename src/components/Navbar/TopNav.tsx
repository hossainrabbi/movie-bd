import { Navbar, TextInput } from 'flowbite-react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function TopNav() {
  return (
    <Navbar className="shadow-sm py-4 bg-[#333545]">
      <div className="flex items-center gap-5">
        <Link to="/">
          <img className="h-9" src="assets/images/logo.svg" alt="" />
        </Link>
        <TextInput
          id="search"
          type="search"
          placeholder="Search for Movie, Event, Plays..."
          required={true}
          icon={FaSearch}
        />
      </div>
      <div>
        <button className="btn px-6 py-2 mt-1 text-sm">Sign in</button>
      </div>
    </Navbar>
  );
}
