"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { testomonialSchema, TestomonialValues } from "@/lib/validation";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { UploadButton } from "@/lib/uploadthing";
import { useState } from "react";
import { Plus } from "lucide-react";
import LoadingButton from "@/components/LodingButton";
import { toast } from "sonner";

export default function CareteTestomoni() {
  const form = useForm<TestomonialValues>({
    resolver: zodResolver(testomonialSchema),
    defaultValues: {
      comment: "",
      name: "",
      vidio: "",
    },
  });

  const [usr, setu] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (value: TestomonialValues) => {
    try {
      setIsLoading(true); // start loading

      const response = await axios.post("/api/feedback", {
        comment: value.comment,
        name: value.name,
        vidio: usr,
      });

      if (response.status === 200) {
        toast.success("✅ Feedback submitted successfully!");
      } else {
        toast.error("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Feedback error:", error);
      toast.error("❌ Failed to submit feedback.");
    } finally {
      setIsLoading(false); // end loading
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button>
          <Plus /> Create Your Own Review&lsquo;s
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Testimonial</DialogTitle>
          <DialogDescription>
            Please provide the required information and upload a video
            testimonial.
          </DialogDescription>
        </DialogHeader>

        <UploadButton
          endpoint="imageUploader"
          className="rounded-lg bg-orange-600 p-4"
          onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res[0].ufsUrl);
            setu(res[0].ufsUrl);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {/* Comment Field */}

            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comment</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Write something..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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

            <LoadingButton className="w-full" loading={isLoading}>
              Submit
            </LoadingButton>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
