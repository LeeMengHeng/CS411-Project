import {BrowserRouter, Routes, Route, useNavigate, createSearchParams, generatePath} from 'react-router-dom';

function Login(){
    const navigate = useNavigate()
    const handleClick = (event) => {
        // event.preventDefault()
        navigate(`/home`)
    }
    return(
        <div style={{textAlign: "center"}}>
            <h2 style={{marginTop: 300, color: "white"}}>Login</h2>
            <div>
            <input placeholder="user name" style = {{marginBottom: 20, borderRadius: '50px', border: 'solid', borderColor: 'white', height: '30px', width: '300px', textAlign: 'center', background: 'none', color: 'white'}}></input>
            </div>
            <div>
                <input placeholder="password" style = {{marginBottom: 20, borderRadius: '50px', border: 'solid', borderColor: 'white', height: '30px', width: '300px', textAlign: 'center', background: 'none', color: 'white'}}></input>
            </div>
            <button id="userSubmit" onClick={handleClick} style = {{height: '40px', width: '100px', borderRadius: '50px', border: 'none', fontSize: '17px', fontFamily: 'revert', color: '#02004C'}}>login</button>
        </div>
    )
}

export default Login