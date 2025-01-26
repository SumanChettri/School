import React, { useState, useRef } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

const NavLink = styled.a`
  @apply text-white transition duration-300 transform px-3 py-2 rounded;
  &:hover {
    @apply text-gray-200 bg-blue-500;
    transform: scale(1.1);
  }
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Create a ref for the CSSTransition node
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 mb-3 z-50 bg-blue-400 text-white shadow-lg transition-all duration-300 ease-in-out">
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Sikkim School</div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <ul className="flex space-x-6">
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/about">About</NavLink>
              </li>
              <li>
                <NavLink href="/admissions">Admissions</NavLink>
              </li>
              <li>
                <NavLink href="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <CSSTransition
          in={isMobileMenuOpen}
          timeout={300}
          classNames="menu"
          unmountOnExit
          nodeRef={menuRef} // Add the ref here
        >
          <div
            ref={menuRef} // Attach the ref to the div
            className="absolute left-0 top-16 w-full bg-blue-500 p-6 space-y-4 text-center transform transition-all duration-300"
          >
            <ul className="space-y-4">
              <li>
                <NavLink href="/" className="text-lg">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink href="/about" className="text-lg">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink href="/contact" className="text-lg">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    </header>
  );
};

export default Header;