import React, { useState } from "react";
import "./Header.css";
import { Table, Form } from "react-bootstrap";
import { IconButton } from "@material-ui/core";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, Navigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  MenuItem,
  ClickAwayListener,
  Button,
  Drawer,
  Box,
  Badge,
  Paper,
  InputBase,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ClearIcon from "@mui/icons-material/Clear";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  decrementCounterALL,
  userlogin,
} from "../Service/Action/Action";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { handelDecrement, handelincrement, removeItem } from "./common/commonfunction";

export const Header = () => {
  const dispatch = useDispatch();
  const favCount = useSelector((state) => state.count,)
  const product = useSelector((state) => state.product);
  const user = useSelector(state => state.userAuth)
  console.log(user,'userauthdsta7890-')


  const [isDrowerOpen, setisDrowerOpen] = useState(false);
  const [over, setOver] = useState(false);
  const [text, setText] = useState("");


  console.log(user, 'userAuthheadr')
  let total = 0;
  for (let i = 0; i < product.length; i++) {
    let prod = product[i];
    total += prod.price * prod.qnty;
  }




  //logout function
  const _handelLogout = () => {
    console.log('first')
    dispatch(userlogin({}))
    dispatch(decrementCounterALL());
    Navigate(`/`);
  };


  function submitText(e) {
    var frm = document.getElementsByName("textform")[0];
    frm.submit();
    frm.reset();
    e.preventDefault();
  }


  //toggole function
  var togglefunction = () => {
    document
      .getElementsByClassName("navbar-links")[0]
      .classList.toggle("active");
  };


  return (
    <div className="top-0 w-[100%] fixed z-50 shadow-lg">
      <ToastContainer />

      <div className="navbar bg-white flex justify-between ">

        <div>
          {/* //logo */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="brand-title color-[#FF6F00] md:pl-[20px]">
              <span style={{ marginRight: "5px", marginBottom: "5px" }}>
                <ShoppingBagIcon />
              </span>
              Amar Bazar
            </div>
          </Link>
        </div>

        <div>
          {/* //search bar */}
          <Paper className="opening shadow-md border-1  border-orange-300">
            <Form name="textform" >
              <InputBase className="bg-white  w-[250px] rounded-md h-[30px] p-2"
                type="text"
                placeholder="search.."
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
              <IconButton onClick={submitText}>
                <SearchIcon />
              </IconButton>
            </Form>
          </Paper>
        </div>

        <a className="toggle-button" onClick={togglefunction}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>


        <div className="navbar-links ">
          <ul className="divHeader">
            <Link to="/item" style={{ textDecoration: "none" }}>
              <li className="active   md:pt-2 " onClick={togglefunction}>
                <a className="text-[20px] text-purple-800 font-medium hover:bg-orange-300 hover:rounded-md hover:text-white">
                  Category
                </a>
              </li>
            </Link>

            <Link to="/about" style={{ textDecoration: "none" }}>
              <li className="md:pt-2" onClick={togglefunction}>
                <a className="text-[20px] text-purple-800 font-medium  hover:bg-orange-300 hover:rounded-md hover:text-white">
                  About
                </a>
              </li>
            </Link>

            <Link to="/contact" style={{ textDecoration: "none" }}>
              <li className="md:pt-2" onClick={togglefunction}>
                <a className="text-[20px] text-purple-800 font-medium hover:bg-orange-300 hover:rounded-md hover:text-white">
                  Contact
                </a>
              </li>
            </Link>

            <Link to="#" style={{ textDecoration: "none" }}>
              <li className="md:pt-2" onClick={togglefunction}>
                <a className="text-[20px] text-purple-800 font-semibold pt-2 hover:bg-orange-300 hover:rounded-md hover:text-white">
                  <span>
                    Page
                    <KeyboardArrowDownIcon />
                  </span>
                </a>
              </li>
            </Link>
            <li>
              <a>
                {" "}
                <strong>
                  <span>
                    <IconButton className="color-[#FF6F00] h-[50px] w-[50px] hover:bg-orange-300 hover:rounded-md hover:text-white" onClick={togglefunction}>
                      <Badge color="secondary" badgeContent={product.length} >
                        <FavoriteIcon />
                      </Badge>
                    </IconButton>
                  </span>
                </strong>
              </a>
            </li>

            <li>
              <a>
                {" "}
                <strong>
                  <span>
                    <IconButton className="color-[#FF6F00] h-[50px] w-[50px] hover:bg-orange-300 hover:rounded-md hover:text-white"
                      onClick={() => { setisDrowerOpen(true); togglefunction() }}
                    >
                      <Badge badgeContent={product.length} color="secondary">
                        <ShoppingCartIcon />
                      </Badge>
                    </IconButton>
                  </span>
                </strong>
              </a>
            </li>

            <li>
              <a>
                {" "}
               

                <div class="group relative cursor-pointer md:w-[100px]">
                  <div class="flex items-center justify-center  bg-white ">
                    <IconButton className="color-[#FF6F00] h-[50px] w-[50px] hover:bg-orange-300 hover:rounded-md hover:text-white menu-hover  "
                    >
                      <AccountBoxIcon />
                    </IconButton>
                  </div>

                  <div class=" invisible absolute z-50 md:w-[100px] flex-col bg-gray-50 py-1  text-gray-800 shadow-xl group-hover:visible rounded-sm">

                    {
                      user ? <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
                      <MenuItem>
                        <span>
                          <AccountBoxIcon />
                        </span>{' '}
                        Profile
                      </MenuItem>
                    </Link> : <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
                      <MenuItem>
                        <span>
                          <AccountBoxIcon />
                        </span>{' '}
                        Login
                      </MenuItem>
                    </Link>
                    }

                   
                    

                    <MenuItem onClick={() => {_handelLogout() }}>
                      <span>
                        <LogoutIcon />
                      </span>
                      Logout
                    </MenuItem>
                  </div>
                </div>

              </a>
            </li>
          </ul>
        </div>
      </div>


    



      {/* //drawer open */}
      <Drawer
        anchor="right"
        open={isDrowerOpen}
        onClose={() => setisDrowerOpen(false)}
      >
        <Box p={2} width="350px" textAlign="center" role="presentation">
          {product.length <= 0 ? (
            <div className="card-details">
              <p style={{ textAlign: "left" }}>
                {" "}
                Your Cart
                <button
                  type="button"
                  onClick={() => setisDrowerOpen(false)}
                  style={{ border: "none", marginLeft: "200px" }}
                >
                  <ClearIcon />
                </button>
              </p>

              <hr />
              <h2 style={{ marginTop: "50%", color: "red" }}>
                {" "}
                Your Crad Is Empty <LocalFireDepartmentIcon />
              </h2>
            </div>
          ) : (
            <div>
              <p style={{ textAlign: "left", color: "tomato" }}>
                {" "}
                Your Cart{" "}
                <button
                  type="button"
                  onClick={() => setisDrowerOpen(false)}
                  style={{ border: "none", marginLeft: "200px" }}
                >
                  <ClearIcon />
                </button>
              </p>

              <hr />
              <div className="card_details">
                <Table>
                  <thead>
                    <tr>
                      <th>image</th>
                      <th>name</th>
                      <th>Quantity</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {product?.map((item) => (
                      <tr>
                        <td>
                          <img
                            src={item?.image}
                            alt=""
                            style={{
                              height: "50px",
                              width: "50px",
                              clipPath: "circle()",
                            }}
                          ></img>
                        </td>
                        <td>
                          <b>{item?.category}</b>
                          <br />
                          <CurrencyRupeeIcon />
                          {item?.price * item?.qnty}{" "}
                        </td>
                        <td>
                          <div
                            className="input-group"
                            style={{ width: "100px", marginTop: "15px" }}
                          >
                            {/* <button type='button' className='input-group-text' style={{width:'15px'}} onClick={()=>handelDecrement(item)}>-</button> */}
                            <button
                              type="button"
                              className="input-group-text"
                              style={{ width: "15px" }}
                              onClick={
                                item?.qnty <= 1
                                  ? () => removeItem(item)
                                  : () => handelDecrement(item)
                              }
                            >
                              -
                            </button>
                            <div
                              className="form-control text-center"
                              style={{ width: "15px" }}
                            >
                              {item?.qnty}
                            </div>
                            <button
                              type="button"
                              className="input-group-text"
                              style={{ width: "15px" }}
                              onClick={() => handelincrement(item)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>
                          <IconButton>
                            <span
                              style={{ color: "red", paddingBottom: "12px" }}
                              onClick={() => removeItem(item)}
                            >
                              <DeleteIcon />
                            </span>
                          </IconButton>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              <hr></hr>
              <h4 style={{ textAlign: "left", color: "tomato" }}>
                Total:{total.toFixed(2)}TK
              </h4>

              <div style={{ display: "flex" }}>
                <div className="col-6">
                  <Link to="/orderPage" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      class="btn btn-outline-info"
                      style={{ width: "140px", marginTop: "20px" }}
                      onClick={() => setisDrowerOpen(false)}
                    >
                      View Cart
                    </Button>
                  </Link>
                </div>

                <Link to="/login">
                  <div className="col-6">
                    <Button
                      variant="contained"
                      color="info"
                      style={{ width: "160px", marginTop: "20px" }}
                      onClick={() => setisDrowerOpen(false)}
                    >
                      Checkout
                    </Button>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </Box>
      </Drawer>
    </div>
  );
};
