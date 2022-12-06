import React, {useState, useEffect} from "react"
import {useParams} from 'react-router-dom';
import {BrowserRouter, Routes, Route, useNavigate, createSearchParams, generatePath} from 'react-router-dom';
function Username(){
  const params = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState("")
  const {username, password} = params
  const handleClick = (event) => {
    // event.preventDefault()
    navigate(`/home`)
  }
  useEffect(() => {
    fetch(`http://localhost:5000/username/${username}/${password}`)
      .then(res => res.json())
      .then(data => { 
        setData(data)
      })
  },[])

  if (data == 'abc') {
    return (
      <div style={{textAlign:"center"}}>
        <div style={{color: "white"}}>
          <h1>Hello User</h1>
          <p>You are being registered automatically!!</p>
        </div>
        <button type='button' className='user' onClick={handleClick} style={{height: '40px', width: '100px', borderRadius: '50px', border: 'none', fontSize: '17px', fontFamily: 'revert', color: '#02004C'}}>continue</button>
      </div>
    )
  } 
  else {
    return (
        <div style={{textAlign:"center"}}>
        <div style={{color: "white"}}>
          <h1>Hello User</h1>
        </div>
        <button type='button' className='user' onClick={handleClick} style={{height: '40px', width: '100px', borderRadius: '50px', border: 'none', fontSize: '17px', fontFamily: 'revert', color: '#02004C'}}>continue</button>
      </div>
    )
  }

  // https://api.nasa.gov/planetary/apod?api_key=iCjqUCjeREgC5J8gcdt13divgZ14uDzN13TTIAXh
  // https://images-api.nasa.gov/search?q=${input}
}

export default Username