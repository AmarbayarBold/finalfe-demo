import React from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between md:px-32 px-5 gap-16">
        <div className="flex items-center p-2">
          <Link to="/" spy={true} smooth={true} duration={500}>
            <h1 className="font-semibold text-2xl text-brightRed">FitZone</h1>
          </Link>
        </div>
        <nav className="flex items-center p-2 gap-5">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            classID="hover:text-brightRed transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="plans"
            spy={true}
            smooth={true}
            duration={500}
            classID="hover:text-brightRed transition-all cursor-pointer"
          >
            Plans
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            classID="hover:text-brightRed transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="trainers"
            spy={true}
            smooth={true}
            duration={500}
            classID="hover:text-brightRed transition-all cursor-pointer"
          >
            Trainers
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            classID="hover:text-brightRed transition-all cursor-pointer"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
