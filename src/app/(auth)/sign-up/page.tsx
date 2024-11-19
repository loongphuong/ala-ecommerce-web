"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  fullName: z.string(),
});

export default function SignUpPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="w-4/5 h-[650px] max-w-[1000px] bg-primary flex flex-row shadow-xl rounded-[2px]">
      <div className="w-1/2 flex justify-center items-center flex-col">
        <h2 className="text-[3rem] text-white">Welcome Back!</h2>
        <p className="text-center text-white">
          To keep connected with us please login with your personal info
        </p>
        <Link
          href="/sign-in"
          className="mt-5 text-white font-bold uppercase py-2.5 px-6 border-[thin] border-solid border-[white] rounded-xl"
        >
          Sign In
        </Link>
      </div>
      <div className="w-1/2 bg-white px-10 py-0">
        <h2 className="text-[3rem] text-center mt-[50px] mb-5">
          Create Account
        </h2>
        <div id="socials" className="flex justify-center">
          <a href="#" className="mx-4 rounded-[50%] shadow-lg">
            <FaFacebook size="25" />
          </a>
          <a href="#" className="mx-4 rounded-[50%] shadow-lg">
            <FaGoogle size="25" />
          </a>
          <a href="#" className="mx-4 rounded-[50%] shadow-lg">
            <FaApple size="25" />
          </a>
        </div>
        <p className="text-center my-5 text-sm text-gray-500">
          or use your email for registration
        </p>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Full Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" {...field} type="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center">
                <Button
                  className="w-1/2 bg-primary font-bold uppercase"
                  type="submit"
                >
                  Sign Up
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
