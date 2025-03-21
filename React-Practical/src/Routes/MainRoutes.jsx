import React from 'react'
import StudentList from '../Components/StudentList'
import StudentForm from '../Components/StudentForm'
import { Routes, Route } from 'react-router';
import Home from '../Pages/Home';



export default function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/studentlist" element={<StudentList />} />
        <Route path="/studentform" element={<StudentForm />} />
      </Routes>
    </>
  )
}

