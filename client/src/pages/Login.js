import {BrowserRouter, Routes, Route, useNavigate, createSearchParams, generatePath} from 'react-router-dom';
import React, {useState, useEffect} from "react"

function Login(){
    const navigate = useNavigate()
    const [user_name, setUser] = useState("")
    const [password, setPassword] = useState("")
    const handleClick = (event) => {
        // event.preventDefault()
        navigate(`/username/${user_name}/${password}`)
    }
    
    return(
        <div style={{textAlign: "center"}}>
            <h2 style={{marginTop: 300, color: "white"}}>Login</h2>
            <div>
            <input 
                type = "text" 
                value = {user_name} 
                onChange = {(e) => setUser(e.target.value)} 
                placeholder="user name" 
                style = {{marginBottom: 20, borderRadius: '50px', border: 'solid', borderColor: 'white', height: '30px', width: '300px', textAlign: 'center', background: 'none', color: 'white'}}></input>
            </div>
            <div>
                <input
                    type = "text"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    placeholder="password" 
                    style = {{marginBottom: 20, borderRadius: '50px', border: 'solid', borderColor: 'white', height: '30px', width: '300px', textAlign: 'center', background: 'none', color: 'white'}}></input>
            </div>
            <button type = 'button' className='user' onClick={handleClick} style={{height: '40px', width: '100px', borderRadius: '50px', border: 'none', fontSize: '17px', fontFamily: 'revert', color: '#02004C'}}>login</button>
        </div>
    )
}

export default Login