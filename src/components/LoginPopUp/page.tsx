// 'use-client'
import React, { useState } from "react";

import OutlineWithIconBtn from "../Buttons/OutlineButton/page";
import style from "./style.module.css";
import Btn from "../Buttons/page";
const LoginPopUp = (params: any) => {
  console.log("The data is ", params);
  const [isEmailBtnActive, setisEmailBtnActive] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  return (
    <section>
      <div className={`${style.get_started_pop_up}`}>
        {isEmailBtnActive ? (
          <div className={`${style.email_btn_active}`}>
            <div className={`${style.dismiss}`}>
            <h1>X</h1>
            </div>
            
            <h1>Sign up with email</h1>
            <h4>Enter your email address to create an account.</h4>
            <div className={`${style.text_field_box}`}>
              <h6>Your email</h6>
              <input
                className={`${style.textField}`}
                type="text"
                placeholder=""
              />
            </div>
            <Btn
              data={{
                
                padding: "11px 80px",
                text: "Continue",
                bgc: "#000",
                color: "#fff",
                border_rad: "40px",
                font_size: "0.9vmax",
              }}
            />
            <div className={`${style.back_btn}`}>
              <img
                width="18"
                height="18"
                color="yellow"
                src="https://img.icons8.com/external-glyph-silhouettes-icons-papa-vector/78/external-Left-interface-glyph-silhouettes-icons-papa-vector-3.png"
                alt="external-Left-interface-glyph-silhouettes-icons-papa-vector-3"
              />
              <h6 onClick={()=>{
                setisEmailBtnActive(false);
              }}>All signup options</h6>
            </div>
          </div>
        ) : (
          <div className={`${style.cen_box}`}>
            <div className={`${style.close}`}>
              <h1
                onClick={() => {
                  params.setshowLoginPopUp(false);
                }}
                style={{ cursor: "pointer" }}
              >
                X
              </h1>
            </div>
            <div className={`${style.content}`}>
              <h1>Join Medium</h1>
              <div className={`${style.actions}`}>
                <OutlineWithIconBtn
                  data={{
                    navigateTo: "signup/google",
                    imgIcon: "https://img.icons8.com/color/48/google-logo.png",
                    padding: "5px 19px",
                    pRight: "85px",
                    text: "Signup with google",
                    bgc: "#fff",
                    color: "rgb(86, 85, 85)",
                    border_rad: "40px",
                    font_size: "0.9vmax",
                    border: "1px solid black",
                    gap: "39px",
                  }}
                />
                <div className="email" onClick={()=>{
                  setisEmailBtnActive(true);
                }}>

                <OutlineWithIconBtn
                  data={{
                    navigateTo: "",
                    imgIcon:
                      "https://img.icons8.com/ios/50/circled-envelope.png",
                    padding: "5px 20px",
                    pRight: "85px",
                    text: "Signup with email",
                    bgc: "#fff",
                    color: "rgb(86, 85, 85)",
                    border_rad: "40px",
                    font_size: "0.9vmax",
                    border: "1px solid black",
                    gap: "44px",
                  }}
                />
                </div>
                <div className={`${style.already_have}`}>
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
        )}
      </div>
    </section>
  );
};

export default LoginPopUp;
