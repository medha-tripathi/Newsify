import React from "react";
import Navbar from "../../component/Navbar/Navbar";
// import "../HomePage/Styles/navbar.css"
import "./Team.scss";
import Connect from "../../component/Connect/Connect";
import Footer from "../../component/Footer/Footer";

export default function Team() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div class="row">
          <div class="col-3  mx-auto my-12 w-fit">
            <div class="card" style={{ width: "15rem", height: "25rem" }}>
              <img
                class="card-img-top h-48 "
                src="https://tse2.mm.bing.net/th?id=OIP.TMuOzZP0TBf6PiDDetcWdwHaIE&pid=Api&P=0"
                alt="Card image cap"
              />
              <div class="card-body">
                <p class="card-text text-center text-lg font-medium ">
                  <h1 className="font-bold text-xl">Amitesh Patel</h1>
                  The ML AI Lead
                </p>
              </div>
            </div>
          </div>
          <div class="col-3 mx-auto my-12 w-fit">
            <div class="card" style={{ width: "15rem", height: "25rem" }}>
              <img
                class="card-img-top h-48"
                src="https://tse1.mm.bing.net/th?id=OIP.1wn9csFt6sVVyh8MXBKYxgHaEK&pid=Api&P=0"
                alt="Card image cap"
              />
              <div class="card-body">
                <p class="card-text text-center text-lg font-medium">
                  <h1 className="font-bold text-xl">Richesh Kunwar</h1>
                  The frontend Lead
                </p>
              </div>
            </div>
          </div>
          {/* <div class="w-100"></div> */}
          <div class="col-3  mx-auto my-12 w-fit">
            <div class="card" style={{ width: "15rem", height: "25rem" }}>
              <img
                class="card-img-top h-48 "
                src="https://tse3.mm.bing.net/th?id=OIP.dCi7Bm7UmQNz-lWMdGUd2wHaFi&pid=Api&P=0"
                alt="Card image cap"
              />
              <div class="card-body">
                <p class="card-text text-center text-lg font-medium">
                  <h1 className="font-bold text-xl">Aditya Kumar</h1>
                  The backend Lead
                </p>
              </div>
            </div>
          </div>
          <div class="col-3 mx-auto my-12 w-fit">
            <div class="card" style={{ width: "15rem", height: "25rem" }}>
              <img
                class="card-img-top h-48 "
                src="https://tse2.mm.bing.net/th?id=OIP.pPobLRQTuOWznpg86LLvJAHaGL&pid=Api&P=0"
                alt="Card image cap"
              />
              <div class="card-body ">
                <p class="card-text text-center text-lg font-medium">
                  <h1 className="font-bold text-xl">Medha Tripathi</h1>
                  The Frontend Lead
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" container ">
        
          <Connect />
      </div>

      <Footer />
    </>
  );
}
