// 'use-client'
import React, { useState, useRef } from "react";
import {sendEmail} from '@/helpers/mailer'
import OutlineWithIconBtn from "../Buttons/OutlineButton/page";
import style from "./style.module.css";
import Btn from "../Buttons/page";
import { OtpInput } from "reactjs-otp-input";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


const LoginPopUp = (params: any) => {
  console.log("The data is ", params);
  const [isEmailBtnActive, setisEmailBtnActive] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);

  const [otp1, setotp1] = useState(null);
  const [otp2, setotp2] = useState(null);
  const [otp3, setotp3] = useState(null);
  const [otp4, setotp4] = useState(null);
  const [otp5, setotp5] = useState(null);
  const [otp6, setotp6] = useState(null);

  const otpRef1 = useRef();
  const otpRef2 = useRef();
  const otpRef3 = useRef();
  const otpRef4 = useRef();
  const otpRef5 = useRef();
  const otpRef6 = useRef();

  const [password, setPassword] = useState('');
  const [showPassword, setshowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);


  const handleOtpChange = (e: any) => {
    console.log(e);

    switch (e.nativeEvent.inputType) {
      case "insertText":
        e.target.nextElementSibling.focus();
        break;
      case "deleteContentBackward":
        e.nativeEvent.srcElement.previousElementSibling.focus();
        break;

      default:
        break;
    }
  };

  return (
    <section>

      <div className={`${style.get_started_pop_up}`}>
      <ToastContainer/>

        {isEmailBtnActive && !isEmailSent && !otpVerified ? (
          <div className={`${style.email_btn_active}`}>
            <div className={`${style.dismiss}`} onClick={() => {
                  params.setshowLoginPopUp(false);
                }}>
              <h1>X</h1>
            </div>

            <h1>Sign up with email</h1>
            <h4>Enter your email address to create an account.</h4>
            <div className={`${style.text_field_box}`}>
              <h6>Your email</h6>
              <input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
                className={`${style.textField}`}
                type="text"
                placeholder="Enter email"
              />
            </div>
            <div onClick={()=>{
              console.log("ehehhe");
              toast('Enter a valid email');
              
              // console.log("The response of email is => ",sendEmail('mali.lokesh5050@gmail.com','Send_Otp',));
              const validateEmail = () => {
                const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                if (!emailRegex.test(email)) {
                } else {

                }
              }
              validateEmail();

            }} className="send_email">
              
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
            </div>
            <div className={`${style.back_btn}`}>
              <img
                width="18"
                height="18"
                color="yellow"
                src="https://img.icons8.com/external-glyph-silhouettes-icons-papa-vector/78/external-Left-interface-glyph-silhouettes-icons-papa-vector-3.png"
                alt="external-Left-interface-glyph-silhouettes-icons-papa-vector-3"
              />
              <h6
                onClick={() => {
                  setisEmailBtnActive(false);
                }}
              >
                All signup options
              </h6>
            </div>
          </div>
        ) : isEmailBtnActive && isEmailSent && !otpVerified ? (
          <div className={`${style.email_sent}`}>
            <div className={`${style.dismiss}`} onClick={()=> params.setshowLoginPopUp(false)}>
              <h1>X</h1>
            </div>
            <h1>Check your inbox.</h1>
            <p>
              Enter the code we've sent to {email} , to proceed your account
              set-up.
            </p>

            <div className={`${style.otps}`}>
              <input
                autoFocus={true}
                ref={otpRef1}
                onChange={(e) => handleOtpChange(e)}
                maxLength={1}
                value={otp1}
                type="number"
                pattern="[0-9]"
                className={`${style.otp}`}
              />
              <input
                type="number"
                ref={otpRef2}
                onChange={(e) => handleOtpChange(e)}
                maxLength={1}
                value={otp2}
                pattern="[0-9]"
                className={`${style.otp}`}
              />
              <input
                type="number"
                ref={otpRef3}
                onChange={(e) => handleOtpChange(e)}
                maxLength={1}
                value={otp3}
                pattern="[0-9]"
                className={`${style.otp}`}
              />
              <input
                type="number"
                ref={otpRef4}
                onChange={(e) => handleOtpChange(e)}
                maxLength={1}
                value={otp4}
                pattern="[0-9]"
                className={`${style.otp}`}
              />
              <input
                type="number"
                ref={otpRef5}
                onChange={(e) => handleOtpChange(e)}
                maxLength={1}
                value={otp5}
                pattern="[0-9]"
                className={`${style.otp}`}
              />
              <input
                type="number"
                ref={otpRef6}
                onChange={(e) => handleOtpChange(e)}
                maxLength={1}
                value={otp6}
                pattern="[0-9]"
                className={`${style.otp}`}
              />
            </div>
            <Btn
              data={{
                padding: "11px 80px",
                text: "Verify",
                bgc: "#000",
                color: "#fff",
                border_rad: "40px",
                font_size: "0.9vmax",
              }}
            />
          </div>
        ) : isEmailBtnActive && isEmailSent && otpVerified ? (
          <div className={`${style.email_sent} ${style.new_password_set}`}>
            <div className={`${style.dismiss}`} onClick={()=>{
              params.setshowLoginPopUp(false);
            }}>
              <h1>X</h1>
            </div>
            <h1>Let's set up password for you account!</h1>
            <h5>
              We suggest to use a strong password with combination of %#&*_+ and
              numbers.
            </h5>
            <div className={`${style.password_fields}`}>
              <div className={`${style.password_row1}`}>
                <input
                  className={`${style.password}`}
                  type={`${showPassword ? "text":"password"}`}
                  placeholder="Enter a password"
                />
                <h6 onClick={()=> setshowPassword(!showPassword)}>
                  {!showPassword ?(<img
                    width="20"
                    height="8"
                    src="https://img.icons8.com/fluency-systems-regular/48/visible.png"
                    alt="visible"
                  />):(
                  <img width="20" height="8" src="https://img.icons8.com/fluency-systems-filled/48/visible.png" alt="visible"/>
                   ) }
                  
                </h6>
              </div>
              
              <div className={`${style.password_row1}`}>
                <input
                  className={`${style.password}`}
                  type={`${showConfirmPassword ? "text":"password"}`}
                  placeholder="Confirm password"
                />
                <h6 onClick={()=> setshowConfirmPassword(!showConfirmPassword)}>
                {!showConfirmPassword ?(<img
                    width="20"
                    height="8"
                    src="https://img.icons8.com/fluency-systems-regular/48/visible.png"
                    alt="visible"
                  />):(
                  <img width="20" height="8" src="https://img.icons8.com/fluency-systems-filled/48/visible.png" alt="visible"/>
                   ) }
                </h6>
              </div>
             
            </div>
            <Btn
              data={{
                padding: "11px 80px",
                text: "Done",
                bgc: "#000",
                color: "#fff",
                border_rad: "40px",
                font_size: "0.9vmax",
              }}
            />
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
                <div
                  className="email"
                  onClick={() => {
                    setisEmailBtnActive(true);
                  }}
                >
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
