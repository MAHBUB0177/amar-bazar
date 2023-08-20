import React from 'react'
import logo from '../images/logo.jpg.webp'
import './Footer.css'
export const Footer = () => {
  return (
<div className="footer"  style={{background:'#f7fcfc',paddingTop:'15px',}}>
  <footer className="site__footer">
            <div className="site-footer">
                <div className="container">
                    {/* <div className="site-footer__widgets">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="site-footer__widget footer-contacts">
                                    <h5 className="footer-contacts__title">Contact Us</h5>
                                    <div className="footer-contacts__text">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Integer in feugiat lorem. Pellentque ac placerat tellus.</div>
                                    <ul className="footer-contacts__contacts">
                                         <h6>715 Fake Street,
                                            New York 10021 USA</h6>
                                            <h6>stroyka@example.com</h6>
                                         
                                       
                                         <h6>(800) 060-0730,
                                            (800) 060-0730</h6>
                                         <h6>Mon-Sat 10:00pm - 7:00pm
                                      </h6>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 col-lg-2">
                                <div className="site-footer__widget footer-links ">
                                    <h5 className="footer-links__title">Information</h5>
                                    <ul className="footer-links__list divfooter">
                                    <h6>Help Center</h6>
                                    <h6>Contact Us</h6>
                                    <h6>About Us</h6>
                                    <h6>Terms & Conditions</h6>
                                    <h6>Privacy & Policy</h6>
                                    

                                   
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 col-lg-2">
                                <div className="site-footer__widget footer-links">
                                    <h5 className="footer-links__title">My Account</h5>
                                    <ul className="footer-links__list divfooter" >
                                    <h6>Store Location</h6>
                                    <h6>Order History</h6>
                                    <h6>Help Center</h6>
                                    <h6>Newsletter</h6>
                                    <h6>Gift Certificates</h6>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="site-footer__widget footer-newsletter">
                                    <h5 className="footer-newsletter__title">Newsletter</h5>
                                    <div className="footer-newsletter__text">Praesent pellentesque volutpat ex, vitae auctor
                                        lorem pulvinar mollis felis at lacinia.</div>

                                        <form action="#" class="footer-newsletter__form"><label class="sr-only"
                                            htmlFor="footer-newsletter-address">Email Address</label>
                                            <p ><span><input type="text"
                                            class=" form-control"
                                            id="footer-newsletter-address" placeholder="Email Address..."/> <button
                                            class="footer-newsletter__form-button btn btn-primary" style={{marginTop:'5px'}}>Subscribe</button></span></p>
                                             
                                    </form>

                                   
                                    
                                </div>
                            </div>
                        </div>
                    </div> */}

<div class="bg-gray-100">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6  text-gray-800 flex flex-wrap justify-center flex justify-between">
        <div class="p-5">
            <div class="text-xs uppercase text-gray-500 font-medium">Home</div>
            <a class="my-3 block" href="/#">Services <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">Products <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">About Us <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">Pricing <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">Partners <span class="text-teal-600 text-xs p-1">New</span>
            </a>
        </div>
        <div class="p-5">
            <div class="text-xs uppercase text-gray-500 font-medium">Resources</div>

            <a class="my-3 block" href="/#">Documentation <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">Tutorials <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">Support <span class="text-teal-600 text-xs p-1">New</span>
            </a>
        </div>
        <div class="p-5">
            <div class="text-xs uppercase text-gray-500 font-medium">Support</div>

            <a class="my-3 block" href="/#">Help Center <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">Privacy Policy <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">Conditions <span class="text-teal-600 text-xs p-1"></span>
            </a>
        </div>
        <div class="p-5">
            <div class="text-xs uppercase text-gray-500 font-medium">Contact us</div>

            <a class="my-3 block" href="/#">XXX XXXX, Floor 4 San Francisco, CA
                <span class="text-teal-600 text-xs p-1"></span>
            </a>

            <a class="my-3 block" href="/#">contact@company.com
                <span class="text-teal-600 text-xs p-1"></span>
            </a>
        </div>
    </div>
</div>
                    <div class="site-footer__bottom">
                    <div className=' d-flex' style={{backgroundColor:'#f2fafa',height:'140px',borderRadius:'5px',borderTop:'0.5px solid #d7e0e0'}}>
                        <div className='col-md-4 logoimg'>
                            <h4 style={{paddingTop:'10px',marginRight: '65px'}}>Follow us:</h4>
                            <p style={{marginRight:'10px'}}><span style={{paddinLeft:'5px',cursor:'pointer'}}><svg viewBox="0 0 64 64" width="34" height="34" marginLeft='2px'><circle cx="32" cy="32" r="31" fill="#3b5998"></circle><path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" fill="white"></path></svg></span>
                            <span style={{cursor:'pointer'}}><svg viewBox="0 0 64 64" width="34" height="34"><circle cx="32" cy="32" r="31" fill="#00aced"></circle><path d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z" fill="white"></path></svg></span>
                            <span style={{cursor:'pointer'}}><svg viewBox="0 0 64 64" width="34" height="34"><circle cx="32" cy="32" r="31" fill="#cb2128"></circle><path d="M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z" fill="white"></path></svg></span>
                            <span style={{cursor:'pointer'}}><svg viewBox="0 0 64 64" width="34" height="34"><circle cx="32" cy="32" r="31" fill="#007fb1"></circle><path d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z" fill="white"></path></svg></span>
                            <span style={{cursor:'pointer'}}><svg viewBox="0 0 64 64" width="34" height="34"><circle cx="32" cy="32" r="31" fill="#25D366"></circle><path d="m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915" fill="white"></path></svg></span></p>

                        </div>

                        <div className='col-md-4 opening'>
                           <h4 style={{paddingTop:'10px'}}>Call Us Today!</h4>
                           <h5>+012345-67900</h5>
                        </div>

                        <div className='col-md-4 opening'>
                           <img src={logo} alt='logo'  style={{height:'100px',}}/>
                        </div>
                    
                    </div>
                        <div class="site-footer__copyright">
                           <p style={{ paddingLeft: '50px',paddingTop:'20px',fontSize:'20px'}}>  Copyright 2022@<span style={{ color: 'tomato' }}>HtmLover</span>  All rights reserved</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>


        
</div>


    
      );
  
}




