import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hoodies = () => {
  return (
    <div className="container-fluid mt-10">
    <div className="container text-center p-lg-1 p-0">
      <h1 className="my-5">Popular Items</h1>
      <div className="row">
        <div className="col-lg-3 product-card p-3 col-6  mb-3 mb-lg-4">
          <Link href="products/tshirt"  >
            
            <div
              className="bg-image hover-overlay hover-zoom rounded"
              data-mdb-ripple-color="light"
            >
              <img
                src="/slides/hoodie.png"
                className="w-100"
                alt="red,green"
              
              />
              
            </div>

            <div className="product-info text-center text-lg-start">

              <p>
                <strong>Anime Hoodie</strong>
              </p>
              <p>Color: red,green,blue</p>
              <p>Size: m , L , XL</p>
              <p>6999₹</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 product-card p-3 col-6  mb-3 mb-lg-4">
          <Link href="products/tshirt"  >
            
            <div
              className="bg-image hover-overlay hover-zoom ripple rounded"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://rukminim1.flixcart.com/image/832/832/xif0q/sweatshirt/s/y/s/8-9-years-hoodie-sweatshirt-anime-printed-shree-chintransh-original-imagj3npdrhtsnrm.jpeg?q=70"
                className="w-100"
                alt="red,green,Blue Jeans Jacket"
              />
              
            </div>

            <div className="product-info text-center text-lg-start">

              <p className="">
                <strong>Anime Hoodie</strong>
              </p>
              <p className="">Color: red,green,blue</p>
              <p className="">Size: m , L , XL</p>
              <p className="">6999₹</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 product-card p-3 col-6  mb-3 mb-lg-4">
          <Link href="products/tshirt"  >
            
            <div
              className="bg-image hover-overlay hover-zoom ripple rounded"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://www.redwolf.in/image/cache/catalog/sweatshirts/dragon-ball-z-evolution-hoodie-india-700x700.jpg"
                className="w-100"
                alt="red,green,Blue Jeans Jacket"
              />
              
            </div>

            <div className="product-info text-center text-lg-start">

              <p>
                <strong>Anime Hoodie</strong>
              </p>
              <p>Color: red,green,blue</p>
              <p>Size: m , L , XL</p>
              <p>6999₹</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 product-card p-3 col-6  mb-3 mb-lg-4">
          <Link href="products/tshirt"  >
            
            <div
              className="bg-image hover-overlay hover-zoom ripple rounded"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://m.media-amazon.com/images/I/71BuAIN023L._UX569_.jpg"
                className="w-100"
                alt="red,green,Blue Jeans Jacket"
                
              />
              
            </div>

            <div className="product-info text-center text-lg-start">

              <p>
                <strong>Anime Hoodie</strong>
              </p>
              <p>Color: red,green,blue</p>
              <p>Size: m , L , XL</p>
              <p>6999₹</p>
            </div>
          </Link>
          
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default Hoodies