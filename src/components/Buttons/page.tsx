import React from "react";
import style from "./style.module.css";
import { Padyakke_Expanded_One } from "next/font/google";
const Btn = (params: any) => {
  const {  text, padding, bgc, color, border_rad, font_size } =
    params.data;



  return (
    <section>
      <div
        className={`${style.btn}`}
        style={{
          cursor:'pointer',
          backgroundColor: bgc,
          borderRadius: border_rad,
          padding: padding,
          fontSize: font_size,
          color:color,
        }}
      >
        <h5>{text}</h5>
      </div>
    </section>
  );
};

export default Btn;
