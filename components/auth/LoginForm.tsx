"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { loginUser } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import ApiError from "../ui/api-error";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/stores/user.store";
import GoogleAuthBtn from "./GoogleAuthBtn";
import { useProfile } from "@/hooks/use-profile";

const schema = z.object({
  email: z.email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof schema>;

const LoginForm = () => {
  const { refetch: profileRefetch } = useProfile();
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(schema),
  });
  const {
    mutate: onLogin,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setUser(data.data.data);
      profileRefetch();
      router.push("/home");
    },
  });
  const onSubmit = (data: LoginFormData) => {
    onLogin(data);
  };

  return (
    <Card className="flex flex-col gap-6 w-full max-w-md p-6 shadow-md">
      <div className="text-center space-y-1">
        <h1 className="text-center">Lifelog</h1>
        <p className="text-center text-sm text-gray-500">
          Continue your curated journey
        </p>
      </div>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="space-y-1">
          <p className="font-semibold text-accent">Email</p>
          <Input
            type="email"
            placeholder="john.doe@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-accent">Password</p>
            <Link href="/auth/forgot-password" className="text-xs text-accent">
              Forgot password?
            </Link>
          </div>
          <Input
            type="password"
            placeholder="••••••••"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password.message}</p>
          )}
        </div>
        <Button disabled={isPending} type="submit" className="rounded-md">
          {isPending ? "Logging in..." : "Login"}
        </Button>
        {isError && <ApiError error={error} />}
      </form>

      <div className="flex items-center gap-3">
        <div className="flex-1 border-t border-border" />
        <span className="text-meta text-secondary">or</span>
        <div className="flex-1 border-t border-border" />
      </div>

      <GoogleAuthBtn />

      <div className="text-center text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <Link href="/auth/register" className="text-accent font-bold">
          Sign up
        </Link>
      </div>
    </Card>
  );
};

export default LoginForm;
