import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { CustomFormField } from "@/components/CustomFormField";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import { Link } from "react-router-dom";

//validation schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default function LoginPage() {
  //initialize the form
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //handle form submission
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsLoading(true);
    console.log("Form Values:", values);

    //Simulate API Call
    //Call API here
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  }

  return (
    <div className="min-h-screen bg-white/55 flex justify-center items-center py-20">
      <div className="bg-green-400 p-12 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          Welcome Back
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <CustomFormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="email@example.com"
              type="email"
            />

            <CustomFormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-4 pt-5 pb-5 rounded transition duration-300 mt-2 text-base"
              onClick={form.handleSubmit(onSubmit)}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Form>

        <p className="text-center text-sm text-slate-600 mt-8">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-slate-900 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
