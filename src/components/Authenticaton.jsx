import { Button, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState,useEffect } from 'react'
import { domain } from '../env'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux';
import {userlogin} from '../Service/Action/Action'
import { TabTitle } from '../utils/FunctionTitle';
// import { handelSignOut, handleGoogleSignIn, initializefirebase } from '../utils/LoginFirebaseManager';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


import FirebaseConfig from '../utils/FirebaseConfig'
import axios from 'axios';
import { notifyError, notifySuccess } from './common/notifySuccess';
firebase.initializeApp(FirebaseConfig);

export const Authenticaton = () => {
   TabTitle('Amar Bazar | Login')

//firebase authentication:
    // initializefirebase()
    // handleGoogleSignIn()


    const provider = new firebase.auth.GoogleAuthProvider();
    const fbprovider=new firebase.auth.FacebookAuthProvider();
    const handleGoogleSignIn = () => {
        
          firebase.auth().signInWithPopup(provider)
            .then(res => {
              console.log('google login data ',res)
              console.log('mahabub alam data source')
              console.log(res.additionalUserInfo.profile.email)
              console.log(res.credential.accessToken)
              dispatch(userlogin())
              window.location.href='/checkout'
             
            })
            .catch(err => {
              const errorMessage = err.message;
              console.log(errorMessage)
        
            })
        };
        
        const handelFbsignIn = () => {
            firebase.auth().signInWithPopup(fbprovider)
              .then(res => {
                var user=res.user;
                console.log('facebook login data ',user)
                dispatch(userlogin())
              window.location.href='/checkout'
                
               
              })
            
              .catch(err => {
                const errorMessage = err.message;
                console.log(errorMessage)
              })
              // window.location.href='/checkout'
          };
    
//simple authentication part:

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(email,password,'000000000000000')
   


    const dispatch=useDispatch()
    // const register = async () => {
    //       if (password === password2) {
    //                 Swal.fire({
    //                           icon: 'success',
    //                           text: 'Registered Successfully!!',
    //                           timer: 1000
                              
    //                         })
    //                 setRegisternow(false)
    //       }
    //       else {
    //           Swal.fire({
    //               icon: 'error',
    //               title: 'Oops...',
    //               text: 'Password Is Not Matching!!',
    //               timer: 1000
                  
    //             })
    //       }
    //   }


    const loginnow = async () => {
        var email=document.getElementById('email').value;
        var pass=document.getElementById('pass').value;
        if(email === '' || pass === ''){
            Swal.fire({
                icon: 'error',
                text: 'UserNmae & Password Error!!',
                timer: 1400
              })
        }
        else{
            Swal.fire({
                icon: 'success',
                text: 'Login Successfully!!',
                timer: 1200
              })
                dispatch(userlogin())
                window.location.href='/checkout'
        } 
      }

      const LoginNow = async () => {
        console.log('userData')
      
      let payload={
        username: email,
        password: password,
      }
      // const payload = {
      //   username: 'kminchelle',
      //   password: '0lelplR',
      //   expiresInMins: 60 // optional
      // };

      await axios.post('https://dummyjson.com/auth/login', payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if(response?.data){
          notifySuccess('successful')
          window.location.href='/checkout'
        }
        console.log(response.data);
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });  
        };


  return (
    // <div style={{marginBottom:'50px',marginTop:'40px'}}>
    //       <Grid
    //         container
    //         spacing={0}
    //         direction="column"
    //         alignItems="center"
    //         justify="center"
    //         style={{ minHeight: "80vh" }}
    //     >
    //         <Typography variant='h4'>{registernow ? "Register Now" : "Login Now"}</Typography>

    //         <Grid item xs={12} md={8} sm={8}>
    //             <TextField
    //                 id='email'
    //                 style={{ width: "100%", margin: "10px 0" }}
    //                 variant="outlined"
    //                 label="Email"
    //                 type='text'
    //                 onChange={(e) => setEmail(e.target.value)}
    //             />
    //             <TextField
    //                id='pass'
    //                 style={{ width: "100%", margin: "10px 0" }}
    //                 variant="outlined"
    //                 label="Password"
    //                 type='password'
    //                 onChange={(e) => setPassword(e.target.value)}
    //             />
    //             {
    //                 registernow &&
    //                 <TextField
    //                     style={{ width: "100%", margin: "10px 0" }}
    //                     variant="outlined"
    //                     label="Confirm Password"
    //                     type='password'
    //                     onChange={(e)=>setPassword2(e.target.value)}
    //                 />
    //             }
    //             {
    //                 registernow ?
    //                     <>
    //                         <Button  variant='contained' color='primary'  onClick={register}>
    //                             Register
    //                 </Button>
    //                         <Button onClick={() => setRegisternow(false)}>
    //                             Have an account?Login Now.
    //                 </Button>
    //                     </>
    //                     :
    //                     <>
    //                         <Button  variant='contained' color='primary' onClick={loginnow}> 
    //                             Login
    //                         </Button>
    //                         <Button onClick={() => setRegisternow(true)}>
    //                             No account?Register Now.
    //                        </Button>
    //                 <br/>
    //                 <br/>


    //                 <Button  variant='contained' color='primary'  onClick={handleGoogleSignIn}>
    //                             Google Login
    //                 </Button> 
                   
    //                 <b>OR</b>
    //                 <Button  variant='contained' color='secondary'  onClick={handelFbsignIn}>
    //                             Facebook Login
    //                 </Button> 
                      
    //                     </>
    //             }
    //         </Grid>
    //     </Grid>
    // </div>

    <>
 
<div className="py-16">
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
    <div
      className="hidden lg:block lg:w-1/2 bg-cover"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')"
      }}
    ></div>
        <div className="w-full p-8 lg:w-1/2">
            {/* <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2> */}
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                <div className="px-4 py-3">
                    <svg className="h-6 w-6" viewBox="0 0 40 40">
                        <path
                            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                            fill="#FFC107" />
                        <path
                            d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                            fill="#FF3D00" />
                        <path
                            d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                            fill="#4CAF50" />
                        <path
                            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                            fill="#1976D2" />
                    </svg>
                </div> 
                <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold" onClick={handleGoogleSignIn}>Sign in with Google</h1>
            </a>
            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4"></span>
                <a href="#" className="text-xs text-center text-gray-500 uppercase">or login with email</a>
                <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mt-4">
                <label  className="block text-gray-700 text-sm font-bold mb-2 text-start">Email Address</label>
                <input autocomplete="none" className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email"  onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mt-4">
                <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                </div>
                <input autocomplete="none" className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="mt-8">
                <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" onClick={LoginNow}>Login</button>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <a href="#" className="text-xs text-gray-500 uppercase">or sign up</a>
                <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
        </div>
    </div>
</div>
    </>
  )
}
