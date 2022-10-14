import React, { useEffect, useRef } from "react";
import "./scss/banner.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import { Nfts } from "./data";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate()
    return (
        <>

            <section className="banner">
                <div className="container">
                    <div className="grid">
                        <div className="start">
                            <h1>
                                {" "}
                                Adoptable Babes
                            </h1>
                            <p>
                                Web3 Adoption Fund powered by 5,555 Adoptable Babes
                            </p>
                            <div className="btn__container">
                                <button className="first" onClick={() => navigate('/Mint')}>
                                    <span>MINT NOW!</span>
                                </button>
                                <button className="second" onClick={() => window.open('https://docs.adoptablebabes.com/introduction/overview', '_blank')}>
                                    <span>WHITEPAPER</span>
                                </button>
                            </div>
                        </div>
                        <div className="slider">
                            <div className="img">
                                <div className="top__right"></div>
                                <div className="top__left"></div>
                                <div className="bottom__right"></div>
                                <div className="bottom__left"></div>
                                <img src="/images/gif.gif" alt="" />
                            </div>
                            {/* <Swiper
                                spaceBetween={30}
                                effect={"fade"}
                                navigation={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[EffectFade, Navigation, Pagination]}
                                className="mySwiper"
                            >
                                {
                                    Nfts.map((item, index) => {
                                        return (
                                            <SwiperSlide>
                                                <img src={item} alt='' />
                                            </SwiperSlide>
                                        )
                                    })
                                }


                            </Swiper> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
