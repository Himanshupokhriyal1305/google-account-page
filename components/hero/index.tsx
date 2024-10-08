import { useTranslation } from "next-i18next";
import LangDropDown from "../lang-dropdown";
import { useState } from "react";
import axios from 'axios';
import { url } from "inspector";



export default function HeroContainer() {
  const [url, setUrl] = useState("")
  const [data, setData] = useState("")
  const { t } = useTranslation("hero");

  const handleSubmit = async (e: any) => {
    e.preventDefault(url)
    try {
      const response: any = await videoDownloader(url);
      setData(response.data.downloadUrl)
      console.log(response)

      const response1 = await fetch(response.data.downloadUrl);
      const blob = await response1.blob();
      const url1 = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url1;
      a.download = 'video.mp4'; // You can set a dynamic filename here
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url1);

    } catch (error) {

    }



  }

  return (
    <>
      <div className='bg-white h-20'>
        <div className="flex flex-row justify-between">
          <img src="snaptik logo.png" style={{height:"15%",width:"15%",marginLeft:"50px"}} />
          <div className='text-black '>





          </div>
          <div className=''>

            <LangDropDown />


          </div>
        </div>
      </div>


      <div className="grid grid-rows-1 gap-4 bg-blue-700 h-[300px] justify-items-center	">
        <h1 className="text-white text-4xl ">
          {t("title")
            .split(" ")
            .map((word, index) => (
              <span
                className="pt-2.5 pr-2.5 inline-block slide-up"
                key={index}
              >
                {word}
              </span>
            ))}
          {/* <span className="pt-2.5 pr-2.5 inline-block slide-up">TikTok</span>
            <span className="pt-2.5 pr-2.5 inline-block slide-up">Video</span>
            <span className="pt-2.5 pr-2.5 inline-block slide-up">Download,</span>
            <span className="pt-2.5 pr-2.5 inline-block slide-up">working</span>
            <span className="pt-2.5 pr-2.5 inline-block slide-up">for</span>
            <span className="pt-2.5 pr-2.5 inline-block slide-up">you</span> */}
        </h1>
        <p className=" text-white  mb-[60px]">{t("description")}</p>
        <form onSubmit={handleSubmit} className="flex flex-row">
          <input className=" mb-[80px] h-10 w-[400px]" value={url} onChange={(e) => setUrl(e.target.value)} type="text" alt="" placeholder="paste tiktok link here"></input>
          <button type="submit" className="mb-[80px] h-10 w-[100px] ml-4 bg-green-800 text-xl" onClick={(data) => { data }}>
            <span>Download</span>

          </button>
        </form>
        {data && (
          <div className="video-container">
            <video controls width="640" height="360">
              <source src={data} type="video/mp4"></source>
            </video>
          </div>
        )}
      </div>
    </>

  );
}

const videoDownloader = async (url: any) => {

  const options = {
    method: 'GET',
    url: 'https://tiktok-video-downloader-api.p.rapidapi.com/media',
    params: {
      videoUrl: 'https://www.tiktok.com/@khaby.lame/video/7254764316308655387'
    },
    headers: {
      'x-rapidapi-key': 'c2b1e14d8dmsh5a0625c627ca0ffp166217jsn9e18e9b84fec',
      'x-rapidapi-host': 'tiktok-video-downloader-api.p.rapidapi.com'
    }
  };


  try {
    const response = await axios.request(options);
    return response
    //console.log(response.data);
  } catch (error) {
    throw error
  }

}








