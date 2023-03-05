import Pincodecheck from "@/components/Pincodecheck";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
const Slug = ({ addToCart }) => {
  const router = useRouter();
  const { slug } = router.query;
  const openCart = (e) => {
    const sidecart = document.querySelector(".sidecart");
    sidecart.classList.add("show");
  };

  return (
    <>
      <div className="container mt-10 mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <div className="card">
              <div className="row">
                <div className="col-lg-6">
                  <div className="images p-1">
                    <div className="text-center p-4">
                      <img id="main-image" src="/slides/chika.jpg" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="product p-4">
                    <div className="mt-4 mb-4">
                      {" "}
                      <span className="text-uppercase text-muted brand">
                        ANI MERCH
                      </span>
                      <h5 className="text-uppercase mt-2 mb-3">
                        Chika t-shirt (M/White)
                      </h5>
                      <div className="price d-flex flex-row align-items-center">
                        {" "}
                        <span className="act-price">₹699.00</span>
                        <div className="ms-2">
                          {" "}
                          <strike>
                            <small className="dis-price">₹6999.00</small>
                          </strike>{" "}
                          <span>90% OFF</span>{" "}
                        </div>
                      </div>
                    </div>
                    <p className="about">
                      Shop from a wide range of t-shirt from ANI MERCH. Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Ad
                      quibusdam, facere neque natus commodi minima enim voluptas
                      deserunt!
                    </p>
                    <div className="sizes mt-4">
                      <hr className="hr" />
                      <h6 className="text-uppercase my-3">Sizes</h6>
                      <div className="d-flex justify-content-between order-lg-3 order-2">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="size"
                            id="size1"
                            value="s"
                          />
                          <label className="form-check-label" htmlFor="small">
                            S
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="size"
                            id="size2"
                            defaultChecked
                            value="m"
                          />
                          <label className="form-check-label" htmlFor="medium">
                            M
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="size"
                            id="size2"
                            value="l"
                          />
                          <label className="form-check-label" htmlFor="large">
                            L
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="size"
                            id="size2"
                            value="xl"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="extra-large"
                          >
                            XL
                          </label>
                        </div>
                      </div>
                    </div>
                    <hr className="hr" />
                    <div className="price d-flex flex-row align-items-center">
                      {" "}
                      <span className="act-price">₹699.00</span>
                    </div>
                    <div className="cart mt-4 d-flex justify-content-md-between justify-content-center flex-wrap flex-lg-nowrap">
                      <button
                        className="btn  btn-dark text-uppercase me-3 my-2 px-4"
                        onClick={() => {
                          addToCart(slug, 1, "M", 699, "White", "Chika Tshirt"),
                            openCart(event);
                        }}
                      >
                        <i className="bi fs-4 bi-cart mx-2"></i>
                        Add to cart
                      </button>
                      <button className="btn btn-lg btn-dark text-uppercase me-3 my-2 px-4">
                        Buy Now
                      </button>
                    </div>
                    <Pincodecheck />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slug;
