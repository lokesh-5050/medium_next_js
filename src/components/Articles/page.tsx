import React from 'react'
import style from "./style.module.css";
import Image from "next/image";
import logo from "../../app/favicon.ico";
import sampleImg from "../../../public/images/sample_img.avif";
const Article = () => {
  return (
    <section>
       <div className={`${style.post_card}`}>
          <div className={`${style.lef}`}>
            <div className={`${style.owner_name}`}>
              <Image src={logo} alt="" width={25} height={25} />
              <h5>Nick Hilton</h5>
            </div>
            <div className={`${style.title}`}>
              <h4>Some Things I Wish I Could Do Again, Just One More Time</h4>
            </div>
            <div className={`${style.desc}`}>
              <span>
                From the present day all the way to less than 400 million years
                after the Big Bang, we’re seeing how the Universe grew up like
              </span>
            </div>
            <div className={`${style.post_dets}`}>
              <div className={`${style.lef}`}>
                <h5>13 July . 8 min read</h5>
                <div className={`${style.interest_bubble}`}>
                  <h6>Elon Musk</h6>
                </div>
              </div>
              {/* <img
                width="22"
                height="22"
                src="https://img.icons8.com/ios/50/000000/add-bookmark.png"
                alt="add-bookmark"
              /> */}
              <img
                width="22"
                height="22"
                src="https://img.icons8.com/external-those-icons-fill-those-icons/24/external-bookmark-bookmarks-tags-those-icons-fill-those-icons-1.png"
                alt="external-bookmark-bookmarks-tags-those-icons-fill-those-icons-1"
              />
            </div>
          </div>
          <div className={`${style.rig}`}>
            <Image src={sampleImg} alt="" />
          </div>
        </div>
    </section>
  )
}

export default Article