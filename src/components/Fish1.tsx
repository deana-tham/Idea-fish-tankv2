import imgFish1 from "../../assets/fish1.png";

export function Fish1() {
  return (
    <div className="size-full" data-name="fish1">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-[238.35%] top-0" src={imgFish1} />
      </div>
    </div>
  );
}
