import React, {useState} from "react"
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, useNavigate, createSearchParams, generatePath} from 'react-router-dom';
import background from '../img/background.png'
import Search from "./Search";

function parser(theurl){
  return theurl.replaceAll('/','$%$')
}

function Home() {
  const [input, setName] = useState("")
  const [input_url, setName1] = useState("")
  const navigate = useNavigate()
  const handleClick = (event) => {
    // event.preventDefault()
    navigate(`/search/${input}`)
  }
  const handleClick2 = (event1) => {
    // event.preventDefault()
    navigate(`/uploadurl/${parser(input_url)}`)
  }

  return (
    <div>
      <label style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '45rem'}}>
        <input
          type = "text" 
          value = {input}
          onChange = {(e) => setName(e.target.value)}
          style = {{borderRadius: '50px', border: 'solid', borderColor: 'white', height: '30px', width: '300px', textAlign: 'center', background: 'none', color: 'white'}}
          placeholder = 'start exploring here...'
        />
        <input
          type = "text" 
          value = {input_url}
          onChange = {(e) => setName1(e.target.value)}
          style = {{borderRadius: '50px', border: 'solid', borderColor: 'white', height: '30px', width: '300px', textAlign: 'center', background: 'none', color: 'white'}}
          placeholder = 'URL'
        />
        
        <button className = 'explore' type = 'button' onClick = {handleClick} style = {{position: 'absolute', top: '400px', height: '40px', width: '100px', borderRadius: '50px', border: 'none', fontSize: '17px', fontFamily: 'revert', color: '#02004C'}}>Explore</button>
        <button className = 'upload' type = 'button' onClick = {handleClick2} style = {{position: 'absolute', top: '450px', height: '40px', width: '100px', borderRadius: '50px', border: 'none', fontSize: '17px', fontFamily: 'revert', color: '#02004C'}}>upload</button>
        
      </label>
    </div>
  )
}

export default Home