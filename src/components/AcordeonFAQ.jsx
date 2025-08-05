import React, { useState } from "react";

export default function AcordeonFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Bookmark?",
      answer:
        "Puedes instalarla desde la tienda oficial de tu sistema operativo o directamente desde nuestra página web.",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "Tenemos una versión gratuita con funciones básicas y un plan premium con características avanzadas.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Sí, puedes iniciar sesión en múltiples dispositivos y tu información se sincronizará automáticamente.",
    },
      {
      question: "What about other Chromium browsers?",
      answer:
        "Sí, puedes iniciar sesión en múltiples dispositivos y tu información se sincronizará automáticamente.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 ">
        <div>
          <p className="text-2xl font-medium text-center text-fm-Blue-950">Frecuently Asked Questions</p>
          <p className="text-neutral-400 text-center text-sm my-8 leading-relaxed ">
           Here are some of our FAQs. If you have any other questions you`d like answered please feel free to email us.
          </p>
        </div>
      <div className="divide-y my-20 divide-gray-300 border-t border-b border-neutral-300">
        {faqs.map((faq, index) => (
          <div key={index} className="py-6">
            <button
              className="flex justify-between w-full text-left text-sm font-normal text-fm-Blue-950 hover:cursor-pointer focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span className="ml-2 ">
                {activeIndex === index ? <svg className="rotate-180 transform-gpu transition-transform duration-400 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="hsl(0, 94%, 66%)" strokeWidth="3" d="M1 1l8 8 8-8"/></svg> : <svg className="rotate-0 transform-gpu transition-transform duration-400 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>}
              </span>
            </button>

            {/* Contenido con animación */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-neutral-400 text-left text-sm py-5 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
        <div className="w-full m-auto flex">
            <button className="bg-fm-Blue-600 px-6 py-4 m-auto mt-8  shadow-lg w-fit rounded-md font-bold text-white text-sm">More Info</button>
        </div>
    </div>
  );
}
