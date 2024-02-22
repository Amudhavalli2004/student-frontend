import './App.css'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Form() {
  const [regno, setRegno] = useState('')
  const [name, setName] = useState('')
  const [dob, setDob] = useState('')
  const [gender, setGender] = useState('')
  const [dept, setDept] = useState('')
  const [year, setYear] = useState(0)
  const [residence, setResidence] = useState('')
  const [address, setAddress] = useState('')
  const [student, setStudent] = useState([])
  const [table, setTable] = useState(false)

  const addStudent = (e) => {
    e.preventDefault()
    console.log('hello')
    axios
      .post('/createstudent', {
        regno: regno,
        name: name,
        dob: dob,
        gender: gender,
        dept: dept,
        year: year,
        residence: residence,
        address: address,
      })
      .then(() => {
        console.log('success')
      })
    setStudent([
      {
        regno: regno,
        name: name,
        dob: dob,
        gender: gender,
        dept: dept,
        year: year,
        residence: residence,
        address: address,
      },
    ])
    setTable(true)
    setRegno('')
    setName('')
    setDob('')
    setGender('')
    setDept('')
    setYear('')
    setResidence('')
    setAddress('')
  }
  const navigate = useNavigate()
  const getStudent = () => {
    navigate('/student')
  }

  return (
    <div className="App">
      <h1 className="heading">Student Registration</h1>
      <div className="flex">
        <div className="container">
          <div className="form">
            <div>
              <label>Register No</label>
              <input
                onChange={(e) => {
                  setRegno(e.target.value)
                }}
                type="number"
                className="regno"
                value={regno}
                min={210421001001}
                max={210421999999}
                placeholder="Format : 210421XXXXXX"
              />
              <br></br>

              <label>Name</label>
              <input
                onChange={(e) => {
                  setName(e.target.value)
                }}
                type="text"
                className="name"
                value={name}
              />
              <br></br>
              <label>Date of Birth</label>
              <input
                type="date"
                onChange={(e) => {
                  setDob(e.target.value)
                }}
                className="age"
                value={dob}
              />
              <br></br>
              <label>Gender</label>
              <select
                onChange={(e) => {
                  setGender(e.target.value)
                }}
                value={gender}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <br></br>
              <label>Department</label>
              <select onChange={(e) => setDept(e.target.value)} value={dept}>
                <option value="">Select</option>
                <option value="CSE">CSE</option>
                <option value="AIDS">AIDS</option>
                <option value="CSBS">CSBS</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
              </select>
              <br></br>
              <label>YEAR</label>
              <select onChange={(e) => setYear(e.target.value)} value={year}>
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <br></br>
              <label>Residence</label>
              <select
                onChange={(e) => setResidence(e.target.value)}
                value={residence}
              >
                <option value="">Select</option>
                <option value="Dayscholar">Dayscholar</option>
                <option value="Hosteller">Hosteller</option>
              </select>
              <br></br>
              <label>Address</label>
              <input
                type="text"
                onChange={(e) => {
                  setAddress(e.target.value)
                }}
                className="wage"
                value={address}
              />
              <br></br>
            </div>
          </div>
          <button onClick={addStudent}>ADD STUDENT</button>
          <Link to="/student">
            <button>Show all students</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Form
