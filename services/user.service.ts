import api from "@/lib/axios";

export const getUserProfile = () => {
  return api.get("/user/");
};
