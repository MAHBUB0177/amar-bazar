import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Common.css";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rating } from "react-simple-star-rating";
import StarIcon from "@mui/icons-material/Star";
import { handelincrement, productDetails } from "../components/common/commonfunction";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from "react-router";

export const Shop = () => {
  const [Products, setProducts] = useState(null);
  console.log(Products, "Products");
  const [show, setShow] = useState(false);
  const [prod, setProd] = useState(null);
  const [rating, setRating] = useState(0); // initial rating value
  const [items, setItems] = useState(false); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };
  //modal open
  const handleClose = () => setShow(false);
  const handleShow = (prod) => {
    setProd(prod);
    setShow(true);
  };

  useEffect(() => {
    const getProduct = async () => {
      await axios({
        url: `https://fakestoreapi.com/products`,
        method: "GET",
      })
        .then((response) => {
          console.log(response,'response')
          setProducts(response.data);
        })
        .catch((error) => {
          console.log("CategoryProduct", error);
        });
    };
    getProduct();
  }, []);


  const navigate=useNavigate()
  return (
    <div className="bg-white mt-[20px]">
      <div className="container">
        <div className="mt-4 flex items-center justify-between">
          <span className="border-b w-1/5 lg:w-2/5"></span>
          <p className="text-2xl font-medium  text-center text-gray-500 uppercase ">
            Discount Product
          </p>
          <span className="border-b w-1/5 lg:w-2/5"></span>
        </div>
      </div>

      {/* //shoping card */}
      <section
        id="Projects"
        className="w-fit mt-[20px] mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-14  mb-5"
      >
        {Products?.map((item, i) => (
          <div className="w-[300px]  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl p-2">
            <div class="  flex justify-between " >
              <p className="text-[#E74040] h-6 w-6 cursor-pointer" onClick={() => {productDetails(item) ;navigate("/productDetails")}}> <RemoveRedEyeIcon></RemoveRedEyeIcon></p>

              <div className="bg-gray-300  p-2 text-[#E74040] rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                  class="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              </div>
           </div>

            <img
              src={item?.image}
              alt="Product"
              className="h-[150px] w-[100%] object-fill rounded-t-xl"
              onClick={() => handleShow(item)}
            />
               <ToastContainer />
            <div className="px-4 py-3 w-72">
              <div className="h-8">
                <h6 className="mt-4 text-gray-800 text-sm font-bold cursor-pointer">
                  {`${item?.title.slice(0, 50)}...`}
                </h6>
              </div>

              <div className="flex space-x-2 items-center mt-2">
                <StarIcon className="text-orange-500" fill="currentColor" />
                <StarIcon className="text-orange-500" fill="currentColor" />
                <StarIcon className="text-orange-500" fill="currentColor" />
                <StarIcon className="text-orange-500" fill="currentColor" />
                <StarIcon className="text-orange-500" fill="none" />
                <span className="text-gray-600 ml-3">20 Reviews</span>
              </div>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  {item?.price}
                </p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2 font-medium">$199</p>
                </del>
                <div className="ml-auto" onClick={() => handelincrement(item)}>
                  <button className="bg-orange-400 rounded-md p-2 font-semibold text-white">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

    

      {/* //open card details modal */}
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton className="text-black"></Modal.Header>
          <div class="flex-col md:flex-row justify-between  flex gap-4 items-start mx-4 py-12">
            <div class="mx-auto">
              <div>
                <div class="flex bg-white rounded-lg shadow dark:bg-gray-800">
                  <div class="relative flex-none w-24 md:w-48">
                    <img
                      src={prod?.image}
                      alt="shopping image"
                      class="absolute inset-0 object-fill w-full h-full rounded-lg"
                    />
                  </div>
                  <form class="flex-auto p-6">
                    <div class="flex flex-wrap">
                      <h1 class="flex-auto text-xl font-semibold dark:text-gray-50">
                        {prod?.category?.substring(0, 40)}
                      </h1>
                      <div class="text-xl font-semibold text-gray-500 dark:text-gray-300">
                        ${prod?.price}
                      </div>
                      <div>
                        <p style={{ paddingRight: "10px", fontSize: "12px" }}>
                          <span style={{ color: "goldenrod" }}>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                          </span>
                        </p>
                      </div>
                      <div class="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                        <Button
                          variant="contained"
                          style={{
                            background: "##91b39a",
                            borderRadius: "50px",
                          }}
                        >
                          in stock
                        </Button>
                      </div>
                    </div>
                    <div class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
                      <div class="flex space-x-2">
                        <label class="text-center">
                          <input
                            type="radio"
                            class="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-lg dark:bg-gray-600"
                            name="size"
                            value="xs"
                          />
                          XS
                        </label>
                        <label class="text-center">
                          <input
                            type="radio"
                            class="flex items-center justify-center w-6 h-6"
                            name="size"
                            value="s"
                          />
                          S
                        </label>
                        <label class="text-center">
                          <input
                            type="radio"
                            class="flex items-center justify-center w-6 h-6"
                            name="size"
                            value="m"
                          />
                          M
                        </label>
                        <label class="text-center">
                          <input
                            type="radio"
                            class="flex items-center justify-center w-6 h-6"
                            name="size"
                            value="l"
                          />
                          L
                        </label>
                        <label class="text-center">
                          <input
                            type="radio"
                            class="flex items-center justify-center w-6 h-6"
                            name="size"
                            value="xl"
                          />
                          XL
                        </label>
                      </div>
                      <a
                        href="#"
                        class="hidden ml-auto text-sm text-gray-500 underline md:block dark:text-gray-300"
                      >
                        Size Guide
                      </a>
                    </div>
                    <div class="flex mb-4 text-sm font-medium">
                      <button
                        onClick={() => handelincrement(prod)}
                        type="button"
                        class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        ADD TO CART
                      </button>
                    </div>
                    <p class="text-sm text-gray-500 dark:text-gray-300">
                      Free shipping on all continental US orders.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
