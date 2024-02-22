import React from 'react'
import Form from './Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StudentTable from './StudentTable'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/student" element={<StudentTable/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
