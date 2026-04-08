import { useMutation } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import { googleLogin as googleLoginApi } from "@/services/auth.service";
import ApiError from "../ui/api-error";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/stores/user.store";
import { useProfile } from "@/hooks/use-profile";
const GoogleAuthBtn = () => {
  const { refetch: profileRefetch } = useProfile();
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);
  const { mutate, error, isError } = useMutation({
    mutationFn: (access_token: string) => googleLoginApi({ access_token }),
    onSuccess: (data) => {
      setUser(data.data.data);
      profileRefetch();
      router.push("/");
    },
  });
  const googleLogin = useGoogleLogin({
    onSuccess: (res) => {
      const { access_token } = res;
      mutate(access_token);
    },
  });
  return (
    <div className="space-y-2">
      <Button
        onClick={() => googleLogin()}
        type="button"
        variant="secondary"
        className="w-full rounded-md gap-2"
      >
        <GoogleSvg />
        Continue with Google
      </Button>
      {isError && <ApiError error={error} className="text-center" />}
    </div>
  );
};

export default GoogleAuthBtn;
export const GoogleSvg = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332Z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58Z"
      />
    </svg>
  );
};
