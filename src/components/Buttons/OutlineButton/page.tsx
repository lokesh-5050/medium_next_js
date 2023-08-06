import React from "react";
// import style from "./style.module.css";
import {useRouter} from 'next/navigation'
import { Padyakke_Expanded_One } from "next/font/google";
const OutlineWithIconBtn = (params: any) => {
  const { text, padding, bgc, color, border_rad, font_size, border,pRight,gap,imgIcon,navigateTo } =
    params.data;

    console.log(navigateTo);
    

  const router = useRouter();

  return (
    <section>
      <div
      onClick={()=>{
        router.push(navigateTo);
      }}
        className={``}
        style={{
          cursor:'pointer',
          backgroundColor: bgc,
          borderRadius: border_rad,
          padding: padding,
          fontSize: font_size,
          color: color,
        }}
      >
        <div
          className="content"
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: `${gap}`,
            paddingRight: "80px",
            border: `${border}`,
            borderRadius: `${border_rad}`,
            padding: `${padding}`,
          }}
        >
          <img
            width="30"
            height="30"
            src={`${imgIcon}`}
            alt="google-logo"
          />
          <h5 style={{ fontSize: "1.2vmax", fontWeight: "400" }}>{text}</h5>
          <br />
        </div>
      </div>
    </section>
  );
};

export default OutlineWithIconBtn;
