import style from "./styles.module.css";
import WithoutLogedInNavrBar from "@/components/NavBars/withoutLoggedIn/page";
import Image from "next/image";
import React from "react";
import logo from "./favicon.ico";
import sampleImg from "../../public/images/sample_img.avif";

import TrendingArticle from "@/components/TrendingArticles/page";
import Article from "@/components/Articles/page";
import Btn from "@/components/Buttons/page";

const Home = () => {
  return (
    <section className={`${style.main}`}>
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
        <div className="section2">Animations</div>
      </div>
      <TrendingArticle />

      <div className={`${style.post_partitation}`}>
        <Article/>
        <Btn data={{
          "padding":"10px 20px",
          "text":"Programming",
          "bgc":"rgb(235, 235, 235)",
          "color": "rgb(86, 85, 85)",
          "border_rad":"40px",
          "font_size": "0.9vmax",
        }}/>
      </div>

    </section>
  );
};

export default Home;
