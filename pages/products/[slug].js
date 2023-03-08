import Pincodecheck from "@/components/Pincodecheck";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const Slug = ({ addToCart,count,oneProduct }) => {
const router = useRouter()
const { slug }= router.query
const [psize, setsize] = useState('L')
const [pcolor, setColor] = useState(oneProduct[0].color[0])
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
                  <div className="images">
                    <div className="text-center p-4">
                      <img id="main-image" src={oneProduct[0].imgsrc} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="product p-4">
                    <div className="mt-4 mb-4">
                      
                      <span className="text-uppercase text-muted brand">
                        ANI MERCH
                      </span>
                      <h5 className="text-uppercase mt-2 mb-3">
                      {oneProduct[0].title}
                      </h5>
                      <div className="price d-flex flex-row align-items-center">
                        
                        <span className="act-price">₹{oneProduct[0].price}</span>
                        <div className="ms-2">
                          
                          <strike>
                            <small className="dis-price">₹6999.00</small>
                          </strike>
                          <span>90% OFF</span>
                        </div>
                      </div>
                    </div>
                    <p className="about">
                    {oneProduct[0].desc}
                    </p>
                    <div className="sizes mt-4">
                      <hr className="hr" />
                      <h6 className="text-uppercase my-3">Sizes</h6>
                      <div className="d-flex justify-content-between order-lg-3 order-2">
                        {oneProduct[0].size.map((sizes)=>{
                          return <div className="form-check">
                          <input className="form-check-input" type="radio"
                            name="size"
                            id="size1"
                            defaultChecked={sizes=="L"?true:false}
                            value={sizes}
                            onChange={e=>setsize(e.target.value)} />
                          <label className="form-check-label" htmlFor="small">
                            {sizes}
                          </label>
                        </div>
                        })}

                     </div>
                    </div>
                    <div className="sizes mt-4">
                      <hr className="hr" />
                      <h6 className="text-uppercase my-3">Sizes</h6>
                      <div className="d-flex justify-content-between order-lg-3 order-2">
                        {oneProduct[0].color.map((color,i)=>{
                          return <div className="form-check">
                          <input className="form-check-input" type="radio"
                            name="color"
                            id="color"
                            defaultChecked={i==0?true:false}
                            value={color}
                            onChange={e=>setColor(e.target.value)}/>
                          <label className="form-check-label" htmlFor="small">
                            {color}
                          </label>
                        </div>
                        })}
                     </div>
                    </div>
                    <hr className="hr" />
                    <div className="price d-flex flex-row align-items-center">
                      
                      <span className="act-price">₹{oneProduct[0].price}</span>
                    </div>
                    <div className="cart mt-4 d-flex justify-content-md-between justify-content-center flex-wrap flex-lg-nowrap">
                      <button
                        className="btn  btn-dark text-uppercase me-3 my-2 px-4"
                        onClick={() => {
                          addToCart(slug, 1, psize, oneProduct[0].price,pcolor,  oneProduct[0].title),
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
export async function getServerSideProps(context) {
  console.log(context.query.slug);
  const parseproducts = await fetch(`http://localhost:3000/api/getOneProduct?slug=${context.query.slug}`)
  const allproducts = await parseproducts.json()
  return {props:{
    oneProduct:allproducts.oneProduct
  } 
  }
}


export default Slug;
