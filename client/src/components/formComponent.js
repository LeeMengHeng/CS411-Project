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
        let image = document.getElementById("image")
        image.setAttribute("src", response)
    }

    render() {
        return (
            <div id="div">
                <h1>Enter the Name of a Constellation:</h1>
                <input type="text" id="input"/> 
                <button onClick={this.getStar}>Submit</button>

                <img id="image"/>
            </div>
        )
    }
}

export default FormComponent;