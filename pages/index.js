import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to ANI MERCH</title>
      </Head>
      <div className="">
        <img src="/banner-1.png" className="w-100 " />
      </div>
      <div className="container-fluid my-3">
        <div className="container text-center p-sm-0">
          <h1 className="my-5">New Arrived</h1>
          <div className="row">
            <div className="col-lg-3 product-card p-3 col-6 mb-3 mb-lg-4">
              <Link href="products/tshirt"  >

                <div
                  className="bg-image hover-overlay hover-zoom ripple rounded"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="./slides/chika.jpg"
                    className="w-100"
                    alt="Blue Jeans Jacket"
                  />

                </div>

                <div className="product-info text-center text-lg-start">

                  <p>
                    <strong>Blue denim shirt</strong>
                  </p>
                  <p>Color: blue</p>
                  <p>Size: M</p>
                  <p>3000₹</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 product-card p-3 col-6 mb-3 mb-lg-4">
              <Link href="products/tshirt"  >

                <div
                  className="bg-image hover-overlay hover-zoom ripple rounded"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="./slides/ds.jpg"
                    className="w-100"
                    alt="Blue Jeans Jacket"
                  />

                </div>

                <div className="product-info text-center text-lg-start">

                  <p className="">
                    <strong>Blue denim shirt</strong>
                  </p>
                  <p className="">Color: blue</p>
                  <p className="">Size: M</p>
                  <p className="">3000₹</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 product-card p-3 col-6 mb-3 mb-lg-4">
              <Link href="products/tshirt"  >

                <div
                  className="bg-image hover-overlay hover-zoom ripple rounded"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="./slides/mha.png"
                    className="w-100"
                    alt="Blue Jeans Jacket"
                  />

                </div>

                <div className="product-info text-center text-lg-start">

                  <p>
                    <strong>Blue denim shirt</strong>
                  </p>
                  <p>Color: blue</p>
                  <p>Size: M</p>
                  <p>3000₹</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 product-card p-3 col-6  mb-3 mb-lg-4">
              <Link href="products/tshirt"  >

                <div
                  className="bg-image hover-overlay hover-zoom ripple rounded"
                  data-mdb-ripple-color="light">
                  <img
                    src="/slides/tshirt.webp"
                    className="w-100"
                    alt="Blue Jeans Jacket"/>
                </div>

                <div className="product-info text-center text-lg-start">
                  <p>
                    <strong>Anime Tshirt</strong>
                  </p>
                  <p>Color: blue</p>
                  <p>Size: m , L , XL</p>
                  <p>6999₹</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
