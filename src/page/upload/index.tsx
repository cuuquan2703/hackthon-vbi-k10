import React from "react";

const Upload = () => {
  return (
    <form className="w-full flex flex-col items-center mt-24">
      <div className="flex flex-col mb-8 min-w-fit">
        <label
          id="title"
          htmlFor="title"
          className="text-lightGray font-bold text-2xl mb-2"
        >
          Title
        </label>
        <input
          type="text"
          className="relative m-0 block w-[50vw] min-w-0 flex-auto rounded-[1.25rem] border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-[#d2d2d2] outline-none transition duration-300 ease-in-out focus:border-[#03C988] focus:text-[#d2d2d2] focus:shadow-te-primary focus:outline-none dark:border-[#1C82AD] dark:text-[#d2d2d2] dark:placeholder:text-[#d2d2d2]/40"
        />
      </div>
      <div className="flex flex-col mb-8">
        <label htmlFor="des" className="text-lightGray font-bold text-2xl mb-2">
          Description
        </label>
        <input
          id="des"
          type="text"
          className="relative m-0 block w-[50vw] min-w-0 flex-auto rounded-[1.25rem] border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-[#d2d2d2] outline-none transition duration-300 ease-in-out focus:border-[#03C988] focus:text-[#d2d2d2] focus:shadow-te-primary focus:outline-none dark:border-[#1C82AD] dark:text-[#d2d2d2] dark:placeholder:text-[#d2d2d2]/40"
        />
      </div>
      <div className="flex flex-col mb-8">
        <label htmlFor="uri" className="text-lightGray font-bold text-2xl mb-2">
          URI
        </label>
        <input
          id="uri"
          type="text"
          className="relative m-0 block w-[50vw] min-w-0 flex-auto rounded-[1.25rem] border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-[#d2d2d2] outline-none transition duration-300 ease-in-out focus:border-[#03C988] focus:text-[#d2d2d2] focus:shadow-te-primary focus:outline-none dark:border-[#1C82AD] dark:text-[#d2d2d2] dark:placeholder:text-[#d2d2d2]/40"
        />
      </div>
      <button className="h-[2rem] bg-caribbean rounded-[3.125rem] w-[10rem] font-roboto-slab text-xl font-normal">
        Upload
      </button>
    </form>
  );
};

export default Upload;
