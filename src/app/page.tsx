"use client";
import style from "./styles.module.css";
import WithoutLogedInNavrBar from "@/components/NavBars/withoutLoggedIn/page";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "./favicon.ico";
import sampleImg from "../../public/images/sample_img.avif";

import TrendingArticle from "@/components/TrendingArticles/page";
import Article from "@/components/Articles/page";
import Btn from "@/components/Buttons/page";
import OutlineWithIconBtn from "@/components/Buttons/OutlineButton/page";

const Home = () => {
  const [showLoginPopUp, setshowLoginPopUp] = useState(false);
  const [fixPositionOfOptions, setFixPositionOfOptions] = useState(false);
  const chnageOptionsPosition = () => {
    if (window.scrollY >= 860) {
      setFixPositionOfOptions(true);
    } else {
      setFixPositionOfOptions(false);
    }
  };
  window.addEventListener("scroll", chnageOptionsPosition);

  document.body.classList.add("disable-scroll");

  return (
    <section className={`${style.main}`}>
      <div className={`${style.get_started_pop_up}`}>
        <div className={`${style.cen_box}`}>
          <div className={`${style.close}`}>
            <h1>X</h1>
          </div>
          <div className={`${style.content}`}>
            <h1>Join Medium</h1>
            <div className={`${style.actions}`}>
              <OutlineWithIconBtn
                data={{
                  padding: "5px 20px",
                  pRight: "85px",
                  text: "Programming",
                  bgc: "#fff",
                  color: "rgb(86, 85, 85)",
                  border_rad: "40px",
                  font_size: "0.9vmax",
                  border: "1px solid black",
                  gap: "40px",
                }}
              />

              <OutlineWithIconBtn
                data={{
                  padding: "5px 20px",
                  pRight: "85px",
                  text: "Programming",
                  bgc: "#fff",
                  color: "rgb(86, 85, 85)",
                  border_rad: "40px",
                  font_size: "0.9vmax",
                  border: "1px solid black",
                  gap: "40px",
                }}
              />
              <div className="already_have">
                <h4>
                  Already have an account? <span>Sign in</span>
                </h4>
              </div>
            </div>
            <h6 className={`${style.terms_andc_condition}`}>
              Click “Sign Up” to agree to Medium’s Terms of Service and
              acknowledge that Medium’s Privacy Policy applies to you.
            </h6>
          </div>
        </div>
      </div>
      <WithoutLogedInNavrBar />

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
        <div className={`${style.section2}`}>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
          <h4>M</h4>
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
      </div>
    </section>
  );
};

export default Home;
