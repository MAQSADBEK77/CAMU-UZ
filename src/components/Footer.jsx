import "./Footer.css";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { LiaTelegramPlane } from "react-icons/lia";

function Footer() {
  return (
    <div className="container-css" data-aos="flip-down">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav className="sm:mx-auto">
          <header className="mx-auto pb-3">
            <img
              src="./public/images/icons/logo.png"
              alt="Logo"
              width="130px"
              height="130px"
            />
          </header>
          <div className="grid grid-flow-col gap-4 mx-auto footer-icons">
            <a>
              <FaFacebookF />
            </a>
            <a>
              <FaTwitter />
            </a>
            <a>
              <FaInstagram />
            </a>
            <a>
              <LiaTelegramPlane />
            </a>
          </div>
        </nav>
        <nav className="footer-adres">
          <header className="footer-title">Свяжитесь с нами</header>
          <a className="link link-hover">
            <BsTelephone />
            <span> +998 95 485 00 70</span>
          </a>
          <a className="link link-hover">
            <CiLocationOn />
            <span> Ulitsa Usmona Yusupova, Fergana, Uzbekistan</span>
          </a>
          <a className="link link-hover text-red-600">
            <HiOutlineMail />
            info@camuf.uz
          </a>
        </nav>

        <form>
          <header className="footer-title">Последние новости</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">
                Введите свой адрес электронной почты, чтобы получать последние
                новости университета, специальные мероприятия и студенческие
                мероприятия, доставленные на ваш почтовый ящик...
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
}

export default Footer;
