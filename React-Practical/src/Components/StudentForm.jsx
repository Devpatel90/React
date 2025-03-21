import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../feature/StudentSlice";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";

const StudentForm = () => {
  const [student, setStudent] = useState({ name: "", rollNumber: "", class: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudent(student));
    setStudent({ name: "", rollNumber: "", class: "" });
    navigate("/studentlist");
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Add Student</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={student.name}
              onChange={(e) => setStudent({ ...student, name: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Roll Number"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={student.rollNumber}
              onChange={(e) => setStudent({ ...student, rollNumber: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Class"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={student.class}
              onChange={(e) => setStudent({ ...student, class: e.target.value })}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              Add Student
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default StudentForm;
