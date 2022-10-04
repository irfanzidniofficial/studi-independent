import React from "react";

function Header() {
  return (
    <>
      <>
        <nav className="py-2 bg-light border-bottom">
          <div className="container d-flex flex-warp">
            <ul className="nav me-auto">
              <li className="nav-item">
                <a
                  href="/"
                  className="nav-link link-dark px-2 active"
                  aria-current="page"
                >
                  Testing Example
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/"
                  className="nav-link link-dark px-2 active"
                  aria-current="page"
                >
                  002 - Muhammad Irfan Zidni
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    </>
  );
}
export default Header;
