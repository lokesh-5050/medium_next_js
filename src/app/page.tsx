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
import LoggedInPosts from "@/components/Posts/page";

const Home = () => {
  const [showLoginPopUp, setshowLoginPopUp] = useState(false);
  const [fixPositionOfOptions, setFixPositionOfOptions] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fixLoggedInAppBar, setfixLoggedInAppBar] = useState(false)
  const mContainer = useRef(null);
  const [isDropDownOpened, setisDropDownOpened] = useState(false);
  const [welcomeBack, setWelcomeBack] = useState(false);

  
  const chnageOptionsPosition = () => {
    console.log(window.scrollY);
    
    if (window.scrollY >= 860) {
      setFixPositionOfOptions(true);
    } else if(window.scrollY >= 56){
      setfixLoggedInAppBar(true);
      setFixPositionOfOptions(false);
    } else {
      setfixLoggedInAppBar(false);
      setFixPositionOfOptions(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.className === "dropDown") {
        console.log("Target is this");
      } else {
        setisDropDownOpened(false);
      }
    });
    window.addEventListener("scroll", chnageOptionsPosition);
  }, []);

  // function random(min: number, max: number) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
  // MONGO_URI=mongodb+srv://lokesh:complexitis@cluster0.zi6wonz.mongodb.net/

  return (
    <section className={`${style.main}`}>
      {isLoggedIn ? (
        <LoggedInNavBar
          isDropDownOpened={isDropDownOpened}
          setisDropDownOpened={setisDropDownOpened}
        />
      ) : (
        <WithoutLogedInNavrBar setWelcomeBack={setWelcomeBack} setshowLoginPopUp={setshowLoginPopUp} />
      )}
      {showLoginPopUp ? (
        <LoginPopUp welcomeBack={welcomeBack} setWelcomeBack={setWelcomeBack} setshowLoginPopUp={setshowLoginPopUp} />
      ) : null}

        



      {isLoggedIn ? (
        <div className={`${style.main_partittion}`}>
          {isDropDownOpened ? (
        <div className={`${style.drop_down_main_container}`}>
          <div className={`${style.icons_options}`}>
            <div className={`${style.option}`}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-label="Profile"
              >
                <circle cx="12" cy="7" r="4.5" stroke="currentColor"></circle>
                <path
                  d="M3.5 21.5v-4.34C3.5 15.4 7.3 14 12 14s8.5 1.41 8.5 3.16v4.34"
                  stroke="currentColor"
                  stroke-linecap="round"
                ></path>
              </svg>
              <h5>Profile</h5>
            </div>

            <div className={`${style.option}`}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-label="Lists"
              >
                <path
                  d="M6.44 6.69h0a1.5 1.5 0 0 1 1.06-.44h9c.4 0 .78.16 1.06.44l.35-.35-.35.35c.28.28.44.66.44 1.06v14l-5.7-4.4-.3-.23-.3.23-5.7 4.4v-14c0-.4.16-.78.44-1.06z"
                  stroke="currentColor"
                ></path>
                <path
                  d="M12.5 2.75h-8a2 2 0 0 0-2 2v11.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                ></path>
              </svg>
              <h5>Library</h5>
            </div>

            <div className={`${style.option}`}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-label="Stories"
              >
                <path
                  d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z"
                  stroke="currentColor"
                ></path>
                <path
                  d="M8 8.5h8M8 15.5h5M8 12h8"
                  stroke="currentColor"
                  stroke-linecap="round"
                ></path>
              </svg>
              <h5>Stories</h5>
            </div>

            <div className={`${style.option}`}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-label="Stats"
              >
                <path
                  d="M2.75 19h4.5c.14 0 .25-.11.25-.25v-6.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v6.5c0 .14.11.25.25.25zM9.75 19h4.5c.14 0 .25-.11.25-.25V8.25a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v10.5c0 .14.11.25.25.25zM16.75 19h4.5c.14 0 .25-.11.25-.25V4.25a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v14.5c0 .14.11.25.25.25z"
                  stroke="currentColor"
                ></path>
              </svg>
              <h5>Stats</h5>
            </div>
          </div>

          {/* Grey line start */}
          <div className={`${style.line}`}></div>
          {/* Grey line ends */}

          {/* simple options starts */}
          <div className={`${style.simple_options}`}>
            <h5>Settings</h5>
            <h5>Refine recommendations</h5>
            <h5>Manage publications</h5>
            <h5>Help</h5>
          </div>
          {/* simple options ends */}

          {/* Grey line start */}
          <div className={`${style.line}`}></div>
          {/* Grey line ends */}

          {/* down options starts */}
          <div className={`${style.down_section_options}`}>
            <div className={`${style.member_option}`}>
              <h5>Become a member</h5>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M12.4 12.77l-1.81 4.99a.63.63 0 0 1-1.18 0l-1.8-4.99a.63.63 0 0 0-.38-.37l-4.99-1.81a.62.62 0 0 1 0-1.18l4.99-1.8a.63.63 0 0 0 .37-.38l1.81-4.99a.63.63 0 0 1 1.18 0l1.8 4.99a.63.63 0 0 0 .38.37l4.99 1.81a.63.63 0 0 1 0 1.18l-4.99 1.8a.63.63 0 0 0-.37.38z"
                  fill="#FFC017"
                ></path>
              </svg>
            </div>
            <h5>Create a Mastodon account</h5>
            <h5>Apply for author verification</h5>
            <h5>Apply for author verification</h5>
            <h5>Apply to the partner program</h5>
            <h5>Gift a membership</h5>
          </div>
          {/* down options ends */}

          {/* Grey line start */}
          <div className={`${style.line}`}></div>
          {/* Grey line ends */}

          <div className={`${style.sign_out}`}>
            <h5>Sign out</h5>
            <h5>abcxyz@gmail.com</h5>
          </div>
        </div>
      ) : null}
          <div className={`${style.left_section}`}>
            <div className={ !fixLoggedInAppBar ?  `${style.app_bar_initial}` : `${style.app_bar_final}`}>
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios/50/000000/plus-math--v1.png"
                alt="plus-math--v1"
              />
              <h5>For you</h5>
              <h5>Following</h5>
            </div>

            {/* Logged In Member Posts starts  */}
            <div className={ !fixLoggedInAppBar ?  `${style.post_section_initial}` :`${style.post_section_final}` }>
              <LoggedInPosts />
              <LoggedInPosts />
              <LoggedInPosts />
              <LoggedInPosts />
              <LoggedInPosts />
              <LoggedInPosts />
              <LoggedInPosts />
              <LoggedInPosts />
              <LoggedInPosts />
              <LoggedInPosts />
              <LoggedInPosts />
              <LoggedInPosts />
            </div>
            {/* Logged In Member Posts ends  */}
          </div>
           
          <div className={`${style.right_section}`}>
            <div className={`${style.staff_picks}`}>
              <h4>Staff Picks</h4>
              <div className={`${style.pick_cards}`}>
                <div className={`${style.pick_card}`}>
                  <div className={`${style.pc_top_section}`}>
                    <img
                      src="https://images.unsplash.com/photo-1690789460292-f21f50be653a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80"
                      alt=""
                    />
                    <h6>Robert Brown</h6>
                  </div>
                  <h1>
                    Statistically , You Will Marry the Wrong person will marry
                    the wrong person
                  </h1>
                </div>
                <div className={`${style.pick_card}`}>
                  <div className={`${style.pc_top_section}`}>
                    <img
                      src="https://images.unsplash.com/photo-1690789460292-f21f50be653a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80"
                      alt=""
                    />
                    <h6>Robert Brown</h6>
                  </div>
                  <h1>
                    Statistically , You Will Marry the Wrong person will marry
                    the wrong person
                  </h1>
                </div>
                <div className={`${style.pick_card}`}>
                  <div className={`${style.pc_top_section}`}>
                    <img
                      src="https://images.unsplash.com/photo-1690789460292-f21f50be653a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80"
                      alt=""
                    />
                    <h6>Robert Brown</h6>
                  </div>
                  <h1>
                    Statistically , You Will Marry the Wrong person will marry
                    the wrong person
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="logged_out_user">
          <div className={`${style.head_section}`}>
            <div className={`${style.section1}`}>
              <h1>Stay curious.</h1>
              <h4>
                Discover stories, thinking, and expertise from writers on any
                topic
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
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
