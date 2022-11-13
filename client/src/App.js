import React, {useState, useEffect} from "react"
import ReactDOM from 'react-dom/client'
import {Routes, Route, useNavigate} from 'react-router-dom';
import background from './img/background.png'

function App(){
  // const state = {
  //   input: ''
  // }
  const [input, setName] = useState("")
  const navigate = useNavigate()
  const handleClick = (event) => {
    // this.setState({input:{input}})
    event.preventDefault()
    navigate('/search', {input: input})
    console.log({input})
    // console.log('string: ', state.input)
    alert(`https://images-api.nasa.gov/search?q=${input}`)
  }
  
  // backgroundImage: `url(${background})`
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
      <Routes>
        <Route path = '/search' element = {<Search/>} />
      </Routes>
    </div>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App

function Search({route, navigation}){
  const [data, setData] = useState([])
  const {input} = route.params 
  console.log({data})
  console.log('input: ', {input})
  useEffect(() => {
    fetch(`https://images-api.nasa.gov/search?q=${input}&media_type=image`)
      .then(res => res.json())
      .then(data => {setData(data)})
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <h1 style = {{color: 'white'}}>hi</h1>
      <img src={data.collection.items[0].href}></img>
    </div>
    // <div className="App" style = {{position: 'absolute', top: '100px'}}>
    //   <h1>{data.title}</h1>
    //   <img src={data.hdurl} style = {{width: '800px', height: 'auto'}}></img>
    //   <p>{data.explanation}</p>
    // </div>
  )
  // https://api.nasa.gov/planetary/apod?api_key=iCjqUCjeREgC5J8gcdt13divgZ14uDzN13TTIAXh
  // https://images-api.nasa.gov/search?q=${input}
}