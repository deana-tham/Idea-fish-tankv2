import imgFishTankSketch from "../assets/Fish tank sketch.png";
import imgHover from "../assets/hover.png";

export default function ClickIdea() {
  return (
    <div className="relative size-full" data-name="click idea">
      <div className="absolute h-[1920px] left-0 top-0 w-[2880px]" data-name="Fish tank sketch">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFishTankSketch} />
      </div>
      <div className="absolute left-[1217px] size-[445px] top-[1293px]" data-name="hover">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-178.77%] max-w-none size-[278.82%] top-[-19.55%]" src={imgHover} />
        </div>
      </div>
      <div className="absolute h-[999px] left-[812px] top-[294px] w-[1255px]" data-name="sticky note">
        <div className="absolute bg-[#ffda60] inset-0 rounded-[40px]" />
        <p className="absolute font-['Figma_Hand:Regular',sans-serif] inset-[20.11%_49.97%_74.6%_6.66%] leading-[normal] not-italic text-[60px] text-black whitespace-nowrap">write your idea here:</p>
        <p className="absolute font-['Figma_Hand:Regular',sans-serif] inset-[9.04%_59.29%_85.68%_6.98%] leading-[normal] not-italic text-[60px] text-black whitespace-nowrap">{`Title (optional): `}</p>
        <div className="absolute inset-[15.34%_6.94%_84.66%_6.98%]">
          <div className="absolute inset-[-2.5px_-0.23%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1085.32 5">
              <path d="M2.5 2.5H1082.82" id="Vector 1" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[115px] left-[1574px] top-[1074px] w-[380px]" data-name="save button">
        <div className="absolute bg-[#faa405] inset-0 rounded-[40px]" />
        <p className="absolute font-['Figma_Hand:Regular',sans-serif] inset-[13.91%_31.05%] leading-[normal] not-italic text-[60px] text-black whitespace-nowrap">Save</p>
      </div>
      <div className="absolute h-[115px] left-[902px] top-[1067px] w-[380px]" data-name="close button">
        <div className="absolute bg-[#d9d9d9] inset-0 rounded-[40px]" />
        <p className="absolute font-['Figma_Hand:Regular',sans-serif] inset-[13.91%_29.74%_13.91%_29.47%] leading-[normal] not-italic text-[60px] text-black whitespace-nowrap">close</p>
      </div>
    </div>
  );
}