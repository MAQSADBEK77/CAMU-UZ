import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../images/icons/logo.png";

function Footer() {
  return (
    <div className="container-css">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <header className="footer-title">
            <img src={Logo} alt="Logo" width="130px" height="130px" />
          </header>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaFacebookF width="50px" />
            </a>
            <a>
              <FaTwitter />
            </a>
            <a>
              <FaInstagram />
            </a>
          </div>
        </nav>
        <nav className="footer-adres">
          <header className="footer-title">Свяжитесь с нами</header>
          <a className="link link-hover">
            <BsTelephone />
            +998 95 485 00 70
          </a>
          <a className="link link-hover">
            <CiLocationOn />
            Ulitsa Usmona Yusupova, Fergana, Uzbekistan
          </a>
          <a className="link link-hover">
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
