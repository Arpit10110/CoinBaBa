import React from 'react'
import "../style/Home.css"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.png"
import banner3 from "../assets/banner3.jpg"
import CrpoVideo from "../assets/CrpoVideo.mp4"
import { Link, Outlet } from 'react-router-dom'
const Home = () => {
  return (
  <>
  <div className='sliderIntro'>
  <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showArrows={false} showIndicators={false} showThumbs={false} interval={2000}>
    <img src={banner1} className="bannerimg"  alt="banner1" />
    <img src={banner2} className="bannerimg"  alt="banner2" />
    <img src={banner3}  className="bannerimg" alt="banner3" />
  </Carousel>
  </div>
  <div className="learn">
    <div className="LinkLearn">
    <button className='LinksofLean' >
      <Link  to="/doc">About</Link>
    </button>
    <button className='LinksofLean' >
      <Link   to="/Tut">Tutorial</Link>
    </button>
    </div>
    <Outlet/>
    <div className="video">
      <p className='welcomeIntro'>
      Welcome to CoinBaba, your ultimate destination for all things cryptocurrency and digital assets...🪙💸
      </p>
      <video id='video' src={CrpoVideo} autoPlay={true} muted={true} loop={true} controls={true}/>
    </div>
  </div>
  </>
  )
}

export default Home