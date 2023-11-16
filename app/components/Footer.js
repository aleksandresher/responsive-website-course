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
                  <Image src={FB} />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="youtube">
                  <Image src={YT} />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="twitter">
                  <Image src={TW} />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="pinterest">
                  <Image src={PT} />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="instagram">
                  <Image src={IN} />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <nav className="footer-nav">
              <ul aria-label="Footer" role="list">
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
