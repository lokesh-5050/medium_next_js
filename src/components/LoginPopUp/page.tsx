// 'use-client'
import React from 'react'

import OutlineWithIconBtn from '../Buttons/OutlineButton/page'
import style from './style.module.css'
const LoginPopUp = (params) => {
  console.log("The data is ",params);
  
  return (
    <section>
        <div className={`${style.get_started_pop_up}`}>
        <div className={`${style.cen_box}`}>
          <div className={`${style.close}`}>
            <h1 onClick={()=>{params.setshowLoginPopUp(false)}} style={{cursor:"pointer"}}>X</h1>
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
      </div>
    </section>
  )
}

export default LoginPopUp