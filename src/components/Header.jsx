import React from "react";
import Logo from '../images/icons/logo.png'
import { NavLink } from "react-router-dom";
import 
function Header() {
  return (
    <div className="container-css navbar bg-base-100">
      <div className="navbar-start pt-3">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a href="#">Asosiy</a>
            </li>
            <li>
              <a>Universitet haqida</a>
              <ul className="p-2">
                <li>
                  <a>Halqaro bo'lim</a>
                </li>
                <li>
                  <a>Madaniyat bo'limi</a>
                </li>
                <li>
                  <a>Ilmiy bo'limi</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a> <img className="w-20" src={Logo} alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Asosiy</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>
                <a>Universitet haqida</a>
              </summary>
              <ul className="p-2">
                <li>
                  <a>Halqaro bo'lim</a>
                </li>
                <li>
                  <a>Madaniyat bo'limi</a>
                </li>
                <li>
                  <a>Ilmiy bo'limi</a>
                </li>
              </ul>
            </details>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>
                <a>Yo'nalishlar</a>
              </summary>
              <ul className="p-2">
                <li>
                  <a>Bakalavr</a>
                </li>
              </ul>
            </details>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>
                <a>So'ngi yangiliklar</a>
              </summary>
              <ul className="p-2">
                <li>
                  <a>Maqolalar</a>
                </li>
                <li>
                  <a>Eng so'ngilari</a>
                </li>
                <li>
                  <a>Maqolalar</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Rasmlar</a>
          </li>
          <li>
            <a>Acta CAMU</a>
          </li>
          <li>
            <a>Aloqa</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <details>
              <summary>Til</summary>
              <ul className="p-2">
                <li>
                  <a href="#">Uz</a>
                </li>
                <li>
                  <a href="#">Ru</a>
                </li>
                <li>
                  <a href="#">Eng</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Dark mode</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
