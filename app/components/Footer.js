import Image from "next/image";
import logo from "../../public/styles/assets/logo.svg";
import Link from "next/link";
import FB from "../../public/styles/assets/icon-facebook.svg";
import YT from "../../public/styles/assets/icon-youtube.svg";
import TW from "../../public/styles/assets/icon-twitter.svg";
import PT from "../../public/styles/assets/icon-pinterest.svg";
import IN from "../../public/styles/assets/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="container">
        <div className="even-columns">
          <div>
            <Link href="#">
              <Image src={logo} alt="Manage" />
            </Link>
            <ul role="list" aria-label="social links">
              <li>
                <Link href="#" aria-label="facebook">
                  <Image src={FB} alt="facebook logo" />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="youtube">
                  <Image src={YT} alt="youtube logo" />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="twitter">
                  <Image src={TW} alt="twitter logo" />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="pinterest">
                  <Image src={PT} alt="pinterest logo" />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="instagram">
                  <Image src={IN} alt="instagram logo" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
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
          <div>
            <form>
              <input type="email" />
              <button>Go</button>
              <p>Copyright 2020. All Rights Reserved</p>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
