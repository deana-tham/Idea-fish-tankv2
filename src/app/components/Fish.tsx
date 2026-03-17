import imgFish from "../../assets/fish.png";

export function Fish() {
  return (
    <div className="size-full" data-name="fish">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-[-147.69%] max-w-none size-[255.89%] top-[-118.28%]" src={imgFish} />
      </div>
    </div>
  );
}
