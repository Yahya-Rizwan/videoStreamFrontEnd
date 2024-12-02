import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "./Button.jsx";
import Input from "./Input.jsx";
import Logo from "./Logo.jsx";
import { register as signUp } from "../services/auth.js";

function SignUp() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    setError("");
    try {
      const response = await signUp(data);
      console.log(response);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-5 rounded-xl shadow-lg bg-white text-gray-800 mt-8">
      <div className="flex justify-center mb-2">
        <Logo className="w-16 h-16 rounded-lg" />
      </div>
      <h2 className="text-2xl font-bold text-center text-gray-600">
        Create your account
      </h2>
      {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
        <Input
          placeholder="Full Name"
          type="text"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          {...register("FullName", { required: true })}
        />
        <Input
          placeholder="Username"
          type="text"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          {...register("username", { required: true })}
        />
        <Input
          placeholder="Email"
          type="email"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          {...register("email", {
            required: true,
            validate: {
              matchPattern: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be valid",
            },
          })}
        />
        <Input
          placeholder="Password"
          type="password"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          {...register("password", { required: true })}
        />
        <Input
          label="Avatar"
          type="file"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          {...register("avatar", { required: true })}
        />
        <Input
          label="Cover Image"
          type="file"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          {...register("coverImage", { required: true })}
        />
        <Button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignUp;