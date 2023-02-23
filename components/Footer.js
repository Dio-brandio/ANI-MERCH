import Image from "next/image";
import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light">
      <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="h1 text-white">
                <Image src="/animerch.svg" alt="" className="invert" width={100} height={50} />
              </h5>
              <p className="small text-muted">
                The best website for the Weebs By A weeb.
              </p>
              <p className="small text-muted mb-0">
                &copy; Copyrights. All rights reserved.
                <Link href="/" legacyBehavior>
                  <a className="text-secondary">ANI MERCH</a>
                </Link>
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Quick links</h5>
              <ul className="list-unstyled ">
                <li>
                  <Link href="/" legacyBehavior>
                    <a className="text-white" href="#">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about" legacyBehavior>
                    <a className="text-white" href="#">
                      About
                    </a>
                  </Link>
                </li>
                <li>
                <Link href="/tshirts" legacyBehavior>
                    <a className="text-white" href="#">
                      Get started
                    </a>
                  </Link>
                </li>
                <li>
                  <a className="text-white" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Quick links</h5>
              <ul className="list-unstyled text-muted">
                <li>
                <Link href="/tshirts" legacyBehavior>
                    <a className="text-white" href="#">
                      T-shirts
                    </a>
                  </Link>
                </li>
                <li>
                <Link href="/tshirts" legacyBehavior>
                    <a className="text-white" href="#">
                      Hoodies
                    </a>
                  </Link>
                </li>
                <li>
                <Link href="/order" legacyBehavior>
                    <a className="text-white" href="#">
                     Your Orders
                    </a>
                  </Link>
                </li>
                <li>
                  <a className="text-white" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-3">Stay Updated .</h5>
              <p className="small text-muted">
                Stay updated by entering your email here and we will update you
                to our latest collections.
              </p>
              <form action="#">
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Your email here"
                    aria-label="Your email here"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-primary"
                    id="button-addon2"
                    type="button"
                  >
                    <i className="bi bi-send-fill"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      <script src="https://code.jquery.com/jquery-3.6.3.slim.min.js" integrity="sha256-ZwqZIVdD3iXNyGHbSYdsmWP//UBokj2FHAxKuSBKDSo=" crossOrigin="anonymous"></script>
    </div>
  );
};

export default Footer;
