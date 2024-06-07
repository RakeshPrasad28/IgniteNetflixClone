import React from "react";

const Info = () => {
  return (
    <div className="my-3">
      <div className="w-full  h-[80vh] flex items-center justify-between p-20 bg-black ">
        <div className="text-white ml-20">
          <h1 className="text-5xl font-black my-3 ">Enjoy on your TV</h1>
          <p className="text-2xl font-semibold mt-7">
            Watch on smart TVs, PlayStation, Xbox,
          </p>
          <p className="text-2xl font-semibold">
            Chromecast, Apple TV, Blu-ray players and more.
          </p>
        </div>
        <div className="relative">
          <img
            className="z-999 w-[44.5vw] h-[20%]"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="image"
          />
          <video
            className="absolute top-[21%] right-[14.2%]"
            autoPlay
            loop
            muted
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
          />
        </div>
      </div>
      <div className="w-full  h-[80vh] flex items-center justify-between px-[12%] bg-black my-3">
        <div>
          <img
            className="relative"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="image"
          />
          <div className="absolute -bottom-[150vh] left-[22%] w-[23vw] h-[15vh] border-2 border-white/50 rounded-lg bg-black px-2 py-1 flex items-center justify-center gap-10">
          <img className="w-[5vw] h-[13vh]" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"/>
          <div className="text-white">
            <h1>Stranger Things</h1>
            <p className="text-blue-500">Downloading...</p>
          </div>
          </div>
        </div>
        <div className="text-white w-[40%]">
          <h1 className="text-5xl font-black my-3 ">
            Download your shows to watch offline
          </h1>
          <p className="text-2xl font-semibold mt-7">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>
      <div className="w-full  h-[80vh] flex items-center justify-between p-20 bg-black ">
        <div className="text-white ml-20">
          <h1 className="text-5xl font-black my-3 ">Watch everywhere</h1>
          <p className="text-2xl font-semibold mt-7">
            Stream unlimited movies and TV shows on your
          </p>
          <p className="text-2xl font-semibold">
            phone, tablet, laptop, and TV.
          </p>
        </div>
        <div className="">
          <img
            className="z-50 w-[45vw] h-[20%] relative "
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            alt="image"
          />
          <video
            className="absolute top-[280%] right-[14%] w-[29vw]"
            autoPlay
            loop
            muted
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
          />
        </div>
      </div>
      <div className="w-full  h-[80vh] flex items-center justify-around px-[12%] bg-black my-3">
        <div className="relative">
          <img
            className="w-[35vw]"
            src="https://occ-0-1492-3662.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
            alt="image"
          />
        </div>
        <div className="text-white w-[47%]">
          <h1 className="text-5xl font-black my-3 ">
            Create profiles for kids
          </h1>
          <p className="text-2xl font-semibold mt-7">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
