"use client";

import { usePathname, redirect } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

const RouteGuard = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { session, loading } = useAuth();

  // Only redirect if loading is false
  if (loading)
    return (
      <div className="flex flex-1 justify-center items-center px-8 w-full">
        Loading...
      </div>
    );

  // If user is authenticated and on home, login or signup page
  if (session) {
    if (pathname === "/" || pathname === "/login" || pathname === "/signup") {
      redirect("/bookmarks");
    }
  } else {
    // If they are not authenticated and on bookmarks
    if (pathname === "/bookmarks") {
      redirect("/login");
    }
  }

  return <>{children}</>;
};

export default RouteGuard;
