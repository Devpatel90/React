import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Signin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Please fill in both fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/dashboard");
      toast.success("Login Successfully!");
    } catch (error) {
      toast.error("Email or password does not match...!");
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100">
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className="flex w-full max-w-md flex-col bg-white rounded-2xl shadow-xl p-8"
      >
        <h1 className="text-center mb-6 text-3xl font-bold text-gray-700">
          Sign In
        </h1>
        <div className="flex flex-col gap-5">
          <TextField
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            className="w-full"
            size="small"
            sx={{
              "& .MuiInputLabel-root": { fontSize: "1rem" },
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            className="w-full"
            size="small"
            sx={{
              "& .MuiInputLabel-root": { fontSize: "1rem" },
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition duration-200 text-white text-lg font-semibold py-3 rounded-lg w-full"
          >
            Sign In
          </button>
        </div>
        <h1 className="text-center mt-5 text-gray-600">
          Don't have an account? 
          <Link className="text-blue-600 hover:underline ml-1" to="/signup">
            Create Account
          </Link>
        </h1>
      </Box>
    </div>
  );
}

export default Signin;
