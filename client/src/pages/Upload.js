import React, {useState, useEffect} from "react"
import {useParams} from 'react-router-dom';



function Upload(){
  const params = useParams()

  const [data, setData] = useState("")
  const {input} = params

  useEffect(() => {
    fetch(`http://localhost:5000/uploadurl/${input}`)
      .then(res => res.json())
      .then(data => { 
        setData(data)
      })
  },[])

  if (data) {
    return (
      <div style={{textAlign:"center"}}>
        <div style={{color: "white"}}>
          <h1>{data}</h1>
        </div>
      </div>
    )
  } else {
    return null
  }

  // https://api.nasa.gov/planetary/apod?api_key=iCjqUCjeREgC5J8gcdt13divgZ14uDzN13TTIAXh
  // https://images-api.nasa.gov/search?q=${input}
}

export default Upload