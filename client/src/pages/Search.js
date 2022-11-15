import React, {useState, useEffect} from "react"
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, useNavigate, useLocation, useSearchParams} from 'react-router-dom';
import background from '../img/background.png'
import Home from "./Home";

import { Component } from "react";



class Search extends Component {
    constructor(props) {
      super(props)
      console.log(props)
    }

    render() {
      return (
          <div id="div">
            <h1>test</h1>
          </div>
      )
    }
}

function Searchs({route}){
  route = useSearchParams()
  console.log(this.props.match.params)
  // const [data, setData] = useState([])
  // const {input} = route.params 
  // console.log({data})
  // console.log('input: ', {input})
  // useEffect(() => {
  //   fetch(`https://images-api.nasa.gov/search?q=${input}&media_type=image`)
  //     .then(res => res.json())
  //     .then(data => 
  //        { 
  //         setData(data)})
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }, [])

  // // fetch(`https://images-api.nasa.gov/search?q=${input}&media_type=image`)
  // // .then(res => res.json())
  // // .then(data => con{setData(data)})
  // // .catch(err => {
  // //   console.log(err)
  // // })
  // // useEffect(() => {

  // // }, [])

  // return (
  //   <div>
  //     <h1 style = {{color: 'white'}}>hi</h1>
  //     <img src={data.collection.items[0].links[0].href}></img>
  //   </div>
  //   // <div className="App" style = {{position: 'absolute', top: '100px'}}>
  //   //   <h1>{data.title}</h1>
  //   //   <img src={data.hdurl} style = {{width: '800px', height: 'auto'}}></img>
  //   //   <p>{data.explanation}</p>
  //   // </div>
  // )
  // // https://api.nasa.gov/planetary/apod?api_key=iCjqUCjeREgC5J8gcdt13divgZ14uDzN13TTIAXh
  // // https://images-api.nasa.gov/search?q=${input}
}

export default Search