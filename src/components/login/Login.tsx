'use client';

import { useForm } from "react-hook-form";
import Image from "next/image";
// import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginUser } from "@/utils/actions/CreateLogin";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  const router = useRouter();

  const onSubmit = async (data: LoginFormInputs) => {
    const res = await loginUser(data);

    if (!res.success) {
      toast.error(res.message || "Login failed");
      return;
    }

    const { role } = res.data.jwtPayload;

    if (role === "admin") {
      toast.success("Welcome Admin!");
      window.dispatchEvent(new Event("userLoginStatusChanged"));
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } else {
      toast.error("You are not an admin");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-700 to-black px-4 py-12">
      <div className="w-full max-w-6xl bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-xl p-10 md:flex items-center space-y-10 md:space-y-0 md:space-x-10">
        {/* Left Illustration */}
        <div className="flex-1">
          <Image
            src="https://i.postimg.cc/wBjW6bvF/banner.jpg"
            width={500}
            height={300}
            alt="Login illustration"
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* Right Login Form */}
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold text-center text-white mb-6">
            Admin Login
            <span className="block text-teal-100 text-lg mt-2 font-medium">
              Only authorized admin access
            </span>
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block mb-1 text-white font-medium">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-4 py-2 rounded-md border-none focus:ring-2 focus:ring-white bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-80"
                placeholder="admin@example.com"
              />
              {errors.email && (
                <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-white font-medium">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full px-4 py-2 rounded-md border-none focus:ring-2 focus:ring-white bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-80"
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-red-300 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-white text-teal-600 font-bold py-2 rounded-md transition shadow-md ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* <p className="text-center text-white mt-6 text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="text-white underline hover:text-teal-100">
              Create an account
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
