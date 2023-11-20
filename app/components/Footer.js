"use client";
import Image from "next/image";
import logo from "../../public/styles/assets/logo.svg";
import Link from "next/link";
import FB from "../../public/styles/assets/icon-facebook.svg";
import YT from "../../public/styles/assets/icon-youtube.svg";
import TW from "../../public/styles/assets/icon-twitter.svg";
import PT from "../../public/styles/assets/icon-pinterest.svg";
import IN from "../../public/styles/assets/icon-instagram.svg";
import { useState } from "react";

const Footer = () => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  return (
    <footer className="primary-footer | padding-block-700 bg-neutral-900 text-neutral-100">
      <div className="container">
        <div className="primary-footer-wrapper">
          <div className="primary-footer-logo-social">
            <Link href="#">
              <Image src={logo} alt="Manage" />
            </Link>
            <ul
              role="social-list"
              aria-label="social links"
              className="flex gap-3"
            >
              <li>
                <Link href="#" aria-label="facebook">
                  <Image src={FB} alt="facebook logo" className="social-icon" />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="youtube">
                  <Image src={YT} alt="youtube logo" className="social-icon" />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="twitter">
                  <Image src={TW} alt="twitter logo" className="social-icon" />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="pinterest">
                  <Image
                    src={PT}
                    alt="pinterest logo"
                    className="social-icon"
                  />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="instagram">
                  <Image
                    src={IN}
                    alt="instagram logo"
                    className="social-icon"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="primary-footer-nav">
            <nav className="footer-nav">
              <ul
                aria-label="Footer"
                role="list"
                className="flow"
                style={{ "--flow-space": "1em" }}
              >
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#">Pricing</Link>
                </li>
                <li>
                  <Link href="#">Products</Link>
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
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="primary-footer-form">
            <form>
              <input
                type="email"
                pattern="(v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)"
                placeholder="Updates in your inbox..."
                className="text-stone-950"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
              />
              <button className="button">Go</button>
            </form>
            <p>Copyright 2020. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
