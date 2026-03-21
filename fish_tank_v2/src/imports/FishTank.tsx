import imgFishTankSketch from "../assets/Fish tank sketch.png";
import imgIdle from "../assets/idle.png";

function FishTank1() {
  return (
    <div className="absolute h-[1920px] left-0 top-0 w-[2880px]" data-name="Fish tank">
      <div className="absolute h-[1920px] left-0 top-0 w-[2880px]" data-name="Fish tank sketch">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFishTankSketch} />
      </div>
      <div className="absolute h-[470px] left-[1207px] top-[1313px] w-[466px]" data-name="idle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[305.54%] left-[-8.65%] max-w-none top-[-33.19%] w-[308.39%]" src={imgIdle} />
        </div>
      </div>
    </div>
  );
}

export default function FishTank() {
  return (
    <div className="relative size-full" data-name="Fish tank">
      <FishTank1 />
    </div>
  );
}