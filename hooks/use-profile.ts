import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserProfile } from "@/services/user.service";
import { useUserStore } from "@/stores/user.store";
import { useEffect } from "react";
import { logoutUser } from "@/services/auth.service";
import { useRouter } from "next/navigation";

type ProfileStatus = "loading" | "updating" | "success" | "error";

export const useProfile = () => {
  const user = useUserStore((s) => s.user);
  const setUser = useUserStore((s) => s.setUser);
  const clearUser = useUserStore((s) => s.clearUser);
  const { replace } = useRouter();
  const query = useQuery({
    queryKey: ["profile"],
    queryFn: () => getUserProfile(),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  const { mutate: logout } = useMutation({
    mutationFn: logoutUser,
  });
  useEffect(() => {
    if (query.data) {
      setUser(query.data.data.data);
    }
  }, [query.data, setUser]);
  useEffect(() => {
    if (query.isError) {
      clearUser();
      if (window.location.pathname.startsWith("/home")) {
        replace("/auth/login");
      }
    }
  }, [query.isError, clearUser, replace]);

  const status: ProfileStatus = query.isPending
    ? "loading"
    : query.isError
      ? "error"
      : query.isFetching
        ? "updating"
        : "success";

  return { status, user, refetch: query.refetch, logout };
};
