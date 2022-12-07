import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { navOffer, navTag } from '../../data/data';

export default function NavbarNav() {
  return (
    <Navbar className="bg-slate-900 text-white  ">
      <Navbar.Toggle />
      <Navbar.Collapse className="md:!w-full">
        <div className="flex  flex-col md:flex-row justify-between items-center flex-wrap gap-5 w-full">
          <div className="flex flex-col md:flex-row items-center gap-5">
            {navTag.map((item) => (
              <Link className="capitalize" to={`/${item}`} key={item}>
                {item}
              </Link>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5">
            {navOffer.map((item) => (
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
