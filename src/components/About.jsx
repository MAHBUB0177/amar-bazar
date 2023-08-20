import React from "react";
import image11 from "../images/image11.jpg";
import image12 from "../images/image12.jpg";
import "../page/Common.css";
import image13 from "../images/image13.jpg";
import image18 from "../images/image18.jpg";

import team1 from "../images/team1.jpg.webp";
import team2 from "../images/team-2.jpg.webp";
import team3 from "../images/team-4.jpg.webp";
import team4 from "../images/team-6.jpg.webp";

import { width } from "@mui/system";

import { Card } from "react-bootstrap";
import Chip from "@mui/material/Chip";
import { TabTitle } from "../utils/FunctionTitle";

export const About = () => {
  // document.title="About"
  TabTitle("Amar Bazar | About");
  return (
    <div className="">
      <div
        className="row d-flex"
        style={{ background: "#f0faf3", height: "200px" }}
      >
        
        <div className="col-md-4">
          <h2 style={{ textAlign: "center", marginTop: "80px" }}>About Us</h2>
        </div>
        <div className="col-md-4 opening">
          <img
            src={image12}
            alt=" "
            style={{ height: "200px", marginLeft: "135px" }}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-[20px] gap-5 p-[20px]"  >
        <div className="basis-3/4">
          
          <h2>Welcome to our AmarBazar</h2>
          <div  className="flex justify-center items-center text-[18px] ">
            Holisticly seize parallel metrics and functional ROI. Seamlessly
            revolutionize error-free internal or "organic" sources before
            effective scenarios. Progressively incentivize state of the art
            applications for efficient intellectual capital. Credibly leverage
            existing distinctive mindshare through cutting-edge schemas.
            Proactively procrastinate team building paradigms coordinate
            client-centric total transparent internal. Dynamically embrace
            diverse customer service and installed base paradigms. Credibly
            seize enterprise-wide experiences for end-to-end data.
            Professionally brand flexible alignments and cost effective
            architectures. Enthusiastically incentivize seamless communities
            with seamlessly facilitate revolutionary metrics with strategic
            theme areas.
          </div>
        </div>

        <div className="basis-1/4" style={{ paddingTop: "20px" }}>
          <img
            src={image18}
            alt=""
            style={{ height: "220px", borderRadius: "10px", width: "350px" }}
          />
        </div>
      </div>

      <div className="row">
        <h4 style={{ color: "#644F9C", marginTop: "10px" }}>
          Our Valuable Customers
        </h4>

        <div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
          <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
            <div class="p-4 bg-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </div>
            <div class="px-4 text-gray-700">
              <h3 class="text-sm tracking-wider">Total Member</h3>
              <p class="text-3xl">12,768</p>
            </div>
          </div>
          <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
            <div class="p-4 bg-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                ></path>
              </svg>
            </div>
            <div class="px-4 text-gray-700">
              <h3 class="text-sm tracking-wider">Total Post</h3>
              <p class="text-3xl">39,265</p>
            </div>
          </div>
          <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
            <div class="p-4 bg-indigo-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                ></path>
              </svg>
            </div>
            <div class="px-4 text-gray-700">
              <h3 class="text-sm tracking-wider">Total Comment</h3>
              <p class="text-3xl">142,334</p>
            </div>
          </div>
          <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
            <div class="p-4 bg-red-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                ></path>
              </svg>
            </div>
            <div class="px-4 text-gray-700">
              <h3 class="text-sm tracking-wider">daily impressions</h3>
              <p class="text-3xl">34.12%</p>
            </div>
          </div>
        </div>

        {/* <div
          className="shadow"
          style={{ backgroundColor: "#644F9C", marginTop: "30px" }}
        >
          <div
            className=" row d-flex  "
            style={{ paddingBottom: "10px", paddingTop: "10px" }}
          >
            <div className="col-md-4 client">
              <Card
                style={{
                  width: "18rem",
                  height: "200px",
                  clipPath: "circle()",
                  borderStyle: "dotted",
                  backgroundColor: "gray",
                  marginLeft: "30px",
                }}
              >
                <Card.Title></Card.Title>
                <Card.Body>
                  <Card.Text>
                    <h2 style={{ marginTop: "30px" }} id="counter1">
                      1B+{" "}
                    </h2>
                    <p>daily impressions</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 client">
              <Card
                style={{
                  width: "18rem",
                  height: "200px",
                  clipPath: "circle()",
                  backgroundColor: "white",
                  marginLeft: "30px",
                }}
              >
                <Card.Title></Card.Title>
                <Card.Body>
                  <Card.Text>
                    <h2 style={{ marginTop: "30px" }} id="counter2">
                      1000+
                    </h2>
                    <p>paid</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 client">
              <Card
                style={{
                  width: "18rem",
                  height: "200px",
                  clipPath: "circle()",
                  backgroundColor: "#FF6F00",
                  marginLeft: "30px",
                }}
              >
                <Card.Title></Card.Title>
                <Card.Body>
                  <Card.Text>
                    <h2 style={{ marginTop: "30px" }} id="counter3">
                      800+
                    </h2>
                    <p>Global Publishers</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div> */}
      </div>

      <div className="mt-[20px] p-[20px] ">
        <div
          className="col-md-12 text-start"
        >
          <h2>Our Founder</h2>
          <p style={{ fontSize: "18px" }}>
            We’re impartial and independent, and every day we create
            distinctive, world-class
            <br /> reintermediate backend supply programmes.
          </p>
        </div>

        <div className="row flex " >
          <div className="col-md-3 founder">
            <Card
              style={{ width: "16rem", height: "200px",  }}
              id="owner"
            >
              <img
                src={team1}
                alt=""
                style={{ width: "16rem", height: "200px", borderRadius: "5px" }}
              />
            </Card>

            <div className="col-md-3 justify-center items-center">
              <h4 style={{ width: "15rem" }}>Niamh Shea</h4>
              <p style={{ width: "15rem" }}>Co-founder & Executive</p>
            </div>
          </div>

          <div className="col-md-3 founder">
            <Card
              style={{ width: "16rem", height: "200px",  }}
              id="owner"
            >
              <img
                src={team2}
                alt=""
                style={{ width: "16rem", height: "200px", borderRadius: "5px" }}
              />
            </Card>
            <div className="col-md-3 justify-center items-center">
              <h4 style={{ width: "15rem" }}>Orla Dwyer</h4>
              <p style={{ width: "15rem" }}>Chief Executive</p>
            </div>
          </div>

          <div className="col-md-3 founder ">
            <Card
              style={{
                width: "16rem",
                height: "200px",
            //     marginLeft: "50px",
            //     marginBottom: "10px",
              }}
              id="owner"
            >
              <img
                src={team3}
                alt=""
                style={{ width: "16rem", height: "200px", borderRadius: "5px" }}
              />
            </Card>
            <div className="col-md-3 justify-center items-center">
              <h4 style={{ width: "15rem" }}>Dara Frazier</h4>
              <p style={{ width: "15rem" }}>Chief Strategy Officer</p>
            </div>
          </div>

          <div className="col-md-3 founder">
            <Card
              style={{ width: "16rem", height: "200px",}}
              id="owner"
            >
              <img
                src={team4}
                alt=""
                style={{ width: "16rem", height: "200px", borderRadius: "5px" }}
              />
            </Card>
            <div className="col-md-3 justify-center items-center">
              <h4 style={{ width: "15rem" }}>Melvin Davis</h4>
              <p style={{ width: "15rem" }}>Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
