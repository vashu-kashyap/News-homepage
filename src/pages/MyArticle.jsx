import React from 'react'
import News from '../components/News'
import NewsImg_1 from '../assets/images/image-retro-pcs.jpg'
import NewsImg_2 from '../assets/images/image-top-laptops.jpg'
import NewsImg_3 from '../assets/images/image-gaming-growth.jpg'

const MyArticle = () => {
  return (
    <section className='article px-36  py-8 max-lg:px-5 grid grid-flow-col gap-x-16 max-lg:grid-flow-row max-lg:gap-x-0 max-lg:gap-y-5 '>
      <News newsImg={NewsImg_1} newsNo='01' newsHeading='  Reviving Retro PCs' newsPara='What happens when old PCs are given modern upgrades?' />
      <News newsImg={NewsImg_2} newsNo='02' newsHeading='Top 10 Laptops of 2022' newsPara='Our best picks for various needs and budgets.' />
      <News newsImg={NewsImg_3} newsNo='03' newsHeading='The Growth of Gaming' newsPara='How the pandemic has sparked fresh opportunities.' />
    </section>
  )
}

export default MyArticle
