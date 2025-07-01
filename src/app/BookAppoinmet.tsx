"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { appoinmetSchema, AppoinmetValues } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { appo } from "./actions";
import { useTransition } from "react";
import LoadingButton from "@/components/LodingButton";
import { toast } from "sonner";

export default function BookAppoinmet({ open, onclose }: any) {
  const form = useForm<AppoinmetValues>({
    resolver: zodResolver(appoinmetSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      Country: "",
      state: "",
    },
  });
  function handlerOpenChange() {
    onclose();
  }
  const [ispending, startTransation] = useTransition();

 async function onSubmit(value: AppoinmetValues) {
  startTransation(async () => {
    try {
      const data = await appo(value);

      if (data) {
        toast.success("Your data was sent to the counselor. Please wait for a call!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }

      form.reset();
      onclose();
    } catch (error) {
      console.error("Server Error:", error);
      toast.error("Internal server error. Please try again.");
    }
  });
}

  return (
    <Dialog open={open} onOpenChange={handlerOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Your Online Site!</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Number Field */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Country Field */}
            <FormField
              control={form.control}
              name="Country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your country" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* State Field */}
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your state" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <LoadingButton loading={ispending} type="submit" className="w-full">
              Submit
            </LoadingButton>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
