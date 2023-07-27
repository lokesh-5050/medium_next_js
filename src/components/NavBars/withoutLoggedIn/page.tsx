
import Image from 'next/image'
import style from './styles.module.css'
import React,{useState} from 'react'
import logo from '../../../../public/next.svg'

const WithoutLogedInNavrBar = () => {
    const [colorChange, setColorchange] = useState
    (false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 380) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <section>
            {/* <div className={`${style.nav_container} ${style.nav_container_white} `}> */}
            <div className={`${colorChange ? `${style.nav_container_white}`:`${style.nav_container_yellow}` } `}>
                <div className="section1">
                    <div className={`${style.logo_img}`}>
                        <Image src={logo} alt='Logo' width={180} />
                    </div>
                </div>
                <div className={`${style.section2}`}>
                    <h5>Our Story</h5>
                    <h5>Membership</h5>
                    <h5>Write</h5>
                    <h5>Sign In</h5>
                    {/* <div className={`${style.get_started_btn}`}> */}
                    <div className={`${colorChange ? `${style.get_started_btn_green}`:`${style.get_started_btn_black}` } `}>
                        <h6>Get Started</h6>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default WithoutLogedInNavrBar