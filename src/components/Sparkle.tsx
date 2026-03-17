import imgSparkle from "../../assets/sparkle.png";

export function Sparkle() {
  return (
    <div className="size-full" data-name="sparkle">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-[0.03%] max-w-none size-[190.63%] top-[-77.94%]" src={imgSparkle} />
      </div>
    </div>
  );
}
