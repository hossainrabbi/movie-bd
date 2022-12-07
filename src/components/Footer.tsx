import { Footer as FwbFooter } from 'flowbite-react';
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { navOffer, navTag } from '../data/data';

export default function Footer() {
  return (
    <FwbFooter className="!rounded-none bg-slate-800">
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
          {/* movie tags nav */}
          <div>
            <FwbFooter.Title title="Movie Tags" />
            <FwbFooter.LinkGroup col={true}>
              {navTag.map((nav) => (
                <Link className="capitalize hover:underline" to={`/${nav}`}>
                  {nav}
                </Link>
              ))}
            </FwbFooter.LinkGroup>
          </div>

          {/* movie offers nav */}
          <div>
            <FwbFooter.Title title="Offers" />
            <FwbFooter.LinkGroup col={true}>
              {navOffer.map((nav) => (
                <Link className="capitalize hover:underline" to={`/${nav}`}>
                  {nav}
                </Link>
              ))}
            </FwbFooter.LinkGroup>
          </div>
          <div>
            <FwbFooter.Title title="legal" />
            <FwbFooter.LinkGroup col={true}>
              <FwbFooter.Link href="#">Privacy Policy</FwbFooter.Link>
              <FwbFooter.Link href="#">Licensing</FwbFooter.Link>
              <FwbFooter.Link href="#">Terms & Conditions</FwbFooter.Link>
            </FwbFooter.LinkGroup>
          </div>
          <div>
            <FwbFooter.Title title="download" />
            <FwbFooter.LinkGroup col={true}>
              <FwbFooter.Link href="#">iOS</FwbFooter.Link>
              <FwbFooter.Link href="#">Android</FwbFooter.Link>
              <FwbFooter.Link href="#">Windows</FwbFooter.Link>
              <FwbFooter.Link href="#">MacOS</FwbFooter.Link>
            </FwbFooter.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-slate-900 py-6 px-4 sm:flex sm:items-center sm:justify-between">
          <FwbFooter.Copyright
            href="#"
            by="BookMyShow™"
            year={new Date().getFullYear()}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FwbFooter.Icon href="#" icon={BsFacebook} />
            <FwbFooter.Icon href="#" icon={BsInstagram} />
            <FwbFooter.Icon href="#" icon={BsTwitter} />
            <FwbFooter.Icon href="#" icon={BsGithub} />
            <FwbFooter.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </FwbFooter>
  );
}
