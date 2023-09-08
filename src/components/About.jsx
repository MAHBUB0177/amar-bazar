import React from "react";
import "../page/Common.css";
import image18 from "../images/image18.jpg";
import team1 from "../images/team1.jpg.webp";
import team2 from "../images/team-2.jpg.webp";
import team3 from "../images/team-4.jpg.webp";
import team4 from "../images/team-6.jpg.webp";
import { TabTitle } from "../utils/FunctionTitle";
import image1 from '../images/shoping.jpg'

let ownerList = [
  {
    name: "Niamh Shea",
    title: "Co-founder & Executive",
    profile: team1,
  },
  {
    name: "Orla Dwyer",
    title: "Chief Executive",
    profile: team2,
  },
  {
    name: "Dara Frazier",
    title: "Chief Strategy Officer",
    profile: team3,
  },
  {
    name: "Melvin Davis",
    title: "Lead Developer",
    profile: team4,
  },
];

export const About = () => {
  // document.title="About"
  TabTitle("Amar Bazar | About");
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between items-center pt-[20px] gap-5 p-[20px]">
        <div className="basis-3/4">
          <h2 className="  text-3xl font-medium text-black pb-5">Welcome to our AmarBazar</h2>
          <div className="flex justify-center items-center text-[18px] text-left">
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
            src={image1}
            alt=""
            style={{ height: "220px", borderRadius: "10px", width: "350px" }}
          />
        </div>
      </div>

      <div className="row">
        <h4 className="text-2xl font-semibold text-black sm:text-start md:text-center">
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
        <div className="col-md-12 text-start">
          <h2 className="text-2xl font-medium">Our Founder</h2>
          <p style={{ fontSize: "18px" }}>
            We’re impartial and independent, and every day we create
            distinctive, world-class
            <br /> reintermediate backend supply programmes.
          </p>
        </div>

        <div className="row flex ">
          {ownerList.map((item, index) => (
            <div className="col-md-3 founder">
              <div class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-8 bg-white shadow-xl rounded-lg text-gray-900">
                <div class="rounded-t-lg h-32 overflow-hidden">
                  <img
                    class="object-cover object-top w-full"
                    src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                    alt="Mountain"
                  />
                </div>
                <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                  <img
                    class="object-cover object-center h-32"
                    src={item?.profile}
                    alt="Woman looking front"
                  />
                </div>
                <div class="text-center mt-2">
                  <h2 class="font-semibold">{item?.name}</h2>
                  <p class="text-gray-500">{item?.title}</p>
                </div>
                <ul class="py-4 mt-2 text-gray-700 flex items-center justify-around">
                  <li class="flex flex-col items-center justify-around">
                    <svg
                      class="w-4 fill-current text-blue-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <div>2k</div>
                  </li>
                  <li class="flex flex-col items-center justify-between">
                    <svg
                      class="w-4 fill-current text-blue-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                    </svg>
                    <div>10k</div>
                  </li>
                  <li class="flex flex-col items-center justify-around">
                    <svg
                      class="w-4 fill-current text-blue-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                    </svg>
                    <div>15</div>
                  </li>
                </ul>
                <div class="p-4 border-t mx-8 mt-2">
                  <button class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



    </div>
  );
};