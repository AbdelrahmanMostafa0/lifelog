"use client";
import { useUserStore } from "@/stores/user.store";
export default function Home() {
  const user = useUserStore((state) => state.user);
  return (
    <div className="w-full h-dvh flex flex-col items-center justify-center">
      <h1 className="text-display">Lifelog</h1>
      <p className="text-body">Track your life and achieve your goals</p>
      <p className="text-body">{user?.name}</p>
    </div>
  );
}
