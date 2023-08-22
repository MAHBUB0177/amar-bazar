import React from "react";
import image11 from "../images/image11.jpg";
import image12 from "../images/image12.jpg";
import "../page/Common.css";
import { Button, Card } from "react-bootstrap";
import { Form, Label, Input } from "reactstrap";
import contact from "../images/contact-us.jpg.webp";
import "../page/Common.css";
import Swal from "sweetalert2";
import { TabTitle } from "../utils/FunctionTitle";
export const Contact = () => {
  TabTitle("Amar Bazar | Contact");
  const handelSubmit = (event) => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fillup carefully!",
        // timer: 2000
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Your message has been sent successfully!!",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    event.preventDefault();
    var frm = document.getElementsByName("contact-form")[0];
    frm.submit(); // Submit the form
    frm.reset(); // Reset all form data
    // return false; // Prevent page refresh
  };
  return (
    <div>
      {/* <div className='row d-flex' style={{background:'#f0faf3',height:'200px'}} >
                    <div className='col-md-4 opening'>
                              <img src={image11} alt=' ' style={{height:'200px',marginRight:'135px'}}/>
                    </div>
                    <div className='col-md-4'>
                              <h2 style={{textAlign:'center',marginTop:'80px'}}>Contact Us</h2>
                    </div>
                    <div className='col-md-4 opening'>
                              <img src={image12} alt=' ' style={{height:'200px',marginLeft:'135px'}}/>
                    </div>
          </div>


          <div className='row d-flex ' style={{paddingTop:'80px',paddingBottom:'40px',flexWrap:'wrap'}}>
               <div className='col-md-4'>
               <Card style={{ width: '22rem' ,height:'250px',marginBottom:'10px',marginLeft:'10px',marginRight:'10px'  }} id='owner'>

                    <Card.Body>
                    <span class="flex justify-center text-4xl text-emerald-500 mb-4" style={{paddingTop:'60px',color:'green'}}><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span>
                    <h5 style={{marginTop:'10px'}}>Email Us</h5>
                    <p style={{fontSize:'18px'}}><span style={{color:'green',fontWeight:'bold'}}>amarbazar@gmail.com </span>Interactively grow empowered for process-centric total linkage.</p>
                    </Card.Body>
              </Card>

               </div>

               <div className='col-md-4'>
               <Card style={{ width: '22rem' ,height:'250px',marginBottom:'10px',marginLeft:'10px',marginRight:'10px' }} id='owner'>
                    
               <Card.Body>
               <span class="flex justify-center text-4xl text-emerald-500 mb-4" style={{color:'green'}}><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>
                    <h5 style={{marginTop:'10px'}}>Phone Us</h5>
                    <p style={{fontSize:'18px'}}><span style={{color:'green',fontWeight:'bold'}}>029-00124667  </span>Interactively grow empowered for process-centric total linkage.</p>
                    </Card.Body>
              </Card>

               </div>
               <div className='col-md-4'>
               <Card style={{ width: '22rem' ,height:'250px', marginBottom:'10px',marginLeft:'10px',marginRight:'10px' }} id='owner'>
               <Card.Body>
               <span class="flex justify-center text-4xl text-emerald-500 mb-4" style={{color:'green'}}><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></span>
                    <h5 style={{marginTop:'10px'}}>Location</h5>
                    <p style={{fontSize:'18px'}}>Cecilia Chapman, 561-4535 Nulla LA, United States 96522</p>
                    </Card.Body>
               </Card>

               </div>


          </div>

        

         <div className='row d-flex' style={{marginTop:'30px',marginBottom:'20px'}}>
          <div className='col-md-6 contactimg'>
                    <img src={contact} alt='contact'  style={{height:'300px'}}/>
          </div>

          <div className=' col-md-6 contactfrm ' >
                    <h4>For any suppoort just send your query</h4>
                    <p>Collaboratively promote client-focused convergence vis-a-vis customer directed alignments via plagiarize strategic users and standardized infrastructures.</p>
                    <Form name='contact-form '>
                              <div className=' row col-md-6 contactfrm' >
                               <div className="col-md-6">
                                                  <Label htmlFor="firstname" >Name</Label>
                                                  <Input type="text" name="name" id="name"
                                                  placeholder="Enter Name" required />

                                        </div>

                                        <div className="col-md-6">
                                                  <Label htmlFor="firstname" >Email Address</Label>
                                                  <Input type="text" name="Email Address" id='email'
                                                  placeholder="Email Address" required  />

                                         </div>

             

                                        <div className="col-md-12">
                                                  <Label htmlFor="Subject" >Subject</Label>
                                                  <Input type="text" name="Subject" id="subject"
                                                  placeholder="Enter Your Subject" required />

                                        </div>

                                        <div className="col-md-12">
                                                  <Label htmlFor="Subject" >Message</Label>
                                                  <Input type="textarea" name="Message" id="message"
                                                            placeholder="Enter Your Message" required />

                                        </div>
                                        <div className='col-md-6 mt-2'>
                                        <Button type='btn btn-primary btn-sm' onClick={handelSubmit}>Send Messege</Button>

                                        </div>
                                        

                              </div>
                    </Form>
          </div>


         </div> */}

      <section class="bg-blue-50 dark:bg-slate-800" id="contact">
        <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div class="mb-4">
            <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p class="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                Contact
              </p>
              <h2 class="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                Get in Touch
              </h2>
              <p class="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                In hac habitasse platea dictumst
              </p>
            </div>
          </div>
          <div class="flex items-stretch justify-center">
            <div class="grid md:grid-cols-2">
              <div class="h-full pr-6">
                <p class="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut
                  scelerisque sagittis ante, ac tincidunt sem venenatis ut.
                </p>
                <ul class="mb-6 md:mb-0">
                  <li class="flex">
                    <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4 text-start">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Our Address
                      </h3>
                      <p class="text-gray-600 dark:text-slate-400">
                        1230 Maecenas Street Donec Road
                      </p>
                      <p class="text-gray-600 dark:text-slate-400">
                        New York, EEUU
                      </p>
                    </div>
                  </li>
                  <li class="flex">
                    <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4 text-start">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Contact
                      </h3>
                      <p class="text-gray-600 dark:text-slate-400">
                        Mobile: +1 (123) 456-7890
                      </p>
                      <p class="text-gray-600 dark:text-slate-400">
                        Mail: tailnext@gmail.com
                      </p>
                    </div>
                  </li>
                  <li class="flex">
                    <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4 text-start">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Working hours
                      </h3>
                      <p class="text-gray-600 dark:text-slate-400">
                        Monday - Friday: 08:00 - 17:00
                      </p>
                      <p class="text-gray-600 dark:text-slate-400">
                        Saturday &amp; Sunday: 08:00 - 12:00
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 class="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
                <form id="contactForm">
                  <div class="mb-6">
                    <div class="mx-0 mb-1 sm:mb-4">
                      <div class="mx-0 mb-1 sm:mb-4">
                        <label
                          for="name"
                          class="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="text"
                          class="px-2 py-2 border w-full outline-none rounded-md"
                          id="exampleInput90"
                          placeholder="Name"
                        />
                      </div>
                      <div class="mx-0 mb-1 sm:mb-4">
                        <label
                          for="email"
                          class="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="email"
                          class="px-2 py-2 border w-full outline-none rounded-md"
                          id="exampleInput90"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                    <div class="mx-0 mb-1 sm:mb-4">
                      <label
                        for="textarea"
                        class="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        class="px-2 py-2 border rounded-[5px] w-full outline-none"
                      ></textarea>
                    </div>
                  </div>
                  <div class="text-center">
                    <button
                      type="submit"
                      class="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
