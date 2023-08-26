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

import { Container, Nav, Table } from 'react-bootstrap';
import { TabTitle } from '../utils/FunctionTitle';
import { notifyError } from '../components/common/notifySuccess';
const OrderPage = () => {
  TabTitle('Amar Bazar | OrderPage')
  const domain = "https://availtrade.com/public/images/";
  const dispatch = useDispatch()


  // total cout":
  const cartItem = useSelector(state => state.product)
  let total = 0;
  for (let i = 0; i < cartItem.length; i++) {
    let prod = cartItem[i]
    total = total + prod.price * prod.qnty
  }
  // for (let i=0;i<cartItem.length;i++){
  //   let prod=cartItem[i];
  //   total=total+Number(prod.product_price);
  // }
  var tax = Number(total / 10);

  //remove cart:
  const removeItem = (product) => {
    dispatch(decrementCounter(product))
    notifyError()

  }

  return (
    // <div className='  container col-md-12' style={{ marginTop: '30px', marginLeft: '20px', marginRight: '20px' }} >
    //   <div class="col-12 col-lg-8 text-center">
    //     {cartItem?.length > 0 &&
    //       <h2 class="mt-3" style={{ marginLeft: '50px' }}>Shopping <font class="text-primary">Cart</font></h2>
    //     }
    //   </div>


    //   <div className="row d-flex" >
    //     <div className='col-md-7'>
    //       <ToastContainer />
    //       {cartItem?.length > 0 &&
    //         <div className='' >
    //           <Table>
    //             <thead>
    //               <tr>
    //                 <th>product</th>
    //                 <th>name</th>
    //                 <th>Quantity</th>
    //                 <th>total price</th>
    //                 <th>Action</th>
    //               </tr>
    //             </thead>

    //             <tbody>

    //               {
    //                 cartItem?.map(item =>
    //                   <tr>
    //                     <td><img src={item?.image} alt="" style={{ height: '80px', width: '70px', clipPath: 'circle()' }}></img></td>
    //                     <td>{item?.category.substring(0, 6)}</td>
    //                     <td>{item?.qnty}</td>
    //                     <td>{item?.price * item?.qnty}TK</td>
    //                     <td><IconButton ><span style={{ color: 'red' }} onClick={() => removeItem(item)}><DeleteIcon /></span></IconButton></td>

    //                   </tr>
    //                 )
    //               }

    //             </tbody>
    //           </Table>

    //           <div style={{ display: 'flex' }}>
    //             <div className='col-6 ' >
    //               <Link to='/' style={{ textDecoration: 'none' }}>
    //                 <Button variant="contained" color='secondary' style={{ width: '160px', }} ><ArrowBackIcon />Add Cart</Button>
    //               </Link>
    //             </div>

    //             <Link to='/checkout' style={{ textDecoration: 'none' }}>
    //               <div className='col-6 mb-5'>
    //                 <Button variant="contained" color="info" style={{ width: '160px', marginLeft: '5px' }} >Checkout<ArrowForwardIcon /></Button>

    //               </div>
    //             </Link>

    //           </div>
    //         </div>
    //       }
    //     </div>

    //     {
    //       cartItem?.length <= 0 && <div style={{ height: '200px' }}>
    //         <h2 style={{ textAlign: 'center', color: 'red', marginTop: '40px' }}> Yor Cart Is Empty !!!!!</h2>

    //       </div>

    //     }


    //     {cartItem?.length > 0 &&
    //       <div className='col-md-5 ' style={{ background: '#dce0dd', height: '300px', marginTop: '40px', marginBottom: '5px' }}>

    //         <h4 style={{ marginLeft: '0px', marginTop: '10px', color: 'tomato' }}>Order Summary</h4>
    //         <hr />
    //         <h6 style={{ marginTop: '30px', marginRight: '390px' }}>Subtotal:<span style={{ marginLeft: '200px' }}>{total.toFixed(2)}Tk</span></h6>
    //         <h6 style={{ marginRight: '390px' }}>Charge:<span style={{ marginLeft: '200px' }}>{total.toFixed(2)}Tk</span></h6>
    //         <h6 style={{ marginRight: '390px' }}>Discount:<span style={{ marginLeft: '200px' }}>0.00Tk</span></h6>
    //         <br />
    //         <hr />
    //         <h6 style={{ marginRight: '390px', color: 'tomato' }}>Total:<span style={{ marginLeft: '220px', color: 'tomato' }}>{total.toFixed(2)}Tk</span></h6>

    //       </div>
    //     }

    //   </div>
    // </div>

    <>
    
    <div class="bg-gray-100  py-8">
    <div class="container mx-auto px-4">
    {cartItem?.length > 0 &&  <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>}
        <div class="flex flex-col md:flex-row gap-4">
        <ToastContainer />
           


            {
              cartItem?.length > 0 &&  <div class="md:w-3/4">
              <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                  <table class="w-full">
                      <thead>
                          <tr>
                              <th class="text-left font-semibold">Product</th>
                              <th class="text-left font-semibold">Price</th>
                              <th class="text-left font-semibold">Quantity</th>
                              <th class="text-left font-semibold">Total</th>
                          </tr>
                      </thead>
                      <tbody>

                        {
                          cartItem?.map((item,index)=>
                          <tr>
                          <td class="py-4">
                              <div class="flex ">
                                  <img class="h-16 w-16 mr-4 " src={item?.image} alt="Product image"/>
                                  <span class="font-semibold">{item?.category.substring(0, 16)}</span>
                              </div>
                          </td>
                          <td class="py-4">{item?.price}</td>
                          <td class="py-4">
                              <div class="flex items-center">
                                  <button class="border rounded-md py-2 px-4 mr-2">-</button>
                                  <span class="text-center w-8">{item?.qnty}</span>
                                  <button class="border rounded-md py-2 px-4 ml-2">+</button>
                              </div>
                          </td>
                          <td class="py-4">{item?.price * item?.qnty}</td>
                      </tr>)
                        }
                          
                      </tbody>
                  </table>
              </div>
          </div>
            }
           {cartItem?.length > 0 && <div class="md:w-1/4">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-lg font-semibold mb-4">Summary</h2>
                    <div class="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>{total.toFixed(2)}</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span>Taxes</span>
                        <span>$1.99</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>$0.00</span>
                    </div>
                    <hr class="my-2"/>
                    <div class="flex justify-between mb-2">
                        <span class="font-semibold">Total</span>
                        <span class="font-semibold">{total.toFixed(2)}</span>
                    </div>
                    <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                </div>
            </div>}
        </div>
    </div>
</div>
    
    </>
  );
};

export default OrderPage;