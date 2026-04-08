"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";

const schema = z.object({
  email: z.email("Enter a valid email address"),
});

type ForgotPasswordFormData = z.infer<typeof schema>;

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: ForgotPasswordFormData) => {
    console.log(data);
  };

  return (
    <Card className="flex flex-col gap-6 w-full max-w-md p-8 shadow-md">
      <div className="flex flex-col items-center gap-3">
        <Image
          src="/images/icons/key-icon.svg"
          alt="Key icon"
          width={35}
          height={18}
        />
        <div className="text-center space-y-1">
          <h1 className="text-center">Recovery</h1>
          <p className="text-center text-sm text-gray-500">
            Enter your email to reset access
          </p>
        </div>
      </div>

      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="space-y-1">
          <p className="font-semibold text-accent">Email Address</p>
          <Input
            type="email"
            placeholder="name@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
        <Button type="submit" className="rounded-md">
          Send Reset Link
        </Button>
      </form>

      <div className="text-center text-sm text-gray-500">
        <Link
          href="/auth/login"
          className="inline-flex items-center gap-1 text-secondary hover:text-primary"
        >
          ← Back to Login
        </Link>
      </div>
    </Card>
  );
};

export default ForgotPasswordForm;
