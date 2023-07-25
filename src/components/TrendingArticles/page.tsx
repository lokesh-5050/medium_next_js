import React from 'react'
import logo from '../../app/favicon.ico'
import style from '../TrendingArticles/styles.module.css'
import Image from 'next/image'
const TrendingArticle = () => {
    return (
        <section>
            {/* Trending section starts */}
            <div className={`${style.trending_section}`}>
                <div className={`${style.title}`}>
                    <Image src={logo} alt='' width={25} height={10} />
                    <h5>Trending on Medium</h5>
                </div>

                {/* trending card start */}
                <div className={`${style.trending_cards_grid}`}>

                    <div className={`${style.trending_card}`}>
                        <h3>01</h3>
                        <div className={`${style.items}`}>
                            <div className={`${style.title}`}>
                                <Image src={logo} alt='' width={25} height={10} />
                                <h1>Microsoft Design</h1>
                            </div>
                            <div className={`${style.tr_heading}`}>
                                <h4 >A change of typeface: Microsoft’s new default font has arrived</h4>
                            </div>
                            <div className={`${style.card_info}`}>
                                <h5>13 July . 5 min read</h5>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.trending_card}`}>
                        <h3>01</h3>
                        <div className={`${style.items}`}>
                            <div className={`${style.title}`}>
                                <Image src={logo} alt='' width={25} height={10} />
                                <h1>Microsoft Design</h1>
                            </div>
                            <div className={`${style.tr_heading}`}>
                                <h4 >A change of typeface: Microsoft’s new default font has arrived</h4>
                            </div>
                            <div className={`${style.card_info}`}>
                                <h5>13 July . 5 min read</h5>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.trending_card}`}>
                        <h3>01</h3>
                        <div className={`${style.items}`}>
                            <div className={`${style.title}`}>
                                <Image src={logo} alt='' width={25} height={10} />
                                <h1>Microsoft Design</h1>
                            </div>
                            <div className={`${style.tr_heading}`}>
                                <h4 >A change of typeface: Microsoft’s new default font has arrived</h4>
                            </div>
                            <div className={`${style.card_info}`}>
                                <h5>13 July . 5 min read</h5>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.trending_card}`}>
                        <h3>01</h3>
                        <div className={`${style.items}`}>
                            <div className={`${style.title}`}>
                                <Image src={logo} alt='' width={25} height={10} />
                                <h1>Microsoft Design</h1>
                            </div>
                            <div className={`${style.tr_heading}`}>
                                <h4 >A change of typeface: Microsoft’s new default font has arrived</h4>
                            </div>
                            <div className={`${style.card_info}`}>
                                <h5>13 July . 5 min read</h5>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.trending_card}`}>
                        <h3>01</h3>
                        <div className={`${style.items}`}>
                            <div className={`${style.title}`}>
                                <Image src={logo} alt='' width={25} height={10} />
                                <h1>Microsoft Design</h1>
                            </div>
                            <div className={`${style.tr_heading}`}>
                                <h4 >A change of typeface: Microsoft’s new default font has arrived</h4>
                            </div>
                            <div className={`${style.card_info}`}>
                                <h5>13 July . 5 min read</h5>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.trending_card}`}>
                        <h3>01</h3>
                        <div className={`${style.items}`}>
                            <div className={`${style.title}`}>
                                <Image src={logo} alt='' width={25} height={10} />
                                <h1>Microsoft Design</h1>
                            </div>
                            <div className={`${style.tr_heading}`}>
                                <h4 >A change of typeface: Microsoft’s new default font has arrived</h4>
                            </div>
                            <div className={`${style.card_info}`}>
                                <h5>13 July . 5 min read</h5>
                            </div>
                        </div>
                    </div>
                </div>
                {/* trending card end */}

            </div>
            {/* Trending section starts */}
        </section>
    )
}

export default TrendingArticle