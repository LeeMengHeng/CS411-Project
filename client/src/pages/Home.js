import React, {useState, useEffect} from "react"
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, useNavigate, createSearchParams, generatePath} from 'react-router-dom';
import background from '../img/background.png'
import Search from "./Search";

function Home() {
  const [input, setName] = useState("")
  const navigate = useNavigate()
  const handleClick = (event) => {
    // event.preventDefault()
    navigate(`/search/${input}`)
  }

    return (
      <div>
        <label style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '53rem'}}>
          <input
            type = "text" 
            value = {input}
            onChange = {(e) => setName(e.target.value)}
            style = {{borderRadius: '50px', border: 'solid', borderColor: 'white', height: '30px', width: '300px', textAlign: 'center', background: 'none', color: 'white'}}
            placeholder = 'start exploring here...'
          />
          <button type = 'button' onClick = {handleClick} style = {{position: 'absolute', top: '470px', height: '40px', width: '100px', borderRadius: '50px', border: 'none', fontSize: '17px', fontFamily: 'revert', color: '#02004C'}}>Explore</button>
        </label>
      </div>
    )
}

export default Home