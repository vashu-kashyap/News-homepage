import React from 'react'

const News = ({newsImg, newsHeading, newsPara,newsNo}) => {
  return (
    <article className='news-card flex gap-x-5 justify-start  '>
      <div className="article-img ">
        <img src={newsImg} className='h-32 w-36 object-cover'  alt="retro-pc" />
      </div>
      <div className="article-content">
        <h3 className='font-inter font-bold text-3xl text-Grayish-blue'>{newsNo}</h3>
        <h4 className='font-inter font-extrabold text-Very-dark-blue leading-6 mt-2 hover:text-Soft-red hover:cursor-pointer duration-200 transition-all ease-out'>{newsHeading}</h4>
        <p className='font-inter text-[14px] text-Dark-grayish-blue tracking-widest leading-7 mt-2'>{
        newsPara}</p>
      </div>
    </article>
  )
}

export default News
