import React from "react";

const Order = () => {
  return (
    <section className="h-100 gradient-custom mt-10">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-10 col-xl-8">
            <div className="card">
              <div className="card-header px-4 py-5">
                <h5 className="text-muted mb-0">
                  Thanks for your Order,&nbsp; <span>Senpai</span>!
                </h5>
              </div>
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <p className="lead fw-normal mb-0">Your Orders</p>
                </div>
                <div className="card shadow-0 border mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2">
                        <img
                          src="/slides/chika.jpg"
                          className="img-fluid"
                          alt="Phone"
                        />
                      </div>
                      <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p className="text-muted mb-0">Chika Tshirt</p>
                      </div>
                      <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p className="text-muted mb-0 small">White</p>
                      </div>
                      <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p className="text-muted mb-0 small">Size: M</p>
                      </div>
                      <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p className="text-muted mb-0 small">Qty: 1</p>
                      </div>
                      <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p className="text-muted mb-0 small">₹6999</p>
                      </div>
                    </div>
                    <hr className="mb-4" />
                    <div className="row d-flex align-items-center">
                      <div className="col-md-2">
                        <p className="text-muted mb-0 small">Track Order</p>
                      </div>
                      <div className="col-md-10">
                        <div className="d-flex justify-content-around mb-1">
                          <p className="mt-1 mb-0 small ms-xl-5 text-warning">
                            Out for delivary
                          </p>
                          <p className="text-muted mt-1 mb-0 small ms-xl-5">
                            Delivered
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="mt-2 p-2">
                    <p className="fw-bold mb-0">Order Details</p>
                  </div>
                  <div className="col-sm-6 p-2">
                    <div className="mt-2">
                      <p className="text-muted mb-0">OrderNo: 69420</p>
                    </div>
                    <div className="mt-2">
                      <p className="text-muted mb-0">Invoice Number : 696969 </p>
                    </div>
                    <div className="mt-2">
                      <p className="text-muted mb-0">Invoice Date : 22 Dec,2019</p>
                    </div>
                  </div>
                  <div className="col-sm-6 p-2 d-flex justify-content-end">
                    <div className="">
                      <p className="text-muted mb-0 d-flex justify-content-between">
                        <span className="fw-bold me-4">Price</span>
                        <span>₹6999.00</span>
                      </p>
                      <p className="text-muted mb-0 d-flex justify-content-between">
                        <span className="fw-bold me-4">Discount</span>
                        <span>₹69.00</span>
                      </p>
                      <p className="text-muted mb-0 d-flex justify-content-between">
                        <span className="fw-bold me-4">GST 18%</span>
                        <span>₹69</span>
                      </p>
                      <p className="text-muted mb-0 d-flex justify-content-between">
                        <span className="fw-bold me-4">Delivery Charges</span>{" "}
                        <span>Free</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer border-0 px-4 py-5 bg-secondary">
                <h5 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">
                  Total: <span className="h2 mb-0 ms-2">₹6999</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
