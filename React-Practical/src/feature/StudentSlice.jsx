import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://localhost:3000/students";

export const fetchStudents = createAsyncThunk("students/fetch", async () => {
  const response = await axios.get(api);
  return response.data;
});

export const addStudent = createAsyncThunk("students/add", async (student) => {
  const response = await axios.post(api, student);
  return response.data;
});

export const deleteStudent = createAsyncThunk("students/delete", async (id) => {
  await axios.delete(`${api}/${id}`);
  return id;
});

export const updateStudent = createAsyncThunk("students/updateStudent", async (updatedStudent) => {
  const response = await fetch(`http://localhost:3000/students/${updatedStudent.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedStudent),
  });
  return response.json();
});

const studentSlice = createSlice({
  name: "students",
  initialState: { students: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.students = action.payload;
        state.loading = false;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.students.push(action.payload);
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.students = state.students.filter((student) => student.id !== action.payload);
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        state.students = state.students.map(student =>
          student.id === action.payload.id ? action.payload : student
        );
      });
  },
});

export default studentSlice.reducer;


