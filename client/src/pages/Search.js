import React, {useState, useEffect} from "react"
import {useParams} from 'react-router-dom';

function Search(){
  const params = useParams()

  const [data, setData] = useState("")
  const {input} = params

  useEffect(() => {
    fetch(`https://images-api.nasa.gov/search?q=${input}&media_type=image`)
      .then(res => res.json())
      .then(data => { 
        setData(data)
      })
  },[])

  if (data) {
    return (
      <div style={{display: "flex",justifyContent:"center"}}>
        <div style={{color: "white", alignItems:'center'}}>
          <h1>{data.collection.items[0].data[0].title}</h1>
          <img src={data.collection.items[0].links[0].href}/>
          <p>Description: {data.collection.items[0].data[0].description_508}</p>
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