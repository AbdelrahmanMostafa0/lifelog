"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { registerUser } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import ApiError from "../ui/api-error";
import { useRouter } from "next/navigation";
import GoogleAuthBtn from "./GoogleAuthBtn";
import { useUserStore } from "@/stores/user.store";
import { useProfile } from "@/hooks/use-profile";

const schema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.email("Enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[0-9]/, "Must contain at least one number"),
  // terms: z.literal(true, {
  //   message: "You must accept the terms and privacy policy",
  // }),
});

type RegisterFormData = z.infer<typeof schema>;

const RegisterForm = () => {
  const { refetch: profileRefetch } = useProfile();
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(schema),
  });
  const {
    mutate: onRegister,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      setUser(data.data.data);
      profileRefetch();
      router.push("/home");
    },
  });
  const onSubmit = (data: RegisterFormData) => {
    onRegister(data);
  };

  return (
    <Card className="flex flex-col gap-6 w-full max-w-md p-6 shadow-md">
      <div className="text-center space-y-1">
        <h1 className="text-center">Start Your Archive</h1>
        <p className="text-center text-sm text-gray-500">
          Begin your curated journey
        </p>
      </div>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="space-y-1">
          <p className="font-semibold text-accent">Full name</p>
          <Input placeholder="John Doe" {...register("name")} />
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
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
          <p className="font-semibold text-accent">Password</p>
          <Input
            type="password"
            placeholder="••••••••"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password.message}</p>
          )}
        </div>
        {/* <div className="flex items-start gap-2">
          <input
            id="terms"
            type="checkbox"
            className="mt-0.5 accent-[var(--color-accent)]"
            {...register("terms")}
          />
          <label htmlFor="terms" className="text-sm text-gray-500 leading-snug">
            I agree to the{" "}
            <Link href="/terms" className="text-accent font-bold">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-accent font-bold">
              Privacy Policy
            </Link>
          </label>
        </div> */}
        {/* {errors.terms && (
          <p className="text-xs text-red-500 -mt-3">{errors.terms.message}</p>
        )} */}
        <Button type="submit" disabled={isPending} className="rounded-md">
          {isPending ? "Creating account..." : "Create account"}
        </Button>
        {isError && <ApiError error={error} className="text-center" />}
      </form>
      <div className="flex items-center gap-3">
        <div className="flex-1 border-t border-border" />
        <span className="text-meta text-secondary">or</span>
        <div className="flex-1 border-t border-border" />
      </div>

      <GoogleAuthBtn />

      <div className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-accent font-bold">
          Login
        </Link>
      </div>
    </Card>
  );
};

export default RegisterForm;
