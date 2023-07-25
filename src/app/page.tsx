import style from './styles.module.css'
import WithoutLogedInNavrBar from '@/components/NavBars/withoutLoggedIn/page'
import Image from 'next/image'
import React from 'react'
import logo from './favicon.ico'
import sampleImg from '../../public/images/sample_img.avif'

import TrendingArticle from '@/components/TrendingArticles/page'

const Home = () => {
  return (
    <section className={`${style.main}`}>
      <WithoutLogedInNavrBar />
      {/* head section starts */}
      <div className={`${style.head_section}`}>
        <div className={`${style.section1}`}>
          <h1>Stay curious.</h1>
          <h4>Discover stories, thinking, and expertise from writers on any topic</h4>
          <div className={`${style.start_reading}`}>
            <h6>Start reading</h6>
          </div>
        </div>
        <div className="section2">
          Animations
        </div>
      </div>
      <TrendingArticle />
      {/* posts and options start */}
      <div className={`${style.post_partitation}`}>
        <div className={`${style.post_card}`}>
          <div className={`${style.lef}`}>
            <div className={`${style.owner_name}`}>
              <Image src={logo} alt='' width={25} height={25} />
              <h5>Nick Hilton</h5>
            </div>
            <div className={`${style.title}`}>
              <h4>Some Things I Wish I Could Do Again, Just One More Time</h4>
            </div>
            <div className={`${style.desc}`}>
              <span>From the present day all the way to less than 400 million years after the Big Bang, we’re seeing how the Universe grew up like</span>
            </div>
            <div className={`${style.post_dets}`}>
              <h5>13 July . 8 min read</h5>
              <div className={`${style.interest_bubble}`}>

                <h6>Elon Musk</h6>
              </div>
            </div>
          </div>
          <div className={`${style.rig}`}>
            <Image src={sampleImg} alt=''/>
          </div>
        </div>
      </div>
      {/* posts and options end */}
    </section>

  )
}

export default Home