"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/styles/assets/logo.svg";
import MenuIcon from "../../public/styles/assets/icon-hamburger.svg";
import CloseIcon from "../../public/styles/assets/icon-close.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIconShown, setIsIconShown] = useState(true);
  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
    setIsIconShown((prev) => !prev);
  }
  return (
    <section>
      <header className="primary-header overlay">
        <div className="container">
          <div className="nav-wrapper">
            <Link href="#">
              <Image src={logo} alt="Manage" />
            </Link>
            <button
              onClick={() => toggleMenu()}
              className="mobile-nav-toggle sm:hidden"
              aria-controls="primary-navigation"
            >
              {isIconShown ? (
                <Image src={MenuIcon} className="icon-hamburger sd:hidden" />
              ) : (
                <Image src={CloseIcon} className="icon-close sd:hidden" />
              )}

              <span className="visually-hidden">Menu</span>
            </button>
            <nav className="primary-navigation">
              <ul role="list" id="primary-navigation" className="nav-list">
                <li>
                  <Link href="#">Pricing</Link>
                </li>
                <li>
                  <Link href="#">Product</Link>
                </li>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
                <li>
                  <Link href="#">Community</Link>
                </li>
              </ul>
            </nav>
            <button className="hidden md:inline-flex button">
              Get Started
            </button>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
