import imgEel from "../../assets/fish1.png";

export function FishEel() {
  return (
    <div className="size-full" data-name="eel">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-[238.35%] top-0" src={imgEel} />
      </div>
    </div>
  );
}
