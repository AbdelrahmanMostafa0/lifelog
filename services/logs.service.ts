import api from "@/lib/axios";

export const createLog = (data: unknown) => {
  return api.post("/logs", data);
};

export const getLogs = () => {
  return api.get("/logs");
};
