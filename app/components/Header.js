import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/styles/assets/logo.svg";
const Header = () => {
  return (
    <section>
      <header className="primary-header">
        <div className="container">
          <Link href="#">
            <Image src={logo} alt="Manage" />
          </Link>
          <nav className="primary-navigation">
            <ul role="list" className="nav-list">
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
          <button className="button">Get Started</button>
        </div>
      </header>
    </section>
  );
};

export default Header;
