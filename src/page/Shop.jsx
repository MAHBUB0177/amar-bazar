import { Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Common.css";
import { Button, CardActions, IconButton } from "@material-ui/core";
import { incrementCounter, incrementFav } from "../Service/Action/Action";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Rating } from "react-simple-star-rating";
import StarIcon from "@mui/icons-material/Star";
import { notifySuccess } from "../components/common/notifySuccess";

export const Shop = () => {
  const [Products, setProducts] = useState(null);
  console.log(Products,'Products888888888')
  const [show, setShow] = useState(false);
  const [prod, setProd] = useState(null);
  const [rating, setRating] = useState(0); // initial rating value
  const [items, setItems] = useState(false); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };

  // const domain = "https://availtrade.com/public/images/";

  const handleClose = () => setShow(false);
  const handleModal = () => setShow(true);
  const handleShow = (prod) => {
    setProd(prod);
    handleModal();
  };

  //redux get product
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  //add product
  const addToCart = (product) => {
    dispatch(incrementCounter(product));
    notifySuccess();
  };

  const addFav = () => {
    dispatch(incrementFav());
  };

  localStorage.setItem("cartdata", JSON.stringify(product));

  useEffect(() => {
    const getAutomobile = async () => {
      await axios({
        url: `https://fakestoreapi.com/products`,
        method: "GET",
      })
        .then((response) => {
          console.log(response.data, "categpory data");
          setProducts(response.data);
        })
        .catch((error) => {
          console.log("CategoryProduct", error);
        });
    };
    getAutomobile();
  }, []);

  return (
    <div className="bg-white mt-[20px]">
      <div className="container">
        <div className="mt-4 flex items-center justify-between">
          <span className="border-b w-1/5 lg:w-2/5"></span>
          <a
            href="#"
            className="text-2xl font-medium  text-center text-gray-500 uppercase "
          >
            Discount Product
          </a>
          <span className="border-b w-1/5 lg:w-2/5"></span>
        </div>
      </div>

      <section
        id="Projects"
        className="w-fit mt-[20px] mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-14  mb-5"
      >
        {Products?.map((item, i) => (
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src={item?.image}
                alt="Product"
                className="h-80 w-72 object-fill rounded-t-xl"
                onClick={() => handleShow(item)}
                
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  Brand
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                {item?.category}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    {item?.price}
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      $199
                    </p>
                  </del>
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>

      {/* <div>
        {Products?.map((item, i) => (
          <div className="row" style={{ display: "inline-block" }} key={i}>
            <div className="col-md-3">
              <Card
                className="shadow inner"
                style={{
                  width: "18rem",
                  height: "280px",
                  marginLeft: "15px",
                  marginBottom: "7px",
                }}
              >
                <Card.Body>
                  <div className="">
                    <Card.Img
                      variant="top"
                      src={item?.image}
                      style={{ height: "120px", pointer: "cursor" }}
                      alt=""
                      onClick={() => handleShow(item)}
                    />
                    <ToastContainer />
                  </div>
                  <Card.Text>
                    <h6 style={{ fontSize: "15px" }}>
                      {" "}
                      {item?.category?.substring(0, 20)}
                    </h6>
                    <p style={{ fontSize: "14px" }}>
                      <span
                        style={{
                          color: "red",
                          fontSize: "15px",
                          marginRight: "40px",
                        }}
                      >
                        <CurrencyRupeeIcon />
                        {item?.price}Tk
                      </span>
                      <span
                        style={{ color: "#d8c8db", marginLeft: "40px" }}
                        onClick={() => addFav()}
                      >
                        <FavoriteIcon />
                      </span>{" "}
                    </p>
                    <p style={{fontSize:'10px'}}><span style={{color:'goldenrod'}}><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></span></p>

                    <CardActions style={{ justifyContent: "center" }}>
                      <Button
                        variant="contained"
                        color="secondary"
                        style={{ marginBottom: "10px" }}
                        onClick={() => addToCart(item)}
                      >
                        AddToCart
                      </Button>
                      <Card  className='addCard'  id='cardid'>
                        <p onClick={()=>setItems(!items)}><span><svg style={{color:'tomato',height:'25px',width:'40px'}} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path></svg></span></p>
                      </Card>

                      { items &&
                          <div className='input-group' style={{width:'100px'}} id='divShow' >
                          <button type='button' className='input-group-text' style={{width:'15px'}} onClick={()=>''}>-</button>
                          <div className='form-control text-center' style={{width:'15px'}}>{prod?.start_quantity}</div>
                          <button type='button' className='input-group-text' style={{width:'15px'}} onClick={()=>addToCart(prod)}>+</button>
                        </div>
                      }
                    </CardActions>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div> */}

      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>

          <div className="row showmodal">
            <div className="col-md-5">
              <img
                className="showimg"
                src={prod?.image}
                style={{
                  height: "250px",
                  width: "240px",
                  paddingLeft: "10px",
                  marginTop: "50px",
                  marginBottom: "30px",
                }}
              ></img>
            </div>
            <div
              className="col-md-7"
              style={{ marginTop: "15px", paddingLeft: "60px" }}
            >
              <h4 style={{ color: "green" }}>
                {prod?.category.substring(0, 14)}
              </h4>
              <Button
                variant="contained"
                style={{ background: "##91b39a", borderRadius: "50px" }}
              >
                in stock
              </Button>
              <br />
              <span>
                <p style={{ paddingRight: "10px", fontSize: "25px" }}>
                  Rating:{prod?.rating?.rate}
                  <span style={{ color: "goldenrod" }}>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>
                </p>
                <p style={{ paddingRight: "10px" }}>
                  {prod?.description?.substring(0, 150)}
                </p>
              </span>

              <p style={{ fontSize: "25px", color: "tomato" }}>
                <b>
                  <CurrencyRupeeIcon />
                  {prod?.price}TK
                </b>
              </p>

              {/* <div style={{display:'flex',flexWrap:'wrap',flex:'1',position:'relative'}}>
            <div className='input-group' style={{width:'100px'}}>
            <button type='button' className='input-group-text' style={{width:'15px'}} onClick={()=>''}>-</button>
            <div className='form-control text-center' style={{width:'15px'}}>{prod?.start_quantity}</div>
            <button type='button' className='input-group-text' style={{width:'15px'}} onClick={()=>addToCart(prod)}>+</button>
           </div> */}

              <Button
                variant="contained"
                style={{
                  marginLeft: "4px",
                  background: "#1a913a",
                  width: "150px",
                }}
                onClick={() => addToCart(prod)}
              >
                Add To Cart
              </Button>
              {/* </div> */}
              <p style={{ marginTop: "4px", fontSize: "20px" }}>
                Count:{prod?.rating?.count}
              </p>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
