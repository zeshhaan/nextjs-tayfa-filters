import React from "react";
import Checkbox from "./Checkbox";

function Filters() {
  return (
    <div>
      {/* search component */}
      <form class="relative">
        {/* <svg
          width="20"
          height="20"
          fill="currentColor"
          class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg> */}
        <input
          // class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
          className="w-full border-gray-300 rounded-md shadow-sm"
          type="search"
          aria-label="Search..."
          placeholder="Search..."
        />
      </form>
      {/* filter checkboxes */}
      <div className="mt-10">
        {/* filter main heading */}
        <div className="flex justify-between items-center outline-none border-b	pb-5">
          <h4 class="text-sm sm:text-base lg:text-sm font-semibold uppercase">
            FILTER BY:
          </h4>
          <button className="text-sm text-gray-400 hover:text-gray-700 transition-colors">
            Reset
          </button>
        </div>

        {/* filter checkboxes wrapper */}
        <div className="pb-4">
          <div className="py-4">
            <h4 className="text-md text-gray-400 hover:text-gray-700 transition-colors">
              Capabilities
            </h4>
          </div>
          <div className="ml-2">
            <Checkbox for="Ecommerce" />
            <Checkbox for="Design" />
            <Checkbox for="Branding" />
          </div>
        </div>

        <div className="pb-4">
          <div className="py-4">
            <h4 className="text-md text-gray-400 hover:text-gray-700 transition-colors">
              Framework
            </h4>
          </div>
          <div className="ml-2">
            <Checkbox for="NextJS" />
            <Checkbox for="Svelte" />
            <Checkbox for="NuxtJS" />
          </div>
        </div>

        <div className="pb-4">
          <div className="py-4">
            <h4 className="text-md text-gray-400 hover:text-gray-700 transition-colors">
              Budgets
            </h4>
          </div>
          <div className="ml-2">
            <Checkbox for="$1,000 - $4,999" />
            <Checkbox for="$5,000 - $9,999" />
            <Checkbox for="$10,000 - $49,999" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
