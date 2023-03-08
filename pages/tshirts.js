import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Tshirts = ({count,allproducts}) => {

  return (
    <div className="container-fluid mt-10">
    <div className="container text-center p-lg-1 p-0">
      <h1 className="my-5">New Arrived</h1>
      <div className="row">
        {allproducts && allproducts.map((product)=>{
          return <div className="col-lg-3 product-card p-3 col-6  mb-3 mb-lg-4" key={product.slug}>
          <Link href={"products/"+product.slug}>
            <div className="bg-image hover-overlay hover-zoom ripple rounded">
              <img
                src={product.imgsrc}
                className="w-100"
                alt={product.title}
              />
            </div>
            <div className="product-info text-center text-lg-start mt-3">
              <p>
                <strong>{product.title.toUpperCase()}</strong>
              </p>
              <p>Color: {product.color.map((colr,i,arr)=> colr+`${i==arr.length-1?'':','}`)}</p>
              <p>Size: {product.size.map((onesize,i,arr)=> onesize+`${i==arr.length-1?'':','}`)}</p>
              <p>₹{product.price.toFixed(2)}</p>
            </div>
          </Link>
        </div>
        })}
      </div>
    </div>
  </div>
  )
}

export async function getServerSideProps(context) {
    const parseproducts = await fetch("http://localhost:3000/api/getProducts?catagory=tshirts")
    const allproducts = await parseproducts.json()
    // console.log(allproducts);
    return {props:{
      count:allproducts.length,
     allproducts:JSON.parse(JSON.stringify(allproducts))} 
    }
}
export default Tshirts
