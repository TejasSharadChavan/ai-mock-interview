"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import FormField from "./FormField";
import { useRouter } from "next/navigation";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  // 1. Define your form.
  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if(type === "sign-up") {
        toast.success(`Account created successfully! Please sign in`);
        router.push('/sign-in');

      }else{
        toast.success(`Sign in successfully!`);
        router.push('/');      }
    } catch (error) {
      console.log(error);
      toast.error(`There was an error ${error}`);
    }
  }

  const isSignin = type === "sign-in";
  return (
    <div className="card-border lg:min-w-[566px] ">
      <div className="flex flex-col gap-6 card px-10 py-14">
        <div className="flex flex-row gap-2 justify-center">
          <Image src={"./logo.svg"} width={38} height={32} alt="logo" />
          <h2 className="text-primary-100">PrepWise</h2>
        </div>
        <h3>Practise Job interview with AI</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full form mt-4"
          >
            {!isSignin && (
              <FormField control={form.control} name="name" label="Name" placeholder="Enter your name" type="text" /> 
            )}
            <FormField control={form.control} name="email" label="Email" placeholder="Enter email address" type="email" /> 
            <FormField control={form.control} name="password" label="Password" placeholder="Enter your password" type="password" /> 
            <Button type="submit" className="btn">
              {isSignin ? "Sign in" : "Create new Account"}
            </Button>
          </form>
        </Form>
        <p className="text-center">
          {isSignin ? "No account yet? " : "Have an account already? "}
          <Link href={isSignin ? "/sign-up" : "/sign-in"}>
            {isSignin ? "Sign up" : "Sign in"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
