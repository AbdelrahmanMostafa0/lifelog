import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "@/services/user.service";
import { useUserStore } from "@/stores/user.store";
import { useEffect } from "react";

type ProfileStatus = "loading" | "updating" | "success" | "error";

export const useProfile = () => {
  const user = useUserStore((s) => s.user);
  const setUser = useUserStore((s) => s.setUser);
  const clearUser = useUserStore((s) => s.clearUser);

  const query = useQuery({
    queryKey: ["profile"],
    queryFn: () => getUserProfile(),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  useEffect(() => {
    if (query.data) {
      setUser(query.data.data.data);
    }
  }, [query.data, setUser]);
  useEffect(() => {
    if (query.isError) {
      clearUser();
    }
  }, [query.isError, clearUser]);

  const status: ProfileStatus = query.isPending
    ? "loading"
    : query.isError
      ? "error"
      : query.isFetching
        ? "updating"
        : "success";

  return { status, user, refetch: query.refetch };
};
