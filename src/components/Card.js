import React from "react";

function Card(props) {
  return (
    <div className="flex px-4 flex-shrink-0	">
      <a
        href=""
        className="w-full h-full flex flex-col shadow-md overflow-hidden no-underline bg-white rounded-md transition-shadow	"
      >
        <div className="flex relative">
          <div className="block margin-0 box-border">
            <img
              src="featured-img.png"
              alt=""
              className=" border-none inset-0 object-cover width-0 height-0 min-w-full min-h-full max-w-full max-h-full"
            />
          </div>
        </div>
        <div className="px-4 py-6">
          <h3 className="font-bold text-3xl tracking-tighter">{props.name}</h3>
          <a className="mt-3 text-gray-400 inline-flex items-center font-thin tracking-tighter">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="w-0.5 inline-block"></span>
            {props.location}
          </a>
          <div className="mt-5">
            <span className="bg-indigo-600 text-white py-1 px-2 rounded-xl text-xs">
              FEATURED EXPERT
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
