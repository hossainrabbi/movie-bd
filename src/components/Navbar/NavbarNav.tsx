import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function NavbarNav() {
  return (
    <Navbar className="bg-[#222539] text-white  ">
      <Navbar.Toggle />
      <Navbar.Collapse className="md:!w-full">
        <div className="flex  flex-col md:flex-row justify-between items-center flex-wrap gap-5 w-full">
          <div className="flex flex-col md:flex-row items-center gap-5">
            {nav1.map((item) => (
              <Link className="capitalize" to={`/${item}`} key={item}>
                {item}
              </Link>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5">
            {nav2.map((item) => (
              <Link className="capitalize" to={`/${item}`} key={item}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

// navbar items
const nav1 = ['movies', 'stream', 'events', 'plays'];
const nav2 = ['listYourShow', 'corporates', 'offers', 'giftCards'];
