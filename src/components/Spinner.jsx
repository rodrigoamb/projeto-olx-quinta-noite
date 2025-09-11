import { CircleNotchIcon } from "@phosphor-icons/react";

export default function Spinner() {
  return (
    <div className=" h-screen flex justify-center items-center flex-col">
      <CircleNotchIcon size={60} className="text-[#A523FF] animate-spin" />
      <p className="text-[#A523FF]">Carregando...</p>
    </div>
  );
}
