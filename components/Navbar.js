import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
const Navbar = () => {



  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark f-special shadow">
      <div className="container-fluid">
        <Link
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
        </Link>
        <div className="d-flex justify-content-between gap-3 order-lg-3 order-2  position-relative">
          <a
            className="nav-link text-white"
            aria-current="page">
            <i id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false" className="bi bi-cart fs-2 cursor-pointer"></i>
            <ol className="sidecart dropdown-menu border-light border-1 f-common right-0 px-5 bg-dark" aria-labelledby="navbarDropdown">
              <li className="col-12 mt-2 border-white border-1 text-white p-2">
                <div className="row px-2">
                  <div className="col-8  text-white">Anime Tshirt </div>
                  <div className="col-4 text-center"> <p className="text-white">6</p> </div>
                </div>
              </li>
              <li className="col-12 mt-2 border-white border-1 text-white p-2">
                <div className="row px-2">
                  <div className="col-8  text-white">Anime Tshirt </div>
                  <div className="col-4 text-center"> <p className="text-white">6</p> </div>
                </div>
              </li>
              <li className="col-12 mt-2 border-white border-1 text-white p-2">
                <div className="row px-2">
                  <div className="col-8  text-white">Anime Tshirt </div>
                  <div className="col-4 text-center"> <p className="text-white">6</p> </div>
                </div>
              </li>
              <li className="col-12 mt-2 border-white border-1 text-white p-2">
                <div className="row px-2">
                  <div className="col-8  text-white">Anime Tshirt </div>
                  <div className="col-4 text-center"> <p className="text-white">6</p> </div>
                </div>
              </li>
            </ol>


          </a>
          <Link href="/profile" legacyBehavior>
            <a
              className="nav-link text-white fs-2 "
              aria-current="page">
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
                <a className="nav-link active" aria-current="true" href="#">
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
            <li className="nav-item">
              <Link href="/hoodies" legacyBehavior>
                <a className="nav-link " aria-current="page" href="#">
                  Hoodies
                </a>
              </Link>
            </li>

            <li className="nav-item">
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
