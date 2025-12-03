"use client";

import { usePathname, redirect } from "next/navigation";
import { useAuth } from "@/hooks/context-hooks/useAuth";
import Spinner from "@/components/ui/Spinner";

const RouteGuard = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { session, isLoading } = useAuth();

  // Only redirect if not loading
  if (isLoading)
    return (
      <div className="flex flex-1 justify-center items-center px-8 w-full">
        <Spinner theme="light" size="large" />
      </div>
    );

  if (session) {
    if (pathname === "/" || pathname === "/login" || pathname === "/signup") {
      redirect("/bookmarks");
    }
  } else {
    if (pathname === "/bookmarks" || pathname === "/account") {
      redirect("/login");
    }
  }

  return <>{children}</>;
};

export default RouteGuard;
