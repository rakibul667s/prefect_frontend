import React from "react";

export default function Navbar() {
  return (
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg
          xmlns="https://www.prefect.io/assets/img/prefect-logo-gradient-white.c4c1e293.svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">PREFECT</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap gap-4 items-center text-base justify-center">
        <a class="mr-5 hover:text-gray-900">PRODUCT</a>
        <a class="mr-5 hover:text-gray-900">COMPANY</a>
        <a class="mr-5 hover:text-gray-900">COMMUNITY</a>
        <a class="mr-5 hover:text-gray-900">RESOURCES</a>
        <a class="mr-5 hover:text-gray-900">PRICING</a>
        <a class="mr-5 hover:text-gray-900">GET STARTED</a>
      </nav>
      <button class="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        LOG IN
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
}
