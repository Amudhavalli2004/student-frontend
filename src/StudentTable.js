import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const StudentTable = () => {
    const [student, setStudent] = useState([])

    useEffect(() => {
      getStudent()
    }, []) 

    const getStudent = () => {
      axios
        .get('/getstudent')
        .then((response) => {
          console.log(response.data)
          setStudent(response.data)
        })
        .catch((err) => {
          console.error(err)
        })
    }

    const handleDelete = (regno) => {
      axios
        .delete(`/deletestudent/${regno}`)
        .then(() => {
          console.log('Student deleted successfully')
          setStudent(student.filter((item) => item.regno !== regno))
        })
        .catch((err) => console.error(err))
    }
  return (
    <div className='student'>
      <h1>STUDENT DETAILS</h1>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Reg No</th>
              <th>Name</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Year</th>
              <th>Residence</th>
              <th>Address</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {student.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.regno}</td>
                  <td>{val.name}</td>
                  <td>{val.dob}</td>
                  <td>{val.gender}</td>
                  <td>{val.dept}</td>
                  <td>{val.year}</td>
                  <td>{val.residence}</td>
                  <td>{val.address}</td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(val.regno)}
                      className="delbtn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div>
        <Link to="/">
          <button className="tablebtn">Register</button>
        </Link>
      </div>
    </div>
  )
}

export default StudentTable