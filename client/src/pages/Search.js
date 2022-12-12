import React, {useState, useEffect} from "react"
import {useParams} from 'react-router-dom';

function Search(){
  const params = useParams()

  const [data, setData] = useState("")
  const {input} = params

  useEffect(() => {
    fetch(`http://localhost:5000/search/${input}`)
      .then(res => res.json())
      .then(data => { 
        setData(data)
      })
  },[])

  if (data) {
    return (
      <div style={{textAlign:"center"}}>
        <div style={{color: "white"}}>
          <h1>{data.title}</h1>
          <img src={data.href}/>
          <p>Description: {data.description}</p>
        </div>
      </div>
    )
  } else {
    return null
  }

  // https://api.nasa.gov/planetary/apod?api_key=iCjqUCjeREgC5J8gcdt13divgZ14uDzN13TTIAXh
  // https://images-api.nasa.gov/search?q=${input}
}

export default Search