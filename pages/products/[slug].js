import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
const Slug = () => {
  const router = useRouter()
  const { slug } = router.query
  const [pincodeAvailable, setPincodeAvailable] = useState(null)
  const checkAvailabiltyInputRef = useRef()

  const checkAvailabilty = async () => {
    let res = await fetch('http://localhost:8001/')
    if (res.ok) {
      let pinarray = await res.json()
      const isthere = pinarray.includes(parseInt(checkAvailabiltyInputRef.current.value))
      // isthere?showMessageRef.current.innerText = "Yes its available":showMessageRef.current.innerText = "No its not available"
      setPincodeAvailable(isthere)
    }
  }
  return <>
    <div className="container mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="row">
              <div className="col-md-6">
                <div className="images p-3">
                  <div className="bg-image p-4">
                    <img id="main-image" src="/slides/chika.jpg" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product p-4">
                  <div className="mt-4 mb-4"> <span className="text-uppercase text-muted brand">ANI MERCH</span>
                    <h5 className="text-uppercase mt-2 mb-3">Chika t-shirt</h5>
                    <div className="price d-flex flex-row align-items-center"> <span className="act-price">₹699.00</span>
                      <div className="ms-2"> <strike><small className="dis-price">₹6999.00</small></strike>  <span>90% OFF</span> </div>
                    </div>
                  </div>
                  <p className="about">Shop from a wide range of t-shirt from ANI MERCH.</p>
                  <div className="sizes mt-4">
                    <h6 className="text-uppercase my-3">Sizes</h6>
                    <div className="d-flex justify-content-between order-lg-3 order-2">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="size" id="size1" value="s" />
                        <label className="form-check-label" htmlFor="small">
                          S
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="size" id="size2" defaultChecked value="m" />
                        <label className="form-check-label" htmlFor="medium">
                          M
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="size" id="size2" value="l" />
                        <label className="form-check-label" htmlFor="large">
                          L
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="size" id="size2" value="xl" />
                        <label className="form-check-label" htmlFor="extra-large">
                          XL
                        </label>
                      </div>
                    </div>
                  </div>
                  <hr className="hr" />
                  <div className="price d-flex flex-row align-items-center"> <span className="act-price">₹699.00</span></div>
                  <div className="cart mt-4 d-flex justify-content-md-between justify-content-center flex-wrap flex-lg-nowrap">
                    <button className="btn  btn-dark text-uppercase me-3 my-2 px-4">
                      <i className="bi fs-3 bi-cart mx-2"></i>
                      Add to cart
                    </button>
                    <button className="btn btn-lg btn-dark text-uppercase me-3 my-2 px-4">
                      Buy Now
                    </button>

                  </div>
                  <div className="row g-3 mt-4 align-items-center">

                    <div className="col-auto">
                      <input type="text" id="pincode" ref={checkAvailabiltyInputRef} className="form-control" aria-describedby="passwordHelpInline" placeholder='Check your pincode' />
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-dark" onClick={checkAvailabilty} >Check Availabilty</button>
                    </div>
                    
                    {!pincodeAvailable && pincodeAvailable!=null && <div className='text-danger'>This Pincode Is not available</div>}
                    {pincodeAvailable && pincodeAvailable!=null && <div className='text-success'>This Pincode Is available</div>}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Slug