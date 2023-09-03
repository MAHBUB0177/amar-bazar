import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { domain, getheader } from '../env';
import Cookies from 'js-cookie'
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
// import Swal from 'sweetalert2'
import DeleteIcon from '@mui/icons-material/Delete';
import { Card } from 'react-bootstrap';
import { IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter } from '../Service/Action/Action'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TabTitle } from '../utils/FunctionTitle';
import { handelDecrement, handelincrement, removeItem } from '../components/common/commonfunction';
const OrderPage = () => {
  TabTitle('Amar Bazar | OrderPage')
  // total cout":
  const cartItem = useSelector(state => state.product)
  let total = 0;
  for (let i = 0; i < cartItem.length; i++) {
    let prod = cartItem[i]
    total = total + prod.price * prod.qnty
  }

  var tax = Number(total / 10);
  var shipingcost = Number(total / 2)



  return (
    <>
      <div class="bg-gray-100  py-8">
        <div class="container mx-auto px-4">
          {cartItem?.length > 0 && <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>}
          <div class="flex flex-col md:flex-row gap-4">
            <ToastContainer />
            {
              cartItem?.length > 0 && <div class="md:w-3/4">
                <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                  <table class="w-full">
                    <thead>
                      <tr className='hover:bg-slate-100'>
                        <th class="text-left font-semibold">Product</th>
                        <th class="text-left font-semibold">Price</th>
                        <th class="text-left font-semibold">Quantity</th>
                        <th class="text-left font-semibold">Total</th>
                      </tr>
                    </thead>
                    <tbody>

                      {
                        cartItem?.map((item, index) =>
                          <tr className='hover:bg-slate-100 hover:shadow-sm hover:rounded-lg'>
                            <td class="py-4">
                              <div class="flex ">
                                <img className="h-16 w-16 mr-4 " src={item?.image} alt="Product image" />
                                <span class="font-semibold">{item?.category.substring(0, 16)}</span>
                              </div>
                            </td>
                            <td class="py-4">{item?.price}</td>
                            <td class="py-4">
                              <div
                                className="input-group"
                                style={{ width: "100px", marginTop: "15px" }}
                              >
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
                            <td class="py-4">{item?.price * item?.qnty}</td>
                          </tr>)
                      }

                    </tbody>
                  </table>

<div className='text-start'>
<Link to="/" style={{ textDecoration: "none" }} >
                    <Button
                      variant="contained"
                      class="btn btn-outline-info"
                      style={{ width: "140px", marginTop: "20px" }}
                    >
                     <span > <ArrowBackIcon/></span> AddTo Cart
                    </Button>
                  </Link>
  </div>
                
                </div>
              </div>
            }
            {cartItem?.length > 0 && <div class="md:w-1/4">
              <div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-lg font-semibold mb-4">Summary</h2>
                <div class="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div class="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div class="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>${shipingcost.toFixed(2)}</span>
                </div>
                <hr class="my-2" />
                <div class="flex justify-between mb-2">
                  <span class="font-semibold">Total</span>
                  <span class="font-semibold">${total.toFixed(2)}</span>
                </div>
                <Link to='/checkout' >
                  <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full cursor-pointer">Checkout</button>
                </Link>
              </div>
            </div>}
          </div>


        </div>
      </div>
    </>
  );
};

export default OrderPage;