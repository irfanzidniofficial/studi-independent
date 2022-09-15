import React from "react";

function Header() {
  return (
    <>
      <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <a
                href="/"
                className="nav-link link-dark px-2 active"
                aria-current="page"
              >
                Home
              </a>
              <li className="nav-item">
                <a href="/" className="nav-link link-dark px-2">
                  Feature
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link link-dark px-2">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link link-dark px-2">
                  About
                </a>
              </li>
              <ul className="nav">
                <li className="nav-item">
                  <a href="/" className="nav-link link-dark px-2">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link link-dark px-2">
                    Signup
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Header;
