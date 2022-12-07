import { Navbar, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import AuthModal from '../AuthModal';

export default function TopNav() {
  const [openModal, setOpenModal] = useState(false);

  // open modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  // close modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Navbar className="shadow-sm py-3 bg-[#333545]">
      <div className="flex items-center gap-5">
        <Link to="/">
          <img className="h-9 text-white" src={logo} alt="BookMyShow" />
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
        <button
          className="btn px-6 py-2 mt-1 text-sm"
          onClick={handleOpenModal}
        >
          Sign in
        </button>
        <AuthModal openModal={openModal} handleClose={handleCloseModal} />
      </div>
    </Navbar>
  );
}
