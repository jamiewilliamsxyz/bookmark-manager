import { use } from "react";
import { AuthContext } from "@/context/AuthContext";

export const useAuth = () => {
  const context = use(AuthContext);
  if (!context) throw new Error("useAuth needs to be used in AuthProvider");

  return context;
};
