import React from "react";
import image from "../assets/Amitabh Bachan.png";
import Form from "./Form";
import Player from "./Player";
import { useDataLayerValue } from "../utils/data_layer";
function Hero() {
  const [{ movie_data }, dispatch] = useDataLayerValue();
  return (
    <div className="hero flex flex-col justify-center justify-items-center items-center h-screen drop-shadow-[5px_10px_4px_rgba(0,0,0,0.5)]">
      <div className="absolute top-[-40px] z-10">
        <h1 className="text-[7rem] leading-1 font-['devanagarish'] drop-shadow-[5px_10px_4px_rgba(0,0,0,0.15)]">
          Bollywood Back
        </h1>
      </div>
      <div className="flex pl-3 relative justify-between justify-items-center items-center top-[3%] h-[88%] w-[96%] bg-[#fff]">
        <div className="flex flex-col relative w-[64%] h-[90%] top-[4%]">
          <Form></Form>
          <h1>{movie_data?.original_title}</h1>
          {movie_data ? (
            <img
              src={`https://image.tmdb.org/t/p/original${movie_data?.poster_path}`}
              alt=""
            />
          ) : (
            <></>
          )}

          <Player></Player>
        </div>
        <div>
          <img src={image} alt="amitabh bachan" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
