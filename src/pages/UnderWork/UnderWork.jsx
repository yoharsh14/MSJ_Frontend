import React from "react";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const UnderWork = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 lg:px-20 md:px-10 pt-10 pb-15 gap-5">
        <div className="text-center">
          <h1 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl font-sans">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-pink-600">
              This Page is Under Construction
            </span>
          </h1>
        </div>
        <div className="font-extrabold text-md text-black text-start md:text-center">
          <img src="/images/underConstruct.gif" alt="" className="m-auto" />
          <div className="h-3"></div>
          You can visit us here on our Socials:
          <br /> The Metaverse Street Journal LinkedIn:
          <a
            href="https://www.linkedin.com/company/metaversenews"
            className="text-blue-400 font-extraBold"
          >
            Click here
          </a>
          <div className="h-3"></div>
          The Metaverse Street Journal <b>X</b> Account:
          <a href="https://x.com/Metaverseeditor" className="text-blue-400">
            {" "}
            Click here
          </a>{" "}
          <div className="h-3"></div>
          The Metaverse Street Journal YouTube:
          <a
            href="https://www.youtube.com/@TheMetaverseStreetJournal"
            className="text-blue-400"
          >
            Click here
          </a>
          <div className="h-3"></div>
          The Metaverse Street Journal's founders LinkedIn:
          <a
            href="https://www.linkedin.com/in/tanmaya-sharma/"
            className="text-blue-400"
          >
            Click here
          </a>
          <div className="h-3"></div>
          You be the Arbiter of Truth the readers of The Metaverse Street
          Journal.
          <div className="h-3"></div> Yours sincerely, <br /> Tan and the MSJ
          Team
        </div>
        <div className="flex justify-center gap-10 text-4xl mb-16">
          <a href=" https://www.linkedin.com/company/metaversenews">
            <div>
              <FaLinkedin />
            </div>
          </a>
          <a href=" https://x.com/Metaverseeditor">
            <FaXTwitter />
          </a>
          <a href="https://www.youtube.com/@TheMetaverseStreetJournal">
            <FaYoutube />
          </a>
          <a href="https://www.linkedin.com/in/tanmaya-sharma/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UnderWork;
