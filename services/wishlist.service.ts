import api from "@/lib/axios";

export const addToWishlist = async (email: string) => {
  return api.post("/wishlist", { email });
};
