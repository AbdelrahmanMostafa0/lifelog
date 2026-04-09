import api from "@/lib/axios";

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return api.post("/auth/register", data);
};

export const loginUser = async (data: { email: string; password: string }) => {
  return api.post("/auth/login", data);
};

export const googleLogin = async (data: { access_token: string }) => {
  return api.post("/auth/google", data);
};
export const logoutUser = async () => {
  return api.post("/auth/logout");
};
