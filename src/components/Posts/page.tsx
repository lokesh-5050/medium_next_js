import React from 'react'
import style from './style.module.css'
import Btn from '../Buttons/page'
const LoggedInPosts = () => {
  return (
    <section>
        <div className={`${style.post}`}>
          <div className={`${style.top_section_of_posts}`}>
              <div className={`${style.left_section_post}`}>
                <div className={`${style.top_heading}`}>
                  <div className={`${style.owner_dp}`}>
                    <img
                      src="https://plus.unsplash.com/premium_photo-1673971709958-3c6a02fc353c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"
                      alt=""
                    />
                  </div>
                  <h5>Fredd Grott . Mar 22 span</h5>
                  <h5>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="ku kv"
                    >
                      <path
                        d="M12.4 12.77l-1.81 4.99a.63.63 0 0 1-1.18 0l-1.8-4.99a.63.63 0 0 0-.38-.37l-4.99-1.81a.62.62 0 0 1 0-1.18l4.99-1.8a.63.63 0 0 0 .37-.38l1.81-4.99a.63.63 0 0 1 1.18 0l1.8 4.99a.63.63 0 0 0 .38.37l4.99 1.81a.63.63 0 0 1 0 1.18l-4.99 1.8a.63.63 0 0 0-.37.38z"
                        fill="#FFC017"
                      ></path>
                    </svg>
                  </h5>
                  <h5>Members only</h5>
                </div>
                <div className={`${style.post_heading}`}>
                  <h1>Google’s Recommended Flutter App State Management</h1>
                  <h5>
                    Look, you are over-thinking state management in the wrong
                    direction. Let me show you the insights of state management
                    that are right in the Flutter SDK and why that impacts what
                  
                  </h5>
                </div>
              </div>
              <div className={`${style.right_section_of_posts}`}>
                <img src="https://images.unsplash.com/photo-1523565543073-bf9608b265ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="" />
              </div>
          </div>
          {/* The bottom Line of posts starts */}
            <div className={`${style.bottom_row}`}>
              <div className={`${style.left_section_of_bottom_row}`}>
              <Btn
              data={{
                padding: "5px 15px",
                text: "Flutter",
                bgc: "rgb(235, 235, 235)",
                color: "rgb(86, 85, 85)",
                border_rad: "40px",
                font_size: "0.9vmax",
              }}
            />
            <h6>2 min read</h6>
            <h6>·</h6>
            <h6>Based on your reading history</h6>
              </div>
              <div className={`${style.right_section_of_bottom_row}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="nr"><path d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z" fill="#000"></path></svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ns nt"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8.25 12h7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z" fill="currentColor"></path></svg>

              </div>
            </div>
          {/* The bottom Line of posts ends */}
            </div>
    </section>
  )
}

export default LoggedInPosts