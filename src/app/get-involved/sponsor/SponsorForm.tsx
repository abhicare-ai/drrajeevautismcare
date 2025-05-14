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

export default function SponsorForm({ sponName }: any) {
  const form = useForm<SponsorValues>({
    resolver: zodResolver(sponsorSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      Country: "",
      state: "",
      amount: 5500,
    },
  });

  const onSubmit = async (value: SponsorValues) => {
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
          // verify payment
          const res = await fetch("/api/verifySponsorOrder", {
            method: "POST",
            body: JSON.stringify({
              orderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            }),
          });
          const data = await res.json();

          if (data.isOk) {
            // do whatever page transition you want here as payment was successful
            alert("Payment successful");
          } else {
            alert("Payment failed");
          }
        },
      };

      const payment = new (window as any).Razorpay(paymentData);
      payment.open();
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

              <Button className="w-full">Submit</Button>
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
