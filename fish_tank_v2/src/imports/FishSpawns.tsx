import imgFishTankSketch from "../assets/Fish tank sketch.png";
import imgIdle from "../assets/idle.png";
import imgFish from "../assets/fish.png";

export default function FishSpawns() {
  return (
    <div className="relative size-full" data-name="fish spawns">
      <div className="absolute h-[1920px] left-0 top-0 w-[2880px]" data-name="Fish tank sketch">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFishTankSketch} />
      </div>
      <div className="absolute h-[422px] left-[1271px] top-[1356px] w-[418px]" data-name="idle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[305.54%] left-[-8.65%] max-w-none top-[-33.19%] w-[308.39%]" src={imgIdle} />
        </div>
      </div>
      <div className="absolute left-[846px] size-[425px] top-[874px]" data-name="fish">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-147.69%] max-w-none size-[255.89%] top-[-118.28%]" src={imgFish} />
        </div>
      </div>
    </div>
  );
}