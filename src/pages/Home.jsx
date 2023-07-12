import React from "react";
import AsideNews from "../components/AsideNews";

const Home = () => {

  const isMobile = window.innerWidth <= 1024

  return (
    <section className="hero px-36 max-lg:px-5">
      <div className="hero-container grid gap-8 grid-cols-3 max-lg:grid-cols-1 max-lg:grid-flow-row">
        <div className="hero-img   col-span-2 max-lg:col-span-1 max-lg:order-1 ">
          <img src={isMobile?'./image-web-3-mobile.jpg': './image-web-3-desktop.jpg'} alt="banner" />
        </div>
        <div className="latest-news row-span-2 px-8  bg-Very-dark-blue  max-lg:order-4">
          <aside>
            <p className="text-Soft-orange font-inter font-extrabold mt-12 text-4xl">
              New
            </p>
            <AsideNews
              newsHeading={"Hydrogen VS Electric Cars"}
              newsPara={"Will hydrogen-fueled cars ever catch up to EVs?"}
              border={"b"}
            />
            <AsideNews
              newsHeading={"The Downsides of AI Artistry"}
              newsPara={
                "What are the possible adverse effects of on-demand AI image generation?"
              }
              border={"b"}
            />
            <AsideNews
              newsHeading={"Is VC Funding Drying Up?"}
              newsPara={
                "Private funding by VC firms is down 50% YOY. We take a look at what that means."
              }
              border={"0"}
            />
          </aside>
        </div>
        <div className="hero-heading font-inter font-extrabold text-Very-dark-blue text-6xl max-lg:order-2">
          <h2>The Bright Future of Web 3.0?</h2>
        </div>
        <div className="hero-content max-lg:order-3">
          <p className="text-[15px] font-inter text-Dark-grayish-blue  tracking-wider">
            {" "}
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-Soft-red px-10 py-3 uppercase tracking-widest font-inter  text-Off-white text-[15px] mt-11 hover:bg-Very-dark-blue transition-all ease-in-out duration-200">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
