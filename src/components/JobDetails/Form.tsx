"use client";

import { FormEvent } from "react";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa6";

const Form = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const message = formData.get("message");
    const name = formData.get("name");
    if (!email || !message || !name) {
      return toast.error("All fields are required");
    }
    toast.success("Form successfully submitted");
    e.currentTarget.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        name="name"
        className="w-full bg-[#F5F7FC] outline-none p-3 placeholder:font-semibold"
        placeholder="Your Full Name"
      />
      <input
        type="email"
        name="email"
        className="w-full bg-[#F5F7FC] outline-none p-3 placeholder:font-semibold"
        placeholder="Email Address"
      />

      <textarea
        name="message"
        className="w-full bg-[#F5F7FC] outline-none p-3 placeholder:font-semibold h-50 resize-none"
        placeholder="Write comments"
      ></textarea>
      <button className="btn">
        Send Message <FaArrowRight />
      </button>
    </form>
  );
};

export default Form;
