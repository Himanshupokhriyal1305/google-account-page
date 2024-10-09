import { useTranslation } from "next-i18next";
import LangDropDown from "../lang-dropdown";
import { useState } from "react";
import axios from 'axios';

export default function HeroContainer() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState("");
  const { t } = useTranslation("hero");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response: any = await videoDownloader(url);
      setData(response.data.downloadUrl);
      console.log(response);

      const response1 = await fetch(response.data.downloadUrl);
      const blob = await response1.blob();
      const url1 = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url1;
      a.download = 'video.mp4'; // Dynamic filename can be added here
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url1);
      document.body.removeChild(a); // Clean up
    } catch (error) {
      console.error("Error downloading video:", error);
      // Optionally show an error message to the user
    }
  };

  return (
    <>
      <div className='bg-white h-20 flex items-center justify-between px-4 md:px-8'>
        <img src="snaptik logo.png" className="h-12 md:h-16" />
        <div className="flex-shrink-0">
          <LangDropDown />
        </div>
      </div>

      <div className="bg-blue-700 h-[300px] py-4 md:py-8">
        <div className="grid grid-rows-1 gap-4 justify-items-center">
          <h1 className="text-white text-4xl text-center">
            {t("title").split(" ").map((word, index) => (
              <span className="pt-2.5 pr-2.5 inline-block slide-up" key={index}>
                {word}
              </span>
            ))}
          </h1>
          <p className="text-white mb-6 text-center">{t("description")}</p> {/* Adjusted margin */}
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center">
            <input 
              className="mb-4 md:mb-0 h-10 w-full md:w-[400px] px-2"
              value={url} 
              onChange={(e) => setUrl(e.target.value)} 
              type="text" 
              placeholder="paste tiktok link here" 
            />
            <button type="submit" className="h-10 w-full md:w-[100px] bg-green-800 text-xl md:ml-4">
              <span>Download</span>
            </button>
          </form>
          {data && (
            <div className="video-container mt-4">
              <video controls width="640" height="360">
                <source src={data} type="video/mp4"></source>
              </video>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

const videoDownloader = async (url: string) => {
  const options = {
    method: 'GET',
    url: 'https://tiktok-api23.p.rapidapi.com/api/user/popular-posts?secUid=MS4wLjABAAAAqB08cUbXaDWqbD6MCga2RbGTuhfO2EsHayBYx08NDrN7IE3jQuRDNNN6YwyfH6_6&count=35&cursor=0',
    params: { videoUrl: url }, // Use dynamic URL here
    headers: {
      'x-rapidapi-host': 'tiktok-api23.p.rapidapi.com' ,
	    'x-rapidapi-key': '1865ac576dmsh080f65d8aa868e6p1a897fjsnf3e099ed908b'
    }
  };

  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    throw error;
  }
};
