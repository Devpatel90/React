import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Signup() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      await setDoc(doc(db, "Users", res.user.uid), { name: formData.username, email: formData.email });
      toast.success("Registration successfully!");
      navigate("/signin");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email is already in use. Please try another email.");
      } else if (error.code === "auth/weak-password") {
        toast.error("Password is too weak. Please use a stronger password.");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email format. Please enter a valid email.");
      } else {
        toast.error("An error occurred: " + error.message);
      }
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
        <h1 className="text-center mb-6 text-3xl font-bold text-gray-700">Sign Up</h1>
        <div className="flex flex-col gap-5">
          <TextField
            label="Username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            name="username"
            className="w-full"
            size="small"
            sx={{
              "& .MuiInputLabel-root": { fontSize: "1rem" },
              "& .MuiOutlinedInput-root": { borderRadius: "10px" },
            }}
          />
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
              "& .MuiOutlinedInput-root": { borderRadius: "10px" },
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
              "& .MuiOutlinedInput-root": { borderRadius: "10px" },
            }}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition duration-200 text-white text-lg font-semibold py-3 rounded-lg w-full"
          >
            Sign Up
          </button>
        </div>
        <h1 className="text-center mt-5 text-gray-600">
          Already have an account?
          <Link className="text-blue-600 hover:underline ml-1" to="/signin">
            Login here
          </Link>
        </h1>
      </Box>
    </div>
  );
}

export default Signup;