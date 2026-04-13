"use client";
import { useProfile } from "@/hooks/use-profile";
import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

const ProfileIntializer = () => {
  const { refetch, status } = useProfile();
  const pathname = usePathname();
  const { replace } = useRouter();
  const refetchRef = useRef(refetch);
  useEffect(() => {
    refetchRef.current();
  }, []);
  console.log("status", status);
  useEffect(() => {
    if (status === "error") {
      if (pathname.startsWith("/home")) {
        replace("/auth/login");
      }
    }
  }, [status, pathname, replace]);
  return null;
};

export default ProfileIntializer;
