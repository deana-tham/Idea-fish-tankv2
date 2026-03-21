import svgPaths from "./svg-85658g0gh1";
import imgFishTankSketch from "../assets/Fish tank sketch.png";
import imgIdle from "../assets/idle.png";
import imgFish from "../assets/fish.png";

export default function FishIdeas() {
  return (
    <div className="relative size-full" data-name="fish ideas">
      <div className="absolute h-[1920px] left-0 top-0 w-[2880px]" data-name="Fish tank sketch">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFishTankSketch} />
      </div>
      <div className="absolute h-[436px] left-[1224px] top-[1348px] w-[432px]" data-name="idle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[305.54%] left-[-8.65%] max-w-none top-[-33.19%] w-[308.39%]" src={imgIdle} />
        </div>
      </div>
      <div className="absolute left-[702px] size-[466px] top-[727px]" data-name="fish">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-147.69%] max-w-none size-[255.89%] top-[-118.28%]" src={imgFish} />
        </div>
      </div>
      <div className="absolute h-[1015px] left-[1224px] top-[333px] w-[1164px]" data-name="sticky note">
        <div className="absolute bg-[#ffda60] inset-0 rounded-[40px]" />
        <p className="absolute font-['Figma_Hand:Regular',sans-serif] inset-[20.11%_49.97%_74.6%_6.66%] leading-[normal] not-italic text-[60px] text-black whitespace-nowrap">write your idea here:</p>
        <p className="absolute font-['Figma_Hand:Regular',sans-serif] inset-[9.04%_59.29%_85.68%_6.98%] leading-[normal] not-italic text-[60px] text-black whitespace-nowrap">{`Title (optional): `}</p>
        <div className="absolute inset-[15.34%_6.94%_84.66%_6.98%]">
          <div className="absolute inset-[-2.5px_-0.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1006.98 5">
              <path d="M2.5 2.5H1004.48" id="Vector 1" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[1289px] size-[130px] top-[1179px]" data-name="check">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 130">
          <circle cx="65" cy="65" fill="var(--fill-0, #18B718)" id="Ellipse 1" r="65" />
        </svg>
        <div className="absolute inset-[20.1%_20.1%_19.61%_20.1%] overflow-clip" data-name="Check" />
        <div className="absolute flex inset-[23.04%_21.62%_23.52%_21.57%] items-center justify-center">
          <div className="flex-none h-[96px] rotate-[7.67deg] w-[104px]">
            <div className="relative size-full">
              <div className="absolute inset-[-16.35%_-15.09%_-24.41%_-15.09%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.2762 86.1107">
                  <path d={svgPaths.p3b818100} id="Vector 2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="20" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[79px] left-[1755px] top-[1193px] w-[262px]" data-name="close button">
        <div className="absolute bg-[#d9d9d9] inset-0 rounded-[40px]" />
        <p className="absolute font-['Figma_Hand:Regular',sans-serif] inset-[13.91%_29.74%_13.91%_29.47%] leading-[normal] not-italic text-[60px] text-black whitespace-nowrap">close</p>
      </div>
      <div className="absolute h-[104px] left-[2047px] top-[1179px] w-[328px]" data-name="delete button">
        <div className="absolute bg-[#ed3838] inset-0 rounded-[40px]" />
        <p className="absolute font-['Figma_Hand:Regular',sans-serif] inset-[22.15%_28.42%_22.15%_27.14%] leading-[normal] not-italic text-[60px] text-black whitespace-nowrap">Delete</p>
      </div>
    </div>
  );
}