import React, { useEffect, useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
function Header() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") == "dark"
      ? localStorage.getItem("theme")
      : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  function changeMode() {
    const localTheme = localStorage.getItem("theme");
    localTheme == "light" ? setTheme("dark") : setTheme("light");
  }
  return (
    <div className="navbar rounded-lg bg-base-100 pt-5 z-10 fixed left-[50%] translate-x-[-50%]">
      <div className="container-css px-[100px]">
        <div className="navbar-start flex">
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
                <a className="z-10">Universitet haqida</a>
                <ul className="p-2">
                  <li>
                    <NavLink to="/">Halqaro bo'lim</NavLink>
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
                <a>Yo'nalishlar</a>
                <ul className="p-2">
                  <li>
                    <a>Bakalavr</a>
                  </li>
                </ul>
              </li>
              <li className="z-10">
                <a>So'ngi yangiliklar</a>
                <ul className="p-2 z-10">
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
              </li>
              <a>Rasmlar</a>
              <a>Acta CAMU</a>
              {/* <>Aloqa</> */}
            </ul>
          </div>
          <a>
            {" "}
            <a className="flex justify-center items-center btn btn-ghost text-[#183c76] normal-case text-4xl">
              CAMU
            </a>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex z-10">
          <ul className="menu menu-horizontal px-1 z-10">
            <li className="flex items-center z-10">
              <a className="z-10">Asosiy</a>
            </li>
            <li tabIndex={0} className="z-10">
              <details className="z-10">
                <summary className="z-10">
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
            <li className="z-10" tabIndex={0}>
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
            <li className="z-10" tabIndex={0}>
              <details>
                <summary className="z-10">
                  <a>So'ngi yangiliklar</a>
                </summary>
                <ul className="p-2 z-10">
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
            <li>
              <a href="https://camu-crm.netlify.app">CRM</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 gap-2">
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
            <li className="flex justify-center items-center">
              <label className="swap swap-rotate">
                <input type="checkbox" onClick={changeMode} />
                <BsSunFill className="swap-on h-4 w-4" />
                <BsMoonFill className="swap-off h-4 w-4" />
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
