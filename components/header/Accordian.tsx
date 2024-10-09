// components/Accordion.tsx

import { useState } from 'react';

const AccordionItem = ({
  title,
  content,
  isOpen,
  onToggle,
}: {
  title: string;
  content: JSX.Element;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="accordion-item border mt-2 md:mt-4 overflow-hidden">
      <div className="accordion-header flex justify-between p-4 cursor-pointer" onClick={onToggle}>
        <h2 className="accordion-title font-bold text-lg md:text-xl">{title}</h2>
      </div>
      {isOpen && <div className={`accordion-content p-4 transition-height duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        } overflow-hidden`}>{content}</div>}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = [
    {
      title: 'Snaptik: TikTok Video Downloader Without Watermark',
      content: (
        <>
          <p>Snaptik is a user-friendly tool designed for downloading TikTok videos effortlessly. Many TikTok users love sharing and enjoying videos but often want to save them without the pesky watermark. Snaptik makes this possible! With just a few clicks, you can download your favorite TikTok videos directly to your device which allows you to watch them anytime, anywhere. Whether you are looking to save funny clips, dance challenges, or creative content, Snaptik provides a simple solution to keep your favorite moments without any distractions.</p>
          <p>Keep reading to know more.</p>
        </>
      ),
    },
    {
      title: 'What is Snaptik?',
      content: (
        <>
          <p>Snaptik is a free tool that lets you download TikTok videos without a watermark. You can get videos in MP4 format and in HD, Full HD, or 4K quality. You do not need to install anything on your phone or computer; just paste the TikTok video link, and we will take care of the rest. With Snaptik, you can save videos to your device with one click.</p>
        </>
      ),
    },
    {
      title: 'Why Use Snaptik?',
      content: (
        <>
          <p>Snaptik.boo is a simple website that lets you download TikTok videos in high quality without any watermarks. People love it because it is easy to use and always free. You do not need to sign up, and you can download as many videos as you want.</p>
        </>
      ),
    },
    {
      title: 'Features of Snaptik',
      content: (
        <>
          <ul className="list-disc pl-5">
            <li>Remove Watermark: Snaptik can take away the watermark or logo from TikTok videos.</li>
            <li>Completely Free: Snaptik is free to use, and you will not have to pay anything.</li>
            <li>Compatibility: Snaptik works on all devices like smartphones, tablets, computers, and laptops without the need to install anything.</li>
            <li>Easy to Use: Using Snaptik is simple; all you need is a link to a TikTok video.</li>
            <li>Download MP4: You can download TikTok videos in MP4 format, which is easy to play on any device.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'How To Use Snaptik?',
      content: (
        <>
          <p>Snaptik makes it easy to download TikTok videos without watermarks. Have a look below to know how to do it step by step:</p>
          <h3>Step 1: Copy the TikTok Video Link</h3>
          <p>Find the TikTok video you want to save, click on the share button, and choose &ldquo;Copy Link.&ldquo; This will save the video&ldquo;s link for later.</p>
          <h3>Step 2: Paste the Link into Snaptik</h3>
          <p>Go to the Snaptik website or app. Look for the box where you can paste the link and paste it there.</p>
          <h3>Step 3: Choose Download Options</h3>
          <p>Snaptik will give you different options to download such as:</p>
          <ul className="list-disc pl-5">
            <li>MP4 for video</li>
            <li>MP3 for audio only</li>
            <li>Image for pictures</li>
          </ul>
          <h3>Step 4: Save the Video to Your Device</h3>
          <p>After choosing the option, click the download button. Snaptik will process your download usually in 10 to 30 seconds. Make sure to save the file to your device.</p>
        </>
      ),
    },
    {
      title: 'Benefits of Snaptik for Downloading TikTok Videos',
      content: (
        <>
          <p>Snaptik is a popular tool for downloading videos from TikTok easily. Here are some important features:</p>
          <ul className="list-disc pl-5">
            <li>You can download high-quality videos.</li>
            <li>Videos are free from watermarks.</li>
            <li>Supports different formats like MP4 and MP3.</li>
            <li>No need to create an account.</li>
            <li>Works on various devices and web browsers.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Snaptik Compatibility',
      content: (
        <>
          <p>Snaptik works on many devices and web browsers:</p>
          <h3>For Mobile Devices: Android and iOS</h3>
          <p>Snaptik works on both Android and iOS devices. You can download TikTok videos on your phone or tablet.</p>
          <h3>For Desktops: Windows and Mac</h3>
          <p>Snaptik works on both Windows and Mac computers, allowing you to download TikTok videos directly.</p>
          <h3>Browser Support</h3>
          <p>Snaptik can be used with popular web browsers like Chrome, Firefox, and Safari.</p>
        </>
      ),
    },
    {
      title: 'TikTok\'s Download Limitations',
      content: (
        <>
          <p>TikTok has limitations on downloading videos that can hinder users. Many creators choose to turn off the download option to protect their work. Here are some important points:</p>
          <ul className="list-disc pl-5">
            <li>Users can turn off the download option in their Privacy settings.</li>
            <li>You can disable downloads for specific videos.</li>
            <li>The download feature might not work in some regions.</li>
            <li>App bugs can cause issues with downloading.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'SnapTik\'s Advanced Features: Beyond Basic Downloads',
      content: (
        <>
          <p>Snaptik is designed to meet different needs for people who want to save and reuse TikTok content. Here is what it offers:</p>
          <ul className="list-disc pl-5">
            <li>High-Quality Video Downloads: Download TikTok videos in high definition (up to 1080p).</li>
            <li>MP3 Audio Extraction: Grab just the audio in MP3 format.</li>
            <li>Download Slideshows and Stories: Save TikTok slideshows and stories.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Privacy and Security: Is Snaptik Safe to Use?',
      content: (
        <>
          <p>Snaptik prioritizes user privacy and security. Key features include:</p>
          <ul className="list-disc pl-5">
            <li>No collection of personal information.</li>
            <li>Secure SSL encryption to protect data.</li>
            <li>Quick deletion of downloaded videos from their servers.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Tips for Optimizing Your Snaptik Experience',
      content: (
        <>
          <p>Follow these recommendations to make your downloading easy and smooth:</p>
          <ul className="list-disc pl-5">
            <li>Check your browser compatibility and ensure a good internet connection.</li>
            <li>Keep your mobile OS updated to avoid issues.</li>
            <li>For the best sound, choose the highest quality option for MP3 downloads.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Legal Considerations When Using TikTok Downloaders',
      content: (
        <>
          <p>Using a TikTok video downloader app can lead to legal issues. Key considerations include:</p>
          <h3>Copyright and Fair Use</h3>
          <p>Downloading and sharing videos without permission can violate copyright laws.</p>
          <h3>TikTok&ldquo;s Terms of Service</h3>
          <p>Unauthorized downloads may go against TikTok&ldquo;s rules.</p>
          <h3>Ethical Considerations</h3>
          <p>Always give credit to the original creators when sharing downloaded content.</p>
        </>
      ),
    },
    {
      title: 'SnapTik\'s Mobile App: Features and Benefits',
      content: (
        <>
          <p>The Snaptik app makes it easy to download TikTok videos on Android devices:</p>
          <ul className="list-disc pl-5">
            <li>Download unlimited TikTok videos.</li>
            <li>Save videos without logos.</li>
            <li>Keep high-quality video resolution.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Troubleshooting Common Snaptik Issues',
      content: (
        <>
          <p>Sometimes users may encounter problems. Here are some solutions:</p>
          <ul className="list-disc pl-5">
            <li>Update your web browser to the latest version.</li>
            <li>Clear your browser&ldquo;s cache and cookies.</li>
            <li>Try using a different web browser.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'FAQs',
      content: (
        <>
          <ul className="list-disc pl-5">
            <li><strong>Is SnapTik.boo free to use?</strong> Yes, it is completely free.</li>
            <li><strong>Do I need to create an account?</strong> No, you can use it without signing in.</li>
            <li><strong>Is it legal to download TikTok videos?</strong> It&ldquo;s meant for personal use only.</li>
            <li><strong>What devices are compatible with SnapTik?</strong> Works on Android and iOS.</li>
            <li><strong>Can I download videos in HD quality?</strong> Yes, you can.</li>
          </ul>
        </>
      ),
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="accordion gap-4 md:gap-6 mx-4 md:mx-10">
            {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}

    </div>
  );
};


export default Accordion;
