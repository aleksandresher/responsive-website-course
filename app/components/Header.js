"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/styles/assets/logo.svg";
import MenuIcon from "../../public/styles/assets/icon-hamburger.svg";
import CloseIcon from "../../public/styles/assets/icon-close.svg";

const Header = () => {
  const [isVissible, setIsVissible] = useState(false);
  const [iconChange, setIconChange] = useState(true);
  function toggleMenu() {
    setIsVissible((prev) => !prev);
    setIconChange((prev) => !prev);
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
              {iconChange ? (
                <Image src={MenuIcon} className="icon-hamburger" />
              ) : (
                <Image src={CloseIcon} className="icon-close" />
              )}

              <span className="visually-hidden">Menu</span>
            </button>
            <nav
              className={`primary-navigation ${
                isVissible ? "vissible" : "hidden"
              }`}
            >
              <ul role="list" id="primary-navigation" class="nav-list">
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
            <button className="button" style={{ display: "none" }}>
              Get Started
            </button>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
