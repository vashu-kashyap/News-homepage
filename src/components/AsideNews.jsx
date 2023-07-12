import React from "react";

const AsideNews = ({newsHeading,newsPara ,border}) => {
  return (
    <div className={`aside-news py-6 border-${border} border-Dark-grayish-blue mt-5`}>
      <h2 className="news-heading font-inter text-[15px] font-bold text-Off-white tracking-widest leading-loose">{newsHeading} </h2>
      <p className="font-inter text-sm font-normal text-Grayish-blue tracking-widest leading-6">{newsPara}</p>
     </div>
  );
};

export default AsideNews;
