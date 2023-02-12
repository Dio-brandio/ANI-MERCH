import Image from "next/image";
import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark f-special">
      <div className="container-fluid">
        <a
          className="navbar-brand d-flex flex-column align-items-center fw-1 "
          href="/"
        >
          <Image
            src="/dio-logo.png"
            alt="logo"
            height={80}
            width={80}
            priority
          />
          ANI MERCH
        </a>
        <div className="d-flex justify-content-between gap-3 order-lg-3 order-2">
          <Link href="/order" legacyBehavior>
            <a
              className="nav-link text-white fs-2"
              aria-current="page"
              href="#"
            >
              <i className="bi bi-cart"></i>
            </a>
          </Link>
          <Link href="/profile" legacyBehavior>
            <a
              className="nav-link text-white fs-2"
              aria-current="page"
              href="#"
            >
              <i className="bi bi-person-fill"></i>
            </a>
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse order-lg-2 order-3" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" legacyBehavior>
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" legacyBehavior>
                <a className="nav-link " aria-current="page" href="#">
                  About us
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/tshirts" legacyBehavior>
                <a className="nav-link " aria-current="page" href="#">
                  T-shirts
                </a>
              </Link>
            </li>
            <li>
              <Link href="/tshirts" legacyBehavior>
                <a className="nav-link " aria-current="page" href="#">
                  Hoodies
                </a>
              </Link>
            </li>

            <li>
              <Link href="/contact" legacyBehavior>
                <a className="nav-link " aria-current="page" href="#">
                  Contact us
                </a>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
