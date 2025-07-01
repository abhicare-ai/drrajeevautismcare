/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { sponsorSchema, SponsorValues } from "@/lib/validation";
import { Input } from "@/components/ui/input";

import axios from "axios";
import Script from "next/script";
import { useState } from "react";
import LoadingButton from "@/components/LodingButton";
import { toast } from "sonner";

export default function SponsorForm({ sponName }: any) {
  const form = useForm<SponsorValues>({
    resolver: zodResolver(sponsorSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      Country: "",
      state: "",
      amount: 2000,
    },
  });

  const [loading, seloading] = useState(false);



  const onSubmit = async (value: SponsorValues) => {
    try {
      seloading(true); // start loading

      const { data } = await axios.post("/api/sponsor", {
        name: value.name,
        phoneNumber: value.phoneNumber,
        Country: value.Country,
        state: value.state,
        amount: value.amount * 100,
      });

      if (data.orderId) {
        const paymentData = {
          key: process.env.NEXT_PUBLIC_RAZOR_KEY,
          order_id: data.orderId,

          name: "Dr.Rajeev's Autism Care",
          description: "Sponsorship Payment",
          image: "https://www.rajeevclinic.com/assets/images/web_logo_2.png",

          handler: async function (response: any) {
            try {
              const res = await fetch("/api/verifySponsorOrder", {
                method: "POST",
                body: JSON.stringify({
                  orderId: response.razorpay_order_id,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpaySignature: response.razorpay_signature,
                }),
              });

              const result = await res.json();

              if (result.isOk) {
                toast.success("🎉 Payment successful!");
              } else {
                toast.error("❌ Payment verification failed.");
              }
            } catch (err) {
              console.error("Verification Error:", err);
              toast.error(
                "❌ Error verifying payment. Please contact support.",
              );
            }
          },
          prefill: {
            name: value.name,
            contact: value.phoneNumber,
          },
          theme: {
            color: "#3399cc",
          },
        };

        const payment = new (window as any).Razorpay(paymentData);
        payment.open();
      } else {
        toast.error("Failed to initiate payment. Please try again.");
      }
    } catch (error) {
      console.error("Sponsor Submit Error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      seloading(false); // stop loading regardless of outcome
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger className="w-full">
          <Button className="w-full">Sponsor {sponName}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sponsor a Child</DialogTitle>
            <DialogDescription>
              Join us in supporting {sponName}, a child in need of care and
              specialized therapy. Your sponsorship will make a significant
              impact on their life by providing access to essential services,
              therapy, and educational resources. Together, we can make a
              difference.
            </DialogDescription>
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

              {/* Amount Field */}
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter amount"
                        {...field}
                        type="number"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <LoadingButton className="w-full" loading={loading}>
                Submit
              </LoadingButton>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <Script
        type="text/javascript"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
    </>
  );
}
