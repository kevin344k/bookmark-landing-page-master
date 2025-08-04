import React from "react";
import FeaturesTab from "./FeaturesTab";
import dots_patter from "../assets/images/bg-dots.svg" 
import AcordeonFAQ from "./AcordeonFAQ";

export default function MainContent() {

const extensions=[{
    name:"Add to Chrome",
    version:"Minimun version 62",
    img:"./src/assets/images/logo-chrome.svg"

},
{
    name:"Add to Firefox",
    version:"Minimun version 55",
     img:"./src/assets/images/logo-firefox.svg"
    
},
{
    name:"Add to Opera",
    version:"Minimun version 46",
     img:"./src/assets/images/logo-opera.svg"
    
}]


  return (
    <div className="p-5">
      {/* hero */}
      <div>
        <div className="m-auto w-full h-80  bg-[url('./assets/images/illustration-hero.svg')] bg-contain bg-no-repeat bg-center"></div>
        <div className="my-12">
          <p className="text-3xl font-medium text-center text-fm-Blue-950">
            A Simple Bookmark Manager
          </p>
          <p className="text-neutral-400 text-center text-md my-8">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try for
            free.
          </p>
          <div className="flex gap-5">
            <button className="bg-fm-Blue-600 px-2 py-4 shadow-lg rounded-md font-bold text-white text-sm">
              Get it on Chrome
            </button>
            <button className="bg-fm-Grey-50 px-2 py-4 shadow-lg rounded-md font-bold text-neutral-500 text-sm">
              Get it on Firefox
            </button>
          </div>
        </div>
      </div>
      {/* features */}

      <div className="my-40">
        <FeaturesTab></FeaturesTab>
      </div>
      {/* dowload the extension */}
      <div className="my-40">
        <div>
          <p className="text-2xl font-medium text-center text-fm-Blue-950">Dowload the extension</p>
          <p className="text-neutral-400 text-center text-sm my-8 leading-relaxed ">
            we`ve got more browsers in the pipeline. Please do let us if you`ve
            got a favourite you`d like us to prioritize.
          </p>
        </div>
        {
            extensions.map((ext,index)=>(
                <div key={index} className="py-8 text-center m-auto w-fit shadow-lg rounded-lg mb-12">
                    <img className="m-auto mb-8" src={ext.img} alt="" />
                   <div className="my-12">
                     <p className="text-2xl font-medium text-center text-md text-fm-Blue-950">{ext.name}</p>
                     <p className="text-neutral-400 text-center text-sm my-4 leading-relaxed">{ext.version}</p>
                   </div>
                   <img src={dots_patter} alt="" />
                   <button className="bg-fm-Blue-600 px-2 py-4 mt-8 shadow-lg w-[85%] rounded-md font-bold text-white text-sm">Add & Install Extension</button>
                </div>

            ))
        }
      </div>
       {/* accordeon */}
       <div className="my-40">
        
        <AcordeonFAQ></AcordeonFAQ>
       </div>
    </div>
  );
}
