import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudents, deleteStudent, updateStudent } from "../feature/StudentSlice";
import Navbar from "./Navbar";

const StudentList = () => {
  const dispatch = useDispatch();
  const { students, loading } = useSelector((state) => state.students);
  
  const [editStudent, setEditStudent] = useState(null);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const handleUpdate = () => {
    dispatch(updateStudent(editStudent));
    setEditStudent(null);
  };

  return (
    <>
    <Navbar/>
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Student List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Roll Number</th>
              <th className="border border-gray-300 px-4 py-2">Class</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                <td className="border border-gray-300 px-4 py-2">{student.rollNumber}</td>
                <td className="border border-gray-300 px-4 py-2">{student.class}</td>
                <td className="border border-gray-300 px-4 py-2 space-x-2">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                    onClick={() => setEditStudent(student)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => dispatch(deleteStudent(student.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {editStudent && (
        <div className="mt-6 p-4 border border-gray-300 rounded">
          <h3 className="text-xl font-semibold">Edit Student</h3>
          <input
            type="text"
            className="block border p-2 my-2 w-full"
            value={editStudent.name}
            onChange={(e) => setEditStudent({ ...editStudent, name: e.target.value })}
            placeholder="Name"
          />
          <input
            type="text"
            className="block border p-2 my-2 w-full"
            value={editStudent.rollNumber}
            onChange={(e) => setEditStudent({ ...editStudent, rollNumber: e.target.value })}
            placeholder="Roll Number"
          />
          <input
            type="text"
            className="block border p-2 my-2 w-full"
            value={editStudent.class}
            onChange={(e) => setEditStudent({ ...editStudent, class: e.target.value })}
            placeholder="Class"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleUpdate}>
            Update
          </button>
          <button className="ml-2 bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setEditStudent(null)}>
            Cancel
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default StudentList;
