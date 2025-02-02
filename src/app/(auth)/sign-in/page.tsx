"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
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
});

export default function SignInPage() {
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
      <div className="w-1/2 bg-white px-10 py-0">
        <h2 className="text-[3.6rem] text-center mt-[50px] mb-5">Sign in</h2>
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
          or use your account
        </p>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        type="email"
                        className="focus:ring-0 focus:ring-offset-0"
                      />
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
              <p className="text-end text-sm text-gray-400">
                Forgot your password?
              </p>
              <div className="flex justify-center">
                <Button
                  className="w-1/2 bg-primary font-bold uppercase"
                  type="submit"
                >
                  Sign In
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center flex-col">
        <h2 className="text-[3.6rem] text-white">Hello, friend</h2>
        <p className="text-center text-white">
          Enter your personal details and start journey with us
        </p>
        <Link
          href="/sign-up"
          className="mt-5 text-white font-bold uppercase py-2.5 px-6 border-[thin] border-solid border-[white]  rounded-[25px]"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
