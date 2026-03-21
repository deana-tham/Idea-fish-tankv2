import imgFishTankSketch from "../assets/Fish tank sketch.png";
import imgFish from "../assets/fish.png";
import imgEel from "../assets/fish1.png";
import imgCrab from "../assets/fish3.png";
import imgHover from "../assets/hover.png";

export default function FishIdeaCompleted() {
  return (
    <div className="relative size-full" data-name="fish idea completed">
      <div className="absolute h-[1920px] left-0 top-0 w-[2880px]" data-name="Fish tank sketch">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFishTankSketch} />
      </div>
      <div className="absolute left-[723px] size-[466px] top-[830px]" data-name="fish">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-147.69%] max-w-none size-[255.89%] top-[-118.28%]" src={imgFish} />
        </div>
      </div>
      <div className="absolute left-[1045px] size-[704px] top-0" data-name="eel">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-[238.35%] top-0" src={imgEel} />
        </div>
      </div>
      <div className="absolute left-[1695px] size-[605px] top-[458px]" data-name="crab">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-17.72%] max-w-none size-[269.26%] top-[-138.59%]" src={imgCrab} />
        </div>
      </div>
      <div className="absolute left-[1241px] size-[397px] top-[1302px]" data-name="hover">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-178.77%] max-w-none size-[278.82%] top-[-19.55%]" src={imgHover} />
        </div>
      </div>
      <div className="absolute left-[569px] size-[773px] top-[676px]" data-name="sparkle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[0.03%] max-w-none size-[190.63%] top-[-77.94%]" src={imgHover} />
        </div>
      </div>
    </div>
  );
}