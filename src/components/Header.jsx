import React, { useState } from "react";
import "./Header.css";
import { Container, Nav, Table, Form } from "react-bootstrap";
import Chip from "@mui/material/Chip";
import { IconButton } from "@material-ui/core";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, Navigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Card,
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
import Menu from "@mui/material/Menu";
import {
  decrementCounter,
  decrementCounterALL,
  incrementCounter,
  REMOVE,
  userlogin,
} from "../Service/Action/Action";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handelSignOut } from "../utils/LoginFirebaseManager";
import { notifyError } from "./common/notifySuccess";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export const Header = () => {
  const dispatch = useDispatch();
  const favCount = useSelector((state) => state.count,)
  const product = useSelector((state) => state.product);
  const userAuth = useSelector((state) => state.userAuth);

  const [isDrowerOpen, setisDrowerOpen] = useState(false);
  const [over, setOver] = useState(false);
  const [text, setText] = useState("");

  console.log(userAuth, 'userAuthheadr')
  let total = 0;
  for (let i = 0; i < product.length; i++) {
    let prod = product[i];
    total += prod.price * prod.qnty;
  }

  const handelDecrement = (item) => {
    dispatch(REMOVE(item));
    // console.log('data test',item_id)
    // let index = product.findIndex(obj => obj.id === item_id)

    // if (index >= 0) {
    //   product[index].quantity = (product[index].quantity | 0) - 1
    // }
  };


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
  //add cart
  const handelincrement = (data) => {
    dispatch(incrementCounter(data));
  };
  //remove cart 
  const removeItem = (product) => {
    dispatch(decrementCounter(product));
    notifyError('Item Remove From Cart');
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
                      onClick={() => {setisDrowerOpen(true);togglefunction()}}
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
                <strong>
                  <span>
                    <IconButton className="color-[#FF6F00] h-[50px] w-[50px] hover:bg-orange-300 hover:rounded-md hover:text-white"
                      onClick={() => {setOver(true);togglefunction()}}
                    >
                      <AccountBoxIcon />
                    </IconButton>
                  </span>
                </strong>
              </a>
            </li>
          </ul>
        </div>






      </div>
      {/* //profile open */}
      {over && (
        <ClickAwayListener onClickAway={() => setOver(false)}>
          <div className="flex justify-end mt-[10px]">
            <div className="w-[300px] h-[100px] bg-white ">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <MenuItem onClick={() => setOver(false)}>
                  <span>
                    <AccountBoxIcon />
                  </span>
                  Login
                </MenuItem>
              </Link>
              <MenuItem onClick={() => { setOver(false); _handelLogout() }}>
                <span>
                  <LogoutIcon />
                </span>
                Logout
              </MenuItem>
            </div>
          </div>
        </ClickAwayListener>
      )}
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

                <Link to="/checkout">
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
