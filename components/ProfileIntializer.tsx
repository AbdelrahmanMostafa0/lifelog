"use client";
import { useProfile } from "@/hooks/use-profile";
import { useEffect, useRef } from "react";

const ProfileIntializer = () => {
  const { refetch } = useProfile();
  const refetchRef = useRef(refetch);
  useEffect(() => {
    refetchRef.current();
  }, []);
  return null;
};

export default ProfileIntializer;
