import React from 'react'
import style from './style.module.css'
const LoggedInPosts = () => {
  return (
    <section>
        <div className={`${style.post}`}>
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
    </section>
  )
}

export default LoggedInPosts