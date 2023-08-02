"use client";
import style from "./styles.module.css";
import WithoutLogedInNavrBar from "@/components/NavBars/withoutLoggedIn/page";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import logo from "./favicon.ico";
import sampleImg from "../../public/images/sample_img.avif";

import TrendingArticle from "@/components/TrendingArticles/page";
import Article from "@/components/Articles/page";
import Btn from "@/components/Buttons/page";
import OutlineWithIconBtn from "@/components/Buttons/OutlineButton/page";
import LoginPopUp from "@/components/LoginPopUp/page";
import LoggedInNavBar from "@/components/NavBars/LoggedInNavBar/page";

const Home = () => {
  const [showLoginPopUp, setshowLoginPopUp] = useState(false);
  const [fixPositionOfOptions, setFixPositionOfOptions] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const mContainer = useRef(null);
  const chnageOptionsPosition = () => {
    if (window.scrollY >= 860) {
      setFixPositionOfOptions(true);
    } else {
      setFixPositionOfOptions(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", chnageOptionsPosition);
    // console.log("YAY =>",mContainer.current.querySelectorAll('.letters')[0]);
    // var listOfM = mContainer.current.querySelectorAll(".letters");
    // for (let index = 0; index < listOfM.length; index++) {
    //   const element = listOfM[index];
    //   setInterval(() => {
    //     let gotRdnmIndex = random(0, listOfM.length);
    //     console.log("rndm index =>>", gotRdnmIndex);
    //     setTimeout(() => {
    //       listOfM[gotRdnmIndex].style.opacity = "1";
    //     }, 500);
    //     listOfM[gotRdnmIndex].style.opacity = "0";
    //     listOfM[gotRdnmIndex].style.transition =
    //       "all cubic-bezier(0.19, 1, 0.22, 1) 1s";
    //     // }, 2000);
    //   }, 2000);

    //   console.log(random(0, listOfM.length));
    // }
  }, []);

  // function random(min: number, max: number) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  return (
    <section className={`${style.main}`}>


      {/* {showLoginPopUp ? (
        <LoginPopUp setshowLoginPopUp={setshowLoginPopUp} />
      ) : null}
      <WithoutLogedInNavrBar setshowLoginPopUp={setshowLoginPopUp} />

      <div className={`${style.head_section}`}>
        <div className={`${style.section1}`}>
          <h1>Stay curious.</h1>
          <h4>
            Discover stories, thinking, and expertise from writers on any topic
          </h4>
          <div className={`${style.start_reading}`}>
            <h6>Start reading</h6>
          </div>
        </div>
        <div ref={mContainer} className={`${style.section2}`}>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
          <h4 className="letters">M</h4>
        </div>
      </div>

      <TrendingArticle />

      <div className={`${style.post_partitation}`}>
        <div className={`${style.post_cards}`}>
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
        <div
          className={`${
            fixPositionOfOptions
              ? `${style.right_partation_final}`
              : `${style.right_partation}`
          }`}
        >
          <h3>Discover more of what matters to you</h3>
          <div className={`${style.grid_options}`}>
            <Btn
              data={{
                padding: "10px 20px",
                text: "Programming",
                bgc: "rgb(235, 235, 235)",
                color: "rgb(86, 85, 85)",
                border_rad: "40px",
                font_size: "0.9vmax",
              }}
            />
            <Btn
              data={{
                padding: "10px 20px",
                text: "Programming",
                bgc: "rgb(235, 235, 235)",
                color: "rgb(86, 85, 85)",
                border_rad: "40px",
                font_size: "0.9vmax",
              }}
            />
            <Btn
              data={{
                padding: "10px 20px",
                text: "Programming",
                bgc: "rgb(235, 235, 235)",
                color: "rgb(86, 85, 85)",
                border_rad: "40px",
                font_size: "0.9vmax",
              }}
            />
            <Btn
              data={{
                padding: "10px 20px",
                text: "Programming",
                bgc: "rgb(235, 235, 235)",
                color: "rgb(86, 85, 85)",
                border_rad: "40px",
                font_size: "0.9vmax",
              }}
            />
            <Btn
              data={{
                padding: "10px 20px",
                text: "Programming",
                bgc: "rgb(235, 235, 235)",
                color: "rgb(86, 85, 85)",
                border_rad: "40px",
                font_size: "0.9vmax",
              }}
            />
            <Btn
              data={{
                padding: "10px 20px",
                text: "Programming",
                bgc: "rgb(235, 235, 235)",
                color: "rgb(86, 85, 85)",
                border_rad: "40px",
                font_size: "0.9vmax",
              }}
            />
            <Btn
              data={{
                padding: "10px 20px",
                text: "Programming",
                bgc: "rgb(235, 235, 235)",
                color: "rgb(86, 85, 85)",
                border_rad: "40px",
                font_size: "0.9vmax",
              }}
            />
            <Btn
              data={{
                padding: "10px 20px",
                text: "Programming",
                bgc: "rgb(235, 235, 235)",
                color: "rgb(86, 85, 85)",
                border_rad: "40px",
                font_size: "0.9vmax",
              }}
            />
            <Btn
              data={{
                padding: "10px 20px",
                text: "Programming",
                bgc: "rgb(235, 235, 235)",
                color: "rgb(86, 85, 85)",
                border_rad: "40px",
                font_size: "0.9vmax",
              }}
            />
          </div>
          <h4>See more topics</h4>
          <div className={`${style.grey_line}`}></div>
          <div className={`${style.help_rows}`}>
            <h5>Help</h5>

            <h5>Status</h5>

            <h5>Writers</h5>

            <h5>Blog</h5>

            <h5>Careers</h5>

            <h5>Privacy</h5>

            <h5>Terms</h5>
            <h5>About</h5>

            <h5>Text to speech</h5>

            <h5>Teams</h5>
          </div>
        </div>
      </div> */}
      <LoggedInNavBar/>
    </section>
  );
};

export default Home;
