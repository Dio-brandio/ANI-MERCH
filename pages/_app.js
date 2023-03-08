import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import Script from "next/script";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')))
      }
    } catch (error) {
      console.log(error);
      localStorage.clear()
    }

  }, [])


  const saveCart = (mycart) => {
    localStorage.setItem('cart', JSON.stringify(mycart))
    let sbt = 0;
    let keys = Object.keys(mycart)
    for (let i = 0; i < keys.length; i++) {
      sbt += mycart[keys[i]]['price'] * mycart[keys[i]]['qty']
    }
    setSubTotal(sbt)
    // Swal.fire('Your Data Has Been Saved!', '', 'success')
  }

  const addToCart = (pcode, qty, size, price, varient, pname) => {
    let newCart = cart;
    if (pcode in cart) {
      newCart[pcode].qty = cart[pcode].qty + qty
    }
    else {
      newCart[pcode] = { qty: 1, size, price, varient, pname }
    }
    setCart(newCart)
    saveCart(newCart)
    // Swal.fire('Added To cart!', '', 'success')

  }

  const removeFromCart = (pcode, qty, size, price, varient, pname) => {
    let newCart = cart;
    if (pcode in cart) {
      newCart[pcode].qty = cart[pcode].qty - qty
    }
    if (newCart[pcode].qty <= 0) {
      delete newCart[pcode]
    }
    setCart(newCart)
    saveCart(newCart)
  }
  const clearCart = () => {
    setCart({})
    saveCart({})
  }

  return (
    <>
      <Head>

        <meta name="description" content="Welcome To ANI MERCH website for the weebs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" />

        <link rel="icon" href="/dio-logo.png" />
      </Head>
      <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
      <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
      <Footer />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"></script>
      <script src="../js/customNavbar.js"></script>
    </>
  );
}
