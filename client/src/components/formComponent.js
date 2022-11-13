import { Component } from "react";

import StarsService from "../services/starsService";

class FormComponent extends Component {
    constructor(props) {
        super(props)
        this.starsService = new StarsService()
    }

    getStar = async () => {
        let input = document.getElementById("input").value
        let response = await this.starsService.getStar(input)

        document.getElementById("title").textContent = response.title

        let image = document.getElementById("image")
        image.setAttribute("src", response.image)

        document.getElementById("description").textContent = response.description

        console.log(response.description)
    }

    render() {
        return (
            <div id="div">
                <h1>Enter the Name of a Constellation:</h1>
                <input type="text" id="input"/> 
                <button onClick={this.getStar}>Submit</button>

                <h3 id="title"></h3>
                <img id="image"/>
                <p id="description"></p>
            </div>
        )
    }
}

export default FormComponent;