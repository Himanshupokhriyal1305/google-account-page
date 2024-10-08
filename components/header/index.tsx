{/*import { useEffect, useState } from "react";
import Hamburger from "../../svg/Hamburger";

export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false);
  // Prev scroll value is used when user start scrolling up ward
  const [prevScrollValue, setPrevScrollValue] = useState(0);

  const checkScrolling = () => {
    // user scrolling down --> window.scrollY > prevScrollValue
    setIsScrolling(window.scrollY > prevScrollValue);
    setPrevScrollValue(window.scrollY);
  };

  useEffect(() => {
    if (window.scrollY > 100) {
      setIsScrolling(true);
      setPrevScrollValue(window.scrollY);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkScrolling, { passive: true });

    () => {
      return window.removeEventListener("scroll", checkScrolling);
    };
  }, [prevScrollValue]);

  const openSidebar = () => {
    document
      .getElementById("sidebar")
      ?.classList.add("!visible", "translate-x-0");
  };

  return (
    <div
      className={`flex items-center justify-between shadow-lg h-16 px-2 w-full sticky top-0 z-[10] bg-white transition-all ${isScrolling ? "-translate-y-16" : ""
        }`}
    >
      <div
        className="flex items-center text-3xl text-gray-500 md:hidden cursor-pointer"
        onClick={() => openSidebar()}
      >
        <Hamburger />
      </div>
      <div className="flex items-center max-md:flex-1">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          className="ml-4 w-14 h-14 md:w-20 md:h-20"
          alt="google"
        />
        <a href="" className="text-lg text-slate-500  ml-2">
          Account
        </a>
        <div className="h-full ml-4 flex items-center relative max-md:hidden">
          <p className="after:content-[''] after:bg-blue-500 after:absolute after:bottom-0 after:h-0.5 after:left-2 after:right-2">
            Overview
          </p>
        </div>
      </div>
      <div className="flex gap-6">
        <button className="text-blue-500 max-md:hidden">
          Create an Account
        </button>
        <button className="bg-blue-500 py-3 px-5 rounded text-white hover:bg-blue-700 max-md:px-2 max-md:text-sm">
          Go To Google Account
        </button>
      </div>
    </div>
  );
} */}


import React from 'react'
import { useState } from 'react'
import { useTranslation } from "next-i18next";
import Accordion from './Accordian';



function Index() {

  const [showMore, setShowMore] = useState(false)
  const [index, setIndex] = useState(0);

  const { t } = useTranslation("header");

  console.log(t('sHead'));


  const [sculptureList, setSculptureList] = useState([
    {
      heading: "What is Snaptik?",
      content: "Snaptik is a free tool that lets you download TikTok videos without a watermark in MP4 format and in HD, Full HD, or 4K quality. No installation required; just paste the link."
    },
    {
      heading: "Why Use Snaptik?",
      content: "Snaptik is easy to use and completely free. No sign-up needed, and you can download unlimited videos."
    },
    // Add other sections here based on the JSON structure
  ])

  // function handleMoreClick(el: object, index: number) {
  //   // setShowMore(!showMore);
  //   let newSculptureList = [...sculptureList]

  //   newSculptureList.map((e, i) => {
  //     if (i == index) {
  //       newSculptureList.splice(i, 1, {
  //         ...e, showMore: true
  //       })
  //     } else {
  //       newSculptureList.splice(i, 1, {
  //         ...e, showMore: false
  //       })
  //     }
  //   })
  //   setSculptureList(newSculptureList)
  // }





  let sculpture = sculptureList[index];


 
  return (
    <>
      <div className="grid grid-cols-1 gap-10 mt-[200px] ml-[40px]">

        <div className="flex flex-col ...">
          <div className='text-black font-bold text-xl'>{t('Snaptikheader')}</div>
          <div>{t('Snaptikdescription')}</div>
        </div>

        <div className="flex flex-col ...">
          <div className='text-black font-bold text-xl'>
            {t('musicallyheader')}</div>
          <div>{t('musicallydescription')}</div>
        </div>

        <div className="flex flex-col ...">
          <div className='text-black font-bold text-xl'>
            {t('keyfeatures')}</div>
          <div> {t('keyfeaturesdescription1')}</div>
          <div> {t('keyfeaturesdescription2')}</div>
          <div> {t('keyfeaturesdescription3')}</div>
          <div> {t('keyfeaturesdescription4')}
          </div>


        </div>
      </div>

      {/* <div className='grid grid-cols-1 gap-10 mt-[80px]'> */}



        {/* {sculptureList.map((el, i) => {
          return (
            <>
              <button className='border-1 border-red-600' onClick={(e) =>{if(el.showMore){handleHide(el,i)}else{ handleMoreClick(el,i)}}}>
                {el.showMore ? 'Hide' : <span>{el.head}</span>} details
              </button>
              {el.showMore && <p>{el.description}</p>}
            </>
          )
        })} */}

        <Accordion  />
        {/* <button className='border-1 border-red-600' onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'HOW TO DOWNLOAD VIDEO TIKTOK WITH NO WATERMARK'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}



      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'HOW TO DOWNLOAD VIDEO TIKTOK WITH NO WATERMARK'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}



      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'HOW TO DOWNLOAD VIDEO TIKTOK WITH NO WATERMARK'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}



      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'HOW TO DOWNLOAD VIDEO TIKTOK WITH NO WATERMARK'} details
      </button>
      {showMore && <p>{sculpture.description}</p>} */}



      {/* </div> */}



    </>
  )
}

export default Index
