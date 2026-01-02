import Banner from "@/components/Banner";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <section className="min-h-screen">
      {/* Banner */}
      <Banner title="Sign In" />
      <div className="container">
        <div className="py-10 flex flex-col gap-5 items-center">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-3xl font-semibold">Sign Up</h2>
            <p className="mt-2 text-center text-gray-700">
              Discover the latest in Job with CareerJob. <br /> Your go-to
              source for insights, trends, and Internship.
            </p>
          </div>
          <div className="max-w-100">
            {/* Form */}
            <SignUpForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
