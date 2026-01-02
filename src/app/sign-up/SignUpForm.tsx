"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa6";

const SignUpForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }
    if (!password.trim()) {
      toast.error("Password is required");
      return;
    }
    toast.success("SignIn successful");
    router.push("/jobs");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="email"
          name="email"
          className="w-full p-3 placeholder:font-semibold border border-gray-200 outline-none "
          placeholder="Email address"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <input
          type="password"
          name="password"
          className="w-full p-3 placeholder:font-semibold border border-gray-200 outline-none "
          placeholder="Password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <button type="submit" className="btn mx-auto">
          Sign Up <FaArrowRight />
        </button>{" "}
      </form>
      <p className="py-2 text-sm text-center">
        Have an account?
        <Link href={"/sign-in"} className="text-likeGreen font-bold">
          {" "}
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
