import Pincodecheck from "@/components/Pincodecheck";
import Link from "next/link";
import React from "react";
const Checkout = ({ cart,addToCart,removeFromCart }) => {
  return (
    <div className="mt-10">
      <div className="container ">
        <h1 className="text-center my-4">Checkout </h1>
        <div className="row">
          <div className="col-lg-6">
            <form className="my-5">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id=""
                  aria-describedby="emailHelp"
                  placeholder="Enter your email "
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Phone No.
                </label>
                <input
                  type="number"
                  className="form-control"
                  id=""
                  placeholder="Enter your Mobile Number"
                  name="phone"
                />
              </div>
              <div className="mb-3 row">
                <div className="col-6">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    name="firstname"
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    name="lastname"
                  />
                </div>
              </div>
              <hr className="hr" />
              <h3 className="mb-3 text-center">Address</h3>
              <div className="mb-3">
                <Pincodecheck />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Enter Your Address
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-lg btn-dark">
                Submit
              </button>
            </form>
          </div>
          <div className="col-lg-6 px-3  bg-dark rounded ">
              <h3 className="pt-3 text-white">Your Cart</h3>
              {Object.keys(cart).length < 1 && (
                <div className="text-dark">The Cart Is MT</div>
              )}
            <ol className="cart fs-5 border-light border-1 f-common w-100">

              {Object.keys(cart).map((key) => {
                return (
                  <li className="col-12 mt-3 border-white border-1 text-white p-3" key={key}>
                    <div className="row px-2">
                      <div className="col-8  text-white">
                      <h5>{cart[key].pname}</h5>
                      <span className="fs-5">Size:{cart[key].size} , Color:{cart[key].varient}</span>
                      </div>
                      <div className="col-4 text-center d-flex justify-content-between gap-2 align-items-center">
                        <i className="cursor-pointer text-white bi bi-dash-circle"
                          onClick={() => {
                            removeFromCart(
                              key,
                              1,
                              cart[key].size,
                              cart[key].price,
                              cart[key].varient,
                              cart[key].pname
                            );}}></i>
                        <font className="text-white qty">{cart[key].qty}</font>
                        <i className="cursor-pointer text-white bi bi-plus-circle "
                          onClick={() => {
                            addToCart(
                              key,
                              1,
                              cart[key].size,
                              cart[key].price,
                              cart[key].varient,
                              cart[key].pname
                            );
                          }}></i>
                      </div>
                    </div>
                    <hr className="hr" />
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
