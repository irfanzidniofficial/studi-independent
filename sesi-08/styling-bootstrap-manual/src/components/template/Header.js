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
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link link-dark px-2">
                  Features
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
            </ul>
            <ul className="nav">
              <li className="nav-item">
                <a href="/" className="nav-link link-dark px-2">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link link-dark px-2">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <header className="py-3 mb-4 border-bottom">
          <div className="container d-flex flex-wrap justify-content-center">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
            >
              <span>My Frist React App</span>
            </a>
            <div className="col-12 col-lg-auto mb-3 mb-lg-0">
              <input
                type="search"
                className="from-control"
                placeholder="Search..."
                arial-label="Search"
              />
            </div>
          </div>
        </header>
      </>
    </>
  );
}
export default Header;
