import type { ModalProps } from "@/types";

const ModalContainer = ({ children }: ModalProps) => {
  return <div className="z-50 fixed top-36 self-center">{children}</div>;
};

export default ModalContainer;
