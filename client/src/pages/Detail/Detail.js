import React, { useState, useEffect } from "react";
import "./Detail.scss";
import Navbar from "../../component/Navbar/Navbar";
import { Link, useSearchParams } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Footer from "../../component/Footer/Footer";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Detail(props) {
  const chartdata = {
    labels: ["Positive", "Negative"],
    datasets: [
      {
        data: [6, 9],
        lebel: "Sentiments",
        backgroundColor: ["green", "red"],
        borderWidth: 2,
        borderColor: "Black",
      },
    ],
  };

  const [data, Setdata] = useState([]);
  const [saved, setSaved] = useState(false);
  const handleClick = () => {
    setSaved(true);
  };
  const [searchParams] = useSearchParams();
  const [artQuery, setArtQuery] = useState(
    searchParams.get("art") ? searchParams.get("art") : null
  );
  const fetchdata = async () => {
    try{
    const res = await fetch("https://amiteshpatel.pythonanywhere.com/predict_api/Virat%20Kohli");
    const datauser = await res.json();
        const dataaa = Object.values(datauser);
        for (var i = 0; i < dataaa.length; i++) {
          if (dataaa[i].id == artQuery) {
            console.log("heloo")
            Setdata(dataaa[i]);
          }
        }
    }
      catch(err) {
        console.log(err.message);
      };
  };

  useEffect(() => {
    fetchdata();
    console.log(data);
    // console.log(data.length);

  }, [artQuery, data]);

  return (
    <>
      <Navbar />
      <div className="detailnews">
        <div className="content">
          <div className="detailnewstitle">
            <Link to="/">
              <button>
                <i
                  class="fa-solid fa-left-long fa-lg"
                  style={{ color: "white" }}
                ></i>
              </button>
            </Link>
            <h1>
              {data.Headline}
              
            </h1>
          </div>
          <div className="imgnpara">
            <div className="newsimage w3-hover-shadow">
              <img
                src={data.images}
                alt=""
              />
            </div>
            <div className="alltext">
              <div className="newsdesc">
                <p>
                  {data.Article}
                </p>
              </div>
              <div className="pienother">
                <div className="otherinfo">
                  <span>Date Published: {data.Publish_date}</span> <br />
                  <span>Source: Times of India</span> <br />
                </div>
                <div className="pie" style={{ width: "30%" }}>
                  {" "}
                  <Pie
                    data={chartdata}
                    options={{
                      responsive: true,
                      plugins: {
                        fontSize: 30,
                        text: "Sentiments",
                        display: true,
                      },
                      legend: {
                        labels: {
                          font: { size: 15 },
                        },
                      },
                    }}
                  ></Pie>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
