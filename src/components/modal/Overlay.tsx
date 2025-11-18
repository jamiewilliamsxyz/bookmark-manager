import type { ModalProps } from "@/types";

const Overlay = ({ children }: ModalProps) => {
  return (
    <div className="z-40 opacity-75 blur-[3px] pointer-events-none flex-1 flex flex-col">
      {children}
    </div>
  );
};

export default Overlay;
