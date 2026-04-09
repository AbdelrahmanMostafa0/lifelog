"use client";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { format } from "date-fns";
import { Input } from "../ui/input";
import { useForm, useWatch } from "react-hook-form";
import TagsDialog from "./TagsDialog";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tag } from "../ui/tag";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createLog } from "@/services/logs.service";
import ApiError from "../ui/api-error";
const schema = z.object({
  title: z.string().optional(),
  content: z.string().min(4, "Content must be at least 4 characters"),
  tags: z.array(z.string()).optional(),
  mood: z.string().optional(),
});
const LogForm = () => {
  const queryClient = useQueryClient();
  const {
    register,
    setValue,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
      mood: "",
    },
  });
  const {
    mutate: createLogMutation,
    isError,
    isPending,
    error,
  } = useMutation({
    mutationFn: createLog,
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries({ queryKey: ["logs-feed"] });
    },
  });
  const mood = useWatch({ control, name: "mood" });

  const feelings = ["rough", "okay", "good", "great", "calm"];
  return (
    <form
      noValidate
      onSubmit={handleSubmit((data) => createLogMutation(data))}
      className="w-full space-y-0 max-w-2xl"
    >
      <Card className="rounded-b-none flex justify-between items-center py-5">
        <Input
          variant="ghost"
          type="text"
          placeholder="New entry"
          {...register("title")}
        />
        <span className="text-xs uppercase text-accent">
          {format(new Date(), " MMMM d")}
        </span>
      </Card>
      <div className="divider" />
      <Card className="w-full max-w-2xl rounded-none pb-0 space-y-4 gap-0">
        <textarea
          className="w-full min-h-42 resize-none p-2 focus:outline-none placeholder:font-display placeholder:font-italic text-xl"
          placeholder="What happened today?"
          {...register("content")}
        />
      </Card>
      <div className="divider"></div>
      <Card className="rounded-none space-y-4 flex flex-col">
        <span className="text-sm ">
          How are you feeling?{" "}
          <span className="text-xs text-secondary">- Optional</span>
        </span>
        <div className="flex flex-wrap gap-2">
          {feelings.map((feeling) => (
            <Tag
              className="cursor-pointer"
              onClick={() => {
                if (mood === feeling) {
                  setValue("mood", "");
                } else {
                  setValue("mood", feeling);
                }
              }}
              selected={feeling === mood}
              key={feeling}
            >
              {feeling}
            </Tag>
          ))}
        </div>
      </Card>
      <div className="divider"></div>
      <Card className="flex w-full items-center justify-between rounded-t-none py-4">
        <div className="flex flex-1 items-center gap-1.5">
          <TagsDialog
            setSelectedTags={(tags) => {
              setValue("tags", tags);
            }}
          />
        </div>
        <Button type="submit" className="" disabled={isPending}>
          {isPending ? "Saving..." : "Save"}
        </Button>
      </Card>
      {errors.content && (
        <p className="text-red-500">{errors.content.message}</p>
      )}
      {isError && <ApiError className="mt-4" error={error} />}
    </form>
  );
};
export default LogForm;
